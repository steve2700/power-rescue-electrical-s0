// File path: app/gallery/page.tsx
// Real Borehole Works project photos only. Most images carry a small water
// droplet logo watermark so it's unmistakably our own work. Irrigation
// photos are the exception: those source files already carry their own
// watermark, so no droplet is layered on top of them.

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { ScrollReveal } from "@/components/scroll-reveal"

export const metadata: Metadata = {
  title: "Project Gallery | Borehole Works Gauteng",
  description:
    "Real completed jobs from Borehole Works: borehole drilling, pump installations, water tanks, solar systems, irrigation and plumbing work across Pretoria, Johannesburg and Gauteng.",
}

function WatermarkedPhoto({
  src,
  alt,
  caption,
}: {
  src: string
  alt: string
  caption: string
}) {
  return (
    <figure className="group overflow-hidden rounded-2xl border border-border bg-card">
      <div className="relative aspect-[4/3]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute bottom-2 right-2 h-7 w-7 drop-shadow-md">
          <Image
            src="/water_droplet_logo_transparent.png"
            alt=""
            fill
            sizes="28px"
            className="object-contain"
          />
        </div>
      </div>
      <figcaption className="p-4 text-sm font-medium text-muted-foreground">{caption}</figcaption>
    </figure>
  )
}

// Plain version, no watermark - used only for irrigation photos,
// since those source files already carry their own watermark
function PlainPhoto({
  src,
  alt,
  caption,
}: {
  src: string
  alt: string
  caption: string
}) {
  return (
    <figure className="group overflow-hidden rounded-2xl border border-border bg-card">
      <div className="relative aspect-[4/3]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <figcaption className="p-4 text-sm font-medium text-muted-foreground">{caption}</figcaption>
    </figure>
  )
}

const boreholesAndPumps = [
  { src: "/borehole_drilling_water_gushing.jpg", caption: "Borehole drilling, water strike" },
  { src: "/borehole_drilling_rig_action.webp", caption: "Drilling rig on site" },
  { src: "/pump_installation_hero.jpg", caption: "Pump installation" },
  { src: "/water_pump_installation.jpg", caption: "Submersible pump installation" },
  { src: "/pump_systems_boreholes.jpg", caption: "Borehole pump system" },
  { src: "/borehole_pump_water_tank_installation.jpg", caption: "Borehole pump feeding a storage tank" },
  { src: "/pressure_pumps_installations.jpg", caption: "Pressure pump installation" },
  { src: "/pump_supply_replacements.jpg", caption: "Pump breakdown and replacement" },
]

const waterTanks = [
  { src: "/jojo_installation.jpg", caption: "Water tank installation" },
  { src: "/jojo_tank_installation.jpg", caption: "Tank on stand" },
  { src: "/jojo_tank_installation_randburg.jpg", caption: "Tank installation, Randburg" },
  { src: "/3_jojo_tank_installation.jpg", caption: "Multiple tank installation" },
  { src: "/water_pump_for_Jojo_tank.jpg", caption: "Pump fitted for a tank system" },
  { src: "/eco_water_tanks_installation.jpg", caption: "Eco water tank installation" },
  { src: "/green_water_tank_installation.jpg", caption: "Water tank installation" },
  { src: "/pump_tank_storage_installation.jpg", caption: "Pump installed for tank storage" },
]

const solarWaterSolutions = [
  { src: "/solar_borehole_pump_aerial_view.jpg", caption: "Solar borehole pump, aerial view" },
  { src: "/solar_borehole_tank_installation.jpg", caption: "Solar-powered tank installation" },
  { src: "/solar_geyser_installation_pretoria.jpg", caption: "Solar geyser installation, Pretoria" },
  { src: "/apollo_solar_geyser_installation.jpg", caption: "Apollo solar geyser installation" },
  { src: "/pump_system_installation.webp", caption: "Pump system installation" },
  { src: "/water-pump-tank-pipes-green.webp", caption: "Pump and tank pipework" },
  { src: "/water-pump-tank-pipes-green-controls.webp", caption: "Pump control system" },
  { src: "/Pump-and-tanks.jpg", caption: "Pump and water tank installation" },
]

const irrigationSystems = [
  { src: "/large_scale_drip_irrigation_farm.jpg", caption: "Large scale drip irrigation farm" },
  { src: "/farm_workers_drip_irrigation.jpg", caption: "Farm workers in a drip irrigated field" },
  { src: "/farmers_cultivating_drip_irrigated_crops.jpg", caption: "Farmers cultivating drip irrigated crops" },
  { src: "/young_crops_drip_irrigation.jpg", caption: "Young crops under drip irrigation" },
]

const plumbingAndGeysers = [
  { src: "/emergency_plumber_Gauteng.jpg", caption: "Emergency plumbing callout" },
  { src: "/burst_pipe_centurion.jpg", caption: "Burst pipe repair, Centurion" },
  { src: "/blocked_drains.jpg", caption: "Blocked drain clearing" },
  { src: "/blocked_drains_pretoria.jpg", caption: "Blocked drain clearing, Pretoria" },
  { src: "/geyser-installation.jpg", caption: "Geyser installation" },
  { src: "/kwikot_geyser_installation.jpg", caption: "Kwikot geyser installation" },
  { src: "/water_pump_services.jpg", caption: "Pump servicing" },
]

const categories = [
  { title: "Borehole Drilling & Pumps", href: "/pump-installation-repairs", items: boreholesAndPumps, watermark: true },
  { title: "Water Tank Installations", href: "/jojo-water-tank-installation", items: waterTanks, watermark: true },
  { title: "Solar Water Solutions", href: "/solar-borehole-pumps", items: solarWaterSolutions, watermark: true },
  { title: "Irrigation Systems", href: "/irrigation-systems", items: irrigationSystems, watermark: false },
  { title: "Plumbing & Geysers", href: "/plumbing-services", items: plumbingAndGeysers, watermark: true },
]

const marqueeImages = [
  { src: "/borehole_drilling_water_gushing.jpg", alt: "Borehole drilling striking water" },
  { src: "/solar_borehole_pump_aerial_view.jpg", alt: "Aerial view of solar borehole pump" },
  { src: "/large_scale_drip_irrigation_farm.jpg", alt: "Large scale drip irrigation farm" },
  { src: "/eco_water_tanks_installation.jpg", alt: "Eco water tanks installation" },
  { src: "/pump_systems_boreholes.jpg", alt: "Borehole pump system" },
  { src: "/jojo_tank_installation.jpg", alt: "Water tank on stand" },
  { src: "/kwikot_geyser_installation.jpg", alt: "Kwikot geyser installation" },
]

export default function GalleryPage() {
  return (
    <>
      <section className="border-b border-border bg-muted py-14 lg:py-20 overflow-hidden">
        <style>{`
          @keyframes marquee-left {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .marquee-track {
            animation: marquee-left 40s linear infinite;
          }
          .marquee-track:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="container mx-auto px-4 lg:px-8">
          <p className="mb-3 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary">
            Real jobs, not stock photos
          </p>
          <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Our project gallery
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            Every photo here is from a completed Borehole Works job across Pretoria, Johannesburg and
            Gauteng, not a supplier's catalogue.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="tel:+27724115472">Call: 072 411 5472</Link>
            </Button>
            <Button asChild size="lg" className="bg-[#25D366] text-white hover:bg-[#25D366]/90">
              <a href="https://wa.me/27724115472" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="mr-2 h-5 w-5" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>

        {/* Moving image strip */}
        <div className="mt-10">
          <div className="flex w-max marquee-track">
            {[...marqueeImages, ...marqueeImages].map((img, i) => (
              <div key={i} className="relative mx-2 h-40 w-60 flex-shrink-0 overflow-hidden rounded-2xl">
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="240px" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {categories.map((category, i) => (
        <section key={category.href} className={i % 2 === 1 ? "bg-muted py-16 lg:py-20" : "py-16 lg:py-20"}>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-3xl font-bold">{category.title}</h2>
              <Link
                href={category.href}
                className="text-sm font-semibold text-accent hover:underline"
              >
                View this service →
              </Link>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {category.items.map((item, index) => (
                <ScrollReveal key={item.src} delay={(index % 4) * 100}>
                  {category.watermark ? (
                    <WatermarkedPhoto src={item.src} alt={item.caption} caption={item.caption} />
                  ) : (
                    <PlainPhoto src={item.src} alt={item.caption} caption={item.caption} />
                  )}
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h2 className="text-3xl font-bold lg:text-4xl">Want work like this at your place?</h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Call now, or send us a photo on WhatsApp and we'll tell you what it needs.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="tel:+27724115472">Call: 072 411 5472</Link>
            </Button>
            <Button asChild size="lg" className="bg-[#25D366] text-white hover:bg-[#25D366]/90">
              <a href="https://wa.me/27724115472" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="mr-2 h-5 w-5" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
