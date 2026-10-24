import { Fragment } from "react";
import type { Rich as RichT } from "@/data/medici";
import Todo from "@/components/Todo";
import { isDemo } from "@/lib/site-mode";

/** Renders a Rich value from src/data/medici.ts (plain text, <b>, and "de cerut de la client" todo spans). */
export default function Rich({ value }: { value: RichT }) {
  if (typeof value === "string") return <>{value}</>;
  // demo: placeholders are dropped, and a separator " ·" left dangling before one is trimmed (as in build_demo.py)
  const parts = isDemo
    ? value.flatMap((p, i) => {
        if (typeof p !== "string" && "todo" in p) return [];
        const next = value[i + 1];
        const beforeTodo = next !== undefined && typeof next !== "string" && "todo" in next;
        return [beforeTodo && typeof p === "string" && p.trimEnd().endsWith("·") ? p.trimEnd().slice(0, -1).trimEnd() : p];
      })
    : value;
  return (
    <>
      {parts.map((p, i) =>
        typeof p === "string" ? (
          <Fragment key={i}>{p}</Fragment>
        ) : "b" in p ? (
          <b key={i}>{p.b}</b>
        ) : (
          <Todo key={i}>de cerut de la client (fișa medicului): {p.todo}</Todo>
        ),
      )}
    </>
  );
}
