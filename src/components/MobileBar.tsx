"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Icon from "./Icon";

/** Mobile bottom bar. On the homepage it only appears after scrolling 260px (CSS `.page-home .mbar:not(.is-on)`). */
export default function MobileBar() {
  const isHome = usePathname() === "/";
  const [on, setOn] = useState(false);
  useEffect(() => {
    if (!isHome) return;
    const f = () => setOn(window.scrollY > 260);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, [isHome]);
  return (
    <div className={`mbar${isHome && on ? " is-on" : ""}`} aria-label="Acțiuni rapide">
      <button
        type="button"
        className="mb-wa"
        data-wa-open
        aria-label="Scrieți-ne pe WhatsApp"
        onClick={(e) => {
          e.stopPropagation();
          document.dispatchEvent(new CustomEvent("driova:wa-toggle"));
        }}
      >
        <Icon name="message-circle" />
      </button>
      <a className="mb-tel" href="tel:+40359450657">
        <Icon name="phone" />
        Sunați
      </a>
      <Link className="mb-book" href="/programare/">
        <Icon name="calendar" />
        Programare
      </Link>
    </div>
  );
}
