import type { Metadata } from "next"
import Link from "next/link"
import { HeroPhoneLink, BigPhoneLink, TrackedLink } from "@/components/service-cta"
import { ImageMarquee } from "@/components/image-marquee"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AreaPhoto } from "@/components/service-area/area-photo"
import { AreaCallDesk, AreaStickyCall } from "@/components/service-area/area-call-desk"
import { JsonLd, buildAreaSchema } from "@/components/service-area/area-schema"
import {
  GALLERY,
  SERVICES,
  areaUrl,
  getServiceArea,
  photoAlt,
  type ServiceArea,
} from "@/lib/service-areas"

export function areaMetadata(area: ServiceArea): Metadata {
  const url = areaUrl(area.slug)
  const image = area.heroPhotos[0]
  return {
    title: area.metaTitle,
    description: area.metaDescription,
    keywords: area.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: `${area.metaTitle} | Borehole Works`,
      description: area.metaDescription,
      url,
      type: "website",
      locale: "en_ZA",
      siteName: "Borehole Works",
      images: [{ url: image, alt: photoAlt(image, area.name) }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${area.metaTitle} | Borehole Works`,
      description: area.metaDescription,
      images: [image],
    },
    other: {
      "geo.region": "ZA-GP",
      "geo.placename": area.name,
      "geo.position": `${area.geo.lat};${area.geo.lng}`,
      ICBM: `${area.geo.lat}, ${area.geo.lng}`,
    },
  }
}

function formatCoords({ lat, lng }: { lat: number; lng: number }) {
  return `${Math.abs(lat).toFixed(2)}° S, ${lng.toFixed(2)}° E`
}

function SectionLabel({ index, children, light = false }: { index: string; children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] ${
        light ? "text-primary-foreground/60" : "text-muted-foreground"
      }`}
    >
      <span className="tabular-nums text-accent">{index}</span>
      <span className={`h-px w-8 ${light ? "bg-primary-foreground/30" : "bg-border"}`} aria-hidden="true" />
      {children}
    </p>
  )
}

function Hero({ area }: { area: ServiceArea }) {
  const [main, second, third] = area.heroPhotos
  return (
    <section className="overflow-hidden bg-primary text-primary-foreground">
      <div className="container mx-auto grid gap-12 px-4 pb-16 pt-10 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:pb-24 lg:pt-14">
        <div className="lg:col-span-6 lg:pt-6">
          <nav aria-label="Breadcrumb" className="area-rise">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-primary-foreground/55">
              <li>
                <Link href="/" className="hover:text-primary-foreground">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/service-areas" className="hover:text-primary-foreground">Service areas</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-primary-foreground">{area.name}</li>
            </ol>
          </nav>

          <p className="area-rise mt-10 text-xs font-semibold uppercase tracking-[0.22em] text-accent" style={{ animationDelay: "80ms" }}>
            {area.municipality} <span className="text-primary-foreground/40">/</span> {formatCoords(area.geo)}
          </p>
          <h1
            className="area-rise mt-4 text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "160ms" }}
          >
            {area.headline}
          </h1>
          <p className="area-rise mt-6 max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/75" style={{ animationDelay: "260ms" }}>
            {area.lede}
          </p>

          <div className="area-rise" style={{ animationDelay: "360ms" }}>
            <HeroPhoneLink label={`Call us from ${area.name}`} />
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
              <a href="#call-desk" className="underline decoration-accent decoration-2 underline-offset-4 hover:text-accent">
                Fill in a job card first
              </a>
              <TrackedLink
                kind="whatsapp"
                message={`Hi Borehole Works, I'm in ${area.name} and need help with water or plumbing.`}
                className="text-primary-foreground/70 underline decoration-primary-foreground/30 underline-offset-4 hover:text-primary-foreground"
              >
                Or message us on WhatsApp
              </TrackedLink>
            </div>
          </div>

          <dl
            className="area-rise mt-12 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-primary-foreground/15 pt-6"
            style={{ animationDelay: "460ms" }}
          >
            {area.facts.map((f) => (
              <div key={f.label}>
                <dt className="text-xs uppercase tracking-[0.16em] text-primary-foreground/50">{f.label}</dt>
                <dd className="mt-1 text-sm font-semibold leading-snug">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-6">
          <div className="grid h-[380px] grid-cols-5 grid-rows-6 gap-3 sm:h-[480px] lg:h-[580px]">
            <figure className="area-rise relative col-span-3 row-span-6 overflow-hidden rounded-2xl" style={{ animationDelay: "200ms" }}>
              <AreaPhoto
                src={main}
                areaName={area.name}
                priority
                sizes="(min-width: 1024px) 30vw, 60vw"
                className="h-full w-full"
                imageClassName="area-kenburns"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-4 pb-4 pt-12 text-xs font-medium text-white">
                {GALLERY[main].caption}
              </figcaption>
            </figure>
            <div className="area-rise col-span-2 row-span-3" style={{ animationDelay: "380ms" }}>
              <div className="area-drift h-full">
                <AreaPhoto src={second} areaName={area.name} sizes="(min-width: 1024px) 20vw, 40vw" className="h-full rounded-2xl" />
              </div>
            </div>
            <div className="area-rise col-span-2 row-span-3" style={{ animationDelay: "520ms" }}>
              <div className="area-drift h-full" style={{ animationDelay: "-4s" }}>
                <AreaPhoto src={third} areaName={area.name} sizes="(min-width: 1024px) 20vw, 40vw" className="h-full rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Story({ area }: { area: ServiceArea }) {
  const [first, ...rest] = area.story.paragraphs
  return (
    <section aria-labelledby="story-heading" className="bg-background">
      <div className="container mx-auto grid gap-12 px-4 py-20 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-28">
        <div className="lg:col-span-7">
          <ScrollReveal>
            <SectionLabel index="01">Local knowledge</SectionLabel>
            <h2 id="story-heading" className="mt-5 text-balance text-3xl font-bold tracking-tight md:text-4xl">
              {area.story.heading}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="mt-8 text-lg leading-relaxed text-foreground first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-6xl first-letter:font-bold first-letter:leading-[0.85] first-letter:text-accent">
              {first}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={150} variant="left">
            <blockquote className="my-10 border-l-4 border-accent pl-6">
              <p className="text-balance text-2xl font-semibold leading-snug tracking-tight md:text-3xl">{area.story.pullQuote}</p>
            </blockquote>
          </ScrollReveal>
          {rest.map((p, i) => (
            <ScrollReveal key={i} delay={100}>
              <p className="mt-5 leading-relaxed text-muted-foreground">{p}</p>
            </ScrollReveal>
          ))}
        </div>

        <div className="lg:col-span-5">
          <figure className="lg:sticky lg:top-28">
            <ScrollReveal variant="wipe">
              <AreaPhoto
                src={area.story.photo}
                areaName={area.name}
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="aspect-[4/5] rounded-2xl"
                imageClassName="transition-transform duration-[1.5s] hover:scale-105"
              />
            </ScrollReveal>
            <figcaption className="mt-4 flex items-baseline justify-between gap-4 border-b border-border pb-4 text-sm">
              <span className="font-medium">{GALLERY[area.story.photo].caption}</span>
              <Link href="/gallery" className="shrink-0 text-muted-foreground underline underline-offset-4 hover:text-foreground">
                See the gallery
              </Link>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}

function Callouts({ area }: { area: ServiceArea }) {
  return (
    <section aria-labelledby="callouts-heading" className="bg-muted">
      <div className="container mx-auto px-4 py-20 lg:px-8 lg:py-28">
        <ScrollReveal>
          <SectionLabel index="02">Our work here</SectionLabel>
          <h2 id="callouts-heading" className="mt-5 max-w-2xl text-balance text-3xl font-bold tracking-tight md:text-4xl">
            What we get called out for in {area.name}
          </h2>
        </ScrollReveal>

        <ol className="mt-14 flex flex-col gap-14 lg:gap-20">
          {area.callouts.map((c, i) => {
            const service = SERVICES[c.service]
            const flip = i % 2 === 1
            return (
              <li key={c.title} className="grid items-center gap-8 md:grid-cols-12 md:gap-12">
                <ScrollReveal variant="wipe" className={`md:col-span-6 ${flip ? "md:order-2" : ""}`}>
                  <Link href={service.href} className="group block" tabIndex={-1} aria-hidden="true">
                    <AreaPhoto
                      src={c.photo}
                      areaName={area.name}
                      decorative
                      sizes="(min-width: 768px) 45vw, 100vw"
                      className="aspect-[16/11] rounded-2xl"
                      imageClassName="transition-transform duration-700 group-hover:scale-105"
                    />
                  </Link>
                </ScrollReveal>
                <ScrollReveal delay={120} className={`md:col-span-6 ${flip ? "md:order-1" : ""}`}>
                  <div className="flex items-baseline gap-4">
                    <span className="text-5xl font-bold tabular-nums text-foreground/15 lg:text-6xl" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{service.name}</span>
                  </div>
                  <h3 className="mt-4 text-balance text-2xl font-bold tracking-tight md:text-3xl">{c.title}</h3>
                  <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">{c.copy}</p>
                  <Link
                    href={service.href}
                    className="mt-6 inline-block border-b-2 border-accent pb-1 text-sm font-semibold transition-colors hover:text-accent"
                  >
                    More on {service.name.toLowerCase()}
                  </Link>
                </ScrollReveal>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

function Suburbs({ area }: { area: ServiceArea }) {
  return (
    <section aria-labelledby="suburbs-heading" className="bg-background">
      <div className="container mx-auto grid gap-12 px-4 py-20 lg:grid-cols-12 lg:px-8 lg:py-28">
        <ScrollReveal className="lg:col-span-4">
          <SectionLabel index="03">Coverage</SectionLabel>
          <h2 id="suburbs-heading" className="mt-5 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Suburbs we cover around {area.name}
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            {"Not on the list? If you're close to "}
            {area.name}
            {", we almost certainly come out to you. Call and ask."}
          </p>
        </ScrollReveal>
        <ul className="grid gap-x-8 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
          {area.suburbs.map((s, i) => (
            <li key={s}>
              <ScrollReveal delay={Math.min(i * 40, 400)}>
                <div className="group flex items-baseline gap-3 border-b border-border py-4">
                  <span className="text-xs tabular-nums text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-lg font-semibold transition-colors group-hover:text-accent">{s}</span>
                </div>
              </ScrollReveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Faqs({ area }: { area: ServiceArea }) {
  return (
    <section aria-labelledby="faq-heading" className="bg-muted">
      <div className="container mx-auto grid gap-12 px-4 py-20 lg:grid-cols-12 lg:px-8 lg:py-28">
        <ScrollReveal className="lg:col-span-4">
          <SectionLabel index="04">Questions</SectionLabel>
          <h2 id="faq-heading" className="mt-5 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            What people in {area.name} ask us
          </h2>
        </ScrollReveal>
        <div className="lg:col-span-8">
          {area.faqs.map((f, i) => (
            <ScrollReveal key={f.q} delay={i * 60}>
              <details className="group border-b border-foreground/15 py-6 [&_summary::-webkit-details-marker]:hidden" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-lg font-semibold leading-snug">
                  {f.q}
                  <span
                    className="mt-0.5 shrink-0 text-2xl font-light leading-none text-accent transition-transform duration-300 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Nearby({ area }: { area: ServiceArea }) {
  const nearby = area.nearby.map(getServiceArea)
  return (
    <section aria-labelledby="nearby-heading" className="bg-background">
      <div className="container mx-auto px-4 py-20 lg:px-8 lg:py-24">
        <ScrollReveal>
          <SectionLabel index="05">Next door</SectionLabel>
          <h2 id="nearby-heading" className="mt-5 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Areas around {area.name}
          </h2>
        </ScrollReveal>
        <ul className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {nearby.map((n, i) => (
            <li key={n.slug} className="bg-background">
              <ScrollReveal delay={i * 70} className="h-full">
                <Link href={`/service-areas/${n.slug}`} className="group flex h-full flex-col gap-3 p-6 transition-colors hover:bg-muted lg:p-8">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{n.municipality}</span>
                  <span className="text-2xl font-bold tracking-tight underline decoration-transparent decoration-2 underline-offset-4 transition-colors group-hover:decoration-accent">
                    {n.name}
                  </span>
                  <span className="text-sm leading-relaxed text-muted-foreground">{n.character}</span>
                </Link>
              </ScrollReveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Closing({ area }: { area: ServiceArea }) {
  return (
    <section className="bg-accent text-accent-foreground">
      <div className="container mx-auto flex flex-col gap-8 px-4 py-16 pb-28 md:flex-row md:items-end md:justify-between lg:px-8 lg:py-20">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] opacity-70">Borehole Works in {area.name}</p>
          <h2 className="mt-3 max-w-xl text-balance text-3xl font-bold tracking-tight md:text-4xl">
            One call gets you a real person and a real answer.
          </h2>
          <BigPhoneLink />
        </ScrollReveal>
        <ScrollReveal delay={120}>
          <Link href="/contact" className="inline-block border-b-2 border-accent-foreground pb-1 text-sm font-semibold">
            Prefer a written quote? Use the contact form
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}

export function ServiceAreaTemplate({ area }: { area: ServiceArea }) {
  return (
    <>
      <JsonLd data={buildAreaSchema(area)} />
      <Hero area={area} />
      <div className="border-b border-border bg-muted py-6" aria-label={`Recent work photos relevant to ${area.name}`}>
        <ImageMarquee
          name={area.slug}
          speed={42}
          images={area.marquee.map((src) => ({ src, alt: photoAlt(src), watermark: GALLERY[src].watermark }))}
        />
      </div>
      <Story area={area} />
      <Callouts area={area} />
      <AreaCallDesk areaName={area.name} places={[...area.suburbs, "Somewhere else nearby"]} />
      <Suburbs area={area} />
      <Faqs area={area} />
      <Nearby area={area} />
      <Closing area={area} />
      <AreaStickyCall areaName={area.name} />
    </>
  )
}
