import Link from "next/link";
import { generateSeoMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd, CollectionPageJsonLd } from "@/lib/jsonld";
import { articles } from "@/content/blog/_meta";
import Preloader from "@/components/Preloader";

export const metadata = generateSeoMetadata({
  title: "Blog Trading — Market Profile, Order Flow, Futures",
  description:
    "Guides gratuits sur le Market Profile, l'Order Flow, le Footprint Chart et les Futures. Par Sebastien Constant, trader professionnel et formateur certifie.",
  path: "/blog/",
});

export default function BlogIndexPage() {
  return (
    <>
      <Preloader />
      <BreadcrumbJsonLd
        items={[{ name: "Accueil", url: "/" }, { name: "Blog" }]}
      />
      <CollectionPageJsonLd
        name="Blog BASS Trading"
        description="Guides gratuits sur le Market Profile, l'Order Flow, le Footprint Chart et les Futures."
        url="/blog/"
        articleUrls={articles.map((a) => `/blog/${a.slug}/`)}
      />

      <section className="blog-index-hero">
        <div className="blog-index-inner">
          <nav className="breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span className="sep">/</span>
            <span>Blog</span>
          </nav>
          <h1 className="blog-index-title">Blog BASS Trading</h1>
          <p className="blog-index-desc">
            Market Profile, Order Flow, Footprint — les guides de reference pour
            trader les Futures comme un professionnel.
          </p>
        </div>
      </section>

      <section className="articles-sec">
        <div className="articles-grid">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}/`}
              className="article-card"
            >
              <div className="article-card-cat">{article.category}</div>
              <h2>{article.title}</h2>
              <p className="article-card-desc">{article.shortDescription}</p>
              <div className="article-card-footer">
                <div className="article-card-meta">
                  <span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    {article.datePublished}
                  </span>
                  <span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    {article.readingTime}
                  </span>
                </div>
                <span className="article-card-link">
                  Lire l&apos;article{" "}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
