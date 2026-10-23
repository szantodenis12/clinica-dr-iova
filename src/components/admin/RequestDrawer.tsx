"use client";
import { useEffect, useRef, useState } from "react";
import Icon from "@/components/Icon";
import {
  STATUS, doctor, fmtDate, fmtLong, fmtTime, fromIso, getToday, iso, pad, svcName, waHref, whoLabel, type Req, type Status,
} from "@/data/admin";
import { useAdmin } from "./context";
import { useSlide } from "./useSlide";

type DrawerState = { id: string | null; open: boolean; ver: number; resched: boolean };

const SBTN: [Status, "check" | "calendar-clock" | "ban" | "rotate-ccw", string][] = [
  ["confirmata", "check", "Confirmată"],
  ["reprogramata", "calendar-clock", "Reprogramată"],
  ["anulata", "ban", "Anulată"],
  ["noua", "rotate-ccw", "Înapoi la nouă"],
];

export default function RequestDrawer({ drawer }: { drawer: DrawerState }) {
  const { reqs, settings, closeDrawer } = useAdmin();
  const { shown, on } = useSlide(drawer.open);
  const r = reqs.find((x) => x.id === drawer.id);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!drawer.open) return;
    const t = setTimeout(() => closeRef.current?.focus(), 80);
    return () => clearTimeout(t);
  }, [drawer.open, drawer.ver]);

  const doc = r ? doctor(r.doctor) : undefined;
  const prefer = r ? (r.channel === "whatsapp" ? "WhatsApp" : r.channel === "email" ? "e-mail" : "telefon") : "";
  const waKey = r ? (r.status === "reprogramata" ? "reprogramare" : r.status === "confirmata" ? "reminder" : "confirmare") : "confirmare";

  return (
    <>
      <div className={"drawer-bg" + (on ? " is-open" : "")} id="drawer-bg" hidden={!shown} onClick={closeDrawer}></div>
      <aside className={"drawer" + (on ? " is-open" : "")} id="drawer" role="dialog" aria-modal="true" aria-labelledby="dr-title" hidden={!shown}>
        <header className="dr-head">
          <div>
            <span className="dr-ref" id="dr-ref">{r ? r.ref + " · trimisă " + fmtTime(r.createdAt) : ""}</span>
            <h2 id="dr-title">{r ? r.name : ""}</h2>
            <span className={"badge" + (r ? " s-" + r.status : "")} id="dr-status">{r ? STATUS[r.status] : ""}</span>
          </div>
          <button type="button" className="tbtn icon" id="dr-close" aria-label="Închideți" ref={closeRef} onClick={closeDrawer}><Icon name="x" /></button>
        </header>
        <div className="dr-body">
          <div className="dr-actions">
            <a className="tbtn" id="dr-call" href={r ? "tel:" + r.phone.replace(/\s/g, "") : "#"}><Icon name="phone" /><span>Sunați</span></a>
            <a className="tbtn" id="dr-wa" href={r ? waHref(r, waKey, settings) : "#"} target="_blank" rel="noopener"><Icon name="message-circle" /><span>WhatsApp</span></a>
            <a className={"tbtn" + (r && !r.email ? " is-off" : "")} id="dr-mail" style={r && !r.email ? { opacity: ".45" } : undefined}
              href={r ? "mailto:" + (r.email || "") + "?subject=" + encodeURIComponent("Programare " + r.ref + " la Clinica Dr. Iova") : "#"}><Icon name="mail" /><span>E-mail</span></a>
          </div>
          {r && (
            <dl className="dr-dl" id="dr-dl">
              <dt>Telefon</dt><dd>{r.phone}<small>{"preferă " + prefer}</small></dd>
              <dt>E-mail</dt><dd>{r.email ? r.email : <small>nu a lăsat</small>}</dd>
              <dt>Pentru</dt><dd>{whoLabel(r)}</dd>
              <dt>Serviciu</dt><dd>{svcName(r.service)}</dd>
              <dt>Medic</dt><dd>{doc ? <>{doc.name}<small>{doc.role}</small></> : <>Primul medic disponibil<small>de alocat de recepție</small></>}</dd>
              <dt>Tip</dt><dd>{r.type === "cas" ? <>Prin CAS<small>cu bilet de trimitere, de verificat la confirmare</small></> : <>Privat<small>tarif: de comunicat la confirmare</small></>}</dd>
              <dt>Interval preferat</dt><dd>{fmtLong(r.date) + ", " + r.slot}</dd>
              <dt>Observații</dt><dd>{r.notes ? r.notes : <small>nu a scris</small>}</dd>
              <dt>Sursă</dt><dd>{r.source === "receptie" ? <>Recepție (telefon)<small>{"introdusă de " + (r.sourceBy || "recepție")}</small></> : "Formular site"}</dd>
              <dt>Acorduri GDPR</dt><dd>{(r.source === "receptie" ? "Acord verbal la telefon (programare + art. 9)" : "Prelucrare programare + art. 9 (sănătate)")}<small>{fmtTime(r.consentAt || r.createdAt)}</small></dd>
            </dl>
          )}
          {r && <DrawerBody key={drawer.ver} r={r} startResched={drawer.resched} />}
        </div>
      </aside>
    </>
  );
}

function DrawerBody({ r, startResched }: { r: Req; startResched: boolean }) {
  const { updateRequest, openDrawer, toast } = useAdmin();
  const TODAY = iso(getToday());
  const [resched, setResched] = useState(startResched);
  const [rsDate, setRsDate] = useState(r.date);
  const [rsSlot, setRsSlot] = useState(r.slot);
  const [note, setNote] = useState(r.internalNote || "");
  const dateRef = useRef<HTMLInputElement>(null);

  const slots: string[] = [];
  for (let h = 8; h < 20; h++) for (let m = 0; m < 60; m += 30) slots.push(pad(h) + ":" + pad(m));

  const setStatus = (s: Status) => {
    if (s === "reprogramata") { setResched(true); setRsDate(r.date); setRsSlot(r.slot); setTimeout(() => dateRef.current?.focus(), 0); return; }
    updateRequest(r.id, (x) => { if (x.status !== s) { x.status = s; x.history.push({ at: new Date().toISOString(), text: "Status: " + STATUS[s] + " (recepție)" }); } });
    toast("Cererea a fost marcată: " + STATUS[s] + ".", s === "anulata" ? "ban" : "check");
    openDrawer(r.id);
  };
  const saveResched = () => {
    const d = rsDate, t = rsSlot;
    if (!d) return;
    const dow = fromIso(d).getDay();
    if (dow === 0 || dow === 6) { toast("Clinica este închisă în weekend. Alegeți o zi de luni până vineri.", "alert-triangle"); return; }
    updateRequest(r.id, (x) => {
      x.history.push({ at: new Date().toISOString(), text: "Reprogramată: " + fmtDate(x.date) + " " + x.slot + " → " + fmtDate(d) + " " + t });
      x.date = d; x.slot = t; x.status = "reprogramata";
    });
    toast("Reprogramată pentru " + fmtDate(d) + ", " + t + ". Trimiteți pacientului mesajul de reprogramare.", "calendar-clock");
    openDrawer(r.id);
  };
  const saveNote = () => {
    const v = note.trim();
    updateRequest(r.id, (x) => { if (x.internalNote !== v) { x.internalNote = v; x.history.push({ at: new Date().toISOString(), text: "Notă internă actualizată" }); } });
    toast("Nota a fost salvată.");
    openDrawer(r.id);
  };

  return (
    <>
      <div className="dr-sec">
        <h3>Status</h3>
        <div className="status-btns">
          {SBTN.map(([s, ic, label]) => (
            <button key={s} type="button" className={"sbtn s-" + s + (r.status === s ? " is-on" : "")} data-s={s} onClick={() => setStatus(s)}><Icon name={ic} />{label}</button>
          ))}
        </div>
        <div className="resched" id="resched" hidden={!resched}>
          <label>Dată nouă<input type="date" id="rs-date" ref={dateRef} min={TODAY} value={rsDate} onChange={(e) => setRsDate(e.target.value)} /></label>
          <label>Ora<select id="rs-slot" value={rsSlot} onChange={(e) => setRsSlot(e.target.value)}>{slots.map((t) => <option key={t} value={t}>{t}</option>)}</select></label>
          <button type="button" className="tbtn primary" id="rs-save" onClick={saveResched}>Salvați</button>
        </div>
      </div>
      <div className="dr-sec">
        <h3>Notă internă</h3>
        <textarea id="dr-note" rows={3} placeholder="Doar informații de organizare (de exemplu: a cerut interval de dimineață). Nu notați date medicale." value={note} onChange={(e) => setNote(e.target.value)} />
        <button type="button" className="tbtn" id="dr-note-save" onClick={saveNote}><Icon name="save" /><span>Salvați nota</span></button>
      </div>
      <div className="dr-sec">
        <h3>Istoric</h3>
        <ul className="hist" id="dr-hist">
          {(r.history || []).slice().reverse().map((h, i) => <li key={i}><small>{fmtTime(h.at)}</small><span>{h.text}</span></li>)}
        </ul>
      </div>
    </>
  );
}
