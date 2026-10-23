// Port of the shared catalogue + storage helpers of assets/js/programare.js (was window.DRIOVA).
// Used by the booking flow (components/programare/BookingFlow.tsx) and exported for the admin panel.
// NOTE: DOCTORS / SERVICES duplicate data that also lives in src/data/medici.ts / servicii.ts (kept local on purpose).
import type { IconName } from "@/components/Icon";

export type CasKind = "da" | "conditionat" | "nu";
export type Service = { slug: string; name: string; icon: IconName; cas: CasKind; desc: string };
export type Doctor = { slug: string; name: string; short: string; role: string; services: string[]; casMinDays?: number };

export const SERVICES: Service[] = [
  { slug: "psihiatrie-adulti", name: "Psihiatrie adulți", icon: "brain", cas: "da", desc: "Consultație și tratament pentru adulți." },
  { slug: "psihiatrie-pediatrica", name: "Psihiatrie pediatrică", icon: "baby", cas: "da", desc: "Copii și adolescenți, cu părintele prezent." },
  { slug: "neurologie", name: "Neurologie", icon: "activity", cas: "da", desc: "Consultație neurologică pentru adulți." },
  { slug: "psihologie-clinica", name: "Psihologie clinică", icon: "message-circle", cas: "conditionat", desc: "Evaluare psihologică clinică." },
  { slug: "psihoterapie-integrativa", name: "Psihoterapie integrativă", icon: "heart-handshake", cas: "conditionat", desc: "Ședințe individuale de psihoterapie." },
  { slug: "terapie-emdr", name: "Terapie EMDR", icon: "eye", cas: "conditionat", desc: "Terapie pentru experiențe traumatice." },
  { slug: "logopedie", name: "Logopedie", icon: "mic", cas: "conditionat", desc: "Evaluare și terapie a vorbirii, metoda Forbrain." },
  { slug: "evaluarea-copiilor", name: "Evaluarea copiilor", icon: "puzzle", cas: "conditionat", desc: "Evaluare psihologică a dezvoltării." },
  { slug: "consiliere-psihologica", name: "Consiliere psihologică", icon: "users", cas: "conditionat", desc: "Ședințe de consiliere." },
  { slug: "evaluari-comisii", name: "Evaluări pentru comisii", icon: "clipboard-list", cas: "conditionat", desc: "Handicap, pensionare, alte comisii." },
  { slug: "aviz-psihologic-port-arma", name: "Aviz psihologic port armă", icon: "shield-check", cas: "nu", desc: "Examinare psihologică pentru permis de armă." },
  { slug: "nu-stiu", name: "Nu știu sigur", icon: "help-circle", cas: "conditionat", desc: "Recepția vă îndrumă către specialistul potrivit." },
];

export const DOCTORS: Doctor[] = [
  { slug: "sorin-iova", name: "Șef lucr. Dr. Sorin Iova", short: "Dr. Sorin Iova", role: "Medic primar psihiatru", services: ["psihiatrie-adulti", "evaluari-comisii"], casMinDays: 30 },
  { slug: "sebastian-macrea", name: "Dr. Sebastian Macrea", short: "Dr. Sebastian Macrea", role: "Medic specialist psihiatru", services: ["psihiatrie-adulti", "evaluari-comisii"] },
  { slug: "titus-moga", name: "As. Univ. Dr. Titus Moga", short: "Dr. Titus Moga", role: "Medic specialist neurolog", services: ["neurologie"] },
  { slug: "adriana-maties", name: "Dr. Adriana Maties", short: "Dr. Adriana Maties", role: "Medic specialist psihiatru", services: ["psihiatrie-adulti", "evaluari-comisii"] },
  { slug: "theodor-nicolau", name: "Dr. Theodor Nicolau", short: "Dr. Theodor Nicolau", role: "Medic specialist psihiatru", services: ["psihiatrie-adulti", "evaluari-comisii"] },
  { slug: "roxana-samuila", name: "Dr. Roxana Samuila", short: "Dr. Roxana Samuila", role: "Medic specialist psihiatrie pediatrică", services: ["psihiatrie-pediatrica", "evaluarea-copiilor"] },
  { slug: "mihaela-caba", name: "Psih. Mihaela Caba", short: "Psih. Mihaela Caba", role: "Psiholog clinician, logoped", services: ["psihologie-clinica", "logopedie", "evaluarea-copiilor", "consiliere-psihologica", "evaluari-comisii", "aviz-psihologic-port-arma"] },
];

export const STATUS = { noua: "Nouă", confirmata: "Confirmată", reprogramata: "Reprogramată", anulata: "Anulată" };
export const KEYS = { cereri: "driova_cereri_v1", setari: "driova_setari_v1", seed: "driova_seed_v1", blocari: "driova_blocari_v1", seedBlocari: "driova_seed_blocari_v1" };
export const REASONS: Record<string, { label: string; icon: string }> = {
  concediu: { label: "Concediu", icon: "tree-palm" },
  congres: { label: "Congres / formare", icon: "graduation-cap" },
  garda: { label: "Gardă la spital", icon: "hospital" },
  personal: { label: "Personal", icon: "user-round" },
  altul: { label: "Altul", icon: "circle-ellipsis" },
};
export const DAYS = ["duminică", "luni", "marți", "miercuri", "joi", "vineri", "sâmbătă"];
export const DAYS_SHORT = ["Du", "Lu", "Ma", "Mi", "Jo", "Vi", "Sâ"];
export const MONTHS = ["ianuarie", "februarie", "martie", "aprilie", "mai", "iunie", "iulie", "august", "septembrie", "octombrie", "noiembrie", "decembrie"];

export type Hours = [number, number];
export type Settings = {
  schedules: Record<string, Record<number, Hours>>;
  casSlots: Record<string, number>;
  services: Record<string, boolean>;
  templates: Record<string, string>;
};
export type Block = {
  id?: string;
  doctors: string[];
  kind: "zi" | "interval" | "recurent";
  date?: string;
  dateEnd?: string;
  weekday?: number | string;
  from?: string | null;
  to?: string;
  reason?: string;
  note?: string;
  createdAt?: string;
};
export type BookingRequest = {
  id: string;
  ref: string;
  createdAt: string;
  who: string | null;
  childAge: string;
  service: string | null;
  doctor: string | null;
  type: string | null;
  date: string | null;
  slot: string | null;
  name: string;
  phone: string;
  email: string;
  notes: string;
  channel: string;
  consentData: boolean;
  consentHealth: boolean;
  consentAt: string;
  status: keyof typeof STATUS | string;
  internalNote: string;
  history: { at: string; text: string }[];
  [k: string]: unknown;
};

export const defaultSettings = (): Settings => {
  const sched: Settings["schedules"] = {};
  DOCTORS.forEach((d) => {
    sched[d.slug] = { 1: [8, 20], 2: [8, 20], 3: [8, 20], 4: [8, 20], 5: [8, 20] };
  });
  const cas: Settings["casSlots"] = {};
  DOCTORS.forEach((d) => {
    cas[d.slug] = 12;
  });
  const active: Settings["services"] = {};
  SERVICES.forEach((s) => {
    active[s.slug] = true;
  });
  return {
    schedules: sched,
    casSlots: cas,
    services: active,
    templates: {
      confirmare: "Bună ziua, {nume}. Suntem Clinica Dr. Iova din Oradea. Vă confirmăm programarea din {data}, ora {ora}, la {medic}. Vă rugăm să aveți la dumneavoastră actul de identitate, cardul de sănătate și, pentru CAS, biletul de trimitere. Pentru modificări: 0359 450 657.",
      reminder: "Bună ziua, {nume}. Vă reamintim programarea de {data}, ora {ora}, la Clinica Dr. Iova, Str. Ceyrat nr. 31, bl. WR12, Oradea. Dacă nu mai puteți ajunge, vă rugăm să ne anunțați la 0359 450 657.",
      reprogramare: "Bună ziua, {nume}. Pentru programarea dumneavoastră la Clinica Dr. Iova trebuie să stabilim o nouă dată. Vă rugăm să ne scrieți ce interval vă convine sau să ne sunați la 0359 450 657.",
    },
  };
};

export function load<T>(k: string, fb: T): T {
  try {
    const v = JSON.parse(localStorage.getItem(k) as string);
    return v == null ? fb : (v as T);
  } catch {
    return fb;
  }
}
export function save(k: string, v: unknown): void {
  try {
    localStorage.setItem(k, JSON.stringify(v));
  } catch {
    /* storage unavailable */
  }
}

export const getSettings = (): Settings => {
  const s = load<Partial<Settings> | null>(KEYS.setari, null);
  const d = defaultSettings();
  if (!s) return d;
  return {
    schedules: Object.assign(d.schedules, s.schedules || {}),
    casSlots: Object.assign(d.casSlots, s.casSlots || {}),
    services: Object.assign(d.services, s.services || {}),
    templates: Object.assign(d.templates, s.templates || {}),
  };
};

export const pad = (n: number) => (n < 10 ? "0" : "") + n;
export const iso = (d: Date) => d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
export const fromIso = (s: string) => {
  const p = s.split("-");
  return new Date(+p[0], +p[1] - 1, +p[2]);
};
export const fmtDate = (s: string, withDay?: boolean) => {
  const d = fromIso(s);
  return (withDay ? DAYS[d.getDay()] + ", " : "") + pad(d.getDate()) + "." + pad(d.getMonth() + 1) + "." + d.getFullYear();
};
export const fmtLong = (s: string) => {
  const d = fromIso(s);
  return DAYS[d.getDay()] + ", " + d.getDate() + " " + MONTHS[d.getMonth()] + " " + d.getFullYear();
};
export const hash = (str: string) => {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
};

// ---- blocări (ore blocate de recepție)
export const getBlocks = (): Block[] => load<Block[]>(KEYS.blocari, []);
export const saveBlocks = (list: Block[]) => save(KEYS.blocari, list);
export const blockApplies = (b: Block, doctorSlug: string, dateIso: string): boolean => {
  if (!(b.doctors.indexOf("all") >= 0 || b.doctors.indexOf(doctorSlug) >= 0)) return false;
  if (b.kind === "recurent") {
    if (fromIso(dateIso).getDay() !== +(b.weekday as number)) return false;
    if (b.date && dateIso < b.date) return false;
    if (b.dateEnd && dateIso > b.dateEnd) return false;
    return true;
  }
  if (b.kind === "interval") return dateIso >= (b.date as string) && dateIso <= (b.dateEnd as string);
  return dateIso === b.date;
};
export const blockFor = (doctorSlug: string, dateIso: string, slot: string, blocks?: Block[]): Block | null => {
  const bs = blocks || getBlocks();
  for (let i = 0; i < bs.length; i++) {
    const b = bs[i];
    if (!blockApplies(b, doctorSlug, dateIso)) continue;
    if (!b.from) return b;
    if (slot >= b.from && slot < (b.to as string)) return b;
  }
  return null;
};
export const dayBlocked = (doctorSlug: string, dateIso: string, blocks?: Block[]): boolean => {
  const s = getSettings();
  const dow = fromIso(dateIso).getDay();
  const h = (s.schedules[doctorSlug] || {})[dow];
  if (!h) return false;
  const bs = blocks || getBlocks();
  for (let hh = h[0]; hh < h[1]; hh++) for (let m = 0; m < 60; m += 30) if (!blockFor(doctorSlug, dateIso, pad(hh) + ":" + pad(m), bs)) return false;
  return true;
};

export const getRequests = (): BookingRequest[] => load<BookingRequest[]>(KEYS.cereri, []);
export const saveRequests = (list: BookingRequest[]) => save(KEYS.cereri, list);

export const slotsFor = (doctorSlug: string, dateIso: string): string[] => {
  const s = getSettings();
  const d = fromIso(dateIso);
  const dow = d.getDay();
  if (dow === 0 || dow === 6) return [];
  const docs = doctorSlug === "any" ? DOCTORS : DOCTORS.filter((x) => x.slug === doctorSlug);
  const booked = getRequests().filter((r) => r.date === dateIso && r.status !== "anulata");
  const bs = getBlocks();
  const out: Record<string, boolean> = {};
  docs.forEach((doc) => {
    const h = (s.schedules[doc.slug] || {})[dow];
    if (!h) return;
    for (let hh = h[0]; hh < h[1]; hh++)
      for (let m = 0; m < 60; m += 30) {
        const t = pad(hh) + ":" + pad(m);
        if (blockFor(doc.slug, dateIso, t, bs)) continue; // ore blocate de recepție
        if (hash(doc.slug + dateIso + t) % 10 < 4) continue; // mock: ~40% occupied
        if (booked.some((r) => r.doctor === doc.slug && r.slot === t)) continue;
        out[t] = true;
      }
  });
  return Object.keys(out).sort();
};

export const newRef = (): string => {
  const d = new Date();
  const a = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let s = "";
  for (let i = 0; i < 4; i++) s += a[Math.floor(Math.random() * a.length)];
  return "DI-" + String(d.getFullYear()).slice(2) + pad(d.getMonth() + 1) + pad(d.getDate()) + "-" + s;
};

export const fill = (tpl: string, r: Pick<BookingRequest, "name" | "date" | "slot" | "doctor" | "ref">): string => {
  const doc = DOCTORS.filter((d) => d.slug === r.doctor)[0];
  return tpl
    .replace(/\{nume\}/g, r.name)
    .replace(/\{data\}/g, r.date ? fmtDate(r.date, true) : "")
    .replace(/\{ora\}/g, r.slot || "")
    .replace(/\{medic\}/g, doc ? doc.short : "medicul disponibil")
    .replace(/\{ref\}/g, r.ref);
};

export const getService = (slug: string | null | undefined): Service | undefined => SERVICES.filter((s) => s.slug === slug)[0];
export const getDoctor = (slug: string | null | undefined): Doctor | undefined => DOCTORS.filter((d) => d.slug === slug)[0];
