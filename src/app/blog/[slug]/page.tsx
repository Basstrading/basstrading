import { notFound } from "next/navigation";
import { articles } from "@/content/blog/_meta";
import { generateSeoMetadata } from "@/lib/seo";
import { ArticleJsonLd, FaqJsonLd, BreadcrumbJsonLd } from "@/lib/jsonld";
import { SITE } from "@/lib/constants";
import BlogHero from "@/components/BlogHero";
import BlogTOC from "@/components/BlogTOC";
import ReadingProgress from "@/components/ReadingProgress";
import Preloader from "@/components/Preloader";
import CTACard from "@/components/CTACard";
import FAQ from "@/components/FAQ";
import RelatedArticles from "@/components/RelatedArticles";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};

  return generateSeoMetadata({
    title: article.title,
    description: article.description,
    path: `/blog/${article.slug}/`,
    type: "article",
    publishedTime: article.datePublished,
    modifiedTime: article.dateModified,
  });
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  let Content: React.ComponentType;
  try {
    Content = (await import(`@/content/blog/${slug}`)).default;
  } catch {
    notFound();
  }

  return (
    <>
      <Preloader />
      <ReadingProgress />
      <ArticleJsonLd
        title={article.title}
        description={article.description}
        url={`${SITE.url}/blog/${article.slug}/`}
        datePublished={article.datePublished}
        dateModified={article.dateModified}
        keywords={article.keywords}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog/" },
          { name: article.breadcrumbLabel },
        ]}
      />
      <FaqJsonLd items={article.faq} />

      <BlogHero
        category={article.category}
        title={article.heroTitle}
        description={article.ogDescription}
        date={article.datePublished}
        readingTime={article.readingTime}
        breadcrumbLabel={article.breadcrumbLabel}
      />

      <div className="article-wrap">
        <aside className="article-sidebar">
          <BlogTOC items={article.toc} />
        </aside>
        <article className="article-body">
          <Content />
          <CTACard />
        </article>
      </div>

      <FAQ items={article.faq} />
      <RelatedArticles slugs={article.related} />
    </>
  );
}
