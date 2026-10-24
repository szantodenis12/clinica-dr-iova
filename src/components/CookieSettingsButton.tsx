"use client";

import { isDemo } from "@/lib/site-mode";

/** Footer "Setări cookie-uri" button: asks <CookieConsent> to open its preferences panel. */
export default function CookieSettingsButton() {
  if (isDemo) return null; // demo has no cookie banner / settings
  return (
    <button
      type="button"
      data-cookie-settings
      onClick={() => document.dispatchEvent(new CustomEvent("driova:open-cookie-settings"))}
    >
      Setări cookie-uri
    </button>
  );
}
