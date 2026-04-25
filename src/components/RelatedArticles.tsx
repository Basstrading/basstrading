import Link from "next/link";
import { articles } from "@/content/blog/_meta";

export default function RelatedArticles({ slugs }: { slugs: string[] }) {
  const related = slugs
    .map((slug) => articles.find((a) => a.slug === slug))
    .filter(Boolean);

  if (related.length === 0) return null;

  return (
    <section className="related-sec">
      <div className="sec-center">
        <div className="sec-label">Continuer la lecture</div>
        <h2 className="sec-title">Articles connexes</h2>
      </div>
      <div className="related-grid">
        {related.map((a) => (
          <Link
            key={a!.slug}
            href={`/blog/${a!.slug}/`}
            className="related-card"
          >
            <div className="related-cat">{a!.category}</div>
            <h3>{a!.title}</h3>
            <p>{a!.shortDescription}</p>
            <span className="related-link">Lire &rarr;</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
