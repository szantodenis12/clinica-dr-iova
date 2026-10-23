import "@/styles/programare.css";
import "@/styles/mobile.css"; // always last
import { buildMetadata } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import BookingFlow from "@/components/programare/BookingFlow";

const route = getRoute("/programare/");
export const metadata = buildMetadata({ title: route.title, description: route.description, path: route.path });

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Programare online la Clinica Dr. Iova",
  url: "https://clinicadriova.ro/programare/",
  isPartOf: { "@id": "https://clinicadriova.ro/#clinica" },
  potentialAction: { "@type": "ReserveAction", target: "https://clinicadriova.ro/programare/", name: "Cerere de programare" },
};

export default function ProgramarePage() {
  return (
    <>
      <Breadcrumbs items={[["Programare", "/programare/"]]} />
      <JsonLd data={schema} />
      <BookingFlow />
    </>
  );
}
