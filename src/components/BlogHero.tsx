import Link from "next/link";
import Image from "next/image";

interface BlogHeroProps {
  category: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  breadcrumbLabel: string;
}

export default function BlogHero({
  category,
  title,
  description,
  date,
  readingTime,
  breadcrumbLabel,
}: BlogHeroProps) {
  return (
    <section className="blog-hero">
      <div className="blog-hero-inner">
        <nav className="breadcrumb" aria-label="Fil d'Ariane">
          <Link href="/">Accueil</Link>
          <span className="sep">/</span>
          <Link href="/blog/">Blog</Link>
          <span className="sep">/</span>
          <span>{breadcrumbLabel}</span>
        </nav>
        <div className="blog-hero-cat">{category}</div>
        <h1
          className="blog-hero-title"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p className="blog-hero-desc">{description}</p>
        <div className="blog-meta">
          <div className="blog-meta-author">
            <div className="blog-meta-avatar">
              <Image
                src="/images/bass-presenting.jpg"
                alt="Sebastien Constant"
                width={36}
                height={36}
              />
            </div>
            <div>
              <div className="blog-meta-name">Sebastien Constant</div>
              <div className="blog-meta-role">Trader &amp; Formateur</div>
            </div>
          </div>
          <div className="blog-meta-sep" />
          <div className="blog-meta-info">
            <span>{date}</span>
            <span>{readingTime}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
