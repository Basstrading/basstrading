import Link from "next/link";
import { generateSeoMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd, CollectionPageJsonLd } from "@/lib/jsonld";
import { propFirms } from "@/content/prop-firms/_data";

export const metadata = generateSeoMetadata({
  title: "Prop Firms 2026 : Comparatif Complet (10 prop firms testees par BASS Trading)",
  description:
    "Comparatif des 10 meilleures prop firms 2026 : FTMO, Topstep, Apex, Fast Track, Bulenox, MFFU. Frais d'evaluation, profit split, payout, fiabilite. Methode validee en condition reelle.",
  path: "/prop-firm/",
});

const Star = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    style={{ width: 14, height: 14, color: "#FFB800" }}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default function PropFirmHubPage() {
  const sorted = [...propFirms].sort((a, b) => b.ratingValue - a.ratingValue);

  return (
    <>
      <CollectionPageJsonLd
        name="Comparatif des Prop Firms 2026"
        description="Comparatif complet des 10 meilleures prop firms du marche en 2026 — testees et notees par les traders BASS Trading."
        url="/prop-firm/"
        articleUrls={propFirms.map((p) => `/prop-firm/${p.slug}/`)}
      />
      <BreadcrumbJsonLd
        items={[{ name: "Accueil", url: "/" }, { name: "Prop Firms" }]}
      />

      <section className="blog-hero">
        <div className="blog-hero-inner">
          <nav className="breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span className="sep">/</span>
            <span>Prop Firms</span>
          </nav>
          <div className="blog-hero-cat">Comparatif</div>
          <h1 className="blog-hero-title">
            Prop Firms 2026.<br />
            10 prop firms testees.
          </h1>
          <p className="blog-hero-desc">
            FTMO, Topstep, Apex, Fast Track, Bulenox, My Funded Futures, The
            Funded Trader, FundedNext, E8 Funding, Take Profit Trader. Verdict
            honnete et detaille par Sebastien Constant — testes en condition
            reelle.
          </p>
        </div>
      </section>

      <div className="article-wrap">
        <article className="article-body" style={{ margin: "0 auto" }}>
          <h2>Comment choisir sa prop firm en 2026 ?</h2>
          <p>
            En 2026, le marche compte plus de 100 prop firms actives. Toutes ne
            se valent pas. Voici les <strong>4 criteres</strong> que nous
            utilisons chez BASS Trading pour evaluer une prop firm avant de la
            recommander a nos eleves :
          </p>
          <ol>
            <li>
              <strong>Fiabilite des paiements</strong> — la prop firm a-t-elle
              un track record de paiements regulers depuis au moins 2 ans ?
            </li>
            <li>
              <strong>Marches couverts</strong> — Futures CME (ES, NQ, GC, CL)
              ou Forex/CFD ? La methode BASS est optimale sur Futures.
            </li>
            <li>
              <strong>Profit split + scaling</strong> — combien tu touches reel
              en pourcentage des gains, et a partir de quel palier ?
            </li>
            <li>
              <strong>Drawdown : trailing ou statique</strong> — un drawdown
              statique (ou End of Day) reduit massivement le stress mental vs
              un trailing.
            </li>
          </ol>

          <h2>Les 10 prop firms reviewees</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 20,
              marginTop: 24,
              marginBottom: 48,
            }}
          >
            {sorted.map((p) => (
              <Link
                key={p.slug}
                href={`/prop-firm/${p.slug}/`}
                style={{
                  padding: 24,
                  background: "rgba(0,0,0,.03)",
                  borderRadius: 12,
                  textDecoration: "none",
                  color: "inherit",
                  display: "block",
                  transition: "transform .15s",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 8,
                  }}
                >
                  <div style={{ fontSize: 22, fontWeight: 700 }}>{p.name}</div>
                  <div style={{ display: "flex", gap: 2 }}>
                    {[...Array(Math.round(p.ratingValue))].map((_, i) => (
                      <Star key={i} />
                    ))}
                  </div>
                </div>
                <div
                  style={{
                    fontSize: 13,
                    opacity: 0.7,
                    marginBottom: 12,
                    fontWeight: 600,
                  }}
                >
                  {p.rating} — Fonde en {p.founded}
                </div>
                <div style={{ fontSize: 14, lineHeight: 1.5, marginBottom: 12 }}>
                  {p.intro.slice(0, 160)}…
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 6,
                    fontSize: 12,
                  }}
                >
                  <span
                    style={{
                      padding: "4px 10px",
                      background: "rgba(0,0,0,.06)",
                      borderRadius: 100,
                    }}
                  >
                    {p.evaluationFee.split(" ")[0]} {p.evaluationFee.includes("/") ? "/ mois" : ""}
                  </span>
                  <span
                    style={{
                      padding: "4px 10px",
                      background: "rgba(0,0,0,.06)",
                      borderRadius: 100,
                    }}
                  >
                    Profit {p.profitSplit.split(" ")[0]}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <h2>Tableau comparatif rapide</h2>
          <div
            style={{
              overflowX: "auto",
              border: "1px solid rgba(0,0,0,.08)",
              borderRadius: 12,
              marginBottom: 32,
            }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ background: "rgba(0,0,0,.04)" }}>
                  <th style={{ padding: 12, textAlign: "left" }}>Prop firm</th>
                  <th style={{ padding: 12, textAlign: "left" }}>Note</th>
                  <th style={{ padding: 12, textAlign: "left" }}>Frais</th>
                  <th style={{ padding: 12, textAlign: "left" }}>Profit split</th>
                  <th style={{ padding: 12, textAlign: "left" }}>Max funding</th>
                </tr>
              </thead>
              <tbody>
                {sorted.map((p) => (
                  <tr key={p.slug} style={{ borderTop: "1px solid rgba(0,0,0,.08)" }}>
                    <td style={{ padding: 12, fontWeight: 600 }}>
                      <Link href={`/prop-firm/${p.slug}/`}>{p.name}</Link>
                    </td>
                    <td style={{ padding: 12 }}>{p.rating}</td>
                    <td style={{ padding: 12 }}>{p.evaluationFee}</td>
                    <td style={{ padding: 12 }}>{p.profitSplit}</td>
                    <td style={{ padding: 12 }}>{p.maxFunding}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Quelle prop firm choisir selon ton profil ?</h2>
          <ul>
            <li>
              <strong>Trader Futures debutant</strong> →{" "}
              <Link href="/prop-firm/topstep/">Topstep</Link> (le standard) ou{" "}
              <Link href="/prop-firm/my-funded-futures/">My Funded Futures</Link> (alternative one-time)
            </li>
            <li>
              <strong>Trader Futures qui veut multi-comptes</strong> →{" "}
              <Link href="/prop-firm/apex-trader-funding/">Apex Trader Funding</Link> (jusqu&apos;a 20 comptes)
            </li>
            <li>
              <strong>Trader Forex francophone</strong> →{" "}
              <Link href="/prop-firm/ftmo/">FTMO</Link> (support FR, fiabilite)
            </li>
            <li>
              <strong>Trader qui veut drawdown statique</strong> →{" "}
              <Link href="/prop-firm/bulenox/">Bulenox</Link> ou{" "}
              <Link href="/prop-firm/take-profit-trader/">Take Profit Trader</Link>
            </li>
            <li>
              <strong>Trader confirme qui vise gros comptes (1M USD)</strong> →{" "}
              <Link href="/prop-firm/e8-funding/">E8 Funding</Link>
            </li>
          </ul>

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
              Apprendre a passer les prop firms
            </h3>
            <p
              style={{
                opacity: 0.7,
                marginBottom: 24,
                maxWidth: 540,
                margin: "0 auto 24px",
              }}
            >
              Methode institutionnelle Market Profile + Order Flow + Footprint
              — la lecture exacte des marches utilisee par les traders pros
              pour passer les evaluations FTMO, Topstep, Apex.
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
