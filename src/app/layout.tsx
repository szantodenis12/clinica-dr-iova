import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "@/styles/base.css";
import "@/styles/whatsapp.css";
// NOTE: mobile.css is NOT imported here. It must come AFTER each page's own CSS, so every page.tsx imports
// its page css first and "@/styles/mobile.css" last (see NOTES-PORTING.md).
import SiteShell from "@/components/SiteShell";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";
import WhatsApp from "@/components/WhatsApp";
import CookieConsent from "@/components/CookieConsent";
import Motion from "@/components/Motion";
import JsonLd from "@/components/JsonLd";
import { BASE_URL, ORG_SCHEMA, SITE_NAME } from "@/lib/site";

const interTight = Inter_Tight({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-inter-tight",
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: { absolute: SITE_NAME },
  icons: { icon: "/img/logo-driova-icon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={interTight.variable}>
      <head>
        <JsonLd data={ORG_SCHEMA} />
      </head>
      <body>
        <SiteShell>
          <Nav />
          <main id="continut">{children}</main>
          <Footer />
          <MobileBar />
          <WhatsApp />
          <CookieConsent />
          <Motion />
        </SiteShell>
      </body>
    </html>
  );
}
