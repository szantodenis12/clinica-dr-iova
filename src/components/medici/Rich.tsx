import { Fragment } from "react";
import type { Rich as RichT } from "@/data/medici";

/** Renders a Rich value from src/data/medici.ts (plain text, <b>, and "de cerut de la client" todo spans). */
export default function Rich({ value }: { value: RichT }) {
  if (typeof value === "string") return <>{value}</>;
  return (
    <>
      {value.map((p, i) =>
        typeof p === "string" ? (
          <Fragment key={i}>{p}</Fragment>
        ) : "b" in p ? (
          <b key={i}>{p.b}</b>
        ) : (
          <span key={i} className="todo">
            de cerut de la client (fișa medicului): {p.todo}
          </span>
        ),
      )}
    </>
  );
}
