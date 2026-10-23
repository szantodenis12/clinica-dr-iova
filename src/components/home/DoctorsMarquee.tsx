"use client";

import { useEffect, useRef } from "react";

/**
 * Homepage doctors "marquee" (port of home.js marquee). Renders `.marq > .marq-track > children`.
 * `children` must contain the cards TWICE (originals + `.is-clone` copies, aria-hidden) for the seamless loop;
 * `count` = number of ORIGINAL cards. One card slides left every 3s, then resets via the clones.
 */
export default function DoctorsMarquee({ children, count }: { children: React.ReactNode; count: number }) {
  const marq = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const m = marq.current;
    const tr = track.current;
    if (!m || !tr) return;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: (() => void)[] = [];
    let idx = 0;

    if (!reduce) {
      const first = tr.firstElementChild as HTMLElement;
      const stepW = () => {
        const z = parseFloat(getComputedStyle(document.documentElement).zoom) || 1;
        return first.getBoundingClientRect().width / z + parseFloat(getComputedStyle(tr).columnGap || "14");
      };
      const go = () => {
        if (m.matches(":focus-within") || document.hidden) return;
        idx++;
        tr.classList.add("is-sliding");
        tr.style.transform = `translate3d(${-idx * stepW()}px,0,0)`;
      };
      const onEnd = (e: TransitionEvent) => {
        if (e.target !== tr || idx < count) return;
        tr.classList.remove("is-sliding");
        idx = 0;
        tr.style.transform = "translate3d(0,0,0)";
      };
      const onResize = () => {
        tr.classList.remove("is-sliding");
        tr.style.transform = `translate3d(${-idx * stepW()}px,0,0)`;
      };
      tr.addEventListener("transitionend", onEnd);
      const iv = setInterval(go, 3000);
      addEventListener("resize", onResize);
      cleanups.push(() => {
        tr.removeEventListener("transitionend", onEnd);
        clearInterval(iv);
        removeEventListener("resize", onResize);
        tr.classList.remove("is-sliding");
        tr.style.transform = "";
      });
    }

    // keyboard: keep the focused card visible (marquee pauses via :focus-within check above)
    const onFocusIn = (e: FocusEvent) => {
      const card = (e.target as HTMLElement).closest(".dcard");
      if (card) card.scrollIntoView({ block: "nearest", inline: "center", behavior: reduce ? "auto" : "smooth" });
    };
    tr.addEventListener("focusin", onFocusIn);
    cleanups.push(() => tr.removeEventListener("focusin", onFocusIn));
    return () => cleanups.forEach((c) => c());
  }, [count]);

  return (
    <div className="marq" data-reveal="fade" ref={marq}>
      <div className="marq-track" ref={track}>
        {children}
      </div>
    </div>
  );
}
