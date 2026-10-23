/**
 * Class(es) of the page wrapper (replaces the original <body class="...">; see SiteShell).
 * Derived from the pathname so it is correct in server HTML (no flash) and needs no per-page config.
 * Original default: "page-inner"; homepage "page-home"; programare "page-inner page-programare".
 * To add a class for another page, add a rule here.
 */
export function bodyClassFor(pathname: string): string {
  if (pathname === "/") return "page-home";
  if (pathname.startsWith("/admin")) return "page-admin";
  if (pathname.startsWith("/programare")) return "page-inner page-programare";
  return "page-inner";
}
