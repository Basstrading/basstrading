import Link from "next/link";
import { generateSeoMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/lib/jsonld";
import { villes } from "@/content/pages/villes/_data";

export const metadata = generateSeoMetadata({
  title: "Formation Trading en France | Présentiel + CPF",
  description:
    "Formation trading présentiel dans 20 villes en France avec Sébastien Constant. Market Profile, Order Flow, Gamma. 8 places max. Éligible CPF. Session confirmée dès 8 inscrits.",
  path: "/formation-trading/",
});

const Arrow = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: 14, height: 14 }}
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export default function FormationTradingIndex() {
  return (
    <div className="ville-page">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Formation Présentiel" },
        ]}
      />

      {/* HERO */}
      <section className="v-hero">
        <div className="v-hero-content">
          <div className="v-hero-badge">
            <span className="v-dot" /> 20 villes — 8 places max par session
          </div>
          <h1 className="v-hero-title">
            Formation Trading en <em>France</em>
            <br />
            <span>Présentiel &amp; En ligne</span>
          </h1>
          <p className="v-hero-sub">
            Sébastien Constant se déplace dans toute la France.
            <br />
            Sessions intensives de 3-4 jours, 8 participants maximum.
            <br />
            Éligible CPF via EMSCA (Qualiopi).
          </p>
          <div className="v-hero-ctas">
            <Link href="/#candidater" className="v-cta-primary">
              Candidater au mentorat <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* MÉTHODE RÉSUMÉE */}
      <section className="v-sec v-sec-dark">
        <div className="sec-center">
          <div
            className="sec-label"
            style={{ color: "rgba(255,255,255,.25)" }}
          >
            La méthode
          </div>
          <h2 className="sec-title" style={{ color: "var(--pure)" }}>
            Ce que vous apprendrez
          </h2>
          <p className="v-method-intro">
            BASS n&apos;enseigne pas des indicateurs. BASS enseigne à lire la
            structure du marché — comme les institutionnels.
          </p>
        </div>
        <div className="v-method-block">
          <div className="v-method-grid">
            <div className="v-method-card">
              <h3>Options &amp; Gamma</h3>
              <p>
                Positionnement des options, walls gamma, flip — comprendre les
                contraintes des market makers avant d&apos;ouvrir un trade.
              </p>
            </div>
            <div className="v-method-card">
              <h3>Market Profile</h3>
              <p>
                Mécanisme d&apos;enchères, Value Area, POC, Initial Balance —
                savoir où le marché accepte la valeur et où il la rejette.
              </p>
            </div>
            <div className="v-method-card">
              <h3>VWAP Multi-Timeframe</h3>
              <p>
                4 niveaux de VWAP (annuel, mensuel, hebdomadaire, daily) avec
                écarts-types pour identifier les zones à fort enjeu.
              </p>
            </div>
            <div className="v-method-card">
              <h3>CVD &amp; Tape Reading</h3>
              <p>
                Pression directionnelle réelle, divergences CVD/prix, lecture du
                Time &amp; Sales — le timing d&apos;exécution précis.
              </p>
            </div>
            <div className="v-method-card">
              <h3>x-trade.ai</h3>
              <p>
                Risk manager institutionnel inclus. Coupe vos positions
                automatiquement — limite journalière, drawdown max, verrouillage.
              </p>
            </div>
            <div className="v-method-card">
              <h3>Prop Firms</h3>
              <p>
                Préparation complète aux combines. $700K+ financés en prop firms
                par Sébastien — la méthode est prouvée.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LISTE DES 20 VILLES */}
      <section className="v-sec v-sec-light">
        <div className="sec-center">
          <div className="sec-label">20 villes</div>
          <h2 className="sec-title">
            Choisissez votre ville
          </h2>
          <p
            style={{
              color: "var(--g1)",
              fontSize: ".95rem",
              lineHeight: 1.7,
              maxWidth: 520,
              margin: "0 auto 48px",
            }}
          >
            Sébastien se déplace dans toute la France. La session se confirme
            dès 8 inscrits — rejoignez la liste d&apos;attente de votre ville.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 16,
            maxWidth: 960,
            margin: "0 auto",
          }}
        >
          {villes.map((v) => (
            <Link
              key={v.slug}
              href={`/formation-trading/${v.slug}/`}
              style={{
                display: "block",
                padding: "24px 28px",
                background: "var(--g4)",
                borderRadius: 14,
                transition: "all .2s",
                textDecoration: "none",
              }}
              className="pilier-ville-card"
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 6,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-outfit), sans-serif",
                    fontWeight: 800,
                    fontSize: "1.05rem",
                    color: "var(--bk)",
                    letterSpacing: "-.5px",
                  }}
                >
                  {v.ville}
                </span>
                <span
                  style={{
                    fontSize: ".6rem",
                    fontWeight: 700,
                    letterSpacing: "1.5px",
                    textTransform: "uppercase" as const,
                    color: "var(--g2)",
                  }}
                >
                  {v.region}
                </span>
              </div>
              <p
                style={{
                  fontSize: ".82rem",
                  color: "var(--g1)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {v.shortDesc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* PREUVES */}
      <section className="v-sec v-sec-light" style={{ paddingTop: 0 }}>
        <div className="v-stats">
          <div className="v-stat">
            <div className="v-stat-num">$700K+</div>
            <div className="v-stat-label">Comptes funded</div>
          </div>
          <div className="v-stat">
            <div className="v-stat-num">4.9/5</div>
            <div className="v-stat-label">126 avis Trustpilot</div>
          </div>
          <div className="v-stat">
            <div className="v-stat-num">10+</div>
            <div className="v-stat-label">Ans d&apos;expérience</div>
          </div>
          <div className="v-stat">
            <div className="v-stat-num">20</div>
            <div className="v-stat-label">Villes en France</div>
          </div>
        </div>
      </section>

      {/* FORMAT */}
      <section className="v-sec v-sec-light" style={{ paddingTop: 0 }}>
        <div className="sec-center">
          <div className="sec-label">Format</div>
          <h2 className="sec-title">Comment ça fonctionne</h2>
        </div>
        <div className="v-format-grid">
          <div className="v-format-item">
            <div className="v-format-label">Format</div>
            <div className="v-format-value">
              Présentiel intensif, 3-4 jours consécutifs
            </div>
          </div>
          <div className="v-format-item">
            <div className="v-format-label">Groupe</div>
            <div className="v-format-value">
              8 participants maximum (suivi individuel garanti)
            </div>
          </div>
          <div className="v-format-item">
            <div className="v-format-label">Lieu</div>
            <div className="v-format-value">
              Centre-ville — confirmé 2 semaines avant la session
            </div>
          </div>
          <div className="v-format-item">
            <div className="v-format-label">Financement</div>
            <div className="v-format-value">
              Éligible CPF via EMSCA (Qualiopi). Reste à charge possible : 0&nbsp;€.
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="v-final-cta">
        <div className="sec-center">
          <h2 className="sec-title" style={{ color: "var(--pure)" }}>
            Prêt à trader comme un institutionnel ?
          </h2>
          <p style={{ color: "rgba(255,255,255,.4)", marginBottom: 36 }}>
            20 villes en France. 8 places maximum par session.
            <br />
            Formation en ligne disponible immédiatement.
          </p>
          <Link
            href="/#candidater"
            className="v-cta-primary"
            style={{ display: "inline-flex" }}
          >
            Candidater au mentorat BASS <Arrow />
          </Link>
        </div>
      </section>
    </div>
  );
}
