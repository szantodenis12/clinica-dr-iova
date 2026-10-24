/**
 * Build-time site mode. NEXT_PUBLIC_SITE_MODE = "demo" | "full" (anything else = "full").
 * Next inlines NEXT_PUBLIC_* at build time, so this is a constant on server AND client (no hydration drift).
 * Default values live in `.env` (committed, "demo" so a zero-config Vercel deploy is the demo) and are
 * overridden locally by `.env.local` (gitignored, "full"). See README.md.
 */
export const isDemo = process.env.NEXT_PUBLIC_SITE_MODE === "demo";

/** The only pages that exist in demo mode (mirrors KEEP in clinica-dr-iova-site/build_demo.py). */
export const DEMO_PATHS: readonly string[] = ["/", "/medici/sorin-iova/", "/programare/"];

/** Demo nav menu (Acasă / Dr. Sorin Iova / Programare online), same labels as build_demo.py. */
export const DEMO_NAV: readonly (readonly [href: string, label: string])[] = [
  ["/", "Acasă"],
  ["/medici/sorin-iova/", "Dr. Sorin Iova"],
  ["/programare/", "Programare online"],
];

/** Port of allowed() in build_demo.py: is this href still valid in the demo? (never looks at the mode itself) */
export function demoAllows(href: string | undefined | null): boolean {
  if (!href || !href.startsWith("/") || href.startsWith("//")) return true; // external, tel:, mailto:, "#x"
  if (href.startsWith("/img/") || href.startsWith("/assets/")) return true;
  const path = href.split("#")[0].split("?")[0] || "/";
  if (path === "/" && href.includes("#")) return true; // in-page anchors on the homepage
  return DEMO_PATHS.includes(path);
}

/** True when a link to `href` should be rendered: always in full mode, only kept pages in demo. */
export function linkAllowed(href: string | undefined | null): boolean {
  return !isDemo || demoAllows(href);
}
