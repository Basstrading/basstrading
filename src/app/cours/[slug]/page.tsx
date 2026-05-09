import { notFound } from "next/navigation";
import Link from "next/link";
import { generateSeoMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/lib/jsonld";
import { cours, getCoursBySlug } from "@/content/cours/_data";
import { SITE } from "@/lib/constants";
import ReadingProgress from "@/components/ReadingProgress";

export function generateStaticParams() {
  return cours.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCoursBySlug(slug);
  if (!c) return {};
  return generateSeoMetadata({
    title: c.metaTitle,
    description: c.metaDescription,
    path: `/cours/${c.slug}/`,
  });
}

export default async function CoursPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCoursBySlug(slug);
  if (!c) notFound();

  const others = cours.filter((o) => o.slug !== c.slug).slice(0, 3);

  return (
    <>
      <ReadingProgress />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Cours", url: "/cours/" },
          { name: c.title },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: c.title,
            description: c.metaDescription,
            provider: {
              "@type": "Organization",
              name: SITE.name,
              url: SITE.url,
            },
            instructor: {
              "@type": "Person",
              name: SITE.author.name,
              url: `${SITE.url}/sebastien-constant/`,
            },
            educationalLevel: c.niveau,
            timeRequired: c.duree,
            inLanguage: "fr-FR",
            hasCourseInstance: {
              "@type": "CourseInstance",
              courseMode: "online",
              courseWorkload: c.duree,
            },
            syllabusSections: c.lecons.map((l) => ({
              "@type": "Syllabus",
              name: `Lecon ${l.number}: ${l.title}`,
              description: l.takeaway,
              timeRequired: l.duration,
            })),
          }),
        }}
      />

      <section className="blog-hero">
        <div className="blog-hero-inner">
          <nav className="breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span className="sep">/</span>
            <Link href="/cours/">Cours</Link>
            <span className="sep">/</span>
            <span>{c.title}</span>
          </nav>
          <div className="blog-hero-cat">{c.category}</div>
          <h1 className="blog-hero-title">{c.hero}</h1>
          <p className="blog-hero-desc">{c.intro}</p>
          <div
            style={{
              display: "flex",
              gap: 12,
              marginTop: 24,
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                padding: "6px 14px",
                background: "rgba(0,0,0,.06)",
                borderRadius: 100,
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              Niveau : {c.niveau}
            </span>
            <span
              style={{
                padding: "6px 14px",
                background: "rgba(0,0,0,.06)",
                borderRadius: 100,
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              {c.duree}
            </span>
            <span
              style={{
                padding: "6px 14px",
                background: "rgba(0,0,0,.06)",
                borderRadius: 100,
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              {c.lecons.length} lecons
            </span>
          </div>
        </div>
      </section>

      <div className="article-wrap">
        <article className="article-body" style={{ margin: "0 auto" }}>
          <h2>Prerequis</h2>
          <ul>
            {c.prerequis.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>

          <h2>Ce que tu vas apprendre</h2>
          <ul>
            {c.objectifs.map((o, i) => (
              <li key={i}>{o}</li>
            ))}
          </ul>

          <h2>Sommaire des lecons</h2>
          <div
            style={{
              display: "grid",
              gap: 12,
              marginBottom: 32,
            }}
          >
            {c.lecons.map((l) => (
              <a
                key={l.number}
                href={`#lecon-${l.number}`}
                style={{
                  padding: 16,
                  background: "rgba(0,0,0,.03)",
                  borderRadius: 8,
                  textDecoration: "none",
                  color: "inherit",
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
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
                    fontSize: 14,
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  {l.number}
                </span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 15 }}>{l.title}</div>
                  <div style={{ fontSize: 13, opacity: 0.6, marginTop: 2 }}>
                    {l.duration}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {c.lecons.map((l) => (
            <section
              key={l.number}
              id={`lecon-${l.number}`}
              style={{ marginBottom: 48, scrollMarginTop: 80 }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 8,
                }}
              >
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                    opacity: 0.5,
                  }}
                >
                  Lecon {l.number} · {l.duration}
                </span>
              </div>
              <h2 style={{ marginTop: 0 }}>{l.title}</h2>
              {l.content.split("\n\n").map((para, i) => (
                <p key={i} style={{ lineHeight: 1.7 }}>
                  {para}
                </p>
              ))}
              <div
                style={{
                  padding: 20,
                  background: "rgba(255,184,0,.08)",
                  borderLeft: "4px solid #FFB800",
                  borderRadius: 8,
                  marginTop: 16,
                  fontSize: 15,
                }}
              >
                <strong style={{ display: "block", marginBottom: 4, fontSize: 12, letterSpacing: 1.5, textTransform: "uppercase", opacity: 0.7 }}>
                  Retenir de la lecon
                </strong>
                {l.takeaway}
              </div>
            </section>
          ))}

          <h2>Conclusion du cours</h2>
          <p style={{ lineHeight: 1.7 }}>{c.conclusion}</p>

          <h2>Ressources complementaires</h2>
          <ul>
            {c.ressources.map((r, i) => (
              <li key={i}>
                <Link href={r.url}>{r.title}</Link>
              </li>
            ))}
          </ul>

          {others.length > 0 && (
            <>
              <h2>Autres cours</h2>
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
                    href={`/cours/${o.slug}/`}
                    style={{
                      padding: 20,
                      background: "rgba(0,0,0,.03)",
                      borderRadius: 12,
                      textDecoration: "none",
                      color: "inherit",
                      display: "block",
                    }}
                  >
                    <div style={{ fontSize: 12, opacity: 0.6, marginBottom: 4, textTransform: "uppercase", letterSpacing: 1 }}>
                      {o.category}
                    </div>
                    <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>
                      {o.title}
                    </div>
                    <div style={{ fontSize: 13, opacity: 0.7 }}>
                      {o.duree}
                    </div>
                  </Link>
                ))}
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
              Aller plus loin avec le mentorat
            </h3>
            <p
              style={{
                opacity: 0.7,
                marginBottom: 24,
                maxWidth: 540,
                margin: "0 auto 24px",
              }}
            >
              Le mentorat BASS Trading approfondit ces concepts en sessions
              live trading quotidiennes avec Sebastien Constant — 70 heures
              de cursus, 10 places maximum.
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
