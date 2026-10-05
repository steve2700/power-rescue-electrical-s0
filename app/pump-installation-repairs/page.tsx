// File path: app/pump-installation-repairs/page.tsx
// Clean URL: https://www.boreholeworks.co.za/pump-installation-repairs

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CallButton, WhatsAppCta, StickyCallBar, HeroPhoneLink, BigPhoneLink, RequestQuoteLink } from "@/components/service-cta"
import { WatermarkedImage } from "@/components/watermarked-image"
import { ImageMarquee } from "@/components/image-marquee"
import { PHONE_DISPLAY } from "@/components/contact-info"

export const metadata: Metadata = {
  title: "Pump Installation & Repairs Gauteng | Submersible & Borehole",
  description:
    "Pump supply, installation and repairs in Pretoria, Johannesburg, Midrand and Centurion. Submersible, borehole and pressure pumps, all types and brands. Call 072 411 5472 or WhatsApp for a same-day quote.",
  keywords:
    "pump installation Gauteng, pump repairs Pretoria, submersible pump installation, borehole pump repairs Johannesburg, pressure pump repairs, water pump supply Midrand, pump breakdown repair Centurion",
  alternates: {
    canonical: "https://www.boreholeworks.co.za/pump-installation-repairs",
  },
  openGraph: {
    title: "Pump Installation & Repairs Gauteng | Borehole Works",
    description:
      "Submersible, borehole and pressure pumps, supplied, installed and repaired across Gauteng. Call 072 411 5472.",
    images: [
      {
        url: "/pump_installation_hero.jpg",
        width: 1200,
        height: 630,
        alt: "Pump installation and repairs by Borehole Works in Gauteng",
      },
    ],
  },
}

const jobs = [
  {
    title: "Submersible pump installation",
    image: "/water_pump_installation.jpg",
    alt: "Submersible water pump being installed in Gauteng",
    copy: "Correctly sized and wired for your borehole or tank, with a pressure test before we call the job done.",
  },
  {
    title: "Borehole pump systems",
    image: "/pump_systems_boreholes.jpg",
    alt: "Borehole pump system installed and wired in Gauteng",
    copy: "New borehole pump installs or a full system swap, matched to your borehole's yield so you're not over- or under-pumping.",
  },
  {
    title: "Pressure pump repairs",
    image: "/pressure_pumps_installations.jpg",
    alt: "Plumber repairing a pressure pump system",
    copy: "Cycling on and off, losing pressure, or gone silent altogether. We diagnose the actual fault before quoting a fix.",
  },
  {
    title: "Pump breakdown & replacement",
    image: "/pump_supply_replacements.jpg",
    alt: "Water pump breakdown repair and replacement",
    copy: "Burnt-out motor, seized bearing, or a pump that's simply run its life. We tell you honestly whether it's worth repairing or replacing.",
  },
  {
    title: "Tank & storage pump installation",
    image: "/pump_tank_storage_installation.jpg",
    alt: "Pump installed for a water storage tank system",
    copy: "Pump and pressure controller sized to your tank and household demand, plumbed into your existing supply.",
  },
  {
    title: "Borehole-to-tank pump systems",
    image: "/borehole_pump_water_tank_installation.jpg",
    alt: "Borehole pump system feeding a water storage tank",
    copy: "Borehole pump feeding a JoJo or storage tank, wired and plumbed as one working system, not two separate jobs bolted together.",
  },
]

const marqueeImages = [
  { src: "/pump_installation_hero.jpg", alt: "Pump installation in Gauteng" },
  { src: "/pump_system_installation.webp", alt: "Pump system installation" },
  { src: "/water-pump-tank-pipes-green.webp", alt: "Pump and tank pipework" },
  { src: "/water-pump-tank-pipes-green-controls.webp", alt: "Pump control system" },
  { src: "/pump_systems_boreholes.jpg", alt: "Borehole pump system" },
]

const areas = [
  "Pretoria", "Centurion", "Midrand", "Johannesburg", "Sandton",
  "Randburg", "Fourways", "Rosebank", "Bedfordview", "Roodepoort",
]

const faqs = [
  {
    q: "Do you repair pumps you didn't install yourselves?",
    a: "Yes. Most of our pump callouts are repairs on systems someone else installed. We diagnose the fault first, then tell you honestly whether it's a repair or a replacement, no matter who fitted it originally.",
  },
  {
    q: "What types of pumps do you work on?",
    a: "Submersible, borehole, pressure and booster pumps, across most major brands. If it moves water around your property, we can very likely repair or install it.",
  },
  {
    q: "My borehole pump has stopped working. What's usually wrong?",
    a: "Most commonly a burnt-out motor, a dropped or damaged cable, or the pump has simply run dry because the borehole yield dropped. We test on site rather than guessing before we quote.",
  },
  {
    q: "Do you supply new pumps, or only install pumps I've bought myself?",
    a: "Both. We can supply and install a new pump sized correctly for your borehole or tank, or install a pump you've already bought, we just size the pressure controller and wiring to match it either way.",
  },
  {
    q: "How do you decide whether to repair or replace a pump?",
    a: "Age, the specific fault, and cost of parts against a new unit. If a repair genuinely makes sense we'll say so and do it. We don't push a replacement when a repair will do the job for years to come.",
  },
]

export default function PumpInstallationRepairsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="/pump_installation_hero.jpg"
          alt="Pump installation and repairs by Borehole Works in Gauteng"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/70 to-black/40" aria-hidden="true" />

        <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-28">
          <div className="max-w-2xl text-white">
            <p className="mb-4 inline-flex items-center rounded-full bg-accent/20 px-4 py-1.5 text-sm font-semibold text-white ring-1 ring-inset ring-accent/50">
              Repairs, installs & breakdowns, all pump types
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Pump installation and repairs across Gauteng
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">
              Submersible, borehole or pressure pump, not moving water the way it should. Tell us what's
              happening and we'll tell you honestly whether it needs a repair or a new pump.
            </p>

            <HeroPhoneLink label="Speak to a pump technician now" />

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <CallButton size="lg" />
              <WhatsAppCta size="lg" label="WhatsApp us a photo" />
              <RequestQuoteLink />
            </div>

            <ul className="mt-10 grid gap-3 text-sm text-white/85 sm:grid-cols-3">
              <li>Repairs & new installs</li>
              <li>Submersible & borehole specialists</li>
              <li>Itemised quote before work starts</li>
            </ul>
          </div>
        </div>
      </section>

      {/* MOVING IMAGE STRIP */}
      <section className="bg-muted py-10">
        <ImageMarquee images={marqueeImages} name="pumps" direction="right" speed={38} />
      </section>

      {/* WHAT WE DO, WITH REAL PHOTOS */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold lg:text-4xl">Pump work we do every week</h2>
            <p className="mt-4 text-muted-foreground">
              Real installs and repairs from jobs across Pretoria, Centurion, Midrand and Johannesburg.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job) => (
              <article key={job.title} className="overflow-hidden rounded-2xl border border-border bg-card">
                <WatermarkedImage src={job.image} alt={job.alt} className="aspect-[4/3]" />
                <div className="p-6">
                  <h3 className="text-xl font-bold">{job.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{job.copy}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <CallButton size="md" />
            <WhatsAppCta size="md" label="Send us a photo on WhatsApp" />
          </div>
        </div>
      </section>

      {/* INTERNAL LINKING */}
      <section className="border-y border-border bg-muted py-14">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-bold">Looking for something else?</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <Link href="/borehole-drilling" className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent">
              <h3 className="font-bold">Borehole drilling</h3>
              <p className="mt-1 text-sm text-muted-foreground">Need a new borehole before a pump?</p>
            </Link>
            <Link href="/solar-borehole-pumps" className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent">
              <h3 className="font-bold">Solar borehole pumps</h3>
              <p className="mt-1 text-sm text-muted-foreground">Off-grid pumping powered by solar.</p>
            </Link>
            <Link href="/jojo-water-tank-installation" className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent">
              <h3 className="font-bold">JoJo water tank installation</h3>
              <p className="mt-1 text-sm text-muted-foreground">Stand, plumbing and pump, in one visit.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* PROOF AND PROCESS */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold lg:text-4xl">Why people call us for a pump job</h2>
            <dl className="mt-8 space-y-6">
              <div>
                <dt className="font-bold">We diagnose before we quote</dt>
                <dd className="mt-1 text-muted-foreground">
                  A pump fault isn't always what it looks like. We test on site before recommending a repair
                  or a replacement, so you're not paying for a new pump you didn't need.
                </dd>
              </div>
              <div>
                <dt className="font-bold">Repairs and installs, not just one</dt>
                <dd className="mt-1 text-muted-foreground">
                  Plenty of installers won't touch a pump they didn't fit. We service what we didn't sell,
                  same as we do with geysers.
                </dd>
              </div>
              <div>
                <dt className="font-bold">Sized to your actual system</dt>
                <dd className="mt-1 text-muted-foreground">
                  Borehole yield, tank capacity, household demand, all factored in before we recommend a
                  pump, not a generic one-size-fits-all unit.
                </dd>
              </div>
              <div>
                <dt className="font-bold">Honest pricing, itemised</dt>
                <dd className="mt-1 text-muted-foreground">
                  Estimate on the phone, itemised quote once we've seen the pump, and nothing starts until
                  you approve it.
                </dd>
              </div>
            </dl>
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-2xl">
            <WatermarkedImage
              src="/water_pump_services.jpg"
              alt="Borehole Works pump technician servicing a water pump in Gauteng"
              className="h-full"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="bg-muted py-14">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-bold">Where we work</h2>
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
          <h2 className="text-3xl font-bold">Questions we get asked first</h2>
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
          <h2 className="text-3xl font-bold lg:text-4xl">Pump not working? Let's get it sorted.</h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Call now for an honest repair-or-replace answer, or send us a photo on WhatsApp and we'll tell
            you what it needs.
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
            "@id": "https://www.boreholeworks.co.za/pump-installation-repairs#service",
            name: "Pump Installation & Repairs",
            serviceType: "Water pump installation and repair",
            provider: {
              "@type": "LocalBusiness",
              name: "Borehole Works",
              telephone: "+27-72-411-5472",
              image: "https://www.boreholeworks.co.za/pump_installation_hero.jpg",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Johannesburg",
                addressRegion: "Gauteng",
                addressCountry: "ZA",
              },
            },
            areaServed: areas.map((a) => ({ "@type": "City", name: a })),
            url: "https://www.boreholeworks.co.za/pump-installation-repairs",
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
