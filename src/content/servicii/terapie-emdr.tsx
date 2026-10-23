import type { ReactNode } from "react";
import Icon from "@/components/Icon";
import Link from "next/link";

/** Values of the "Pe scurt" rows, in the same order as `kf` in src/data/servicii.ts. */
export const kf: ReactNode[] = [
  <>
    <span className="todo">
      de cerut de la client: terapeutul format în EMDR (nume, nivel de formare)
    </span>{" "}
    Adulți; copii și adolescenți <span className="todo">de cerut de la client: da/nu</span>
  </>,
  <>Clinica Dr. Iova, Str. Ceyrat nr. 31, bl. WR12, Oradea. Luni–vineri, 08:00–20:00.</>,
  <>
    În general nu. Ședințele se plătesc. Excepție posibilă: subprogramul CNAS pentru tulburări din
    spectrul autist.
  </>,
  <>
    Telefon <a href="tel:+40359450657">0359 450 657</a>, e-mail receptie@clinicadriova.ro sau{" "}
    <Link href="/programare/">cerere online</Link>.
  </>,
  <>
    Actul de identitate. Dacă aveți o recomandare de la medicul psihiatru sau un raport psihologic,
    aduceți-le.
  </>,
  <>
    Ședințele EMDR durează de regulă 60–90 de minute. La clinică:{" "}
    <span className="todo">de cerut de la client: durată, tarif, număr orientativ de ședințe</span>
  </>,
];

/** Page body (div.prose): sections, steps, signs, doctors, CAS, FAQ. */
export function Body() {
  return (
    <>
      <h2 id="ce-este" data-reveal="">
        Ce este EMDR?
      </h2>
      <p className="lead-in">
        EMDR pleacă de la ideea că unele amintiri, legate de evenimente copleșitoare, rămân
        „blocate” împreună cu emoțiile, senzațiile fizice și convingerile din momentul respectiv.
        Ele se reactivează la cel mai mic semnal și produc suferință în prezent.
      </p>
      <p>
        În ședință, persoana se concentrează scurt pe amintire, în timp ce terapeutul ghidează o
        stimulare bilaterală: mișcări ale ochilor stânga-dreapta, atingeri alternative pe mâini sau
        sunete alternative. Procesul ajută creierul să „reproceseze” amintirea: aceasta rămâne, dar
        își pierde încărcătura emoțională și este integrată ca eveniment din trecut.
      </p>
      <p>
        Spre deosebire de alte abordări, EMDR nu cere să povestiți amintirea în detaliu și nu
        presupune teme pentru acasă îndelungate. Metoda este practicată doar de psihoterapeuți cu
        formare specifică, acreditată în Europa prin asociațiile naționale afiliate la EMDR Europe.
      </p>
      <h2 id="faze" data-reveal="">
        Care sunt cele opt faze ale EMDR?
      </h2>
      <ol>
        <li>
          <strong>Istoric și plan</strong>: terapeutul află ce v-a adus, identifică amintirile de
          lucru și verifică dacă metoda este potrivită acum.
        </li>
        <li>
          <strong>Pregătire</strong>: explică procesul, exersați tehnici de stabilizare și liniștire
          pe care le puteți folosi oricând.
        </li>
        <li>
          <strong>Evaluare</strong>: alegeți o amintire țintă, imaginea, convingerea negativă legată
          de ea, convingerea pozitivă dorită și notați nivelul de disconfort.
        </li>
        <li>
          <strong>Desensibilizare</strong>: seturi de stimulare bilaterală, cu scurte pauze, până
          când disconfortul scade.
        </li>
        <li>
          <strong>Instalare</strong>: se întărește convingerea pozitivă.
        </li>
        <li>
          <strong>Scanare corporală</strong>: verificați dacă au mai rămas tensiuni fizice legate de
          amintire.
        </li>
        <li>
          <strong>Închidere</strong>: ședința se încheie într-o stare stabilă, cu indicații pentru
          perioada până la următoarea întâlnire.
        </li>
        <li>
          <strong>Reevaluare</strong>: la începutul ședinței următoare, verificați ce s-a schimbat
          și ce mai este de lucrat.
        </li>
      </ol>
      <p>
        Primele două faze pot dura una sau mai multe ședințe. Terapeutul nu trece la reprocesare
        înainte ca persoana să aibă resurse de stabilizare.
      </p>
      <h2 id="pentru-ce" data-reveal="">
        Pentru ce probleme se folosește?
      </h2>
      <p>
        Indicația cea mai bine studiată este <strong>tulburarea de stres posttraumatic</strong>:
        urmările unor evenimente precum accidente, violență, abuz, pierderi bruște, dezastre. Pentru
        PTSD, EMDR este recomandată în ghidurile OMS (2013), ale Asociației Americane de Psihiatrie
        și în ghidul NICE din Marea Britanie.
      </p>
      <p>
        Terapeuții folosesc EMDR și în alte situații în care amintiri greu de dus întrețin suferința
        actuală: anxietate și atacuri de panică, fobii, doliu complicat, experiențe medicale
        dificile, stimă de sine scăzută legată de experiențe din trecut. Pentru aceste indicații,
        dovezile sunt în curs de acumulare și decizia se ia împreună cu terapeutul.
      </p>
      <p>
        EMDR nu este potrivită pentru orice persoană și orice moment. Terapeutul evaluează în
        primele ședințe dacă este metoda indicată și, dacă nu, vă propune altă abordare din{" "}
        <Link href="/servicii/psihoterapie-integrativa/">psihoterapia integrativă</Link>.
      </p>
      <h2 id="prima-consultatie" data-reveal="">
        Ce se întâmplă la primele ședințe?
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
            <b>Istoricul</b>
            <p>
              Terapeutul discută cu dumneavoastră ce vă aduce, care sunt amintirile sau situațiile
              care vă afectează și ce resurse aveți. Nu trebuie să intrați în detalii dacă nu
              doriți.
            </p>
          </div>
        </li>
        <li>
          <div>
            <b>Pregătirea</b>
            <p>
              Învățați tehnici de stabilizare (de exemplu „locul sigur”), ca să puteți regla
              disconfortul în timpul și între ședințe.
            </p>
          </div>
        </li>
        <li>
          <div>
            <b>Reprocesarea</b>
            <p>
              Când sunteți pregătit, începe lucrul pe amintirea țintă, cu stimulare bilaterală. La
              final, ședința se închide într-o stare stabilă.
            </p>
          </div>
        </li>
      </ol>
      <p>
        După o ședință de reprocesare pot apărea, câteva zile, vise sau gânduri legate de amintire.
        Este normal și face parte din proces. Terapeutul vă explică la ce să vă așteptați.
      </p>
      <h2 id="cand-merita" data-reveal="">
        Când merită să întrebați despre EMDR?
      </h2>
      <ul className="signs" data-stagger="fade">
        <li>
          <Icon name="check" />
          Un eveniment din trecut revine în gânduri, vise sau imagini și produce suferință
        </li>
        <li>
          <Icon name="check" />
          Anumite locuri, sunete sau situații declanșează reacții puternice, greu de controlat
        </li>
        <li>
          <Icon name="check" />
          Evitați situații care amintesc de eveniment, iar evitarea vă limitează viața
        </li>
        <li>
          <Icon name="check" />
          Somn afectat, tresăriri, stare de alertă permanentă după un eveniment dificil
        </li>
        <li>
          <Icon name="check" />
          Medicul psihiatru sau psihologul a recomandat o terapie orientată pe traumă
        </li>
        <li>
          <Icon name="check" />
          Ați încercat alte forme de terapie și simțiți că amintirea rămâne la fel de vie
        </li>
      </ul>
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
          de cerut de la client: terapeutul format în EMDR: nume, nivel de formare (de exemplu
          practician EMDR Europe), atestat CoPsi
        </span>
        . Dacă există un diagnostic psihiatric, medicul psihiatru al clinicii poate colabora cu
        terapeutul, cu acordul dumneavoastră.
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
            Este EMDR hipnoză?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Nu. În EMDR rămâneți conștient și în control pe tot parcursul ședinței. Puteți opri
            oricând. Stimularea bilaterală nu induce o stare de transă.
          </p>
        </details>
        <details>
          <summary>
            Trebuie să povestesc în detaliu ce mi s-a întâmplat?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Nu. EMDR nu cere o relatare detaliată. Terapeutul are nevoie să știe despre ce amintire
            este vorba și cum vă afectează, nu fiecare detaliu.
          </p>
        </details>
        <details>
          <summary>
            Câte ședințe sunt necesare?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Depinde de persoană și de ce s-a întâmplat. Pentru un singur eveniment, numărul de
            ședințe poate fi mic. Pentru experiențe repetate sau din copilărie, procesul durează mai
            mult. Terapeutul vă dă o estimare după primele întâlniri.
          </p>
        </details>
        <details>
          <summary>
            Funcționează la copii?
            <Icon name="chevron-down" />
          </summary>
          <p>
            OMS recomandă EMDR pentru stresul posttraumatic și la copii și adolescenți, cu
            protocoale adaptate vârstei. Dacă la clinică se oferă EMDR pentru copii:{" "}
            <span className="todo">de cerut de la client</span>.
          </p>
        </details>
        <details>
          <summary>
            Pot face EMDR dacă iau tratament medicamentos?
            <Icon name="chevron-down" />
          </summary>
          <p>
            În general da. Spuneți terapeutului ce tratament urmați. Medicul psihiatru și terapeutul
            pot colabora, cu acordul dumneavoastră.
          </p>
        </details>
        <details>
          <summary>
            Ce se întâmplă dacă devine prea greu în ședință?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Terapeutul oprește stimularea și folosiți împreună tehnicile de stabilizare învățate în
            faza de pregătire. Ritmul este stabilit de dumneavoastră.
          </p>
        </details>
      </div>
    </>
  );
}
