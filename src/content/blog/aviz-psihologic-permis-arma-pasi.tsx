import Icon from "@/components/Icon";

export default function PostBody() {
  return (
    <>
      <div className="pe-scurt" data-reveal="">
        <div className="lbl"><Icon name="zap" />Pe scurt</div>
        <p>Avizul psihologic pentru permisul de armă este cerut de Legea nr. 295/2004 privind regimul armelor și munițiilor și de normele ei de aplicare (HG nr. 11/2018). Este eliberat de un psiholog atestat, în original, cu cel mult 6 luni înaintea depunerii cererii la poliție, și atestă că solicitantul este apt să dețină, să poarte și să folosească arme și muniții. Este un document separat de certificatul medical. Evaluarea include interviu și probe psihologice standardizate și se plătește, nefiind decontată prin CAS. La Clinica Dr. Iova din Oradea, avizul se eliberează în cadrul serviciului de psihologie clinică.</p>
      </div>
      <h2 id="baza-legala">Ce spune legea?</h2>
      <p>Regimul armelor în România este reglementat de{" "}<strong>Legea nr. 295/2004</strong>, republicată, cu modificările ulterioare. Printre condițiile pentru autorizarea procurării și deținerii de arme letale, legea cere ca persoana să fie aptă din punct de vedere medical și psihologic. Normele metodologice de aplicare, aprobate prin{" "}<strong>HG nr. 11/2018</strong>, detaliază documentele din dosar.</p>
      <p>Pentru aviz, normele cer un document în original, din care să rezulte că solicitantul este apt să dețină, să poarte și să folosească arme și muniții letale sau neletale supuse autorizării, eliberat cu cel mult 6 luni înaintea depunerii cererii, de un psiholog autorizat pentru efectuarea unor astfel de teste, atestat în condițiile legii.</p>
      <p>Două lucruri merită reținute din această formulare. Primul: avizul trebuie să fie{" "}<strong>recent</strong>, maximum 6 luni la data depunerii. Al doilea: trebuie să vină de la un{" "}<strong>psiholog atestat</strong>{" "}pentru acest tip de evaluare, nu de la orice cabinet. Colegiul Psihologilor din România ține registrul psihologilor cu drept de liberă practică, pe specialități.{" "}<span className="todo">de cerut de la client: specialitatea și atestatul psihologului care eliberează avizele în clinică</span></p>
      <h2 id="aviz-vs-certificat">Avizul psihologic și certificatul medical: două documente diferite</h2>
      <p>Dosarul de la poliție conține amândouă, iar confuzia este frecventă.</p>
      <table>
        <thead>
          <tr>
            <th>
            </th>
            <th>Certificatul medical</th>
            <th>Avizul psihologic</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cine îl eliberează</td>
            <td>O unitate sanitară autorizată pentru examinarea ambulatorie în vederea deținerii de arme</td>
            <td>Un psiholog atestat pentru acest tip de evaluare</td>
          </tr>
          <tr>
            <td>Ce atestă</td>
            <td>Că persoana nu suferă de o afecțiune medicală incompatibilă cu deținerea armelor</td>
            <td>Că persoana este aptă psihologic să dețină, să poarte și să folosească arme</td>
          </tr>
          <tr>
            <td>Valabilitate la depunere</td>
            <td>Eliberat cu cel mult 6 luni înainte</td>
            <td>Eliberat cu cel mult 6 luni înainte</td>
          </tr>
          <tr>
            <td>Ce presupune</td>
            <td>Examinări în mai multe specialități medicale</td>
            <td>Interviu și probe psihologice standardizate</td>
          </tr>
        </tbody>
      </table>
      <p>Clinica Dr. Iova eliberează avizul psihologic. Certificatul medical se obține separat, de la o unitate autorizată pentru acest scop.{" "}<span className="todo">de cerut de la client: dacă clinica oferă și examinarea psihiatrică din componența certificatului medical pentru arme</span></p>
      <h2 id="evaluarea">Cum decurge evaluarea psihologică?</h2>
      <p>Scopul evaluării este să stabilească dacă persoana are, la momentul respectiv, echilibrul emoțional, autocontrolul, capacitatea de judecată și stabilitatea necesare pentru a deține o armă în siguranță, pentru ea și pentru ceilalți. Nu este o evaluare clinică completă și nu caută diagnostice. Caută aptitudinea pentru o activitate anume.</p>
      <p>Asociația Psihologilor din România a publicat în 2022 un ghid pentru această evaluare, care recomandă o abordare pe mai multe paliere: interviu structurat, probe de personalitate, probe privind controlul impulsurilor și gestionarea agresivității, probe cognitive, verificarea consumului de substanțe și a istoricului relevant. Instrumentele concrete le alege psihologul.</p>
      <p>În practică, evaluarea arată astfel:</p>
      <ol>
        <li><strong>Identificare și consimțământ.</strong>{" "}Prezentați actul de identitate și semnați consimțământul pentru evaluare și pentru prelucrarea datelor.</li>
        <li><strong>Interviul.</strong>{" "}Psihologul discută cu dumneavoastră despre motivul solicitării (vânătoare, tir sportiv, autoapărare, colecție), istoricul medical și psihologic, consumul de alcool sau alte substanțe, situația de viață, modul în care gestionați conflictele și stresul.</li>
        <li><strong>Probele standardizate.</strong>{" "}Chestionare de personalitate și probe specifice, completate pe hârtie sau pe calculator. Nu există răspunsuri „bune” sau „rele” de memorat; probele au scale care detectează răspunsurile nesincere.</li>
        <li><strong>Concluzia.</strong>{" "}Psihologul integrează rezultatele și eliberează avizul, cu concluzia apt sau inapt. Vă explică rezultatul.</li>
      </ol>
      <p>Durata unei evaluări serioase depășește de regulă o oră. Un aviz eliberat în câteva minute, fără probe, nu respectă nici ghidul profesional, nici spiritul legii.{" "}<span className="todo">de cerut de la client: durata evaluării, tariful, dacă este nevoie de programare și când se eliberează avizul</span></p>
      <blockquote className="pull">Avizul nu măsoară cât de bun trăgător sunteți. Măsoară dacă, în zilele proaste, arma rămâne în seif.</blockquote>
      <h2 id="dosar">Ce acte intră în dosarul de la poliție?</h2>
      <p>Cererea se depune la inspectoratul județean de poliție de care aparțineți cu domiciliul (pentru Oradea și județul Bihor, IPJ Bihor), la structura de arme, explozivi și substanțe periculoase. Conform HG 11/2018, pentru autorizarea procurării de arme letale, persoanele fizice depun în principal:</p>
      <ul className="checklist">
        <li>Cerere-tip</li>
        <li>Actul de identitate, în original</li>
        <li>Certificatul medical, în original, eliberat cu cel mult 6 luni înainte</li>
        <li>Avizul psihologic, în original, eliberat cu cel mult 6 luni înainte</li>
        <li>Certificatul de absolvire a cursului de instruire teoretică și practică în domeniul armelor, eliberat de o persoană juridică autorizată</li>
        <li>Documentul care dovedește calitatea cerută de lege, după caz (permis de vânătoare, legitimație de sportiv sau antrenor de tir, atestat de colecționar etc.)</li>
        <li>Fotografii color, în formatul cerut</li>
        <li>Dovada deținerii legale a spațiului de depozitare, după caz</li>
        <li>Dovada plății taxelor</li>
      </ul>
      <p>Lista completă și actualizată, inclusiv pentru armele neletale supuse autorizării și pentru prelungirea permisului, se găsește la poliție. Verificați acolo înainte de a depune dosarul; cerințele de formă (dimensiunea fotografiilor, taxele) se pot schimba.</p>
      <h2 id="reinnoire">Când se reînnoiește avizul?</h2>
      <p>Permisul de armă are o valabilitate de 5 ani, calculată de la eliberare sau de la ultima prelungire. La prelungire, dosarul cuprinde din nou certificatul medical și avizul psihologic recente, alături de celelalte documente cerute. Legea permite și poliției să solicite deținătorului o reexaminare psihologică sau medicală între termene, atunci când constată motivat că este necesară pentru menținerea autorizării.</p>
      <p>Practic, cineva care deține arme va face această evaluare cel puțin o dată la 5 ani. Este util să o programați cu câteva săptămâni înainte de expirarea permisului, astfel încât avizul să fie recent la depunere și să aveți timp pentru restul dosarului.</p>
      <h2 id="ajutor">Când să cereți ajutor</h2>
      <p>Evaluarea pentru aviz este un moment în care psihologul discută deschis cu dumneavoastră despre stres, somn, consum de alcool și felul în care gestionați conflictele. Dacă din această discuție reiese că o perioadă este mai grea decât de obicei, psihologul vă poate recomanda o consultație separată, fără legătură cu dosarul. Nu este o sancțiune, ci o observație profesională.</p>
      <div className="note warn"><b>În caz de urgență sunați la 112.</b>{" "}Dacă o persoană care deține o armă trece printr-o criză și vorbește despre a-și face rău sau a face rău altora, nu așteptați o programare. Puneți arma în siguranță și cereți ajutor imediat.</div>
      <section className="art-faq">
        <h2 id="intrebari-frecvente">Întrebări frecvente</h2>
        <div className="faq">
          <details>
            <summary>Cât timp este valabil avizul psihologic pentru armă?<Icon name="chevron-down" /></summary>
            <p>Normele de aplicare a Legii 295/2004 (HG 11/2018) cer ca avizul psihologic să fie eliberat cu cel mult 6 luni înaintea depunerii cererii la poliție. Același termen se aplică certificatului medical.</p>
          </details>
          <details>
            <summary>Avizul psihologic este același lucru cu certificatul medical?<Icon name="chevron-down" /></summary>
            <p>Nu. Sunt două documente separate. Certificatul medical este eliberat de o unitate sanitară autorizată, după examinări în mai multe specialități. Avizul psihologic este eliberat de un psiholog atestat, după o evaluare psihologică.</p>
          </details>
          <details>
            <summary>Cât durează evaluarea psihologică?<Icon name="chevron-down" /></summary>
            <p>O evaluare serioasă include interviu și probe standardizate și durează, de regulă, mai mult de o oră. Durata exactă la clinică este de confirmat cu recepția.</p>
          </details>
          <details>
            <summary>Avizul este decontat prin CAS?<Icon name="chevron-down" /></summary>
            <p>Nu. Avizul psihologic pentru permis de armă nu este un serviciu medical din pachetul de bază; se plătește.</p>
          </details>
          <details>
            <summary>Ce se întâmplă dacă nu primesc aviz favorabil?<Icon name="chevron-down" /></summary>
            <p>Psihologul vă explică rezultatul. Un aviz nefavorabil nu este un diagnostic, ci o concluzie privind aptitudinea pentru o activitate anume, la momentul evaluării.</p>
          </details>
          <details>
            <summary>La ce interval se reînnoiește?<Icon name="chevron-down" /></summary>
            <p>Permisul de armă se prelungește la fiecare 5 ani, iar la prelungire se depune din nou un aviz psihologic recent. Poliția poate solicita o reexaminare și între termene, motivat.</p>
          </details>
        </div>
      </section>
      <div className="surse">
        <h2>Surse</h2>
        <ol>
          <li>Legea nr. 295/2004 privind regimul armelor și al munițiilor, republicată, cu modificările ulterioare:{" "}<a href="https://legislatie.just.ro" rel="noopener" target="_blank">legislatie.just.ro</a></li>
          <li>HG nr. 11/2018 pentru aprobarea Normelor metodologice de aplicare a Legii nr. 295/2004 (documentele necesare autorizării; avizul psihologic și certificatul medical eliberate cu cel mult 6 luni înaintea depunerii cererii):{" "}<a href="https://legislatie.just.ro" rel="noopener" target="_blank">legislatie.just.ro</a>; sinteză InfoCons:{" "}<a href="https://infocons.ro/cum-se-obtine-permisul-de-portarma-vezi-ce-acte-ai-nevoie/" rel="noopener" target="_blank">infocons.ro</a></li>
          <li>Asociația Psihologilor din România, „Ghid pentru pregătirea și desfășurarea evaluării psihologice a persoanelor care solicită deținerea și utilizarea armelor de foc și munițiilor supuse autorizării&quot;, 01.11.2022</li>
          <li>Poliția Română, informații privind regimul armelor (valabilitatea permisului de 5 ani, prelungirea, reexaminarea la solicitarea poliției):{" "}<a href="https://www.politiaromana.ro" rel="noopener" target="_blank">politiaromana.ro</a></li>
        </ol>
        <p className="art-disclaimer">Articol cu scop informativ. Cerințele administrative se pot modifica; verificați lista actuală de documente la inspectoratul de poliție înainte de depunerea dosarului. Informații verificate la 21.10.2026.</p>
      </div>
    </>
  );
}
