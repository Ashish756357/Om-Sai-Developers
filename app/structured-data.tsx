import { siteOrigin } from "@/lib/site";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteOrigin}/#organization`,
      name: "Om Sai Developers",
      url: siteOrigin,
      logo: `${siteOrigin}/om-sai-developers-logo.jpg`,
      telephone: ["+919699657121", "+918483857121"],
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
