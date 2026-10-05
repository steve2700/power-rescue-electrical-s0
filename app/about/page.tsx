// File path: app/about/page.tsx
// Clean URL: https://www.boreholeworks.co.za/about

import type { Metadata } from "next"
import Link from "next/link"
import { CallButton, WhatsAppCta, EmailCta, StickyCallBar, BigPhoneLink } from "@/components/service-cta"
import { ImageMarquee } from "@/components/image-marquee"
import { WatermarkedImage } from "@/components/watermarked-image"

export const metadata: Metadata = {
  title: "About Borehole Works | Borehole & Water Systems Specialists in Gauteng",
  description:
    "Borehole Works designs, drills and installs borehole, pump, tank, solar and irrigation systems across Pretoria, Johannesburg and Gauteng. Learn who we are and how we work.",
  keywords:
    "about Borehole Works, borehole company Gauteng, water systems specialists Pretoria, pump installers Johannesburg",
  alternates: {
    canonical: "https://www.boreholeworks.co.za/about",
  },
  openGraph: {
    title: "About Borehole Works | Borehole & Water Systems Specialists",
    description:
      "Honest advice, correct installation and lasting results for borehole, pump, tank, solar and irrigation systems across Gauteng.",
    images: [
      {
        url: "/pump_systems_boreholes.jpg",
        width: 1200,
        height: 630,
        alt: "Borehole Works pump system installation in Gauteng",
      },
    ],
  },
}

const stats = [
  { value: "10+", label: "Years experience" },
  { value: "9", label: "Water services" },
  { value: "24/7", label: "Emergency callouts" },
]

const marqueeImages = [
  { src: "/borehole_drilling_water_gushing.jpg", alt: "Borehole drilling striking water" },
  { src: "/pump_installation_hero.jpg", alt: "Pump installation" },
  { src: "/solar_borehole_pump_aerial_view.jpg", alt: "Solar borehole pump aerial view" },
  { src: "/eco_water_tanks_installation.jpg", alt: "Eco water tanks installation" },
  { src: "/kwikot_geyser_installation.jpg", alt: "Kwikot geyser installation" },
  { src: "/pump_systems_boreholes.jpg", alt: "Borehole pump system" },
]

const services = [
  { title: "Borehole drilling", href: "/borehole-drilling", copy: "Site assessment, drilling and yield testing." },
  { title: "Pump installation & repairs", href: "/pump-installation-repairs", copy: "Submersible, borehole and pressure pumps." },
  { title: "Solar borehole pumps", href: "/solar-borehole-pumps", copy: "Off-grid water that ignores load shedding." },
  { title: "Irrigation systems", href: "/irrigation-systems", copy: "Drip irrigation for farms, plots and gardens." },
  { title: "Water tank installation", href: "/jojo-water-tank-installation", copy: "Stands, plumbing, pumps and pressure." },
  { title: "Plumbing services", href: "/plumbing-services", copy: "Installations, repairs and leak detection." },
  { title: "Emergency plumber", href: "/emergency-plumber-burst-pipes", copy: "24/7 response for burst pipes and floods." },
  { title: "Geyser installation", href: "/geyser-installation-repairs", copy: "Electric, solar and Kwikot geysers." },
  { title: "Blocked drains", href: "/blocked-drains-unblocking", copy: "Jetting and CCTV inspection." },
]

const steps = [
  {
    title: "You call or WhatsApp us",
    copy: "Tell us what's happening. You'll speak to someone who knows water systems, not a call centre.",
  },
  {
    title: "We assess honestly",
    copy: "We look at your property, borehole or system and tell you what it needs, including when the answer is a repair, not a replacement.",
  },
  {
    title: "You get a clear quote",
    copy: "An estimate on the phone and an itemised quote after we've seen the job. Nothing starts until you approve it.",
  },
  {
    title: "We install it properly",
    copy: "Correct sizing, proper bases and pipework, and a pressure test before we hand over.",
  },
]

const values = [
  {
    title: "Honest advice first",
    description:
      "If a repair will do, we say so. If a borehole is a gamble on your property, we say that too, before you spend anything.",
  },
  {
    title: "Done properly, not quickly",
    description:
      "Correct sizing, level bases and tested connections. We would rather take longer than send you a system that fails in a year.",
  },
  {
    title: "Transparent pricing",
    description:
      "Estimate on the phone, itemised quote in writing, and no surprise extras added to the invoice afterwards.",
  },
  {
    title: "One team for the whole system",
    description:
      "From drilling to pump, tank and plumbing, one team means no finger-pointing between contractors when something needs fixing.",
  },
]

const roles = [
  "Borehole drilling crews",
  "Pump technicians",
  "Solar and irrigation installers",
  "Plumbers and geyser installers",
  "Emergency response teams",
  "Site assessors and quoting staff",
]

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-primary py-16 text-primary-foreground lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              About Borehole Works
            </p>
            <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Gauteng's water systems, <span className="text-accent">done right.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
              We drill boreholes, install pumps, tanks, solar and irrigation systems, and handle the
              plumbing that connects it all, for homes, farms and businesses across{" "}
              <strong className="text-white">Pretoria, Johannesburg, Midrand</strong> and the rest of Gauteng.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CallButton size="lg" />
              <WhatsAppCta size="lg" label="WhatsApp us" />
              <EmailCta size="lg" onDark />
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-primary-foreground/15 pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold text-accent sm:text-4xl">{stat.value}</p>
                  <p className="mt-1 text-xs text-primary-foreground/70 sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MOVING PHOTOS */}
      <section className="overflow-hidden bg-muted py-10">
        <ImageMarquee images={marqueeImages} name="about" direction="left" speed={40} />
      </section>

      {/* WHO WE ARE */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold lg:text-4xl">Who we are</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              <strong className="text-foreground">Borehole Works</strong> is a South African water systems
              company. With over 10 years of experience, we help people take control of their water supply:
              drilling boreholes, sizing and installing pumps, setting up storage tanks, and powering it all
              with solar where it makes sense.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Most of our customers come to us after a water problem: municipal cuts, a pump that has died,
              a tank that never quite worked, or a borehole that was drilled but never finished properly. We
              fix the actual cause, not just the symptom.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We'd rather earn your call next time than oversell you this time.
            </p>
          </div>

          <WatermarkedImage
            src="/pump_systems_boreholes.jpg"
            alt="Borehole Works pump system installation in Gauteng"
            className="aspect-[4/3] rounded-2xl shadow-xl"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="border-y border-border bg-muted py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold lg:text-4xl">Everything your water system needs</h2>
            <p className="mt-4 text-muted-foreground">Nine services, one team.</p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent"
              >
                <h3 className="font-bold">{service.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{service.copy}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold lg:text-4xl">How we work</h2>
            <p className="mt-4 text-muted-foreground">No surprises, from the first call to the last connection.</p>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div key={step.title}>
                <p className="text-sm font-bold text-accent">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="border-y border-border bg-muted py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold lg:text-4xl">What we stand for</h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="relative overflow-hidden rounded-2xl border border-border bg-card p-6"
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-accent" aria-hidden="true" />
                <h3 className="text-lg font-bold">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <WatermarkedImage
            src="/borehole_drilling_rig_action.webp"
            alt="Borehole Works drilling crew on site in Gauteng"
            className="aspect-[4/3] rounded-2xl shadow-xl"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />

          <div>
            <h2 className="text-3xl font-bold lg:text-4xl">The people behind the phone</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              A water system takes several skills. Our team covers the lot, so you deal with one company
              from first assessment to final handover.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {roles.map((role) => (
                <li key={role} className="rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium">
                  {role}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h2 className="text-3xl font-bold lg:text-4xl">Let's get your water sorted.</h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Call now for a straight answer and a free site assessment, or send us a photo on WhatsApp.
          </p>
          <BigPhoneLink />
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <CallButton size="lg" />
            <WhatsAppCta size="lg" label="WhatsApp us" />
            <EmailCta size="lg" onDark />
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
            "@type": "AboutPage",
            name: "About Borehole Works",
            url: "https://www.boreholeworks.co.za/about",
            mainEntity: {
              "@type": "Organization",
              name: "Borehole Works",
              url: "https://www.boreholeworks.co.za",
              telephone: "+27-72-411-5472",
              email: "info@boreholeworks.co.za",
              areaServed: ["Gauteng", "Pretoria", "Johannesburg", "Midrand", "Sandton", "Centurion"],
            },
          }),
        }}
      />
    </>
  )
}
