import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_NUMBER } from "@/components/contact-info"
import { SERVICES } from "@/lib/power-rescue"

const SITE = "https://www.powerrescue.co.za"

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Emergency repairs, installations, maintenance, COCs, solar and inverter backup for homes and businesses across Gauteng. Call or WhatsApp 063 039 2007.",
  alternates: { canonical: "/services" },
  openGraph: {
    url: "/services",
    title: "Our Services | Power Rescue Electrical",
    description: "Everything electrical, from a single plug point to a full solar install. One team across Gauteng.",
    images: ["/pr/hero-db-board.png"],
  },
}

const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi Power Rescue, I need help with an electrical job.",
)}`

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Power Rescue Electrical services",
  itemListElement: SERVICES.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: s.title,
    url: `${SITE}/${s.slug}`,
  })),
}

export default function ServicesPage() {
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
            <span className="text-white">Services</span>
          </nav>
          <h1 className="mt-6 max-w-3xl text-balance font-display text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl">
            Everything electrical, <span className="text-accent">from one team.</span>
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/75">
            Emergency repairs, installations, maintenance, COCs and solar for homes and businesses across Gauteng.
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
              WhatsApp us
            </a>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-2xl text-balance font-display text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl">
              {SERVICES.length} services, one number to call.
            </h2>
            <p className="max-w-sm text-muted-foreground">
              Pick a service to see what it covers and what to expect.
            </p>
          </div>

          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <li
                key={s.slug}
                className="group relative flex flex-col overflow-hidden rounded-[28px] border border-border bg-card"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
                    {s.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    <Link
                      href={`/${s.slug}`}
                      className="after:absolute after:inset-0 focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-accent"
                    >
                      {s.title}
                    </Link>
                  </h3>
                  <p className="mt-3 flex-1 text-pretty leading-relaxed text-muted-foreground">{s.copy}</p>
                  <p className="mt-5 text-sm font-semibold text-primary group-hover:underline">Learn more</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Not sure */}
      <section className="border-y border-border bg-secondary/50 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-balance font-display text-3xl font-bold text-foreground sm:text-4xl">
            Not sure what you need?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Describe the problem and we will tell you what it needs. A photo of the DB board or the damage on WhatsApp
            helps.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${PHONE_TEL}`}
              className="flex h-14 items-center rounded-full bg-primary px-7 font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              Call {PHONE_DISPLAY}
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 items-center rounded-full border border-border px-7 font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Send a photo
            </a>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-primary py-16 text-center text-white">
        <h2 className="text-balance font-display text-3xl font-bold sm:text-4xl">Ready to get it sorted?</h2>
        <p className="mx-auto mt-4 max-w-md text-white/75">Call now or send a job card and we will come back to you.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex h-14 items-center rounded-full bg-white px-8 font-semibold text-primary transition-transform hover:scale-[1.02]"
          >
            Call {PHONE_DISPLAY}
          </a>
          <Link
            href="/#job-card"
            className="inline-flex h-14 items-center rounded-full border border-white/25 px-8 font-semibold transition-colors hover:bg-white/10"
          >
            Start a job card
          </Link>
        </div>
      </section>
    </>
  )
}
