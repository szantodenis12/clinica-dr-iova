"use client";
/* eslint-disable react-hooks/set-state-in-effect -- client-only init / mount animations that must run after first paint */
import { useEffect, useState, type CSSProperties } from "react";
import {
  DAYS_SHORT, DOCTORS, addDays, docName, fmtDate, fmtLong, fmtTime, getToday, iso, mondayOf, svcName,
} from "@/data/admin";
import { useAdmin, reducedMotion } from "./context";
import Badge from "./Badge";

const sv = (o: Record<string, string | number>) => o as CSSProperties;

function CountUp({ end }: { end: number }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (reducedMotion() || !end) { setVal(end); return; }
    const t0 = performance.now(), dur = 900;
    let raf = 0;
    const f = (t: number) => {
      const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3);
      setVal(Math.round(end * e));
      if (k < 1) raf = requestAnimationFrame(f);
    };
    raf = requestAnimationFrame(f);
    return () => cancelAnimationFrame(raf);
  }, [end]);
  return <b data-count={end}>{val}</b>;
}

export default function PanouView({ onKpi }: { onKpi: (status: string) => void }) {
  const { reqs: all, settings: S, openDrawer } = useAdmin();
  const today = getToday(), TODAY = iso(today);
  const [grown, setGrown] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setGrown(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const c = (s: string) => all.filter((r) => r.status === s).length;
  const newToday = all.filter((r) => r.createdAt.slice(0, 10) === TODAY).length;
  const kpis: [string, string, number, string, string][] = [
    ["k-noua", "Cereri noi", c("noua"), newToday + " primite azi", "noua"],
    ["k-conf", "Confirmate", c("confirmata"), "programări ferme", "confirmata"],
    ["k-re", "Reprogramate", c("reprogramata"), "de contactat din nou", "reprogramata"],
    ["k-an", "Anulate", c("anulata"), "în ultimele 30 de zile", "anulata"],
  ];

  const tl = all.filter((r) => r.date === TODAY && r.status !== "anulata").sort((a, b) => (a.slot < b.slot ? -1 : 1));
  const nl = all.filter((r) => r.status === "noua").sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1)).slice(0, 6);

  const days: [Date, number][] = [];
  let max = 1;
  for (let i = 0; i < 7; i++) {
    const d = addDays(today, i), is = iso(d), n = all.filter((r) => r.date === is && r.status !== "anulata").length;
    max = Math.max(max, n); days.push([d, n]);
  }
  const mon = mondayOf(today), fri = addDays(mon, 4);
  const wknd = today.getDay() === 0 || today.getDay() === 6;

  return (
    <section className="view" id="view-panou">
      <div className="kpis" id="kpis">
        {kpis.map((k, i) => (
          <div key={k[4]} className={"kpi " + k[0]} role="link" tabIndex={0} data-status={k[4]} style={sv({ "--i": i })}
            onClick={() => onKpi(k[4])} onKeyDown={(e) => { if (e.key === "Enter") onKpi(k[4]); }}>
            <span>{k[1]}</span><CountUp end={k[2]} /><small>{k[3]}</small>
          </div>
        ))}
      </div>
      <div className="panou-grid">
        <div className="card">
          <div className="card-head"><h2>Programări pentru azi</h2><span id="today-date" className="sub">{fmtLong(TODAY)}</span></div>
          <ul className="list" id="today-list">
            {tl.length ? tl.map((r) => (
              <li key={r.id} data-id={r.id} onClick={() => openDrawer(r.id)}>
                <span className="t">{r.slot}</span>
                <span className="n"><b>{r.name}</b><small>{svcName(r.service) + " · " + docName(r.doctor) + " · " + (r.type === "cas" ? "CAS" : "privat")}</small></span>
                <Badge st={r.status} />
              </li>
            )) : <li className="empty-li">Nicio programare pentru azi{wknd ? " (weekend, clinica este închisă)" : ""}.</li>}
          </ul>
        </div>
        <div className="card">
          <div className="card-head"><h2>Cereri noi, de sunat</h2><a href="#/cereri?status=noua" className="link">Toate</a></div>
          <ul className="list" id="new-list">
            {nl.length ? nl.map((r) => (
              <li key={r.id} data-id={r.id} onClick={() => openDrawer(r.id)}>
                <span className="t">{fmtTime(r.createdAt).slice(6)}</span>
                <span className="n"><b>{r.name}</b><small>{fmtDate(r.date) + ", " + r.slot + " · " + docName(r.doctor) + " · " + (r.channel === "whatsapp" ? "preferă WhatsApp" : r.channel === "email" ? "preferă e-mail" : "preferă telefon")}</small></span>
                <Badge st={r.status} />
              </li>
            )) : <li className="empty-li">Nicio cerere nouă. Toate au fost preluate.</li>}
          </ul>
        </div>
        <div className="card">
          <div className="card-head"><h2>Următoarele 7 zile</h2><span className="sub">cereri pe zi</span></div>
          <div className="bars" id="bars">
            {days.map((x, i) => {
              const wk = x[0].getDay() === 0 || x[0].getDay() === 6;
              const h = Math.max(6, x[1] / max * 100);
              return (
                <div key={i} className={"bar" + (wk ? " is-wknd" : "")}>
                  <b>{x[1]}</b><i style={sv({ "--i": i, ...(grown ? { height: h + "%" } : {}) })} data-h={h} /><span>{DAYS_SHORT[x[0].getDay()] + " " + x[0].getDate()}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="card">
          <div className="card-head"><h2>Locuri CAS, săptămâna aceasta</h2><span className="sub">folosite / setate</span></div>
          <ul className="caslist" id="cas-list">
            {DOCTORS.map((d) => {
              const used = all.filter((r) => r.doctor === d.slug && r.type === "cas" && r.status !== "anulata" && r.date >= iso(mon) && r.date <= iso(fri)).length;
              const set = S.casSlots[d.slug] || 0;
              const w = set ? Math.min(100, used / set * 100) : 0;
              return (
                <li key={d.slug}><span>{d.short}</span><b>{used + " / " + set}</b><span className="track"><i data-w={w} style={grown ? { width: w + "%" } : undefined} /></span></li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
