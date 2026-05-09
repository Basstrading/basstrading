import { SITE } from "./constants";

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: SITE.name,
        url: SITE.url,
        logo: {
          "@type": "ImageObject",
          url: SITE.logo,
          width: "512",
          height: "512",
        },
        description: SITE.description,
        founder: {
          "@type": "Person",
          name: SITE.author.name,
          jobTitle: SITE.author.jobTitle,
          description:
            "Trader depuis plus de 10 ans, specialiste Market Profile, Order Flow et Footprint. Createur de x-trade.ai. Formateur certifie via EMSCA (Qualiopi).",
        },
        sameAs: [
          "https://hubtrading.fr",
          "https://x-trade.ai",
          "https://fr.trustpilot.com/review/basstrading.fr",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          email: SITE.email,
          contactType: "customer service",
          areaServed: "FR",
          availableLanguage: ["French"],
        },
      }}
    />
  );
}

export function CourseJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Course",
        name: "Mentorat Trading BASS — Market Profile, Order Flow, Footprint",
        description:
          "Formation de 70 heures en 12 modules : Market Profile, Footprint, CVD, Tape Reading, Options, Market Makers, Live Trading quotidien. Certifiee Qualiopi via EMSCA. Eligible CPF. 10 places max par session.",
        provider: {
          "@type": "Organization",
          name: SITE.name,
          url: SITE.url,
        },
        educationalCredentialAwarded: "Certificat de Competences EMSCA",
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: ["onsite", "online"],
          location: {
            "@type": "Place",
            name: "Malaga, Espagne / Region parisienne / En ligne",
          },
          instructor: {
            "@type": "Person",
            name: SITE.author.name,
          },
        },
        numberOfCredits: "70",
        timeRequired: "PT70H",
        inLanguage: "fr-FR",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "126",
          bestRating: "5",
          worstRating: "1",
        },
        review: [
          {
            "@type": "Review",
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
            },
            author: { "@type": "Person", name: "Laurent Ouanich" },
            reviewBody:
              "La qualite de l'enseignement de Bass est remarquable et remarquee. Un stage intensif et immersif en Market Profile pour progresser dans une ambiance incroyable.",
            datePublished: "2025-11-12",
          },
          {
            "@type": "Review",
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
            },
            author: { "@type": "Person", name: "Lorton" },
            reviewBody:
              "Bon pedagogue, fort d'avoir etabli une belle communaute. Un reel merite a son apprentissage et une grande reconnaissance de ses eleves envers lui.",
            datePublished: "2025-12-03",
          },
          {
            "@type": "Review",
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
            },
            author: { "@type": "Person", name: "Va Fr" },
            reviewBody:
              "Tres bon formateur et tres bonne personne, bienveillant. Je recommande sa formation pour completer ses connaissances en bourse ou meme pour commencer.",
            datePublished: "2026-01-18",
          },
        ],
      }}
    />
  );
}

interface ArticleMeta {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  keywords: string[];
}

export function ArticleJsonLd(article: ArticleMeta) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: article.title,
        description: article.description,
        author: {
          "@type": "Person",
          name: SITE.author.name,
          jobTitle: SITE.author.jobTitle,
          url: SITE.author.url,
        },
        publisher: {
          "@type": "Organization",
          name: SITE.name,
          url: SITE.url,
          logo: { "@type": "ImageObject", url: SITE.logo },
        },
        datePublished: article.datePublished,
        dateModified: article.dateModified,
        mainEntityOfPage: { "@type": "WebPage", "@id": article.url },
        keywords: article.keywords,
      }}
    />
  );
}

interface FaqItem {
  question: string;
  answer: string;
}

export function FaqJsonLd({ items }: { items: FaqItem[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }}
    />
  );
}

interface BreadcrumbItem {
  name: string;
  url?: string;
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          ...(item.url && { item: `${SITE.url}${item.url}` }),
        })),
      }}
    />
  );
}

export function CollectionPageJsonLd({
  name,
  description,
  url,
  articleUrls,
}: {
  name: string;
  description: string;
  url: string;
  articleUrls: string[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name,
        description,
        url: `${SITE.url}${url}`,
        publisher: {
          "@type": "Organization",
          name: SITE.name,
          url: SITE.url,
        },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: articleUrls.map((articleUrl, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${SITE.url}${articleUrl}`,
          })),
        },
      }}
    />
  );
}

interface DefinedTermMeta {
  name: string;
  description: string;
  url: string;
  termCode?: string; // acronyme
  inDefinedTermSet?: string; // url du set parent
}

export function DefinedTermJsonLd(term: DefinedTermMeta) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "DefinedTerm",
        name: term.name,
        description: term.description,
        url: term.url.startsWith("http") ? term.url : `${SITE.url}${term.url}`,
        ...(term.termCode && { termCode: term.termCode }),
        ...(term.inDefinedTermSet && {
          inDefinedTermSet: term.inDefinedTermSet.startsWith("http")
            ? term.inDefinedTermSet
            : `${SITE.url}${term.inDefinedTermSet}`,
        }),
        inLanguage: "fr-FR",
      }}
    />
  );
}

interface DefinedTermSetMeta {
  name: string;
  description: string;
  url: string;
  hasDefinedTerms: { name: string; url: string; termCode?: string }[];
}

export function DefinedTermSetJsonLd(set: DefinedTermSetMeta) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "DefinedTermSet",
        name: set.name,
        description: set.description,
        url: `${SITE.url}${set.url}`,
        inLanguage: "fr-FR",
        hasDefinedTerm: set.hasDefinedTerms.map((t) => ({
          "@type": "DefinedTerm",
          name: t.name,
          url: `${SITE.url}${t.url}`,
          ...(t.termCode && { termCode: t.termCode }),
        })),
      }}
    />
  );
}

interface PersonMeta {
  name: string;
  jobTitle: string;
  description: string;
  url: string;
  image: string;
  sameAs?: string[];
  knowsAbout?: string[];
}

export function PersonJsonLd(person: PersonMeta) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Person",
        name: person.name,
        jobTitle: person.jobTitle,
        description: person.description,
        url: person.url.startsWith("http") ? person.url : `${SITE.url}${person.url}`,
        image: person.image.startsWith("http") ? person.image : `${SITE.url}${person.image}`,
        worksFor: {
          "@type": "Organization",
          name: SITE.name,
          url: SITE.url,
        },
        ...(person.knowsAbout && { knowsAbout: person.knowsAbout }),
        ...(person.sameAs && { sameAs: person.sameAs }),
      }}
    />
  );
}

export function EventJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "EducationEvent",
        name: "Seminaire Trading Malaga — BASS Trading",
        description:
          "5 jours intensifs a Malaga avec Sebastien Constant. Market Profile, Order Flow, Footprint, live trading. 20 places max.",
        startDate: "2026-09-28",
        endDate: "2026-10-02",
        eventAttendanceMode:
          "https://schema.org/OfflineEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        location: {
          "@type": "Place",
          name: "Malaga, Espagne",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Malaga",
            addressCountry: "ES",
          },
        },
        organizer: {
          "@type": "Organization",
          name: SITE.name,
          url: SITE.url,
        },
        performer: {
          "@type": "Person",
          name: SITE.author.name,
        },
        offers: {
          "@type": "Offer",
          name: "Seminaire Trading Malaga — 5 jours intensifs",
          price: "1490",
          priceCurrency: "EUR",
          availability: "https://schema.org/LimitedAvailability",
          validFrom: "2026-05-02",
          url: "https://basstrading.fr/malaga/",
          category: "EducationEvent",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "126",
          bestRating: "5",
          worstRating: "1",
        },
        review: [
          {
            "@type": "Review",
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
            },
            author: { "@type": "Person", name: "Laurent Ouanich" },
            reviewBody:
              "Un stage intensif et immersif a Malaga en Market Profile entre les mains de Bass pour progresser et continuer l'apprentissage dans une ambiance incroyable. La qualite de l'enseignement de Bass est remarquable et remarquee.",
          },
          {
            "@type": "Review",
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
            },
            author: { "@type": "Person", name: "Lorton" },
            reviewBody:
              "Nous avons pu rencontrer Bass au seminaire a Malaga. Bass est une personne fort sympathique et bon pedagogue, fort d'avoir etabli une belle communaute. Nous avons pu ressentir un reel merite a son apprentissage.",
          },
          {
            "@type": "Review",
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
            },
            author: { "@type": "Person", name: "Va Fr" },
            reviewBody:
              "Rencontre a un seminaire, Bass est un tres bon formateur et une tres bonne personne, bienveillant. Je vous recommande sa formation pour completer vos connaissances en bourse.",
          },
        ],
      }}
    />
  );
}
