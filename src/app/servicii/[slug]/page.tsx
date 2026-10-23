import { notFound } from "next/navigation";
import "@/styles/servicii.css";
import "@/styles/mobile.css"; // always last
import { buildMetadata } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import { servicii } from "@/data/servicii";
import ServiceTemplate from "@/components/servicii/ServiceTemplate";

export const dynamicParams = false;

export function generateStaticParams() {
  return servicii.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = servicii.find((x) => x.slug === slug);
  if (!s) notFound();
  const path = `/servicii/${slug}/`;
  const route = getRoute(path);
  return buildMetadata({
    title: route.title,
    description: route.description,
    path,
    ogImage: s.ogImage,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = servicii.find((x) => x.slug === slug);
  if (!s) notFound();
  return <ServiceTemplate s={s} />;
}
