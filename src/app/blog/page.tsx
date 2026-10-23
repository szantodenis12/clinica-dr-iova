import Link from "next/link";
import "@/styles/blog.css";
import "@/styles/mobile.css"; // always last
import { buildMetadata } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import { BASE_URL } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import Icon from "@/components/Icon";
import BlogCard from "@/components/blog/BlogCard";
import BlogFilters from "@/components/blog/BlogFilters";
import { blogPosts, blogImage } from "@/data/blog";

const route = getRoute("/blog/");
const featured = blogPosts.find((p) => p.featured) ?? blogPosts[0];

export const metadata = buildMetadata({ title: route.title, description: route.description, path: route.path, ogImage: blogImage(featured.slug) });

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Articole | Clinica Dr. Iova",
  url: `${BASE_URL}/blog/`,
  inLanguage: "ro",
  isPartOf: { "@id": `${BASE_URL}/#clinica` },
  about: ["psihiatrie", "psihiatrie pediatrică", "psihologie clinică", "logopedie", "CAS Bihor"],
  hasPart: blogPosts.map((p) => ({ "@type": "Article", headline: p.title, url: `${BASE_URL}/blog/${p.slug}/` })),
};

export default function BlogIndexPage() {
  // grid: every post, the featured one last (as in the original)
  const grid = [...blogPosts.filter((p) => p !== featured), featured];
  return (
    <>
      <Breadcrumbs items={[["Articole", "/blog/"]]} />
      <JsonLd data={collectionSchema} />

      <header className="blog-head">
        <div data-reveal="">
          <div className="kicker">Articole</div>
          <h1>Explicații calme, pentru pacienți și părinți</h1>
        </div>
        <p className="intro" data-reveal="left">
          Răspunsuri la întrebările pe care le auzim la recepție și în cabinet: când are sens un consult, cum decurge o evaluare, ce acte sunt necesare pentru CAS. Informare generală, nu sfat medical individual.
        </p>
      </header>

      <BlogFilters total={blogPosts.length} />

      <section className="featured" style={{ padding: 0 }}>
        <Link href={`/blog/${featured.slug}/`} data-reveal="scale">
          <div className="img" data-reveal="mask">
            <img src={blogImage(featured.slug)} alt={featured.featuredAlt} data-parallax="0.06" />
          </div>
          <div className="txt">
            <div>
              <div className="bmeta">
                <span className="cat" data-c={featured.cat}>
                  {featured.catLabel}
                </span>
                <span>{featured.readMin} min de citit</span>
              </div>
              <h2>{featured.title}</h2>
              <p>{featured.featuredExcerpt}</p>
            </div>
            <span className="go">
              Citiți articolul <Icon name="arrow-right" />
            </span>
          </div>
        </Link>
      </section>

      <div className="bgrid" data-stagger="">
        {grid.map((p) => (
          <BlogCard key={p.slug} post={p} withExcerpt />
        ))}
      </div>

      <section className="blog-note" style={{ padding: 0 }}>
        <div className="in" data-reveal="">
          <h2>Cum scriem aceste articole</h2>
          <div>
            <p>Articolele sunt scrise de echipa clinicii și descriu situații generale, așa cum le întâlnim în cabinet. Regulile CNAS și cadrul legal sunt verificate la data publicării, cu sursele listate la finalul fiecărui text. Nu găsiți aici denumiri de medicamente, doze sau promisiuni de rezultat.</p>
            <p>Niciun articol nu înlocuiește o consultație. Dacă vă recunoașteți într-o descriere, cel mai bun pas următor este o discuție cu medicul de familie sau o programare la clinică. În caz de urgență sunați la 112.</p>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="in" data-reveal="scale">
          <div>
            <h2>Aveți o întrebare care nu este în articole?</h2>
            <p>Recepția vă spune la ce medic are sens să ajungeți și dacă aveți nevoie de bilet de trimitere. Luni–vineri, 08:00–20:00.</p>
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
