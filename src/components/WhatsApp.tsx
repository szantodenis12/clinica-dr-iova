"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Icon, { type IconName } from "./Icon";
import { waLink } from "@/lib/whatsapp";

const INTENTS: { icon: IconName; label: string; msg: string }[] = [
  {
    icon: "calendar-plus",
    label: "Vreau o programare",
    msg: "Bună ziua. Aș dori o programare la Clinica Dr. Iova. Vă rog să îmi spuneți ce intervale sunt disponibile.",
  },
  {
    icon: "file-text",
    label: "Întrebare despre programarea prin CAS",
    msg: "Bună ziua. Am o întrebare despre programarea prin CAS, cu bilet de trimitere, la Clinica Dr. Iova.",
  },
  {
    icon: "calendar-sync",
    label: "Vreau să reprogramez",
    msg: "Bună ziua. Aș dori să reprogramez o programare existentă la Clinica Dr. Iova. Numărul cererii: ",
  },
];

/** Floating WhatsApp button + panel (port of whatsapp.js). Not rendered on /admin/. */
export default function WhatsApp() {
  const pathname = usePathname();
  const hidden = pathname.startsWith("/admin");
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(false);
  const fab = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const openRef = useRef(false);

  useEffect(() => {
    openRef.current = open;
    if (open) {
      const first = panel.current?.querySelector("a");
      const t = setTimeout(() => first?.focus(), 60);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    if (hidden) return;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = setTimeout(() => setShown(true), reduce ? 0 : 2600);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && openRef.current) {
        setOpen(false);
        fab.current?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      const n = e.target as Node;
      if (openRef.current && !panel.current?.contains(n) && !fab.current?.contains(n)) setOpen(false);
    };
    const onToggle = () => setOpen((v) => !v); // fired by the mobile bottom bar
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    document.addEventListener("driova:wa-toggle", onToggle);
    return () => {
      clearTimeout(t);
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
      document.removeEventListener("driova:wa-toggle", onToggle);
    };
  }, [hidden]);

  if (hidden) return null;
  return (
    <>
      <div className={`wa-panel${open ? " is-open" : ""}`} id="wa-panel" role="dialog" aria-label="WhatsApp Clinica Dr. Iova" ref={panel}>
        <div className="wa-head">
          <h3>Scrieți-ne pe WhatsApp</h3>
          <p>Răspundem în programul recepției, luni–vineri 08:00–20:00.</p>
        </div>
        <div className="wa-body">
          {INTENTS.map((i) => (
            <a key={i.label} href={waLink(i.msg)} target="_blank" rel="noopener">
              <Icon name={i.icon} />
              <span>{i.label}</span>
              <Icon name="arrow-up-right" className="go" />
            </a>
          ))}
          <p className="wa-note">
            Vă rugăm să nu trimiteți pe WhatsApp detalii medicale. Folosiți-l pentru programări și întrebări de organizare.
          </p>
          <p className="wa-hours">
            <Icon name="phone" />
            Telefon recepție:{" "}
            <a href="tel:+40359450657" style={{ display: "inline", padding: 0, border: 0, margin: 0 }}>
              0359 450 657
            </a>
          </p>
          <span className="todo">număr WhatsApp: de cerut de la client</span>
        </div>
      </div>
      <button
        ref={fab}
        className={`wa-fab${shown ? " is-shown" : ""}`}
        type="button"
        aria-label="Scrieți-ne pe WhatsApp"
        aria-expanded={open}
        aria-controls="wa-panel"
        onClick={() => setOpen((v) => !v)}
      >
        <Icon name="message-circle" className="wa-ic" />
        <Icon name="x" className="wa-x" />
        <span className="wa-dot" aria-hidden="true"></span>
      </button>
    </>
  );
}
