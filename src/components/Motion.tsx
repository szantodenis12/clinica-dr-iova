"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Shared scroll motion (port of the "shared motion" block of base.js). Renders nothing; works on DOM attributes,
 * so page JSX just uses the same attributes as the original HTML:
 *   [data-reveal]="" | fade | left | right | scale | mask   -> adds `.is-in` when scrolled into view
 *   [data-stagger]                                          -> children get --i and data-reveal
 *   [data-parallax="0.15"]                                  -> translateY with scroll
 *   [data-count="500"] [data-suffix=",0"]                   -> counts up when visible
 * Re-runs on every route change (so new pages are picked up).
 */
export default function Motion() {
  const pathname = usePathname();
  useEffect(() => {
    const cleanups: (() => void)[] = [];
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

    document.querySelectorAll<HTMLElement>("[data-stagger]").forEach((p) => {
      Array.from(p.children).forEach((c, i) => {
        const el = c as HTMLElement;
        el.style.setProperty("--i", String(i));
        if (!el.hasAttribute("data-reveal")) el.setAttribute("data-reveal", p.dataset.stagger || "");
      });
    });

    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("is-in"));
    } else {
      // mask reveals are clip-path'ed to zero area, so observe their parent instead
      const map = new Map<Element, HTMLElement[]>();
      const io = new IntersectionObserver(
        (en) => {
          en.forEach((e) => {
            if (e.isIntersecting) {
              const t = e.target as HTMLElement;
              (map.get(t) || []).concat(t.hasAttribute("data-reveal") ? [t] : []).forEach((x) => x.classList.add("is-in"));
              io.unobserve(t);
            }
          });
        },
        { rootMargin: "0px 0px -6% 0px", threshold: 0 }, // threshold 0: tall elements / mask parents must still fire
      );
      els.forEach((e) => {
        const t = e.dataset.reveal === "mask" && e.parentElement ? e.parentElement : e;
        if (t !== e) map.set(t, (map.get(t) || []).concat(e));
        io.observe(t);
      });
      cleanups.push(() => io.disconnect());
    }

    document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
      const end = parseFloat(el.dataset.count || "0");
      const suf = el.dataset.suffix || "";
      let done = false;
      const run = () => {
        if (done) return;
        done = true;
        if (reduce) {
          el.textContent = end + suf;
          return;
        }
        const t0 = performance.now();
        const d = 1600;
        const f = (t: number) => {
          const k = Math.min(1, (t - t0) / d);
          const e = 1 - Math.pow(1 - k, 3);
          el.textContent = Math.round(end * e) + suf;
          if (k < 1) requestAnimationFrame(f);
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
      cleanups.push(() => io.disconnect());
    });

    const px = document.querySelectorAll<HTMLElement>("[data-parallax]");
    if (px.length && !reduce) {
      const tick = () =>
        px.forEach((el) => {
          const r = el.getBoundingClientRect();
          const c = r.top + r.height / 2 - innerHeight / 2;
          el.style.transform = `translate3d(0,${(-c * parseFloat(el.dataset.parallax || ".12")).toFixed(1)}px,0)`;
        });
      const onScroll = () => requestAnimationFrame(tick);
      addEventListener("scroll", onScroll, { passive: true });
      tick();
      cleanups.push(() => removeEventListener("scroll", onScroll));
    }

    return () => cleanups.forEach((c) => c());
  }, [pathname]);
  return null;
}
