import type { Metadata } from "next"
import Link from "next/link"
import { HeroPhoneLink } from "@/components/service-cta"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AreaPhoto } from "@/components/service-area/area-photo"
import { AreaCallDesk, AreaStickyCall } from "@/components/service-area/area-call-desk"
import { JsonLd } from "@/components/service-area/area-schema"
import { SERVICE_AREAS, SITE_URL, BUSINESS_ID, areaUrl } from "@/lib/service-areas"

const url = `${SITE_URL}/service-areas`

export const metadata: Metadata = {
  title: "Service Areas: Boreholes, Pumps & Plumbing Across Gauteng",
  description:
    "Borehole Works covers Pretoria, Centurion, Midrand, Johannesburg, Sandton, Fourways, Randburg, Rosebank, Morningside, Roodepoort and Bedfordview. Local advice for each area. Call 072 411 5472.",
  keywords: [
    "borehole drilling Gauteng",
    "plumber Gauteng service areas",
    "JoJo tanks Johannesburg Pretoria",
    "pump repairs Gauteng",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Where Borehole Works operates in Gauteng",
    description: "Eleven areas across Tshwane, Johannesburg and Ekurhuleni, each with its own water story.",
    url,
    type: "website",
    locale: "en_ZA",
    images: [{ url: "/borehole_drilling_rig_action.webp", alt: "Borehole Works drilling rig on site in Gauteng" }],
  },
}

const metros = ["City of Tshwane", "City of Johannesburg", "City of Ekurhuleni"] as const

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${url}#webpage`,
      url,
      name: "Borehole Works service areas in Gauteng",
      inLanguage: "en-ZA",
      about: { "@id": BUSINESS_ID },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: SERVICE_AREAS.map((a, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: `Borehole Works in ${a.name}`,
          url: areaUrl(a.slug),
        })),
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": BUSINESS_ID,
      name: "Borehole Works",
      url: SITE_URL,
      areaServed: SERVICE_AREAS.map((a) => ({
        "@type": "Place",
        name: a.name,
        geo: { "@type": "GeoCoordinates", latitude: a.geo.lat, longitude: a.geo.lng },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Service Areas", item: url },
      ],
    },
  ],
}

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd data={schema} />

      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 pb-16 pt-10 lg:px-8 lg:pb-24 lg:pt-14">
          <nav aria-label="Breadcrumb" className="area-rise">
            <ol className="flex items-center gap-2 text-sm text-primary-foreground/55">
              <li>
                <Link href="/" className="hover:text-primary-foreground">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-primary-foreground">Service areas</li>
            </ol>
          </nav>
          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="area-rise text-xs font-semibold uppercase tracking-[0.22em] text-accent" style={{ animationDelay: "80ms" }}>
                Tshwane / Johannesburg / Ekurhuleni
              </p>
              <h1
                className="area-rise mt-4 text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl"
                style={{ animationDelay: "160ms" }}
              >
                Eleven areas. Eleven different water problems.
              </h1>
            </div>
            <div className="area-rise lg:col-span-4" style={{ animationDelay: "280ms" }}>
              <p className="leading-relaxed text-primary-foreground/75">
                Dolomite in Centurion, old pipes in Parkhurst, estate rules in Fourways, plots in Kyalami. Pick your area to
                see what we usually find there and how we deal with it.
              </p>
              <HeroPhoneLink label="Not sure which area you fall under? Call" />
            </div>
          </div>
        </div>
      </section>

      {metros.map((metro, mi) => {
        const areas = SERVICE_AREAS.filter((a) => a.municipality === metro)
        return (
          <section key={metro} aria-labelledby={`metro-${mi}`} className={mi % 2 === 0 ? "bg-background" : "bg-muted"}>
            <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-24">
              <ScrollReveal>
                <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  <span className="tabular-nums text-accent">{String(mi + 1).padStart(2, "0")}</span>
                  <span className="h-px w-8 bg-border" aria-hidden="true" />
                  {areas.length} {areas.length === 1 ? "area" : "areas"}
                </p>
                <h2 id={`metro-${mi}`} className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                  {metro}
                </h2>
              </ScrollReveal>

              <ul className="mt-10 border-t border-foreground/15">
                {areas.map((a, i) => (
                  <li key={a.slug} className="border-b border-foreground/15">
                    <ScrollReveal delay={i * 60}>
                      <Link
                        href={`/service-areas/${a.slug}`}
                        className="group grid items-center gap-6 py-6 md:grid-cols-12 md:gap-8 md:py-8"
                      >
                        <AreaPhoto
                          src={a.heroPhotos[0]}
                          areaName={a.name}
                          sizes="(min-width: 768px) 16vw, 100vw"
                          className="aspect-[16/10] rounded-xl md:col-span-2 md:aspect-square"
                          imageClassName="transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="md:col-span-4">
                          <span className="block text-3xl font-bold tracking-tight transition-colors group-hover:text-accent lg:text-4xl">
                            {a.name}
                          </span>
                          <span className="mt-1 block text-sm text-muted-foreground">{a.suburbs.slice(0, 4).join(", ")}</span>
                        </div>
                        <p className="leading-relaxed text-muted-foreground md:col-span-4">{a.character}</p>
                        <span className="text-sm font-semibold md:col-span-2 md:text-right">
                          <span className="border-b-2 border-accent pb-1 transition-colors group-hover:text-accent">
                            {a.facts.find((f) => f.label === "Most asked for")?.value ?? "View area"}
                          </span>
                        </span>
                      </Link>
                    </ScrollReveal>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )
      })}

      <AreaCallDesk areaName="Gauteng" places={SERVICE_AREAS.map((a) => a.name)} placeLabel="Your area" />
      <div className="h-20 md:hidden" aria-hidden="true" />
      <AreaStickyCall areaName="Gauteng" />
    </>
  )
}
