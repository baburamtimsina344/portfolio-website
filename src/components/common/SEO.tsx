import { SITE_CONFIG, GOOGLE_SCHOLAR_URL } from "@/data/profile";

export function SEO() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_CONFIG.name,
    jobTitle: "Academic Researcher",
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    email: SITE_CONFIG.emails,
    affiliation: {
      "@type": "Organization",
      name: SITE_CONFIG.institution,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kathmandu",
      addressCountry: "Nepal",
    },
    sameAs: [
      GOOGLE_SCHOLAR_URL,
      "https://www.researchgate.net/profile/Baburam-Timsina-3",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
