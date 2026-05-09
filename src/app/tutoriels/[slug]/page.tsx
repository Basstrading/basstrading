import { notFound } from "next/navigation";
import Link from "next/link";
import { generateSeoMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/lib/jsonld";
import { tutoriels, getTutorielBySlug } from "@/content/tutoriels/_data";
import { SITE } from "@/lib/constants";
import FAQ from "@/components/FAQ";

export function generateStaticParams() {
  return tutoriels.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const t = getTutorielBySlug(slug);
  if (!t) return {};
  return generateSeoMetadata({
    title: t.metaTitle,
    description: t.metaDescription,
    path: `/tutoriels/${t.slug}/`,
  });
}

export default async function TutorielPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const t = getTutorielBySlug(slug);
  if (!t) notFound();

  const related = (t.related || [])
    .map((s) => tutoriels.find((x) => x.slug === s))
    .filter(Boolean);

  return (
    <>
      <FaqJsonLd items={t.faq} />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Tutoriels", url: "/tutoriels/" },
          { name: t.title },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: t.title,
            description: t.metaDescription,
            author: {
              "@type": "Person",
              name: SITE.author.name,
              url: `${SITE.url}/sebastien-constant/`,
            },
            step: t.steps.map((s, i) => ({
              "@type": "HowToStep",
              position: i + 1,
              name: s.title,
              text: s.content,
            })),
          }),
        }}
      />

      <section className="blog-hero">
        <div className="blog-hero-inner">
          <nav className="breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span className="sep">/</span>
            <Link href="/tutoriels/">Tutoriels</Link>
            <span className="sep">/</span>
            <span>{t.title}</span>
          </nav>
          <div className="blog-hero-cat">{t.category}</div>
          <h1 className="blog-hero-title">{t.title}</h1>
          <p className="blog-hero-desc">{t.intro}</p>
        </div>
      </section>

      <div className="article-wrap">
        <article className="article-body" style={{ margin: "0 auto" }}>
          <h2>Le tutoriel etape par etape</h2>
          {t.steps.map((step, i) => (
            <div key={i} style={{ marginBottom: 32 }}>
              <h3
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 12,
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 36,
                    height: 36,
                    background: "var(--gold)",
                    color: "var(--ink)",
                    borderRadius: "50%",
                    fontSize: 16,
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  {i + 1}
                </span>
                {step.title}
              </h3>
              <p style={{ lineHeight: 1.65, marginLeft: 48 }}>{step.content}</p>
            </div>
          ))}

          <h2>Conseils du formateur</h2>
          <ul>
            {t.tips.map((tip, i) => (
              <li key={i} style={{ marginBottom: 8, lineHeight: 1.5 }}>
                {tip}
              </li>
            ))}
          </ul>

          <FAQ items={t.faq} />

          {related.length > 0 && (
            <>
              <h2>Tutoriels lies</h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: 16,
                  marginBottom: 48,
                }}
              >
                {related.map(
                  (r) =>
                    r && (
                      <Link
                        key={r.slug}
                        href={`/tutoriels/${r.slug}/`}
                        style={{
                          padding: 20,
                          background: "rgba(0,0,0,.03)",
                          borderRadius: 12,
                          textDecoration: "none",
                          color: "inherit",
                          display: "block",
                        }}
                      >
                        <div
                          style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}
                        >
                          {r.title}
                        </div>
                        <div style={{ fontSize: 13, opacity: 0.7 }}>{r.category}</div>
                      </Link>
                    )
                )}
              </div>
            </>
          )}

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
              Apprendre la methode complete avec Sebastien
            </h3>
            <p
              style={{
                opacity: 0.7,
                marginBottom: 24,
                maxWidth: 540,
                margin: "0 auto 24px",
              }}
            >
              Le mentorat BASS Trading enseigne en profondeur Sierra Chart,
              Market Profile, Order Flow et Footprint — avec un accompagnement
              individuel et du live trading quotidien.
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
