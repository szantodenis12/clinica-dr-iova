import { notFound } from "next/navigation";
import "@/styles/medici.css";
import "@/styles/mobile.css"; // always last
import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import DoctorPage from "@/components/medici/DoctorPage";
import { BASE_URL } from "@/lib/site";
import { FAQS, doctorSlugs, getDoctor, richText } from "@/data/medici";

export const dynamicParams = false;

export function generateStaticParams() {
  return doctorSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = getDoctor(slug);
  if (!d) notFound();
  return buildMetadata({ title: d.metaTitle, description: d.metaDescription, path: `/medici/${slug}/`, ogImage: `/img/trim/${slug}.png` });
}

export default async function DoctorRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = getDoctor(slug);
  if (!d) notFound();

  const url = `${BASE_URL}/medici/${d.slug}/`;
  const person: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": d.typ,
    "@id": `${url}#medic`,
    name: d.full,
    givenName: d.given,
    familyName: d.family,
    honorificPrefix: d.pre,
    jobTitle: d.title,
    url,
    image: `${BASE_URL}/img/${d.slug}.png`,
    worksFor: { "@id": `${BASE_URL}/#clinica` },
    knowsLanguage: ["ro"],
  };
  if (d.spec) person.medicalSpecialty = d.spec;
  if (d.slug === "sorin-iova") {
    person.affiliation = [
      { "@type": "CollegeOrUniversity", name: "Universitatea din Oradea, Facultatea de Medicină și Farmacie" },
      { "@type": "Hospital", name: "Spitalul Clinic Județean de Urgență Bihor" },
    ];
    person.hasCredential = {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "doctorat",
      name: "Tulburări psihice în scleroza multiplă",
    };
  }
  if (d.typ === "Person") person.hasOccupation = { "@type": "Occupation", name: "Psiholog clinician" };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS[d.kind].map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: richText(a) },
    })),
  };

  return (
    <>
      <Breadcrumbs items={[["Medici", "/medici/"], [d.h1, `/medici/${d.slug}/`]]} />
      <JsonLd data={person} />
      <JsonLd data={faqSchema} />
      <DoctorPage d={d} />
    </>
  );
}
