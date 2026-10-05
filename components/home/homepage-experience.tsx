"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import { TrackedLink } from "@/components/service-cta"
import {
  WORK,
  SERVICE_INDEX,
  AUDIENCES,
  AUDIENCE_KEYS,
  GALLERY_STRIP,
  HERO_IMAGES,
  type AudienceKey,
} from "./home-data"

export function HomepageExperience() {
  const [activeHero, setActiveHero] = useState(0)
  const [activeService, setActiveService] = useState(0)
  const [activeAudience, setActiveAudience] = useState<AudienceKey>("homes")
  const [name, setName] = useState("")
  const [suburb, setSuburb] = useState("")
  const [need, setNeed] = useState("")

  useEffect(() => {
    const interval = setInterval(() => setActiveHero((current) => (current + 1) % HERO_IMAGES.length), 5000)
    return () => clearInterval(interval)
  }, [])

  const currentService = SERVICE_INDEX[activeService]
  const currentAudience = AUDIENCES[activeAudience]

  const jobMessage = `Hi Borehole Works, I'm ${name || "a customer"} in ${suburb || "Gauteng"}. I need help with: ${need || "a water or plumbing job"}. Please get back to me.`

  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <section className="relative isolate min-h-[680px] bg-primary text-primary-foreground lg:min-h-[760px]">
        {HERO_IMAGES.map((image, index) => (
          <div key={image.src} className="absolute inset-0 transition-opacity duration-1000 ease-in-out" style={{ opacity: activeHero === index ? 1 : 0 }}>
            <Image src={image.src} alt={image.alt} fill priority={index === 0} className="object-cover object-center" sizes="100vw" />
          </div>
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(26,31,37,.96)_0%,rgba(26,31,37,.82)_44%,rgba(26,31,37,.28)_100%)]" />
        <div className="absolute right-5 top-6 z-10 flex gap-2 sm:right-8 lg:right-12 lg:top-8" aria-label="Hero image selection">
          {HERO_IMAGES.map((image, index) => (
            <button key={image.src} type="button" onClick={() => setActiveHero(index)} aria-label={`Show hero image ${index + 1}`} aria-pressed={activeHero === index} className={`h-1.5 rounded-full transition-all ${activeHero === index ? "w-8 bg-accent" : "w-2 bg-primary-foreground/45 hover:bg-primary-foreground/75"}`} />
          ))}
        </div>
        <div className="container relative mx-auto flex min-h-[680px] items-end px-4 pb-16 pt-28 sm:px-8 lg:min-h-[760px] lg:px-12 lg:pb-24">
          <div className="max-w-3xl">
            <p className="area-rise text-xs font-semibold uppercase tracking-[0.24em] text-accent">Borehole Works / Gauteng</p>
            <h1 className="area-rise mt-5 max-w-3xl text-balance text-5xl font-bold leading-[.98] tracking-[-.04em] sm:text-7xl lg:text-8xl" style={{ animationDelay: "100ms" }}>
              Water systems that work as hard as you do.
            </h1>
            <p className="area-rise mt-7 max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/75 sm:text-xl" style={{ animationDelay: "180ms" }}>
              Boreholes, pumps, tanks and plumbing, planned properly, installed cleanly and supported by a team that knows Gauteng.
            </p>
            <div className="area-rise mt-9 flex flex-wrap gap-4" style={{ animationDelay: "280ms" }}>
              <TrackedLink kind="call" className="rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-1">
                Call for a free quote
              </TrackedLink>
              <Link href="#job-card" className="rounded-full border border-primary-foreground/30 px-7 py-3.5 text-sm font-semibold transition-colors hover:border-primary-foreground hover:bg-primary-foreground/10">
                Send a job card
              </Link>
            </div>
            <div className="area-rise mt-16 flex flex-wrap gap-x-8 gap-y-3 border-t border-primary-foreground/15 pt-5 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground/55" style={{ animationDelay: "380ms" }}>
              <span>Residential</span><span>Commercial</span><span>Emergency callouts</span>
            </div>
          </div>
        </div>
      </section>

      {/* 01 THE DIFFERENCE */}
      <section className="bg-background">
        <div className="container mx-auto grid gap-12 px-4 py-20 sm:px-8 lg:grid-cols-12 lg:items-center lg:gap-16 lg:px-12 lg:py-28">
          <div className="lg:col-span-5">
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
              <Image src="/pump_system_installation.webp" alt="Borehole pump and water system installation" fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-x-5 bottom-5 rounded-xl border border-white/20 bg-primary/80 p-4 text-primary-foreground backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">One team. One plan.</p>
                <p className="mt-1 text-sm text-primary-foreground/75">From the ground to the tap.</p>
              </div>
            </div>
          </div>
          <ScrollReveal delay={120} className="lg:col-span-6 lg:col-start-7">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground"><span className="text-accent">01</span><span className="h-px w-8 bg-border" />The difference</p>
            <h2 className="mt-5 text-balance text-4xl font-bold leading-tight tracking-tight">Not just a callout. A better way to use water.</h2>
            <p className="mt-7 text-pretty text-2xl font-semibold leading-snug tracking-tight md:text-4xl">Good water infrastructure should feel invisible: reliable in the background, ready when your home or business needs it.</p>
            <p className="mt-7 max-w-2xl leading-relaxed text-muted-foreground">We bring drilling, pumping, storage and plumbing together so you are not left coordinating five different contractors. One experienced team, one clear plan, one finished job.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* 02 WHAT WE GET CALLED FOR */}
      <section className="bg-muted">
        <div className="container mx-auto px-4 py-20 sm:px-8 lg:px-12 lg:py-28">
          <ScrollReveal>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground"><span className="text-accent">02</span><span className="h-px w-8 bg-border" />What we get called for</p>
            <h2 className="mt-5 max-w-2xl text-balance text-4xl font-bold tracking-tight md:text-5xl">From first drop to final connection.</h2>
          </ScrollReveal>
          <div className="mt-14 flex flex-col gap-16 lg:gap-24">
            {WORK.map((item, index) => (
              <div key={item.number} className="grid items-center gap-8 md:grid-cols-12 md:gap-14">
                <div className={`md:col-span-6 ${index % 2 ? "md:order-2" : ""}`}>
                  <Link href={item.href} className="group block overflow-hidden rounded-2xl">
                    <div className="relative aspect-[16/11] overflow-hidden"><Image src={item.image} alt={item.title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-1000 group-hover:scale-105" /></div>
                  </Link>
                </div>
                <ScrollReveal delay={140} className={`md:col-span-5 ${index % 2 ? "md:order-1" : "md:col-start-8"}`}>
                  <p className="text-6xl font-bold tracking-tight text-foreground/15">{item.number}</p>
                  <h3 className="mt-3 text-3xl font-bold tracking-tight">{item.title}</h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{item.copy}</p>
                  <Link href={item.href} className="mt-6 inline-block border-b-2 border-accent pb-1 text-sm font-semibold">Explore the service</Link>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 EVERY SERVICE: interactive index */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-20 sm:px-8 lg:px-12 lg:py-28">
          <ScrollReveal>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground"><span className="text-accent">03</span><span className="h-px w-8 bg-border" />Every service</p>
            <h2 className="mt-5 max-w-2xl text-balance text-4xl font-bold tracking-tight md:text-5xl">Nine ways we keep your water working.</h2>
            <p className="mt-4 max-w-xl text-muted-foreground">Hover or tap a service to see what it involves.</p>
          </ScrollReveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-16">
            <ul className="border-t border-border lg:col-span-7">
              {SERVICE_INDEX.map((service, index) => {
                const isActive = activeService === index
                return (
                  <li key={service.href} className="border-b border-border">
                    <button
                      type="button"
                      onClick={() => setActiveService(index)}
                      onMouseEnter={() => setActiveService(index)}
                      onFocus={() => setActiveService(index)}
                      aria-expanded={isActive}
                      className="group flex w-full items-baseline gap-5 py-5 text-left sm:gap-8"
                    >
                      <span className={`text-sm font-bold transition-colors ${isActive ? "text-accent" : "text-muted-foreground"}`}>{service.number}</span>
                      <span className={`flex-1 text-2xl font-bold tracking-tight transition-colors sm:text-3xl ${isActive ? "text-foreground" : "text-foreground/45 group-hover:text-foreground/80"}`}>{service.title}</span>
                      <span className={`text-xl transition-all duration-300 ${isActive ? "translate-x-0 text-accent" : "-translate-x-2 opacity-0"}`} aria-hidden="true">→</span>
                    </button>

                    {/* Mobile: details open inline under the row */}
                    {isActive && (
                      <div className="area-rise pb-8 lg:hidden">
                        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-muted">
                          <Image src={service.image} alt={service.title} fill sizes="100vw" className="object-cover" />
                        </div>
                        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent">{service.tag}</p>
                        <p className="mt-2 leading-relaxed text-muted-foreground">{service.copy}</p>
                        <div className="mt-5 flex flex-wrap gap-3">
                          <Link href={service.href} className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">Explore this service</Link>
                          <TrackedLink kind="call" className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold">Call about this</TrackedLink>
                        </div>
                      </div>
                    )}
                  </li>
                )
              })}
            </ul>

            {/* Desktop: sticky photo panel that follows the hovered service */}
            <div className="hidden lg:col-span-5 lg:block">
              <div className="sticky top-28">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-primary">
                  {SERVICE_INDEX.map((service, index) => (
                    <div key={service.href} className="absolute inset-0 transition-opacity duration-700" style={{ opacity: activeService === index ? 1 : 0 }}>
                      <Image src={service.image} alt={service.title} fill sizes="40vw" className="object-cover" />
                    </div>
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/25 to-transparent" />
                  <div key={currentService.href} className="area-rise absolute inset-x-6 bottom-6 text-primary-foreground">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{currentService.tag}</p>
                    <h3 className="mt-2 text-3xl font-bold tracking-tight">{currentService.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-primary-foreground/80">{currentService.copy}</p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      <Link href={currentService.href} className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5">Explore this service</Link>
                      <TrackedLink kind="call" className="rounded-full border border-primary-foreground/30 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-primary-foreground/10">Call about this</TrackedLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 BUILT AROUND YOUR PROPERTY: audience tabs */}
      <section className="bg-muted">
        <div className="container mx-auto px-4 py-20 sm:px-8 lg:px-12 lg:py-28">
          <ScrollReveal>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground"><span className="text-accent">04</span><span className="h-px w-8 bg-border" />Who it's for</p>
            <h2 className="mt-5 max-w-2xl text-balance text-4xl font-bold tracking-tight md:text-5xl">Built around your property.</h2>
          </ScrollReveal>

          <div role="tablist" aria-label="Choose your property type" className="mt-10 flex flex-wrap gap-3">
            {AUDIENCE_KEYS.map((key) => (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={activeAudience === key}
                onClick={() => setActiveAudience(key)}
                className={`rounded-full px-6 py-3 text-sm font-semibold transition-all ${
                  activeAudience === key
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "border border-border bg-card text-foreground hover:border-accent"
                }`}
              >
                {AUDIENCES[key].label}
              </button>
            ))}
          </div>

          <p key={activeAudience} className="area-rise mt-8 max-w-2xl text-xl leading-snug text-muted-foreground">{currentAudience.intro}</p>

          <div key={`${activeAudience}-cards`} className="mt-10 grid gap-6 md:grid-cols-3">
            {currentAudience.items.map((item, index) => (
              <Link
                key={item.title}
                href={item.href}
                className="area-rise group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={item.image} alt={item.title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold tracking-tight">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.copy}</p>
                  <span className="mt-4 inline-block border-b-2 border-accent pb-0.5 text-sm font-semibold">Explore →</span>
                </div>
              </Link>
            ))}
          </div>

          <p className="mt-10 text-sm text-muted-foreground">
            Not sure which fits your property?{" "}
            <TrackedLink kind="call" className="font-semibold text-accent hover:underline">Call us and we'll point you the right way.</TrackedLink>
          </p>
        </div>
      </section>

      {/* MOVING GALLERY */}
      <section className="bg-primary py-5 text-primary-foreground" aria-label="Recent work gallery">
        <div className="flex w-max gap-5 area-marquee">
          {[...GALLERY_STRIP, ...GALLERY_STRIP].map((src, index) => <div key={`${src}-${index}`} className="relative h-48 w-72 overflow-hidden rounded-xl sm:h-64 sm:w-96"><Image src={src} alt="Borehole Works installation" fill sizes="384px" className="object-cover" /></div>)}
        </div>
      </section>

      {/* 05 JOB CARD */}
      <section id="job-card" className="bg-background">
        <div className="container mx-auto grid gap-12 px-4 py-20 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-12 lg:py-28">
          <ScrollReveal className="lg:col-span-5">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground"><span className="text-accent">05</span><span className="h-px w-8 bg-border" />Start the conversation</p>
            <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight md:text-5xl">Tell us what needs doing.</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">Send a few details on WhatsApp. Photos are welcome. We will ask the right questions before we recommend the next step.</p>
          </ScrollReveal>
          <ScrollReveal delay={140} className="lg:col-span-6 lg:col-start-7">
            <div className="job-card-lines rounded-2xl border border-border bg-card p-7 shadow-sm sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">New job card</p>
              <div className="mt-8 grid gap-6">
                <label className="grid gap-2 text-sm font-semibold">Your name<input value={name} onChange={(event) => setName(event.target.value)} placeholder="e.g. Thabo Mokoena" className="border-0 border-b border-border bg-transparent px-0 py-2 text-base font-normal outline-none placeholder:text-muted-foreground/60 focus:border-accent" /></label>
                <label className="grid gap-2 text-sm font-semibold">Suburb or area<input value={suburb} onChange={(event) => setSuburb(event.target.value)} placeholder="e.g. Midrand" className="border-0 border-b border-border bg-transparent px-0 py-2 text-base font-normal outline-none placeholder:text-muted-foreground/60 focus:border-accent" /></label>
                <label className="grid gap-2 text-sm font-semibold">What do you need help with?<textarea value={need} onChange={(event) => setNeed(event.target.value)} placeholder="Tell us about the job..." rows={3} className="resize-none border-0 border-b border-border bg-transparent px-0 py-2 text-base font-normal outline-none placeholder:text-muted-foreground/60 focus:border-accent" /></label>
              </div>
              <TrackedLink kind="whatsapp" message={jobMessage} className="mt-9 block rounded-full bg-[#25D366] px-6 py-4 text-center text-sm font-bold text-white transition-transform hover:-translate-y-1">
                Send this job card on WhatsApp
              </TrackedLink>
              <p className="mt-4 text-center text-xs text-muted-foreground">No forms disappearing into a black hole. You will speak to a real person.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* COVERAGE */}
      <section className="bg-accent text-accent-foreground">
        <div className="container mx-auto flex flex-col gap-8 px-4 py-16 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12 lg:py-20">
          <div><p className="text-xs font-semibold uppercase tracking-[0.22em] opacity-70">Coverage across Gauteng</p><h2 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">A proper team is already closer than you think.</h2></div>
          <Link href="/service-areas" className="shrink-0 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-1">View service areas</Link>
        </div>
      </section>
    </main>
  )
}
