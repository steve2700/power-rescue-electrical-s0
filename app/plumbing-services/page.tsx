// File path: app/plumbing-services/page.tsx
// Clean URL: https://www.boreholeworks.co.za/plumbing-services

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CallButton, WhatsAppCta, StickyCallBar, HeroPhoneLink, BigPhoneLink, RequestQuoteLink } from "@/components/service-cta"
import { WatermarkedImage } from "@/components/watermarked-image"
import { ImageMarquee } from "@/components/image-marquee"
import { PHONE_DISPLAY } from "@/components/contact-info"

export const metadata: Metadata = {
  title: "Plumber Gauteng | 24/7 Emergency Plumbing Pretoria & Joburg",
  description:
    "Licensed plumbers in Pretoria, Johannesburg, Midrand and Centurion. Burst pipes, blocked drains, leaks and geyser installation. 24/7 callouts. Call 072 411 5472 or WhatsApp for a same-day quote.",
  keywords:
    "plumber Gauteng, emergency plumber Pretoria, plumber Johannesburg, burst pipe repair, blocked drain cleaning, geyser installation Midrand, leak detection Centurion, 24 hour plumber",
  alternates: {
    canonical: "https://www.boreholeworks.co.za/plumbing-services",
  },
  openGraph: {
    title: "24/7 Plumber in Pretoria & Johannesburg | Borehole Works",
    description:
      "Burst pipes, blocked drains, leaks and geysers. Licensed plumbers, 24/7 response across Gauteng. Call 072 411 5472.",
    images: [
      {
        url: "/professional-plumber-working-on-pipes-in-a-gauteng-.jpg",
        width: 1200,
        height: 630,
        alt: "Borehole Works plumber repairing pipes in Gauteng",
      },
    ],
  },
}

const jobs = [
  {
    title: "Burst pipes",
    image: "/burst_pipe_centurion.jpg",
    alt: "Plumber repairing a burst water pipe at a home in Centurion",
    copy: "Water shut off, pipe cut out and replaced the same visit. We patch and pressure test before we leave.",
  },
  {
    title: "Blocked drains",
    image: "/blocked_drains.jpg",
    alt: "High pressure jetting machine clearing a blocked drain",
    copy: "High pressure jetting and CCTV camera inspection so you know what caused the blockage, not just that it cleared.",
  },
  {
    title: "Geyser installation",
    image: "/kwikot_geyser_installation.jpg",
    alt: "New Kwikot geyser installed in a Gauteng roof space",
    copy: "Kwikot and Heat Tech geysers supplied and installed. Insurance replacements handled start to finish.",
  },
  {
    title: "Solar geysers",
    image: "/solar_geyser_installation_pretoria.jpg",
    alt: "Solar geyser panels installed on a roof in Pretoria",
    copy: "Apollo and flat plate solar systems sized to your household, wired with a backup element for cloudy weeks.",
  },
  {
    title: "Leak detection",
    image: "/professional-plumber-working-on-pipes-installation.jpg",
    alt: "Plumber using electronic leak detection equipment on a water pipe",
    copy: "Acoustic and thermal equipment finds the leak under the slab or in the wall before anyone breaks tiles.",
  },
  {
    title: "Emergency callouts",
    image: "/emergency_plumber_Gauteng.jpg",
    alt: "Emergency plumber arriving at a callout in Gauteng",
    copy: "After hours, weekends and public holidays. A plumber answers the phone, not a call centre.",
  },
]

const marqueeImages = [
  { src: "/professional-plumber-working-on-pipes-in-a-gauteng-.jpg", alt: "Plumber working on pipes in Gauteng" },
  { src: "/burst_pipe_centurion.jpg", alt: "Burst pipe repair, Centurion" },
  { src: "/kwikot_geyser_installation.jpg", alt: "Kwikot geyser installation" },
  { src: "/solar_geyser_installation_pretoria.jpg", alt: "Solar geyser installation" },
  { src: "/blocked_drains.jpg", alt: "Blocked drain clearing" },
]

const areas = [
  "Pretoria", "Centurion", "Midrand", "Johannesburg", "Sandton",
  "Randburg", "Fourways", "Roodepoort", "Bedfordview", "Kempton Park",
]

const faqs = [
  {
    q: "How quickly can a plumber get to me?",
    a: "For emergencies in Pretoria, Centurion, Midrand and Johannesburg we aim to be on site within 60 to 90 minutes, depending on traffic and where the nearest team is working. Call us and we'll tell you the honest arrival time before you commit.",
  },
  {
    q: "What does a callout cost?",
    a: "You get a callout fee and an estimate on the phone before we drive out. Once the plumber has seen the problem you get an itemised quote for materials and labour, and nothing starts until you approve it.",
  },
  {
    q: "Can you handle an insurance geyser claim?",
    a: "We do. We assess the geyser, supply the report and photos your insurer needs, and install the replacement so the claim closes cleanly.",
  },
  {
    q: "Do you work on commercial properties?",
    a: "Yes. Offices, retail, restaurants, schools, clinics and complexes, including grease traps and scheduled maintenance outside your trading hours.",
  },
]

export default function PlumbingServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="/professional-plumber-working-on-pipes-in-a-gauteng-.jpg"
          alt="Borehole Works plumber working on water pipes in Gauteng"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/70 to-black/40" aria-hidden="true" />

        <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-28">
          <div className="max-w-2xl text-white">
            <p className="mb-4 inline-flex items-center rounded-full bg-accent/20 px-4 py-1.5 text-sm font-semibold text-white ring-1 ring-inset ring-accent/50">
              24 hours, 7 days, including public holidays
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Licensed plumbers in Pretoria and Johannesburg
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">
              Burst pipe, blocked drain, hidden leak or a geyser that has given up. Tell us what's
              happening and we'll be there today with the parts to fix it.
            </p>

            <HeroPhoneLink label="Speak to a plumber now" />

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <CallButton size="lg" />
              <WhatsAppCta size="lg" label="WhatsApp us" />
              <RequestQuoteLink />
            </div>

            <ul className="mt-10 grid gap-3 text-sm text-white/85 sm:grid-cols-3">
              <li>10+ years in Gauteng</li>
              <li>Fully stocked emergency vehicles</li>
              <li>Quote before work starts</li>
            </ul>
          </div>
        </div>
      </section>

      {/* MOVING IMAGE STRIP */}
      <section className="bg-muted py-10">
        <ImageMarquee images={marqueeImages} name="plumbing" direction="left" speed={38} />
      </section>

      {/* WHAT WE FIX, WITH REAL PHOTOS */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold lg:text-4xl">What we get called out for</h2>
            <p className="mt-4 text-muted-foreground">
              Photographs from jobs across Pretoria, Centurion, Midrand and Johannesburg.
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
          <h2 className="text-2xl font-bold">Looking for something specific?</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <Link href="/emergency-plumber-burst-pipes" className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent">
              <h3 className="font-bold">Emergency plumber and burst pipes</h3>
              <p className="mt-1 text-sm text-muted-foreground">24/7 response, water stopped fast.</p>
            </Link>
            <Link href="/geyser-installation-repairs" className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent">
              <h3 className="font-bold">Geyser installation and repairs</h3>
              <p className="mt-1 text-sm text-muted-foreground">Electric, solar and Kwikot.</p>
            </Link>
            <Link href="/blocked-drains-unblocking" className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent">
              <h3 className="font-bold">Blocked drains</h3>
              <p className="mt-1 text-sm text-muted-foreground">Jetting and CCTV inspection.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* PROOF AND PROCESS */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold lg:text-4xl">Why people call us back</h2>
            <dl className="mt-8 space-y-6">
              <div>
                <dt className="font-bold">A plumber answers the phone</dt>
                <dd className="mt-1 text-muted-foreground">
                  You describe the problem to someone who can tell you what it is likely to cost and how
                  soon a team can be there.
                </dd>
              </div>
              <div>
                <dt className="font-bold">Fully stocked vehicles</dt>
                <dd className="mt-1 text-muted-foreground">
                  Fittings, pipe, elements, thermostats and valves are on the van, so most jobs finish on
                  the first visit instead of a second callout.
                </dd>
              </div>
              <div>
                <dt className="font-bold">Itemised quotes, no surprises</dt>
                <dd className="mt-1 text-muted-foreground">
                  Materials and labour are listed separately. If we find something extra behind the wall we
                  stop and call you before spending your money.
                </dd>
              </div>
              <div>
                <dt className="font-bold">Documentation you can hand to an insurer</dt>
                <dd className="mt-1 text-muted-foreground">
                  Photos and an assessment report are supplied on installations and geyser replacements.
                </dd>
              </div>
            </dl>
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-2xl">
            <WatermarkedImage
              src="/24hr-Emergency-Plumber-Johannesburg.png"
              alt="Borehole Works 24 hour emergency plumber in Johannesburg"
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

      {/* FAQ PREVIEW */}
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
          <Link href="/faq#general" className="mt-6 inline-block text-sm font-semibold text-accent hover:underline">
            See all FAQs →
          </Link>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h2 className="text-3xl font-bold lg:text-4xl">Water running where it shouldn't be?</h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Call now and speak to a plumber, or send a photo on WhatsApp and we'll tell you what it needs.
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
            "@type": "Plumber",
            "@id": "https://www.boreholeworks.co.za/plumbing-services#plumber",
            name: "Borehole Works Plumbing",
            url: "https://www.boreholeworks.co.za/plumbing-services",
            telephone: "+27-72-411-5472",
            image: "https://www.boreholeworks.co.za/professional-plumber-working-on-pipes-in-a-gauteng-.jpg",
            priceRange: "$$",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Johannesburg",
              addressRegion: "Gauteng",
              addressCountry: "ZA",
            },
            areaServed: areas.map((a) => ({ "@type": "City", name: a })),
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "00:00",
                closes: "23:59",
              },
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Plumbing services",
              itemListElement: jobs.map((job) => ({
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: job.title },
              })),
            },
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
