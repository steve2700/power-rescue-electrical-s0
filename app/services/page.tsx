// File path: app/services/page.tsx
// Clean URL: https://www.boreholeworks.co.za/services
// Irrigation photos already carry their own watermark, so they use a plain image.

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CallButton, WhatsAppCta, EmailCta, StickyCallBar, BigPhoneLink } from "@/components/service-cta"
import { ImageMarquee } from "@/components/image-marquee"
import { WatermarkedImage } from "@/components/watermarked-image"

export const metadata: Metadata = {
  title: "Our Services | Borehole Drilling, Pumps & Water Systems Gauteng | Borehole Works",
  description:
    "Borehole drilling, pump installation and repairs, solar pumps, irrigation, water tanks, plumbing, geysers and blocked drains across Pretoria, Johannesburg and Gauteng. Call 072 411 5472.",
  keywords:
    "borehole services Gauteng, pump installation Pretoria, solar borehole pumps, irrigation systems, water tank installation, plumbing Johannesburg",
  alternates: {
    canonical: "https://www.boreholeworks.co.za/services",
  },
  openGraph: {
    title: "Our Services | Borehole Works",
    description:
      "Everything your water system needs, from drilling to pumps, tanks, solar, irrigation and plumbing. One team across Gauteng.",
    images: [
      {
        url: "/borehole_drilling_water_gushing.jpg",
        width: 1200,
        height: 630,
        alt: "Borehole Works drilling rig striking water",
      },
    ],
  },
}

const services = [
  {
    title: "Borehole Drilling",
    description:
      "Free site assessment, drilling, casing and yield testing, so you know what your borehole can deliver before you build a system around it.",
    href: "/borehole-drilling",
    image: "/borehole_drilling_water_gushing.jpg",
    watermark: true,
    features: ["Free site assessment", "Drilling & casing", "Yield testing"],
  },
  {
    title: "Pump Installation & Repairs",
    description:
      "Submersible, borehole and pressure pumps supplied, installed and repaired, with faults diagnosed properly rather than guessed at.",
    href: "/pump-installation-repairs",
    image: "/pump_installation_hero.jpg",
    watermark: true,
    features: ["New installs", "Breakdown repairs", "Correct sizing"],
  },
  {
    title: "Solar Borehole Pumps",
    description:
      "Off-grid solar pumping sized to your borehole's yield, so your water keeps running through load shedding.",
    href: "/solar-borehole-pumps",
    image: "/solar_borehole_pump_aerial_view.jpg",
    watermark: true,
    features: ["Unaffected by load shedding", "Low running cost", "Remote sites"],
  },
  {
    title: "Irrigation Systems",
    description:
      "Drip irrigation for farms, smallholdings and gardens, fed straight from your borehole and designed around your land.",
    href: "/irrigation-systems",
    image: "/large_scale_drip_irrigation_farm.jpg",
    watermark: false,
    features: ["Farm & garden scale", "Fed from your borehole", "Designed to your land"],
  },
  {
    title: "Water Tank Installation",
    description:
      "Tank sizing, stands and bases, plumbing, pump and pressure systems, all pressure tested before handover.",
    href: "/jojo-water-tank-installation",
    image: "/jojo_installation.jpg",
    watermark: true,
    features: ["Tank sizing", "Stand & base", "Pump & pressure"],
  },
  {
    title: "Plumbing Services",
    description:
      "Installations, repairs, leak detection and everything that connects your water system to your home.",
    href: "/plumbing-services",
    image: "/professional-plumber-working-on-pipes-in-a-gauteng-.jpg",
    watermark: true,
    features: ["Installations", "Leak detection", "Repairs"],
  },
  {
    title: "Emergency Plumber & Burst Pipes",
    description:
      "24/7 emergency response for burst pipes, major leaks and flooding, with the water stopped first.",
    href: "/emergency-plumber-burst-pipes",
    image: "/burst_pipe_centurion.jpg",
    watermark: true,
    features: ["24/7 response", "Water stopped first", "Fully stocked vehicles"],
  },
  {
    title: "Geyser Installation & Repairs",
    description:
      "Electric, solar and Kwikot geysers installed, repaired and serviced, with insurance replacements handled.",
    href: "/geyser-installation-repairs",
    image: "/kwikot_geyser_installation.jpg",
    watermark: true,
    features: ["Electric & solar", "Kwikot installers", "Insurance claims"],
  },
  {
    title: "Blocked Drains Unblocking",
    description:
      "High-pressure jetting and CCTV inspection, so blockages are cleared properly and the cause is found.",
    href: "/blocked-drains-unblocking",
    image: "/blocked_drains.jpg",
    watermark: true,
    features: ["High-pressure jetting", "CCTV inspection", "Same-day service"],
  },
]

const marqueeImages = [
  { src: "/borehole_drilling_rig_action.webp", alt: "Drilling rig on site" },
  { src: "/eco_water_tanks_installation.jpg", alt: "Eco water tanks installation" },
  { src: "/pump_systems_boreholes.jpg", alt: "Borehole pump system" },
  { src: "/solar_borehole_tank_installation.jpg", alt: "Solar-powered tank installation" },
  { src: "/green_water_tank_installation.jpg", alt: "Water tank installation" },
  { src: "/solar_geyser_installation_pretoria.jpg", alt: "Solar geyser installation" },
]

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-primary py-16 text-primary-foreground lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">Our services</p>
            <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Everything your water system needs, <span className="text-accent">from one team.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
              From drilling the borehole to the last drop reaching your tap. Boreholes, pumps, solar, tanks,
              irrigation and plumbing across{" "}
              <strong className="text-white">Pretoria, Johannesburg, Midrand</strong> and Gauteng.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CallButton size="lg" />
              <WhatsAppCta size="lg" label="WhatsApp us" />
              <EmailCta size="lg" onDark />
            </div>
          </div>
        </div>
      </section>

      {/* MOVING PHOTOS */}
      <section className="overflow-hidden bg-muted py-10">
        <ImageMarquee images={marqueeImages} name="services" direction="right" speed={40} />
      </section>

      {/* SERVICES GRID */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold lg:text-4xl">Nine services, one team</h2>
            <p className="mt-4 text-muted-foreground">
              Pick a service to see how it works, what it involves and what to expect.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.href}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                {service.watermark ? (
                  <WatermarkedImage src={service.image} alt={service.title} className="aspect-[4/3]" />
                ) : (
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="h-1 w-full bg-accent" aria-hidden="true" />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold transition-colors group-hover:text-accent">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-4 space-y-1 text-sm text-muted-foreground">
                    {service.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="mt-6 inline-block text-sm font-bold text-accent hover:underline"
                  >
                    Learn more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NOT SURE */}
      <section className="border-y border-border bg-muted py-14">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h2 className="text-2xl font-bold sm:text-3xl">Not sure which service you need?</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Describe the problem and we'll tell you what it needs, or send a photo on WhatsApp.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <CallButton size="md" />
            <WhatsAppCta size="md" label="Send us a photo" />
            <EmailCta size="md" />
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Questions first? Read our{" "}
            <Link href="/faq" className="font-semibold text-accent hover:underline">
              FAQ page
            </Link>
            .
          </p>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h2 className="text-3xl font-bold lg:text-4xl">Ready for water you can rely on?</h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Call now for a free site assessment and a straight answer on cost.
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
            "@type": "ItemList",
            name: "Borehole Works services",
            itemListElement: services.map((service, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: service.title,
              url: `https://www.boreholeworks.co.za${service.href}`,
            })),
          }),
        }}
      />
    </>
  )
}
