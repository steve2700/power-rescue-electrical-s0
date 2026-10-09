import Image from "next/image"
import Link from "next/link"
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_NUMBER } from "@/components/contact-info"
import { Tick } from "@/components/tick"
import { JobCard } from "@/components/home/job-card"
import { ServiceExplorer } from "@/components/service-explorer"
import { LoadPlanner } from "@/components/load-planner"
import { AREAS, SERVICES } from "@/lib/power-rescue"
import type { ServicePageData } from "@/lib/service-pages"
import { cn } from "@/lib/utils"

const SITE = "https://www.powerrescue.co.za"

export function ServicePage({ data }: { data: ServicePageData }) {
  const service = SERVICES.find((s) => s.slug === data.slug)
  const name = service?.title ?? data.h1
  const url = `${SITE}/${data.slug}`
  const related = data.related
    .map((slug) => SERVICES.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s))

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi Power Rescue, I would like a quote for ${name.toLowerCase()}.`,
  )}`

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name,
      serviceType: name,
      url,
      description: data.metaDescription,
      provider: { "@type": "Electrician", name: "Power Rescue Electrical", telephone: "+27-63-039-2007", url: SITE },
      areaServed: AREAS.map((a) => ({ "@type": "Place", name: `${a}, Gauteng` })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: data.faqs.map((f) => ({
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
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE}/services` },
        { "@type": "ListItem", position: 3, name, item: url },
      ],
    },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-white">
        <Image
          src={data.heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="-scale-x-100 object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/55" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-primary to-transparent" aria-hidden="true" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
          <div>
            <nav aria-label="Breadcrumb" className="text-sm text-white/60">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link href="/services" className="hover:text-white">
                Services
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">{name}</span>
            </nav>
            <h1 className="mt-6 text-balance font-display text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl">
              {data.h1} <span className="text-accent">{data.h1Accent}</span>
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/75">{data.lead}</p>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {data.keyFacts.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2.5 text-sm font-medium"
                >
                  <Tick />
                  {f}
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
                Get a quote on WhatsApp
              </a>
            </div>
          </div>
          <div className="lg:pl-4">
            <JobCard />
          </div>
        </div>
      </section>

      {/* Interactive explorer */}
      <ServiceExplorer service={name} {...data.explorer} />

      {/* Optional load planner */}
      {data.planner && <LoadPlanner service={name.toLowerCase()} {...data.planner} />}

      {/* What is included */}
      <section className="bg-background py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-sm font-semibold text-muted-foreground">What you get</p>
          <h2 className="mt-3 max-w-2xl text-balance font-display text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl">
            Included in every {name.toLowerCase()} job.
          </h2>
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {data.includes.map((inc, i) => (
              <li key={inc.title} className="rounded-[28px] border border-border bg-secondary/60 p-6">
                <p className="font-display text-sm font-bold tabular-nums text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-1 font-display text-xl font-bold text-foreground">{inc.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{inc.copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-background pb-20 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-sm font-semibold text-muted-foreground">Our work</p>
          <h2 className="mt-3 max-w-2xl text-balance font-display text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl">
            Real jobs, done by our team.
          </h2>
          <ul className="mt-12 grid auto-rows-[170px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4">
            {data.gallery.map((g, i) => (
              <li
                key={g.src}
                className={cn(
                  "group relative overflow-hidden rounded-[24px]",
                  i === 0 && "col-span-2 row-span-2",
                  i === 3 && "col-span-2",
                )}
              >
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes={i === 0 || i === 3 ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 50vw"}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 to-transparent p-4 pt-12">
                  <p className="text-sm font-semibold text-white">{g.caption}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-accent py-20 text-accent-foreground lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="max-w-xl text-balance font-display text-4xl font-bold leading-[1.05] sm:text-5xl">
            {data.stepsHeading}
          </h2>
          <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {data.steps.map((s, i) => (
              <li key={s.title} className="border-t-2 border-primary pt-6">
                <span className="font-display text-6xl font-extrabold leading-none tabular-nums">{i + 1}</span>
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

      {/* FAQ */}
      <section className="bg-background py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-display text-4xl font-bold text-foreground">{name} FAQs</h2>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {data.faqs.map((f) => (
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
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Areas */}
      <section className="border-t border-border bg-secondary/50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="max-w-2xl text-balance font-display text-3xl font-bold text-foreground sm:text-4xl">
            {name} across Gauteng.
          </h2>
          <ul className="mt-8 flex flex-wrap gap-2">
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

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-background py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="font-display text-3xl font-bold text-foreground">Related electrical services</h2>
            <ul className="mt-8 grid gap-5 sm:grid-cols-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/${r.slug}`}
                    className="block h-full rounded-[28px] border border-border bg-card p-6 transition-colors hover:border-primary"
                  >
                    <h3 className="font-display text-xl font-bold text-foreground">{r.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{r.short}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="bg-primary py-16 text-center text-white">
        <h2 className="text-balance font-display text-3xl font-bold sm:text-4xl">Ready to get it sorted?</h2>
        <p className="mx-auto mt-4 max-w-md text-white/75">Call or WhatsApp. Registered electricians across Gauteng.</p>
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

      {/* Sticky mobile call bar */}
      <div className="h-20 md:hidden" aria-hidden="true" />
      <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 gap-2 border-t border-white/10 bg-primary p-3 md:hidden">
        <a
          href={`tel:${PHONE_TEL}`}
          className="flex h-12 items-center justify-center rounded-full bg-accent text-sm font-semibold text-accent-foreground"
        >
          Call now
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 items-center justify-center rounded-full border border-white/25 text-sm font-semibold text-white"
        >
          WhatsApp
        </a>
      </div>
    </>
  )
}
