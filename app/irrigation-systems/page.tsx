// File path: app/irrigation-systems/page.tsx
// Clean URL: https://www.boreholeworks.co.za/irrigation-systems
// Note: source images already carry their own watermark, so no Borehole Works
// watermark badge is applied here, unlike other service pages.

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CallButton, WhatsAppCta, StickyCallBar, HeroPhoneLink, BigPhoneLink, RequestQuoteLink } from "@/components/service-cta"
import { ImageMarquee } from "@/components/image-marquee"
import { PHONE_DISPLAY } from "@/components/contact-info"

export const metadata: Metadata = {
  title: "Irrigation Systems Gauteng | Farm & Garden Drip Irrigation",
  description:
    "Irrigation system design and installation in Pretoria, Johannesburg, Midrand and Centurion. Drip irrigation for farms, smallholdings and gardens, fed from your borehole. Call 072 411 5472 or WhatsApp for a free assessment.",
  keywords:
    "irrigation systems Gauteng, drip irrigation installation Pretoria, farm irrigation Johannesburg, borehole irrigation system, smallholding irrigation Midrand, garden irrigation Centurion",
  alternates: {
    canonical: "https://www.boreholeworks.co.za/irrigation-systems",
  },
  openGraph: {
    title: "Irrigation Systems Gauteng | Borehole Works",
    description:
      "Drip irrigation for farms, smallholdings and gardens, fed directly from your borehole. Sized and installed across Gauteng. Call 072 411 5472.",
    images: [
      {
        url: "/large_scale_drip_irrigation_farm.jpg",
        width: 1200,
        height: 630,
        alt: "Large scale drip irrigation farm system in Gauteng",
      },
    ],
  },
}

const benefits = [
  {
    title: "Fed straight from your borehole",
    description:
      "No dependency on municipal water pressure or supply interruptions, your irrigation runs off your own water source.",
  },
  {
    title: "Water where it's needed, not wasted",
    description:
      "Drip lines deliver water directly to the root zone, cutting waste compared to sprinklers or hand watering.",
  },
  {
    title: "Sized to your land, not a generic kit",
    description:
      "Row spacing, crop type and your borehole's yield all factor into the design, so pressure and flow are right across the whole area.",
  },
  {
    title: "Scales from garden to full farm",
    description:
      "The same drip principles work for a home vegetable patch or a multi-hectare planting, just at different scale.",
  },
]

const jobs = [
  {
    title: "Farm drip irrigation",
    image: "/large_scale_drip_irrigation_farm.jpg",
    alt: "Large scale drip irrigation farm system in Gauteng",
    copy: "Multi-row drip line installation feeding an entire planting area, laid out for even coverage across the field.",
  },
  {
    title: "Workers checking irrigation lines",
    image: "/farm_workers_drip_irrigation.jpg",
    alt: "Farm workers walking through a drip irrigated field",
    copy: "Drip lines run alongside young plantings, giving consistent watering as crops establish and grow.",
  },
  {
    title: "Crops under drip irrigation",
    image: "/farmers_cultivating_drip_irrigated_crops.jpg",
    alt: "Farmers cultivating crops under drip irrigation",
    copy: "Established rows thriving under a properly designed drip system, cutting labour on manual watering.",
  },
  {
    title: "Young crops, early-stage irrigation",
    image: "/young_crops_drip_irrigation.jpg",
    alt: "Young crops growing under drip irrigation",
    copy: "Getting the water delivery right from the earliest growth stage, when consistent moisture matters most.",
  },
]

const marqueeImages = [
  { src: "/large_scale_drip_irrigation_farm.jpg", alt: "Large scale drip irrigation farm" },
  { src: "/farm_workers_drip_irrigation.jpg", alt: "Farm workers in a drip irrigated field" },
  { src: "/farmers_cultivating_drip_irrigated_crops.jpg", alt: "Farmers cultivating drip irrigated crops" },
  { src: "/young_crops_drip_irrigation.jpg", alt: "Young crops under drip irrigation" },
]

const areas = [
  "Pretoria", "Centurion", "Midrand", "Johannesburg", "Sandton",
  "Randburg", "Fourways", "Rosebank", "Bedfordview", "Roodepoort",
]

const faqs = [
  {
    q: "Can irrigation run directly off my borehole?",
    a: "Yes, in most cases. We check your borehole's yield and pressure first to confirm it can support the irrigation area, and size the pump and lines accordingly.",
  },
  {
    q: "Is drip irrigation only for farms, or does it work for a home garden too?",
    a: "It works at any scale. The same drip-line principle applies whether it's a few garden beds or several hectares, just with different pipe layout and pump sizing.",
  },
  {
    q: "How much water does drip irrigation actually save?",
    a: "Significantly more than sprinklers or hand watering, since water goes straight to the root zone instead of evaporating off leaves or running off the surface.",
  },
  {
    q: "Do you design the layout, or do I need to plan the rows myself?",
    a: "We handle the layout as part of the installation, working from your existing planting rows or garden beds and your borehole's location and yield.",
  },
  {
    q: "What maintenance does a drip system need?",
    a: "Periodic checks for blocked emitters and line damage, which we can talk you through, or handle as a scheduled callout if you'd rather not deal with it yourself.",
  },
]

export default function IrrigationSystemsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="/large_scale_drip_irrigation_farm.jpg"
          alt="Large scale drip irrigation farm system in Gauteng - Borehole Works"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/70 to-black/40" aria-hidden="true" />

        <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-28">
          <div className="max-w-2xl text-white">
            <p className="mb-4 inline-flex items-center rounded-full bg-accent/20 px-4 py-1.5 text-sm font-semibold text-white ring-1 ring-inset ring-accent/50">
              Fed straight from your own borehole
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Irrigation systems across Gauteng
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">
              Drip irrigation for farms, smallholdings and gardens, designed around your land and powered
              by your borehole. No wasted water, no guesswork on layout.
            </p>

            <HeroPhoneLink label="Speak to an irrigation specialist now" />

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <CallButton size="lg" />
              <WhatsAppCta size="lg" label="WhatsApp us about your land" />
              <RequestQuoteLink />
            </div>

            <ul className="mt-10 grid gap-3 text-sm text-white/85 sm:grid-cols-3">
              <li>Fed from your borehole</li>
              <li>Designed to your land, not a kit</li>
              <li>Farms, smallholdings & gardens</li>
            </ul>
          </div>
        </div>
      </section>

      {/* MOVING IMAGE STRIP - no watermark, source images already carry one */}
      <section className="bg-muted py-10">
        <ImageMarquee images={marqueeImages} name="irrigation" direction="left" speed={38} />
      </section>

      {/* BENEFITS */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold lg:text-4xl">Why drip irrigation off your borehole</h2>
            <p className="mt-4 text-muted-foreground">
              Independent water, delivered where your crops or garden actually need it.
            </p>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => (
              <div key={item.title}>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO, WITH REAL PHOTOS - no watermark badge on these */}
      <section className="bg-muted py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold lg:text-4xl">Irrigation systems we've installed</h2>
            <p className="mt-4 text-muted-foreground">
              Real installations across farms and properties in Gauteng.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {jobs.map((job) => (
              <article key={job.title} className="overflow-hidden rounded-2xl border border-border bg-card">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={job.image}
                    alt={job.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold">{job.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{job.copy}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <CallButton size="md" />
            <WhatsAppCta size="md" label="Send us your property details" />
          </div>
        </div>
      </section>

      {/* INTERNAL LINKING */}
      <section className="border-y border-border py-14">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-bold">Building a complete water system?</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <Link href="/borehole-drilling" className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent">
              <h3 className="font-bold">Borehole drilling</h3>
              <p className="mt-1 text-sm text-muted-foreground">Need a water source before irrigation?</p>
            </Link>
            <Link href="/pump-installation-repairs" className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent">
              <h3 className="font-bold">Pump installation & repairs</h3>
              <p className="mt-1 text-sm text-muted-foreground">Sized to feed your irrigation lines.</p>
            </Link>
            <Link href="/solar-borehole-pumps" className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent">
              <h3 className="font-bold">Solar borehole pumps</h3>
              <p className="mt-1 text-sm text-muted-foreground">Off-grid power for remote fields.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="bg-muted py-14">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-bold">Where we install</h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {areas.map((area) => (
              <li key={area} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium">
                {area}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">
            Not on the list? Call {PHONE_DISPLAY} and we'll tell you straight away whether we cover you.
          </p>
        </div>
      </section>

      {/* FAQ PREVIEW - links to full FAQ page */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto max-w-3xl px-4 lg:px-8">
          <h2 className="text-3xl font-bold">Questions about irrigation</h2>
          <div className="mt-8 divide-y divide-border">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="cursor-pointer list-none text-lg font-semibold marker:hidden">
                  {faq.q}
                </summary>
                <p className="mt-3 leading-relaxed text-muted-foreground">{faq.a}</p>
              </details>
            ))}
          </div>
          <Link href="/faq#general" className="mt-6 inline-block text-sm font-semibold text-accent hover:underline">
            See all FAQs →
          </Link>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h2 className="text-3xl font-bold lg:text-4xl">Ready to get your land properly watered?</h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Call now for a free assessment, or send us your property details on WhatsApp.
          </p>
          <BigPhoneLink />
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <CallButton size="lg" />
            <WhatsAppCta size="lg" label="WhatsApp us" />
          </div>
        </div>
      </section>

      <div className="h-20 md:hidden" aria-hidden="true" />
      <StickyCallBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://www.boreholeworks.co.za/irrigation-systems#service",
            name: "Irrigation Systems",
            serviceType: "Drip irrigation system design and installation",
            provider: {
              "@type": "LocalBusiness",
              name: "Borehole Works",
              telephone: "+27-72-411-5472",
              image: "https://www.boreholeworks.co.za/large_scale_drip_irrigation_farm.jpg",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Johannesburg",
                addressRegion: "Gauteng",
                addressCountry: "ZA",
              },
            },
            areaServed: areas.map((a) => ({ "@type": "City", name: a })),
            url: "https://www.boreholeworks.co.za/irrigation-systems",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />
    </>
  )
}
