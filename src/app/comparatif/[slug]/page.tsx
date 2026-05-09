import { notFound } from "next/navigation";
import Link from "next/link";
import { generateSeoMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/lib/jsonld";
import { comparatifs, getComparatifBySlug } from "@/content/comparatifs/_data";
import FAQ from "@/components/FAQ";

export function generateStaticParams() {
  return comparatifs.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getComparatifBySlug(slug);
  if (!c) return {};
  return generateSeoMetadata({
    title: c.metaTitle,
    description: c.metaDescription,
    path: `/comparatif/${c.slug}/`,
  });
}

const Check = () => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 22,
      height: 22,
      background: "#15A848",
      color: "#fff",
      borderRadius: "50%",
      flexShrink: 0,
      marginRight: 12,
      marginTop: 2,
    }}
  >
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ width: 12, height: 12 }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  </span>
);

export default async function ComparatifPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getComparatifBySlug(slug);
  if (!c) notFound();

  const others = comparatifs.filter((o) => o.slug !== c.slug).slice(0, 4);

  const faq = [
    {
      question: `${c.leftName} ou ${c.rightName} : lequel est le moins cher ?`,
      answer: `Le moins cher depend du modele tarifaire. ${c.rows.find((r) => r.criterion.toLowerCase().includes("frais"))?.left || ""} chez ${c.leftName} vs ${c.rows.find((r) => r.criterion.toLowerCase().includes("frais"))?.right || ""} chez ${c.rightName}. Voir le tableau comparatif ci-dessus pour les details.`,
    },
    {
      question: `${c.leftName} ou ${c.rightName} : pour les eleves BASS Trading ?`,
      answer:
        c.verdict.includes("Topstep") || c.verdict.includes("BASS")
          ? c.verdict
          : `Pour les eleves BASS Trading qui appliquent la methode Market Profile + Order Flow sur Futures CME, ${c.rightName.includes("Topstep") || c.rightName.includes("Apex") || c.rightName.includes("Bulenox") || c.rightName.includes("MFFU") ? c.rightName : c.leftName} est generalement preferable. Voir le verdict complet.`,
    },
    {
      question: `${c.leftName} et ${c.rightName} sont-ils fiables pour les paiements ?`,
      answer: `${c.leftName} ${c.rows.find((r) => r.criterion.toLowerCase().includes("track"))?.left || "a un track record solide"}. ${c.rightName} ${c.rows.find((r) => r.criterion.toLowerCase().includes("track"))?.right || "a un track record en construction"}. Verifie toujours les avis Trustpilot recents avant de t'engager.`,
    },
    {
      question: `Peut-on combiner ${c.leftName} et ${c.rightName} ?`,
      answer: `Oui. Beaucoup de traders professionnels utilisent plusieurs prop firms en parallele pour diversifier le risque et multiplier les profits. Strategie courante : un compte ${c.leftName} pour la stabilite, plusieurs comptes ${c.rightName} pour scaler.`,
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Comparatifs", url: "/comparatif/" },
          { name: c.title },
        ]}
      />

      <section className="blog-hero">
        <div className="blog-hero-inner">
          <nav className="breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span className="sep">/</span>
            <Link href="/comparatif/">Comparatifs</Link>
            <span className="sep">/</span>
            <span>{c.title}</span>
          </nav>
          <div className="blog-hero-cat">Comparatif</div>
          <h1 className="blog-hero-title">{c.title}</h1>
          <p className="blog-hero-desc">{c.intro}</p>
        </div>
      </section>

      <div className="article-wrap">
        <article className="article-body" style={{ margin: "0 auto" }}>
          <h2>Tableau comparatif {c.leftName} vs {c.rightName}</h2>
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
                  <th style={{ padding: 14, textAlign: "left" }}>Critere</th>
                  <th style={{ padding: 14, textAlign: "left" }}>{c.leftName}</th>
                  <th style={{ padding: 14, textAlign: "left" }}>{c.rightName}</th>
                </tr>
              </thead>
              <tbody>
                {c.rows.map((r, i) => (
                  <tr key={i} style={{ borderTop: "1px solid rgba(0,0,0,.08)" }}>
                    <td style={{ padding: 12, fontWeight: 600 }}>{r.criterion}</td>
                    <td style={{ padding: 12 }}>{r.left}</td>
                    <td style={{ padding: 12 }}>{r.right}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 24,
              marginBottom: 32,
            }}
          >
            <div
              style={{
                padding: 24,
                background: "rgba(21,168,72,.08)",
                borderRadius: 12,
                borderLeft: "4px solid #15A848",
              }}
            >
              <h3 style={{ marginTop: 0 }}>Pourquoi choisir {c.leftName}</h3>
              <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                {c.leftWins.map((w, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      marginBottom: 12,
                      lineHeight: 1.5,
                      fontSize: 14,
                    }}
                  >
                    <Check />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              style={{
                padding: 24,
                background: "rgba(21,168,72,.08)",
                borderRadius: 12,
                borderLeft: "4px solid #15A848",
              }}
            >
              <h3 style={{ marginTop: 0 }}>Pourquoi choisir {c.rightName}</h3>
              <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                {c.rightWins.map((w, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      marginBottom: 12,
                      lineHeight: 1.5,
                      fontSize: 14,
                    }}
                  >
                    <Check />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h2>{c.leftName} : pour qui ?</h2>
          <p>{c.leftBestFor}</p>

          <h2>{c.rightName} : pour qui ?</h2>
          <p>{c.rightBestFor}</p>

          <h2>Verdict {c.leftName} vs {c.rightName}</h2>
          <div
            style={{
              padding: 24,
              background: "rgba(255,184,0,.08)",
              borderLeft: "4px solid #FFB800",
              borderRadius: 8,
              marginBottom: 32,
            }}
          >
            <p style={{ margin: 0, lineHeight: 1.6, fontSize: 17 }}>{c.verdict}</p>
          </div>

          {(c.leftSlug || c.rightSlug) && (
            <>
              <h2>Lire les avis complets</h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: 16,
                  marginBottom: 32,
                }}
              >
                {c.leftSlug && (
                  <Link
                    href={`/prop-firm/${c.leftSlug}/`}
                    style={{
                      padding: 20,
                      background: "rgba(0,0,0,.03)",
                      borderRadius: 12,
                      textDecoration: "none",
                      color: "inherit",
                      display: "block",
                    }}
                  >
                    <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>
                      Avis complet {c.leftName} →
                    </div>
                    <div style={{ fontSize: 13, opacity: 0.7 }}>
                      Pros, cons, evaluation, payouts, conseils BASS
                    </div>
                  </Link>
                )}
                {c.rightSlug && (
                  <Link
                    href={`/prop-firm/${c.rightSlug}/`}
                    style={{
                      padding: 20,
                      background: "rgba(0,0,0,.03)",
                      borderRadius: 12,
                      textDecoration: "none",
                      color: "inherit",
                      display: "block",
                    }}
                  >
                    <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>
                      Avis complet {c.rightName} →
                    </div>
                    <div style={{ fontSize: 13, opacity: 0.7 }}>
                      Pros, cons, evaluation, payouts, conseils BASS
                    </div>
                  </Link>
                )}
              </div>
            </>
          )}

          <FAQ items={faq} />

          <h2>Autres comparatifs</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 16,
              marginBottom: 48,
            }}
          >
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/comparatif/${o.slug}/`}
                style={{
                  padding: 20,
                  background: "rgba(0,0,0,.03)",
                  borderRadius: 12,
                  textDecoration: "none",
                  color: "inherit",
                  display: "block",
                }}
              >
                <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>
                  {o.title}
                </div>
                <div style={{ fontSize: 13, opacity: 0.7 }}>{o.hero}</div>
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
              Apprendre la methode pour passer ces prop firms
            </h3>
            <p
              style={{
                opacity: 0.7,
                marginBottom: 24,
                maxWidth: 540,
                margin: "0 auto 24px",
              }}
            >
              Methode Market Profile + Order Flow + Footprint — la lecture
              structurelle des marches qui te permet de comprendre la
              mecanique avant de passer en prop firm.
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
