export const BASE_URL = "https://clinicadriova.ro";
export const SITE_NAME = "Clinica Dr. Iova";
export const DEFAULT_OG_IMAGE = "/img/about-hero.jpg";

/** Organization JSON-LD (port of ORG in build.py). Rendered once in the root layout. */
export const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["MedicalClinic", "MedicalBusiness"],
  "@id": BASE_URL + "/#clinica",
  name: "Clinica Dr. Iova",
  legalName: "Cabinete de Psihiatrie Dr. Iova S.R.L.",
  url: BASE_URL + "/",
  logo: BASE_URL + "/img/logo-driova.png",
  image: BASE_URL + "/img/about-hero.jpg",
  telephone: "+40359450657",
  email: "receptie@clinicadriova.ro",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Str. Ceyrat nr. 31, bl. WR12",
    addressLocality: "Oradea",
    addressRegion: "Bihor",
    addressCountry: "RO",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "20:00",
    },
  ],
  medicalSpecialty: ["Psychiatric", "Pediatric", "Neurologic"],
  areaServed: "Oradea, Bihor",
  taxID: "46237987",
};
