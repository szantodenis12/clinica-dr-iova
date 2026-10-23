import type { ReactNode } from "react";
import Icon from "@/components/Icon";
import Link from "next/link";

/** Values of the "Pe scurt" rows, in the same order as `kf` in src/data/servicii.ts. */
export const kf: ReactNode[] = [
  <>
    <span className="todo">
      de cerut de la client: psihoterapeutul care susține ședințele (nume, atestat CoPsi)
    </span>{" "}
    Adulți și adolescenți.
  </>,
  <>Clinica Dr. Iova, Str. Ceyrat nr. 31, bl. WR12, Oradea. Luni–vineri, 08:00–20:00.</>,
  <>
    În general nu. Ședințele se plătesc. Excepție: subprogramul CNAS pentru tulburări din spectrul
    autist, la furnizori cu contract.
  </>,
  <>
    Telefon <a href="tel:+40359450657">0359 450 657</a>, e-mail receptie@clinicadriova.ro sau{" "}
    <Link href="/programare/">cerere online</Link>.
  </>,
  <>
    Actul de identitate. Dacă aveți o recomandare de la medicul psihiatru sau rapoarte psihologice
    anterioare, sunt utile, dar nu obligatorii.
  </>,
  <>
    În psihoterapie, o ședință durează de regulă aproximativ 50 de minute. Durata și tariful la
    clinică: <span className="todo">de cerut de la client: durată, tarif, frecvență</span>
  </>,
];

/** Page body (div.prose): sections, steps, signs, doctors, CAS, FAQ. */
export function Body() {
  return (
    <>
      <h2 id="ce-este" data-reveal="">
        Ce este psihoterapia integrativă?
      </h2>
      <p className="lead-in">
        Psihoterapia este un proces structurat de discuții și exerciții, condus de un psihoterapeut
        atestat, cu scopul de a reduce suferința psihică și de a schimba tipare de gândire, emoție
        sau comportament care fac rău persoanei.
      </p>
      <p>
        „Integrativă” înseamnă că terapeutul nu lucrează cu o singură metodă. Folosește, după caz,
        tehnici cognitiv-comportamentale (lucrul cu gândurile și cu comportamentele), elemente
        psihodinamice (înțelegerea tiparelor care vin din istoria personală), abordări umaniste și
        experiențiale (relația terapeutică, emoțiile trăite în ședință). Alegerea se face împreună
        cu dumneavoastră, în funcție de problemă și de ce vi se potrivește.
      </p>
      <p>
        În România, psihoterapia este o specialitate atestată de Colegiul Psihologilor.
        Psihoterapeutul poate fi psiholog sau medic cu formare suplimentară de câțiva ani într-o
        școală de psihoterapie recunoscută. Diferențele dintre profesii:{" "}
        <Link href="/blog/psihiatru-psiholog-psihoterapeut-diferente/">
          Psihiatru, psiholog, psihoterapeut
        </Link>
        .
      </p>
      <h2 id="pentru-ce" data-reveal="">
        Pentru ce probleme se recomandă?
      </h2>
      <p>
        Psihoterapia este recomandată, singură sau împreună cu tratamentul medicamentos, pentru o
        gamă largă de dificultăți. În general:
      </p>
      <ul>
        <li>stări depresive și pierderea interesului pentru lucrurile care contau;</li>
        <li>anxietate, atacuri de panică, fobii, îngrijorare permanentă;</li>
        <li>
          urmările unor evenimente dificile: pierderi, separări, accidente, abuz (pentru traumă
          vedeți și <Link href="/servicii/terapie-emdr/">EMDR</Link>
          );
        </li>
        <li>dificultăți în relații, conflicte repetate, stimă de sine scăzută;</li>
        <li>epuizare profesională, stres prelungit;</li>
        <li>tulburări de somn sau de alimentație, alături de tratamentul medical;</li>
        <li>perioade de tranziție: schimbare de carieră, divorț, pensionare, boală în familie.</li>
      </ul>
      <p>
        Când există un diagnostic psihiatric, psihoterapia completează tratamentul stabilit de
        medic, nu îl înlocuiește. Medicul și terapeutul pot colabora, cu acordul dumneavoastră.
      </p>
      <h2 id="durata" data-reveal="">
        Cât durează o psihoterapie?
      </h2>
      <p>
        Nu există un răspuns valabil pentru toți. Unele persoane vin pentru câteva ședințe, pentru o
        problemă bine delimitată. Altele lucrează mai multe luni. În mod obișnuit, ședințele au loc
        săptămânal, iar în primele întâlniri se stabilesc obiectivele și se revizuiesc periodic.
      </p>
      <p>
        Puteți opri sau întrerupe terapia oricând. Este util să discutați această decizie cu
        terapeutul, ca să încheiați procesul în mod organizat.
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
            <b>Cunoașterea</b>
            <p>
              Prima ședință este o discuție: ce vă aduce, ce așteptați, ce ați încercat până acum.
              Terapeutul explică cum lucrează și care sunt regulile de confidențialitate.
            </p>
          </div>
        </li>
        <li>
          <div>
            <b>Obiectivele</b>
            <p>
              Stabiliți împreună unul sau mai multe obiective concrete și o frecvență a
              întâlnirilor. Puteți spune dacă simțiți că nu vi se potrivește.
            </p>
          </div>
        </li>
        <li>
          <div>
            <b>Procesul</b>
            <p>
              Ședințele următoare urmăresc obiectivele stabilite. Periodic, verificați împreună ce
              s-a schimbat și ce mai este de lucrat.
            </p>
          </div>
        </li>
      </ol>
      <h2 id="cand-merita" data-reveal="">
        Când merită să începeți o psihoterapie?
      </h2>
      <ul className="signs" data-stagger="fade">
        <li>
          <Icon name="check" />O dificultate emoțională durează de săptămâni și nu trece de la sine
        </li>
        <li>
          <Icon name="check" />
          Același tip de problemă se repetă în relații sau la muncă
        </li>
        <li>
          <Icon name="check" />
          Un eveniment dificil continuă să afecteze somnul, concentrarea sau dispoziția
        </li>
        <li>
          <Icon name="check" />
          Medicul psihiatru a recomandat psihoterapie alături de tratament
        </li>
        <li>
          <Icon name="check" />
          Vreți să înțelegeți și să schimbați un tipar de reacție, nu doar să îl suportați
        </li>
        <li>
          <Icon name="check" />
          Treceți printr-o schimbare mare de viață și aveți nevoie de un spațiu în care să o gândiți
        </li>
      </ul>
      <p>
        Dacă nu știți dacă aveți nevoie de psihiatru sau de psihoterapeut, citiți{" "}
        <Link href="/blog/cand-mergem-la-psihiatru/">Când mergem la psihiatru</Link> sau sunați la
        recepție.
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
        <span className="todo">
          de cerut de la client: numele psihoterapeutului / psihoterapeuților, formarea și atestatul
          CoPsi (psihoterapie integrativă)
        </span>
        . Psih. Mihaela Caba, psiholog clinician, realizează evaluarea psihologică prealabilă atunci
        când este recomandată. În curând în echipă, potrivit site-ului clinicii: Psih. Bianca Gliga,
        psiholog clinician, psihoterapeut și logoped.
      </p>
      <div className="doc-row" data-stagger="scale" />
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
            Care este diferența dintre psihoterapie și consiliere psihologică?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Consilierea este mai scurtă și orientată către o problemă concretă din prezent.
            Psihoterapia lucrează în profunzime, pe termen mai lung, cu tipare de gândire și de
            emoție. Detalii pe pagina{" "}
            <Link href="/servicii/consiliere-psihologica/">Consiliere psihologică</Link>.
          </p>
        </details>
        <details>
          <summary>
            Trebuie să am un diagnostic ca să vin la psihoterapie?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Nu. Mulți oameni vin la psihoterapie pentru dificultăți care nu sunt o boală. Dacă
            terapeutul consideră că este util un consult psihiatric, vă spune și vă poate îndruma
            către medicii clinicii.
          </p>
        </details>
        <details>
          <summary>
            Cât costă o ședință și cât durează?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Durata obișnuită în psihoterapie este de aproximativ 50 de minute. Tariful și durata la
            clinică: <span className="todo">de cerut de la client</span>. Întrebați recepția înainte
            de prima ședință.
          </p>
        </details>
        <details>
          <summary>
            Se poate face psihoterapie online?
            <Icon name="chevron-down" />
          </summary>
          <p>
            <span className="todo">de cerut de la client: dacă se oferă ședințe online</span>
          </p>
        </details>
        <details>
          <summary>
            Ce discut în terapie rămâne confidențial?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Da. Psihoterapeutul este obligat la confidențialitate prin lege și prin codul
            deontologic. Excepțiile sunt cele prevăzute de lege, de exemplu pericolul imediat pentru
            viața persoanei sau a altcuiva.
          </p>
        </details>
        <details>
          <summary>
            Pot urma psihoterapie și tratament medicamentos în același timp?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Da. Pentru multe probleme, combinația este recomandată. Medicul psihiatru și
            psihoterapeutul pot colabora, cu acordul dumneavoastră, mai ales că lucrează în aceeași
            clinică.
          </p>
        </details>
      </div>
    </>
  );
}
