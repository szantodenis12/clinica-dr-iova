import Link from "next/link";
import Icon from "@/components/Icon";

export default function PostBody() {
  return (
    <>
      <div className="pe-scurt" data-reveal="">
        <div className="lbl"><Icon name="zap" />Pe scurt</div>
        <p>Evaluarea psihiatrică a copilului este o întâlnire (uneori două) în care medicul psihiatru pediatru discută cu părinții și cu copilul, observă cum se joacă, cum comunică și cum se comportă, și adună istoricul: sarcină, naștere, dezvoltare, școală, familie. Nu există teste de trecut. Medicul poate recomanda apoi o evaluare psihologică detaliată, evaluare logopedică, consult neurologic sau o perioadă de urmărire. Un diagnostic se pune doar atunci când există suficiente date, iar planul se construiește împreună cu părinții. La Clinica Dr. Iova din Oradea, consultația de psihiatrie pediatrică este gratuită prin CAS cu bilet de trimitere.</p>
      </div>
      <h2 id="cand">Când ajunge un copil la psihiatrul pediatru?</h2>
      <p>Drumurile sunt diverse. Uneori trimite medicul de familie sau pediatrul, după ce părinții au adus în discuție o îngrijorare. Alteori recomandă logopedul sau psihologul, după o evaluare care a ridicat întrebări dincolo de limbaj. Uneori sugerează școala sau grădinița. Și de multe ori vin părinții direct, pentru că au observat ceva ce nu pot explica.</p>
      <p>Motivele frecvente țin de dezvoltare (vorbire întârziată, joc repetitiv, răspuns slab la nume, dificultăți de interacțiune), de atenție și comportament (agitație greu de gestionat, dificultăți de concentrare, impulsivitate, crize de furie peste vârsta la care sunt obișnuite), de emoții (frici intense, tristețe prelungită, refuzul școlii, tulburări de somn sau de alimentație) sau de evenimente dificile (divorț, pierderi, mutări, hărțuire).</p>
      <p>Niciuna dintre aceste situații nu înseamnă, în sine, un diagnostic. Înseamnă că cineva a observat ceva și că merită o privire profesionistă. Evaluarea există tocmai pentru a răspunde la întrebarea „este ceva sau nu?”.</p>
      <h2 id="inainte">Ce se întâmplă înainte de consultație?</h2>
      <p>Pentru consultația gratuită prin CAS aveți nevoie de bilet de trimitere, eliberat de regulă de medicul de familie sau de pediatru, și de cardul de sănătate al părintelui (pentru copii sub 18 ani, calitatea de asigurat se dovedește cu certificatul de naștere sau actul de identitate). Fără bilet, consultația se plătește.{" "}<span className="todo">de cerut de la client: tariful consultației private de psihiatrie pediatrică</span></p>
      <p>Este util să adunați dinainte documentele care spun povestea copilului: carnetul de vaccinări sau fișa de la medicul de familie, scrisori medicale de la alți specialiști, evaluări psihologice sau logopedice anterioare, caracterizări de la grădiniță sau școală, dacă există. Și câteva notițe scrise de dumneavoastră: ce v-a îngrijorat, de când, în ce situații apare, ce ați încercat. În ziua consultației, emoțiile fac uitate multe detalii.</p>
      <h3>Cum îi explicați copilului</h3>
      <p>Spuneți-i dinainte, simplu și onest, pe limba vârstei lui: „mergem la un doctor care vorbește cu copiii și cu părinții despre cum se simt și cum le merge la școală; o să te joci și o să vorbiți”. Evitați să prezentați vizita ca o pedeapsă sau ca o verificare („să vedem ce ai”). Copiii se descurcă mai bine când știu ce urmează și când simt că părintele este liniștit.</p>
      <h2 id="cum-decurge">Cum decurge prima întâlnire?</h2>
      <p>Prima evaluare durează de regulă mai mult decât o consultație pediatrică obișnuită.{" "}<span className="todo">de cerut de la client: durata unei prime consultații de psihiatrie pediatrică la clinică</span>{" "}Are, în linii mari, trei părți.</p>
      <p><strong>Discuția cu părinții.</strong>{" "}Medicul întreabă despre motivul vizitei, apoi reconstruiește istoricul: cum a decurs sarcina și nașterea, când a mers și când a vorbit copilul, cum doarme și cum mănâncă, cum se descurcă la grădiniță sau la școală, cum se înțelege cu alți copii, ce boli a avut, dacă în familie există afecțiuni psihice sau neurologice. Pentru copiii mai mari, o parte din discuție poate avea loc fără copil în cameră.</p>
      <p><strong>Discuția și observarea copilului.</strong>{" "}Cu copiii mici, asta înseamnă joacă: medicul observă cum ia contact, cum folosește jucăriile, dacă arată și împărtășește, cum reacționează la nume și la cereri. Cu copiii mai mari și adolescenții, este o conversație directă, la nivelul lor, despre școală, prieteni, ce le place, ce îi supără, cum dorm. Adolescenții au dreptul la o parte de discuție singuri cu medicul, iar acest lucru este de regulă util.</p>
      <p><strong>Concluzia și planul.</strong>{" "}La final, medicul spune ce a observat și ce propune. Uneori concluzia este liniștitoare: dezvoltarea este în limite normale, revenim dacă apar schimbări. Alteori, propunerea este o evaluare mai amplă, cu psiholog clinician (teste standardizate de dezvoltare, atenție, inteligență, emoții), cu logoped sau cu neurolog, pentru a avea o imagine completă înainte de orice decizie.</p>
      <blockquote className="pull">Un diagnostic bun la copil are nevoie de timp, de mai multe perspective și de părinți care înțeleg fiecare pas.</blockquote>
      <h2 id="dupa">Ce urmează după evaluare?</h2>
      <p>Rezultatul evaluării poate fi unul dintre următoarele, uneori o combinație:</p>
      <ul>
        <li><strong>Urmărire.</strong>{" "}Un control peste câteva luni, cu recomandări pentru acasă, fără intervenție specifică.</li>
        <li><strong>Evaluare psihologică detaliată.</strong>{" "}Teste standardizate, aplicate de psihologul clinician, pe mai multe ședințe, care măsoară dezvoltarea, atenția, limbajul, abilitățile cognitive și emoționale. Rezultatul este un raport scris.</li>
        <li><strong>Terapie.</strong>{" "}Logopedie, consiliere psihologică, psihoterapie pentru copil și familie, intervenții comportamentale. Pentru copiii cu diagnostic de tulburare din spectrul autist, aceste servicii sunt decontate (detalii mai jos).</li>
        <li><strong>Tratament medicamentos.</strong>{" "}Nu este regula, ci excepția bine argumentată. Dacă medicul îl consideră necesar, explică de ce, ce beneficii așteaptă, ce efecte sunt posibile și cum va urmări evoluția. Decizia aparține părinților, informați.</li>
        <li><strong>Documente.</strong>{" "}Scrisoare medicală pentru medicul de familie și, când părinții doresc, documente pentru comisiile de evaluare (grad de handicap, orientare școlară). Clinica face{" "}<Link href="/servicii/evaluari-comisii/">evaluări pentru comisii</Link>.</li>
      </ul>
      <h2 id="cas">Ce decontează CAS pentru copii?</h2>
      <p>Consultația de psihiatrie pediatrică face parte din pachetul de bază, pe bilet de trimitere, în condițiile generale ale ambulatoriului de specialitate: pe un bilet se decontează maximum 3 consultații în 60 de zile pentru un episod acut, iar pentru afecțiuni cronice urmărite la aceeași specialitate, maximum 4 consultații pe trimestru. Normele CNAS (Anexa 13, pct. 22) prevăd acces direct, fără bilet, pentru persoanele cu anumite diagnostice deja stabilite, printre care autismul, ADHD și „boli psihice la copii”.{" "}<span className="todo">de confirmat cu clinica: aplicarea excepției din Anexa 13 pentru copiii cu diagnostic stabilit</span></p>
      <p>Pentru copiii și adulții cu diagnostic de tulburare din spectrul autist, CNAS a introdus la 1 octombrie 2023 un subprogram național de servicii conexe: ședințe de psihoterapie, consiliere psihologică clinică și psihopedagogie specială-logopedie, inclusiv planul de intervenție personalizat, la furnizori aflați în contract cu casa de asigurări. Condiția de intrare este diagnosticul stabilit de medicul psihiatru sau psihiatru pediatru.{" "}<span className="todo">de cerut de la client: dacă clinica are contract pentru subprogramul TSA sau colaborează cu furnizori care au</span></p>
      <p>Din 2027, Legea nr. 61/2026 introduce și consilierea psihologică decontată integral pentru părinții și tutorii copiilor cu tulburare din spectrul autist sau sindrom Down. Prevederea intră în vigoare la 30 de zile după legea bugetului de stat pe 2027, iar normele de aplicare urmează să fie publicate de Guvern.</p>
      <p>Pentru pașii practici (bilet, acte, programare), citiți pagina{" "}<Link href="/cas/">Programare prin CAS</Link>.</p>
      <h2 id="ajutor">Când să cereți ajutor</h2>
      <p>Dacă vă frământă o întrebare despre copilul dumneavoastră de mai mult de câteva săptămâni, răspunsul nu se găsește pe internet, ci într-o evaluare. Nu are nevoie de o certitudine ca să înceapă. Are nevoie doar de o îngrijorare și de o programare.</p>
      <div className="note warn"><b>În caz de urgență sunați la 112.</b>{" "}Dacă un copil sau adolescent vorbește despre a-și face rău, a încercat să se rănească, refuză de zile întregi să mănânce sau să bea, sau are un comportament care îl pune în pericol, nu așteptați o programare.</div>
      <section className="art-faq">
        <h2 id="intrebari-frecvente">Întrebări frecvente</h2>
        <div className="faq">
          <details>
            <summary>La ce vârstă poate fi evaluat un copil de psihiatrul pediatru?<Icon name="chevron-down" /></summary>
            <p>Psihiatria pediatrică acoperă copiii și adolescenții de la vârste mici până la 18 ani. Pentru copiii foarte mici, evaluarea se concentrează pe dezvoltare și se face împreună cu psihologul și logopedul.</p>
          </details>
          <details>
            <summary>Copilul primește medicamente după prima evaluare?<Icon name="chevron-down" /></summary>
            <p>Nu neapărat. La copii, prima recomandare este de multe ori o evaluare psihologică amănunțită, terapie sau intervenții la școală și acasă. Un eventual tratament medicamentos se discută cu părinții, cu explicarea motivelor și a alternativelor.</p>
          </details>
          <details>
            <summary>Trebuie să îi spun copilului unde mergem?<Icon name="chevron-down" /></summary>
            <p>Da, pe limba lui. „Mergem la un doctor care vorbește cu copiii și cu părinții despre cum se simt și cum le merge la școală” este suficient. Copiii se descurcă mai bine când știu ce urmează.</p>
          </details>
          <details>
            <summary>Este nevoie de bilet de trimitere?<Icon name="chevron-down" /></summary>
            <p>Pentru consultația gratuită prin CAS, biletul de trimitere vine de regulă de la medicul de familie sau de la pediatru. Fără bilet, consultația se plătește. Normele CNAS prevăd și situații de acces direct pentru copiii cu anumite diagnostice deja stabilite.</p>
          </details>
          <details>
            <summary>Ce înseamnă diagnosticul pentru școală?<Icon name="chevron-down" /></summary>
            <p>Un diagnostic nu se transmite școlii fără acordul părinților. Atunci când părinții doresc, documentele medicale pot sta la baza unor măsuri de sprijin (certificat de orientare școlară, profesor de sprijin), prin comisiile din cadrul CJRAE.</p>
          </details>
          <details>
            <summary>Ce decontează CAS pentru copiii cu autism?<Icon name="chevron-down" /></summary>
            <p>Din 01.10.2023, printr-un subprogram național CNAS, copiii și adulții cu diagnostic de tulburare din spectrul autist stabilit de medicul psihiatru beneficiază de ședințe decontate de psihoterapie, consiliere psihologică și psihopedagogie specială-logopedie, la furnizori aflați în contract cu casa de asigurări.</p>
          </details>
        </div>
      </section>
      <div className="surse">
        <h2>Surse</h2>
        <ol>
          <li>Ordinul MS/CNAS nr. 1857/441/2023, Normele Contractului-cadru, versiunea 01.04.2025: Anexa 7 pct. 1.2.1, 1.3.1 (număr de consultații pe bilet), Anexa 13 pct. 22 (acces direct), Anexa 7 lit. c) și nota privind subprogramul TSA:{" "}<a href="https://cnas.ro" rel="noopener" target="_blank">cnas.ro</a></li>
          <li>CNAS, comunicat privind Subprogramul național de servicii conexe pentru persoanele cu tulburări din spectrul autist, în vigoare din 01.10.2023 (preluat de presă: alba24.ro, actualdecluj.ro, septembrie 2023)</li>
          <li>Legea nr. 61/2026 pentru completarea Legii nr. 95/2006, publicată în Monitorul Oficial la 30.04.2026 (consiliere psihologică decontată pentru părinții copiilor cu TSA sau sindrom Down):{" "}<a href="https://www.edupedu.ro/oficial-consiliere-psihologica-gratuita-pentru-parintii-copiilor-cu-tulburare-din-spectru-autist-si-sindrom-down-din-2027/" rel="noopener" target="_blank">edupedu.ro</a></li>
          <li>Organizația Mondială a Sănătății, „Autism&quot;, fișă informativă (caracteristicile pot fi observate în copilăria mică, diagnosticul se pune adesea mai târziu; intervențiile psihosociale bazate pe dovezi îmbunătățesc comunicarea și abilitățile sociale):{" "}<a href="https://www.who.int/news-room/fact-sheets/detail/autism-spectrum-disorders" rel="noopener" target="_blank">who.int</a></li>
        </ol>
        <p className="art-disclaimer">Articol cu scop informativ, scris de echipa clinicii. Nu înlocuiește evaluarea copilului de către medic și nu stabilește diagnostice. Reguli CNAS verificate la 21.10.2026.</p>
      </div>
    </>
  );
}
