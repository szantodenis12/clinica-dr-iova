"use client";
import { Fragment, useCallback, useEffect, useRef, useState, type Dispatch, type SetStateAction } from "react";
import Icon from "@/components/Icon";
import {
  DAYS, DAYS_SHORT, DOCTORS, MONTHS, REASONS, addDays, blockFor, docName, fmtDate, fromIso, getToday, iso, mondayOf, pad,
  stamp, type Block, type ReasonKey,
} from "@/data/admin";
import AdmIcon from "./AdmIcon";
import { useAdmin } from "./context";

type Pre = Partial<Block>;
type Pop = { key: string; col: number; h: number; pre: Pre; at: number };
type Drag = { col: string; d: string; h0: number; h1: number } | { done: true } | null;

export default function CalendarView({ week, setWeek, wkDoc, setWkDoc }: { week: Date; setWeek: Dispatch<SetStateAction<Date | null>>; wkDoc: string; setWkDoc: (s: string) => void }) {
  const { reqs, blocks, openDrawer, openBlock } = useAdmin();
  const today = getToday(), TODAY = iso(today);
  const mon = week, fri = addDays(mon, 4);

  const [pop, setPop] = useState<Pop | null>(null);
  const [sel, setSel] = useState<{ col: string; lo: number; hi: number } | null>(null);
  const popRef = useRef<Pop | null>(null);
  const drag = useRef<Drag>(null);
  useEffect(() => { popRef.current = pop; }, [pop]);

  const pre0 = useCallback((date: string, from: string, to: string): Pre => ({ doctors: wkDoc === "all" ? [] : [wkDoc], kind: "zi", date, from, to }), [wkDoc]);
  const showPop = useCallback((col: number, h: number, pre: Pre) => {
    setPop({ key: col + "-" + h, col, h, pre, at: stamp() });
  }, [setPop]);
  const closePop = useCallback(() => setPop(null), [setPop]);

  // document-level: outside click / Escape close the popover; mouseup finishes a drag selection
  const wkDocRef = useRef(wkDoc);
  useEffect(() => { wkDocRef.current = wkDoc; }, [wkDoc]);
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const p = popRef.current;
      if (p && stamp() - p.at > 150 && !(e.target as Element).closest(".cell-pop")) setPop(null);
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setPop(null); };
    const onUp = () => {
      const dr = drag.current;
      if (!dr || "done" in dr) return;
      const lo = Math.min(dr.h0, dr.h1), hi = Math.max(dr.h0, dr.h1);
      drag.current = null; setSel(null);
      if (hi > lo) {
        const wd = wkDocRef.current;
        showPop(+dr.col, lo, { doctors: wd === "all" ? [] : [wd], kind: "zi", date: dr.d, from: pad(lo) + ":00", to: pad(hi + 1) + ":00" });
        drag.current = { done: true };
        setTimeout(() => { drag.current = null; }, 50);
      }
    };
    document.addEventListener("click", onClick); document.addEventListener("keydown", onKey); document.addEventListener("mouseup", onUp);
    return () => { document.removeEventListener("click", onClick); document.removeEventListener("keydown", onKey); document.removeEventListener("mouseup", onUp); };
  }, [showPop]);

  const go = (w: Date) => { setPop(null); setWeek(w); };

  const title = mon.getDate() + (mon.getMonth() === fri.getMonth() ? "" : " " + MONTHS[mon.getMonth()]) + " – " + fri.getDate() + " " + MONTHS[fri.getMonth()] + " " + fri.getFullYear();
  const all = reqs.filter((r) => r.status !== "anulata" && (wkDoc === "all" || r.doctor === wkDoc));
  const docs = wkDoc === "all" ? DOCTORS : DOCTORS.filter((x) => x.slug === wkDoc);

  const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

  const cells: React.ReactNode[] = [];
  for (let h = 8; h < 20; h++) {
    cells.push(<div key={"h" + h} className="hour">{pad(h) + ":00"}</div>);
    for (let dd = 0; dd < 5; dd++) {
      const is = iso(addDays(mon, dd)), t = pad(h) + ":00", t2 = pad(h) + ":30";
      const evs = all.filter((r) => r.date === is && +r.slot.slice(0, 2) === h).sort((a, b) => (a.slot < b.slot ? -1 : 1));
      let blk: React.ReactNode = null, cls = "";
      if (wkDoc !== "all") {
        const b0 = blockFor(wkDoc, is, t, blocks), b1 = blockFor(wkDoc, is, t2, blocks), bb = b0 || b1;
        if (bb) {
          cls = (b0 && b1) ? " is-blocked" : " is-blocked half" + (b0 ? " first" : " second");
          const prev = h > 8 && blockFor(wkDoc, is, pad(h - 1) + ":30", blocks) === bb;
          const R = REASONS[bb.reason as ReasonKey];
          blk = (
            <button type="button" className="blk" data-blk={bb.id} title={R.label + (bb.note ? ": " + bb.note : "")}
              onClick={(e) => { e.stopPropagation(); const x = blocks.find((y) => y.id === bb.id); if (x) openBlock(x); }}>
              <AdmIcon name={R.icon as never} />{prev ? "" : <span>{R.label}</span>}
            </button>
          );
        }
      } else {
        const bl = docs.filter((x) => blockFor(x.slug, is, t, blocks) || blockFor(x.slug, is, t2, blocks));
        if (bl.length === docs.length) cls = " is-blocked";
        blk = (<>
          {bl.slice(0, 2).map((x) => {
            const bb = (blockFor(x.slug, is, t, blocks) || blockFor(x.slug, is, t2, blocks)) as Block;
            const R = REASONS[bb.reason as ReasonKey];
            return (
              <button key={x.slug} type="button" className="blk mini" data-blk={bb.id} title={x.short + ": " + R.label}
                onClick={(e) => { e.stopPropagation(); const y = blocks.find((z) => z.id === bb.id); if (y) openBlock(y); }}>
                <AdmIcon name={R.icon as never} /><span>{x.short.replace(/^(Dr\.|Psih\.) /, "")}</span>
              </button>
            );
          })}
          {bl.length > 2 && <span className="blk more">{"+" + (bl.length - 2)}</span>}
        </>);
      }
      const key = dd + "-" + h;
      const isSel = !!sel && sel.col === String(dd) && h >= sel.lo && h <= sel.hi;
      cells.push(
        <div key={key} className={"cell" + (is === TODAY ? " is-today" : "") + cls + (isSel ? " is-sel" : "")} data-d={is} data-h={h} data-col={dd}
          onMouseDown={(e) => {
            if (e.button !== 0 || (e.target as Element).closest(".ev,.blk")) return;
            drag.current = { col: String(dd), d: is, h0: h, h1: h }; setSel({ col: String(dd), lo: h, hi: h }); e.preventDefault();
          }}
          onMouseEnter={() => {
            const dr = drag.current;
            if (dr && !("done" in dr) && dr.col === String(dd)) { dr.h1 = h; setSel({ col: dr.col, lo: Math.min(dr.h0, dr.h1), hi: Math.max(dr.h0, dr.h1) }); }
          }}
          onClick={(e) => {
            if ((e.target as Element).closest(".ev,.blk,.cell-pop")) return;
            const dr = drag.current;
            if (dr && "done" in dr) { drag.current = null; return; }
            showPop(dd, h, pre0(is, pad(h) + ":00", pad(h + 1) + ":00"));
          }}>
          {blk}
          {evs.map((r) => (
            <button key={r.id} type="button" className={"ev s-" + r.status} data-id={r.id} onClick={(e) => { e.stopPropagation(); openDrawer(r.id); }}>
              <b>{r.slot + " " + r.name}</b><small>{(wkDoc === "all" ? docName(r.doctor) + " · " : "") + (r.type === "cas" ? "CAS" : "privat")}</small>
            </button>
          ))}
          {pop && pop.key === key && <CellPop pop={pop} onAppt={() => { const p = pop.pre; closePop(); openBlock({ ...p, reason: "programare", to: null, dur: 30 }); }} onBlock={() => { const p = pop.pre; closePop(); openBlock(p); }} />}
        </div>
      );
    }
  }

  return (
    <section className="view" id="view-calendar">
      <div className="filters">
        <button type="button" className="tbtn" id="wk-prev" aria-label="Săptămâna anterioară" onClick={() => go(addDays(week, -7))}><Icon name="chevron-left" /></button>
        <strong id="wk-title" className="wk-title">{title}</strong>
        <button type="button" className="tbtn" id="wk-next" aria-label="Săptămâna următoare" onClick={() => go(addDays(week, 7))}><Icon name="chevron-right" /></button>
        <button type="button" className="tbtn" id="wk-today" onClick={() => go(mondayOf(today))}>Azi</button>
        <label>Medic<select id="wk-doc" value={wkDoc} onChange={(e) => { setPop(null); setWkDoc(e.target.value); }}><option value="all">Toți medicii</option>{DOCTORS.map((d) => <option key={d.slug} value={d.slug}>{d.short}</option>)}</select></label>
        <button type="button" className="tbtn primary" id="wk-appt" onClick={() => openBlock({ reason: "programare", doctors: wkDoc === "all" ? [] : [wkDoc] })}><Icon name="calendar-plus" /><span>Programare pacient</span></button>
        <button type="button" className="tbtn" id="wk-block" onClick={() => openBlock({ doctors: wkDoc === "all" ? [] : [wkDoc] })}><Icon name="calendar-off" /><span>Blochează ore</span></button>
        <span className="legend"><i className="s-noua"></i>nouă <i className="s-confirmata"></i>confirmată <i className="s-reprogramata"></i>reprogramată <i className="s-blk"></i>ore blocate</span>
      </div>
      <p className="hint" id="wk-hint"><Icon name="info" />Apăsați pe o oră liberă (sau trageți peste mai multe ore): puteți programa un pacient sau bloca intervalul pentru medicul selectat.</p>
      <div className="week" id="week">
        <div className="corner"></div>
        {[0, 1, 2, 3, 4].map((d) => {
          const dt = addDays(mon, d);
          return (
            <div key={d} className={"hd" + (iso(dt) === TODAY ? " is-today" : "")}>{cap(DAYS[dt.getDay()])}<small>{dt.getDate() + " " + MONTHS[dt.getMonth()].slice(0, 3)}</small></div>
          );
        })}
        {cells.map((c, i) => <Fragment key={i}>{c}</Fragment>)}
      </div>
    </section>
  );
}

function CellPop({ pop, onAppt, onBlock }: { pop: Pop; onAppt: () => void; onBlock: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const t = setTimeout(() => ref.current?.querySelector("button")?.focus(), 30);
    return () => clearTimeout(t);
  }, []);
  const p = pop.pre;
  return (
    <div ref={ref} className={"cell-pop" + (pop.col >= 3 ? " right" : "") + (pop.h >= 17 ? " up" : "")} role="menu">
      <small>{DAYS_SHORT[fromIso(p.date as string).getDay()] + " " + fmtDate(p.date as string) + ", " + p.from + "–" + p.to}</small>
      <button type="button" role="menuitem" data-act="appt" onClick={(e) => { e.stopPropagation(); onAppt(); }}><Icon name="calendar-plus" />Programează pacient</button>
      <button type="button" role="menuitem" data-act="block" onClick={(e) => { e.stopPropagation(); onBlock(); }}><Icon name="calendar-off" />Blochează ore</button>
    </div>
  );
}
