"use client";

/** Footer "Setări cookie-uri" button: asks <CookieConsent> to open its preferences panel. */
export default function CookieSettingsButton() {
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
