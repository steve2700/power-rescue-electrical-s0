import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_NUMBER } from "@/components/contact-info"
import { Tick } from "@/components/tick"
import { JobCard } from "@/components/home/job-card"
import { CALLOUT_STEPS } from "@/components/home/home-data"

const SITE = "https://www.powerrescue.co.za"

export const metadata: Metadata = {
  title: { absolute: "24/7 Emergency Electrician Gauteng | Power Rescue Electrical" },
  description:
    "Power out or breaker tripping? Registered emergency electricians across Johannesburg, Pretoria and Gauteng, 24/7. COC issued. Call or WhatsApp 063 039 2007.",
  alternates: { canonical: "/emergency-electrical-repairs" },
  openGraph: {
    url: "/emergency-electrical-repairs",
    title: "24/7 Emergency Electrician Gauteng | Power Rescue Electrical",
    description: "Power out? Registered electricians on call 24/7 across Gauteng. COC issued.",
    images: ["/pr/hero-db-board.png"],
  },
}

const FIXES = [
  { title: "Tripping breakers", copy: "We find what is overloading or leaking, not just reset the switch." },
  { title: "No power at all", copy: "Supply faults, failed main switches and dead DB boards diagnosed on site." },
  { title: "Dead plugs and lights", copy: "Faulty circuits, loose connections and failed fittings repaired." },
  { title: "Burnt or damaged wiring", copy: "Burn marks, melted insulation and hot sockets made safe and replaced." },
  { title: "Earth leakage trips", copy: "Tracking down the circuit or appliance that keeps tripping your earth leakage." },
  { title: "Storm and surge damage", copy: "Damaged boards, surge protection and affected circuits checked and restored." },
]

const SAFETY = [
  "Switch off the main breaker if it is safe to reach.",
  "Unplug appliances from affected sockets.",
  "Stay away from water, burn marks and hot or sparking points.",
  "If you smell burning or see smoke, get everyone out and call the fire department first.",
]

const FAQS = [
  {
    q: "How fast can you get to me?",
    a: "We dispatch the closest available electrician. Call or WhatsApp and we will give you an honest arrival estimate for your area.",
  },
  {
    q: "Do you work after hours and on weekends?",
    a: "Yes. Emergency call-outs are available every day of the week, day and night.",
  },
  {
    q: "Will I get a Certificate of Compliance?",
    a: "Where the work requires one, yes. Our electricians are registered and issue COCs.",
  },
  {
    q: "Do you cover my area?",
    a: "We cover Johannesburg, Pretoria, the East and West Rand and the outskirts. Further out? Send a job card and we will confirm.",
  },
]

const RELATED = [
  { href: "/db-board-upgrades", title: "DB board upgrades", copy: "Old or overloaded board? Replace it safely." },
  { href: "/electrical-coc-certificate", title: "Electrical COC certificates", copy: "For selling your home or insurance." },
  { href: "/electrical-maintenance-fault-finding", title: "Maintenance and fault finding", copy: "Catch problems before they become call-outs." },
]

const pageUrl = `${SITE}/emergency-electrical-repairs`

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Emergency Electrical Repairs",
    serviceType: "Emergency electrician",
    url: pageUrl,
    provider: { "@type": "Electrician", name: "Power Rescue Electrical", telephone: "+27-63-039-2007", url: SITE },
    areaServed: "Gauteng, South Africa",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Emergency electrical repairs", item: pageUrl },
    ],
  },
]

const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Power Rescue, I have an electrical emergency.")}`

export default function EmergencyElectricalRepairsPage() {
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
          className="-scale-x-100 object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/55" aria-hidden="true" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
          <div>
            <nav aria-label="Breadcrumb" className="text-sm text-white/60">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">Emergency electrical repairs</span>
            </nav>
            <h1 className="mt-6 text-balance font-display text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl">
              24/7 emergency electrician <span className="text-accent">across Gauteng.</span>
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/75">
              Power gone? Breaker tripping? Burning smell? Registered electricians on call day and night in Johannesburg,
              Pretoria, the East and West Rand. COC issued.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-white/85">
              {["Open day and night", "Registered electricians", "COC issued"].map((t) => (
                <li key={t} className="flex items-center gap-2.5">
                  <Tick />
                  {t}
                </li>
              ))}
            </ul>
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
          <div className="lg:pl-4">
            <JobCard />
          </div>
        </div>
      </section>

      {/* What we fix */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-sm font-semibold text-muted-foreground">What we fix</p>
          <h2 className="mt-3 max-w-2xl text-balance font-display text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl">
            Electrical faults we fix fast.
          </h2>
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FIXES.map((f) => (
              <li key={f.title} className="rounded-[28px] border border-border bg-secondary/60 p-6">
                <h3 className="font-display text-xl font-bold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-accent py-20 text-accent-foreground lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="max-w-xl text-balance font-display text-4xl font-bold leading-[1.05] sm:text-5xl">
            How an emergency call-out works.
          </h2>
          <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {CALLOUT_STEPS.map((s) => (
              <li key={s.n} className="border-t-2 border-primary pt-6">
                <span className="font-display text-6xl font-extrabold leading-none tabular-nums">{s.n}</span>
                <h3 className="mt-5 font-display text-2xl font-bold">{s.title}</h3>
                <p className="mt-2 max-w-sm leading-relaxed text-primary/75">{s.copy}</p>
              </li>
            ))}
          </ol>
          <a
            href={`tel:${PHONE_TEL}`}
            className="mt-14 inline-flex h-14 items-center rounded-full bg-primary px-8 font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
          >
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      {/* Safety */}
      <section className="bg-background py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-muted-foreground">While you wait</p>
            <h2 className="mt-3 text-balance font-display text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl">
              Power out? Stay safe until we arrive.
            </h2>
          </div>
          <ul className="space-y-4">
            {SAFETY.map((s) => (
              <li key={s} className="flex items-start gap-4 text-foreground">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent">
                  <Tick className="border-primary" />
                </span>
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-secondary/50 py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-display text-4xl font-bold text-foreground">Emergency electrician FAQs</h2>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {FAQS.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-lg font-bold text-foreground marker:hidden [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span
                    aria-hidden="true"
                    className="mt-2 h-2 w-2 shrink-0 rotate-45 border-b-2 border-r-2 border-primary transition-transform group-open:-rotate-[135deg] group-open:translate-y-1"
                  />
                </summary>
                <p className="mt-3 leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            More answers on our{" "}
            <Link href="/faq" className="font-semibold text-primary hover:underline">
              FAQ page
            </Link>{" "}
            or see{" "}
            <Link href="/areas" className="font-semibold text-primary hover:underline">
              every area we cover
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Related services */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-bold text-foreground">Related electrical services</h2>
          <ul className="mt-8 grid gap-5 sm:grid-cols-3">
            {RELATED.map((r) => (
              <li key={r.href}>
                <Link
                  href={r.href}
                  className="block h-full rounded-[28px] border border-border bg-card p-6 transition-colors hover:border-primary"
                >
                  <h3 className="font-display text-xl font-bold text-foreground">{r.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{r.copy}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary py-16 text-center text-white">
        <h2 className="text-balance font-display text-3xl font-bold sm:text-4xl">Electrical emergency? Call now.</h2>
        <p className="mx-auto mt-4 max-w-md text-white/75">Registered electricians on call day and night across Gauteng.</p>
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
