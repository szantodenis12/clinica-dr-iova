"use client";

import { createContext, useContext, useEffect, useRef, useSyncExternalStore, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { REDUCED_MOTION_QUERY, getLenis, scrollToTarget, setLenis, subscribeLenis } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

const LenisContext = createContext<Lenis | null>(null);

/** The live Lenis instance (null when smooth scroll is off). Prefer `scrollToTarget()` from lib/motion for scrolling. */
export function useLenis() {
  return useContext(LenisContext);
}

const subscribeReduced = (cb: () => void) => {
  const mq = window.matchMedia(REDUCED_MOTION_QUERY);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};

/**
 * Touch-first devices (phones, tablets, and Chrome DevTools mobile emulation) keep pure native scroll.
 * Lenis only smooths the wheel, which is useless on touch, and in DevTools emulation (devicePixelRatio > 1)
 * the emulated wheel `deltaY` arrives divided by the DPR, so Lenis crawled at 1/3 speed on a 3x phone profile.
 * Either signal is enough (some Android phones report `hover: hover` or `pointer: fine`), and any touch screen up
 * to tablet width also counts; desktops (fine pointer + hover, wider than 1024px) keep Lenis.
 */
const COARSE_QUERY = "(hover: none), (pointer: coarse), (any-pointer: coarse) and (max-width: 1024px)";
const subscribeCoarse = (cb: () => void) => {
  const mq = window.matchMedia(COARSE_QUERY);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};

/** Find the element a hash points to ("#ce-este", "#recenzii"). */
function hashTarget(hash: string) {
  const id = decodeURIComponent(hash.replace(/^#/, ""));
  return id ? document.getElementById(id) : null;
}

/**
 * Global smooth scroll (root layout). House setup shared with merci-bistro / constructii-marcut:
 *  - Lenis lerp 0.075 (merci), wheel only; touch / coarse-pointer devices skip Lenis entirely (native scroll)
 *  - driven by the GSAP ticker, `lenis.on("scroll", ScrollTrigger.update)`, lagSmoothing(0)
 *  - same-page anchor links go through Lenis with the fixed-nav offset (marcut), cross-page hashes are
 *    resolved after the new page paints
 *  - route change: jump to top (merci), except back/forward and hash targets
 *  - off for prefers-reduced-motion and for /admin* (its own scroll areas, drawers, popovers)
 */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");
  const reduced = useSyncExternalStore(subscribeReduced, () => window.matchMedia(REDUCED_MOTION_QUERY).matches, () => true);
  const coarse = useSyncExternalStore(subscribeCoarse, () => window.matchMedia(COARSE_QUERY).matches, () => false);
  const enabled = !isAdmin && !reduced && !coarse;
  const lenis = useSyncExternalStore(subscribeLenis, getLenis, () => null);

  useEffect(() => {
    if (!enabled) return;
    const l = new Lenis({ lerp: 0.075, smoothWheel: true, autoResize: true });
    setLenis(l);
    l.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => l.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    ScrollTrigger.refresh();
    if (process.env.NODE_ENV !== "production") Object.assign(window, { __lenis: l, __ScrollTrigger: ScrollTrigger }); // dev-only debugging
    return () => {
      gsap.ticker.remove(tick);
      l.destroy();
      setLenis(null);
      gsap.ticker.lagSmoothing(500, 33); // GSAP default
    };
  }, [enabled]);

  // Same-page anchor links (#id, /#id, /path/#id on that path) -> smooth scroll with the nav offset.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as HTMLElement | null)?.closest?.<HTMLAnchorElement>('a[href*="#"]');
      if (!a || (a.target && a.target !== "_self") || a.hasAttribute("download")) return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname !== window.location.pathname || url.search !== window.location.search) return;
      if (!url.hash || url.hash === "#") return;
      const target = hashTarget(url.hash);
      if (!target) return;
      e.preventDefault();
      if (window.location.hash !== url.hash) history.pushState(history.state, "", url.hash);
      scrollToTarget(target);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // Back / forward: let the browser / Next restore the position instead of forcing the top.
  const popRef = useRef(false);
  useEffect(() => {
    let t = 0;
    const onPop = () => {
      popRef.current = true;
      // a hash-only back step does not change the pathname: forget the flag shortly after
      window.clearTimeout(t);
      t = window.setTimeout(() => (popRef.current = false), 400);
    };
    window.addEventListener("popstate", onPop);
    return () => {
      window.removeEventListener("popstate", onPop);
      window.clearTimeout(t);
    };
  }, []);

  // Route change (and first load with a hash): top of page, or the hash target once the page has painted.
  const firstRef = useRef(true);
  useEffect(() => {
    const first = firstRef.current;
    firstRef.current = false;
    const pop = popRef.current;
    popRef.current = false;
    let raf = 0;
    let t = 0;
    if (window.location.hash) {
      // wait for layout (images, Motion's split headings) before measuring the target
      t = window.setTimeout(() => {
        const target = hashTarget(window.location.hash);
        if (target) scrollToTarget(target, { immediate: first });
      }, first ? 120 : 60);
    } else if (!first && !pop) {
      getLenis()?.scrollTo(0, { immediate: true, force: true });
    }
    raf = requestAnimationFrame(() => {
      raf = requestAnimationFrame(() => {
        getLenis()?.resize();
        ScrollTrigger.refresh();
      });
    });
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(t);
    };
  }, [pathname]);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}
