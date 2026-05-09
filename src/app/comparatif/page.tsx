import Link from "next/link";
import { generateSeoMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd, CollectionPageJsonLd } from "@/lib/jsonld";
import { comparatifs } from "@/content/comparatifs/_data";

export const metadata = generateSeoMetadata({
  title: "Comparatifs Prop Firms et Formations Trading 2026 | BASS Trading",
  description:
    "Tous les comparatifs honnetes 2026 : FTMO vs Topstep, Topstep vs Apex, BASS Trading vs Trading Academie. 10 comparatifs detailles par les traders BASS Trading.",
  path: "/comparatif/",
});

export default function ComparatifHubPage() {
  return (
    <>
      <CollectionPageJsonLd
        name="Comparatifs Prop Firms et Formations Trading"
        description="Comparatifs honnetes des prop firms et formations trading francophones en 2026."
        url="/comparatif/"
        articleUrls={comparatifs.map((c) => `/comparatif/${c.slug}/`)}
      />
      <BreadcrumbJsonLd
        items={[{ name: "Accueil", url: "/" }, { name: "Comparatifs" }]}
      />

      <section className="blog-hero">
        <div className="blog-hero-inner">
          <nav className="breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span className="sep">/</span>
            <span>Comparatifs</span>
          </nav>
          <div className="blog-hero-cat">Comparatifs</div>
          <h1 className="blog-hero-title">
            Comparatifs honnetes.<br />
            Prop firms et formations.
          </h1>
          <p className="blog-hero-desc">
            10 duels detailles pour t&apos;aider a choisir la prop firm ou la
            formation qui correspond a ton profil. Aucune affiliation cachee —
            juste des avis bases sur les faits et l&apos;experience des traders
            BASS.
          </p>
        </div>
      </section>

      <div className="article-wrap">
        <article className="article-body" style={{ margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 20,
              marginTop: 24,
              marginBottom: 48,
            }}
          >
            {comparatifs.map((c) => (
              <Link
                key={c.slug}
                href={`/comparatif/${c.slug}/`}
                style={{
                  padding: 24,
                  background: "rgba(0,0,0,.03)",
                  borderRadius: 12,
                  textDecoration: "none",
                  color: "inherit",
                  display: "block",
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    opacity: 0.6,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    marginBottom: 8,
                  }}
                >
                  {c.leftName} vs {c.rightName}
                </div>
                <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>
                  {c.title}
                </div>
                <div style={{ fontSize: 14, opacity: 0.7, lineHeight: 1.5 }}>
                  {c.hero}
                </div>
              </Link>
            ))}
          </div>

          <div
            style={{
              padding: 32,
              background: "var(--ink)",
              color: "var(--pure)",
              borderRadius: 16,
              marginTop: 48,
              textAlign: "center",
            }}
          >
            <h3 style={{ color: "var(--pure)", marginBottom: 12 }}>
              Tu hesites entre plusieurs options ?
            </h3>
            <p
              style={{
                opacity: 0.7,
                marginBottom: 24,
                maxWidth: 540,
                margin: "0 auto 24px",
              }}
            >
              Candidate au mentorat — on te conseille la prop firm et la
              formule adaptees a ton profil. Reponse sous 48h.
            </p>
            <Link
              href="/candidater/"
              style={{
                display: "inline-block",
                padding: "16px 32px",
                background: "var(--gold)",
                color: "var(--ink)",
                borderRadius: 100,
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Candidater au mentorat →
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}
