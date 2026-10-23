import type { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", disallow: "/admin/" },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
