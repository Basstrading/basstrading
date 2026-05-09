import Link from "next/link";
import { generateSeoMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd, CollectionPageJsonLd } from "@/lib/jsonld";
import { cours } from "@/content/cours/_data";

export const metadata = generateSeoMetadata({
  title: "Cours Trading Institutionnel : Liquidite, Footprint, Risk Management | BASS Trading",
  description:
    "Cours pedagogiques structures sur le trading institutionnel : liquidite des marches, lecture du carnet d'ordres, footprint mastery, psychologie pro, risk management. 5 cours par Sebastien Constant.",
  path: "/cours/",
});

export default function CoursHubPage() {
  const categories = [...new Set(cours.map((c) => c.category))];

  return (
    <>
      <CollectionPageJsonLd
        name="Cours Trading Institutionnel"
        description="Cours pedagogiques structures sur le trading institutionnel : liquidite, footprint, risk management, psychologie."
        url="/cours/"
        articleUrls={cours.map((c) => `/cours/${c.slug}/`)}
      />
      <BreadcrumbJsonLd
        items={[{ name: "Accueil", url: "/" }, { name: "Cours" }]}
      />

      <section className="blog-hero">
        <div className="blog-hero-inner">
          <nav className="breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span className="sep">/</span>
            <span>Cours</span>
          </nav>
          <div className="blog-hero-cat">Pedagogie</div>
          <h1 className="blog-hero-title">
            Cours trading institutionnel.<br />
            Pedagogie structuree.
          </h1>
          <p className="blog-hero-desc">
            5 cours pedagogiques structures en lecons numerotees, par
            Sebastien Constant — pour apprendre le trading institutionnel
            avec rigueur et profondeur. Pas de blabla, pas de recettes
            miracles. Des concepts, des outils, des protocoles applicables
            des demain.
          </p>
        </div>
      </section>

      <div className="article-wrap">
        <article className="article-body" style={{ margin: "0 auto" }}>
          <h2>Pourquoi des cours plutot que des articles ?</h2>
          <p>
            Un article de blog est une lecture isolee. Un cours est un{" "}
            <strong>parcours pedagogique</strong> avec progression, prerequis,
            objectifs clairs, et integration des concepts. Pour les sujets
            techniques du trading institutionnel (liquidite, footprint, risk
            management), le format cours apporte plus de valeur — tu construis
            une comprehension structuree, pas juste une accumulation de notes.
          </p>

          <p>
            Chaque cours est compose de 6-7 lecons de 8-12 minutes chacune,
            avec un takeaway resume a la fin de chaque lecon. Format optimal
            pour absorber les concepts sans surcharge cognitive.
          </p>

          {categories.map((cat) => (
            <div key={cat} style={{ marginBottom: 48 }}>
              <h2 style={{ marginBottom: 20 }}>{cat}</h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: 16,
                }}
              >
                {cours
                  .filter((c) => c.category === cat)
                  .map((c) => (
                    <Link
                      key={c.slug}
                      href={`/cours/${c.slug}/`}
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
                          display: "flex",
                          gap: 8,
                          marginBottom: 12,
                          flexWrap: "wrap",
                        }}
                      >
                        <span
                          style={{
                            padding: "4px 10px",
                            background: "rgba(255,184,0,.15)",
                            color: "#8B6500",
                            borderRadius: 100,
                            fontSize: 11,
                            fontWeight: 700,
                            letterSpacing: 0.5,
                            textTransform: "uppercase",
                          }}
                        >
                          {c.niveau}
                        </span>
                        <span
                          style={{
                            padding: "4px 10px",
                            background: "rgba(0,0,0,.06)",
                            borderRadius: 100,
                            fontSize: 11,
                            fontWeight: 600,
                            opacity: 0.7,
                          }}
                        >
                          {c.lecons.length} lecons
                        </span>
                      </div>
                      <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 8, lineHeight: 1.3 }}>
                        {c.title}
                      </div>
                      <div style={{ fontSize: 14, opacity: 0.7, lineHeight: 1.5, marginBottom: 12 }}>
                        {c.intro.slice(0, 160)}…
                      </div>
                      <div style={{ fontSize: 13, opacity: 0.6 }}>
                        {c.duree}
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
              Pour aller au-dela des cours
            </h3>
            <p
              style={{
                opacity: 0.7,
                marginBottom: 24,
                maxWidth: 540,
                margin: "0 auto 24px",
              }}
            >
              Le mentorat BASS Trading approfondit chaque concept en
              sessions live trading quotidiennes avec Sebastien — 70 heures
              de cursus, 10 places maximum, certifie Qualiopi.
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
