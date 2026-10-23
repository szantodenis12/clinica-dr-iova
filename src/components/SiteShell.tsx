"use client";

import { usePathname } from "next/navigation";
import { bodyClassFor } from "@/lib/body-class";

/**
 * Wrapper div that replaces <body class="{{body_class}}">. Class comes from lib/body-class.ts
 * (derived from pathname, so SSR HTML already has the right class). `.site` is always present.
 * Rendered once in the root layout around nav / main / footer / widgets.
 */
export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return <div className={`site ${bodyClassFor(pathname)}`}>{children}</div>;
}
