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
    const step = t.firstElementChild.getBoundingClientRect().width + 14;
    t.scrollBy({ left: dir * step, behavior: "smooth" });
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
