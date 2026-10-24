import { routes } from "@/lib/routes";
import { BASE_URL } from "@/lib/site";
import { isDemo } from "@/lib/site-mode";

export const dynamic = "force-static";

/** Port of the llms.txt generation in build.py; grouped by first path segment. */
export function GET() {
  if (isDemo) return new Response("Not found", { status: 404 }); // demo: not published
  const out: string[] = [
    "# Clinica Dr. Iova",
    "",
    "> Clinică privată din Oradea: psihiatrie pentru adulți și copii, neurologie, psihologie clinică, psihoterapie și logopedie. " +
      "Contract cu CAS Bihor. Str. Ceyrat nr. 31, bl. WR12, Oradea. Telefon 0359 450 657. Luni–vineri 08:00–20:00.",
    "",
  ];
  const groups = new Map<string, string[]>();
  for (const r of routes) {
    if (r.noindex) continue;
    const key = r.path.replace(/^\/|\/$/g, "").split("/")[0] || "acasa";
    const list = groups.get(key) ?? [];
    list.push(`- [${r.title}](${BASE_URL}${r.path}): ${r.description}`);
    groups.set(key, list);
  }
  for (const [k, lines] of groups) {
    out.push(`## ${k.charAt(0).toUpperCase() + k.slice(1)}`, ...lines, "");
  }
  return new Response(out.join("\n"), { headers: { "content-type": "text/plain; charset=utf-8" } });
}
