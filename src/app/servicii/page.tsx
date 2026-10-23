import "@/styles/servicii.css";
import "@/styles/mobile.css"; // always last
import FallbackImg from "@/components/servicii/FallbackImg";
import Icon from "@/components/Icon";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { serviciiIndexMeta } from "@/data/servicii";

const route = getRoute("/servicii/");
export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
  ogImage: serviciiIndexMeta.ogImage,
});

export default function ServiciiPage() {
  return (
    <>
      <Breadcrumbs items={serviciiIndexMeta.breadcrumb} />
      {serviciiIndexMeta.schema.map((d, i) => (
        <JsonLd key={i} data={d} />
      ))}
      <header className="phead phead-serv hub-head">
        <div className="phead-grid">
          <div>
            <div className="kicker" data-reveal="fade">
              Servicii · Oradea
            </div>
            <h1 data-reveal="lines">Ce puteți face la Clinica Dr. Iova</h1>
            <p className="intro" data-reveal="">
              Clinica Dr. Iova din Oradea oferă psihiatrie pentru adulți și copii, neurologie,
              psihologie clinică, psihoterapie (inclusiv EMDR), logopedie, evaluări psihologice și
              avize, la aceeași recepție. Consultațiile medicale sunt gratuite prin CAS Bihor, cu
              bilet de trimitere. Str. Ceyrat nr. 31, luni–vineri 08:00–20:00.
            </p>
            <div className="phead-ctas" data-reveal="">
              <Link className="btn btn-dark" href="/programare/">
                <Icon name="calendar" />
                Programare
              </Link>
              <a className="btn btn-line" href="tel:+40359450657">
                <Icon name="phone" />
                0359 450 657
              </a>
            </div>
            <ul className="phead-facts" data-stagger="fade">
              <li>
                <Icon name="layout-grid" />
                12 servicii, 5 specialități
              </li>
              <li>
                <Icon name="receipt" />
                Consultații gratuite prin CAS, cu bilet
              </li>
              <li>
                <Icon name="users" />
                Copii și adulți
              </li>
              <li>
                <Icon name="clock" />
                Luni–vineri, 08:00–20:00
              </li>
            </ul>
          </div>
          <div className="hub-intro-card" data-reveal="right">
            <div className="row">
              <Icon name="phone" />
              <p>
                <b>Nu știți la ce specialist să mergeți?</b>
                <br />
                Sunați la recepție, descrieți pe scurt problema și vă spunem la ce medic sau
                psiholog să vă programați.
              </p>
            </div>
            <div className="row">
              <Icon name="file-text" />
              <p>
                <b>Cu bilet de trimitere</b>
                <br />
                Consultațiile de psihiatrie, psihiatrie pediatrică și neurologie sunt gratuite prin
                CAS Bihor.
              </p>
            </div>
            <div className="row">
              <Icon name="map-pin" />
              <p>
                <b>O singură clinică</b>
                <br />
                Str. Ceyrat nr. 31, bl. WR12, Oradea. Specialiști în psihiatria copilului și a
                adultului, neurologie, psihologie clinică și logopedie.
              </p>
            </div>
            <div className="row">
              <Icon name="phone-call" />
              <p>
                <b>Urgențe: 112</b>
                <br />
                Clinica funcționează pe bază de programare și nu are serviciu de urgență.
              </p>
            </div>
          </div>
        </div>
      </header>
      <div className="hub-groups">
        <div className="hub-group" id="g01">
          <div className="gh" data-reveal="">
            <div className="num">01</div>
            <h2>Psihiatrie</h2>
            <p>
              Consultație, diagnostic, tratament și controale, pentru adulți și pentru copii. Un
              medic primar și cinci medici specialiști.
            </p>
            <span className="cas">
              <Icon name="receipt" />
              Gratuit prin CAS, cu bilet
            </span>
          </div>
          <div className="hub-cards two" data-stagger="">
            <Link className="hcard card-lift img-zoom" href="/servicii/psihiatrie-adulti/">
              <div className="ph">
                <FallbackImg
                  src="/img/gen/serv-psihiatrie-adulti.jpg"
                  alt="Psihiatrie pentru adulți"
                  fallback="/img/Image6.jpg"
                />
              </div>
              <div className="b">
                <h3>Psihiatrie pentru adulți</h3>
                <p>Consultație, diagnostic și urmărirea tratamentului în timp.</p>
                <span className="who">
                  <span className="avs">
                    <span className="av">
                      <img src="/img/avatar/sorin-iova.png" alt="" />
                    </span>
                    <span className="av">
                      <img src="/img/avatar/sebastian-macrea.png" alt="" />
                    </span>
                    <span className="av">
                      <img src="/img/avatar/adriana-maties.png" alt="" />
                    </span>
                    <span className="av">
                      <img src="/img/avatar/theodor-nicolau.png" alt="" />
                    </span>
                  </span>
                  <span className="wn">Dr. Iova, Dr. Macrea, Dr. Maties, Dr. Nicolau</span>
                </span>
              </div>
              <span className="go">
                <Icon name="arrow-up-right" />
              </span>
            </Link>
            <Link className="hcard card-lift img-zoom" href="/servicii/psihiatrie-pediatrica/">
              <div className="ph">
                <FallbackImg
                  src="/img/gen/serv-psihiatrie-pediatrica.jpg"
                  alt="Psihiatrie pediatrică"
                  fallback="/img/Image9.jpg"
                />
              </div>
              <div className="b">
                <h3>Psihiatrie pediatrică</h3>
                <p>Evaluarea copilului și a adolescentului, împreună cu părinții.</p>
                <span className="who">
                  <span className="avs">
                    <span className="av">
                      <img src="/img/avatar/roxana-samuila.png" alt="" />
                    </span>
                  </span>
                  <span className="wn">Dr. Roxana Samuila</span>
                </span>
              </div>
              <span className="go">
                <Icon name="arrow-up-right" />
              </span>
            </Link>
          </div>
        </div>
        <div className="hub-group" id="g02">
          <div className="gh" data-reveal="">
            <div className="num">02</div>
            <h2>Neurologie</h2>
            <p>
              Consult neurologic pentru adulți: dureri de cap, amețeli, epilepsie, boli
              neurodegenerative, urmărire după AVC.
            </p>
            <span className="cas">
              <Icon name="receipt" />
              Gratuit prin CAS, cu bilet
            </span>
          </div>
          <div className="hub-cards two" data-stagger="">
            <Link className="hcard card-lift img-zoom" href="/servicii/neurologie/">
              <div className="ph">
                <FallbackImg
                  src="/img/gen/serv-neurologie.jpg"
                  alt="Neurologie"
                  fallback="/img/Image7.jpg"
                />
              </div>
              <div className="b">
                <h3>Neurologie</h3>
                <p>Consult neurologic pentru adulți, în aceeași clinică.</p>
                <span className="who">
                  <span className="avs">
                    <span className="av">
                      <img src="/img/avatar/titus-moga.png" alt="" />
                    </span>
                  </span>
                  <span className="wn">As. Univ. Dr. Titus Moga</span>
                </span>
              </div>
              <span className="go">
                <Icon name="arrow-up-right" />
              </span>
            </Link>
          </div>
        </div>
        <div className="hub-group" id="g03">
          <div className="gh" data-reveal="">
            <div className="num">03</div>
            <h2>Psihologie și terapie</h2>
            <p>
              Evaluare psihologică, consiliere pe termen scurt și psihoterapie, în același loc cu
              medicii psihiatri.
            </p>
            <span className="cas">
              <Icon name="receipt" />
              Tarif: de la recepție
            </span>
          </div>
          <div className="hub-cards" data-stagger="">
            <Link className="hcard plain card-lift" href="/servicii/psihologie-clinica/">
              <div className="b">
                <span className="ic">
                  <Icon name="message-circle-heart" />
                </span>
                <h3>Psihologie clinică</h3>
                <p>Evaluare psihologică și psihodiagnostic pentru copii și adulți.</p>
                <span className="who">
                  <span className="avs">
                    <span className="av">
                      <img src="/img/avatar/mihaela-caba.png" alt="" />
                    </span>
                  </span>
                  <span className="wn">Psih. Mihaela Caba</span>
                </span>
              </div>
              <span className="go">
                <Icon name="arrow-up-right" />
              </span>
            </Link>
            <Link className="hcard plain card-lift" href="/servicii/psihoterapie-integrativa/">
              <div className="b">
                <span className="ic">
                  <Icon name="armchair" />
                </span>
                <h3>Psihoterapie integrativă</h3>
                <p>Ședințe individuale, cu metode alese după nevoile fiecărei persoane.</p>
                <span className="who">
                  <span className="avs">
                    <span className="av av-ic">
                      <Icon name="user-round" />
                    </span>
                  </span>
                  <span className="wn">Psihoterapeut atestat</span>
                </span>
              </div>
              <span className="go">
                <Icon name="arrow-up-right" />
              </span>
            </Link>
            <Link className="hcard plain card-lift" href="/servicii/terapie-emdr/">
              <div className="b">
                <span className="ic">
                  <Icon name="eye" />
                </span>
                <h3>Terapie EMDR</h3>
                <p>
                  Metodă structurată pentru amintiri greu de dus, recomandată de OMS pentru stresul
                  posttraumatic.
                </p>
                <span className="who">
                  <span className="avs">
                    <span className="av av-ic">
                      <Icon name="user-round" />
                    </span>
                  </span>
                  <span className="wn">Terapeut format EMDR</span>
                </span>
              </div>
              <span className="go">
                <Icon name="arrow-up-right" />
              </span>
            </Link>
            <Link className="hcard plain card-lift" href="/servicii/consiliere-psihologica/">
              <div className="b">
                <span className="ic">
                  <Icon name="messages-square" />
                </span>
                <h3>Consiliere psihologică</h3>
                <p>Întâlniri pe termen scurt, pentru o dificultate concretă din prezent.</p>
                <span className="who">
                  <span className="avs">
                    <span className="av">
                      <img src="/img/avatar/mihaela-caba.png" alt="" />
                    </span>
                  </span>
                  <span className="wn">Psih. Mihaela Caba</span>
                </span>
              </div>
              <span className="go">
                <Icon name="arrow-up-right" />
              </span>
            </Link>
          </div>
        </div>
        <div className="hub-group" id="g04">
          <div className="gh" data-reveal="">
            <div className="num">04</div>
            <h2>Copii</h2>
            <p>
              Evaluarea dezvoltării, consult de psihiatrie pediatrică și logopedie, cu părinții în
              cabinet.
            </p>
            <span className="cas">
              <Icon name="receipt" />
              Consultul medical gratuit prin CAS
            </span>
          </div>
          <div className="hub-cards" data-stagger="">
            <Link className="hcard card-lift img-zoom" href="/servicii/psihiatrie-pediatrica/">
              <div className="ph">
                <FallbackImg
                  src="/img/gen/serv-psihiatrie-pediatrica.jpg"
                  alt="Psihiatrie pediatrică"
                  fallback="/img/Image9.jpg"
                />
              </div>
              <div className="b">
                <h3>Psihiatrie pediatrică</h3>
                <p>Evaluarea copilului și a adolescentului, împreună cu părinții.</p>
                <span className="who">
                  <span className="avs">
                    <span className="av">
                      <img src="/img/avatar/roxana-samuila.png" alt="" />
                    </span>
                  </span>
                  <span className="wn">Dr. Roxana Samuila</span>
                </span>
              </div>
              <span className="go">
                <Icon name="arrow-up-right" />
              </span>
            </Link>
            <Link className="hcard card-lift img-zoom" href="/servicii/evaluarea-copiilor/">
              <div className="ph">
                <FallbackImg
                  src="/img/gen/serv-psihologie.jpg"
                  alt="Evaluarea copiilor"
                  fallback="/img/Image9.jpg"
                />
              </div>
              <div className="b">
                <h3>Evaluarea copiilor</h3>
                <p>Evaluare psihologică a dezvoltării, cu raport scris și recomandări.</p>
                <span className="who">
                  <span className="avs">
                    <span className="av">
                      <img src="/img/avatar/mihaela-caba.png" alt="" />
                    </span>
                  </span>
                  <span className="wn">Psih. Mihaela Caba</span>
                </span>
              </div>
              <span className="go">
                <Icon name="arrow-up-right" />
              </span>
            </Link>
            <Link className="hcard card-lift img-zoom" href="/servicii/logopedie/">
              <div className="ph">
                <FallbackImg
                  src="/img/gen/serv-logopedie.jpg"
                  alt="Logopedie"
                  fallback="/img/Image3.jpg"
                />
              </div>
              <div className="b">
                <h3>Logopedie</h3>
                <p>Evaluarea și terapia tulburărilor de limbaj la copii, cu Forbrain.</p>
                <span className="who">
                  <span className="avs">
                    <span className="av">
                      <img src="/img/avatar/mihaela-caba.png" alt="" />
                    </span>
                  </span>
                  <span className="wn">Psih. Mihaela Caba · Forbrain</span>
                </span>
              </div>
              <span className="go">
                <Icon name="arrow-up-right" />
              </span>
            </Link>
          </div>
        </div>
        <div className="hub-group" id="g05">
          <div className="gh" data-reveal="">
            <div className="num">05</div>
            <h2>Evaluări și avize</h2>
            <p>
              Documente pentru comisiile de handicap și de pensionare și avizul psihologic pentru
              permisul de armă.
            </p>
            <span className="cas">
              <Icon name="receipt" />
              Avize: cu plată
            </span>
          </div>
          <div className="hub-cards two" data-stagger="">
            <Link className="hcard plain card-lift" href="/servicii/evaluari-comisii/">
              <div className="b">
                <span className="ic">
                  <Icon name="file-check" />
                </span>
                <h3>Evaluări pentru comisii</h3>
                <p>
                  Documente medicale și psihologice pentru comisiile de handicap și de pensionare.
                </p>
                <span className="who">
                  <span className="avs">
                    <span className="av av-ic">
                      <Icon name="user-round" />
                    </span>
                  </span>
                  <span className="wn">Medici specialiști + psiholog clinician</span>
                </span>
              </div>
              <span className="go">
                <Icon name="arrow-up-right" />
              </span>
            </Link>
            <Link className="hcard plain card-lift" href="/servicii/aviz-psihologic-port-arma/">
              <div className="b">
                <span className="ic">
                  <Icon name="badge-check" />
                </span>
                <h3>Aviz psihologic port-armă</h3>
                <p>Evaluarea psihologică cerută de lege pentru permisul de armă.</p>
                <span className="who">
                  <span className="avs">
                    <span className="av av-ic">
                      <Icon name="user-round" />
                    </span>
                  </span>
                  <span className="wn">Psiholog atestat</span>
                </span>
              </div>
              <span className="go">
                <Icon name="arrow-up-right" />
              </span>
            </Link>
          </div>
        </div>
        <div className="hub-group" id="g06">
          <div className="gh" data-reveal="">
            <div className="num">06</div>
            <h2>CAS</h2>
            <p>
              Cum folosiți biletul de trimitere: ce este gratuit, ce aduceți, cât este valabil
              biletul.
            </p>
            <span className="cas">
              <Icon name="receipt" />
              Contract CAS Bihor nr. 1389
            </span>
          </div>
          <div className="hub-cards two" data-stagger="">
            <Link className="hcard plain card-lift" href="/servicii/consultatii-cas/">
              <div className="b">
                <span className="ic">
                  <Icon name="receipt" />
                </span>
                <h3>Consultații prin CAS</h3>
                <p>Cum folosiți biletul de trimitere la Clinica Dr. Iova.</p>
                <span className="who">
                  <span className="avs">
                    <span className="av">
                      <img src="/img/avatar/sorin-iova.png" alt="" />
                    </span>
                    <span className="av">
                      <img src="/img/avatar/sebastian-macrea.png" alt="" />
                    </span>
                    <span className="av">
                      <img src="/img/avatar/titus-moga.png" alt="" />
                    </span>
                    <span className="av">
                      <img src="/img/avatar/adriana-maties.png" alt="" />
                    </span>
                    <span className="av">
                      <img src="/img/avatar/theodor-nicolau.png" alt="" />
                    </span>
                    <span className="av av-more">+2</span>
                  </span>
                  <span className="wn">Toți medicii clinicii</span>
                </span>
              </div>
              <span className="go">
                <Icon name="arrow-up-right" />
              </span>
            </Link>
          </div>
        </div>
      </div>
      <section className="related serv-sec">
        <div className="sec-head" data-reveal="">
          <div>
            <h2 className="h2">
              Cine ce face
              <br />
              la clinică
            </h2>
            <p className="lead">
              Patru profesii care lucrează împreună. Recepția vă îndrumă către cea potrivită.
            </p>
          </div>
          <Link className="btn btn-line" href="/medici/">
            <Icon name="search" />
            Toți medicii
          </Link>
        </div>
        <div className="who-grid" data-stagger="">
          <div className="who card-lift">
            <span className="ic">
              <Icon name="stethoscope" />
            </span>
            <h3>Medic psihiatru</h3>
            <p>
              Pune diagnostic, prescrie tratament, urmărește evoluția. Pentru adulți și, separat,
              pentru copii.
            </p>
            <Link href="/servicii/psihiatrie-adulti/">
              Psihiatrie <Icon name="arrow-right" />
            </Link>
          </div>
          <div className="who card-lift">
            <span className="ic">
              <Icon name="activity" />
            </span>
            <h3>Medic neurolog</h3>
            <p>
              Bolile creierului, ale nervilor și ale mușchilor: dureri de cap, amețeli, epilepsie,
              memorie.
            </p>
            <Link href="/servicii/neurologie/">
              Neurologie <Icon name="arrow-right" />
            </Link>
          </div>
          <div className="who card-lift">
            <span className="ic">
              <Icon name="clipboard-list" />
            </span>
            <h3>Psiholog clinician</h3>
            <p>
              Evaluează cu teste standardizate, scrie raportul, oferă consiliere. Nu prescrie
              medicamente.
            </p>
            <Link href="/servicii/psihologie-clinica/">
              Psihologie clinică <Icon name="arrow-right" />
            </Link>
          </div>
          <div className="who card-lift">
            <span className="ic">
              <Icon name="armchair" />
            </span>
            <h3>Psihoterapeut</h3>
            <p>
              Lucrează în ședințe, pe termen mai lung, cu tipare de gândire și emoție. Inclusiv
              EMDR.
            </p>
            <Link href="/servicii/psihoterapie-integrativa/">
              Psihoterapie <Icon name="arrow-right" />
            </Link>
          </div>
        </div>
      </section>
      <section className="related serv-sec">
        <div className="sec-head" data-reveal="">
          <h2 className="h2">
            Întrebări
            <br />
            frecvente
          </h2>
        </div>
        <div className="serv-main" data-reveal="fade">
          <div className="faq faq-1">
            <details>
              <summary>
                La ce medic merg: psihiatru, psiholog sau psihoterapeut?
                <Icon name="chevron-down" />
              </summary>
              <p>
                Psihiatrul este medic și poate prescrie tratament. Psihologul clinician evaluează și
                consiliază. Psihoterapeutul lucrează în ședințe, pe termen mai lung. Dacă nu sunteți
                sigur, sunați la recepție: vă îndrumă. Detalii în articolul{" "}
                <Link href="/blog/psihiatru-psiholog-psihoterapeut-diferente/">
                  Psihiatru, psiholog, psihoterapeut
                </Link>
                .
              </p>
            </details>
            <details>
              <summary>
                Ce servicii sunt gratuite prin CAS?
                <Icon name="chevron-down" />
              </summary>
              <p>
                Consultațiile medicale de psihiatrie, psihiatrie pediatrică și neurologie, cu bilet
                de trimitere. Serviciile psihologice au reguli diferite. Detalii pe pagina{" "}
                <Link href="/servicii/consultatii-cas/">Consultații prin CAS</Link>.
              </p>
            </details>
            <details>
              <summary>
                Cum fac o programare?
                <Icon name="chevron-down" />
              </summary>
              <p>
                Telefonic, la 0359 450 657, de luni până vineri între 08:00 și 20:00, prin e-mail la
                receptie@clinicadriova.ro sau prin formularul de pe pagina Programare.
              </p>
            </details>
            <details>
              <summary>
                Consultați și copii?
                <Icon name="chevron-down" />
              </summary>
              <p>
                Da. Psihiatrie pediatrică cu Dr. Roxana Samuila, evaluare psihologică și logopedie
                cu Psih. Mihaela Caba, toate în aceeași clinică.
              </p>
            </details>
            <details>
              <summary>
                Unde este clinica și care este programul?
                <Icon name="chevron-down" />
              </summary>
              <p>
                Str. Ceyrat nr. 31, bl. WR12, Oradea. Luni–vineri, 08:00–20:00. Sâmbăta și duminica
                este închis.
              </p>
            </details>
            <details>
              <summary>
                Ce fac într-o situație de urgență?
                <Icon name="chevron-down" />
              </summary>
              <p>
                Sunați la 112 sau mergeți la cea mai apropiată unitate de primiri urgențe. Clinica
                funcționează pe bază de programare și nu are serviciu de urgență.
              </p>
            </details>
          </div>
        </div>
      </section>
      <section className="related serv-sec">
        <div className="sec-head" data-reveal="">
          <h2 className="h2">Articole utile</h2>
          <Link className="btn btn-line" href="/blog/">
            <Icon name="book-open" />
            Toate articolele
          </Link>
        </div>
        <div className="rel-art" data-stagger="">
          <Link href="/blog/cand-mergem-la-psihiatru/">
            <span className="k">Psihiatrie</span>
            <h3>Când mergem la psihiatru</h3>
            <span className="arr">
              Citiți articolul <Icon name="arrow-right" />
            </span>
          </Link>
          <Link href="/blog/psihiatru-psiholog-psihoterapeut-diferente/">
            <span className="k">Ghid</span>
            <h3>Psihiatru, psiholog, psihoterapeut: care este diferența</h3>
            <span className="arr">
              Citiți articolul <Icon name="arrow-right" />
            </span>
          </Link>
          <Link href="/blog/repere-dezvoltare-limbaj-copii-0-5-ani/">
            <span className="k">Copii</span>
            <h3>Repere în dezvoltarea limbajului la copii, 0–5 ani</h3>
            <span className="arr">
              Citiți articolul <Icon name="arrow-right" />
            </span>
          </Link>
          <Link href="/blog/evaluare-psihiatrica-copil-ce-presupune/">
            <span className="k">Copii</span>
            <h3>Evaluarea psihiatrică a copilului: ce presupune</h3>
            <span className="arr">
              Citiți articolul <Icon name="arrow-right" />
            </span>
          </Link>
          <Link href="/blog/consultatie-psihiatrie-cas-bilet-trimitere/">
            <span className="k">CAS</span>
            <h3>Consultația de psihiatrie prin CAS, cu bilet de trimitere</h3>
            <span className="arr">
              Citiți articolul <Icon name="arrow-right" />
            </span>
          </Link>
          <Link href="/blog/aviz-psihologic-permis-arma-pasi/">
            <span className="k">Avize</span>
            <h3>Avizul psihologic pentru permisul de armă: pașii</h3>
            <span className="arr">
              Citiți articolul <Icon name="arrow-right" />
            </span>
          </Link>
        </div>
      </section>
      <section className="cta-band serv-sec" data-reveal="" data-parallax="0.12" data-parallax-prop="--wm">
        <div className="in">
          <div>
            <h2>Puteți suna și doar pentru o întrebare.</h2>
            <p>
              Recepția vă spune la ce medic să mergeți, ce acte vă trebuie și când este primul loc
              liber. Luni–vineri, 08:00–20:00.
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
