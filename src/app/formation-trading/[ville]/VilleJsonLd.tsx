import { SITE } from "@/lib/constants";

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function VilleJsonLd({
  ville,
  region,
}: {
  ville: string;
  region: string;
}) {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: `BASS Trading — Formation a ${ville}`,
          description: `Formation trading presentiel a ${ville} avec Sebastien Constant. Market Profile, Order Flow, Gamma. 8 places max.`,
          url: `${SITE.url}/formation-trading/${ville.toLowerCase()}/`,
          address: {
            "@type": "PostalAddress",
            addressLocality: ville,
            addressRegion: region,
            addressCountry: "FR",
          },
          areaServed: {
            "@type": "City",
            name: ville,
          },
          parentOrganization: {
            "@type": "Organization",
            name: SITE.name,
            url: SITE.url,
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Course",
          name: `Formation Trading Presentiel ${ville} — BASS`,
          description: `Formation trading intensive a ${ville}. Market Profile, Order Flow, Gamma, CVD, Tape Reading. 8 participants max. Eligible CPF.`,
          provider: {
            "@type": "Organization",
            name: SITE.name,
            url: SITE.url,
          },
          educationalCredentialAwarded: "Certificat EMSCA",
          inLanguage: "fr-FR",
          hasCourseInstance: {
            "@type": "CourseInstance",
            courseMode: "onsite",
            location: {
              "@type": "Place",
              name: `${ville}, France`,
              address: {
                "@type": "PostalAddress",
                addressLocality: ville,
                addressRegion: region,
                addressCountry: "FR",
              },
            },
            instructor: {
              "@type": "Person",
              name: SITE.author.name,
            },
          },
          offers: {
            "@type": "Offer",
            category: "Paid",
            priceCurrency: "EUR",
            availability: "https://schema.org/LimitedAvailability",
            url: `${SITE.url}/formation-trading/${ville.toLowerCase()}/`,
            eligibleRegion: {
              "@type": "Country",
              name: "FR",
            },
          },
        }}
      />
    </>
  );
}
