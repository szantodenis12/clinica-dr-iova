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
import SmoothScroll from "@/components/motion/SmoothScroll";
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

/**
 * Runs before first paint: `has-anim` turns on the CSS hidden states of the reveal system only when JS runs
 * and the visitor has not asked for reduced motion (progressive enhancement, as in merci-bistro). If the app
 * never boots (`motion-ready` is set by <Motion />), the class is dropped again so no content stays hidden.
 */
const bootScript = `(function(){try{var d=document.documentElement;if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;d.classList.add('has-anim');setTimeout(function(){if(!d.classList.contains('motion-ready'))d.classList.remove('has-anim')},4000)}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={interTight.variable} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
        <JsonLd data={ORG_SCHEMA} />
      </head>
      <body>
        <SmoothScroll>
        <SiteShell>
          <Nav />
          <main id="continut">{children}</main>
          <Footer />
          <MobileBar />
          <WhatsApp />
          <CookieConsent />
          <Motion />
        </SiteShell>
        </SmoothScroll>
      </body>
    </html>
  );
}
