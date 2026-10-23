import type { MetadataRoute } from "next";
import { routes } from "@/lib/routes";
import { BASE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.filter((r) => !r.noindex).map((r) => ({ url: BASE_URL + r.path }));
}
