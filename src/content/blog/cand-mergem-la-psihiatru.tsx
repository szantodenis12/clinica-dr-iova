import Link from "next/link";
import Icon from "@/components/Icon";

export default function PostBody() {
  return (
    <>
      <div className="pe-scurt" data-reveal="">
        <div className="lbl"><Icon name="zap" />Pe scurt</div>
        <p>Un consult psihiatric are sens atunci când o stare (tristețe, neliniște, somn prost, gânduri care nu se opresc, schimbări de comportament) durează de săptămâni, nu de zile, și începe să afecteze munca, școala, relațiile sau grija de sine. Psihiatrul este medic: evaluează, pune un diagnostic atunci când există unul și propune un plan. În Oradea, la Clinica Dr. Iova, consultația de psihiatrie pentru adulți este gratuită prin CAS cu bilet de trimitere, iar fără bilet se plătește. În caz de urgență sunați la 112.</p>
      </div>
      <h2 id="ce-face">Ce face, de fapt, un psihiatru?</h2>
      <p>Psihiatrul este medic, cu facultate de medicină și rezidențiat în psihiatrie. Lucrează cu tulburările care țin de dispoziție, gândire, somn, anxietate, memorie sau comportament. Spre deosebire de psiholog, poate pune un diagnostic medical, poate prescrie tratament medicamentos și poate decide, împreună cu dumneavoastră, dacă este nevoie de alte investigații sau de internare.</p>
      <p>Asta nu înseamnă că fiecare consult se termină cu o rețetă. De multe ori concluzia este alta: o recomandare de psihoterapie, o trimitere către neurolog sau endocrinolog pentru a exclude o cauză somatică, sau doar o programare de control peste câteva săptămâni. Rolul medicului este să înțeleagă ce se întâmplă, nu să confirme o etichetă.</p>
      <p>Organizația Mondială a Sănătății estimează că în 2023 aproape o persoană din șapte trăia cu o tulburare psihică. Sunt afecțiuni frecvente, tratabile, care au aceeași legitimitate medicală ca o problemă de tiroidă sau de tensiune.</p>
      <h2 id="semne">Care sunt semnele că un consult ar putea ajuta?</h2>
      <p>Nu există o listă care să țină loc de evaluare. Există însă câteva situații pe care le auzim des în cabinet și care, atunci când persistă, merită discutate cu un medic. Le descriem la persoana a treia tocmai pentru că un articol nu poate spune nimănui ce are.</p>
      <ul>
        <li><strong>Dispoziția s-a schimbat și nu mai revine.</strong>{" "}Persoana este tristă, goală sau iritabilă în cea mai mare parte a zilei, de cel puțin două săptămâni, și lucrurile care îi făceau plăcere nu o mai ating.</li>
        <li><strong>Neliniștea nu mai are un motiv clar.</strong>{" "}Griji continue, senzație de tensiune, palpitații, nod în gât, evitarea unor locuri sau situații. Uneori apar episoade scurte de panică.</li>
        <li><strong>Somnul este dereglat de săptămâni.</strong>{" "}Adormire grea, treziri repetate, somn care nu odihnește, sau, dimpotrivă, nevoia de a dormi mult mai mult decât înainte.</li>
        <li><strong>Funcționarea de zi cu zi scade.</strong>{" "}Întârzieri la muncă, sarcini neterminate, retragere din relații, neglijarea igienei sau a meselor.</li>
        <li><strong>Gândurile au luat o formă nouă.</strong>{" "}Gânduri care revin obsesiv, suspiciune nejustificată față de ceilalți, convingeri pe care cei din jur nu le împărtășesc, percepții fără sursă.</li>
        <li><strong>Consumul de alcool sau alte substanțe a crescut</strong>{" "}ca mod de a face față zilei.</li>
        <li><strong>Memoria și concentrarea</strong>{" "}s-au deteriorat vizibil, mai ales la persoanele în vârstă, unde evaluarea psihiatrică se face adesea împreună cu cea neurologică.</li>
      </ul>
      <p>Un singur semn, pentru câteva zile, după un eveniment greu, este o reacție omenească, nu un motiv de consult. Combinația dintre durată, intensitate și efectul asupra vieții de zi cu zi este ceea ce contează.</p>
      <blockquote className="pull">Întrebarea utilă nu este „sunt destul de rău ca să merg?”, ci „de cât timp durează și ce mi-a luat din viață?”.</blockquote>
      <h2 id="cat-timp">Cât timp este „prea mult” de așteptat?</h2>
      <p>Ghidurile clinice folosesc adesea pragul de două săptămâni pentru episoadele depresive și de câteva luni pentru anxietatea generalizată. Acestea sunt criterii de diagnostic, nu termene de așteptare. În practică, dacă o stare vă îngrijorează suficient încât să căutați informații despre ea, o discuție cu medicul de familie este un pas rezonabil. Medicul de familie poate face o primă triere și poate elibera biletul de trimitere către psihiatrie.</p>
      <p>Așteptarea prelungită are un cost concret: problemele de somn se cronicizează, anxietatea restrânge treptat zonele de confort, iar episodul depresiv netratat tinde să dureze mai mult. Pe de altă parte, nu este niciodată „prea târziu” pentru un consult. Medicii din clinică văd pacienți care vin după un an, după cinci sau după douăzeci.</p>
      <h2 id="prima-consultatie">Cum decurge prima consultație?</h2>
      <p>Prima întâlnire este, în esență, o conversație structurată. Medicul vrea să înțeleagă ce vă aduce la cabinet, de când, cum a evoluat, ce ați încercat deja și cum arată viața dumneavoastră în rest: muncă, familie, somn, alimentație, consum de alcool sau cafea, boli cunoscute, tratamente în curs. Vor fi și întrebări despre familie, pentru că unele afecțiuni au o componentă ereditară.</p>
      <p>Nu există teste de trecut sau picat. Uneori medicul folosește chestionare scurte pentru a măsura intensitatea unor simptome și pentru a avea un punct de comparație la controlul următor. Dacă există investigații recente (analize, examen neurologic, scrisori medicale de la alți specialiști), este util să le aveți la dumneavoastră.</p>
      <p>La final, medicul vă spune ce crede că se întâmplă, în măsura în care o primă întâlnire permite, și ce propune mai departe. Puteți pune orice întrebare: despre diagnostic, despre efectele unui tratament, despre alternative, despre cât va dura. O decizie luată împreună se respectă mai ușor decât una primită.</p>
      <h3>Ce să aveți la dumneavoastră</h3>
      <ul className="checklist">
        <li>Cardul de sănătate și biletul de trimitere, dacă veniți prin CAS</li>
        <li>Lista tratamentelor pe care le luați, inclusiv suplimente</li>
        <li>Scrisori medicale, analize sau investigații recente</li>
        <li>Câteva notițe: de când a început, ce s-a schimbat, ce vă îngrijorează cel mai mult</li>
      </ul>
      <h2 id="psihiatru-sau-psiholog">Psihiatru sau psiholog: la cine mergeți prima dată?</h2>
      <p>Depinde de ce vă aduce. Dacă simptomele sunt intense, afectează somnul și funcționarea sau au apărut brusc, psihiatrul este punctul de plecare: el poate exclude cauze medicale și poate stabili dacă este nevoie de tratament. Dacă problema este una de adaptare, de relație, de stres cu care vreți să lucrați, psihologul clinician sau psihoterapeutul poate fi primul pas.</p>
      <p>În multe cazuri, cele două se completează. La Clinica Dr. Iova, psihiatrii și psihologii lucrează în aceeași clinică, așa că o trimitere de la unul la celălalt se face fără să schimbați adresa. Am scris un articol separat despre{" "}<Link href="/blog/psihiatru-psiholog-psihoterapeut-diferente/">diferențele dintre psihiatru, psiholog și psihoterapeut</Link>.</p>
      <h2 id="cas">Cum ajungeți la psihiatru prin CAS?</h2>
      <p>Consultația de psihiatrie pentru adulți și copii este inclusă în pachetul de bază al asigurărilor de sănătate. Regula generală, conform Normelor metodologice ale Contractului-cadru (Ordinul MS/CNAS nr. 1857/441/2023), este că serviciile din ambulatoriul de specialitate se acordă pe baza biletului de trimitere eliberat de medicul de familie sau de alt medic specialist aflat în contract cu casa de asigurări.</p>
      <p>Pe un bilet de trimitere pentru o afecțiune acută sau subacută se decontează maximum 3 consultații în 60 de zile. Pentru afecțiuni cronice urmărite la aceeași specialitate, biletul acoperă maximum 4 consultații pe trimestru, nu mai mult de 2 pe lună, iar consultațiile a doua, a treia și a patra se fac direct, fără alt bilet.</p>
      <p>Normele prevăd și o excepție: persoanele cu anumite diagnostice psihiatrice deja stabilite (lista din Anexa 13 include, printre altele, tulburările din grupul schizofreniei, tulburările dispoziției, autismul, ADHD, tulburarea obsesiv-compulsivă, tulburarea de stres posttraumatic) se pot prezenta direct la psihiatru, fără bilet. Clinica Dr. Iova comunică în prezent consultațiile gratuite prin CAS pe bază de bilet de trimitere.{" "}<span className="todo">de confirmat cu clinica: aplicarea excepției din Anexa 13 pentru pacienții cu diagnostic deja stabilit</span></p>
      <p>Fără bilet de trimitere, consultația se plătește.{" "}<span className="todo">de cerut de la client: tariful consultației private de psihiatrie</span>{" "}Detalii pas cu pas, pe pagina{" "}<Link href="/cas/">Programare prin CAS</Link>.</p>
      <div className="note"><b>Programări prin CAS la Dr. Iova.</b>{" "}Clinica recomandă programarea cu minim o lună în avans pentru consultațiile prin CAS la Șef lucr. Dr. Sorin Iova (informație publicată de clinică la 31.05.2026). Pentru ceilalți medici psihiatri ai clinicii, recepția vă poate oferi un termen mai apropiat.{" "}<span className="todo">de cerut de la client: timpii de așteptare actuali pe medic</span></div>
      <h2 id="ajutor-urgent">Când să cereți ajutor imediat</h2>
      <p>Există situații în care nu se așteaptă o programare. Dacă o persoană vorbește despre a-și face rău sau a-și lua viața, dacă a pierdut contactul cu realitatea, dacă nu a mai mâncat sau băut de zile întregi, dacă este agitată într-un mod periculos pentru ea sau pentru ceilalți, este o urgență medicală.</p>
      <div className="note warn"><b>În caz de urgență sunați la 112</b>{" "}sau mergeți la cea mai apropiată unitate de primiri urgențe. În Oradea, Spitalul Clinic Județean de Urgență Bihor are secție de psihiatrie. Pentru adulții care trec printr-o criză cu gânduri suicidare, Alianța Română de Prevenție a Suicidului oferă linia gratuită{" "}<b>0800 801 200</b>, vineri, sâmbătă și duminică, între 19:00 și 07:00 (antisuicid.ro).</div>
      <section className="art-faq">
        <h2 id="intrebari-frecvente">Întrebări frecvente</h2>
        <div className="faq">
          <details>
            <summary>Am nevoie de bilet de trimitere pentru psihiatru?<Icon name="chevron-down" /></summary>
            <p>Pentru o consultație gratuită prin CAS, în general da: biletul vine de la medicul de familie sau de la alt medic specialist aflat în contract cu casa de asigurări. Normele CNAS prevăd și situații în care persoanele cu anumite diagnostice psihiatrice deja stabilite pot merge direct la psihiatru. Fără bilet, consultația se plătește.</p>
          </details>
          <details>
            <summary>Psihiatrul prescrie obligatoriu medicamente?<Icon name="chevron-down" /></summary>
            <p>Nu. Medicul recomandă ce consideră potrivit după evaluare: uneori tratament medicamentos, alteori psihoterapie, uneori doar urmărire în timp. Decizia se discută cu dumneavoastră.</p>
          </details>
          <details>
            <summary>Consultația rămâne confidențială?<Icon name="chevron-down" /></summary>
            <p>Da. Medicul este ținut de secretul profesional, iar datele medicale sunt date cu caracter special, protejate de GDPR. Informațiile nu ajung la angajator sau la familie fără acordul dumneavoastră, cu excepțiile prevăzute de lege.</p>
          </details>
          <details>
            <summary>Cât durează prima consultație?<Icon name="chevron-down" /></summary>
            <p>De regulă mai mult decât o consultație obișnuită, pentru că medicul are nevoie de timp să înțeleagă istoricul și contextul. Durata exactă diferă de la caz la caz.</p>
          </details>
          <details>
            <summary>Pot veni cu cineva din familie?<Icon name="chevron-down" /></summary>
            <p>Da, dacă vă este de ajutor. Medicul poate cere să discute și separat cu dumneavoastră.</p>
          </details>
        </div>
      </section>
      <div className="surse">
        <h2>Surse</h2>
        <ol>
          <li>Organizația Mondială a Sănătății, „Mental disorders&quot;, fișă informativă:{" "}<a href="https://www.who.int/news-room/fact-sheets/detail/mental-disorders" rel="noopener" target="_blank">who.int</a></li>
          <li>Ordinul MS/CNAS nr. 1857/441/2023, Normele metodologice de aplicare a HG 521/2023 (Contractul-cadru), Anexa 7 pct. 1.2.1–1.3.3 și Anexa 13 pct. 22, versiunea în vigoare de la 01.04.2025:{" "}<a href="https://cnas.ro" rel="noopener" target="_blank">cnas.ro</a></li>
          <li>Alianța Română de Prevenție a Suicidului, linia Antisuicid 0800 801 200:{" "}<a href="https://www.antisuicid.ro/" rel="noopener" target="_blank">antisuicid.ro</a></li>
          <li>Clinica Dr. Iova, postare Facebook 31.05.2026 (programări CAS la Dr. Iova cu minim o lună în avans)</li>
        </ol>
        <p className="art-disclaimer">Articol cu scop informativ, scris de echipa clinicii. Nu înlocuiește consultația medicală și nu stabilește diagnostice. Reguli CNAS verificate la 21.10.2026.</p>
      </div>
    </>
  );
}
