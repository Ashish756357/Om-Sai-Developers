import { siteOrigin } from "@/lib/site";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RealEstateAgent",
      "@id": `${siteOrigin}/#organization`,
      name: "Om Sai Developers",
      url: siteOrigin,
      logo: `${siteOrigin}/om-sai-developers-logo.jpg`,
      telephone: ["+919699657121", "+918483857121"],
      areaServed: [
        { "@type": "Place", name: "Nargoli, Dapoli" },
        { "@type": "AdministrativeArea", name: "Ratnagiri, Maharashtra" },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nargoli, Dapoli",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteOrigin}/#website`,
      name: "Om Sai Developers",
      url: siteOrigin,
      publisher: { "@id": `${siteOrigin}/#organization` },
      inLanguage: "en-IN",
    },
    {
      "@type": "WebPage",
      "@id": `${siteOrigin}/#webpage`,
      name: "Om Sai Developers | Township Plots in Nargoli, Dapoli",
      url: siteOrigin,
      isPartOf: { "@id": `${siteOrigin}/#website` },
      about: { "@id": `${siteOrigin}/#organization` },
      description:
        "Explore 10-acre township plots in Nargoli, Dapoli, from 3,000 sq. ft. at ₹750 per sq. ft., 210 km from Pune and 230 km from Mumbai.",
      inLanguage: "en-IN",
    },
    {
      "@type": "FAQPage",
      "@id": `${siteOrigin}/#faq`,
      url: `${siteOrigin}/#faq`,
      isPartOf: { "@id": `${siteOrigin}/#website` },
      mainEntity: [
        {
          "@type": "Question",
          name: "Where are the township plots located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The plotted township is located in Nargoli, Dapoli, District Ratnagiri, Maharashtra.",
          },
        },
        {
          "@type": "Question",
          name: "What is the minimum plot size?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The minimum plot size is 3,000 sq. ft. Buyers should confirm current availability and plot details with the Om Sai Developers team.",
          },
        },
        {
          "@type": "Question",
          name: "What is the quoted plot rate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The displayed reference rate is ₹750 per sq. ft. Registration, taxes, development charges and availability can affect the final amount.",
          },
        },
        {
          "@type": "Question",
          name: "How can I arrange a site visit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Call 9699657121 or 8483857121 to ask about availability and coordinate a site visit.",
          },
        },
      ],
    },
  ],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
