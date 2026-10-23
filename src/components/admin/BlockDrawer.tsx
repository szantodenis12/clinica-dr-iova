"use client";
import { useEffect, useRef, useState } from "react";
import Icon from "@/components/Icon";
import {
  DOCTORS, REASONS, STATUS, addMin, apptConflicts, apptSummary, blockConflicts, docName, doctor, fmtDate, fromIso, getToday, iso,
  refCode, stamp, summaryText, svcName, timeOptions, validPhone, waHref, whenText,
  type Appt, type Block, type Channel, type ReasonKey, type ReqType, type Req,
} from "@/data/admin";
import AdmIcon from "./AdmIcon";
import { useAdmin } from "./context";
import { useSlide } from "./useSlide";

type Draft = Block & { dur: number; appt: Appt | null; note: string };
type ApForm = { doc: string; date: string; hour: string; dur: string; name: string; phone: string; svc: string; type: ReqType; ch: Channel; note: string };
type WhenForm = { date: string; dateA: string; dateB: string; recFrom: string; recTo: string; allday: boolean; from: string; to: string; hour: string };

const HOURS = timeOptions(8, 20);
const FROM_OPTS = timeOptions(8, 20);
const TO_OPTS = timeOptions(8, 20, { includeEnd: true, skipFirst: true });
const WEEKDAYS: [number, string][] = [[1, "Luni"], [2, "Marți"], [3, "Miercuri"], [4, "Joi"], [5, "Vineri"]];
const isWeekend = (d: string) => [0, 6].indexOf(fromIso(d).getDay()) >= 0;

const apSvcOptions = (docSlug: string) => {
  const d = doctor(docSlug);
  return (d ? d.services : []).concat(["nu-stiu"]);
};
const normSvc = (docSlug: string, cur: string) => { const o = apSvcOptions(docSlug); return o.indexOf(cur) >= 0 ? cur : o[0]; };

function initDraft(pre: Partial<Block>): Draft {
  return {
    id: pre.id || null, doctors: (pre.doctors || []).slice(), kind: pre.kind || "zi", date: pre.date || "", dateEnd: pre.dateEnd || "",
    weekday: pre.weekday || (pre.date ? fromIso(pre.date).getDay() : 0), from: pre.from || null, to: pre.to || null, dur: pre.dur || 30,
    reason: pre.reason || "", note: pre.note || "", appt: pre.appt || null, createdAt: pre.createdAt,
  };
}
function initWhen(b: Draft): WhenForm {
  return {
    date: b.kind === "zi" ? b.date : "", dateA: b.kind === "interval" ? b.date : "", dateB: b.dateEnd || "",
    recFrom: b.kind === "recurent" ? b.date : "", recTo: b.kind === "recurent" ? (b.dateEnd || "") : "",
    allday: !b.from, from: b.from || "08:00", to: b.to || "12:00", hour: b.from || "09:00",
  };
}
const emptyAp = (): ApForm => ({ doc: DOCTORS[0].slug, date: "", hour: "09:00", dur: "30", name: "", phone: "", svc: normSvc(DOCTORS[0].slug, ""), type: "cas", ch: "telefon", note: "" });

/** Same as syncApptForm(): refreshes the programare form from the draft. */
function syncAp(b: Draft, cur: ApForm): ApForm {
  const single = b.doctors.length === 1 && b.doctors[0] !== "all";
  const docSlug = single ? b.doctors[0] : DOCTORS[0].slug;
  const next: ApForm = { ...cur, doc: docSlug, svc: normSvc(docSlug, cur.svc), date: b.kind === "zi" && b.date ? b.date : "", hour: b.from || "09:00", dur: String(b.dur || 30) };
  if (b.appt) { next.name = b.appt.name || ""; next.phone = b.appt.phone || ""; next.svc = b.appt.service || next.svc; next.note = b.appt.note || ""; next.type = b.appt.type; next.ch = b.appt.channel; }
  return next;
}

export default function BlockDrawer({ pre, open }: { pre: Partial<Block>; open: boolean }) {
  const { reqs, blocks, settings, toast, closeBlock, openDrawer, addRequest, saveBlockList, getBlockList } = useAdmin();
  const { shown, on } = useSlide(open);
  const TODAY = iso(getToday());

  const [b, setB] = useState<Draft>(() => initDraft(pre));
  const [w, setW] = useState<WhenForm>(() => initWhen(initDraft(pre)));
  const [ap, setAp] = useState<ApForm>(() => { const d = initDraft(pre); return d.reason === "programare" ? syncAp(d, emptyAp()) : emptyAp(); });
  const [bdErr, setBdErr] = useState("");
  const [apErr, setApErr] = useState("");
  const [note, setNote] = useState(b.note);
  const [step, setStep] = useState<number>(() => { const d = initDraft(pre); return d.id ? 4 : d.doctors.length ? 2 : 1; });
  const first = useRef(true);

  const isAppt = b.reason === "programare";

  // focus the pane heading after each step change (not on first mount, where the drawer is still hidden)
  useEffect(() => {
    if (first.current) { first.current = false; return; }
    const h = document.querySelector<HTMLElement>("#bd-" + step + " .bd-h");
    if (h) { h.setAttribute("tabindex", "-1"); h.focus({ preventScroll: true }); }
  }, [step]);

  // ---------- readers (mirror readWhen / readAppt) ----------
  const readWhen = (d: Draft, f: WhenForm): { b: Draft; err: string } => {
    const x = { ...d }; let err = "";
    if (x.reason === "programare") {
      x.kind = "zi"; x.date = f.date; x.dateEnd = ""; x.from = f.hour; x.to = addMin(f.hour, x.dur || 30);
      if (!x.date) err = "Alegeți ziua."; else if (isWeekend(x.date)) err = "Clinica este închisă în weekend. Alegeți o zi de luni până vineri.";
      return { b: x, err };
    }
    const k = x.kind;
    if (k === "zi") { x.date = f.date; x.dateEnd = ""; if (!x.date) err = "Alegeți ziua."; else if (isWeekend(x.date)) err = "Clinica este închisă în weekend. Alegeți o zi de luni până vineri."; }
    if (k === "interval") { x.date = f.dateA; x.dateEnd = f.dateB; if (!x.date || !x.dateEnd) err = "Completați ambele date."; else if (x.dateEnd < x.date) err = "Data de final este înaintea datei de început."; }
    if (k === "recurent") { x.date = f.recFrom || TODAY; x.dateEnd = f.recTo; if (!x.weekday) err = "Alegeți ziua săptămânii."; }
    if (f.allday) { x.from = null; x.to = null; } else { x.from = f.from; x.to = f.to; if (x.to <= x.from) err = err || "Ora de final trebuie să fie după ora de început."; }
    return { b: x, err };
  };
  const readAppt = (d: Draft, f: ApForm): Draft | null => {
    const a: Appt = { name: f.name.trim(), phone: f.phone.trim(), service: f.svc, type: f.type, channel: f.ch, note: f.note.trim() };
    const docSlug = f.doc, date = f.date, from = f.hour, dur = +f.dur || 30;
    let err = "";
    if (!docSlug) err = "Alegeți medicul."; else if (!date) err = "Alegeți ziua."; else if (isWeekend(date)) err = "Clinica este închisă în weekend."; else if (a.name.length < 3) err = "Scrieți numele pacientului."; else if (!validPhone(a.phone)) err = "Scrieți un număr de telefon valid din România, de exemplu 0745 123 456.";
    setApErr(err);
    if (err) {
      const id = !docSlug ? "ap-doc" : !date ? "ap-date" : a.name.length < 3 ? "ap-name" : "ap-phone";
      document.getElementById(id)?.focus();
      return null;
    }
    return { ...d, doctors: [docSlug], kind: "zi", date, dateEnd: "", from, dur, to: addMin(from, dur), appt: a };
  };

  // ---------- navigation (goB) ----------
  const goB = (n: number) => {
    let x = b;
    if (n > step || n === 4) {
      if (step === 1 && !x.doctors.length && n > 1) { toast("Alegeți cel puțin un medic.", "alert-triangle"); return; }
      if (step === 1 && n > 1 && isAppt && (x.doctors.length !== 1 || x.doctors[0] === "all")) { toast("Pentru o programare alegeți un singur medic.", "alert-triangle"); return; }
      if (step === 2 && n > 2) { const r = readWhen(x, w); x = r.b; setBdErr(r.err); if (r.err) { setB(x); return; } }
      if (step === 3 && n > 3) {
        if (!x.reason) { toast("Alegeți un motiv.", "alert-triangle"); return; }
        if (isAppt) { const r = readAppt(x, ap); if (!r) return; x = r; } else x = { ...x, note: note.trim() };
      }
    }
    if (n === 4 && x.id) { x = readWhen(x, w).b; x = { ...x, note: note.trim() }; }
    setB(x);
    setStep(n);
    if (n === 3 && x.reason === "programare") setAp((cur) => syncAp(x, cur));
  };

  // ---------- save ----------
  const saveAppointment = (d: Draft) => {
    const a = d.appt as Appt, now = new Date().toISOString();
    const r: Req = {
      id: "r" + stamp(), ref: refCode(), createdAt: now, who: "me", childAge: "", service: a.service, doctor: d.doctors[0], type: a.type, date: d.date, slot: d.from as string,
      duration: d.dur || 30, name: a.name, phone: a.phone, email: "", notes: "", channel: a.channel, consentData: true, consentHealth: true, consentAt: now,
      consentNote: "acord verbal la telefon, notat de recepție", source: "receptie", sourceBy: "Recepție (demo)", status: "confirmata", internalNote: a.note || "",
      history: [{ at: now, text: "Programare introdusă de recepție (telefon)" }, { at: now, text: "Status: Confirmată (recepție)" }],
    };
    addRequest(r);
    const txt = apptSummary(d);
    closeBlock();
    const wa = waHref(r, "confirmare", settings);
    toast(txt, "calendar-check", { label: "Trimite confirmare pe WhatsApp", cls: "wa", fn: () => { window.open(wa, "_blank", "noopener"); } });
  };
  const saveBlock = (quiet?: boolean) => {
    if (isAppt) { saveAppointment(b); return; }
    const d: Block = { ...b }, isNew = !d.id;
    let list = getBlockList().slice();
    if (isNew) { d.id = "blk" + stamp(); d.createdAt = new Date().toISOString(); list.push(d); } else { list = list.map((x) => (x.id === d.id ? d : x)); }
    saveBlockList(list);
    const txt = summaryText(d);
    closeBlock();
    if (!quiet) toast((isNew ? "Orele au fost blocate. " : "Blocarea a fost actualizată. ") + txt, "calendar-off");
  };

  // ---------- pane helpers ----------
  const setKind = (k: Block["kind"]) => setB((x) => ({ ...x, kind: k }));
  const pickDoc = (v: string) => setB((x) => {
    let docs: string[];
    if (x.reason === "programare") docs = [v];
    else if (v === "all") docs = x.doctors.indexOf("all") >= 0 ? [] : ["all"];
    else { docs = x.doctors.filter((y) => y !== "all"); const i = docs.indexOf(v); if (i >= 0) docs.splice(i, 1); else docs.push(v); }
    return { ...x, doctors: docs };
  });
  const pickReason = (r: string) => {
    const nb = { ...b, reason: r };
    setB(nb);
    if (r === "programare") setAp((cur) => syncAp(nb, cur));
  };
  const setApf = <K extends keyof ApForm>(k: K, v: ApForm[K]) => setAp((p) => ({ ...p, [k]: v }));
  const setWf = <K extends keyof WhenForm>(k: K, v: WhenForm[K]) => setW((p) => ({ ...p, [k]: v }));

  // ---------- step 4 derived ----------
  let summary = "", confTxt = "", okTxt = "";
  let confBlocks: Block[] = [], confReqs: Req[] = [];
  if (step === 4) {
    if (isAppt && b.appt) {
      summary = apptSummary(b);
      const cc = apptConflicts(b, reqs, blocks);
      confBlocks = cc.blocks; confReqs = cc.reqs;
      const tot = confReqs.length + confBlocks.length;
      okTxt = "Intervalul este liber la " + docName(b.doctors[0]) + ".";
      if (tot) confTxt = (confReqs.length ? confReqs.length + (confReqs.length === 1 ? " programare existentă se suprapune" : " programări existente se suprapun") + " cu acest interval. " : "") + (confBlocks.length ? "Medicul are ore blocate în acest interval. " : "") + "Puteți confirma oricum sau reveniți și alegeți altă oră.";
    } else if (!isAppt) {
      summary = summaryText(b);
      confReqs = blockConflicts(b, reqs);
      okTxt = "Nicio cerere existentă în acest interval.";
      if (confReqs.length) confTxt = confReqs.length + (confReqs.length === 1 ? " cerere existentă cade" : " cereri existente cad") + " în acest interval. Blocarea se salvează, dar pacienții trebuie anunțați și reprogramați.";
    }
  }
  const hasConf = confReqs.length + confBlocks.length > 0;



  return (
    <>
      <div className={"drawer-bg" + (on ? " is-open" : "")} id="bd-bg" hidden={!shown} onClick={closeBlock}></div>
      <aside className={"drawer bdrawer" + (on ? " is-open" : "")} id="bdrawer" role="dialog" aria-modal="true" aria-labelledby="bd-title" hidden={!shown}>
        <header className="dr-head">
          <div><span className="dr-ref" id="bd-step">{step < 4 ? "Pasul " + step + " din 3" : "Verificați și confirmați"}</span>
            <h2 id="bd-title">{isAppt ? "Programare pacient" : b.id ? "Modificați blocarea" : "Blocați ore"}</h2>
            <ol className="bd-steps" aria-hidden="true">
              {["Medic", "Când", "Motiv", "Confirmare"].map((l, i) => (
                <li key={l} data-s={i + 1} className={(i + 1 === step ? "is-current " : "") + (i + 1 < step ? "is-done" : "") || undefined}>{l}</li>
              ))}
            </ol></div>
          <button type="button" className="tbtn icon" id="bd-close" aria-label="Închideți" onClick={closeBlock}><Icon name="x" /></button>
        </header>
        <div className="dr-body">

          <section className="bd-pane" id="bd-1" aria-labelledby="bd-h1" hidden={step !== 1}>
            <h3 id="bd-h1" className="bd-h">{isAppt ? "La care medic?" : "Pentru care medic?"}</h3>
            <p className="bd-sub" id="bd-sub1">{isAppt ? "Alegeți un singur medic." : "Puteți alege unul sau mai mulți medici."}</p>
            <div className="bd-docs" id="bd-docs">
              <button type="button" className={"bd-doc all" + (b.doctors.indexOf("all") >= 0 ? " is-on" : "")} data-v="all" aria-pressed={b.doctors.indexOf("all") >= 0} hidden={isAppt} onClick={() => pickDoc("all")}>
                <span className="av"><Icon name="users" /></span><span className="tx"><b>Toți medicii</b><small>toată clinica</small></span><Icon name="check" className="chk" />
              </button>
              {DOCTORS.map((d) => {
                const onD = b.doctors.indexOf(d.slug) >= 0;
                return (
                  <button key={d.slug} type="button" className={"bd-doc" + (onD ? " is-on" : "")} data-v={d.slug} aria-pressed={onD} onClick={() => pickDoc(d.slug)}>
                    <span className="av"><img src={"/img/avatar/" + d.slug + ".png"} alt="" /></span><span className="tx"><b>{d.short}</b><small>{d.role}</small></span><Icon name="check" className="chk" />
                  </button>
                );
              })}
            </div>
          </section>

          <section className="bd-pane" id="bd-2" aria-labelledby="bd-h2" hidden={step !== 2}>
            <h3 id="bd-h2" className="bd-h">{isAppt ? "Ziua și ora" : "Când?"}</h3>
            <div className="bd-kinds" role="radiogroup" aria-label="Tipul blocării" hidden={isAppt}>
              {([["zi", "calendar", "O zi", "o singură zi"], ["interval", "calendar-range", "Mai multe zile", "de la, până la"], ["recurent", "repeat", "Săptămânal", "în fiecare marți, de exemplu"]] as const).map(([k, ic, t, s]) => (
                <button key={k} type="button" className={"bd-kind" + (b.kind === k ? " is-on" : "")} data-k={k} aria-pressed={b.kind === k} onClick={() => setKind(k)}>
                  <Icon name={ic} /><b>{t}</b><small>{s}</small>
                </button>
              ))}
            </div>
            <div className="bd-when">
              <div className="bd-row" id="bd-row-zi" hidden={b.kind !== "zi"}><label>Ziua<input type="date" id="bd-date" min={TODAY} value={w.date} onChange={(e) => setWf("date", e.target.value)} /></label></div>
              <div className="bd-row" id="bd-row-appt" hidden={!isAppt}>
                <label>Ora<select id="bd-hour" value={w.hour} onChange={(e) => setWf("hour", e.target.value)}>{HOURS.map((t) => <option key={t} value={t}>{t}</option>)}</select></label>
                <div className="bd-field"><span className="lbl">Durată</span><div className="bd-dur" role="group" aria-label="Durată">
                  {[30, 60].map((m) => <button key={m} type="button" data-m={m} aria-pressed={(b.dur || 30) === m} onClick={() => setB((x) => ({ ...x, dur: m }))}>{m + " min"}</button>)}
                </div></div>
              </div>
              <div className="bd-row" id="bd-row-interval" hidden={b.kind !== "interval" || isAppt}>
                <label>De la<input type="date" id="bd-date-a" min={TODAY} value={w.dateA} onChange={(e) => setWf("dateA", e.target.value)} /></label>
                <label>Până la<input type="date" id="bd-date-b" min={TODAY} value={w.dateB} onChange={(e) => setWf("dateB", e.target.value)} /></label>
              </div>
              <div className="bd-row" id="bd-row-recurent" hidden={b.kind !== "recurent" || isAppt}>
                <div className="bd-days" role="group" aria-label="Ziua săptămânii">
                  {WEEKDAYS.map(([d, l]) => <button key={d} type="button" data-d={d} className={b.weekday === d ? "is-on" : undefined} aria-pressed={b.weekday === d} onClick={() => setB((x) => ({ ...x, weekday: d }))}>{l}</button>)}
                </div>
                <label>Începând cu<input type="date" id="bd-rec-from" min={TODAY} value={w.recFrom} onChange={(e) => setWf("recFrom", e.target.value)} /></label>
                <label>Până la <span className="opt">(opțional)</span><input type="date" id="bd-rec-to" min={TODAY} value={w.recTo} onChange={(e) => setWf("recTo", e.target.value)} /></label>
              </div>
              <div className="bd-row bd-allday" hidden={isAppt}>
                <label className="switch-row"><span className="switch"><input type="checkbox" id="bd-allday" checked={w.allday} onChange={(e) => setWf("allday", e.target.checked)} /><span></span></span><span>Toată ziua (08:00–20:00)</span></label>
              </div>
              <div className="bd-row" id="bd-row-hours" hidden={isAppt || w.allday}>
                <label>De la<select id="bd-from" value={w.from} onChange={(e) => setWf("from", e.target.value)}>{FROM_OPTS.map((t) => <option key={t} value={t}>{t}</option>)}</select></label>
                <label>Până la<select id="bd-to" value={w.to} onChange={(e) => setWf("to", e.target.value)}>{TO_OPTS.map((t) => <option key={t} value={t}>{t}</option>)}</select></label>
              </div>
              <p className="bd-err" id="bd-err" role="alert" hidden={!bdErr}>{bdErr}</p>
            </div>
          </section>

          <section className="bd-pane" id="bd-3" aria-labelledby="bd-h3" hidden={step !== 3}>
            <h3 id="bd-h3" className="bd-h">Motivul</h3>
            <p className="bd-sub" id="bd-sub3">{isAppt ? "Pacientul este pus direct în agenda medicului, cu statusul „confirmată”." : "Se vede doar în acest panou. Pacienții văd doar că medicul nu consultă."}</p>
            <div className="bd-reasons" id="bd-reasons" role="radiogroup" aria-label="Motiv">
              <button type="button" className={"bd-reason main" + (b.reason === "programare" ? " is-on" : "")} data-r="programare" aria-pressed={b.reason === "programare"} onClick={() => pickReason("programare")}>
                <Icon name="calendar-plus" /><span><b>Programare pacient</b><small>pacient sunat la recepție, pus direct în agenda medicului</small></span>
              </button>
              {(Object.keys(REASONS) as ReasonKey[]).map((k) => (
                <button key={k} type="button" className={"bd-reason" + (b.reason === k ? " is-on" : "")} data-r={k} aria-pressed={b.reason === k} onClick={() => pickReason(k)}>
                  <AdmIcon name={REASONS[k].icon as never} /><span>{REASONS[k].label}</span>
                </button>
              ))}
            </div>
            <label className="bd-note" id="bd-note-wrap" hidden={isAppt}>Notă internă <span className="opt">(opțional)</span><textarea id="bd-note" rows={2} placeholder="De exemplu: revine joi după-amiază." value={note} onChange={(e) => setNote(e.target.value)} /></label>
            <div className="bd-appt" id="bd-appt" hidden={!isAppt}>
              <div className="bd-row">
                <label>Medic<select id="ap-doc" value={ap.doc} onChange={(e) => setAp((p) => ({ ...p, doc: e.target.value, svc: normSvc(e.target.value, p.svc) }))}>{DOCTORS.map((d) => <option key={d.slug} value={d.slug}>{d.short}</option>)}</select></label>
                <label>Ziua<input type="date" id="ap-date" min={TODAY} value={ap.date} onChange={(e) => setApf("date", e.target.value)} /></label>
                <label>Ora<select id="ap-hour" value={ap.hour} onChange={(e) => setApf("hour", e.target.value)}>{HOURS.map((t) => <option key={t} value={t}>{t}</option>)}</select></label>
                <label>Durată<select id="ap-dur" value={ap.dur} onChange={(e) => setApf("dur", e.target.value)}><option value="30">30 min</option><option value="60">60 min</option></select></label>
              </div>
              <div className="bd-row">
                <label><span>Nume pacient <b className="req">*</b></span><input type="text" id="ap-name" autoComplete="off" value={ap.name} onChange={(e) => setApf("name", e.target.value)} /></label>
                <label><span>Telefon <b className="req">*</b></span><input type="tel" id="ap-phone" inputMode="tel" placeholder="07xx xxx xxx" value={ap.phone} onChange={(e) => setApf("phone", e.target.value)} /></label>
              </div>
              <div className="bd-row">
                <label>Serviciu<select id="ap-svc" value={ap.svc} onChange={(e) => setApf("svc", e.target.value)}>
                  {apSvcOptions(ap.doc).map((sl) => <option key={sl} value={sl}>{sl === "nu-stiu" ? "De stabilit la consultație" : svcName(sl)}</option>)}
                </select></label>
                <div className="bd-field"><span className="lbl">Tip</span><div className="bd-dur" role="radiogroup" aria-label="Tip consultație" id="ap-type">
                  <button type="button" data-v="cas" aria-pressed={ap.type === "cas"} onClick={() => setApf("type", "cas")}>CAS, cu bilet</button>
                  <button type="button" data-v="privat" aria-pressed={ap.type === "privat"} onClick={() => setApf("type", "privat")}>Privat</button>
                </div></div>
              </div>
              <div className="bd-row">
                <div className="bd-field"><span className="lbl">Canal confirmare</span><div className="bd-dur" role="radiogroup" aria-label="Canal de confirmare" id="ap-ch">
                  <button type="button" data-v="telefon" aria-pressed={ap.ch === "telefon"} onClick={() => setApf("ch", "telefon")}><Icon name="phone" />Telefon</button>
                  <button type="button" data-v="whatsapp" aria-pressed={ap.ch === "whatsapp"} onClick={() => setApf("ch", "whatsapp")}><Icon name="message-circle" />WhatsApp</button>
                  <button type="button" data-v="sms" aria-pressed={ap.ch === "sms"} onClick={() => setApf("ch", "sms")}><Icon name="smartphone" />SMS</button>
                </div></div>
              </div>
              <label className="bd-note">Notă internă <span className="opt">(opțional)</span><textarea id="ap-note" rows={2} placeholder="Doar informații de organizare (de exemplu: vine cu mama). Nu notați date medicale sau diagnostice." value={ap.note} onChange={(e) => setApf("note", e.target.value)} /></label>
              <p className="bd-gdpr"><Icon name="lock" /><span>Acordul pentru prelucrarea datelor se ia verbal la telefon și se notează în cerere. Nu cereți și nu notați diagnostice.</span></p>
              <p className="bd-err" id="ap-err" role="alert" hidden={!apErr}>{apErr}</p>
            </div>
          </section>

          <section className="bd-pane" id="bd-4" aria-labelledby="bd-h4" hidden={step !== 4}>
            <h3 id="bd-h4" className="bd-h">Confirmare</h3>
            <p className="bd-summary" id="bd-summary">{summary}</p>
            <div className="bd-conf" id="bd-conf" hidden={!hasConf}>
              <p className="note warn"><Icon name="alert-triangle" /><span id="bd-conf-txt">{confTxt}</span></p>
              <ul className="bd-conf-list" id="bd-conf-list">
                {isAppt ? (<>
                  {confBlocks.map((bl) => (
                    <li key={bl.id}><div className="tx"><b><AdmIcon name={REASONS[bl.reason as ReasonKey].icon as never} />{" Ore blocate: " + REASONS[bl.reason as ReasonKey].label}</b><small>{whenText(bl) + (bl.note ? " · " + bl.note : "")}</small></div></li>
                  ))}
                  {confReqs.map((r) => (
                    <li key={r.id}><div className="tx"><b>{r.name}</b><small>{fmtDate(r.date) + ", " + r.slot + "–" + addMin(r.slot, r.duration || 30) + " · " + STATUS[r.status] + " · " + r.phone}</small></div>
                      <div className="act"><button type="button" className="tbtn" data-open={r.id} onClick={() => { closeBlock(); openDrawer(r.id); }}><Icon name="eye" /><span>Deschide</span></button></div></li>
                  ))}
                </>) : confReqs.map((r) => (
                  <li key={r.id}><div className="tx"><b>{r.name}</b><small>{fmtDate(r.date) + ", " + r.slot + " · " + docName(r.doctor) + " · " + r.phone}</small></div>
                    <div className="act">
                      <a className="tbtn" href={waHref(r, "reprogramare", settings)} target="_blank" rel="noopener"><Icon name="message-circle" /><span>Anunță</span></a>
                      <button type="button" className="tbtn" data-open={r.id} onClick={() => { saveBlock(true); openDrawer(r.id, true); }}><Icon name="calendar-clock" /><span>Reprogramează</span></button>
                    </div></li>
                ))}
              </ul>
            </div>
            <p className="bd-ok" id="bd-ok" hidden={hasConf}><Icon name="check" />{okTxt}</p>
          </section>
        </div>
        <footer className="bd-foot">
          <button type="button" className="tbtn" id="bd-back" hidden={step === 1} onClick={() => goB(step - 1)}><Icon name="arrow-left" /><span>Înapoi</span></button>
          <button type="button" className="tbtn primary" id="bd-next" hidden={step === 4} onClick={() => goB(step + 1)}><span>Continuați</span><Icon name="arrow-right" /></button>
          <button type="button" className="tbtn primary" id="bd-save" hidden={step !== 4} onClick={() => saveBlock()}><Icon name="calendar-off" /><span>{isAppt ? "Confirmați programarea" : "Blocați orele"}</span></button>
        </footer>
      </aside>
    </>
  );
}
