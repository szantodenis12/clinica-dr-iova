"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Icon from "./Icon";

const KEY = "driova_consent_v1";

type Consent = { necessary: boolean; analytics: boolean; marketing: boolean; date?: string; version?: number };

declare global {
  interface Window {
    DRIOVA_CONSENT?: Consent;
  }
}

/**
 * Cookie consent (port of base.js). Necessary always on; analytics + marketing only after explicit consent.
 * Stored in localStorage 'driova_consent_v1'; window.DRIOVA_CONSENT and the `driova:consent` document event
 * expose it to tag loaders. Not rendered on /admin/.
 */
export default function CookieConsent() {
  const pathname = usePathname();
  const hidden = pathname.startsWith("/admin");
  const [open, setOpen] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [saveLabel, setSaveLabel] = useState(false); // "Setări" -> "Salvează"
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const saved = useRef(false);

  useEffect(() => {
    if (hidden) return;
    let s: Consent | null = null;
    try {
      s = JSON.parse(localStorage.getItem(KEY) || "null");
    } catch {}
    saved.current = !!s;
    window.DRIOVA_CONSENT = s || { necessary: true, analytics: false, marketing: false };
    const sync = () => {
      setAnalytics(!!window.DRIOVA_CONSENT?.analytics);
      setMarketing(!!window.DRIOVA_CONSENT?.marketing);
    };
    const openPrefs = () => {
      sync();
      setSaveLabel(true);
      setShowPrefs(true);
      setOpen(true);
    };
    document.addEventListener("driova:open-cookie-settings", openPrefs);
    const t = setTimeout(() => {
      if (!saved.current) {
        sync();
        setOpen(true);
        setShowPrefs(false);
      }
    }, 900);
    return () => {
      clearTimeout(t);
      document.removeEventListener("driova:open-cookie-settings", openPrefs);
    };
  }, [hidden]);

  const save = (c: { analytics: boolean; marketing: boolean }) => {
    const full: Consent = { ...c, necessary: true, date: new Date().toISOString(), version: 1 };
    window.DRIOVA_CONSENT = full;
    saved.current = true;
    try {
      localStorage.setItem(KEY, JSON.stringify(full));
    } catch {}
    document.dispatchEvent(new CustomEvent("driova:consent", { detail: full }));
    setOpen(false);
    setShowPrefs(false);
  };

  if (hidden) return null;
  return (
    <div className={`ck${open ? " is-open" : ""}${showPrefs ? " show-prefs" : ""}`} role="dialog" aria-label="Setări cookie-uri">
      <h3>
        <Icon name="cookie" />
        Cookie-uri pe acest site
      </h3>
      <p>
        Folosim cookie-uri necesare pentru funcționarea site-ului. Cu acordul dumneavoastră, folosim și cookie-uri de măsurare, ca să vedem
        ce pagini sunt utile. Nu folosim cookie-uri de marketing pe paginile despre afecțiuni. Detalii în{" "}
        <a href="/cookies/">Politica de cookie-uri</a>.
      </p>
      <div className="prefs">
        <div className="opt">
          <div>
            <b>Necesare</b>
            <small>Navigare, formularul de programare, preferințele de cookie-uri. Mereu active.</small>
          </div>
          <label className="sw">
            <input type="checkbox" checked disabled readOnly aria-label="Cookie-uri necesare" />
            <span></span>
          </label>
        </div>
        <div className="opt">
          <div>
            <b>Măsurare</b>
            <small>Statistici anonimizate despre vizite (de exemplu Google Analytics).</small>
          </div>
          <label className="sw">
            <input type="checkbox" checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} aria-label="Cookie-uri de măsurare" />
            <span></span>
          </label>
        </div>
        <div className="opt">
          <div>
            <b>Marketing</b>
            <small>Măsurarea campaniilor (de exemplu Meta, Google Ads). Nu se încarcă pe paginile despre afecțiuni.</small>
          </div>
          <label className="sw">
            <input type="checkbox" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} aria-label="Cookie-uri de marketing" />
            <span></span>
          </label>
        </div>
      </div>
      <div className="row">
        <button type="button" onClick={() => save({ analytics: false, marketing: false })}>
          Doar necesare
        </button>
        <button
          type="button"
          onClick={() => {
            if (!showPrefs) {
              setShowPrefs(true);
              setSaveLabel(true);
            } else save({ analytics, marketing });
          }}
        >
          {saveLabel ? "Salvează" : "Setări"}
        </button>
        <button type="button" className="acc" onClick={() => save({ analytics: true, marketing: true })}>
          Accept toate
        </button>
      </div>
    </div>
  );
}
