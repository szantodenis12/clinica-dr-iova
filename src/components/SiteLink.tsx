import Link from "next/link";
import type { AnchorHTMLAttributes, ComponentProps } from "react";
import { isDemo, demoAllows } from "@/lib/site-mode";

type Props = Omit<ComponentProps<typeof Link>, "href"> & { href: string };

/**
 * <Link> that follows the demo rules of build_demo.py:
 *  - full mode, or the target is a kept page / anchor / external: a normal <Link>;
 *  - demo + removed target: a button (`.btn`) renders nothing; anything else (cards, pills, inline links)
 *    keeps its look but is inert: no href, class `demo-off`, tabindex -1.
 * Menu/footer `li` items are NOT handled here: filter them with linkAllowed() before rendering the `li`.
 */
export default function SiteLink({ href, className, children, ...rest }: Props) {
  if (!isDemo || demoAllows(href)) {
    return (
      <Link href={href} className={className} {...rest}>
        {children}
      </Link>
    );
  }
  if (/(^|\s)btn(\s|$)/.test(className ?? "")) return null;
  // forward everything except the next/link-only props (data-*, aria-*, style, id ... stay)
  const attrs: Record<string, unknown> = { ...rest };
  for (const k of ["prefetch", "replace", "scroll", "onNavigate"]) delete attrs[k];
  return (
    <a {...(attrs as AnchorHTMLAttributes<HTMLAnchorElement>)} className={`${className ? className + " " : ""}demo-off`} tabIndex={-1}>
      {children}
    </a>
  );
}
