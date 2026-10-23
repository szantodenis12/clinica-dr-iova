"use client";

import { useEffect } from "react";

/**
 * Port of the inline script of /medici/: category filter buttons (.md-filters button[data-filter])
 * toggling .is-hidden on .md-card[data-cat] inside #mdGrid. Markup stays server-rendered.
 */
export default function MediciFilter() {
  useEffect(() => {
    const btns = Array.from(document.querySelectorAll<HTMLButtonElement>(".md-filters button"));
    const grid = document.getElementById("mdGrid");
    if (!grid) return;
    const cards = Array.from(grid.querySelectorAll<HTMLElement>(".md-card"));
    const handlers = btns.map((b) => {
      const h = () => {
        btns.forEach((x) => x.classList.remove("is-on"));
        b.classList.add("is-on");
        const f = b.dataset.filter;
        let n = 0;
        cards.forEach((c) => {
          const on = f === "all" || (" " + c.dataset.cat + " ").indexOf(" " + f + " ") > -1;
          c.classList.toggle("is-hidden", !on);
          if (on) {
            n++;
            c.classList.remove("is-in");
            c.style.setProperty("--i", String(n - 1));
            void c.offsetWidth;
            c.classList.add("is-in");
          }
        });
        grid.classList.toggle("is-empty", n === 0);
      };
      b.addEventListener("click", h);
      return h;
    });
    return () => btns.forEach((b, i) => b.removeEventListener("click", handlers[i]));
  }, []);
  return null;
}
