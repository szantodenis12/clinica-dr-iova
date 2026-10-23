import Link from "next/link";
import Icon, { type IconName } from "@/components/Icon";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { articleCards, relCards, type Service } from "@/data/servicii";
import { contentBySlug } from "@/content/servicii";
import FallbackImg from "./FallbackImg";

const TEL = "0359 450 657";
const TEL_HREF = "tel:+40359450657";

export default function ServiceTemplate({ s }: { s: Service }) {
  const h = s.header;
  const { Body, kf } = contentBySlug[s.slug];
  const { src, alt, fallback, ...heroRest } = h.hero;
  return (
    <>
      <Breadcrumbs items={s.breadcrumb} />
      {s.schema.map((d, i) => (
        <JsonLd key={i} data={d} />
      ))}

      <header className="phead phead-serv">
        <div className="phead-grid">
          <div>
            <div className="kicker" data-reveal="fade">
              {h.kicker}
            </div>
            <h1 data-reveal="">{h.h1}</h1>
            <p className="intro" data-reveal="">
              {h.intro}
            </p>
            <div className="phead-ctas" data-reveal="">
              <Link className="btn btn-dark" href="/programare/">
                <Icon name="calendar" />
                Programare
              </Link>
              <a className="btn btn-line" href={TEL_HREF}>
                <Icon name="phone" />
                {TEL}
              </a>
            </div>
            <ul className="phead-facts" data-stagger="fade">
              {h.facts.map(([icon, text], i) => (
                <li key={i}>
                  <Icon name={icon as IconName} />
                  {text}
                </li>
              ))}
            </ul>
          </div>
          <figure className="phead-media img-zoom" data-reveal="mask">
            <FallbackImg src={src} alt={alt} fallback={fallback} {...heroRest} />
            <figcaption>{h.caption}</figcaption>
          </figure>
        </div>
      </header>

      <div className="wrap serv-layout">
        <aside className="toc" data-reveal="fade">
          <div className="lbl">Pe această pagină</div>
          <ol>
            {s.toc.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`}>{label}</a>
              </li>
            ))}
          </ol>
          <div className="toc-cta">
            <b>Programare</b>
            <span>Luni–vineri, 08:00–20:00. Recepția vă spune ce acte să aduceți.</span>
            <a className="tel" href={TEL_HREF}>
              <Icon name="phone" />
              {TEL}
            </a>
          </div>
        </aside>

        <div className="serv-main">
          <dl className="kf" id="pe-scurt" data-reveal="scale">
            <h2>Pe scurt</h2>
            {s.kf.map(([icon, label], i) => (
              <div key={label}>
                <Icon name={icon as IconName} />
                <dl>
                  <dt>{label}</dt>
                  <dd>{kf[i]}</dd>
                </dl>
              </div>
            ))}
          </dl>

          <div className="prose">
            <Body />
          </div>
        </div>
      </div>

      <section className="related serv-sec">
        <div className="sec-head" data-reveal="">
          <h2 className="h2">Servicii legate</h2>
          <Link className="btn btn-line" href="/servicii/">
            <Icon name="layout-grid" />
            Toate serviciile
          </Link>
        </div>
        <div className="rel-grid" data-stagger="">
          {s.related.map((slug) => {
            const r = relCards[slug];
            return (
              <Link key={slug} className="rel-card card-lift" href={`/servicii/${slug}/`}>
                <span className="ic">
                  <Icon name={r.icon as IconName} />
                </span>
                <h3>{r.name}</h3>
                <p>{r.short}</p>
                <span className="arr">
                  Detalii <Icon name="arrow-right" />
                </span>
              </Link>
            );
          })}
        </div>
        <div className="sec-head" style={{ marginTop: 72 }} data-reveal="">
          <h2 className="h2">Articole utile</h2>
          <Link className="btn btn-line" href="/blog/">
            <Icon name="book-open" />
            Toate articolele
          </Link>
        </div>
        <div className="rel-art" data-stagger="">
          {s.articles.map((slug) => {
            const a = articleCards[slug];
            return (
              <Link key={slug} href={`/blog/${slug}/`}>
                <span className="k">{a.kicker}</span>
                <h3>{a.title}</h3>
                <span className="arr">
                  Citiți articolul <Icon name="arrow-right" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="cta-band serv-sec" data-reveal="">
        <div className="in">
          <div>
            <h2>{s.cta.h2}</h2>
            <p>{s.cta.p}</p>
          </div>
          <div className="ctas">
            <Link className="btn btn-light" href="/programare/">
              <Icon name="calendar" />
              Programare
            </Link>
            <a className="btn btn-ghost" href={TEL_HREF}>
              <Icon name="phone" />
              {TEL}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
