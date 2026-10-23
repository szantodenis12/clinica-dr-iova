"use client";

/**
 * In-content "Setări cookie-uri" button (cookie policy page). Same behaviour as the footer
 * CookieSettingsButton, but carries the `linkbtn` class of the original text link.
 */
export default function CookieSettingsLink() {
  return (
    <button
      type="button"
      data-cookie-settings
      className="linkbtn"
      onClick={() => document.dispatchEvent(new CustomEvent("driova:open-cookie-settings"))}
    >
      Setări cookie-uri
    </button>
  );
}
