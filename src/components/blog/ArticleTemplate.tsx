import { Fragment, type ComponentType } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import Icon from "@/components/Icon";
import { BASE_URL } from "@/lib/site";
import { blogImage, getPost, type BlogPost } from "@/data/blog";
import ArtProgress from "./ArtProgress";
import ArtToc from "./ArtToc";
import BlogCard from "./BlogCard";

/** Shared article layout. `Body` = the JSX of <article class="art-body prose"> (src/content/blog/{slug}.tsx). */
export default function ArticleTemplate({ post, Body }: { post: BlogPost; Body: ComponentType }) {
  const url = `${BASE_URL}/blog/${post.slug}/`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.schema.description,
    image: BASE_URL + blogImage(post.slug),
    datePublished: post.schema.datePublished,
    dateModified: post.schema.dateModified,
    inLanguage: "ro",
    articleSection: post.catLabel,
    author: post.schema.author,
    publisher: post.schema.publisher,
    mainEntityOfPage: url,
    ...(post.schema.about ? { about: post.schema.about } : {}),
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };
  const next = post.next.map((s) => getPost(s)).filter((p): p is BlogPost => !!p);

  return (
    <>
      <Breadcrumbs items={[["Articole", "/blog/"], [post.crumb, `/blog/${post.slug}/`]]} />
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />

      <ArtProgress />

      <header className="art-head">
        <div className="top">
          <div data-reveal="">
            <div className="bmeta">
              <span className="cat" data-c={post.cat}>
                {post.catLabel}
              </span>
              <span>Publicat {post.date}</span>
              <span>{post.readMin} min de citit</span>
            </div>
            <h1>{post.title}</h1>
            <div className="art-author">
              <b>Echipa Clinicii Dr. Iova</b>
              <span className="todo">{post.authorNote}</span>
            </div>
          </div>
          <p className="intro" data-reveal="left">
            {post.intro}
          </p>
        </div>
        <figure className="art-cover" data-reveal="mask">
          <img src={blogImage(post.slug)} alt={post.coverAlt} data-parallax="0.08" />
          <figcaption>{post.caption}</figcaption>
        </figure>
      </header>

      <div className="art-layout">
        <ArtToc>
          <div className="tools">
            {post.tools.map(([href, icon, label]) => (
              <Link key={href} href={href}>
                <Icon name={icon} />
                {label}
              </Link>
            ))}
          </div>
        </ArtToc>

        <article className="art-body prose">
          <Body />
        </article>
      </div>

      <section className="art-related" style={{ padding: 0 }}>
        <div className="sec-head" data-reveal="">
          <div>
            <h2 className="h2">
              {post.relatedHeading.map((l, i) => (
                <Fragment key={i}>
                  {i > 0 && <br />}
                  {l}
                </Fragment>
              ))}
            </h2>
          </div>
        </div>
        <div className="rel-grid" data-stagger="">
          {post.related.map((r) => (
            <Link key={r.href} className="rel" href={r.href}>
              <span className="ic">{r.icon ? <Icon name={r.icon} /> : <img src={r.img} alt="" />}</span>
              <b>{r.title}</b>
              <span>{r.sub}</span>
              <span className="go">
                {r.go} <Icon name="arrow-right" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="art-next" style={{ padding: 0 }}>
        <div className="sec-head" data-reveal="">
          <div>
            <h2 className="h2">Citiți în continuare</h2>
          </div>
        </div>
        <div className="row" data-stagger="">
          {next.map((p) => (
            <BlogCard key={p.slug} post={p} />
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div className="in" data-reveal="scale">
          <div>
            <h2>{post.cta.h2}</h2>
            <p>{post.cta.p}</p>
          </div>
          <div className="ctas">
            <Link className="btn btn-light" href="/programare/">
              <Icon name="calendar" />
              Programare
            </Link>
            <a className="btn btn-ghost" href="tel:+40359450657">
              <Icon name="phone" />
              0359 450 657
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
