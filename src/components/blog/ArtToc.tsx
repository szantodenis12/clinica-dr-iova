"use client";

import { useEffect, useState, type ReactNode } from "react";

type Item = { id: string; text: string };

/**
 * Article sidebar: auto-generated table of contents (h2[id] of .art-body, except those inside
 * .surse / .art-faq) with scroll-spy. `children` = the quick-links block (.tools), rendered on the server.
 */
export default function ArtToc({ children }: { children?: ReactNode }) {
  const [items, setItems] = useState<Item[]>([]);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const body = document.querySelector(".art-body");
    if (!body) return;
    const hs = Array.from(body.querySelectorAll<HTMLElement>("h2[id]")).filter((h) => !h.closest(".surse") && !h.closest(".art-faq"));
    // headings only exist in the DOM after mount (the original script also built the list client-side)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setItems(hs.map((h) => ({ id: h.id, text: h.textContent ?? "" })));
    if (!("IntersectionObserver" in window) || !hs.length) return;
    let cur: string | null = null;
    const io = new IntersectionObserver(
      (en) => {
        en.forEach((e) => {
          if (e.isIntersecting) cur = (e.target as HTMLElement).id;
        });
        if (cur) setActive(cur);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 },
    );
    hs.forEach((h) => io.observe(h));
    return () => io.disconnect();
  }, []);

  return (
    <aside className="art-toc" data-reveal="fade">
      <div className="lbl">Cuprins</div>
      <ol>
        {items.map((it) => (
          <li key={it.id}>
            <a href={"#" + it.id} className={active === it.id ? "is-active" : undefined}>
              {it.text}
            </a>
          </li>
        ))}
      </ol>
      {children}
    </aside>
  );
}
