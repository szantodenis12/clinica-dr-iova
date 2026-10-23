// Data for /medici/ and /medici/[slug]/ (ported from _gen_medici.py).
// Rich = plain string or segments: string | {b} (bold) | {todo} ("de cerut de la client (fișa medicului): ..." placeholder span).
export type RichPart = string | { b: string } | { todo: string };
export type Rich = string | RichPart[];
export type Kind = "adult" | "copii" | "neuro" | "psiho";
export type ServiceSlug = "psihiatrie-adulti" | "psihiatrie-pediatrica" | "neurologie" | "psihologie-clinica" | "psihoterapie-integrativa" | "terapie-emdr" | "logopedie" | "evaluarea-copiilor" | "consiliere-psihologica" | "evaluari-comisii" | "aviz-psihologic-port-arma" | "consultatii-cas";

export interface Doctor {
  slug: string;
  /** <title> and og:title of /medici/<slug>/ (also feeds sitemap/llms.txt via lib/routes.ts) */
  metaTitle: string;
  metaDescription: string;
  h1: string;
  full: string;
  pre: string;
  given: string;
  family: string;
  title: string;
  kind: Kind;
  cats: string[];
  tag: string;
  typ: "Physician" | "Person";
  spec: string | null;
  kicker: string;
  intro: string;
  chips: string[];
  serv: ServiceSlug[];
  servNote: Rich | null;
  casVal: Rich;
  tl: [string, Rich][];
}

export const SERV: Record<ServiceSlug, [label: string, icon: string]> = {
  "psihiatrie-adulti": [
    "Psihiatrie adulți",
    "brain"
  ],
  "psihiatrie-pediatrica": [
    "Psihiatrie pediatrică",
    "baby"
  ],
  "neurologie": [
    "Neurologie",
    "activity"
  ],
  "psihologie-clinica": [
    "Psihologie clinică",
    "message-circle-heart"
  ],
  "psihoterapie-integrativa": [
    "Psihoterapie integrativă",
    "armchair"
  ],
  "terapie-emdr": [
    "Terapie EMDR",
    "eye"
  ],
  "logopedie": [
    "Logopedie",
    "audio-lines"
  ],
  "evaluarea-copiilor": [
    "Evaluarea copiilor",
    "puzzle"
  ],
  "consiliere-psihologica": [
    "Consiliere psihologică",
    "messages-square"
  ],
  "evaluari-comisii": [
    "Evaluări pentru comisii",
    "file-check"
  ],
  "aviz-psihologic-port-arma": [
    "Aviz psihologic port-armă",
    "badge-check"
  ],
  "consultatii-cas": [
    "Consultații prin CAS",
    "receipt"
  ]
};

export const STEPS: Record<Kind, [string, string][]> = {
  "adult": [
    [
      "Discuția",
      "Medicul vă întreabă ce v-a adus la consultație, de când au apărut simptomele și cum vă afectează somnul, munca sau relațiile. Puteți veni însoțit de o persoană apropiată, dacă doriți."
    ],
    [
      "Evaluarea",
      "Pe baza discuției și a documentelor medicale pe care le aduceți, medicul stabilește dacă este nevoie de investigații suplimentare sau de o evaluare psihologică, făcută separat, la clinică."
    ],
    [
      "Planul",
      "La final primiți o concluzie și un plan: tratament, psihoterapie, control sau o combinație. Recomandările sunt scrise, iar următoarea programare se face la recepție."
    ]
  ],
  "copii": [
    [
      "Discuția cu părintele",
      "Copilul vine însoțit de un părinte sau de reprezentantul legal. Medicul ascultă întâi ce ați observat acasă, la grădiniță sau la școală și de când."
    ],
    [
      "Discuția cu copilul",
      "Medicul vorbește și cu copilul, adaptat vârstei lui. Dacă este nevoie, recomandă o evaluare psihologică, făcută separat de psihologul clinician al clinicii."
    ],
    [
      "Planul pentru familie",
      "Primiți o concluzie și recomandări scrise: ce urmăriți acasă, dacă este nevoie de terapie sau de tratament și când reveniți la control."
    ]
  ],
  "neuro": [
    [
      "Discuția",
      "Medicul vă întreabă despre simptome (de exemplu dureri de cap, amețeli, amorțeli, tremor, tulburări de memorie sau de echilibru), de când au apărut și ce le agravează."
    ],
    [
      "Examenul neurologic",
      "Urmează examinarea clinică: reflexe, forță, sensibilitate, coordonare, mers. Aduceți investigațiile făcute deja (RMN, CT, EEG, analize) și lista tratamentelor curente."
    ],
    [
      "Planul",
      "Medicul vă spune ce arată examinarea, dacă sunt necesare investigații suplimentare și care este planul de tratament sau de urmărire. Recomandările sunt scrise."
    ]
  ],
  "psiho": [
    [
      "Discuția",
      "Psihologul vă întreabă ce v-a adus la cabinet și ce așteptați de la evaluare sau de la terapie. La copii, prima discuție este cu părintele, apoi cu copilul."
    ],
    [
      "Evaluarea",
      "Evaluarea psihologică folosește discuția clinică și teste standardizate, potrivite vârstei. Poate dura mai mult de o ședință, în funcție de scopul ei (clinic, școlar, comisie)."
    ],
    [
      "Raportul și planul",
      "Primiți un raport scris cu concluziile evaluării și recomandări: consiliere, terapie, logopedie sau trimitere către medicul psihiatru, dacă este cazul."
    ]
  ]
};

export const FAQS: Record<Kind, [string, Rich][]> = {
  "adult": [
    [
      "Când este indicat un consult psihiatric?",
      "Atunci când o stare de neliniște, tristețe, insomnie, oboseală sau schimbări de comportament durează de câteva săptămâni și afectează viața de zi cu zi. Consultul poate fi recomandat și de medicul de familie sau de un alt specialist."
    ],
    [
      "Consultația este gratuită prin CAS?",
      "Da, dacă veniți cu bilet de trimitere de la medicul de familie sau de la alt medic specialist. Clinica are contract cu CAS Bihor. Fără bilet de trimitere, consultația se plătește la clinică, iar prețul îl aflați de la recepție, la 0359 450 657."
    ],
    [
      "Ce aduc la prima consultație?",
      "Cardul de sănătate, biletul de trimitere (dacă aveți), documentele medicale anterioare (scrisori medicale, analize, investigații) și lista tratamentelor pe care le luați în prezent, inclusiv dozele."
    ],
    [
      "Psihiatrul prescrie întotdeauna medicamente?",
      "Nu. În funcție de evaluare, planul poate însemna tratament medicamentos, psihoterapie, evaluare psihologică, urmărire în timp sau o combinație. Opțiunile se discută cu dumneavoastră înainte de orice decizie."
    ],
    [
      "Consultația este confidențială?",
      "Da. Ceea ce discutați cu medicul este protejat de secretul profesional. Informațiile medicale nu sunt transmise altor persoane fără acordul dumneavoastră, în afara situațiilor prevăzute expres de lege."
    ],
    [
      "Ce fac într-o situație de urgență?",
      "Dacă dumneavoastră sau o persoană apropiată sunteți în pericol imediat, sunați la 112. Clinica este deschisă de luni până vineri, între 08:00 și 20:00, și nu funcționează ca serviciu de urgență."
    ]
  ],
  "copii": [
    [
      "Când mergeți cu copilul la un psihiatru pediatru?",
      "Când observați, timp de mai multe săptămâni, schimbări care afectează somnul, școala sau relațiile copilului: neliniște, retragere, crize de furie, dificultăți de atenție, întârzieri în dezvoltare. Recomandarea poate veni și de la medicul de familie, pediatru sau psiholog."
    ],
    [
      "Copilul trebuie să fie prezent la prima consultație?",
      "Da, copilul vine însoțit de un părinte sau de reprezentantul legal. Medicul discută atât cu părintele, cât și cu copilul, pe înțelesul vârstei lui."
    ],
    [
      "Consultația este gratuită prin CAS?",
      "Da, dacă veniți cu bilet de trimitere de la medicul de familie sau de la alt medic specialist. Clinica are contract cu CAS Bihor. Fără bilet de trimitere, consultația se plătește la clinică, iar prețul îl aflați de la recepție, la 0359 450 657."
    ],
    [
      "Ce aduc la prima consultație?",
      "Biletul de trimitere (dacă aveți), actul de identitate al părintelui, documentele medicale sau psihologice anterioare și, dacă există, observații de la grădiniță sau de la școală."
    ],
    [
      "Cine face evaluarea psihologică a copilului?",
      "Psihologul clinician al clinicii. Medicul psihiatru poate recomanda evaluarea, iar programarea se face separat, la recepție. Clinica face și evaluări pentru comisiile de handicap."
    ],
    [
      "Ce fac într-o situație de urgență?",
      "Dacă dumneavoastră sau o persoană apropiată sunteți în pericol imediat, sunați la 112. Clinica este deschisă de luni până vineri, între 08:00 și 20:00, și nu funcționează ca serviciu de urgență."
    ]
  ],
  "neuro": [
    [
      "Cu ce se prezintă pacienții la neurolog?",
      "Cel mai des cu dureri de cap repetate, amețeli, amorțeli sau furnicături, tremor, tulburări de echilibru, de memorie sau de somn. Consultul poate fi recomandat și de medicul de familie sau de un alt specialist."
    ],
    [
      "Care este diferența dintre neurolog și psihiatru?",
      "Neurologul se ocupă de bolile sistemului nervos: creier, măduva spinării, nervi. Psihiatrul se ocupă de tulburările psihice. Unele situații au nevoie de ambele specialități, iar la Clinica Dr. Iova ele lucrează în același loc."
    ],
    [
      "Consultația este gratuită prin CAS?",
      "Da, dacă veniți cu bilet de trimitere de la medicul de familie sau de la alt medic specialist. Clinica are contract cu CAS Bihor. Fără bilet de trimitere, consultația se plătește la clinică, iar prețul îl aflați de la recepție, la 0359 450 657."
    ],
    [
      "Ce aduc la prima consultație?",
      "Cardul de sănătate, biletul de trimitere (dacă aveți), investigațiile făcute deja (RMN, CT, EEG, analize), scrisorile medicale anterioare și lista tratamentelor curente."
    ],
    [
      "Se fac investigații în clinică?",
      [
        {
          "todo": "ce investigații neurologice se fac în clinică (EEG, EMG etc.) și care se recomandă în exterior"
        }
      ]
    ],
    [
      "Ce fac într-o situație de urgență?",
      "Dacă dumneavoastră sau o persoană apropiată sunteți în pericol imediat, sunați la 112. Clinica este deschisă de luni până vineri, între 08:00 și 20:00, și nu funcționează ca serviciu de urgență."
    ]
  ],
  "psiho": [
    [
      "Care este diferența dintre psiholog și psihiatru?",
      "Psihologul clinician face evaluări psihologice, consiliere și, dacă are formare, psihoterapie. Nu prescrie medicamente. Psihiatrul este medic și poate prescrie tratament. Cei doi lucrează adesea împreună, în aceeași clinică."
    ],
    [
      "Ce presupune o evaluare psihologică?",
      "O discuție clinică și teste standardizate, alese în funcție de vârstă și de scopul evaluării: clinic, școlar, pentru o comisie sau pentru un aviz. La final primiți un raport scris cu concluzii și recomandări."
    ],
    [
      "Când este nevoie de logoped?",
      "Când copilul vorbește puțin sau greu de înțeles pentru vârsta lui, pronunță greșit anumite sunete, se bâlbâie sau are dificultăți de citit și scris. O evaluare logopedică arată dacă este nevoie de terapie și cât de des."
    ],
    [
      "Evaluarea psihologică este gratuită prin CAS?",
      [
        {
          "todo": "care servicii psihologice se decontează prin CAS Bihor și cu ce trimitere; prețurile pentru evaluări, consiliere, logopedie"
        }
      ]
    ],
    [
      "Consultația este confidențială?",
      "Da. Ceea ce discutați cu medicul este protejat de secretul profesional. Informațiile medicale nu sunt transmise altor persoane fără acordul dumneavoastră, în afara situațiilor prevăzute expres de lege."
    ],
    [
      "Ce fac într-o situație de urgență?",
      "Dacă dumneavoastră sau o persoană apropiată sunteți în pericol imediat, sunați la 112. Clinica este deschisă de luni până vineri, între 08:00 și 20:00, și nu funcționează ca serviciu de urgență."
    ]
  ]
};

export const KIND_WHO: Record<Kind, string> = {
  "adult": "Adulți",
  "copii": "Copii și adolescenți",
  "neuro": "Adulți",
  "psiho": "Copii și adulți"
};
export const KIND_H2: Record<Kind, string> = {
  "adult": "Cum decurge prima consultație psihiatrică?",
  "copii": "Cum decurge prima consultație a copilului?",
  "neuro": "Cum decurge prima consultație neurologică?",
  "psiho": "Cum decurge prima întâlnire cu psihologul?"
};
/** FAQ h2; "
" marks the <br />. */
export const KIND_FAQ_H2: Record<Kind, string> = {
  "adult": "Întrebări frecvente\ndespre consultația psihiatrică",
  "copii": "Întrebări frecvente\nde la părinți",
  "neuro": "Întrebări frecvente\ndespre consultul neurologic",
  "psiho": "Întrebări frecvente\ndespre psiholog și logoped"
};
export const CAT_LABEL: [string, string][] = [
  [
    "adulti",
    "Adulți"
  ],
  [
    "copii",
    "Copii"
  ],
  [
    "neurologie",
    "Neurologie"
  ],
  [
    "psihologie",
    "Psihologie"
  ]
];
export const SOON: [string, string][] = [
  [
    "Dr. Dorina Petriș",
    "medic primar psihiatru"
  ],
  [
    "Dr. Simona Zancu",
    "medic primar psihiatru"
  ],
  [
    "Dr. Florina Mîndru",
    "medic specialist psihiatru"
  ],
  [
    "Psih. Bianca Gliga",
    "psiholog clinician, psihoterapeut, logoped"
  ],
  [
    "Psih. Paula Lazăr",
    "psiholog clinician"
  ]
];

export const DOCTORS: Doctor[] = [
  {
    "slug": "sorin-iova",
    "metaTitle": "Dr. Sorin Iova, medic primar psihiatru | Clinica Dr. Iova",
    "metaDescription": "Dr. Sorin Iova, medic primar psihiatru, fondatorul Clinicii Dr. Iova din Oradea, șef de lucrări la Universitatea din Oradea. Consultații adulți, prin CAS.",
    "h1": "Dr. Sorin Iova",
    "full": "Șef lucr. Dr. Claudiu Sorin Iova",
    "pre": "Șef lucr. Dr.",
    "given": "Claudiu Sorin",
    "family": "Iova",
    "title": "Medic primar psihiatru",
    "kind": "adult",
    "cats": [
      "adulti"
    ],
    "tag": "Fondator",
    "typ": "Physician",
    "spec": "Psychiatric",
    "kicker": "Medic primar psihiatru · Fondatorul clinicii",
    "intro": "Dr. Sorin Iova este medic primar psihiatru și fondatorul Clinicii Dr. Iova din Oradea. Consultă adulți, lucrează ca medic primar la Spitalul Clinic Județean de Urgență Bihor din 2014 și predă la Facultatea de Medicină și Farmacie a Universității din Oradea.",
    "chips": [
      "Psihiatrie adulți",
      "Șef de lucrări, UO",
      "39 de studii clinice"
    ],
    "serv": [
      "psihiatrie-adulti",
      "consultatii-cas"
    ],
    "servNote": null,
    "casVal": "Da, cu bilet de trimitere. Programările prin CAS la Dr. Iova se fac cu cel puțin o lună în avans.",
    "tl": [
      [
        "2004–2014",
        [
          {
            "b": "Medic psihiatru"
          },
          " la Spitalul Clinic Municipal „Dr. Gavril Curteanu” Oradea, secția Psihiatrie III."
        ]
      ],
      [
        "2006",
        [
          {
            "b": "Coautor"
          },
          " al manualului „Psihiatrie pentru Colegiul de asistenți medicali”."
        ]
      ],
      [
        "din 2014",
        [
          {
            "b": "Medic primar psihiatru"
          },
          " la Spitalul Clinic Județean de Urgență Bihor."
        ]
      ],
      [
        "din 2019",
        [
          {
            "b": "Șef de lucrări"
          },
          " la Facultatea de Medicină și Farmacie, Universitatea din Oradea, Departamentul Psiho-Neuroștiințe și Recuperare."
        ]
      ],
      [
        "doctorat",
        [
          {
            "b": "Teza de doctorat:"
          },
          " „Tulburări psihice în scleroza multiplă”. ",
          {
            "todo": "anul susținerii și universitatea"
          }
        ]
      ],
      [
        "cercetare",
        [
          {
            "b": "Coinvestigator"
          },
          " în 39 de studii clinice de fază 2 și 3."
        ]
      ],
      [
        "2023",
        [
          {
            "b": "Fondează Clinica Dr. Iova"
          },
          " în Oradea. Din 2025, clinica funcționează pe Str. Ceyrat nr. 31."
        ]
      ]
    ]
  },
  {
    "slug": "sebastian-macrea",
    "metaTitle": "Dr. Sebastian Macrea, medic specialist psihiatru | Oradea",
    "metaDescription": "Dr. Sebastian Macrea, medic specialist psihiatru la Clinica Dr. Iova din Oradea. Consultații pentru adulți, gratuite prin CAS cu bilet. Tel. 0359 450 657.",
    "h1": "Dr. Sebastian Macrea",
    "full": "Dr. Sebastian Macrea",
    "pre": "Dr.",
    "given": "Sebastian",
    "family": "Macrea",
    "title": "Medic specialist psihiatru",
    "kind": "adult",
    "cats": [
      "adulti"
    ],
    "tag": "Adulți",
    "typ": "Physician",
    "spec": "Psychiatric",
    "kicker": "Medic specialist psihiatru",
    "intro": "Dr. Sebastian Macrea este medic specialist psihiatru la Clinica Dr. Iova din Oradea. Consultă adulți, la clinica de pe Str. Ceyrat nr. 31, cu programare la recepție. Cu bilet de trimitere, consultația este gratuită prin CAS Bihor.",
    "chips": [
      "Psihiatrie adulți"
    ],
    "serv": [
      "psihiatrie-adulti",
      "consultatii-cas"
    ],
    "servNote": null,
    "casVal": "Da, cu bilet de trimitere.",
    "tl": [
      [
        "prezent",
        [
          {
            "b": "Medic specialist psihiatru"
          },
          " la Clinica Dr. Iova, Oradea."
        ]
      ],
      [
        "studii",
        [
          {
            "todo": "facultatea și anul absolvirii, anul rezidențiatului / specialității"
          }
        ]
      ],
      [
        "formări",
        [
          {
            "todo": "competențe, cursuri, supraspecializări, afilieri profesionale"
          }
        ]
      ],
      [
        "interese",
        [
          {
            "todo": "ce consultă cel mai des, arii de interes clinic"
          }
        ]
      ]
    ]
  },
  {
    "slug": "titus-moga",
    "metaTitle": "Dr. Titus Moga, medic specialist neurolog | Clinica Dr. Iova",
    "metaDescription": "Dr. Titus Moga, medic specialist neurolog și asistent universitar, la Clinica Dr. Iova din Oradea. Consultații gratuite prin CAS cu bilet de trimitere.",
    "h1": "Dr. Titus Moga",
    "full": "As. Univ. Dr. Titus Moga",
    "pre": "As. Univ. Dr.",
    "given": "Titus",
    "family": "Moga",
    "title": "Medic specialist neurolog",
    "kind": "neuro",
    "cats": [
      "neurologie"
    ],
    "tag": "Neurologie",
    "typ": "Physician",
    "spec": "Neurologic",
    "kicker": "Medic specialist neurolog · Asistent universitar",
    "intro": "Dr. Titus Moga este medic specialist neurolog și asistent universitar. La Clinica Dr. Iova din Oradea consultă pacienți cu afecțiuni ale sistemului nervos, în aceeași clinică și la aceeași recepție cu psihiatrii și psihologii. Cu bilet de trimitere, consultația este gratuită prin CAS Bihor.",
    "chips": [
      "Neurologie",
      "Asistent universitar"
    ],
    "serv": [
      "neurologie",
      "consultatii-cas"
    ],
    "servNote": null,
    "casVal": "Da, cu bilet de trimitere.",
    "tl": [
      [
        "prezent",
        [
          {
            "b": "Asistent universitar."
          },
          " ",
          {
            "todo": "facultatea și disciplina la care predă"
          }
        ]
      ],
      [
        "prezent",
        [
          {
            "b": "Medic specialist neurolog"
          },
          " la Clinica Dr. Iova, Oradea. ",
          {
            "todo": "alte unități în care profesează, anul obținerii specialității"
          }
        ]
      ]
    ]
  },
  {
    "slug": "adriana-maties",
    "metaTitle": "Dr. Adriana Maties, medic specialist psihiatru | Oradea",
    "metaDescription": "Dr. Adriana Maties, medic specialist psihiatru la Clinica Dr. Iova din Oradea. Consultații pentru adulți, gratuite prin CAS cu bilet. Tel. 0359 450 657.",
    "h1": "Dr. Adriana Maties",
    "full": "Dr. Adriana Maties",
    "pre": "Dr.",
    "given": "Adriana",
    "family": "Maties",
    "title": "Medic specialist psihiatru",
    "kind": "adult",
    "cats": [
      "adulti"
    ],
    "tag": "Adulți",
    "typ": "Physician",
    "spec": "Psychiatric",
    "kicker": "Medic specialist psihiatru",
    "intro": "Dr. Adriana Maties este medic specialist psihiatru la Clinica Dr. Iova din Oradea. Consultă adulți, la clinica de pe Str. Ceyrat nr. 31, cu programare la recepție. Cu bilet de trimitere, consultația este gratuită prin CAS Bihor.",
    "chips": [
      "Psihiatrie adulți"
    ],
    "serv": [
      "psihiatrie-adulti",
      "consultatii-cas"
    ],
    "servNote": null,
    "casVal": "Da, cu bilet de trimitere.",
    "tl": [
      [
        "prezent",
        [
          {
            "b": "Medic specialist psihiatru"
          },
          " la Clinica Dr. Iova, Oradea."
        ]
      ],
      [
        "studii",
        [
          {
            "todo": "facultatea și anul absolvirii, anul rezidențiatului / specialității"
          }
        ]
      ],
      [
        "formări",
        [
          {
            "todo": "competențe, cursuri, supraspecializări, afilieri profesionale"
          }
        ]
      ],
      [
        "interese",
        [
          {
            "todo": "ce consultă cel mai des, arii de interes clinic"
          }
        ]
      ]
    ]
  },
  {
    "slug": "theodor-nicolau",
    "metaTitle": "Dr. Theodor Nicolau, medic specialist psihiatru | Oradea",
    "metaDescription": "Dr. Theodor Nicolau, medic specialist psihiatru la Clinica Dr. Iova din Oradea. Consultații pentru adulți, gratuite prin CAS cu bilet. Tel. 0359 450 657.",
    "h1": "Dr. Theodor Nicolau",
    "full": "Dr. Theodor Nicolau",
    "pre": "Dr.",
    "given": "Theodor",
    "family": "Nicolau",
    "title": "Medic specialist psihiatru",
    "kind": "adult",
    "cats": [
      "adulti"
    ],
    "tag": "Adulți",
    "typ": "Physician",
    "spec": "Psychiatric",
    "kicker": "Medic specialist psihiatru",
    "intro": "Dr. Theodor Nicolau este medic specialist psihiatru la Clinica Dr. Iova din Oradea. Consultă adulți, la clinica de pe Str. Ceyrat nr. 31, cu programare la recepție. Cu bilet de trimitere, consultația este gratuită prin CAS Bihor.",
    "chips": [
      "Psihiatrie adulți"
    ],
    "serv": [
      "psihiatrie-adulti",
      "consultatii-cas"
    ],
    "servNote": null,
    "casVal": "Da, cu bilet de trimitere.",
    "tl": [
      [
        "prezent",
        [
          {
            "b": "Medic specialist psihiatru"
          },
          " la Clinica Dr. Iova, Oradea."
        ]
      ],
      [
        "studii",
        [
          {
            "todo": "facultatea și anul absolvirii, anul rezidențiatului / specialității"
          }
        ]
      ],
      [
        "formări",
        [
          {
            "todo": "competențe, cursuri, supraspecializări, afilieri profesionale"
          }
        ]
      ],
      [
        "interese",
        [
          {
            "todo": "ce consultă cel mai des, arii de interes clinic"
          }
        ]
      ]
    ]
  },
  {
    "slug": "roxana-samuila",
    "metaTitle": "Dr. Roxana Samuila, psihiatrie pediatrică | Oradea",
    "metaDescription": "Dr. Roxana Samuila, medic specialist psihiatrie pediatrică la Clinica Dr. Iova, Oradea. Consultații copii și adolescenți, gratuite prin CAS cu bilet.",
    "h1": "Dr. Roxana Samuila",
    "full": "Dr. Roxana Samuila",
    "pre": "Dr.",
    "given": "Roxana",
    "family": "Samuila",
    "title": "Medic specialist psihiatrie pediatrică",
    "kind": "copii",
    "cats": [
      "copii"
    ],
    "tag": "Copii",
    "typ": "Physician",
    "spec": "Pediatric",
    "kicker": "Medic specialist psihiatrie pediatrică",
    "intro": "Dr. Roxana Samuila este medic specialist în psihiatrie pediatrică la Clinica Dr. Iova din Oradea. Consultă copii și adolescenți, împreună cu părinții, la clinica de pe Str. Ceyrat nr. 31. Cu bilet de trimitere, consultația este gratuită prin CAS Bihor.",
    "chips": [
      "Psihiatrie pediatrică",
      "Copii și adolescenți"
    ],
    "serv": [
      "psihiatrie-pediatrica",
      "evaluarea-copiilor",
      "consultatii-cas"
    ],
    "servNote": "Evaluarea psihologică a copilului se face de către psihologul clinician al clinicii, la recomandarea medicului.",
    "casVal": "Da, cu bilet de trimitere.",
    "tl": [
      [
        "prezent",
        [
          {
            "b": "Medic specialist psihiatrie pediatrică"
          },
          " la Clinica Dr. Iova, Oradea."
        ]
      ],
      [
        "studii",
        [
          {
            "todo": "facultatea și anul absolvirii, anul rezidențiatului / specialității"
          }
        ]
      ],
      [
        "formări",
        [
          {
            "todo": "competențe, cursuri, supraspecializări, afilieri profesionale"
          }
        ]
      ],
      [
        "interese",
        [
          {
            "todo": "ce consultă cel mai des, arii de interes clinic"
          }
        ]
      ]
    ]
  },
  {
    "slug": "mihaela-caba",
    "metaTitle": "Mihaela Caba, psiholog clinician, logoped | Clinica Dr. Iova",
    "metaDescription": "Mihaela Caba, psiholog clinician și logoped la Clinica Dr. Iova din Oradea. Evaluări psihologice pentru copii și adulți, logopedie. Tel. 0359 450 657.",
    "h1": "Mihaela Caba",
    "full": "Psih. Mihaela Caba",
    "pre": "Psih.",
    "given": "Mihaela",
    "family": "Caba",
    "title": "Psiholog clinician, logoped",
    "kind": "psiho",
    "cats": [
      "copii",
      "psihologie"
    ],
    "tag": "Psihologie",
    "typ": "Person",
    "spec": null,
    "kicker": "Psiholog clinician · Logoped",
    "intro": "Mihaela Caba este psiholog clinician și logoped la Clinica Dr. Iova din Oradea. Face evaluări psihologice și terapie logopedică, pentru copii și adulți, la clinica de pe Str. Ceyrat nr. 31. Programările se fac la recepție, la 0359 450 657.",
    "chips": [
      "Psihologie clinică",
      "Logopedie"
    ],
    "serv": [
      "psihologie-clinica",
      "logopedie",
      "evaluarea-copiilor"
    ],
    "servNote": [
      "La clinică se fac și evaluări pentru comisiile de handicap și pensionare, avize psihologice pentru permisul de port-armă, consiliere psihologică, psihoterapie integrativă și EMDR. ",
      {
        "todo": "care dintre aceste servicii le face Mihaela Caba și ce formări are (psihoterapie, EMDR, Forbrain)"
      }
    ],
    "casVal": [
      {
        "todo": "se decontează serviciile psihologice prin CAS și cu ce trimitere"
      }
    ],
    "tl": [
      [
        "prezent",
        [
          {
            "b": "Psiholog clinician, logoped"
          },
          " la Clinica Dr. Iova, Oradea."
        ]
      ],
      [
        "studii",
        [
          {
            "todo": "facultatea și anul absolvirii, anul rezidențiatului / specialității"
          }
        ]
      ],
      [
        "formări",
        [
          {
            "todo": "competențe, cursuri, supraspecializări, afilieri profesionale"
          }
        ]
      ],
      [
        "interese",
        [
          {
            "todo": "ce consultă cel mai des, arii de interes clinic"
          }
        ]
      ]
    ]
  }
];

export const getDoctor = (slug: string) => DOCTORS.find((d) => d.slug === slug);
export const doctorSlugs = () => DOCTORS.map((d) => d.slug);

export function richText(r: Rich): string {
  if (typeof r === "string") return r;
  return r.map((p) => (typeof p === "string" ? p : "b" in p ? p.b : "de cerut de la client (fișa medicului): " + p.todo)).join("");
}
