import { notFound } from "next/navigation";
import Link from "next/link";
import { generateSeoMetadata } from "@/lib/seo";
import {
  BreadcrumbJsonLd,
  DefinedTermJsonLd,
} from "@/lib/jsonld";
import {
  terms,
  getTermBySlug,
  type GlossaryTerm,
} from "@/content/glossaire/_data";
import { articles } from "@/content/blog/_meta";

export function generateStaticParams() {
  return terms.map((t) => ({ term: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ term: string }>;
}) {
  const { term: slug } = await params;
  const t = getTermBySlug(slug);
  if (!t) return {};
  const titleBase = t.acronym ? `${t.acronym} (${t.term})` : t.term;
  return generateSeoMetadata({
    title: `${titleBase} — Glossaire Trading`,
    description: t.short,
    path: `/glossaire/${t.slug}/`,
  });
}

const hubLabels: Record<string, string> = {
  "market-profile": "Market Profile",
  "order-flow": "Order Flow",
  footprint: "Footprint Chart",
  "volume-profile": "Volume Profile",
};

function getRelatedTerms(t: GlossaryTerm) {
  return t.relatedSlugs
    .map((slug) => terms.find((other) => other.slug === slug))
    .filter((x): x is GlossaryTerm => Boolean(x));
}

export default async function GlossaryTermPage({
  params,
}: {
  params: Promise<{ term: string }>;
}) {
  const { term: slug } = await params;
  const t = getTermBySlug(slug);
  if (!t) notFound();

  const related = getRelatedTerms(t);
  const fullArticle = t.fullArticleSlug
    ? articles.find((a) => a.slug === t.fullArticleSlug)
    : undefined;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Glossaire", url: "/glossaire/" },
          { name: t.term },
        ]}
      />
      <DefinedTermJsonLd
        name={t.term}
        description={t.definition}
        url={`/glossaire/${t.slug}/`}
        termCode={t.acronym}
        inDefinedTermSet="/glossaire/"
      />

      <section className="blog-hero">
        <div className="blog-hero-inner">
          <nav className="breadcrumb" aria-label="Fil d&apos;Ariane">
            <Link href="/">Accueil</Link>
            <span className="sep">/</span>
            <Link href="/glossaire/">Glossaire</Link>
            <span className="sep">/</span>
            <span>{t.term}</span>
          </nav>
          <div className="blog-hero-cat">
            {t.acronym ? `Acronyme : ${t.acronym}` : "Terme"}
          </div>
          <h1 className="blog-hero-title">
            {t.term}
            {t.acronym ? <> <em>({t.acronym})</em></> : null}
          </h1>
          <p className="blog-hero-desc">{t.short}</p>
        </div>
      </section>

      <div className="article-wrap">
        <article className="article-body" style={{ margin: "0 auto" }}>
          <h2>Définition</h2>
          <p>
            <strong>{t.definition}</strong>
          </p>

          <h2>Comprendre {t.term}</h2>
          {t.details.map((para, i) => (
            <p key={i}>{para}</p>
          ))}

          <h2>Exemple concret</h2>
          <div className="info-box">
            <p>{t.example}</p>
          </div>

          {fullArticle ? (
            <>
              <h2>Approfondir</h2>
              <p>
                Pour un guide complet,{" "}
                <Link href={`/blog/${fullArticle.slug}/`}>
                  lire l&apos;article : {fullArticle.title}
                </Link>
                .
              </p>
            </>
          ) : null}

          {t.hubSlug ? (
            <p>
              Hub thématique :{" "}
              <Link href={`/${t.hubSlug}/`}>
                {hubLabels[t.hubSlug] ?? t.hubSlug}
              </Link>
              .
            </p>
          ) : null}

          {related.length > 0 ? (
            <>
              <h2>Termes liés</h2>
              <div className="related-grid">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/glossaire/${r.slug}/`}
                    className="related-card"
                  >
                    <div className="related-cat">
                      {r.acronym ?? "Terme"}
                    </div>
                    <h3>{r.term}</h3>
                    <p>{r.short}</p>
                    <span className="related-link">Voir &rarr;</span>
                  </Link>
                ))}
              </div>
            </>
          ) : null}

          <p style={{ marginTop: 32 }}>
            <Link href="/glossaire/">&larr; Retour au glossaire</Link>
          </p>
        </article>
      </div>

      <section className="form-sec">
        <div className="form-inner">
          <div className="sec-label">Mentorat</div>
          <h2 className="sec-title">
            Apprendre à appliquer {t.acronym ?? t.term} en trading réel.
          </h2>
          <p className="sec-desc">
            Sessions live quotidiennes par Sébastien Constant. Configuration
            Sierra Chart fournie. Vérifiez votre éligibilité en 15 minutes.
          </p>
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <Link href="/#candidater" className="btn-p">
              Candidater au mentorat BASS{" "}
              <svg
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                width="14"
                height="14"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
