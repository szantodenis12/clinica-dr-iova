"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Icon from "./Icon";

const LINKS = [
  ["/", "Acasă"],
  ["/servicii/", "Servicii"],
  ["/medici/", "Medici"],
  ["/cas/", "Programare CAS"],
  ["/blog/", "Articole"],
  ["/despre/", "Clinica"],
  ["/contact/", "Contact"],
] as const;

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  // menu is open only for the path it was opened on => closes automatically on navigation
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`} aria-label="Navigare principală">
      <Link className="logo" href="/">
        <img src="/img/logo-driova-icon.png" alt="" />
        Clinica Dr. Iova
      </Link>
      <ul>
        {LINKS.map(([href, label]) => {
          const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <li key={href}>
              <Link href={href} data-nav={href} className={active ? "is-active" : undefined}>
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
      <Link className="btn btn-dark" href="/programare/">
        Programare
      </Link>
      <button
        className="nav-burger"
        aria-label="Meniu"
        aria-expanded={open}
        onClick={() => setOpenPath(open ? null : pathname)}
      >
        <Icon name="menu" />
      </button>
    </nav>
  );
}
