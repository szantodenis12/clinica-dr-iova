"use client";

import Icon from "./Icon";

/**
 * Carousel arrow buttons: same markup as `<div class="arrows" data-for="trackId">`.
 * Scrolls the element with id=`forId` by one child width (+14px gap) with smooth behaviour.
 * Usage: <Arrows forId="t1" />  or  <Arrows forId="t3" small />  (small => class "arrows sm")
 */
export default function Arrows({ forId, small }: { forId: string; small?: boolean }) {
  const go = (dir: 1 | -1) => {
    const t = document.getElementById(forId);
    if (!t || !t.firstElementChild) return;
    // layout px (offsetWidth), not getBoundingClientRect: under the html `zoom` (>=1400px) rects are scaled
    // while scrollLeft is not, which made one click overshoot a card
    const gap = parseFloat(getComputedStyle(t).columnGap) || 14;
    const step = (t.firstElementChild as HTMLElement).offsetWidth + gap;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    t.scrollBy({ left: dir * step, behavior: reduce ? "auto" : "smooth" });
  };
  return (
    <div className={`arrows${small ? " sm" : ""}`} data-for={forId}>
      <button aria-label="Înapoi" onClick={() => go(-1)}>
        <Icon name="chevron-left" />
      </button>
      <button aria-label="Înainte" onClick={() => go(1)}>
        <Icon name="chevron-right" />
      </button>
    </div>
  );
}
