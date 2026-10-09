import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_NUMBER } from "@/components/contact-info"
import { Tick } from "@/components/tick"
import { AREAS, SERVICES } from "@/lib/power-rescue"

const SITE = "https://www.powerrescue.co.za"

export const metadata: Metadata = {
  title: "About Power Rescue Electrical | Registered Electricians in Gauteng",
  description:
    "Power Rescue Electrical handles emergency repairs, installations, maintenance, COCs, solar and backup power for homes and businesses across Gauteng. Meet the team and see how we work.",
  alternates: { canonical: "/about" },
  openGraph: {
    url: "/about",
    title: "About Power Rescue Electrical",
    description: "Registered electricians. Honest advice, safe work and clear quotes across Gauteng.",
    images: ["/pr/hero-db-board.png"],
  },
}

const STEPS = [
  { title: "You call or WhatsApp", copy: "Tell us what is happening, with a photo if you can. You reach us directly." },
  { title: "We make it safe", copy: "We isolate the fault and test to find the real cause, not just the symptom." },
  { title: "You get a clear quote", copy: "You hear what we found and what it will take, before any work starts." },
  { title: "We fix, test and certify", copy: "The work is tested, and a COC is issued where it is required." },
]

const VALUES = [
  { title: "Safety before speed", copy: "We make the fault safe first, then fix it properly. Quick patches that hide a problem help nobody." },
  { title: "Honest advice", copy: "If a repair will do, we say so. If a board or wiring really needs replacing, we explain why." },
  { title: "Clear quoting", copy: "A straightforward quote once we have seen the job, so there are no surprises on the invoice." },
  { title: "Registered and certified", copy: "Registered electricians, with Certificates of Compliance issued where the work requires one." },
]

const ROLES = [
  "Registered electricians",
  "Emergency call-out teams",
  "Fault finding and testing",
  "Solar and backup installers",
  "Quoting and coordination",
]

const MOSAIC = [
  { src: "/pr/power-rescue-residential-distribution-board-installation.jpg", alt: "Residential distribution board installation" },
  { src: "/pr/power-rescue-electrical-inspection-multimeter-testing.jpg", alt: "Electrical inspection with a multimeter" },
  { src: "/pr/power-rescue-residential-home-solar-system-installation.jpg", alt: "Home solar installation" },
  { src: "/pr/inverter-install.png", alt: "Hybrid inverter and battery installation" },
]

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Power Rescue Electrical",
    url: `${SITE}/about`,
    mainEntity: {
      "@type": "Electrician",
      name: "Power Rescue Electrical",
      url: SITE,
      telephone: "+27-63-039-2007",
      image: `${SITE}/pr/hero-db-board.png`,
      areaServed: AREAS.map((a) => ({ "@type": "Place", name: `${a}, Gauteng` })),
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "About", item: `${SITE}/about` },
    ],
  },
]

const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Power Rescue, I would like to chat about a job.")}`

export default function AboutPage() {
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
            <span className="text-white">About</span>
          </nav>
          <h1 className="mt-6 max-w-3xl text-balance font-display text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl">
            Gauteng&apos;s electricians, <span className="text-accent">done right.</span>
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/75">
            We fix the fault, then stay on for the installations, maintenance and solar that stop it happening again.
            Homes and businesses across Johannesburg, Pretoria, the East and West Rand.
          </p>

          <dl className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-white/15 pt-8">
            <div>
              <dt className="text-xs text-white/60 sm:text-sm">Emergency line</dt>
              <dd className="mt-1 font-display text-3xl font-extrabold text-accent sm:text-4xl">24/7</dd>
            </div>
            <div>
              <dt className="text-xs text-white/60 sm:text-sm">Services</dt>
              <dd className="mt-1 font-display text-3xl font-extrabold text-accent sm:text-4xl">{SERVICES.length}</dd>
            </div>
            <div>
              <dt className="text-xs text-white/60 sm:text-sm">Areas covered</dt>
              <dd className="mt-1 font-display text-3xl font-extrabold text-accent sm:text-4xl">{AREAS.length}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Who we are */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-semibold text-muted-foreground">Who we are</p>
            <h2 className="mt-3 text-balance font-display text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl">
              One team for everything electrical.
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              <strong className="text-foreground">Power Rescue Electrical</strong> is a Gauteng electrical company for
              homes and businesses. When the power goes, we come running: tripping breakers, dead plugs, burnt wiring
              and total outages, day and night.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Most of the time that is not the end of it. Old boards, overloaded circuits and load shedding are why
              people call us again, so we also handle DB board upgrades, installations, maintenance, COCs, solar and
              inverter backup. Same team, same standard, same number to call.
            </p>
            <ul className="mt-6 space-y-3">
              {["Registered electricians", "COC issued where required", "Open day and night for emergencies"].map((t) => (
                <li key={t} className="flex items-center gap-3 text-foreground">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent">
                    <Tick className="border-primary" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {MOSAIC.map((m, i) => (
              <div
                key={m.src}
                className={`relative overflow-hidden rounded-[24px] ${i % 3 === 0 ? "aspect-[4/5]" : "aspect-square"} ${i === 1 || i === 2 ? "mt-0" : ""}`}
              >
                <Image src={m.src} alt={m.alt} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="border-y border-border bg-secondary/50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-2xl text-balance font-display text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl">
              What we do.
            </h2>
            <Link href="/services" className="font-semibold text-primary hover:underline">
              View all services
            </Link>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <li key={s.slug} className="group relative overflow-hidden rounded-[24px] border border-border bg-card">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-foreground">
                    <Link href={`/${s.slug}`} className="after:absolute after:inset-0">
                      {s.title}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.short}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-accent py-20 text-accent-foreground lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="max-w-xl text-balance font-display text-4xl font-bold leading-[1.05] sm:text-5xl">
            How we work. No surprises.
          </h2>
          <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {STEPS.map((s, i) => (
              <li key={s.title} className="border-t-2 border-primary pt-6">
                <span className="font-display text-6xl font-extrabold leading-none tabular-nums">{i + 1}</span>
                <h3 className="mt-5 font-display text-2xl font-bold">{s.title}</h3>
                <p className="mt-2 max-w-sm leading-relaxed text-primary/75">{s.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Values */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-sm font-semibold text-muted-foreground">What we stand for</p>
          <h2 className="mt-3 max-w-2xl text-balance font-display text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl">
            Four promises behind every job.
          </h2>
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <li key={v.title} className="rounded-[28px] border border-border bg-secondary/60 p-6">
                <p className="font-display text-sm font-bold tabular-nums text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-1 font-display text-xl font-bold text-foreground">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-border bg-secondary/50 py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[32px]">
            <Image
              src="/pr/power-rescue-commercial-sub-panel-installation.jpg"
              alt="Power Rescue electricians installing a commercial sub-panel"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-balance font-display text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl">
              The people behind the phone.
            </h2>
            <p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">
              Electrical work takes several skills. Our team covers them, so you deal with one company from the first
              call to the last test.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {ROLES.map((r) => (
                <li key={r} className="rounded-2xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground">
                  {r}
                </li>
              ))}
            </ul>
            <Link href="/gallery" className="mt-8 inline-block font-semibold text-primary hover:underline">
              See our work
            </Link>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-bold text-foreground">Where we work</h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {AREAS.map((a) => (
              <li key={a} className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground">
                {a}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">
            Further out?{" "}
            <Link href="/areas" className="font-semibold text-primary hover:underline">
              See all areas
            </Link>{" "}
            or send us your suburb.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-center text-white">
        <h2 className="text-balance font-display text-3xl font-bold sm:text-4xl">Let&apos;s get it sorted.</h2>
        <p className="mx-auto mt-4 max-w-md text-white/75">
          Call for a straight answer, or send a photo on WhatsApp.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex h-14 items-center rounded-full bg-white px-8 font-semibold text-primary transition-transform hover:scale-[1.02]"
          >
            Call {PHONE_DISPLAY}
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center rounded-full border border-white/25 px-8 font-semibold transition-colors hover:bg-white/10"
          >
            WhatsApp us
          </a>
        </div>
      </section>
    </>
  )
}
