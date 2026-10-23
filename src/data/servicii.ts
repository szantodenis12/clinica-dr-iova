// Structured data of the service pages (generated once from the Python site fragments, now maintained by hand).
// The page body and the rich "Pe scurt" values live in src/content/servicii/<slug>.tsx.

export type RelCard = { slug: string; icon: string; name: string; short: string };
export type ArticleCard = { slug: string; kicker: string; title: string };

export type Service = {
  slug: string;
  /** og:image from the original fragment meta */
  ogImage: string;
  /** JSON-LD objects (MedicalWebPage, FAQPage) */
  schema: object[];
  breadcrumb: [string, string][];
  header: {
    kicker: string;
    h1: string;
    intro: string;
    /** [lucide icon, text] */
    facts: [string, string][];
    hero: { src: string; alt: string; fallback: string; [k: string]: string };
    caption: string;
  };
  /** [anchor id, label] */
  toc: [string, string][];
  /** "Pe scurt" rows: [lucide icon, label]; the values are JSX in the content module (`kf`) */
  kf: [string, string][];
  related: string[];
  articles: string[];
  cta: { h2: string; p: string };
};

export const relCards: Record<string, RelCard> = {
  "psihologie-clinica": {
    slug: "psihologie-clinica",
    icon: "message-circle-heart",
    name: "Psihologie clinică",
    short: "Evaluare psihologică și psihodiagnostic pentru copii și adulți.",
  },
  "evaluari-comisii": {
    slug: "evaluari-comisii",
    icon: "file-check",
    name: "Evaluări pentru comisii",
    short: "Documente medicale și psihologice pentru comisiile de handicap și de pensionare.",
  },
  "psihiatrie-adulti": {
    slug: "psihiatrie-adulti",
    icon: "brain",
    name: "Psihiatrie pentru adulți",
    short: "Consultație, diagnostic și urmărirea tratamentului în timp.",
  },
  "consiliere-psihologica": {
    slug: "consiliere-psihologica",
    icon: "messages-square",
    name: "Consiliere psihologică",
    short: "Întâlniri pe termen scurt, pentru o dificultate concretă din prezent.",
  },
  "psihoterapie-integrativa": {
    slug: "psihoterapie-integrativa",
    icon: "armchair",
    name: "Psihoterapie integrativă",
    short: "Ședințe individuale, cu metode alese după nevoile fiecărei persoane.",
  },
  "evaluarea-copiilor": {
    slug: "evaluarea-copiilor",
    icon: "puzzle",
    name: "Evaluarea copiilor",
    short: "Evaluare psihologică a dezvoltării, cu raport scris și recomandări.",
  },
  "psihiatrie-pediatrica": {
    slug: "psihiatrie-pediatrica",
    icon: "baby",
    name: "Psihiatrie pediatrică",
    short: "Evaluarea copilului și a adolescentului, împreună cu părinții.",
  },
  neurologie: {
    slug: "neurologie",
    icon: "activity",
    name: "Neurologie",
    short: "Consult neurologic pentru adulți, în aceeași clinică.",
  },
  logopedie: {
    slug: "logopedie",
    icon: "audio-lines",
    name: "Logopedie",
    short: "Evaluarea și terapia tulburărilor de limbaj la copii, cu Forbrain.",
  },
  "consultatii-cas": {
    slug: "consultatii-cas",
    icon: "receipt",
    name: "Consultații prin CAS",
    short: "Cum folosiți biletul de trimitere la Clinica Dr. Iova.",
  },
  "terapie-emdr": {
    slug: "terapie-emdr",
    icon: "eye",
    name: "Terapie EMDR",
    short:
      "Metodă structurată pentru amintiri greu de dus, recomandată de OMS pentru stresul posttraumatic.",
  },
};

export const articleCards: Record<string, ArticleCard> = {
  "aviz-psihologic-permis-arma-pasi": {
    slug: "aviz-psihologic-permis-arma-pasi",
    kicker: "Avize",
    title: "Avizul psihologic pentru permisul de armă: pașii",
  },
  "psihiatru-psiholog-psihoterapeut-diferente": {
    slug: "psihiatru-psiholog-psihoterapeut-diferente",
    kicker: "Ghid",
    title: "Psihiatru, psiholog, psihoterapeut: care este diferența",
  },
  "cand-mergem-la-psihiatru": {
    slug: "cand-mergem-la-psihiatru",
    kicker: "Psihiatrie",
    title: "Când mergem la psihiatru",
  },
  "evaluare-psihiatrica-copil-ce-presupune": {
    slug: "evaluare-psihiatrica-copil-ce-presupune",
    kicker: "Copii",
    title: "Evaluarea psihiatrică a copilului: ce presupune",
  },
  "consultatie-psihiatrie-cas-bilet-trimitere": {
    slug: "consultatie-psihiatrie-cas-bilet-trimitere",
    kicker: "CAS",
    title: "Consultația de psihiatrie prin CAS, cu bilet de trimitere",
  },
  "repere-dezvoltare-limbaj-copii-0-5-ani": {
    slug: "repere-dezvoltare-limbaj-copii-0-5-ani",
    kicker: "Copii",
    title: "Repere în dezvoltarea limbajului la copii, 0–5 ani",
  },
};

export const servicii: Service[] = [
  {
    slug: "psihiatrie-adulti",
    ogImage: "/img/Image6.jpg",
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        name: "Psihiatrie adulți în Oradea | Clinica Dr. Iova",
        url: "https://clinicadriova.ro/servicii/psihiatrie-adulti/",
        description:
          "Psihiatrie pentru adulți la Clinica Dr. Iova, Oradea: evaluare, diagnostic și urmărirea tratamentului. Gratuit prin CAS, cu bilet. Tel. 0359 450 657.",
        inLanguage: "ro",
        lastReviewed: "2026-10-21",
        specialty: "https://schema.org/Psychiatric",
        medicalAudience: {
          "@type": "MedicalAudience",
          audienceType: "Patient",
        },
        about: {
          "@type": "MedicalProcedure",
          name: "Consultație de psihiatrie pentru adulți",
          procedureType: "https://schema.org/NoninvasiveProcedure",
          provider: {
            "@id": "https://clinicadriova.ro/#clinica",
          },
        },
        publisher: {
          "@id": "https://clinicadriova.ro/#clinica",
        },
        mentions: [
          {
            "@type": "Physician",
            name: "Șef lucr. Dr. Sorin Iova",
            url: "https://clinicadriova.ro/medici/sorin-iova/",
          },
          {
            "@type": "Physician",
            name: "Dr. Sebastian Macrea",
            url: "https://clinicadriova.ro/medici/sebastian-macrea/",
          },
          {
            "@type": "Physician",
            name: "Dr. Adriana Maties",
            url: "https://clinicadriova.ro/medici/adriana-maties/",
          },
          {
            "@type": "Physician",
            name: "Dr. Theodor Nicolau",
            url: "https://clinicadriova.ro/medici/theodor-nicolau/",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Am nevoie de bilet de trimitere pentru psihiatru?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Pentru consultația gratuită prin CAS, da: bilet de la medicul de familie sau de la alt medic specialist în contract cu casa de asigurări. Fără bilet, consultația se plătește la clinică.",
            },
          },
          {
            "@type": "Question",
            name: "Cât durează până primesc o programare?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Depinde de medic și de perioadă. Programările prin CAS la Dr. Iova se fac cu minim o lună în avans. Pentru ceilalți medici, întrebați recepția la 0359 450 657.",
            },
          },
          {
            "@type": "Question",
            name: "Consultația la psihiatru înseamnă obligatoriu medicamente?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Nu. Medicul recomandă tratament medicamentos doar când consideră că este necesar. Uneori recomandarea este psihoterapie, investigații sau un control la altă specialitate.",
            },
          },
          {
            "@type": "Question",
            name: "Pot veni cu cineva la consultație?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Da. Puteți fi însoțit de o persoană apropiată. Medicul poate discuta cu dumneavoastră și separat, dacă doriți.",
            },
          },
          {
            "@type": "Question",
            name: "Diagnosticul meu rămâne confidențial?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Da. Informațiile medicale sunt protejate de secretul profesional și de regulile de protecție a datelor. Nu se comunică angajatorului, familiei sau altor persoane fără acordul dumneavoastră, cu excepțiile prevăzute de lege.",
            },
          },
          {
            "@type": "Question",
            name: "Tratați și adolescenți?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Pentru copii și adolescenți sub 18 ani există psihiatrie pediatrică, cu Dr. Roxana Samuila.",
            },
          },
          {
            "@type": "Question",
            name: "Ce fac într-o situație de urgență?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sunați la 112 sau mergeți la cea mai apropiată unitate de primiri urgențe. Clinica funcționează pe bază de programare și nu are serviciu de urgență.",
            },
          },
        ],
      },
    ],
    breadcrumb: [
      ["Servicii", "/servicii/"],
      ["Psihiatrie pentru adulți", "/servicii/psihiatrie-adulti/"],
    ],
    header: {
      kicker: "Psihiatrie · Adulți",
      h1: "Psihiatrie pentru adulți",
      intro:
        "La Clinica Dr. Iova din Oradea, consultația de psihiatrie pentru adulți înseamnă o discuție de evaluare cu un medic psihiatru, stabilirea unui diagnostic și a unui plan de tratament, apoi controale periodice. Consultă un medic primar și patru medici specialiști. Cu bilet de trimitere, consultația este gratuită prin CAS Bihor.",
      facts: [
        ["receipt", "Gratuit prin CAS, cu bilet"],
        ["clock", "Luni–vineri, 08:00–20:00"],
        ["map-pin", "Str. Ceyrat 31, Oradea"],
        ["shield-check", "Confidențialitate medicală"],
      ],
      hero: {
        src: "/img/gen/serv-psihiatrie-adulti.jpg",
        alt: "Psihiatrie pentru adulți, Clinica Dr. Iova, Oradea",
        "data-parallax": "0.06",
        fallback: "/img/Image6.jpg",
      },
      caption: "Clinica Dr. Iova · Oradea",
    },
    toc: [
      ["pe-scurt", "Pe scurt"],
      ["ce-este", "Ce face un medic psihiatru?"],
      ["ce-tratam", "Cu ce probleme se prezintă pacienții?"],
      ["tratament", "Cum se desfășoară tratamentul în timp?"],
      ["prima-consultatie", "Prima consultație"],
      ["cand-merita", "Când merită o programare"],
      ["cine-va-consulta", "Cine vă consultă"],
      ["cas", "Prin CAS"],
      ["intrebari", "Întrebări frecvente"],
    ],
    kf: [
      ["users", "Cine"],
      ["map-pin", "Unde"],
      ["receipt", "Prin CAS"],
      ["calendar", "Cum vă programați"],
      ["folder", "Ce aduceți"],
      ["clock", "Durată"],
    ],
    related: ["psihologie-clinica", "psihoterapie-integrativa", "neurologie", "consultatii-cas"],
    articles: [
      "cand-mergem-la-psihiatru",
      "psihiatru-psiholog-psihoterapeut-diferente",
      "consultatie-psihiatrie-cas-bilet-trimitere",
    ],
    cta: {
      h2: "Programare la psihiatrie pentru adulți",
      p: "Sunați la recepție de luni până vineri, între 08:00 și 20:00, sau trimiteți o cerere online. Cu bilet de trimitere, consultația este gratuită prin CAS.",
    },
  },
  {
    slug: "psihiatrie-pediatrica",
    ogImage: "/img/Image9.jpg",
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        name: "Psihiatrie pediatrică Oradea | Clinica Dr. Iova",
        url: "https://clinicadriova.ro/servicii/psihiatrie-pediatrica/",
        description:
          "Psihiatrie pediatrică la Clinica Dr. Iova, Oradea: evaluarea copilului și a adolescentului împreună cu părinții. Gratuit prin CAS, cu bilet de trimitere.",
        inLanguage: "ro",
        lastReviewed: "2026-10-21",
        specialty: "https://schema.org/Psychiatric",
        medicalAudience: {
          "@type": "MedicalAudience",
          audienceType: "Patient",
        },
        about: {
          "@type": "MedicalProcedure",
          name: "Consultație de psihiatrie pediatrică",
          procedureType: "https://schema.org/NoninvasiveProcedure",
          provider: {
            "@id": "https://clinicadriova.ro/#clinica",
          },
        },
        publisher: {
          "@id": "https://clinicadriova.ro/#clinica",
        },
        mentions: [
          {
            "@type": "Physician",
            name: "Dr. Roxana Samuila",
            url: "https://clinicadriova.ro/medici/roxana-samuila/",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "De la ce vârstă se poate face o consultație de psihiatrie pediatrică?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "De la vârste mici, atunci când există îngrijorări legate de dezvoltare, până la 18 ani. Pentru copiii foarte mici, evaluarea se bazează mult pe observație și pe discuția cu părinții.",
            },
          },
          {
            "@type": "Question",
            name: "Trebuie să vină ambii părinți?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Nu este obligatoriu, dar este util: fiecare părinte observă alte lucruri. Copilul trebuie însoțit de un părinte sau de reprezentantul legal.",
            },
          },
          {
            "@type": "Question",
            name: "Copilul primește medicamente?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Nu neapărat. La copii, prima recomandare este de multe ori o intervenție nemedicamentoasă: terapie, logopedie, consiliere pentru părinți. Medicul discută cu dumneavoastră fiecare opțiune.",
            },
          },
          {
            "@type": "Question",
            name: "Ce este diferit față de o evaluare psihologică?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Psihiatrul pediatru este medic și stabilește diagnosticul medical. Psihologul clinician face evaluarea psihologică: testează dezvoltarea, atenția, limbajul, emoțiile și scrie un raport. Deseori sunt necesare amândouă.",
            },
          },
          {
            "@type": "Question",
            name: "Avem nevoie de bilet de trimitere?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Pentru consultația gratuită prin CAS, da: de la medicul de familie sau de la alt medic specialist. Fără bilet, consultația se plătește la clinică.",
            },
          },
          {
            "@type": "Question",
            name: "Puteți elibera documente pentru școală sau pentru comisie?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Da. Medicul poate elibera, după evaluare, documentele medicale necesare pentru orientarea școlară sau pentru comisia de evaluare, atunci când situația o cere.",
            },
          },
        ],
      },
    ],
    breadcrumb: [
      ["Servicii", "/servicii/"],
      ["Psihiatrie pediatrică", "/servicii/psihiatrie-pediatrica/"],
    ],
    header: {
      kicker: "Psihiatrie · Copii și adolescenți",
      h1: "Psihiatrie pediatrică",
      intro:
        "Psihiatria pediatrică se ocupă de sănătatea mintală a copiilor și adolescenților, de la vârste mici până la 18 ani. La Clinica Dr. Iova din Oradea, Dr. Roxana Samuila, medic specialist în psihiatrie pediatrică, evaluează copilul împreună cu părinții și stabilește, dacă este cazul, un diagnostic și un plan de intervenție. Consultația este gratuită prin CAS, cu bilet de trimitere.",
      facts: [
        ["receipt", "Gratuit prin CAS, cu bilet"],
        ["users", "Părinții participă la consultație"],
        ["map-pin", "Str. Ceyrat 31, Oradea"],
        ["puzzle", "Psiholog și logoped în aceeași clinică"],
      ],
      hero: {
        src: "/img/gen/serv-psihiatrie-pediatrica.jpg",
        alt: "Cabinet de psihiatrie pediatrică, Clinica Dr. Iova, Oradea",
        "data-parallax": "0.06",
        fallback: "/img/Image9.jpg",
      },
      caption: "Clinica Dr. Iova · Oradea",
    },
    toc: [
      ["pe-scurt", "Pe scurt"],
      ["ce-este", "Ce face un medic psihiatru pediatru?"],
      ["ce-tratam", "Cu ce probleme vin părinții?"],
      ["autism", "Ce se întâmplă după un diagnostic din spectrul autist?"],
      ["prima-consultatie", "Prima consultație"],
      ["cand-merita", "Când merită o programare"],
      ["cine-va-consulta", "Cine vă consultă"],
      ["cas", "Prin CAS"],
      ["intrebari", "Întrebări frecvente"],
    ],
    kf: [
      ["users", "Cine"],
      ["map-pin", "Unde"],
      ["receipt", "Prin CAS"],
      ["calendar", "Cum vă programați"],
      ["folder", "Ce aduceți"],
      ["clock", "Durată"],
    ],
    related: ["evaluarea-copiilor", "logopedie", "psihologie-clinica", "consultatii-cas"],
    articles: [
      "evaluare-psihiatrica-copil-ce-presupune",
      "repere-dezvoltare-limbaj-copii-0-5-ani",
      "consultatie-psihiatrie-cas-bilet-trimitere",
    ],
    cta: {
      h2: "Programare la psihiatrie pediatrică",
      p: "Sunați la recepție și spuneți vârsta copilului. Vă spunem dacă aveți nevoie de bilet de trimitere și când este primul loc liber.",
    },
  },
  {
    slug: "neurologie",
    ogImage: "/img/Image7.jpg",
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        name: "Neurologie Oradea | Consult neurologic | Clinica Dr. Iova",
        url: "https://clinicadriova.ro/servicii/neurologie/",
        description:
          "Consult neurologic pentru adulți la Clinica Dr. Iova, Oradea, cu Dr. Titus Moga, medic specialist neurolog. Gratuit prin CAS, cu bilet. Tel. 0359 450 657.",
        inLanguage: "ro",
        lastReviewed: "2026-10-21",
        specialty: "https://schema.org/Neurologic",
        medicalAudience: {
          "@type": "MedicalAudience",
          audienceType: "Patient",
        },
        about: {
          "@type": "MedicalProcedure",
          name: "Consult neurologic",
          procedureType: "https://schema.org/NoninvasiveProcedure",
          provider: {
            "@id": "https://clinicadriova.ro/#clinica",
          },
        },
        publisher: {
          "@id": "https://clinicadriova.ro/#clinica",
        },
        mentions: [
          {
            "@type": "Physician",
            name: "As. Univ. Dr. Titus Moga",
            url: "https://clinicadriova.ro/medici/titus-moga/",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Am nevoie de bilet de trimitere la neurolog?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Pentru consultația gratuită prin CAS, da: bilet de la medicul de familie sau de la alt medic specialist în contract cu casa de asigurări. Fără bilet, consultația se plătește la clinică.",
            },
          },
          {
            "@type": "Question",
            name: "Se fac investigații (EEG, EMG, RMN) în clinică?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Medicul recomandă investigațiile necesare și vă spune unde le puteți face. Lista investigațiilor disponibile pe loc: de cerut de la client.",
            },
          },
          {
            "@type": "Question",
            name: "Durerea de cap este motiv de consult neurologic?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Da, atunci când durerile sunt frecvente, se schimbă ca intensitate sau caracter, sau nu răspund la tratamentul obișnuit. O durere de cap foarte puternică apărută brusc este o urgență: sunați la 112.",
            },
          },
          {
            "@type": "Question",
            name: "Ce aduc la consultație?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Actul de identitate, cardul de sănătate, biletul de trimitere, rezultate anterioare (CT, RMN, EEG, analize), bilete de externare și lista medicamentelor pe care le luați.",
            },
          },
          {
            "@type": "Question",
            name: "Consultați și copii la neurologie?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Consultul neurologic la Clinica Dr. Iova se adresează adulților. Pentru copii, clinica oferă psihiatrie pediatrică, evaluare psihologică și logopedie. Neurologie pediatrică: de confirmat cu clientul.",
            },
          },
          {
            "@type": "Question",
            name: "Când merg la neurolog și când la psihiatru?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Dacă nu sunteți sigur, sunați la recepție și descrieți pe scurt problema. Medicii celor două specialități lucrează în aceeași clinică și își pot trimite reciproc pacienții.",
            },
          },
        ],
      },
    ],
    breadcrumb: [
      ["Servicii", "/servicii/"],
      ["Neurologie", "/servicii/neurologie/"],
    ],
    header: {
      kicker: "Neurologie · Adulți",
      h1: "Neurologie",
      intro:
        "Consultul neurologic la Clinica Dr. Iova din Oradea este susținut de As. Univ. Dr. Titus Moga, medic specialist neurolog. Neurologia se ocupă de bolile creierului, ale măduvei spinării, ale nervilor și ale mușchilor: dureri de cap, amețeli, epilepsie, boli neurodegenerative, neuropatii, urmărirea după un accident vascular cerebral. Cu bilet de trimitere, consultația este gratuită prin CAS Bihor.",
      facts: [
        ["receipt", "Gratuit prin CAS, cu bilet"],
        ["graduation-cap", "Medic cadru universitar"],
        ["map-pin", "Str. Ceyrat 31, Oradea"],
        ["brain", "Psihiatrie în aceeași clinică"],
      ],
      hero: {
        src: "/img/gen/serv-neurologie.jpg",
        alt: "Cabinet de neurologie, Clinica Dr. Iova, Oradea",
        "data-parallax": "0.06",
        fallback: "/img/Image7.jpg",
      },
      caption: "Clinica Dr. Iova · Oradea",
    },
    toc: [
      ["pe-scurt", "Pe scurt"],
      ["ce-este", "Ce face un medic neurolog?"],
      ["ce-tratam", "Cu ce probleme se prezintă pacienții la neurolog?"],
      ["investigatii", "Ce investigații pot fi recomandate?"],
      ["prima-consultatie", "Prima consultație"],
      ["cand-merita", "Când merită o programare"],
      ["cine-va-consulta", "Cine vă consultă"],
      ["cas", "Prin CAS"],
      ["intrebari", "Întrebări frecvente"],
    ],
    kf: [
      ["users", "Cine"],
      ["map-pin", "Unde"],
      ["receipt", "Prin CAS"],
      ["calendar", "Cum vă programați"],
      ["folder", "Ce aduceți"],
      ["clock", "Durată"],
    ],
    related: ["psihiatrie-adulti", "psihologie-clinica", "evaluari-comisii", "consultatii-cas"],
    articles: [
      "psihiatru-psiholog-psihoterapeut-diferente",
      "consultatie-psihiatrie-cas-bilet-trimitere",
      "cand-mergem-la-psihiatru",
    ],
    cta: {
      h2: "Programare la neurologie",
      p: "Sunați la recepție de luni până vineri, între 08:00 și 20:00, sau trimiteți o cerere online. Cu bilet de trimitere, consultația este gratuită prin CAS.",
    },
  },
  {
    slug: "psihologie-clinica",
    ogImage: "/img/Image1.jpg",
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        name: "Psihologie clinică Oradea | Evaluare | Clinica Dr. Iova",
        url: "https://clinicadriova.ro/servicii/psihologie-clinica/",
        description:
          "Psihologie clinică la Clinica Dr. Iova, Oradea: evaluare psihologică și psihodiagnostic pentru copii și adulți, cu raport scris. Peste 400 de evaluări pe lună.",
        inLanguage: "ro",
        lastReviewed: "2026-10-21",
        specialty: "https://schema.org/Psychiatric",
        medicalAudience: {
          "@type": "MedicalAudience",
          audienceType: "Patient",
        },
        about: {
          "@type": "MedicalProcedure",
          name: "Evaluare psihologică clinică",
          procedureType: "https://schema.org/NoninvasiveProcedure",
          provider: {
            "@id": "https://clinicadriova.ro/#clinica",
          },
        },
        publisher: {
          "@id": "https://clinicadriova.ro/#clinica",
        },
        mentions: [
          {
            "@type": "Person",
            name: "Psih. Mihaela Caba",
            url: "https://clinicadriova.ro/medici/mihaela-caba/",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Care este diferența dintre psiholog și psihiatru?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Psihiatrul este medic: pune diagnostic medical și poate prescrie medicamente. Psihologul clinician evaluează cu instrumente standardizate și oferă consiliere sau psihoterapie, dar nu prescrie medicamente. Deseori lucrează împreună.",
            },
          },
          {
            "@type": "Question",
            name: "Am nevoie de trimitere de la medic pentru o evaluare psihologică?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Puteți veni și fără recomandare. Dacă evaluarea este cerută de un medic, de școală sau de o comisie, aduceți documentul care o solicită, ca psihologul să știe la ce întrebare trebuie să răspundă raportul.",
            },
          },
          {
            "@type": "Question",
            name: "Cât durează o evaluare?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Depinde de scop și de vârstă. Unele evaluări se fac într-o singură întâlnire, altele în două sau trei. Durata orientativă la clinică: de cerut de la client.",
            },
          },
          {
            "@type": "Question",
            name: "Primesc un document scris?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Da. Rezultatul evaluării este un raport psihologic scris, cu concluzii și recomandări, pe care îl puteți prezenta medicului, școlii sau comisiei.",
            },
          },
          {
            "@type": "Question",
            name: "Evaluarea este confidențială?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Da. Rezultatele se comunică doar dumneavoastră (sau părinților, în cazul copiilor) și, cu acordul dumneavoastră, medicului care a cerut evaluarea.",
            },
          },
          {
            "@type": "Question",
            name: "Faceți evaluări și pentru copii?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Da. Evaluarea copiilor este una dintre activitățile principale ale clinicii: dezvoltare, atenție, limbaj, comportament. Detalii pe pagina Evaluarea copiilor.",
            },
          },
        ],
      },
    ],
    breadcrumb: [
      ["Servicii", "/servicii/"],
      ["Psihologie clinică", "/servicii/psihologie-clinica/"],
    ],
    header: {
      kicker: "Psihologie · Copii și adulți",
      h1: "Psihologie clinică",
      intro:
        "Psihologia clinică se ocupă de evaluarea psihologică (psihodiagnostic) și de intervenția psihologică la copii și adulți. La Clinica Dr. Iova din Oradea, psihologul clinician evaluează dezvoltarea, funcțiile cognitive, personalitatea și starea emoțională, scrie un raport și recomandă pașii următori. Clinica realizează peste 400 de evaluări psihologice lunar, potrivit propriului site.",
      facts: [
        ["clipboard-list", "400+ evaluări lunar"],
        ["users", "Copii și adulți"],
        ["map-pin", "Str. Ceyrat 31, Oradea"],
        ["stethoscope", "Medici psihiatri în aceeași clinică"],
      ],
      hero: {
        src: "/img/gen/serv-psihologie.jpg",
        alt: "Cabinet de psihologie, Clinica Dr. Iova, Oradea",
        "data-parallax": "0.06",
        fallback: "/img/Image1.jpg",
      },
      caption: "Clinica Dr. Iova · Oradea",
    },
    toc: [
      ["pe-scurt", "Pe scurt"],
      ["ce-este", "Ce face un psiholog clinician?"],
      ["evaluari", "Ce evaluări psihologice se fac la clinică?"],
      ["interventie", "Ce fel de intervenție oferă psihologul clinician?"],
      ["prima-consultatie", "Cum decurge evaluarea"],
      ["cand-merita", "Când este utilă"],
      ["cine-va-consulta", "Cine vă consultă"],
      ["cas", "Prin CAS"],
      ["intrebari", "Întrebări frecvente"],
    ],
    kf: [
      ["users", "Cine"],
      ["map-pin", "Unde"],
      ["receipt", "Prin CAS"],
      ["calendar", "Cum vă programați"],
      ["folder", "Ce aduceți"],
      ["clock", "Durată"],
    ],
    related: [
      "evaluarea-copiilor",
      "consiliere-psihologica",
      "psihoterapie-integrativa",
      "evaluari-comisii",
    ],
    articles: [
      "psihiatru-psiholog-psihoterapeut-diferente",
      "evaluare-psihiatrica-copil-ce-presupune",
      "aviz-psihologic-permis-arma-pasi",
    ],
    cta: {
      h2: "Programare la psihologie clinică",
      p: "Sunați la recepție și spuneți scopul evaluării. Vă spunem ce acte să aduceți, cât durează și dacă serviciul este decontat.",
    },
  },
  {
    slug: "psihoterapie-integrativa",
    ogImage: "/img/Image6.jpg",
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        name: "Psihoterapie integrativă Oradea | Clinica Dr. Iova",
        url: "https://clinicadriova.ro/servicii/psihoterapie-integrativa/",
        description:
          "Psihoterapie integrativă la Clinica Dr. Iova, Oradea: ședințe individuale, cu metode alese după nevoile persoanei, alături de medicii psihiatri ai clinicii.",
        inLanguage: "ro",
        lastReviewed: "2026-10-21",
        specialty: "https://schema.org/Psychiatric",
        medicalAudience: {
          "@type": "MedicalAudience",
          audienceType: "Patient",
        },
        about: {
          "@type": "MedicalTherapy",
          name: "Psihoterapie integrativă",
          provider: {
            "@id": "https://clinicadriova.ro/#clinica",
          },
        },
        publisher: {
          "@id": "https://clinicadriova.ro/#clinica",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Care este diferența dintre psihoterapie și consiliere psihologică?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Consilierea este mai scurtă și orientată către o problemă concretă din prezent. Psihoterapia lucrează în profunzime, pe termen mai lung, cu tipare de gândire și de emoție. Detalii pe pagina Consiliere psihologică.",
            },
          },
          {
            "@type": "Question",
            name: "Trebuie să am un diagnostic ca să vin la psihoterapie?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Nu. Mulți oameni vin la psihoterapie pentru dificultăți care nu sunt o boală. Dacă terapeutul consideră că este util un consult psihiatric, vă spune și vă poate îndruma către medicii clinicii.",
            },
          },
          {
            "@type": "Question",
            name: "Cât costă o ședință și cât durează?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Durata obișnuită în psihoterapie este de aproximativ 50 de minute. Tariful și durata la clinică: de cerut de la client. Întrebați recepția înainte de prima ședință.",
            },
          },
          {
            "@type": "Question",
            name: "Se poate face psihoterapie online?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "de cerut de la client: dacă se oferă ședințe online",
            },
          },
          {
            "@type": "Question",
            name: "Ce discut în terapie rămâne confidențial?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Da. Psihoterapeutul este obligat la confidențialitate prin lege și prin codul deontologic. Excepțiile sunt cele prevăzute de lege, de exemplu pericolul imediat pentru viața persoanei sau a altcuiva.",
            },
          },
          {
            "@type": "Question",
            name: "Pot urma psihoterapie și tratament medicamentos în același timp?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Da. Pentru multe probleme, combinația este recomandată. Medicul psihiatru și psihoterapeutul pot colabora, cu acordul dumneavoastră, mai ales că lucrează în aceeași clinică.",
            },
          },
        ],
      },
    ],
    breadcrumb: [
      ["Servicii", "/servicii/"],
      ["Psihoterapie integrativă", "/servicii/psihoterapie-integrativa/"],
    ],
    header: {
      kicker: "Psihoterapie · Adulți și adolescenți",
      h1: "Psihoterapie integrativă",
      intro:
        "Psihoterapia integrativă este o formă de psihoterapie care combină metode din mai multe școli (cognitiv-comportamentală, psihodinamică, umanistă, experiențială) în funcție de persoană și de problema cu care vine, nu după o singură rețetă. La Clinica Dr. Iova din Oradea, ședințele au loc în același spațiu cu medicii psihiatri și psihologii clinicieni, ceea ce permite o colaborare directă atunci când este nevoie.",
      facts: [
        ["armchair", "Ședințe individuale"],
        ["stethoscope", "Colaborare cu medicul psihiatru"],
        ["map-pin", "Str. Ceyrat 31, Oradea"],
        ["shield-check", "Confidențialitate"],
      ],
      hero: {
        src: "/img/gen/serv-psihologie.jpg",
        alt: "Cabinet de psihoterapie, Clinica Dr. Iova, Oradea",
        "data-parallax": "0.06",
        fallback: "/img/Image6.jpg",
      },
      caption: "Clinica Dr. Iova · Oradea",
    },
    toc: [
      ["pe-scurt", "Pe scurt"],
      ["ce-este", "Ce este psihoterapia integrativă?"],
      ["pentru-ce", "Pentru ce probleme se recomandă?"],
      ["durata", "Cât durează o psihoterapie?"],
      ["prima-consultatie", "Prima ședință"],
      ["cand-merita", "Când merită o programare"],
      ["cine-va-consulta", "Cine vă consultă"],
      ["cas", "Prin CAS"],
      ["intrebari", "Întrebări frecvente"],
    ],
    kf: [
      ["users", "Cine"],
      ["map-pin", "Unde"],
      ["receipt", "Prin CAS"],
      ["calendar", "Cum vă programați"],
      ["folder", "Ce aduceți"],
      ["clock", "Durată"],
    ],
    related: ["terapie-emdr", "consiliere-psihologica", "psihologie-clinica", "psihiatrie-adulti"],
    articles: [
      "psihiatru-psiholog-psihoterapeut-diferente",
      "cand-mergem-la-psihiatru",
      "consultatie-psihiatrie-cas-bilet-trimitere",
    ],
    cta: {
      h2: "Programare la psihoterapie",
      p: "Sunați la recepție de luni până vineri, între 08:00 și 20:00. Vă spunem tariful, durata ședinței și primul loc liber.",
    },
  },
  {
    slug: "terapie-emdr",
    ogImage: "/img/Image9.jpg",
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        name: "Terapie EMDR Oradea | Clinica Dr. Iova",
        url: "https://clinicadriova.ro/servicii/terapie-emdr/",
        description:
          "Terapie EMDR la Clinica Dr. Iova, Oradea: metodă în opt faze pentru amintiri traumatice, recomandată de OMS pentru stresul posttraumatic. Terapeut format EMDR.",
        inLanguage: "ro",
        lastReviewed: "2026-10-21",
        specialty: "https://schema.org/Psychiatric",
        medicalAudience: {
          "@type": "MedicalAudience",
          audienceType: "Patient",
        },
        about: {
          "@type": "MedicalTherapy",
          name: "EMDR (Eye Movement Desensitization and Reprocessing)",
          alternateName: "Desensibilizare și reprocesare prin mișcări oculare",
          provider: {
            "@id": "https://clinicadriova.ro/#clinica",
          },
        },
        publisher: {
          "@id": "https://clinicadriova.ro/#clinica",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Este EMDR hipnoză?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Nu. În EMDR rămâneți conștient și în control pe tot parcursul ședinței. Puteți opri oricând. Stimularea bilaterală nu induce o stare de transă.",
            },
          },
          {
            "@type": "Question",
            name: "Trebuie să povestesc în detaliu ce mi s-a întâmplat?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Nu. EMDR nu cere o relatare detaliată. Terapeutul are nevoie să știe despre ce amintire este vorba și cum vă afectează, nu fiecare detaliu.",
            },
          },
          {
            "@type": "Question",
            name: "Câte ședințe sunt necesare?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Depinde de persoană și de ce s-a întâmplat. Pentru un singur eveniment, numărul de ședințe poate fi mic. Pentru experiențe repetate sau din copilărie, procesul durează mai mult. Terapeutul vă dă o estimare după primele întâlniri.",
            },
          },
          {
            "@type": "Question",
            name: "Funcționează la copii?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "OMS recomandă EMDR pentru stresul posttraumatic și la copii și adolescenți, cu protocoale adaptate vârstei. Dacă la clinică se oferă EMDR pentru copii: de cerut de la client.",
            },
          },
          {
            "@type": "Question",
            name: "Pot face EMDR dacă iau tratament medicamentos?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "În general da. Spuneți terapeutului ce tratament urmați. Medicul psihiatru și terapeutul pot colabora, cu acordul dumneavoastră.",
            },
          },
          {
            "@type": "Question",
            name: "Ce se întâmplă dacă devine prea greu în ședință?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Terapeutul oprește stimularea și folosiți împreună tehnicile de stabilizare învățate în faza de pregătire. Ritmul este stabilit de dumneavoastră.",
            },
          },
        ],
      },
    ],
    breadcrumb: [
      ["Servicii", "/servicii/"],
      ["Terapie EMDR", "/servicii/terapie-emdr/"],
    ],
    header: {
      kicker: "Psihoterapie · EMDR",
      h1: "Terapie EMDR",
      intro:
        "EMDR (Eye Movement Desensitization and Reprocessing) este o metodă de psihoterapie structurată în opt faze, dezvoltată de psihologul american Francine Shapiro la sfârșitul anilor 1980. Este recomandată de Organizația Mondială a Sănătății, în ghidul din 2013, pentru tulburarea de stres posttraumatic la adulți, copii și adolescenți. La Clinica Dr. Iova din Oradea, EMDR face parte din serviciile de psihoterapie.",
      facts: [
        ["eye", "Metodă în opt faze"],
        ["globe", "Recomandată de OMS pentru PTSD"],
        ["map-pin", "Str. Ceyrat 31, Oradea"],
        ["stethoscope", "Medic psihiatru în aceeași clinică"],
      ],
      hero: {
        src: "/img/gen/serv-psihologie.jpg",
        alt: "Cabinet de psihoterapie EMDR, Clinica Dr. Iova, Oradea",
        "data-parallax": "0.06",
        fallback: "/img/Image9.jpg",
      },
      caption: "Clinica Dr. Iova · Oradea",
    },
    toc: [
      ["pe-scurt", "Pe scurt"],
      ["ce-este", "Ce este EMDR?"],
      ["faze", "Care sunt cele opt faze ale EMDR?"],
      ["pentru-ce", "Pentru ce probleme se folosește?"],
      ["prima-consultatie", "Primele ședințe"],
      ["cand-merita", "Când merită o programare"],
      ["cine-va-consulta", "Cine vă consultă"],
      ["cas", "Prin CAS"],
      ["intrebari", "Întrebări frecvente"],
    ],
    kf: [
      ["users", "Cine"],
      ["map-pin", "Unde"],
      ["receipt", "Prin CAS"],
      ["calendar", "Cum vă programați"],
      ["folder", "Ce aduceți"],
      ["clock", "Durată"],
    ],
    related: [
      "psihoterapie-integrativa",
      "consiliere-psihologica",
      "psihiatrie-adulti",
      "psihologie-clinica",
    ],
    articles: [
      "psihiatru-psiholog-psihoterapeut-diferente",
      "cand-mergem-la-psihiatru",
      "consultatie-psihiatrie-cas-bilet-trimitere",
    ],
    cta: {
      h2: "Programare la terapie EMDR",
      p: "Sunați la recepție de luni până vineri, între 08:00 și 20:00. Vă spunem tariful, durata ședinței și primul loc liber.",
    },
  },
  {
    slug: "logopedie",
    ogImage: "/img/Image3.jpg",
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        name: "Logopedie Oradea | Terapia limbajului | Clinica Dr. Iova",
        url: "https://clinicadriova.ro/servicii/logopedie/",
        description:
          "Logopedie pentru copii la Clinica Dr. Iova, Oradea: evaluarea și terapia tulburărilor de limbaj și pronunție, cu Forbrain. Logoped și psiholog, același loc.",
        inLanguage: "ro",
        lastReviewed: "2026-10-21",
        specialty: "https://schema.org/Pediatric",
        medicalAudience: {
          "@type": "MedicalAudience",
          audienceType: "Patient",
        },
        about: {
          "@type": "MedicalTherapy",
          name: "Logopedie (terapia tulburărilor de limbaj)",
          provider: {
            "@id": "https://clinicadriova.ro/#clinica",
          },
        },
        publisher: {
          "@id": "https://clinicadriova.ro/#clinica",
        },
        mentions: [
          {
            "@type": "Person",
            name: "Psih. Mihaela Caba",
            url: "https://clinicadriova.ro/medici/mihaela-caba/",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "De la ce vârstă se poate începe logopedia?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Evaluarea se poate face de la vârste mici, în jur de 2 ani, dacă există îngrijorări. Terapia propriu-zisă se adaptează vârstei: la copiii mici se lucrează prin joc și cu implicarea părinților.",
            },
          },
          {
            "@type": "Question",
            name: "Copilul meu nu vorbește la 2 ani. Este autism?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Nu neapărat. Lipsa vorbirii poate avea multe cauze, de la o simplă întârziere până la o problemă de auz. De aceea evaluarea logopedică se face adesea împreună cu evaluarea psihologică și, dacă este cazul, cu un consult de psihiatrie pediatrică.",
            },
          },
          {
            "@type": "Question",
            name: "Cât durează terapia logopedică?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Depinde de tulburare și de vârstă. O dislalie simplă se corectează de regulă în câteva luni; întârzierile de limbaj din tulburările de dezvoltare cer un lucru mai lung. Logopedul vă dă o estimare după evaluare. Frecvența ședințelor la clinică: de cerut de la client.",
            },
          },
          {
            "@type": "Question",
            name: "Ce este Forbrain și este obligatoriu?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Forbrain este o cască cu conducție osoasă care redă copilului propria voce, filtrată, în timp ce vorbește. Se folosește ca instrument complementar în unele exerciții. Nu este obligatoriu și nu înlocuiește terapia.",
            },
          },
          {
            "@type": "Question",
            name: "Trebuie să exersăm și acasă?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Da. Exersarea zilnică, câteva minute, a exercițiilor primite de la logoped este partea cea mai importantă a progresului. Veți primi indicații clare.",
            },
          },
          {
            "@type": "Question",
            name: "Faceți logopedie și pentru adulți?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Logopedia se adresează în principal copiilor. Pentru adulți (de exemplu după un accident vascular cerebral): de cerut de la client.",
            },
          },
        ],
      },
    ],
    breadcrumb: [
      ["Servicii", "/servicii/"],
      ["Logopedie", "/servicii/logopedie/"],
    ],
    header: {
      kicker: "Logopedie · Copii",
      h1: "Logopedie",
      intro:
        "Logopedia se ocupă de evaluarea și terapia tulburărilor de limbaj, de vorbire și de comunicare. La Clinica Dr. Iova din Oradea, logopedul evaluează copilul, stabilește un plan de terapie și lucrează în ședințe individuale, cu exerciții și, atunci când este util, cu dispozitivul Forbrain. Logopedul este și psiholog clinician, iar medicul psihiatru pediatru lucrează în aceeași clinică.",
      facts: [
        ["audio-lines", "Evaluare și terapie"],
        ["headphones", "Forbrain"],
        ["map-pin", "Str. Ceyrat 31, Oradea"],
        ["baby", "Psihiatru pediatru în aceeași clinică"],
      ],
      hero: {
        src: "/img/gen/serv-logopedie.jpg",
        alt: "Cabinet de logopedie, Clinica Dr. Iova, Oradea",
        "data-parallax": "0.06",
        fallback: "/img/Image3.jpg",
      },
      caption: "Clinica Dr. Iova · Oradea",
    },
    toc: [
      ["pe-scurt", "Pe scurt"],
      ["ce-este", "Ce face un logoped?"],
      ["ce-tratam", "Ce tulburări de limbaj se tratează?"],
      ["forbrain", "Ce este Forbrain și cum se folosește în logopedie?"],
      ["repere", "Care sunt reperele normale ale vorbirii?"],
      ["prima-consultatie", "Evaluarea logopedică"],
      ["cand-merita", "Când merită o programare"],
      ["cine-va-consulta", "Cine vă consultă"],
      ["cas", "Prin CAS"],
      ["intrebari", "Întrebări frecvente"],
    ],
    kf: [
      ["users", "Cine"],
      ["map-pin", "Unde"],
      ["receipt", "Prin CAS"],
      ["calendar", "Cum vă programați"],
      ["folder", "Ce aduceți"],
      ["clock", "Durată"],
    ],
    related: [
      "evaluarea-copiilor",
      "psihiatrie-pediatrica",
      "psihologie-clinica",
      "consultatii-cas",
    ],
    articles: [
      "repere-dezvoltare-limbaj-copii-0-5-ani",
      "evaluare-psihiatrica-copil-ce-presupune",
      "psihiatru-psiholog-psihoterapeut-diferente",
    ],
    cta: {
      h2: "Programare la logopedie",
      p: "Sunați la recepție și spuneți vârsta copilului. Vă spunem cum decurge evaluarea, cât durează și cât costă.",
    },
  },
  {
    slug: "evaluarea-copiilor",
    ogImage: "/img/Image9.jpg",
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        name: "Evaluarea psihologică a copilului | Oradea | Dr. Iova",
        url: "https://clinicadriova.ro/servicii/evaluarea-copiilor/",
        description:
          "Evaluarea psihologică a copilului la Clinica Dr. Iova, Oradea: dezvoltare, atenție, limbaj, comportament, pregătire pentru școală. Raport scris și recomandări.",
        inLanguage: "ro",
        lastReviewed: "2026-10-21",
        specialty: "https://schema.org/Pediatric",
        medicalAudience: {
          "@type": "MedicalAudience",
          audienceType: "Patient",
        },
        about: {
          "@type": "MedicalProcedure",
          name: "Evaluare psihologică a copilului",
          procedureType: "https://schema.org/NoninvasiveProcedure",
          provider: {
            "@id": "https://clinicadriova.ro/#clinica",
          },
        },
        publisher: {
          "@id": "https://clinicadriova.ro/#clinica",
        },
        mentions: [
          {
            "@type": "Person",
            name: "Psih. Mihaela Caba",
            url: "https://clinicadriova.ro/medici/mihaela-caba/",
          },
          {
            "@type": "Physician",
            name: "Dr. Roxana Samuila",
            url: "https://clinicadriova.ro/medici/roxana-samuila/",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "De la ce vârstă se poate evalua un copil?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "De la 1–2 ani, dacă există îngrijorări legate de dezvoltare. La vârste mici, evaluarea se bazează mai mult pe observație și pe informațiile de la părinți.",
            },
          },
          {
            "@type": "Question",
            name: "Cât durează evaluarea?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Depinde de vârstă și de scop: de la o întâlnire la două sau trei. Durata orientativă la clinică: de cerut de la client.",
            },
          },
          {
            "@type": "Question",
            name: "Evaluarea pune diagnostic de autism sau ADHD?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Evaluarea psihologică descrie dezvoltarea și comportamentul copilului și poate indica semne ale unei tulburări. Diagnosticul medical este stabilit de medicul psihiatru pediatru, care lucrează în aceeași clinică.",
            },
          },
          {
            "@type": "Question",
            name: "Raportul este valabil pentru școală și pentru comisie?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Raportul psihologic este un document oficial, semnat de psihologul clinician atestat. Pentru orientarea școlară și pentru comisia de evaluare, întrebați psihologul ce formă trebuie să aibă documentul cerut de instituția respectivă.",
            },
          },
          {
            "@type": "Question",
            name: "Trebuie să vină ambii părinți?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Nu este obligatoriu, dar este util. Copilul trebuie însoțit de un părinte sau de reprezentantul legal.",
            },
          },
          {
            "@type": "Question",
            name: "Ce se întâmplă după evaluare?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Primiți raportul și recomandări: urmărire în timp, logopedie, consult medical, terapie sau consiliere pentru părinți. Psihologul vă explică fiecare opțiune.",
            },
          },
        ],
      },
    ],
    breadcrumb: [
      ["Servicii", "/servicii/"],
      ["Evaluarea copiilor", "/servicii/evaluarea-copiilor/"],
    ],
    header: {
      kicker: "Copii · Evaluare psihologică",
      h1: "Evaluarea copiilor",
      intro:
        "Evaluarea psihologică a copilului măsoară, cu instrumente standardizate și prin observație, cum se dezvoltă copilul: gândire, limbaj, atenție, motricitate, emoții, comportament, relația cu ceilalți. La Clinica Dr. Iova din Oradea, evaluarea este făcută de un psiholog clinician, se încheie cu un raport scris și cu recomandări, iar medicul psihiatru pediatru și logopedul lucrează în aceeași clinică.",
      facts: [
        ["puzzle", "Raport scris cu recomandări"],
        ["users", "Părinții participă"],
        ["map-pin", "Str. Ceyrat 31, Oradea"],
        ["clipboard-list", "400+ evaluări lunar"],
      ],
      hero: {
        src: "/img/gen/serv-psihologie.jpg",
        alt: "Evaluarea psihologică a copilului, Clinica Dr. Iova, Oradea",
        "data-parallax": "0.06",
        fallback: "/img/Image9.jpg",
      },
      caption: "Clinica Dr. Iova · Oradea",
    },
    toc: [
      ["pe-scurt", "Pe scurt"],
      ["ce-este", "Ce este evaluarea psihologică a copilului?"],
      ["ce-evaluam", "Ce se evaluează, în funcție de vârstă?"],
      ["pentru-ce", "La ce folosește raportul?"],
      ["prima-consultatie", "Cum decurge evaluarea"],
      ["cand-merita", "Când este utilă"],
      ["cine-va-consulta", "Cine vă consultă"],
      ["cas", "Prin CAS"],
      ["intrebari", "Întrebări frecvente"],
    ],
    kf: [
      ["users", "Cine"],
      ["map-pin", "Unde"],
      ["receipt", "Prin CAS"],
      ["calendar", "Cum vă programați"],
      ["folder", "Ce aduceți"],
      ["clock", "Durată"],
    ],
    related: ["psihiatrie-pediatrica", "logopedie", "psihologie-clinica", "evaluari-comisii"],
    articles: [
      "evaluare-psihiatrica-copil-ce-presupune",
      "repere-dezvoltare-limbaj-copii-0-5-ani",
      "psihiatru-psiholog-psihoterapeut-diferente",
    ],
    cta: {
      h2: "Programare pentru evaluarea copilului",
      p: "Sunați la recepție și spuneți vârsta copilului și scopul evaluării. Vă spunem cum decurge, cât durează și ce acte să aduceți.",
    },
  },
  {
    slug: "consiliere-psihologica",
    ogImage: "/img/Image2.jpg",
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        name: "Consiliere psihologică Oradea | Clinica Dr. Iova",
        url: "https://clinicadriova.ro/servicii/consiliere-psihologica/",
        description:
          "Consiliere psihologică la Clinica Dr. Iova, Oradea: întâlniri pe termen scurt cu un psiholog clinician, pentru o dificultate concretă. Adulți și părinți.",
        inLanguage: "ro",
        lastReviewed: "2026-10-21",
        specialty: "https://schema.org/Psychiatric",
        medicalAudience: {
          "@type": "MedicalAudience",
          audienceType: "Patient",
        },
        about: {
          "@type": "MedicalTherapy",
          name: "Consiliere psihologică clinică",
          provider: {
            "@id": "https://clinicadriova.ro/#clinica",
          },
        },
        publisher: {
          "@id": "https://clinicadriova.ro/#clinica",
        },
        mentions: [
          {
            "@type": "Person",
            name: "Psih. Mihaela Caba",
            url: "https://clinicadriova.ro/medici/mihaela-caba/",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Care este diferența dintre consiliere și psihoterapie?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Consilierea este scurtă și orientată către o situație concretă din prezent. Psihoterapia lucrează pe termen mai lung, cu tipare de gândire și de emoție care vin din istoria personală. Psihologul vă spune care este potrivită.",
            },
          },
          {
            "@type": "Question",
            name: "Câte ședințe sunt necesare?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "De regulă câteva, între trei și zece, în funcție de problemă. Numărul se stabilește împreună, la prima ședință, și se poate ajusta.",
            },
          },
          {
            "@type": "Question",
            name: "Pot veni în cuplu sau cu copilul?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Consilierea pentru părinți se face de obicei cu părinții, fără copil. Ședințele de cuplu sau de familie: de cerut de la client.",
            },
          },
          {
            "@type": "Question",
            name: "Am nevoie de trimitere de la medic?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Nu. Puteți veni direct. Dacă aveți o recomandare de la medic sau un raport psihologic, aduceți-le, dar nu sunt obligatorii.",
            },
          },
          {
            "@type": "Question",
            name: "Ce discut rămâne confidențial?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Da. Psihologul este obligat la confidențialitate prin lege și prin codul deontologic, cu excepțiile prevăzute de lege (pericol imediat pentru persoană sau pentru altcineva).",
            },
          },
          {
            "@type": "Question",
            name: "Cât costă o ședință?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "de cerut de la client: tarif ședință consiliere. Recepția vă spune costul înainte de programare.",
            },
          },
        ],
      },
    ],
    breadcrumb: [
      ["Servicii", "/servicii/"],
      ["Consiliere psihologică", "/servicii/consiliere-psihologica/"],
    ],
    header: {
      kicker: "Psihologie · Consiliere",
      h1: "Consiliere psihologică",
      intro:
        "Consilierea psihologică este o intervenție pe termen scurt, orientată către o dificultate concretă din prezent: o decizie grea, o perioadă de stres, o schimbare în familie, dificultăți cu un copil. La Clinica Dr. Iova din Oradea, consilierea este oferită de un psiholog clinician, în același loc cu medicii psihiatri și cu psihoterapia, astfel încât, dacă este nevoie de mai mult, drumul este scurt.",
      facts: [
        ["messages-square", "Termen scurt, obiectiv concret"],
        ["users", "Adulți, adolescenți, părinți"],
        ["map-pin", "Str. Ceyrat 31, Oradea"],
        ["shield-check", "Confidențialitate"],
      ],
      hero: {
        src: "/img/gen/serv-psihologie.jpg",
        alt: "Cabinet de consiliere psihologică, Clinica Dr. Iova, Oradea",
        "data-parallax": "0.06",
        fallback: "/img/Image2.jpg",
      },
      caption: "Clinica Dr. Iova · Oradea",
    },
    toc: [
      ["pe-scurt", "Pe scurt"],
      ["ce-este", "Ce este consilierea psihologică?"],
      ["pentru-ce", "Pentru ce situații este potrivită?"],
      ["limite", "Ce nu este consilierea psihologică?"],
      ["prima-consultatie", "Prima ședință"],
      ["cand-merita", "Când merită o programare"],
      ["cine-va-consulta", "Cine vă consultă"],
      ["cas", "Prin CAS"],
      ["intrebari", "Întrebări frecvente"],
    ],
    kf: [
      ["users", "Cine"],
      ["map-pin", "Unde"],
      ["receipt", "Prin CAS"],
      ["calendar", "Cum vă programați"],
      ["folder", "Ce aduceți"],
      ["clock", "Durată"],
    ],
    related: [
      "psihoterapie-integrativa",
      "psihologie-clinica",
      "evaluarea-copiilor",
      "psihiatrie-adulti",
    ],
    articles: [
      "psihiatru-psiholog-psihoterapeut-diferente",
      "cand-mergem-la-psihiatru",
      "evaluare-psihiatrica-copil-ce-presupune",
    ],
    cta: {
      h2: "Programare la consiliere psihologică",
      p: "Sunați la recepție de luni până vineri, între 08:00 și 20:00. Vă spunem tariful, durata ședinței și primul loc liber.",
    },
  },
  {
    slug: "evaluari-comisii",
    ogImage: "/img/Image6.jpg",
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        name: "Evaluări pentru comisii de handicap și pensionare | Oradea",
        url: "https://clinicadriova.ro/servicii/evaluari-comisii/",
        description:
          "Documente medicale și psihologice pentru comisia de handicap și pensia de invaliditate, la Clinica Dr. Iova, Oradea. Pași, acte necesare, termene legale.",
        inLanguage: "ro",
        lastReviewed: "2026-10-21",
        specialty: "https://schema.org/Psychiatric",
        medicalAudience: {
          "@type": "MedicalAudience",
          audienceType: "Patient",
        },
        about: {
          "@type": "MedicalProcedure",
          name: "Evaluare medicală și psihologică pentru comisii de expertiză",
          procedureType: "https://schema.org/NoninvasiveProcedure",
          provider: {
            "@id": "https://clinicadriova.ro/#clinica",
          },
        },
        publisher: {
          "@id": "https://clinicadriova.ro/#clinica",
        },
        mentions: [
          {
            "@type": "Physician",
            name: "Șef lucr. Dr. Sorin Iova",
            url: "https://clinicadriova.ro/medici/sorin-iova/",
          },
          {
            "@type": "Physician",
            name: "As. Univ. Dr. Titus Moga",
            url: "https://clinicadriova.ro/medici/titus-moga/",
          },
          {
            "@type": "Person",
            name: "Psih. Mihaela Caba",
            url: "https://clinicadriova.ro/medici/mihaela-caba/",
          },
          {
            "@type": "Physician",
            name: "Dr. Roxana Samuila",
            url: "https://clinicadriova.ro/medici/roxana-samuila/",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Clinica decide gradul de handicap?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Nu. Decizia aparține comisiei din cadrul DGASPC (pentru handicap) sau medicului expert al asigurărilor sociale (pentru pensia de invaliditate). Clinica furnizează documentele medicale și psihologice pe baza cărora se decide.",
            },
          },
          {
            "@type": "Question",
            name: "Ce documente primesc de la clinică?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Referatul medical de la medicul specialist și, dacă este cerut pentru afecțiunea respectivă, raportul de evaluare psihologică. Scrisoarea medicală tip o obțineți de la medicul de familie.",
            },
          },
          {
            "@type": "Question",
            name: "Cât durează până primesc documentele?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "de cerut de la client: termen de eliberare a referatului și a raportului",
            },
          },
          {
            "@type": "Question",
            name: "Unde depun dosarul în Bihor?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Pentru adulți, la DGASPC Bihor (Serviciul de Evaluare Complexă a Persoanelor Adulte cu Handicap) sau la registratura primăriei de domiciliu. Pentru copii, la Serviciul de Evaluare Complexă pentru copii din cadrul DGASPC Bihor. Pentru pensia de invaliditate, la cabinetul de expertiză medicală al Casei Județene de Pensii Bihor.",
            },
          },
          {
            "@type": "Question",
            name: "Persoana nu se poate deplasa la clinică. Ce facem?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Evaluarea comisiei poate fi făcută la domiciliu, pe baza anchetei sociale și a scrisorii medicului de familie. Pentru consultația medicală la clinică: de cerut de la client: dacă se fac consultații la domiciliu.",
            },
          },
          {
            "@type": "Question",
            name: "Documentele sunt valabile și pentru orientarea școlară a copilului?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Medicul psihiatru pediatru și psihologul pot elibera documentele cerute și pentru orientarea școlară (CJRAE Bihor). Spuneți la programare pentru ce procedură aveți nevoie de ele, pentru a fi întocmite în forma potrivită.",
            },
          },
        ],
      },
    ],
    breadcrumb: [
      ["Servicii", "/servicii/"],
      ["Evaluări pentru comisii", "/servicii/evaluari-comisii/"],
    ],
    header: {
      kicker: "Evaluări · Comisii",
      h1: "Evaluări pentru comisii de handicap și pensionare",
      intro:
        "Pentru încadrarea într-un grad de handicap sau pentru pensia de invaliditate, comisiile cer documente medicale de la medicul specialist și, în multe cazuri, o evaluare psihologică. La Clinica Dr. Iova din Oradea, medicii psihiatri, medicul neurolog și psihologul clinician eliberează, după consultație și evaluare, documentele necesare dosarului pentru adulți și copii, cu afecțiuni psihice sau neurologice.",
      facts: [
        ["file-check", "Referat medical și raport psihologic"],
        ["users", "Adulți și copii"],
        ["map-pin", "Str. Ceyrat 31, Oradea"],
        ["receipt", "Consultația medicală: gratuită cu bilet"],
      ],
      hero: {
        src: "/img/Image6.jpg",
        alt: "Evaluări pentru comisii, Clinica Dr. Iova, Oradea",
        "data-parallax": "0.06",
        fallback: "/img/Image6.jpg",
      },
      caption: "Clinica Dr. Iova · Oradea",
    },
    toc: [
      ["pe-scurt", "Pe scurt"],
      ["ce-este", "Ce documente cer comisiile?"],
      ["handicap-adulti", "Cum decurge încadrarea în grad de handicap pentru adulți?"],
      ["handicap-copii", "Cum decurge încadrarea pentru copii?"],
      ["pensionare", "Ce este expertiza pentru pensia de invaliditate?"],
      ["prima-consultatie", "Consultația pentru comisie"],
      ["cand-merita", "Când este nevoie"],
      ["cine-va-consulta", "Cine vă consultă"],
      ["cas", "Prin CAS"],
      ["intrebari", "Întrebări frecvente"],
    ],
    kf: [
      ["users", "Cine"],
      ["map-pin", "Unde"],
      ["receipt", "Prin CAS"],
      ["calendar", "Cum vă programați"],
      ["folder", "Ce aduceți"],
      ["clock", "Durată"],
    ],
    related: ["psihiatrie-adulti", "neurologie", "psihologie-clinica", "evaluarea-copiilor"],
    articles: [
      "consultatie-psihiatrie-cas-bilet-trimitere",
      "evaluare-psihiatrica-copil-ce-presupune",
      "psihiatru-psiholog-psihoterapeut-diferente",
    ],
    cta: {
      h2: "Programare pentru documente de comisie",
      p: "Sunați la recepție și spuneți pentru ce comisie aveți nevoie de documente. Vă spunem ce acte să aduceți și cum decurge consultația.",
    },
  },
  {
    slug: "aviz-psihologic-port-arma",
    ogImage: "/img/Image7.jpg",
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        name: "Aviz psihologic port-armă Oradea | Clinica Dr. Iova",
        url: "https://clinicadriova.ro/servicii/aviz-psihologic-port-arma/",
        description:
          "Aviz psihologic pentru permisul de armă la Clinica Dr. Iova, Oradea: evaluare conform Legii 295/2004, pași, acte, valabilitate. Programare la 0359 450 657.",
        inLanguage: "ro",
        lastReviewed: "2026-10-21",
        specialty: "https://schema.org/Psychiatric",
        medicalAudience: {
          "@type": "MedicalAudience",
          audienceType: "Patient",
        },
        about: {
          "@type": "MedicalProcedure",
          name: "Evaluare psihologică pentru permis de armă (aviz psihologic)",
          procedureType: "https://schema.org/NoninvasiveProcedure",
          provider: {
            "@id": "https://clinicadriova.ro/#clinica",
          },
        },
        publisher: {
          "@id": "https://clinicadriova.ro/#clinica",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Cât timp este valabil avizul psihologic?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Normele de aplicare a Legii 295/2004 cer ca avizul să fie emis cu cel mult 6 luni înainte de depunerea cererii la poliție. Verificați cerințele actuale la IPJ Bihor, Serviciul Arme, Explozivi și Substanțe Periculoase.",
            },
          },
          {
            "@type": "Question",
            name: "Avizul psihologic ține loc de certificat medical?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Nu. Sunt două documente distincte: avizul psihologic de la psiholog și certificatul medical de la o unitate sanitară autorizată pentru examinarea persoanelor în vederea deținerii armelor. Dacă clinica eliberează și certificatul medical: de cerut de la client.",
            },
          },
          {
            "@type": "Question",
            name: "Cât durează evaluarea?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Evaluarea cuprinde interviu și probe psihologice și durează, în general, peste o oră. Durata la clinică și termenul de eliberare: de cerut de la client.",
            },
          },
          {
            "@type": "Question",
            name: "Ce se întâmplă dacă rezultatul este „inapt”?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Psihologul vă explică rezultatul. Aveți dreptul la o reevaluare, în condițiile stabilite de Colegiul Psihologilor. Avizul reflectă rezultatul probelor și nu poate fi modificat la cerere.",
            },
          },
          {
            "@type": "Question",
            name: "Pot face evaluarea dacă urmez un tratament psihiatric?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Spuneți psihologului ce tratament urmați. Evaluarea ține cont de starea actuală și de documentele medicale. Poliția poate cere și documente medicale suplimentare.",
            },
          },
          {
            "@type": "Question",
            name: "Eliberați avize și pentru alte scopuri (angajare, permis auto)?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "de cerut de la client: alte avize psihologice eliberate",
            },
          },
        ],
      },
    ],
    breadcrumb: [
      ["Servicii", "/servicii/"],
      ["Aviz psihologic port-armă", "/servicii/aviz-psihologic-port-arma/"],
    ],
    header: {
      kicker: "Avize · Permis de armă",
      h1: "Aviz psihologic pentru port-armă",
      intro:
        "Avizul psihologic este unul dintre documentele obligatorii pentru autorizarea procurării, deținerii, portului și folosirii armelor, conform Legii 295/2004 privind regimul armelor și al munițiilor și normelor de aplicare (HG 11/2018). Se eliberează de un psiholog atestat, după o evaluare psihologică, și trebuie să fie emis cu cel mult 6 luni înainte de depunerea cererii la poliție. La Clinica Dr. Iova din Oradea, evaluarea se face pe bază de programare.",
      facts: [
        ["badge-check", "Conform Legii 295/2004"],
        ["clock", "Valabil 6 luni pentru depunerea cererii"],
        ["map-pin", "Str. Ceyrat 31, Oradea"],
        ["receipt", "Serviciu cu plată"],
      ],
      hero: {
        src: "/img/Image7.jpg",
        alt: "Aviz psihologic pentru permis de armă, Clinica Dr. Iova, Oradea",
        "data-parallax": "0.06",
        fallback: "/img/Image7.jpg",
      },
      caption: "Clinica Dr. Iova · Oradea",
    },
    toc: [
      ["pe-scurt", "Pe scurt"],
      ["ce-este", "Ce este avizul psihologic pentru armă?"],
      ["evaluarea", "Ce presupune evaluarea psihologică?"],
      ["pasii", "Care sunt pașii pentru permisul de armă?"],
      ["prima-consultatie", "Evaluarea la clinică"],
      ["cand-merita", "Când este nevoie"],
      ["cine-va-consulta", "Cine vă consultă"],
      ["cas", "Prin CAS"],
      ["intrebari", "Întrebări frecvente"],
    ],
    kf: [
      ["users", "Cine"],
      ["map-pin", "Unde"],
      ["receipt", "Prin CAS"],
      ["calendar", "Cum vă programați"],
      ["folder", "Ce aduceți"],
      ["clock", "Durată"],
    ],
    related: [
      "psihologie-clinica",
      "evaluari-comisii",
      "psihiatrie-adulti",
      "consiliere-psihologica",
    ],
    articles: [
      "aviz-psihologic-permis-arma-pasi",
      "psihiatru-psiholog-psihoterapeut-diferente",
      "cand-mergem-la-psihiatru",
    ],
    cta: {
      h2: "Programare pentru aviz psihologic",
      p: "Sunați la recepție și spuneți pentru ce categorie de arme aveți nevoie de aviz. Vă spunem tariful, durata și ce acte să aduceți.",
    },
  },
  {
    slug: "consultatii-cas",
    ogImage: "/img/Image4.jpg",
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        name: "Consultații gratuite prin CAS | Clinica Dr. Iova Oradea",
        url: "https://clinicadriova.ro/servicii/consultatii-cas/",
        description:
          "Cum folosiți biletul de trimitere la Clinica Dr. Iova, Oradea: psihiatrie, psihiatrie pediatrică și neurologie gratuite prin CAS Bihor. Acte și valabilitate.",
        inLanguage: "ro",
        lastReviewed: "2026-10-21",
        specialty: "https://schema.org/Psychiatric",
        medicalAudience: {
          "@type": "MedicalAudience",
          audienceType: "Patient",
        },
        about: {
          "@type": "MedicalProcedure",
          name: "Consultație de specialitate decontată prin CAS",
          procedureType: "https://schema.org/NoninvasiveProcedure",
          provider: {
            "@id": "https://clinicadriova.ro/#clinica",
          },
        },
        publisher: {
          "@id": "https://clinicadriova.ro/#clinica",
        },
        mentions: [
          {
            "@type": "Physician",
            name: "Șef lucr. Dr. Sorin Iova",
            url: "https://clinicadriova.ro/medici/sorin-iova/",
          },
          {
            "@type": "Physician",
            name: "Dr. Roxana Samuila",
            url: "https://clinicadriova.ro/medici/roxana-samuila/",
          },
          {
            "@type": "Physician",
            name: "As. Univ. Dr. Titus Moga",
            url: "https://clinicadriova.ro/medici/titus-moga/",
          },
          {
            "@type": "Physician",
            name: "Dr. Sebastian Macrea",
            url: "https://clinicadriova.ro/medici/sebastian-macrea/",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Cine poate elibera biletul de trimitere?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Medicul de familie sau un alt medic specialist aflat în contract cu casa de asigurări. Biletul trebuie să fie pentru specialitatea la care veniți (psihiatrie, psihiatrie pediatrică sau neurologie).",
            },
          },
          {
            "@type": "Question",
            name: "Cât este valabil biletul de trimitere?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ca regulă generală, 30 de zile calendaristice de la emitere, în care trebuie să ajungeți la prima consultație. Pentru anumite situații regulile diferă; întrebați recepția.",
            },
          },
          {
            "@type": "Question",
            name: "Pentru control am nevoie de bilet nou?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "De regulă nu, dacă controlul este recomandat de medicul specialist în același episod de boală, în limitele stabilite de normele CNAS. Medicul vă spune la consultație.",
            },
          },
          {
            "@type": "Question",
            name: "Cât timp aștept o programare prin CAS?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Depinde de medic și de perioadă. Programările prin CAS la Dr. Iova se fac cu minim o lună în avans. Pentru ceilalți medici, întrebați recepția.",
            },
          },
          {
            "@type": "Question",
            name: "Sunt asigurat în alt județ. Pot veni la Clinica Dr. Iova?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Da. Contractul cu casa de asigurări este valabil pentru toți asigurații din România, indiferent de județul în care sunt înscriși la medicul de familie.",
            },
          },
          {
            "@type": "Question",
            name: "Evaluarea psihologică sau psihoterapia sunt gratuite prin CAS?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Pentru aceste servicii regulile sunt diferite de cele pentru consultațiile medicale. Ce se decontează la clinică: de cerut de la client. Recepția vă spune înainte de programare.",
            },
          },
          {
            "@type": "Question",
            name: "Nu am card de sănătate. Ce fac?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Puteți dovedi calitatea de asigurat și cu adeverința de asigurat eliberată de casa de asigurări sau prin verificarea în sistem la recepție, pe baza CNP-ului. Pentru copii nu este nevoie de card.",
            },
          },
        ],
      },
    ],
    breadcrumb: [
      ["Servicii", "/servicii/"],
      ["Consultații prin CAS", "/servicii/consultatii-cas/"],
    ],
    header: {
      kicker: "CAS · Bilet de trimitere",
      h1: "Consultații prin CAS",
      intro:
        "Clinica Dr. Iova din Oradea are contract cu Casa de Asigurări de Sănătate Bihor. Potrivit clinicii, consultațiile de psihiatrie, psihiatrie pediatrică și neurologie sunt gratuite pentru pacienții asigurați care vin cu bilet de trimitere de la medicul de familie sau de la alt medic specialist. Fără bilet, consultația se plătește. Programarea se face telefonic, la 0359 450 657, sau online.",
      facts: [
        ["receipt", "Contract CAS Bihor"],
        ["file-text", "Bilet de trimitere"],
        ["clock", "Luni–vineri, 08:00–20:00"],
        ["map-pin", "Str. Ceyrat 31, Oradea"],
      ],
      hero: {
        src: "/img/Image4.jpg",
        alt: "Recepția Clinicii Dr. Iova, Oradea",
        "data-parallax": "0.06",
        fallback: "/img/Image4.jpg",
      },
      caption: "Recepția clinicii · Str. Ceyrat 31",
    },
    toc: [
      ["pe-scurt", "Pe scurt"],
      ["ce-este", "Ce înseamnă „consultație gratuită prin CAS”?"],
      ["servicii", "Ce servicii sunt gratuite cu bilet de trimitere?"],
      ["bilet", "De unde iau biletul de trimitere și cât este valabil?"],
      ["fara-bilet", "Ce se întâmplă dacă nu am bilet de trimitere?"],
      ["prima-consultatie", "Pas cu pas"],
      ["cand-merita", "Când o folosiți"],
      ["cine-va-consulta", "Cine vă consultă"],
      ["cas", "Prin CAS"],
      ["intrebari", "Întrebări frecvente"],
    ],
    kf: [
      ["users", "Cine"],
      ["map-pin", "Unde"],
      ["receipt", "Prin CAS"],
      ["calendar", "Cum vă programați"],
      ["folder", "Ce aduceți"],
      ["clock", "Durată"],
    ],
    related: ["psihiatrie-adulti", "psihiatrie-pediatrica", "neurologie", "evaluari-comisii"],
    articles: [
      "consultatie-psihiatrie-cas-bilet-trimitere",
      "cand-mergem-la-psihiatru",
      "evaluare-psihiatrica-copil-ce-presupune",
    ],
    cta: {
      h2: "Programare prin CAS",
      p: "Sunați la recepție de luni până vineri, între 08:00 și 20:00, sau trimiteți o cerere online. Vă spunem când este primul loc liber și ce acte să aduceți.",
    },
  },
];

export const serviciiIndexMeta = {
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Servicii, Clinica Dr. Iova",
      url: "https://clinicadriova.ro/servicii/",
      inLanguage: "ro",
      description: "Serviciile Clinicii Dr. Iova din Oradea.",
      publisher: {
        "@id": "https://clinicadriova.ro/#clinica",
      },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Psihiatrie pentru adulți",
            url: "https://clinicadriova.ro/servicii/psihiatrie-adulti/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Psihiatrie pediatrică",
            url: "https://clinicadriova.ro/servicii/psihiatrie-pediatrica/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Neurologie",
            url: "https://clinicadriova.ro/servicii/neurologie/",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Psihologie clinică",
            url: "https://clinicadriova.ro/servicii/psihologie-clinica/",
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "Psihoterapie integrativă",
            url: "https://clinicadriova.ro/servicii/psihoterapie-integrativa/",
          },
          {
            "@type": "ListItem",
            position: 6,
            name: "Terapie EMDR",
            url: "https://clinicadriova.ro/servicii/terapie-emdr/",
          },
          {
            "@type": "ListItem",
            position: 7,
            name: "Logopedie",
            url: "https://clinicadriova.ro/servicii/logopedie/",
          },
          {
            "@type": "ListItem",
            position: 8,
            name: "Evaluarea copiilor",
            url: "https://clinicadriova.ro/servicii/evaluarea-copiilor/",
          },
          {
            "@type": "ListItem",
            position: 9,
            name: "Consiliere psihologică",
            url: "https://clinicadriova.ro/servicii/consiliere-psihologica/",
          },
          {
            "@type": "ListItem",
            position: 10,
            name: "Evaluări pentru comisii",
            url: "https://clinicadriova.ro/servicii/evaluari-comisii/",
          },
          {
            "@type": "ListItem",
            position: 11,
            name: "Aviz psihologic port-armă",
            url: "https://clinicadriova.ro/servicii/aviz-psihologic-port-arma/",
          },
          {
            "@type": "ListItem",
            position: 12,
            name: "Consultații prin CAS",
            url: "https://clinicadriova.ro/servicii/consultatii-cas/",
          },
        ],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "La ce medic merg: psihiatru, psiholog sau psihoterapeut?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Psihiatrul este medic și poate prescrie tratament. Psihologul clinician evaluează și consiliază. Psihoterapeutul lucrează în ședințe, pe termen mai lung. Dacă nu sunteți sigur, sunați la recepție: vă îndrumă. Detalii în articolul Psihiatru, psiholog, psihoterapeut.",
          },
        },
        {
          "@type": "Question",
          name: "Ce servicii sunt gratuite prin CAS?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Consultațiile medicale de psihiatrie, psihiatrie pediatrică și neurologie, cu bilet de trimitere. Serviciile psihologice au reguli diferite. Detalii pe pagina Consultații prin CAS.",
          },
        },
        {
          "@type": "Question",
          name: "Cum fac o programare?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Telefonic, la 0359 450 657, de luni până vineri între 08:00 și 20:00, prin e-mail la receptie@clinicadriova.ro sau prin formularul de pe pagina Programare.",
          },
        },
        {
          "@type": "Question",
          name: "Consultați și copii?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Da. Psihiatrie pediatrică cu Dr. Roxana Samuila, evaluare psihologică și logopedie cu Psih. Mihaela Caba, toate în aceeași clinică.",
          },
        },
        {
          "@type": "Question",
          name: "Unde este clinica și care este programul?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Str. Ceyrat nr. 31, bl. WR12, Oradea. Luni–vineri, 08:00–20:00. Sâmbăta și duminica este închis.",
          },
        },
        {
          "@type": "Question",
          name: "Ce fac într-o situație de urgență?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sunați la 112 sau mergeți la cea mai apropiată unitate de primiri urgențe. Clinica funcționează pe bază de programare și nu are serviciu de urgență.",
          },
        },
      ],
    },
  ],
  ogImage: "/img/Image4.jpg",
  breadcrumb: [["Servicii", "/servicii/"]],
} as { schema: object[]; ogImage: string; breadcrumb: [string, string][] };
