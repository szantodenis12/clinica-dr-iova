"use client";

import { useState } from "react";
import { BLOG_CATEGORIES } from "@/data/blog";

/**
 * Category filter bar of /blog/ (port of the filters part of assets/js/blog.js).
 * The cards are server-rendered (.bgrid .bcard[data-cat]); like the original we only toggle classes on them,
 * because Motion.tsx also manages classes (is-in) on those same nodes.
 */
export default function BlogFilters({ total }: { total: number }) {
  const [active, setActive] = useState("all");
  const [count, setCount] = useState(total);

  const select = (c: string) => {
    setActive(c);
    let n = 0;
    document.querySelectorAll<HTMLElement>(".bgrid .bcard").forEach((card) => {
      const show = c === "all" || card.dataset.cat === c;
      card.classList.toggle("is-hidden", !show);
      if (show) {
        n++;
        card.classList.remove("is-in");
        requestAnimationFrame(() => card.classList.add("is-in"));
      }
    });
    setCount(n);
  };

  return (
    <div className="blog-filters" data-reveal="fade" role="group" aria-label="Filtrați articolele">
      <button className={active === "all" ? "is-active" : undefined} data-filter="all" onClick={() => select("all")}>
        Toate
      </button>
      {BLOG_CATEGORIES.map((c) => (
        <button key={c.key} className={active === c.key ? "is-active" : undefined} data-filter={c.key} onClick={() => select(c.key)}>
          {c.label}
        </button>
      ))}
      <span className="count">{count + (count === 1 ? " articol" : " articole")}</span>
    </div>
  );
}
