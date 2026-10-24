import type { MetadataRoute } from "next";
import { routes } from "@/lib/routes";
import { BASE_URL } from "@/lib/site";
import { isDemo } from "@/lib/site-mode";

export default function sitemap(): MetadataRoute.Sitemap {
  if (isDemo) return []; // demo: proxy.ts answers 404 anyway
  return routes.filter((r) => !r.noindex).map((r) => ({ url: BASE_URL + r.path }));
}
