// Mock data, catalogue and localStorage helpers for the /admin/ demo panel.
// Port of window.DRIOVA (assets/js/programare.js) + the seed/format helpers of assets/js/admin.js.
// All storage access is guarded (SSR-safe, try/catch). Keys are identical to the original site.

import {
  SERVICES, DOCTORS, STATUS as P_STATUS, KEYS, REASONS as P_REASONS, DAYS, DAYS_SHORT, MONTHS, load, save, pad, iso, fromIso, fmtDate, fmtLong,
  getRequests as pGetRequests, saveRequests as pSaveRequests, getBlocks as pGetBlocks, saveBlocks as pSaveBlocks,
  getSettings as pGetSettings, defaultSettings as pDefaultSettings, blockFor as pBlockFor, newRef,
  getService, getDoctor, type Block as PBlock, type BookingRequest,
} from "@/data/programare";

export { SERVICES, DOCTORS, KEYS, DAYS, DAYS_SHORT, MONTHS, load, save, pad, iso, fromIso, fmtDate, fmtLong };
export const STATUS = P_STATUS as Record<Status, string>;
export const REASONS = P_REASONS as Record<ReasonKey, { label: string; icon: IconKey }>;
export type Status = "noua" | "confirmata" | "reprogramata" | "anulata";
export type Channel = "telefon" | "whatsapp" | "email" | "sms";
export type ReqType = "cas" | "privat";
export type ReasonKey = "concediu" | "congres" | "garda" | "personal" | "altul";
export type IconKey = string;

export const SESSION_KEY = "driova_admin_sesiune";

export type Hist = { at: string; text: string };
export type Req = {
  id: string; ref: string; createdAt: string; who: "me" | "child" | "other"; childAge: string; service: string; doctor: string; type: ReqType;
  date: string; slot: string; duration?: number; name: string; phone: string; email: string; notes: string; channel: Channel;
  consentData: boolean; consentHealth: boolean; consentAt: string; consentNote?: string; source?: string; sourceBy?: string;
  status: Status; internalNote: string; history: Hist[];
};
export type Appt = { name: string; phone: string; service: string; type: ReqType; channel: Channel; note: string };
export type Block = {
  id: string | null; doctors: string[]; kind: "zi" | "interval" | "recurent"; date: string; dateEnd: string; weekday?: number;
  from: string | null; to: string | null; reason: string; note: string; createdAt?: string; dur?: number; appt?: Appt | null;
};
export type Settings = {
  schedules: Record<string, Record<string, [number | null, number | null] | null>>;
  casSlots: Record<string, number>;
  services: Record<string, boolean>;
  templates: { confirmare: string; reminder: string; reprogramare: string };
};

// ---------- storage (shared helpers live in data/programare.ts) ----------
export function remove(k: string): void {
  try { localStorage.removeItem(k); } catch { /* ignore */ }
}
export const getRequests = (): Req[] => pGetRequests() as unknown as Req[];
export const saveRequests = (list: Req[]) => pSaveRequests(list as unknown as BookingRequest[]);
export const getBlocks = (): Block[] => pGetBlocks() as unknown as Block[];
export const saveBlocks = (list: Block[]) => pSaveBlocks(list as unknown as PBlock[]);
export const defaultSettings = (): Settings => pDefaultSettings() as unknown as Settings;
export const getSettings = (): Settings => pGetSettings() as unknown as Settings;

// ---------- dates ----------

export const addDays = (d: Date, n: number) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };
export const nextWorkday = (d: Date, n: number) => { const x = new Date(d); let c = 0; while (c < n) { x.setDate(x.getDate() + 1); if (x.getDay() !== 0 && x.getDay() !== 6) c++; } return x; };
export const mondayOf = (d: Date) => { const x = new Date(d); x.setDate(x.getDate() - ((x.getDay() + 6) % 7)); x.setHours(0, 0, 0, 0); return x; };
export const fmtTime = (isoStr: string) => { const d = new Date(isoStr); return pad(d.getDate()) + "." + pad(d.getMonth() + 1) + " " + pad(d.getHours()) + ":" + pad(d.getMinutes()); };
export const addMin = (t: string, m: number) => { const h = +t.slice(0, 2), mm = +t.slice(3) + m; return pad(h + Math.floor(mm / 60)) + ":" + pad(mm % 60); };

let _today: Date | null = null;
/** Midnight of the day the panel was first used (client only; never call during SSR render). */
export const getToday = (): Date => { if (!_today) { _today = new Date(); _today.setHours(0, 0, 0, 0); } return _today; };

// ---------- lookups / labels ----------
export const service = getService;
export const doctor = getDoctor;
export const docName = (slug: string) => { const d = doctor(slug); return d ? d.short : "Primul disponibil"; };
export const svcName = (slug: string) => { const s = service(slug); return s ? s.name : "–"; };
export const whoLabel = (r: Req) => (r.who === "child" ? "copil" + (r.childAge ? ", " + r.childAge + " ani" : "") : r.who === "other" ? "pentru altcineva" : "pentru sine");
export const channelLabel = (c: string) => (c === "whatsapp" ? "WhatsApp" : c === "email" ? "E-mail" : "Telefon");
export const validPhone = (v: string) => /^(\+40|0040|0)[237]\d{8}$/.test(String(v).replace(/[\s.\-()]/g, ""));
export const refCode = newRef;

export const fillTpl = (tpl: string, r: Req) => {
  const doc = doctor(r.doctor);
  return tpl.replace(/\{nume\}/g, r.name).replace(/\{data\}/g, r.date ? fmtDate(r.date, true) : "").replace(/\{ora\}/g, r.slot || "").replace(/\{medic\}/g, doc ? doc.short : "medicul disponibil").replace(/\{ref\}/g, r.ref);
};
export const waHref = (r: Req, tplKey: keyof Settings["templates"], S: Settings) => {
  const msg = fillTpl(S.templates[tplKey] || S.templates.confirmare, r);
  const n = r.phone.replace(/[\s.\-()]/g, "").replace(/^\+/, "").replace(/^0040/, "40").replace(/^0/, "40");
  return "https://wa.me/" + n + "?text=" + encodeURIComponent(msg);
};

// ---------- blocks ----------
export const blockFor = (doctorSlug: string, dateIso: string, slot: string, blocks: Block[]): Block | null =>
  pBlockFor(doctorSlug, dateIso, slot, blocks as unknown as PBlock[]) as unknown as Block | null;
export const hoursText = (b: Block) => (b.from ? b.from + "–" + b.to : "toată ziua");
export const whenText = (b: Block) => {
  if (b.kind === "interval") return "de " + DAYS[fromIso(b.date).getDay()] + " " + fmtDate(b.date) + " până " + DAYS[fromIso(b.dateEnd).getDay()] + " " + fmtDate(b.dateEnd) + ", " + hoursText(b);
  if (b.kind === "recurent") return "în fiecare " + DAYS[+(b.weekday as number)] + ", " + hoursText(b) + (b.date ? ", începând cu " + fmtDate(b.date) : "") + (b.dateEnd ? ", până la " + fmtDate(b.dateEnd) : "");
  return DAYS[fromIso(b.date).getDay()] + " " + fmtDate(b.date) + ", " + hoursText(b);
};
export const docsText = (docs: string[]) => {
  if (docs.indexOf("all") >= 0) return "Toți medicii";
  const n = docs.map(docName);
  return n.length <= 1 ? n.join("") : n.slice(0, -1).join(", ") + " și " + n[n.length - 1];
};
export const summaryText = (b: Block) => docsText(b.doctors) + " nu " + (b.doctors.indexOf("all") >= 0 || b.doctors.length > 1 ? "primesc" : "primește") + " programări " + whenText(b) + ".";
export const apptSummary = (b: Block) => {
  const a = b.appt as Appt;
  return "Programare: " + a.name + " la " + docName(b.doctors[0]) + ", " + DAYS[fromIso(b.date).getDay()] + " " + fmtDate(b.date) + ", " + b.from + "–" + b.to + ", " + (a.type === "cas" ? "CAS cu bilet de trimitere" : "privat") + ".";
};
export const blockConflicts = (b: Block, reqs: Req[]) =>
  reqs.filter((r) => {
    if (r.status === "anulata") return false;
    const docOk = b.doctors.indexOf("all") >= 0 || b.doctors.indexOf(r.doctor) >= 0;
    if (!docOk) return false;
    return !!blockFor(r.doctor === "any" ? b.doctors[0] : r.doctor, r.date, r.slot, [b]);
  }).sort((a, c) => ((a.date + a.slot) < (c.date + c.slot) ? -1 : 1));
export const apptConflicts = (b: Block, reqs: Req[], blocks: Block[]) => {
  const doc = b.doctors[0];
  const rs = reqs.filter((r) => {
    if (r.status === "anulata" || r.date !== b.date || r.doctor !== doc) return false;
    const rEnd = addMin(r.slot, r.duration || 30);
    return r.slot < (b.to as string) && rEnd > (b.from as string);
  });
  const bls: Block[] = []; const seen: Record<string, number> = {};
  for (let t = b.from as string; t < (b.to as string); t = addMin(t, 30)) {
    const bl = blockFor(doc, b.date, t, blocks);
    if (bl && !seen[bl.id as string]) { seen[bl.id as string] = 1; bls.push(bl); }
  }
  return { reqs: rs, blocks: bls };
};

// ---------- seed (obviously fictional) ----------
type SeedRow = [number, number, string, string, string, ReqType, "me" | "child" | "other", Status, Channel];
const SEED_ROWS: SeedRow[] = [
  // [daysFromTodayCreated(-), workdays ahead, slot, service, doctor, type, who, status, channel]
  [0, 1, "09:00", "psihiatrie-adulti", "sorin-iova", "cas", "me", "noua", "telefon"],
  [0, 2, "11:30", "psihiatrie-pediatrica", "roxana-samuila", "cas", "child", "noua", "whatsapp"],
  [0, 0, "16:00", "neurologie", "titus-moga", "privat", "me", "confirmata", "telefon"],
  [1, 0, "10:30", "psihologie-clinica", "mihaela-caba", "privat", "me", "confirmata", "email"],
  [1, 1, "14:00", "psihiatrie-adulti", "adriana-maties", "cas", "other", "noua", "telefon"],
  [1, 3, "18:30", "logopedie", "mihaela-caba", "privat", "child", "confirmata", "whatsapp"],
  [2, 2, "08:30", "psihiatrie-adulti", "theodor-nicolau", "cas", "me", "reprogramata", "telefon"],
  [2, 0, "13:00", "evaluarea-copiilor", "roxana-samuila", "cas", "child", "confirmata", "telefon"],
  [3, 4, "17:00", "psihiatrie-adulti", "sebastian-macrea", "privat", "me", "noua", "whatsapp"],
  [3, 1, "12:00", "evaluari-comisii", "sorin-iova", "cas", "other", "anulata", "telefon"],
  [4, 5, "09:30", "aviz-psihologic-port-arma", "mihaela-caba", "privat", "me", "confirmata", "email"],
  [4, 2, "15:30", "neurologie", "any", "cas", "me", "reprogramata", "telefon"],
  [5, 0, "19:00", "consiliere-psihologica", "mihaela-caba", "privat", "me", "anulata", "whatsapp"],
];

export function seedRequests(): void {
  if (load(KEYS.seed, false)) return;
  const today = getToday();
  const list: Req[] = SEED_ROWS.map((r, i) => {
    const n = pad(i + 1);
    const created = addDays(today, -r[0]);
    created.setHours(9 + (i % 9), (i * 7) % 60);
    let date = iso(nextWorkday(today, r[1]));
    if (r[1] === 0 && (today.getDay() === 0 || today.getDay() === 6)) date = iso(nextWorkday(today, 1));
    const hist: Hist[] = [{ at: created.toISOString(), text: "Cerere trimisă din site (date demo)" }];
    if (r[7] !== "noua") hist.push({ at: addDays(created, 0).toISOString().replace(/T\d\d/, "T" + pad(10 + (i % 8))), text: "Status: " + STATUS[r[7]] + " (recepție)" });
    return {
      id: "demo" + n, ref: "DI-DEMO-" + n, createdAt: created.toISOString(), who: r[6], childAge: r[6] === "child" ? String(4 + (i % 10)) : "",
      service: r[3], doctor: r[4], type: r[5], date, slot: r[2], name: "Pacient Demo " + n, phone: "0700 000 0" + n, email: "demo" + n + "@exemplu.ro",
      notes: i % 4 === 0 ? "Prefer după-amiaza." : "", channel: r[8], consentData: true, consentHealth: true, consentAt: created.toISOString(),
      status: r[7], internalNote: i % 5 === 0 ? "A cerut să fie sunat după ora 12." : "", history: hist,
    };
  });
  saveRequests(getRequests().concat(list));
  save(KEYS.seed, true);
}

export function seedBlocks(): void {
  if (load(KEYS.seedBlocari, false)) return;
  const today = getToday();
  const mon = mondayOf(today), nextMon = addDays(mon, 7);
  const list: Block[] = [
    { id: "blk-demo-01", doctors: ["sorin-iova"], kind: "interval", date: iso(nextMon), dateEnd: iso(addDays(nextMon, 2)), from: null, to: null, reason: "congres", note: "Congres (date demo)", createdAt: new Date().toISOString() },
    { id: "blk-demo-02", doctors: ["titus-moga"], kind: "recurent", weekday: 5, date: iso(mon), dateEnd: "", from: "14:00", to: "20:00", reason: "garda", note: "Gardă la spital, vinerea după-amiază (date demo)", createdAt: new Date().toISOString() },
    { id: "blk-demo-03", doctors: ["mihaela-caba"], kind: "zi", date: iso(addDays(nextMon, 3)), dateEnd: "", from: "08:00", to: "12:00", reason: "personal", note: "(date demo)", createdAt: new Date().toISOString() },
  ];
  saveBlocks(getBlocks().concat(list));
  save(KEYS.seedBlocari, true);
}

// ---------- views ----------
export type ViewKey = "panou" | "cereri" | "calendar" | "blocari" | "setari";
export const VIEWS: Record<ViewKey, [string, string]> = {
  panou: ["Panou", "Privire de ansamblu pe cereri și programări"],
  cereri: ["Cereri de programare", "Toate cererile venite din site și de la recepție"],
  calendar: ["Calendar", "Programări pe medic, luni–vineri 08:00–20:00"],
  blocari: ["Ore blocate", "Concedii, congrese, gărzi: intervale în care medicii nu primesc programări"],
  setari: ["Setări", "Program, servicii, locuri CAS, șabloane de mesaje"],
};

export const timeOptions = (fromH: number, toH: number, opts?: { skipFirst?: boolean; includeEnd?: boolean }) => {
  const out: string[] = [];
  for (let h = fromH; h <= toH; h++) for (let m = 0; m < 60; m += 30) {
    if (h === toH && !opts?.includeEnd) continue;
    if (h === toH && m > 0) continue;
    out.push(pad(h) + ":" + pad(m));
  }
  return opts?.skipFirst ? out.slice(1) : out;
};

export type Filters = { status: string; doc: string; type: string; date: string };
export const EMPTY_FILTERS: Filters = { status: "", doc: "", type: "", date: "" };
export const filterReqs = (reqs: Req[], q0: string, f: Filters) => {
  const q = q0.trim().toLowerCase();
  return reqs.filter((r) => {
    if (f.status && r.status !== f.status) return false;
    if (f.doc && r.doctor !== f.doc) return false;
    if (f.type && r.type !== f.type) return false;
    if (f.date && r.date !== f.date) return false;
    if (q && [r.name, r.phone, r.ref, r.email].join(" ").toLowerCase().indexOf(q) < 0) return false;
    return true;
  }).sort((a, b) => ((a.date + a.slot) < (b.date + b.slot) ? -1 : 1));
};

/** Timestamp/id helpers (kept out of components so render-purity lint does not flag event handlers). */
export const stamp = () => Date.now();
