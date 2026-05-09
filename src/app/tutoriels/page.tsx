import Link from "next/link";
import { generateSeoMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd, CollectionPageJsonLd } from "@/lib/jsonld";
import { tutoriels } from "@/content/tutoriels/_data";

export const metadata = generateSeoMetadata({
  title: "Tutoriels Sierra Chart en Francais 2026 | BASS Trading",
  description:
    "Tutoriels Sierra Chart en francais : configuration Market Profile, Footprint, indicateurs essentiels, comparatifs avec NinjaTrader et ATAS. Le seul ressources francophones professionnelles.",
  path: "/tutoriels/",
});

export default function TutorielsHubPage() {
  const categories = [...new Set(tutoriels.map((t) => t.category))];

  return (
    <>
      <CollectionPageJsonLd
        name="Tutoriels Sierra Chart Francais"
        description="Tutoriels professionnels Sierra Chart en francais : Market Profile, Footprint, configuration, comparatifs."
        url="/tutoriels/"
        articleUrls={tutoriels.map((t) => `/tutoriels/${t.slug}/`)}
      />
      <BreadcrumbJsonLd
        items={[{ name: "Accueil", url: "/" }, { name: "Tutoriels" }]}
      />

      <section className="blog-hero">
        <div className="blog-hero-inner">
          <nav className="breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span className="sep">/</span>
            <span>Tutoriels</span>
          </nav>
          <div className="blog-hero-cat">Tutoriels techniques</div>
          <h1 className="blog-hero-title">
            Tutoriels Sierra Chart.<br />
            En francais. Pour les pros.
          </h1>
          <p className="blog-hero-desc">
            La majorite des ressources Sierra Chart sont en anglais — et les
            traders francophones se debrouillent comme ils peuvent. Voici les
            tutoriels professionnels en francais que tu n&apos;avais jamais
            trouves : configuration, indicateurs, comparatifs, prop firms.
          </p>
        </div>
      </section>

      <div className="article-wrap">
        <article className="article-body" style={{ margin: "0 auto" }}>
          {categories.map((cat) => (
            <div key={cat} style={{ marginBottom: 48 }}>
              <h2 style={{ marginBottom: 20 }}>{cat}</h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: 16,
                }}
              >
                {tutoriels
                  .filter((t) => t.category === cat)
                  .map((t) => (
                    <Link
                      key={t.slug}
                      href={`/tutoriels/${t.slug}/`}
                      style={{
                        padding: 24,
                        background: "rgba(0,0,0,.03)",
                        borderRadius: 12,
                        textDecoration: "none",
                        color: "inherit",
                        display: "block",
                      }}
                    >
                      <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>
                        {t.title}
                      </div>
                      <div style={{ fontSize: 14, opacity: 0.7, lineHeight: 1.5 }}>
                        {t.intro.slice(0, 140)}…
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          ))}

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
              Apprendre Sierra Chart en profondeur
            </h3>
            <p
              style={{
                opacity: 0.7,
                marginBottom: 24,
                maxWidth: 540,
                margin: "0 auto 24px",
              }}
            >
              Le mentorat BASS Trading inclut la formation Sierra Chart
              complete avec sessions live trading quotidiennes par Sebastien
              Constant.
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
