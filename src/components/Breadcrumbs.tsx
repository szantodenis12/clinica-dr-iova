import Link from "next/link";
import JsonLd from "./JsonLd";
import { BASE_URL } from "@/lib/site";

type Crumb = [label: string, path: string];

/**
 * Same markup as build.py breadcrumb(): <nav class="crumbs"><ol>…</ol></nav> + BreadcrumbList JSON-LD.
 * "Acasă" is prepended automatically. Pass the meta `breadcrumb` array, e.g.
 * <Breadcrumbs items={[["Servicii","/servicii/"],["Logopedie","/servicii/logopedie/"]]} />
 * Render it as the FIRST child of the page (it sits directly inside <main>).
 */
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [["Acasă", "/"], ...items];
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map(([name, p], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: BASE_URL + p,
    })),
  };
  return (
    <>
      <nav className="crumbs" aria-label="Breadcrumb">
        <ol>
          {all.map(([label, p], i) =>
            i < all.length - 1 ? (
              <li key={p}>
                <Link href={p}>{label}</Link>
              </li>
            ) : (
              <li key={p} aria-current="page">
                {label}
              </li>
            ),
          )}
        </ol>
      </nav>
      <JsonLd data={schema} />
    </>
  );
}
