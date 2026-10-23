"use client";

import { useEffect, useRef } from "react";

/** Footer wordmark: soft blur crossfade CLINICA <-> DR. IOVA while the footer is visible (port of base.js). */
export default function FooterWordmark() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const w = ref.current;
    if (!w || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let t: ReturnType<typeof setTimeout> | undefined;
    const cycle = () => {
      const c = w.classList.toggle("show-1");
      t = setTimeout(cycle, c ? 2800 : 5200);
    };
    const io = new IntersectionObserver(
      (en) => {
        clearTimeout(t);
        if (en[0].isIntersecting) {
          w.classList.add("show-1");
          t = setTimeout(cycle, 2200);
        } else w.classList.remove("show-1");
      },
      { threshold: 0.3 },
    );
    io.observe(w);
    return () => {
      clearTimeout(t);
      io.disconnect();
    };
  }, []);
  return (
    <div ref={ref} className="word wordx" role="img" aria-label="Clinica Dr. Iova">
      <span className="w1" aria-hidden="true">Clinica</span>
      <span className="w2" aria-hidden="true">Dr. Iova<em>.</em></span>
    </div>
  );
}
