import { isDemo } from "@/lib/site-mode";

/** Client-data placeholder ("de cerut de la client ..."). Visible in full mode, removed in demo (build_demo.py `.todo`). */
export default function Todo({ children }: { children: React.ReactNode }) {
  if (isDemo) return null;
  return <span className="todo">{children}</span>;
}
