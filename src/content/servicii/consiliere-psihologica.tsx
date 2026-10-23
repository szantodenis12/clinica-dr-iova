import type { ReactNode } from "react";
import Icon from "@/components/Icon";
import Link from "next/link";

/** Values of the "Pe scurt" rows, in the same order as `kf` in src/data/servicii.ts. */
export const kf: ReactNode[] = [
  <>Psih. Mihaela Caba, psiholog clinician. Adulți, adolescenți și părinți.</>,
  <>Clinica Dr. Iova, Str. Ceyrat nr. 31, bl. WR12, Oradea. Luni–vineri, 08:00–20:00.</>,
  <>
    În general nu. Ședințele se plătesc. Excepție: consilierea psihologică clinică din subprogramul
    CNAS pentru tulburări din spectrul autist.
  </>,
  <>
    Telefon <a href="tel:+40359450657">0359 450 657</a>, e-mail receptie@clinicadriova.ro sau{" "}
    <Link href="/programare/">cerere online</Link>.
  </>,
  <>
    Actul de identitate. Dacă aveți o recomandare de la medic sau un raport psihologic, aduceți-le.
  </>,
  <>
    O ședință durează de regulă aproximativ 50 de minute. La clinică:{" "}
    <span className="todo">de cerut de la client: durată, tarif, număr orientativ de ședințe</span>
  </>,
];

/** Page body (div.prose): sections, steps, signs, doctors, CAS, FAQ. */
export function Body() {
  return (
    <>
      <h2 id="ce-este" data-reveal="">
        Ce este consilierea psihologică?
      </h2>
      <p className="lead-in">
        Consilierea psihologică pleacă de la o problemă bine delimitată și urmărește un rezultat
        concret: să înțelegeți mai bine situația, să găsiți opțiuni, să luați o decizie, să treceți
        printr-o perioadă dificilă cu mai puțină suferință. Este o formă de sprijin psihologic, nu
        un tratament medical.
      </p>
      <p>
        Se deosebește de <Link href="/servicii/psihoterapie-integrativa/">psihoterapie</Link> prin
        durată și adâncime: consilierea este mai scurtă (de regulă câteva ședințe) și rămâne la
        nivelul situației actuale, în timp ce psihoterapia lucrează pe termen mai lung cu tipare
        care vin din istoria personală. Dacă pe parcurs devine clar că este nevoie de psihoterapie
        sau de un consult psihiatric, psihologul vă spune și vă îndrumă.
      </p>
      <p>
        În România, consilierea psihologică este o specialitate atestată de Colegiul Psihologilor.
        Psihologul clinician poate oferi consiliere psihologică clinică în limitele competenței
        sale.
      </p>
      <h2 id="pentru-ce" data-reveal="">
        Pentru ce situații este potrivită?
      </h2>
      <ul>
        <li>o perioadă de stres prelungit, la muncă sau în familie;</li>
        <li>o decizie importantă: schimbarea locului de muncă, o separare, o mutare;</li>
        <li>adaptarea la o boală, a dumneavoastră sau a unei persoane apropiate;</li>
        <li>doliu, pierderi;</li>
        <li>dificultăți în relația cu un adolescent sau cu un copil mic: limite, crize, școală;</li>
        <li>
          consiliere pentru părinți după un diagnostic al copilului (autism, ADHD, întârziere de
          limbaj);
        </li>
        <li>dificultăți de comunicare în cuplu sau în familie;</li>
        <li>întrebarea „am nevoie de ajutor și de ce fel?”.</li>
      </ul>
      <p>
        Consilierea pentru părinți este o parte importantă a muncii cu copiii. După o{" "}
        <Link href="/servicii/evaluarea-copiilor/">evaluare a copilului</Link> sau un consult de{" "}
        <Link href="/servicii/psihiatrie-pediatrica/">psihiatrie pediatrică</Link>, părinții au
        adesea nevoie de câteva întâlniri în care să înțeleagă diagnosticul și să învețe cum să
        reacționeze acasă.
      </p>
      <h2 id="limite" data-reveal="">
        Ce nu este consilierea psihologică?
      </h2>
      <p>
        Consilierea nu înlocuiește consultul medical atunci când există semne ale unei tulburări
        psihice (de exemplu stări depresive persistente, atacuri de panică repetate, gânduri de
        autovătămare). În aceste situații, psihologul recomandă consultul la medicul psihiatru, iar
        consilierea poate continua în paralel cu tratamentul, dacă medicul este de acord.
      </p>
      <p>
        Nu este nici psihoterapie de lungă durată și nici evaluare psihologică. Dacă aveți nevoie de
        un raport scris (pentru școală, comisie, medic), serviciul potrivit este{" "}
        <Link href="/servicii/psihologie-clinica/">evaluarea psihologică</Link>.
      </p>
      <h2 id="prima-consultatie" data-reveal="">
        Ce se întâmplă la prima ședință?
      </h2>
      <ol className="steps-v" data-stagger="">
        <li>
          <div>
            <b>Programarea</b>
            <p>Sunați la 0359 450 657. Recepția vă spune tariful, durata și primul loc liber.</p>
          </div>
        </li>
        <li>
          <div>
            <b>Clarificarea problemei</b>
            <p>
              Psihologul vă ascultă și pune întrebări pentru a înțelege situația: ce s-a întâmplat,
              ce ați încercat, ce v-ar ajuta.
            </p>
          </div>
        </li>
        <li>
          <div>
            <b>Obiectivul</b>
            <p>
              Stabiliți împreună un obiectiv realist pentru următoarele întâlniri și câte ședințe
              estimați că sunt necesare.
            </p>
          </div>
        </li>
        <li>
          <div>
            <b>Lucrul și încheierea</b>
            <p>
              Ședințele următoare urmăresc obiectivul. La final, verificați ce s-a schimbat și dacă
              este nevoie de altceva: psihoterapie, consult medical sau nimic în plus.
            </p>
          </div>
        </li>
      </ol>
      <h2 id="cand-merita" data-reveal="">
        Când merită câteva ședințe de consiliere?
      </h2>
      <ul className="signs" data-stagger="fade">
        <li>
          <Icon name="check" />O situație concretă vă apasă de câteva săptămâni și nu găsiți singur
          o ieșire
        </li>
        <li>
          <Icon name="check" />
          Aveți de luat o decizie grea și vreți să o gândiți cu cineva din afară
        </li>
        <li>
          <Icon name="check" />
          Copilul a primit un diagnostic și nu știți cum să procedați acasă
        </li>
        <li>
          <Icon name="check" />
          Treceți printr-un doliu, o separare sau o boală în familie
        </li>
        <li>
          <Icon name="check" />
          Relația cu adolescentul a devenit tensionată
        </li>
        <li>
          <Icon name="check" />
          Nu știți dacă aveți nevoie de psiholog, psihoterapeut sau psihiatru
        </li>
      </ul>
      <p>
        Diferențele dintre cele trei profesii, pe scurt:{" "}
        <Link href="/blog/psihiatru-psiholog-psihoterapeut-diferente/">
          Psihiatru, psiholog, psihoterapeut
        </Link>
        .
      </p>
      <div className="note urgent" data-reveal="fade">
        <Icon name="phone-call" />
        <p>
          <b>În caz de urgență sunați la 112.</b> Clinica nu are serviciu de urgență. Dacă o
          persoană este în pericol imediat, sunați la 112 sau mergeți la cea mai apropiată unitate
          de primiri urgențe.
        </p>
      </div>
      <h2 id="cine-va-consulta" data-reveal="">
        Cine susține ședințele?
      </h2>
      <p>
        Consilierea psihologică este oferită de Psih. Mihaela Caba, psiholog clinician și logoped.{" "}
        <span className="todo">de cerut de la client: alți psihologi care oferă consiliere</span>
      </p>
      <div className="doc-row" data-stagger="scale">
        <Link className="doc-mini card-lift" href="/medici/mihaela-caba/">
          <span className="ph">
            <img src="/img/mihaela-caba.png" alt="Psih. Mihaela Caba" />
          </span>
          <span>
            <b>Psih. Mihaela Caba</b>
            <span>Psiholog clinician, logoped</span>
            <span className="go">
              Pagina medicului <Icon name="arrow-right" />
            </span>
          </span>
        </Link>
      </div>
      <p className="doc-soon">
        În curând în echipă, potrivit site-ului clinicii: Psih. Bianca Gliga (psiholog clinician,
        psihoterapeut, logoped) și Psih. Paula Lazăr (psiholog clinician).
      </p>
      <h2 id="cas" data-reveal="">
        Se decontează prin CAS?
      </h2>
      <p>
        Clinica Dr. Iova are contract cu CAS Bihor pentru consultațiile medicale (psihiatrie,
        psihiatrie pediatrică, neurologie), gratuite cu bilet de trimitere. Ședințele de
        psihoterapie și de consiliere nu fac parte, în general, din pachetul de bază decontat în
        ambulatoriu. Excepția este subprogramul CNAS pentru persoanele diagnosticate cu tulburări
        din spectrul autist (din 01.10.2023), la furnizori cu contract pentru acest subprogram.
      </p>
      <div className="note cas" data-reveal="fade">
        <Icon name="receipt" />
        <div>
          <b>Tarif și decontare la clinică</b>
          <span className="todo">
            de cerut de la client: tarif ședință; dacă există servicii de psihoterapie decontate
            (subprogram TSA)
          </span>
          . Recepția vă spune costul înainte de prima ședință. Detalii generale pe pagina{" "}
          <Link href="/servicii/consultatii-cas/">Consultații prin CAS</Link>.
        </div>
      </div>
      <h2 id="intrebari" data-reveal="">
        Întrebări frecvente
      </h2>
      <div className="faq faq-1">
        <details>
          <summary>
            Care este diferența dintre consiliere și psihoterapie?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Consilierea este scurtă și orientată către o situație concretă din prezent. Psihoterapia
            lucrează pe termen mai lung, cu tipare de gândire și de emoție care vin din istoria
            personală. Psihologul vă spune care este potrivită.
          </p>
        </details>
        <details>
          <summary>
            Câte ședințe sunt necesare?
            <Icon name="chevron-down" />
          </summary>
          <p>
            De regulă câteva, între trei și zece, în funcție de problemă. Numărul se stabilește
            împreună, la prima ședință, și se poate ajusta.
          </p>
        </details>
        <details>
          <summary>
            Pot veni în cuplu sau cu copilul?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Consilierea pentru părinți se face de obicei cu părinții, fără copil. Ședințele de cuplu
            sau de familie: <span className="todo">de cerut de la client</span>.
          </p>
        </details>
        <details>
          <summary>
            Am nevoie de trimitere de la medic?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Nu. Puteți veni direct. Dacă aveți o recomandare de la medic sau un raport psihologic,
            aduceți-le, dar nu sunt obligatorii.
          </p>
        </details>
        <details>
          <summary>
            Ce discut rămâne confidențial?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Da. Psihologul este obligat la confidențialitate prin lege și prin codul deontologic, cu
            excepțiile prevăzute de lege (pericol imediat pentru persoană sau pentru altcineva).
          </p>
        </details>
        <details>
          <summary>
            Cât costă o ședință?
            <Icon name="chevron-down" />
          </summary>
          <p>
            <span className="todo">de cerut de la client: tarif ședință consiliere</span>. Recepția
            vă spune costul înainte de programare.
          </p>
        </details>
      </div>
    </>
  );
}
