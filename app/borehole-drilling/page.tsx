// File path: app/borehole-drilling/page.tsx
// Clean URL: https://www.boreholeworks.co.za/borehole-drilling

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CallButton, WhatsAppCta, StickyCallBar, HeroPhoneLink, BigPhoneLink, RequestQuoteLink } from "@/components/service-cta"
import { WatermarkedImage } from "@/components/watermarked-image"
import { ImageMarquee } from "@/components/image-marquee"
import { PHONE_DISPLAY } from "@/components/contact-info"

export const metadata: Metadata = {
  title: "Borehole Drilling Gauteng | Site Assessment & Yield Testing",
  description:
    "Professional borehole drilling in Pretoria, Johannesburg, Midrand and Centurion. Site assessment, drilling, casing and yield testing. Call 072 411 5472 or WhatsApp for a free site assessment.",
  keywords:
    "borehole drilling Gauteng, borehole drilling Pretoria, water borehole Johannesburg, borehole yield testing, new borehole installation, borehole drilling company Centurion",
  alternates: {
    canonical: "https://www.boreholeworks.co.za/borehole-drilling",
  },
  openGraph: {
    title: "Borehole Drilling Gauteng | Borehole Works",
    description:
      "Site assessment, drilling and yield testing for new boreholes across Gauteng. Call 072 411 5472.",
    images: [
      {
        url: "/borehole_drilling_water_gushing.jpg",
        width: 1200,
        height: 630,
        alt: "Borehole drilling rig striking water in Gauteng - Borehole Works",
      },
    ],
  },
}

const process = [
  {
    step: "01",
    title: "Free site assessment",
    copy: "We come out, look at your property, and give you an honest read on your chances of finding water and roughly what yield to expect, before you spend a cent.",
  },
  {
    step: "02",
    title: "Drilling & casing",
    copy: "Once you're happy to proceed, we drill and case the borehole properly, so it stays clean and structurally sound for decades, not just years.",
  },
  {
    step: "03",
    title: "Yield testing",
    copy: "We test how much water your borehole can sustainably deliver, so any pump we recommend afterward is sized correctly, not guessed at.",
  },
  {
    step: "04",
    title: "Ready for your pump system",
    copy: "Once drilling and testing is done, we can install the pump, tank and plumbing as one complete system, or hand over a clean report if you're getting quotes elsewhere.",
  },
]

const jobs = [
  {
    title: "Residential borehole drilling",
    image: "/borehole_drilling_water_gushing.jpg",
    alt: "Borehole drilling rig striking water on a residential property in Gauteng",
    copy: "New boreholes for homes dealing with municipal water cuts, low pressure, or wanting an independent supply.",
  },
  {
    title: "Drilling rigs on site",
    image: "/borehole_drilling_rig_action.webp",
    alt: "Borehole drilling rig in action on site in Gauteng",
    copy: "Proper drilling equipment and an experienced crew, not a subcontracted job we don't oversee ourselves.",
  },
  {
    title: "Borehole-to-pump systems",
    image: "/pump_systems_boreholes.jpg",
    alt: "Completed borehole pump system in Gauteng",
    copy: "Drilling through to a working pump system, so you're not left with a hole in the ground and a separate contractor to find.",
  },
  {
    title: "Borehole feeding storage tanks",
    image: "/borehole_pump_water_tank_installation.jpg",
    alt: "Borehole pump feeding a water storage tank installation",
    copy: "Boreholes plumbed straight into JoJo or storage tanks, so your household or farm has water on tap, not just in the ground.",
  },
]

const marqueeImages = [
  { src: "/borehole_drilling_water_gushing.jpg", alt: "Borehole drilling striking water" },
  { src: "/borehole_drilling_rig_action.webp", alt: "Drilling rig in action" },
  { src: "/solar_borehole_pump_aerial_view.jpg", alt: "Aerial view of solar borehole pump" },
  { src: "/pump_systems_boreholes.jpg", alt: "Borehole pump system" },
  { src: "/solar_borehole_tank_installation.jpg", alt: "Solar-powered borehole tank installation" },
]

const areas = [
  "Pretoria", "Centurion", "Midrand", "Johannesburg", "Sandton",
  "Randburg", "Fourways", "Rosebank", "Bedfordview", "Roodepoort",
]

const faqs = [
  {
    q: "How do you know if there's water on my property?",
    a: "We do a site assessment first, reading the land and using our drilling experience in your specific area of Gauteng to give you an honest probability, before any drilling starts.",
  },
  {
    q: "What if you drill and don't find water?",
    a: "It's rare when a proper site assessment has been done first, which is exactly why we don't skip that step. We'll always be upfront about the risk on your specific property before you commit.",
  },
  {
    q: "How deep do boreholes usually need to go in Gauteng?",
    a: "It varies a lot by area, anywhere from around 40m to over 100m. Your site assessment gives you a realistic estimate for your specific property, not a generic industry number.",
  },
  {
    q: "How long does drilling take?",
    a: "Most residential boreholes are drilled and cased within a day, sometimes two depending on ground conditions. Yield testing typically follows a day or two after that.",
  },
  {
    q: "Do you also handle the pump and tank, or just the drilling?",
    a: "Both. We can drill, test yield, and install your full pump-and-tank system as one job, or just hand over the borehole if you're sorting the pump separately.",
  },
]

export default function BoreholeDrillingPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="/borehole_drilling_water_gushing.jpg"
          alt="Borehole drilling rig striking water in Gauteng - Borehole Works"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/70 to-black/40" aria-hidden="true" />

        <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-28">
          <div className="max-w-2xl text-white">
            <p className="mb-4 inline-flex items-center rounded-full bg-accent/20 px-4 py-1.5 text-sm font-semibold text-white ring-1 ring-inset ring-accent/50">
              Free site assessment before you spend anything
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Borehole drilling across Gauteng
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">
              Reliable, independent water for your home, farm or business. We assess your property honestly
              before drilling, so you know what to expect from day one.
            </p>

            <HeroPhoneLink label="Speak to a drilling specialist now" />

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <CallButton size="lg" />
              <WhatsAppCta size="lg" label="WhatsApp us your address" />
              <RequestQuoteLink />
            </div>

            <ul className="mt-10 grid gap-3 text-sm text-white/85 sm:grid-cols-3">
              <li>Free site assessment</li>
              <li>Drilling & yield testing</li>
              <li>Full system install available</li>
            </ul>
          </div>
        </div>
      </section>

      {/* MOVING IMAGE STRIP */}
      <section className="bg-muted py-10">
        <ImageMarquee images={marqueeImages} name="drilling" direction="left" speed={38} />
      </section>

      {/* PROCESS */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold lg:text-4xl">How drilling works, start to finish</h2>
            <p className="mt-4 text-muted-foreground">
              No surprises. Here's exactly what happens from your first call to a working borehole.
            </p>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div key={item.step}>
                <p className="text-sm font-bold text-accent">{item.step}</p>
                <h3 className="mt-2 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO, WITH REAL PHOTOS */}
      <section className="bg-muted py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold lg:text-4xl">Drilling work we do every week</h2>
            <p className="mt-4 text-muted-foreground">
              Real jobs from across Pretoria, Centurion, Midrand and Johannesburg.
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
            <WhatsAppCta size="md" label="Send us your address on WhatsApp" />
          </div>
        </div>
      </section>

      {/* INTERNAL LINKING */}
      <section className="border-y border-border py-14">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-bold">Once your borehole is drilled</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <Link href="/pump-installation-repairs" className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent">
              <h3 className="font-bold">Pump installation</h3>
              <p className="mt-1 text-sm text-muted-foreground">Sized correctly to your borehole's yield.</p>
            </Link>
            <Link href="/solar-borehole-pumps" className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent">
              <h3 className="font-bold">Solar borehole pumps</h3>
              <p className="mt-1 text-sm text-muted-foreground">Off-grid pumping powered by solar.</p>
            </Link>
            <Link href="/jojo-water-tank-installation" className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent">
              <h3 className="font-bold">Water tank installation</h3>
              <p className="mt-1 text-sm text-muted-foreground">Storage for your new water supply.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="bg-muted py-14">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-bold">Where we drill</h2>
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
          <h2 className="text-3xl font-bold">Questions about drilling</h2>
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
          <Link href="/faq#drilling" className="mt-6 inline-block text-sm font-semibold text-accent hover:underline">
            See all borehole & pump FAQs →
          </Link>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h2 className="text-3xl font-bold lg:text-4xl">Ready to find out what's under your property?</h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Call now for a free site assessment, or send us your address on WhatsApp.
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
            "@id": "https://www.boreholeworks.co.za/borehole-drilling#service",
            name: "Borehole Drilling",
            serviceType: "Water borehole drilling",
            provider: {
              "@type": "LocalBusiness",
              name: "Borehole Works",
              telephone: "+27-72-411-5472",
              image: "https://www.boreholeworks.co.za/borehole_drilling_water_gushing.jpg",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Johannesburg",
                addressRegion: "Gauteng",
                addressCountry: "ZA",
              },
            },
            areaServed: areas.map((a) => ({ "@type": "City", name: a })),
            url: "https://www.boreholeworks.co.za/borehole-drilling",
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
