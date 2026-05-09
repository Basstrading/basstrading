import { notFound } from "next/navigation";
import Link from "next/link";
import { generateSeoMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/lib/jsonld";
import { propFirms, getPropFirmBySlug } from "@/content/prop-firms/_data";
import { SITE } from "@/lib/constants";
import FAQ from "@/components/FAQ";

export function generateStaticParams() {
  return propFirms.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getPropFirmBySlug(slug);
  if (!p) return {};
  return generateSeoMetadata({
    title: `${p.name} : Avis Complet 2026 — Frais, Profit Split, Payout (Verdict Honnete)`,
    description: `Avis detaille ${p.name} 2026 : frais d'evaluation ${p.evaluationFee}, profit split ${p.profitSplit}, max funding ${p.maxFunding}. Pros, cons, verdict honnete par Sebastien Constant — methode institutionnelle Market Profile + Order Flow.`,
    path: `/prop-firm/${p.slug}/`,
  });
}

const Star = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    style={{ width: 16, height: 16, color: "#FFB800" }}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

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

const Cross = () => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 22,
      height: 22,
      background: "#E03434",
      color: "#fff",
      borderRadius: "50%",
      flexShrink: 0,
      marginRight: 12,
      marginTop: 2,
    }}
  >
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ width: 12, height: 12 }}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  </span>
);

export default async function PropFirmPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getPropFirmBySlug(slug);
  if (!p) notFound();

  const others = propFirms.filter((o) => o.slug !== p.slug).slice(0, 4);

  const faq = [
    {
      question: `${p.name} est-elle fiable pour les traders francais ?`,
      answer: `${p.name} ${p.shortName === "FTMO" ? "est l'une des prop firms les plus fiables pour les Francais grace a son support francophone et sa stabilite depuis 2015" : `est utilisee par des traders francais. Fondee en ${p.founded}, basee a ${p.headquarters}. Verifie toujours les avis Trustpilot recents avant de t'engager`}.`,
    },
    {
      question: `Combien coute l'evaluation ${p.name} ?`,
      answer: `L'evaluation ${p.name} coute ${p.evaluationFee}. ${p.shortName === "Topstep" ? "C'est un abonnement mensuel (pas one-time)." : "C'est un paiement unique (pas mensuel)."} Des promotions reduisent regulierement ce tarif de 20-50 %.`,
    },
    {
      question: `Quel est le profit split de ${p.name} ?`,
      answer: `Le profit split ${p.name} est ${p.profitSplit}. ${p.bestFor.split(".")[0]}.`,
    },
    {
      question: `${p.name} permet-elle de trader avec la methode BASS Trading ?`,
      answer: `Oui. La methode BASS (Market Profile, Order Flow, Footprint) s'applique parfaitement a ${p.name} ${p.shortName === "Topstep" || p.shortName === "Apex" || p.shortName === "Bulenox" || p.shortName === "MFFU" || p.shortName === "Fast Track" || p.shortName === "TPT" ? "puisque la prop firm est specialisee Futures CME (ES, NQ, GC, CL) — exactement les marches sur lesquels la methode est la plus efficace" : "sur les indices CFD (NAS100, US30) avec une approche structurelle"}.`,
    },
    {
      question: `Quel est le delai de paiement chez ${p.name} ?`,
      answer: `${p.payout} ${p.shortName === "FTMO" ? "Les paiements FTMO sont reputes parmi les plus rapides et fiables du marche." : ""}`,
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Prop Firms", url: "/prop-firm/" },
          { name: p.name },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Review",
            itemReviewed: {
              "@type": "Organization",
              name: p.name,
              foundingDate: p.founded,
              foundingLocation: p.headquarters,
            },
            reviewRating: {
              "@type": "Rating",
              ratingValue: p.ratingValue,
              bestRating: 5,
              worstRating: 1,
            },
            author: {
              "@type": "Person",
              name: SITE.author.name,
              url: `${SITE.url}/sebastien-constant/`,
            },
            publisher: {
              "@type": "Organization",
              name: SITE.name,
              url: SITE.url,
            },
            reviewBody: p.verdict,
          }),
        }}
      />

      <section className="blog-hero">
        <div className="blog-hero-inner">
          <nav className="breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span className="sep">/</span>
            <Link href="/prop-firm/">Prop Firms</Link>
            <span className="sep">/</span>
            <span>{p.name}</span>
          </nav>
          <div className="blog-hero-cat">Avis prop firm</div>
          <h1 className="blog-hero-title">
            {p.name} : avis complet.<br />
            Verdict honnete 2026.
          </h1>
          <p className="blog-hero-desc">{p.intro}</p>
          <div
            style={{
              display: "flex",
              gap: 4,
              marginTop: 24,
              alignItems: "center",
            }}
          >
            <Star />
            <Star />
            <Star />
            <Star />
            {p.ratingValue >= 4.5 && <Star />}
            <span style={{ marginLeft: 12, fontWeight: 600 }}>
              {p.rating} — Note BASS Trading
            </span>
          </div>
        </div>
      </section>

      <div className="article-wrap">
        <article className="article-body" style={{ margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 16,
              padding: 24,
              background: "rgba(0,0,0,.03)",
              borderRadius: 12,
              marginBottom: 32,
            }}
          >
            <div>
              <div style={{ fontSize: 12, opacity: 0.6, textTransform: "uppercase", letterSpacing: 1 }}>Fondee</div>
              <div style={{ fontSize: 18, fontWeight: 600, marginTop: 4 }}>{p.founded}</div>
            </div>
            <div>
              <div style={{ fontSize: 12, opacity: 0.6, textTransform: "uppercase", letterSpacing: 1 }}>Siege</div>
              <div style={{ fontSize: 18, fontWeight: 600, marginTop: 4 }}>{p.headquarters}</div>
            </div>
            <div>
              <div style={{ fontSize: 12, opacity: 0.6, textTransform: "uppercase", letterSpacing: 1 }}>Frais eval</div>
              <div style={{ fontSize: 18, fontWeight: 600, marginTop: 4 }}>{p.evaluationFee}</div>
            </div>
            <div>
              <div style={{ fontSize: 12, opacity: 0.6, textTransform: "uppercase", letterSpacing: 1 }}>Profit split</div>
              <div style={{ fontSize: 18, fontWeight: 600, marginTop: 4 }}>{p.profitSplit}</div>
            </div>
            <div>
              <div style={{ fontSize: 12, opacity: 0.6, textTransform: "uppercase", letterSpacing: 1 }}>Max funding</div>
              <div style={{ fontSize: 18, fontWeight: 600, marginTop: 4 }}>{p.maxFunding}</div>
            </div>
          </div>

          <h2>Les avantages de {p.name}</h2>
          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            {p.pros.map((pro, i) => (
              <li key={i} style={{ display: "flex", alignItems: "flex-start", marginBottom: 14, lineHeight: 1.5 }}>
                <Check />
                <span>{pro}</span>
              </li>
            ))}
          </ul>

          <h2>Les inconvenients de {p.name}</h2>
          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            {p.cons.map((con, i) => (
              <li key={i} style={{ display: "flex", alignItems: "flex-start", marginBottom: 14, lineHeight: 1.5 }}>
                <Cross />
                <span>{con}</span>
              </li>
            ))}
          </ul>

          <h2>L&apos;evaluation {p.name} : comment ca marche</h2>
          <p>{p.evaluation}</p>

          <h2>Les payouts {p.name}</h2>
          <p>{p.payout}</p>

          <h2>Pour qui {p.name} est-elle ideale ?</h2>
          <p>{p.bestFor}</p>

          <h2>Verdict {p.name}</h2>
          <p>{p.verdict}</p>

          <h2>Conseil BASS Trading sur {p.name}</h2>
          <div
            style={{
              padding: 24,
              background: "rgba(255,184,0,.08)",
              borderLeft: "4px solid #FFB800",
              borderRadius: 8,
              marginBottom: 32,
            }}
          >
            <p style={{ margin: 0, lineHeight: 1.6 }}>{p.basssAdvice}</p>
          </div>

          <FAQ items={faq} />

          <h2>Autres prop firms a comparer</h2>
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
                href={`/prop-firm/${o.slug}/`}
                style={{
                  padding: 20,
                  background: "rgba(0,0,0,.03)",
                  borderRadius: 12,
                  textDecoration: "none",
                  color: "inherit",
                  display: "block",
                }}
              >
                <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>
                  {o.name}
                </div>
                <div style={{ fontSize: 13, opacity: 0.7 }}>{o.rating} — {o.maxFunding}</div>
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
              Apprendre la methode qui passe les prop firms
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
              institutionnelle qui te permet de comprendre la structure du
              marche et de passer les evaluations en condition reelle.
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
