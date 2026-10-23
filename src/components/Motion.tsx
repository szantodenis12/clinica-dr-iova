"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { zoomFactor } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger, SplitText);
ScrollTrigger.config({ ignoreMobileResize: true });

/**
 * Shared scroll motion. Renders nothing; works on DOM attributes, so pages stay declarative and
 * server-rendered. Re-initialised on every route change; everything it creates is undone in the cleanup.
 *
 * Reveals (one-shot, IntersectionObserver + CSS transitions in base.css):
 *   data-reveal="" | fade | left | right | scale | mask | rise   -> `.is-in` when scrolled into view
 *   data-reveal="lines"     heading: lines rise from behind a mask (GSAP SplitText, constructii-marcut SplitReveal)
 *   data-stagger="[kind]"   children get --i (transition delay) and data-reveal="[kind]"
 *   data-count="500" data-suffix=",0"   count-up when visible
 *
 * Depth (GSAP ScrollTrigger, scrubbed; Lenis provides the smoothing on desktop):
 *   data-parallax="0.15"        translate Y with scroll, relative to its root (positive = lags behind / further
 *                               away, negative = moves faster / closer). Root = closest [data-parallax-root], else parent.
 *   data-parallax-root="top"    on a root that starts at the top of the page (hero): layers start at 0 and
 *                               travel `speed * rootHeight` until the root has left the viewport
 *   data-parallax-fade="0.3"    (with a "top" root) opacity eases to this value as the root leaves
 *   data-parallax-prop="--wm"   write the offset into this CSS custom property instead of `translate`
 *                               (for pseudo-elements, e.g. the CTA band watermark)
 *   data-parallax-img="5"       image inside an overflow-hidden frame (its parent): scale 1.12 and drift
 *                               ±5% inside the frame, plus a soft zoom-settle when the frame enters
 *
 * Offsets use the independent CSS `translate` property, so they compose with any CSS/GSAP `transform`
 * (reveal transitions, hover lifts, the hero entrance) instead of fighting over it.
 * Desktop with a fine pointer: full effect. Touch / <768px: native scroll and half-strength depth.
 * Reduced motion (or JS off): no hidden states, no parallax, everything visible.
 */
const FULL = "(prefers-reduced-motion: no-preference) and (min-width: 768px) and (hover: hover) and (pointer: fine)";
const MOTION = "(prefers-reduced-motion: no-preference)";

export default function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("motion-ready"); // cancels the boot script's no-JS safety timeout
    const anim = root.classList.contains("has-anim") && matchMedia(MOTION).matches;
    const cleanups: (() => void)[] = [];

    // ---------------- stagger -> per-child reveal ----------------
    document.querySelectorAll<HTMLElement>("[data-stagger]").forEach((p) => {
      Array.from(p.children).forEach((c, i) => {
        const el = c as HTMLElement;
        el.style.setProperty("--i", String(i));
        if (!el.hasAttribute("data-reveal")) el.setAttribute("data-reveal", p.dataset.stagger || "");
      });
    });

    // ---------------- reveals ----------------
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!anim || !("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("is-in"));
    } else {
      // mask reveals are clip-path'ed to zero area, so observe their parent instead
      const map = new Map<Element, HTMLElement[]>();
      const io = new IntersectionObserver(
        (en) => {
          en.forEach((e) => {
            if (!e.isIntersecting) return;
            const t = e.target as HTMLElement;
            (map.get(t) || []).forEach((x) => x.classList.add("is-in"));
            io.unobserve(t);
          });
        },
        { rootMargin: "0px 0px -6% 0px", threshold: 0 }, // threshold 0: tall elements / mask parents must still fire
      );
      els.forEach((e) => {
        if (e.classList.contains("is-in") || e.dataset.reveal === "lines") return; // lines: SplitText below
        const p = e.parentElement;
        // mask: clipped to zero area -> parent. Items of a horizontal swipe row (.track, .gal, mobile rows):
        // the off-screen ones would never intersect -> the row reveals them together (stagger still applies).
        const t = p && (e.dataset.reveal === "mask" || /auto|scroll/.test(getComputedStyle(p).overflowX)) ? p : e;
        map.set(t, (map.get(t) || []).concat(e));
        io.observe(t);
      });
      cleanups.push(() => io.disconnect());
    }

    // ---------------- count-up ----------------
    document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
      const end = parseFloat(el.dataset.count || "0");
      const suf = el.dataset.suffix || "";
      if (!anim) {
        el.textContent = end + suf;
        return;
      }
      let raf = 0;
      const run = () => {
        const t0 = performance.now();
        const f = (t: number) => {
          const k = Math.min(1, (t - t0) / 1600);
          el.textContent = Math.round(end * (1 - Math.pow(1 - k, 3))) + suf;
          if (k < 1) raf = requestAnimationFrame(f);
        };
        f(t0);
      };
      const io = new IntersectionObserver((en, o) => {
        if (en[0].isIntersecting) {
          run();
          o.disconnect();
        }
      });
      io.observe(el);
      cleanups.push(() => {
        io.disconnect();
        cancelAnimationFrame(raf);
        el.textContent = end + suf;
      });
    });

    // ---------------- GSAP: headings, parallax, framed images ----------------
    const mm = gsap.matchMedia();
    if (anim) {
      mm.add({ full: FULL, motion: MOTION }, (ctx) => {
        const { full, motion } = ctx.conditions as { full: boolean; motion: boolean };
        if (!motion) return;
        const k = full ? 1 : 0.5; // touch / small screens: half-strength depth
        const undo: (() => void)[] = [];

        // headings: lines rise from behind a mask
        document.querySelectorAll<HTMLElement>('[data-reveal="lines"]').forEach((el) => {
          const split = SplitText.create(el, {
            type: "lines",
            mask: "lines",
            linesClass: "rl",
            autoSplit: true,
            onSplit(self) {
              el.classList.add("is-in");
              return gsap.from(self.lines, {
                yPercent: 110,
                duration: 1.1,
                ease: "expo.out",
                stagger: 0.08,
                scrollTrigger: { trigger: el, start: "top 90%", once: true },
              });
            },
          });
          undo.push(() => split.revert());
        });

        // free parallax layers
        document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
          const speed = parseFloat(el.dataset.parallax || "") * k;
          if (!Number.isFinite(speed) || !speed) return;
          const prop = el.dataset.parallaxProp;
          // a CSS-variable layer moves a pseudo-element of `el` itself, so `el` is its own root
          const rootEl = prop ? el : (el.parentElement?.closest<HTMLElement>("[data-parallax-root]") ?? el.parentElement ?? el);
          const fromTop = rootEl !== el && rootEl.dataset.parallaxRoot === "top";
          const fade = parseFloat(el.dataset.parallaxFade || "");
          const fades = fromTop && Number.isFinite(fade);
          let h = 0;
          let vh = 0;
          const apply = (p: number) => {
            const y = fromTop ? speed * h * p : speed * ((vh + h) / 2) * (2 * p - 1);
            if (prop) el.style.setProperty(prop, `${y.toFixed(1)}px`);
            else el.style.translate = `0 ${y.toFixed(1)}px`;
            if (fades) el.style.opacity = (1 - (1 - fade) * p).toFixed(3);
          };
          const st = ScrollTrigger.create({
            trigger: rootEl,
            start: fromTop ? "top top" : "top bottom",
            end: "bottom top",
            onRefresh: (self) => {
              h = rootEl.offsetHeight; // layout px (unzoomed), same space as `translate`
              vh = window.innerHeight / zoomFactor();
              apply(self.progress);
            },
            onUpdate: (self) => apply(self.progress),
            onToggle: (self) => {
              if (!prop) el.style.willChange = self.isActive ? "translate" : "";
            },
          });
          undo.push(() => {
            st.kill();
            if (prop) el.style.removeProperty(prop);
            el.style.translate = "";
            el.style.willChange = "";
            if (fades) el.style.opacity = "";
          });
        });

        // image inside an overflow-hidden frame (merci-bistro: scale + drift that stays inside the overscan)
        document.querySelectorAll<HTMLElement>("[data-parallax-img]").forEach((el) => {
          const frame = el.parentElement;
          if (!frame) return;
          const travel = (parseFloat(el.dataset.parallaxImg || "") || 5) * (full ? 1 : 0.6);
          const scale = full ? 1.12 : 1.08; // drift stays covered while travel% <= (scale - 1) / 2
          // zoom-settle on entry (merci data-zoom / marcut RevealImage), then rest at `scale`.
          // Tweened through a proxy: GSAP would otherwise take over the element's transform and pin the
          // independent `scale`/`translate` properties to `none` (breaking the CSS hover zooms and the drift).
          const z = { s: scale + 0.08 };
          const setScale = () => {
            el.style.transform = `scale(${z.s.toFixed(4)})`;
          };
          setScale();
          gsap.to(z, {
            s: scale,
            duration: 1.6,
            ease: "power2.out",
            onUpdate: setScale,
            scrollTrigger: { trigger: frame, start: "top 92%", once: true },
          });
          const apply = (p: number) => {
            el.style.translate = `0 ${(travel * (2 * p - 1)).toFixed(2)}%`;
          };
          const st = ScrollTrigger.create({
            trigger: frame,
            start: "top bottom",
            end: "bottom top",
            onRefresh: (self) => apply(self.progress),
            onUpdate: (self) => apply(self.progress),
            onToggle: (self) => {
              el.style.willChange = self.isActive ? "translate, transform" : "";
            },
          });
          undo.push(() => {
            st.kill();
            el.style.translate = "";
            el.style.transform = "";
            el.style.willChange = "";
          });
        });

        return () => undo.forEach((f) => f());
      });
    }
    cleanups.push(() => mm.revert());

    // ---------------- keep trigger positions right while the page settles ----------------
    let to = 0;
    const refresh = () => {
      window.clearTimeout(to);
      to = window.setTimeout(() => ScrollTrigger.refresh(), 120);
    };
    const pending = Array.from(document.querySelectorAll<HTMLImageElement>("#continut img")).filter((i) => !i.complete);
    pending.forEach((i) => i.addEventListener("load", refresh, { once: true }));
    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh);
    const raf = requestAnimationFrame(() => ScrollTrigger.refresh());
    cleanups.push(() => {
      cancelAnimationFrame(raf);
      window.clearTimeout(to);
      window.removeEventListener("load", refresh);
      pending.forEach((i) => i.removeEventListener("load", refresh));
    });

    return () => cleanups.forEach((c) => c());
  }, [pathname]);

  return null;
}
