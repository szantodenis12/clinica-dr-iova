import type { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/site";
import { isDemo } from "@/lib/site-mode";

export default function robots(): MetadataRoute.Robots {
  if (isDemo) return { rules: { userAgent: "*", disallow: "/" } }; // demo: no indexing, no sitemap
  return {
    rules: { userAgent: "*", disallow: "/admin/" },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
