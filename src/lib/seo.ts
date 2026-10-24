import type { Metadata } from "next";
import { BASE_URL, DEFAULT_OG_IMAGE, SITE_NAME } from "./site";
import { isDemo } from "./site-mode";

type Opts = {
  title: string;
  description: string;
  /** URL path with leading and trailing slash, e.g. "/servicii/logopedie/" */
  path: string;
  /** root-relative image path, default /img/about-hero.jpg */
  ogImage?: string;
  noindex?: boolean;
};

/**
 * Metadata equivalent to the <head> block of layout.html: title, description, canonical,
 * og:* (type website, locale ro_RO, site_name). `title.absolute` is used so the root layout
 * template never appends anything (original titles are already complete).
 */
export function buildMetadata({ title, description, path, ogImage = DEFAULT_OG_IMAGE, noindex }: Opts): Metadata {
  const url = BASE_URL + path;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "ro_RO",
      siteName: SITE_NAME,
      title,
      description,
      url,
      images: [{ url: BASE_URL + ogImage }],
    },
    // demo: noindex, nofollow everywhere (a page-level `robots` replaces the root one, so it is set here too)
    ...(isDemo ? { robots: { index: false, follow: false } } : noindex ? { robots: { index: false, follow: true } } : {}),
  };
}
