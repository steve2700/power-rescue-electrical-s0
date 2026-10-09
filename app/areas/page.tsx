import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_NUMBER } from "@/components/contact-info"
import { AREAS } from "@/lib/power-rescue"

const SITE = "https://www.powerrescue.co.za"

export const metadata: Metadata = {
  title: "Electrician Areas | Johannesburg, Pretoria & Gauteng",
  description:
    "Emergency electricians in Johannesburg, Sandton, Pretoria, Centurion, Midrand, the East Rand and West Rand. See every area we cover. Call or WhatsApp 063 039 2007.",
  alternates: { canonical: "/areas" },
  openGraph: {
    url: "/areas",
    title: "Electrician Areas | Power Rescue Electrical",
    description: "Registered electricians across Johannesburg, Pretoria, the East and West Rand.",
    images: ["/pr/hero-db-board.png"],
  },
}

const REGIONS = [
  {
    title: "Johannesburg and north",
    copy: "Northern suburbs and the Joburg core, from Sandton and Fourways to Midrand.",
    areas: ["Johannesburg", "Sandton", "Randburg", "Fourways", "Midrand"],
    image: "/pr/power-rescue-residential-home-solar-system-installation.jpg",
    alt: "Home solar installation",
  },
  {
    title: "West Rand and Soweto",
    copy: "Roodepoort, Krugersdorp and Soweto, for homes, shops and complexes.",
    areas: ["Roodepoort", "Krugersdorp", "Soweto"],
    image: "/pr/power-rescue-commercial-sub-panel-installation.jpg",
    alt: "Commercial sub-panel installation",
  },
  {
    title: "Pretoria and Centurion",
    copy: "Across Pretoria, Pretoria East and Centurion.",
    areas: ["Pretoria", "Pretoria East", "Centurion"],
    image: "/pr/power-rescue-residential-distribution-board-installation.jpg",
    alt: "Residential distribution board installation",
  },
  {
    title: "East Rand",
    copy: "From Kempton Park to Alberton, including Benoni, Boksburg and Germiston.",
    areas: ["Kempton Park", "Benoni", "Boksburg", "Germiston", "Alberton"],
    image: "/pr/power-rescue-industrial-three-phase-panel-wiring.jpg",
    alt: "Industrial three-phase panel wiring",
  },
]

const STRIP = [
  { src: "/pr/job-emergency.png", alt: "Electrician attending an emergency call-out", caption: "Emergency call-outs" },
  { src: "/pr/power-rescue-electrical-inspection-multimeter-testing.jpg", alt: "Electrical inspection with a multimeter", caption: "Testing and COCs" },
  { src: "/pr/power-rescue-commercial-rooftop-solar-array-system.jpg", alt: "Commercial rooftop solar array", caption: "Solar" },
  { src: "/pr/power-rescue-automatic-sliding-gate-motor-installation.jpg", alt: "Sliding gate motor installation", caption: "Gates and security" },
]

// Any area in AREAS that hasn't been placed in a region above still gets shown
const placed = new Set(REGIONS.flatMap((r) => r.areas))
const unplaced = AREAS.filter((a) => !placed.has(a))

const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi Power Rescue, are you able to help in my area?",
)}`

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  name: "Power Rescue Electrical",
  url: SITE,
  telephone: "+27-63-039-2007",
  areaServed: AREAS.map((a) => ({ "@type": "Place", name: `${a}, Gauteng` })),
}

export default function AreasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-white">
        <Image
          src="/pr/hero-db-board.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-scale-x-100 object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
          <nav aria-label="Breadcrumb" className="text-sm text-white/60">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Areas</span>
          </nav>
          <h1 className="mt-6 max-w-3xl text-balance font-display text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl">
            Electricians across <span className="text-accent">Gauteng.</span>
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/75">
            Registered electricians covering Johannesburg, Pretoria, the East and West Rand and the outskirts. Day and
            night for emergencies.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={`tel:${PHONE_TEL}`}
              className="flex h-14 items-center rounded-full bg-white px-7 font-semibold text-primary transition-transform hover:scale-[1.02]"
            >
              Call {PHONE_DISPLAY}
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 items-center rounded-full border border-white/25 px-7 font-semibold transition-colors hover:bg-white/10"
            >
              Check my area
            </a>
          </div>
        </div>
      </section>

      {/* Photo strip */}
      <section className="relative z-10 -mt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {STRIP.map((p) => (
              <li
                key={p.src}
                className="group relative aspect-[4/3] overflow-hidden rounded-[24px] border-4 border-background shadow-xl"
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 to-transparent p-3 pt-10">
                  <p className="text-sm font-semibold text-white">{p.caption}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Big area list */}
      <section className="border-b border-border bg-secondary/50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-sm font-semibold text-muted-foreground">All areas</p>
          <h2 className="mt-3 max-w-2xl text-balance font-display text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl">
            {AREAS.length} areas, one number to call.
          </h2>
          <ul className="mt-10 flex flex-wrap gap-x-3 gap-y-2">
            {AREAS.map((a, i) => (
              <li
                key={a}
                className={`font-display text-2xl font-bold sm:text-3xl ${i % 3 === 0 ? "text-foreground" : "text-foreground/35"}`}
              >
                {a}
                {i < AREAS.length - 1 && (
                  <span className="ml-3 text-accent" aria-hidden="true">
                    /
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Regions */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="max-w-2xl text-balance font-display text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl">
            Where we work, region by region.
          </h2>
          <ul className="mt-14 grid gap-5 sm:grid-cols-2">
            {[
              ...REGIONS,
              ...(unplaced.length ? [{ title: "Also covering", copy: "", areas: unplaced, image: "", alt: "" }] : []),
            ].map(
              (r) => (
                <li key={r.title} className="overflow-hidden rounded-[28px] border border-border bg-secondary/60 p-7">
                  {r.image && (
                    <div className="relative -mx-7 -mt-7 mb-6 aspect-[16/8] overflow-hidden">
                      <Image
                        src={r.image}
                        alt={r.alt}
                        fill
                        sizes="(min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <h3 className="font-display text-2xl font-bold text-foreground">{r.title}</h3>
                  {r.copy && <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.copy}</p>}
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {r.areas.map((a) => (
                      <li
                        key={a}
                        className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground"
                      >
                        {a}
                      </li>
                    ))}
                  </ul>
                </li>
              ),
            )}
          </ul>
        </div>
      </section>

      {/* Further out */}
      <section className="bg-accent py-16 text-accent-foreground lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="text-balance font-display text-4xl font-bold leading-[1.05] sm:text-5xl">
              Not on the list? Ask anyway.
            </h2>
            <p className="mt-4 max-w-lg leading-relaxed text-primary/75">
              We also work on the outskirts of Gauteng. Send us your suburb and we will confirm whether we can get to you.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 items-center rounded-full bg-primary px-8 font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              WhatsApp your suburb
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="flex h-14 items-center rounded-full border-2 border-primary px-8 font-semibold transition-colors hover:bg-primary/10"
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* Services links */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-bold text-foreground">What we do in your area</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            The same registered team handles emergencies, installations, COCs, solar and backup power everywhere we work.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/services"
              className="inline-flex h-12 items-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              View all services
            </Link>
            <Link
              href="/emergency-electrical-repairs"
              className="inline-flex h-12 items-center rounded-full border border-border px-6 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Emergency repairs
            </Link>
            <Link
              href="/faq"
              className="inline-flex h-12 items-center rounded-full border border-border px-6 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Read the FAQ
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
