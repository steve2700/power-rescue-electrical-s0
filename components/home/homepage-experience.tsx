import Image from "next/image"
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_NUMBER } from "@/components/contact-info"
import { AREAS, SERVICES } from "@/lib/power-rescue"
import { JobCard } from "./job-card"
import { BACKUP_POINTS, CALLOUT_STEPS, HERO_PILLS, PROMISES } from "./home-data"

function Tick({ className = "border-accent" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block h-2.5 w-1.5 shrink-0 -translate-y-px rotate-45 border-b-2 border-r-2 ${className}`}
    />
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary text-white">
      <Image
        src="/pr/hero-db-board.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-scale-x-100 object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/55" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-primary to-transparent" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
        <div>
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-accent font-display text-sm font-bold text-accent">
                COC
              </span>
              <p className="text-sm leading-tight">
                <span className="font-bold">Registered electricians</span>
                <br />
                <span className="text-white/65">Certificates issued</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-accent font-display text-sm font-bold text-accent">
                GP
              </span>
              <p className="text-sm leading-tight">
                <span className="font-bold">All of Gauteng</span>
                <br />
                <span className="text-white/65">And the outskirts</span>
              </p>
            </div>
          </div>

          <h1 className="mt-8 text-balance font-display text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl xl:text-7xl">
            When the power goes, <span className="text-accent">we come running.</span>
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/75">
            Power Rescue Electrical sorts out tripping breakers, dead plugs and burnt wiring, then stays on for the
            installations, maintenance and solar that keep it from happening again.{" "}
            <span className="font-semibold text-white">Homes and businesses across Gauteng.</span>
          </p>

          <ul className="mt-8 flex flex-wrap gap-2.5">
            {HERO_PILLS.map((p) => (
              <li
                key={p}
                className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2.5 text-sm font-medium"
              >
                <Tick />
                {p}
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
            <p className="text-sm text-white/60">
              Or fill in the job card.
              <span className="hidden lg:inline"> It takes about 20 seconds.</span>
            </p>
          </div>
        </div>

        <div className="lg:pl-4">
          <JobCard />
        </div>
      </div>
    </section>
  )
}

function Promises() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
        {PROMISES.map((p) => (
          <div key={p.title} className="bg-background px-6 py-10">
            <h2 className="font-display text-lg font-bold text-foreground">{p.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.copy}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Services() {
  const featured = SERVICES.slice(0, 4)
  const rest = SERVICES.slice(4)

  return (
    <section id="services" className="scroll-mt-28 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold text-muted-foreground">What we do</p>
            <h2 className="mt-3 max-w-2xl text-balance font-display text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl">
              One call for everything electrical.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            From a single plug point to a full solar install. Same team, same standard, same number to call.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {featured.map((s, i) => (
            <article
              key={s.slug}
              id={s.slug}
              className="group scroll-mt-32 overflow-hidden rounded-[28px] border border-border bg-card"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
                  {s.tag}
                </span>
              </div>
              <div className="flex items-start justify-between gap-6 p-6 sm:p-7">
                <div>
                  <p className="font-display text-sm font-bold text-muted-foreground tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-bold text-foreground">{s.title}</h3>
                  <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{s.copy}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((s, i) => (
            <li
              key={s.slug}
              id={s.slug}
              className="scroll-mt-32 rounded-[28px] border border-border bg-secondary/60 p-6 transition-colors hover:bg-accent/25"
            >
              <p className="font-display text-sm font-bold text-muted-foreground tabular-nums">
                {String(i + 5).padStart(2, "0")}
              </p>
              <h3 className="mt-1 font-display text-xl font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-28 bg-accent py-20 text-accent-foreground lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="max-w-xl text-balance font-display text-4xl font-bold leading-[1.05] sm:text-5xl">
          From job card to fixed, in three steps.
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
          href="#job-card"
          className="mt-14 inline-flex h-14 items-center rounded-full bg-primary px-8 font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
        >
          Start a job card
        </a>
      </div>
    </section>
  )
}

function Backup() {
  return (
    <section id="backup" className="scroll-mt-28 bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[32px]">
          <Image
            src="/pr/inverter-install.png"
            alt="Hybrid inverter and lithium battery installed on a garage wall"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-sm font-semibold text-muted-foreground">Solar and backup power</p>
          <h2 className="mt-3 text-balance font-display text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl">
            Load shedding again? Let&apos;s fix that properly.
          </h2>
          <p className="mt-5 max-w-lg text-pretty leading-relaxed text-muted-foreground">
            A backup system is only as good as the person who wired it. We design around what you actually need to keep
            running, then install it so it is safe, quiet and easy to grow.
          </p>
          <ul className="mt-8 space-y-4">
            {BACKUP_POINTS.map((p) => (
              <li key={p} className="flex items-center gap-4 text-foreground">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent">
                  <Tick className="border-primary" />
                </span>
                {p}
              </li>
            ))}
          </ul>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Power Rescue, I would like a quote for solar or backup power.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex h-14 items-center rounded-full bg-primary px-8 font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
          >
            Get a backup quote
          </a>
        </div>
      </div>
    </section>
  )
}

function Areas() {
  return (
    <section id="areas" className="scroll-mt-28 border-t border-border bg-secondary/50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold text-muted-foreground">Coverage</p>
            <h2 className="mt-3 text-balance font-display text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl">
              Gauteng, and a bit beyond.
            </h2>
            <p className="mt-5 max-w-sm leading-relaxed text-muted-foreground">
              Based in Gauteng with electricians spread across Joburg, Pretoria, the East and West Rand. Further out?
              Send a job card anyway and we will let you know.
            </p>
          </div>
          <ul className="flex flex-wrap content-start gap-x-3 gap-y-2">
            {AREAS.map((a, i) => (
              <li
                key={a}
                className={`font-display text-2xl font-bold sm:text-3xl ${i % 3 === 0 ? "text-foreground" : "text-foreground/35"}`}
              >
                {a}
                {i < AREAS.length - 1 && <span className="ml-3 text-accent">/</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export function HomepageExperience() {
  return (
    <>
      <Hero />
      <Promises />
      <Services />
      <HowItWorks />
      <Backup />
      <Areas />
    </>
  )
}
