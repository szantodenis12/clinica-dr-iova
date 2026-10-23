import "@/styles/info.css";
import "@/styles/mobile.css"; // always last
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import Icon from "@/components/Icon";

const route = getRoute("/despre/");

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
  ogImage: "/img/about-hero.jpg",
});

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Despre Clinica Dr. Iova",
  url: "https://clinicadriova.ro/despre/",
  inLanguage: "ro",
  mainEntity: { "@id": "https://clinicadriova.ro/#clinica" },
  description:
    "Clinică privată de psihiatrie, neurologie, psihologie clinică și logopedie din Oradea, fondată în 2023 de Șef lucr. Dr. Claudiu Sorin Iova.",
};

export default function DesprePage() {
  return (
    <>
      <Breadcrumbs items={[["Despre clinică", "/despre/"]]} />
      <JsonLd data={aboutSchema} />

      <header className="about-hero">
        <div>
          <div className="kicker" data-reveal="fade">Despre clinică</div>
          <h1 data-reveal="lines">
            Trei generații.
            <br />
            Nevoi diferite.
            <br />
            O singură clinică.
          </h1>
        </div>
        <div className="row">
          <p className="intro" data-reveal="">
            Clinica Dr. Iova este o clinică privată din Oradea, deschisă în 2023 și mutată în 2025 într-un spațiu nou, pe Str. Ceyrat nr. 31. Aici reunim specialiști în psihiatria copilului și a adultului, neurologie, psihologie clinică și logopedie. Clinica are contract cu CAS Bihor: cu bilet de trimitere, consultațiile sunt gratuite.
          </p>
          <div className="facts" data-reveal="left">
            <div>
              <b>
                <span data-count="500" data-suffix="+">0</span>
              </b>
              <span>Pacienți consultați lunar</span>
            </div>
            <div>
              <b>
                <span data-count="400" data-suffix="+">0</span>
              </b>
              <span>Evaluări psihologice lunar</span>
            </div>
            <div>
              <b>2023</b>
              <span>Anul deschiderii</span>
            </div>
          </div>
        </div>
      </header>

      <div className="about-photo">
        <div className="img" data-reveal="mask">
          <img
            src="/img/about-hero.jpg"
            alt="Echipa Clinicii Dr. Iova, în fața peretelui verde de la recepție"
            data-parallax-img=""
          />
        </div>
      </div>

      <section className="story" style={{ padding: 0 }}>
        <div data-reveal="">
          <h2 className="h2">Cum a început și unde suntem acum</h2>
          <ol className="timeline" data-stagger="">
            <li>
              <b>2023</b>
              <span>
                Clinica se deschide în Oradea, pe Str. Ciheiului nr. 35, cu cabinete de psihiatrie. Fondatorul este Șef lucr. Dr. Claudiu Sorin Iova, medic primar psihiatru.
              </span>
            </li>
            <li>
              <b>2024</b>
              <span>
                Clinica apare în lista furnizorilor CNAS cu contract CAS Bihor (lista din 30.10.2024). Consultațiile cu bilet de trimitere devin gratuite pentru asigurați.
              </span>
            </li>
            <li>
              <b>2025</b>
              <span>Mutarea într-un spațiu nou, pe Str. Ceyrat nr. 31, bl. WR12: mai multe cabinete, recepție și sală de așteptare.</span>
            </li>
            <li>
              <b>2026</b>
              <span>
                Echipa crește: psihiatri pentru adulți și copii, neurolog, psihologi clinicieni, logoped. Alți medici și psihologi se alătură în curând.
              </span>
            </li>
          </ol>
        </div>
        <div className="prose" data-reveal="right">
          <p>
            Clinica a pornit de la o observație simplă din practica de spital: oamenii ajung la psihiatru târziu, de multe ori după ani în care au amânat, și ajung singuri, deși problemele de sănătate mintală rar privesc o singură persoană dintr-o familie.
          </p>
          <p>
            Răspunsul a fost o clinică în care drumul este scurt. Copilul vine la psihiatrul pediatru, la logoped sau la psiholog. Părintele vine la psihiatru sau la psihoterapie. Bunicul vine la neurolog și la psihiatru pentru memorie. Toate la aceeași recepție, cu medici care pot vorbi între ei în aceeași zi.
          </p>
          <p>
            Al doilea principiu a fost accesul. Clinica are contract cu CAS Bihor, iar consultațiile de specialitate sunt gratuite pe bază de bilet de trimitere. Cine nu are bilet sau nu poate aștepta, poate veni și în regim privat. Programul, de luni până vineri între 08:00 și 20:00, este gândit pentru oameni care lucrează.
          </p>
          <p>
            Astăzi, clinica consultă peste 500 de pacienți și realizează peste 400 de evaluări psihologice în fiecare lună. Numerele contează mai puțin decât ce stă în spatele lor: timp suficient pentru fiecare consultație și un plan pe care pacientul îl înțelege.
          </p>
        </div>
      </section>

      <section className="team-sum" style={{ padding: 0 }}>
        <div className="sec-head" data-reveal="">
          <div>
            <h2 className="h2">Echipa, pe specialități</h2>
            <p className="lead">
              Medici primari și specialiști, cadre universitare și psihologi clinicieni. Profilurile complete, pe pagina{" "}
              <Link href="/medici/" style={{ textDecoration: "underline" }}>
                Medici
              </Link>
              .
            </p>
          </div>
          <Link className="btn btn-line" href="/medici/">
            <Icon name="users" />
            Toți medicii
          </Link>
        </div>
        <div className="team-grid" data-stagger="">
          <div className="tcard card-lift">
            <span className="ic">
              <Icon name="brain" />
            </span>
            <h3>Psihiatrie pentru adulți</h3>
            <p>Consultații, diagnostic, tratament și urmărire în timp, pentru adulți și vârstnici.</p>
            <ul>
              <li>
                <Link href="/medici/sorin-iova/">
                  <Icon name="arrow-right" />
                  Șef lucr. Dr. Sorin Iova, medic primar psihiatru
                </Link>
              </li>
              <li>
                <Link href="/medici/sebastian-macrea/">
                  <Icon name="arrow-right" />
                  Dr. Sebastian Macrea, medic specialist psihiatru
                </Link>
              </li>
              <li>
                <Link href="/medici/adriana-maties/">
                  <Icon name="arrow-right" />
                  Dr. Adriana Maties, medic specialist psihiatru
                </Link>
              </li>
              <li>
                <Link href="/medici/theodor-nicolau/">
                  <Icon name="arrow-right" />
                  Dr. Theodor Nicolau, medic specialist psihiatru
                </Link>
              </li>
            </ul>
          </div>
          <div className="tcard card-lift">
            <span className="ic">
              <Icon name="baby" />
            </span>
            <h3>Psihiatrie pediatrică</h3>
            <p>Evaluarea copilului și a adolescentului, planul de tratament discutat cu părinții.</p>
            <ul>
              <li>
                <Link href="/medici/roxana-samuila/">
                  <Icon name="arrow-right" />
                  Dr. Roxana Samuila, medic specialist psihiatrie pediatrică
                </Link>
              </li>
            </ul>
          </div>
          <div className="tcard card-lift">
            <span className="ic">
              <Icon name="activity" />
            </span>
            <h3>Neurologie</h3>
            <p>Consult neurologic în aceeași clinică, util mai ales când simptomele au și o componentă neurologică.</p>
            <ul>
              <li>
                <Link href="/medici/titus-moga/">
                  <Icon name="arrow-right" />
                  As. Univ. Dr. Titus Moga, medic specialist neurolog
                </Link>
              </li>
            </ul>
          </div>
          <div className="tcard card-lift">
            <span className="ic">
              <Icon name="message-circle-heart" />
            </span>
            <h3>Psihologie clinică și logopedie</h3>
            <p>Evaluări psihologice pentru copii și adulți, evaluări pentru comisii, avize, consiliere, terapia limbajului.</p>
            <ul>
              <li>
                <Link href="/medici/mihaela-caba/">
                  <Icon name="arrow-right" />
                  Psih. Mihaela Caba, psiholog clinician, logoped
                </Link>
              </li>
            </ul>
          </div>
          <div className="tcard card-lift">
            <span className="ic">
              <Icon name="armchair" />
            </span>
            <h3>Psihoterapie</h3>
            <p>Psihoterapie integrativă și terapie EMDR, în ședințe regulate, pentru adulți și copii.</p>
            <ul>
              <li>
                <Link href="/servicii/psihoterapie-integrativa/">
                  <Icon name="arrow-right" />
                  Psihoterapie integrativă
                </Link>
              </li>
              <li>
                <Link href="/servicii/terapie-emdr/">
                  <Icon name="arrow-right" />
                  Terapie EMDR
                </Link>
              </li>
            </ul>
          </div>
          <div className="tcard card-lift">
            <span className="ic">
              <Icon name="user-plus" />
            </span>
            <h3>În curând în echipă</h3>
            <p>
              Clinica a anunțat noi medici primari și specialiști psihiatri, precum și psihologi clinicieni și psihoterapeuți. Profilurile vor fi publicate pe măsură ce încep consultațiile.
            </p>
            <ul>
              <li>
                <span className="todo">de confirmat cu clinica: numele și data de start pentru medicii anunțați</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="founder" style={{ padding: 0 }}>
        <div className="in" data-reveal="scale">
          <div className="img img-zoom">
            <img src="/img/trim/sorin-iova.png" alt="Șef lucr. Dr. Claudiu Sorin Iova" data-parallax="0.05" />
          </div>
          <div className="txt">
            <div className="kicker">Fondatorul clinicii</div>
            <h2>Șef lucr. Dr. Claudiu Sorin Iova</h2>
            <p className="role">
              Medic primar psihiatru, cadru didactic la Facultatea de Medicină și Farmacie, Universitatea din Oradea
            </p>
            <ul data-stagger="">
              <li>
                <Icon name="hospital" />
                <span>
                  Medic primar psihiatru la Spitalul Clinic Județean de Urgență Bihor din 2014. Anterior, între 2004 și 2014, la Spitalul Clinic Municipal „Dr. Gavril Curteanu”, secția Psihiatrie III.
                </span>
              </li>
              <li>
                <Icon name="graduation-cap" />
                <span>
                  Șef de lucrări din 2019 la Facultatea de Medicină și Farmacie Oradea, Departamentul Psiho-Neuroștiințe și Recuperare.
                </span>
              </li>
              <li>
                <Icon name="book-open" />
                <span>
                  Doctorat cu tema „Tulburări psihice în scleroza multiplă”. Coautor al manualului „Psihiatrie pentru Colegiul de asistenți medicali” (2006).
                </span>
              </li>
              <li>
                <Icon name="flask-conical" />
                <span>Coinvestigator în 39 de studii clinice de fază 2 și 3.</span>
              </li>
            </ul>
            <Link className="btn btn-dark" href="/medici/sorin-iova/">
              <Icon name="arrow-right" />
              Profilul complet
            </Link>
          </div>
        </div>
      </section>

      <section className="values" style={{ padding: 0 }}>
        <div className="sec-head" data-reveal="">
          <div>
            <h2 className="h2">Cum lucrăm</h2>
            <p className="lead">Patru lucruri pe care le puteți aștepta de la fiecare consultație, indiferent de medic.</p>
          </div>
        </div>
        <div className="vgrid" data-stagger="">
          <div className="vcard">
            <span className="n">01</span>
            <h3>Timp pentru prima consultație</h3>
            <p>O evaluare psihiatrică sau psihologică are nevoie de timp pentru istoric, context și întrebări. Nu se grăbește.</p>
          </div>
          <div className="vcard">
            <span className="n">02</span>
            <h3>Explicații pe care le înțelegeți</h3>
            <p>Medicul spune ce a observat, ce propune și de ce. Puteți pune orice întrebare, iar deciziile se iau împreună.</p>
          </div>
          <div className="vcard">
            <span className="n">03</span>
            <h3>Specialiști care vorbesc între ei</h3>
            <p>
              Psihiatrul, psihologul, logopedul și neurologul lucrează în aceeași clinică. O trimitere de la unul la altul nu înseamnă alt oraș sau altă adresă.
            </p>
          </div>
          <div className="vcard">
            <span className="n">04</span>
            <h3>Confidențialitate</h3>
            <p>
              Datele medicale sunt date speciale, protejate de secretul profesional și de GDPR. Nimic nu pleacă din clinică fără acordul dumneavoastră, în afara cazurilor prevăzute de lege.
            </p>
          </div>
        </div>
      </section>

      <section className="space" style={{ padding: 0 }}>
        <div className="sec-head" data-reveal="">
          <div>
            <h2 className="h2">Spațiul clinicii</h2>
            <p className="lead">
              Str. Ceyrat nr. 31, bl. WR12, Oradea. Recepție, sală de așteptare și cabinete de consultații, într-un spațiu nou din 2025.
            </p>
          </div>
          <Link className="btn btn-line" href="/contact/">
            <Icon name="map-pin" />
            Cum ajungeți
          </Link>
        </div>
        <div className="mosaic" data-stagger="scale">
          <div className="big img-zoom">
            <img src="/img/Image2.jpg" alt="Sala de așteptare a clinicii" loading="lazy" />
          </div>
          <div className="img-zoom">
            <img src="/img/Image4.jpg" alt="Recepția clinicii, cu sigla pe ușa cabinetului 1" loading="lazy" />
          </div>
          <div className="tall img-zoom">
            <img src="/img/Image5.jpeg" alt="Holul clinicii, cabinetele 2 și 3" loading="lazy" />
          </div>
          <div className="img-zoom">
            <img src="/img/Image7.jpg" alt="Biroul recepției" loading="lazy" />
          </div>
          <div className="img-zoom">
            <img src="/img/Image6.jpg" alt="Cabinet de consultații cu fereastră" loading="lazy" />
          </div>
          <div className="img-zoom">
            <img src="/img/Image9.jpg" alt="Biroul dintr-un cabinet de consultații" loading="lazy" />
          </div>
          <div className="blob">
            Luni–vineri
            <br />
            08:00–20:00
          </div>
          <div className="img-zoom">
            <img src="/img/Image1.jpg" alt="Hol cu cabinetele 2 și 3" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="reviews-link" style={{ padding: 0 }}>
        <div className="in" data-reveal="">
          <div>
            <h2>Ce spun pacienții despre clinică</h2>
            <p>
              Pentru că suntem o clinică de psihiatrie, nu publicăm mărturii ale pacienților. Puteți citi însă recenziile publice de pe Google, așa cum le-au scris oamenii, și puteți lăsa una după vizita dumneavoastră.
            </p>
          </div>
          <div className="ctas">
            <Link className="btn btn-dark" href="/#recenzii">
              <Icon name="star" />
              Recenzii Google
            </Link>
            <a
              className="btn btn-line"
              href="https://www.google.com/maps/search/Clinica+Dr.+Iova+Oradea"
              target="_blank"
              rel="noopener"
            >
              <Icon name="external-link" />
              Citiți pe Google
            </a>
          </div>
        </div>
      </section>

      <section className="cta-band" data-parallax="0.12" data-parallax-prop="--wm">
        <div className="in" data-reveal="scale">
          <div>
            <h2>Programare la Clinica Dr. Iova</h2>
            <p>
              Psihiatrie pentru adulți și copii, neurologie, psihologie clinică și logopedie. Cu bilet de trimitere, consultațiile sunt gratuite prin CAS.
            </p>
          </div>
          <div className="ctas">
            <Link className="btn btn-light" href="/programare/">
              <Icon name="calendar" />
              Programare
            </Link>
            <a className="btn btn-ghost" href="tel:+40359450657">
              <Icon name="phone" />
              0359 450 657
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
