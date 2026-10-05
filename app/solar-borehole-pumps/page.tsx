// File path: app/solar-borehole-pumps/page.tsx
// Clean URL: https://www.boreholeworks.co.za/solar-borehole-pumps

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CallButton, WhatsAppCta, StickyCallBar, HeroPhoneLink, BigPhoneLink, RequestQuoteLink } from "@/components/service-cta"
import { WatermarkedImage } from "@/components/watermarked-image"
import { ImageMarquee } from "@/components/image-marquee"
import { PHONE_DISPLAY } from "@/components/contact-info"

export const metadata: Metadata = {
  title: "Solar Borehole Pumps Gauteng | Off-Grid Water Systems",
  description:
    "Solar-powered borehole pump installation in Pretoria, Johannesburg, Midrand and Centurion. Reliable off-grid water, unaffected by load shedding. Call 072 411 5472 or WhatsApp for a free assessment.",
  keywords:
    "solar borehole pumps Gauteng, solar water pump installation Pretoria, off-grid borehole pump Johannesburg, load shedding water solution, solar pump system Midrand, solar powered borehole Centurion",
  alternates: {
    canonical: "https://www.boreholeworks.co.za/solar-borehole-pumps",
  },
  openGraph: {
    title: "Solar Borehole Pumps Gauteng | Borehole Works",
    description:
      "Off-grid solar pump systems for boreholes, unaffected by load shedding. Sized and installed across Gauteng. Call 072 411 5472.",
    images: [
      {
        url: "/solar_borehole_pump_aerial_view.jpg",
        width: 1200,
        height: 630,
        alt: "Solar borehole pump installation in Gauteng - Borehole Works",
      },
    ],
  },
}

const benefits = [
  {
    title: "Unaffected by load shedding",
    description:
      "Your water supply keeps running during outages, since the pump draws power from the sun, not the grid.",
  },
  {
    title: "Lower running costs",
    description:
      "No electricity bill for pumping once the system is installed, just the sun doing the work every day.",
  },
  {
    title: "Sized to your borehole's yield",
    description:
      "We match panel capacity and pump size to your actual borehole yield and household or farm demand, not a generic package.",
  },
  {
    title: "Works for remote sites too",
    description:
      "No grid connection nearby? A solar system still gets water moving, ideal for farms, plots and remote properties.",
  },
]

const jobs = [
  {
    title: "Solar pump & tank system, aerial view",
    image: "/solar_borehole_pump_aerial_view.jpg",
    alt: "Aerial view of solar-powered borehole pump and water tank installation in Gauteng",
    copy: "Solar panel array powering a submersible pump feeding twin storage tanks, fully off-grid.",
  },
  {
    title: "Solar tank stand installation",
    image: "/solar_borehole_tank_installation.jpg",
    alt: "Solar-powered borehole tank stand installation in Gauteng",
    copy: "Panel-mounted stand structure carrying both the solar array and the storage tanks in one footprint.",
  },
  {
    title: "Solar geyser & water heating",
    image: "/solar_geyser_installation_pretoria.jpg",
    alt: "Solar geyser installation in Pretoria",
    copy: "Solar water heating paired with your borehole system, cutting electricity costs on both ends.",
  },
  {
    title: "Apollo solar geyser installation",
    image: "/apollo_solar_geyser_installation.jpg",
    alt: "Apollo solar geyser installation",
    copy: "Solar geyser installs done alongside pump work, so your whole water system runs off the sun.",
  },
]

const marqueeImages = [
  { src: "/solar_borehole_pump_aerial_view.jpg", alt: "Aerial view of solar borehole pump" },
  { src: "/solar_borehole_tank_installation.jpg", alt: "Solar-powered borehole tank installation" },
  { src: "/solar_geyser_installation_pretoria.jpg", alt: "Solar geyser installation" },
  { src: "/apollo_solar_geyser_installation.jpg", alt: "Apollo solar geyser installation" },
  { src: "/pump_systems_boreholes.jpg", alt: "Borehole pump system" },
]

const areas = [
  "Pretoria", "Centurion", "Midrand", "Johannesburg", "Sandton",
  "Randburg", "Fourways", "Rosebank", "Bedfordview", "Roodepoort",
]

const faqs = [
  {
    q: "Can a solar pump run without batteries?",
    a: "Yes, most solar borehole pumps run directly off the panels during daylight, pumping into a storage tank so you still have water at night or on cloudy days. Battery backup is available too if you need pumping after dark specifically.",
  },
  {
    q: "How many solar panels will I need?",
    a: "It depends on your pump size, borehole depth, and required daily water volume. We calculate this properly during your site assessment rather than selling you a generic panel count.",
  },
  {
    q: "Will a solar pump work on a cloudy or rainy day?",
    a: "It will pump at reduced capacity on overcast days, which is why we always size the storage tank to buffer a few days of lower output, so you're not without water the moment the sun isn't out.",
  },
  {
    q: "Is a solar pump system more expensive than a normal electric pump?",
    a: "The upfront cost is higher since panels are included, but there's no ongoing electricity cost for pumping and no exposure to load shedding. We'll give you the full cost comparison during your assessment.",
  },
  {
    q: "Can you convert my existing electric borehole pump to solar?",
    a: "In many cases yes, depending on the existing pump type and your borehole specs. We'll assess your current setup and tell you honestly whether a conversion or a new solar pump makes more sense.",
  },
]

export default function SolarBoreholePumpsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="/solar_borehole_pump_aerial_view.jpg"
          alt="Solar borehole pump installation in Gauteng - Borehole Works"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/70 to-black/40" aria-hidden="true" />

        <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-28">
          <div className="max-w-2xl text-white">
            <p className="mb-4 inline-flex items-center rounded-full bg-accent/20 px-4 py-1.5 text-sm font-semibold text-white ring-1 ring-inset ring-accent/50">
              Water that keeps running through load shedding
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Solar borehole pumps across Gauteng
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">
              Off-grid water pumping powered by the sun, sized to your borehole's actual yield and your
              household or farm's real demand, not a one-size-fits-all package.
            </p>

            <HeroPhoneLink label="Speak to a solar pump specialist now" />

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <CallButton size="lg" />
              <WhatsAppCta size="lg" label="WhatsApp us your borehole details" />
              <RequestQuoteLink />
            </div>

            <ul className="mt-10 grid gap-3 text-sm text-white/85 sm:grid-cols-3">
              <li>Unaffected by load shedding</li>
              <li>Sized to your borehole's yield</li>
              <li>Works for remote, off-grid sites</li>
            </ul>
          </div>
        </div>
      </section>

      {/* MOVING IMAGE STRIP */}
      <section className="bg-muted py-10">
        <ImageMarquee images={marqueeImages} name="solar" direction="right" speed={38} />
      </section>

      {/* BENEFITS */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold lg:text-4xl">Why go solar for your borehole pump</h2>
            <p className="mt-4 text-muted-foreground">
              Independent water, independent power, one less thing load shedding can take away from you.
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

      {/* WHAT WE DO, WITH REAL PHOTOS */}
      <section className="bg-muted py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold lg:text-4xl">Solar water systems we've installed</h2>
            <p className="mt-4 text-muted-foreground">
              Real installations from across Pretoria, Centurion, Midrand and Johannesburg.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {jobs.map((job) => (
              <article key={job.title} className="overflow-hidden rounded-2xl border border-border bg-card">
                <WatermarkedImage src={job.image} alt={job.alt} className="aspect-[4/3]" />
                <div className="p-6">
                  <h3 className="text-lg font-bold">{job.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{job.copy}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <CallButton size="md" />
            <WhatsAppCta size="md" label="Send us your borehole details" />
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
              <p className="mt-1 text-sm text-muted-foreground">Need a borehole before the solar pump?</p>
            </Link>
            <Link href="/pump-installation-repairs" className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent">
              <h3 className="font-bold">Pump installation & repairs</h3>
              <p className="mt-1 text-sm text-muted-foreground">Standard electric pump options too.</p>
            </Link>
            <Link href="/jojo-water-tank-installation" className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent">
              <h3 className="font-bold">Water tank installation</h3>
              <p className="mt-1 text-sm text-muted-foreground">Storage to buffer cloudy days.</p>
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
          <h2 className="text-3xl font-bold">Questions about solar pumps</h2>
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
          <Link href="/faq#pumps" className="mt-6 inline-block text-sm font-semibold text-accent hover:underline">
            See all borehole & pump FAQs →
          </Link>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h2 className="text-3xl font-bold lg:text-4xl">Ready for water that doesn't stop for load shedding?</h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Call now for a free assessment, or send us your borehole details on WhatsApp.
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
            "@id": "https://www.boreholeworks.co.za/solar-borehole-pumps#service",
            name: "Solar Borehole Pumps",
            serviceType: "Solar-powered water pump installation",
            provider: {
              "@type": "LocalBusiness",
              name: "Borehole Works",
              telephone: "+27-72-411-5472",
              image: "https://www.boreholeworks.co.za/solar_borehole_pump_aerial_view.jpg",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Johannesburg",
                addressRegion: "Gauteng",
                addressCountry: "ZA",
              },
            },
            areaServed: areas.map((a) => ({ "@type": "City", name: a })),
            url: "https://www.boreholeworks.co.za/solar-borehole-pumps",
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
