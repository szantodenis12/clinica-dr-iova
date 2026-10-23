"use client";

import { useEffect, useRef } from "react";

/** Reading-progress bar (port of the progress part of assets/js/blog.js). */
export default function ArtProgress() {
  const bar = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const body = document.querySelector(".art-body");
    const el = bar.current;
    if (!body || !el) return;
    const upd = () => {
      const r = body.getBoundingClientRect();
      const h = r.height - window.innerHeight;
      const p = h > 0 ? Math.min(1, Math.max(0, -r.top / h)) : 1;
      el.style.width = (p * 100).toFixed(1) + "%";
    };
    const onScroll = () => requestAnimationFrame(upd);
    window.addEventListener("scroll", onScroll, { passive: true });
    upd();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="art-progress" aria-hidden="true">
      <span ref={bar}></span>
    </div>
  );
}
