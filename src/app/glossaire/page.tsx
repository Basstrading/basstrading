import Link from "next/link";
import { generateSeoMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd, DefinedTermSetJsonLd } from "@/lib/jsonld";
import { terms } from "@/content/glossaire/_data";

export const metadata = generateSeoMetadata({
  title: "Glossaire Trading : Market Profile, Order Flow, Footprint",
  description:
    "Glossaire des termes trading institutionnels : POC, VAH, VAL, CVD, Delta, VWAP, HVN, LVN, Imbalance, Absorption, TPO, Naked POC. Définitions claires + exemples.",
  path: "/glossaire/",
});

// Tri alphabétique par terme
const sorted = [...terms].sort((a, b) => a.term.localeCompare(b.term, "fr"));

export default function GlossaireIndexPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Glossaire" },
        ]}
      />
      <DefinedTermSetJsonLd
        name="Glossaire Trading BASS — Market Profile, Order Flow, Footprint"
        description="Définitions de référence des termes du trading institutionnel utilisés dans le mentorat BASS Trading."
        url="/glossaire/"
        hasDefinedTerms={sorted.map((t) => ({
          name: t.term,
          url: `/glossaire/${t.slug}/`,
          termCode: t.acronym,
        }))}
      />

      <section className="blog-hero">
        <div className="blog-hero-inner">
          <nav className="breadcrumb" aria-label="Fil d&apos;Ariane">
            <Link href="/">Accueil</Link>
            <span className="sep">/</span>
            <span>Glossaire</span>
          </nav>
          <div className="blog-hero-cat">Référence</div>
          <h1 className="blog-hero-title">
            Glossaire Trading.<br />
            Le vocabulaire des institutionnels.
          </h1>
          <p className="blog-hero-desc">
            Les termes clés du Market Profile, de l&apos;Order Flow et du
            Footprint Chart — définitions concises, exemples concrets,
            liens vers les guides complets. Par{" "}
            <Link href="/sebastien-constant/">Sébastien Constant</Link>.
          </p>
        </div>
      </section>

      <section className="articles-sec">
        <div className="articles-grid">
          {sorted.map((t) => (
            <Link
              key={t.slug}
              href={`/glossaire/${t.slug}/`}
              className="article-card"
            >
              <div className="article-card-cat">
                {t.acronym ? t.acronym : "Terme"}
              </div>
              <h2>{t.term}</h2>
              <p className="article-card-desc">{t.short}</p>
              <div className="article-card-footer">
                <div className="article-card-meta">
                  {t.hubSlug ? (
                    <span style={{ textTransform: "capitalize" }}>
                      {t.hubSlug.replace("-", " ")}
                    </span>
                  ) : null}
                </div>
                <span className="article-card-link">
                  Voir la définition{" "}
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

      <section className="form-sec">
        <div className="form-inner">
          <div className="sec-label">Aller plus loin</div>
          <h2 className="sec-title">Maîtriser ces concepts en mentorat.</h2>
          <p className="sec-desc">
            Le mentorat BASS forme à la lecture institutionnelle du marché —
            Market Profile, Order Flow, Footprint, Volume Profile — en
            sessions de trading live quotidiennes.
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
