import { PHONE_TEL } from "@/components/contact-info"
import {
  BUSINESS_ID,
  GALLERY,
  SERVICES,
  SITE_URL,
  areaUrl,
  type ServiceArea,
} from "@/lib/service-areas"

export function buildAreaSchema(area: ServiceArea) {
  const url = areaUrl(area.slug)
  const [primary] = area.heroPhotos

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: area.metaTitle,
        description: area.metaDescription,
        inLanguage: "en-ZA",
        isPartOf: { "@type": "WebSite", "@id": `${SITE_URL}#website`, url: SITE_URL, name: "Borehole Works" },
        primaryImageOfPage: { "@id": `${url}#primaryimage` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        about: { "@id": `${url}#service` },
      },
      {
        "@type": "ImageObject",
        "@id": `${url}#primaryimage`,
        url: `${SITE_URL}${primary}`,
        caption: GALLERY[primary].caption,
      },
      {
        "@type": "LocalBusiness",
        "@id": BUSINESS_ID,
        name: "Borehole Works",
        url: SITE_URL,
        telephone: PHONE_TEL,
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: `Borehole, pump and plumbing services in ${area.name}`,
        description: area.lede,
        serviceType: area.callouts.map((c) => SERVICES[c.service].name),
        provider: { "@id": BUSINESS_ID },
        image: area.heroPhotos.map((p) => `${SITE_URL}${p}`),
        areaServed: {
          "@type": "Place",
          name: area.name,
          geo: { "@type": "GeoCoordinates", latitude: area.geo.lat, longitude: area.geo.lng },
          containedInPlace: {
            "@type": "AdministrativeArea",
            name: area.municipality,
            containedInPlace: { "@type": "State", name: "Gauteng", containedInPlace: { "@type": "Country", name: "South Africa" } },
          },
          containsPlace: area.suburbs.map((s) => ({ "@type": "Place", name: s })),
        },
        availableChannel: {
          "@type": "ServiceChannel",
          servicePhone: {
            "@type": "ContactPoint",
            telephone: PHONE_TEL,
            contactType: "customer service",
            areaServed: area.name,
            availableLanguage: ["en", "af"],
          },
          serviceUrl: url,
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `Services in ${area.name}`,
          itemListElement: area.callouts.map((c) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: c.title,
              description: c.copy,
              url: `${SITE_URL}${SERVICES[c.service].href}`,
            },
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Service Areas", item: `${SITE_URL}/service-areas` },
          { "@type": "ListItem", position: 3, name: area.name, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: area.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  }
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  )
}
