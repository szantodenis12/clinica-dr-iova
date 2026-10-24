import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isDemo, DEMO_PATHS } from "@/lib/site-mode";

/**
 * Demo mode (NEXT_PUBLIC_SITE_MODE=demo): only the pages in DEMO_PATHS exist, everything else is a 404
 * (including /admin/, /sitemap.xml, /llms.txt). One place that covers static pages, dynamic segments and
 * route handlers. Full mode: pass-through. Assets (/img, /fonts, /_next) are excluded by the matcher.
 */
export function proxy(request: NextRequest) {
  if (!isDemo) return NextResponse.next();
  const { pathname } = request.nextUrl;
  const path = pathname.endsWith("/") ? pathname : pathname + "/"; // trailingSlash: true
  if (DEMO_PATHS.includes(path) || pathname === "/robots.txt") return NextResponse.next();
  // rewrite to a path that has no route => the standard Next 404 page, status 404
  return NextResponse.rewrite(new URL("/demo-not-available/", request.url));
}

export const config = {
  matcher: ["/((?!_next/|img/|fonts/|favicon\.ico$).*)"],
};
