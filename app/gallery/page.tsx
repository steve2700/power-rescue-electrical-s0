import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_NUMBER } from "@/components/contact-info"
import { GalleryGrid, type GalleryItem } from "@/components/gallery-grid"

const SITE = "https://www.powerrescue.co.za"

export const metadata: Metadata = {
  title: "Our Work | Electrical Project Gallery Gauteng",
  description:
    "Real Power Rescue Electrical jobs: DB boards, wiring, solar, inverter backup, lighting, gates and security across Gauteng. See the work before you call 063 039 2007.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    url: "/gallery",
    title: "Our Work | Power Rescue Electrical",
    description: "Photos of real electrical jobs across Gauteng.",
    images: ["/pr/hero-db-board.png"],
  },
}

const P = "/pr/power-rescue-"

const CATEGORIES = [
  "DB boards and panels",
  "Wiring and installations",
  "Testing and maintenance",
  "Solar and solar geysers",
  "Backup power",
  "Lighting and security",
  "CCTV and access control",
  "Gates and electric fencing",
]

const ITEMS: GalleryItem[] = [
  // DB boards and panels
  { src: "/pr/hero-db-board.png", caption: "Working on a distribution board", category: "DB boards and panels" },
  { src: `${P}residential-distribution-board-installation.jpg`, caption: "Residential distribution board", category: "DB boards and panels" },
  { src: `${P}commercial-sub-panel-installation.jpg`, caption: "Commercial sub-panel", category: "DB boards and panels" },
  { src: `${P}industrial-three-phase-panel-wiring.jpg`, caption: "Industrial three-phase panel", category: "DB boards and panels" },
  { src: `${P}outdoor-main-electrical-enclosure-box.jpg`, caption: "Outdoor main enclosure", category: "DB boards and panels" },
  // Wiring and installations
  { src: `${P}electrical-wiring-and-conduit-installation.jpg`, caption: "Conduit and wiring installation", category: "Wiring and installations" },
  { src: "/pr/job-install.png", caption: "Electrical installation in progress", category: "Wiring and installations" },
  // Testing and maintenance
  { src: "/pr/job-emergency.png", caption: "Emergency call-out", category: "Testing and maintenance" },
  { src: `${P}electrical-inspection-multimeter-testing.jpg`, caption: "Inspection and multimeter testing", category: "Testing and maintenance" },
  { src: `${P}voltage-multimeter-testing-230v.jpg`, caption: "Testing 230V supply", category: "Testing and maintenance" },
  { src: `${P}electrical-db-board-maintenance.jpg`, caption: "DB board maintenance", category: "Testing and maintenance" },
  { src: "/pr/maintenance-test.png", caption: "Testing an installation", category: "Testing and maintenance" },
  { src: "/pr/job-maintenance.png", caption: "Maintenance visit", category: "Testing and maintenance" },
  // Solar
  { src: `${P}residential-home-solar-system-installation.jpg`, caption: "Home solar installation", category: "Solar and solar geysers" },
  { src: `${P}residential-solar-panel-setup.jpg`, caption: "Residential panel set-up", category: "Solar and solar geysers" },
  { src: `${P}corrugated-roof-solar-panel-array.jpg`, caption: "Panels on a corrugated roof", category: "Solar and solar geysers" },
  { src: `${P}commercial-rooftop-solar-array-system.jpg`, caption: "Commercial rooftop array", category: "Solar and solar geysers" },
  { src: `${P}solar-panel-roof-maintenance-cleaning.jpg`, caption: "Solar panel maintenance", category: "Solar and solar geysers" },
  { src: `${P}residential-solar-geyser-tiled-roof.jpg`, caption: "Solar geyser on a tiled roof", category: "Solar and solar geysers" },
  { src: `${P}apollo-solar-geyser-rooftop-installation.jpg`, caption: "Rooftop solar geyser installation", category: "Solar and solar geysers" },
  { src: "/pr/solar-roof.png", caption: "Rooftop solar", category: "Solar and solar geysers" },
  { src: "/pr/job-solar.png", caption: "Solar job on site", category: "Solar and solar geysers" },
  // Backup
  { src: "/pr/inverter-install.png", caption: "Hybrid inverter and lithium battery", category: "Backup power" },
  // Lighting and security
  { src: "/pr/lighting-install.png", caption: "Lighting installation", category: "Lighting and security" },
  { src: `${P}commercial-ceiling-lighting-repair.jpg`, caption: "Commercial ceiling lighting repair", category: "Lighting and security" },
  { src: `${P}outdoor-cctv-security-light-repair.jpg`, caption: "Security light and CCTV repair", category: "Lighting and security" },
  // CCTV and access control
  { src: `${P}residential-cctv-camera-installation.jpg`, caption: "Residential CCTV camera installation", category: "CCTV and access control" },
  { src: `${P}outdoor-bullet-cctv-camera-brick-wall.jpg`, caption: "Bullet camera on a brick wall", category: "CCTV and access control" },
  { src: `${P}cctv-security-camera-monitor-display.jpg`, caption: "Live CCTV camera view", category: "CCTV and access control" },
  { src: `${P}dahua-intercom-access-control-keypad.jpg`, caption: "Dahua intercom and access keypad", category: "CCTV and access control" },
  { src: `${P}outdoor-beam-alarm-sensor-installation.jpg`, caption: "Outdoor beam sensor installation", category: "CCTV and access control" },
  // Gates and electric fencing
  { src: `${P}automatic-sliding-gate-motor-installation.jpg`, caption: "Sliding gate motor installation", category: "Gates and electric fencing" },
  { src: `${P}driveway-gate-automation-wiring.jpg`, caption: "Driveway gate automation wiring", category: "Gates and electric fencing" },
  { src: `${P}boundary-wall-electric-security-fencing.jpg`, caption: "Boundary wall electric fence", category: "Gates and electric fencing" },
  { src: `${P}wall-top-electric-fence-bracket-wiring.jpg`, caption: "Wall-top fence bracket wiring", category: "Gates and electric fencing" },
  { src: `${P}residential-wall-top-electric-fence.jpg`, caption: "Residential wall-top electric fence", category: "Gates and electric fencing" },
  { src: `${P}plastered-wall-top-electric-fence-installation.jpg`, caption: "Wall-top fence on a plastered wall", category: "Gates and electric fencing" },
  { src: `${P}perimeter-free-standing-electric-fencing-plot.jpg`, caption: "Free-standing perimeter fence", category: "Gates and electric fencing" },
  { src: `${P}freestanding-agricultural-electric-fence-post.jpg`, caption: "Agricultural electric fence", category: "Gates and electric fencing" },
  { src: `${P}nemtek-wizord-4-electric-fence-energizer.jpg`, caption: "Nemtek energiser installation", category: "Gates and electric fencing" },
  { src: `${P}nemtek-electric-fence-warning-sign.jpg`, caption: "Electric fence warning sign", category: "Gates and electric fencing" },
  { src: `${P}electric-fence-installation-warning-sign.jpg`, caption: "Electric fence installation", category: "Gates and electric fencing" },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Power Rescue Electrical project gallery",
  url: `${SITE}/gallery`,
  image: ITEMS.slice(0, 12).map((i) => ({
    "@type": "ImageObject",
    contentUrl: `${SITE}${i.src}`,
    caption: i.caption,
  })),
}

const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi Power Rescue, I saw your work and would like a quote.",
)}`

export default function GalleryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-white">
        <Image
          src={`${P}commercial-rooftop-solar-array-system.jpg`}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
          <nav aria-label="Breadcrumb" className="text-sm text-white/60">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Our work</span>
          </nav>
          <h1 className="mt-6 max-w-3xl text-balance font-display text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl">
            Real jobs. <span className="text-accent">Real electricians.</span>
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/75">
            {ITEMS.length} photos from our own jobs across Gauteng. Filter by type of work, tap any photo to see it full
            size.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <GalleryGrid items={ITEMS} categories={CATEGORIES} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-center text-white">
        <h2 className="text-balance font-display text-3xl font-bold sm:text-4xl">Want work like this at your place?</h2>
        <p className="mx-auto mt-4 max-w-md text-white/75">
          Call now, or send a photo on WhatsApp and we will tell you what it needs.
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
          <Link
            href="/services"
            className="inline-flex h-14 items-center rounded-full border border-white/25 px-8 font-semibold transition-colors hover:bg-white/10"
          >
            See all services
          </Link>
        </div>
      </section>
    </>
  )
}
