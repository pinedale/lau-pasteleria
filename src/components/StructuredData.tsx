import { site } from "@/lib/site";

const bakery = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  "@id": `${site.url}/#bakery`,
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: `+${site.whatsapp}`,
  image: [
    `${site.url}/images/hero-torta-cumpleanos.webp`,
    `${site.url}/images/torta-personalizada-dos-pisos.webp`,
  ],
  sameAs: [site.instagram],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Barranquilla",
    addressRegion: "Atlántico",
    addressCountry: "CO",
  },
  areaServed: site.deliveryAreas.map((city) => ({ "@type": "City", name: city })),
  founder: { "@type": "Person", name: "Laura" },
  servesCuisine: ["Pastelería", "Postres", "Pasabocas"],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(bakery).replace(/</g, "\\u003c"),
      }}
    />
  );
}