import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_NUMBER } from "@/components/contact-info"

export const metadata: Metadata = {
  title: "Electrician FAQ Gauteng",
  description:
    "Answers on emergency call-outs, COCs, DB boards, solar and inverter backup across Gauteng. Call or WhatsApp Power Rescue Electrical on 063 039 2007.",
  alternates: { canonical: "/faq" },
  openGraph: {
    url: "/faq",
    title: "Electrician FAQ Gauteng | Power Rescue Electrical",
    description: "Straight answers on emergency electricians, COCs, solar and backup power in Gauteng.",
    images: ["/pr/hero-db-board.png"],
  },
}

type Faq = { q: string; a: string }

const emergencyFaqs: Faq[] = [
  {
    q: "Do you offer a 24/7 emergency electrician service?",
    a: "Yes. Our emergency line is open day and night across Gauteng, including weekends. Call or WhatsApp and we will dispatch the closest available electrician.",
  },
  {
    q: "My breaker keeps tripping. What should I do?",
    a: "Switch off the appliances on that circuit and try the breaker once. If it trips again, leave it off and call us. A breaker that keeps tripping is protecting you from an overload or a fault, and resetting it repeatedly can make things worse.",
  },
  {
    q: "What if I smell burning or see sparks?",
    a: "Switch off the main breaker only if it is safe to reach, keep away from water and hot or sparking points, and get everyone out if you see smoke. Call the fire department first, then call us once everyone is safe.",
  },
  {
    q: "Half my house has no power. Is it the DB board?",
    a: "It can be a tripped breaker, a failed earth leakage unit, a loose connection or a supply fault. We test on site to find the actual cause instead of guessing, then tell you what needs fixing before we start.",
  },
]

const installFaqs: Faq[] = [
  {
    q: "Are your electricians registered?",
    a: "Yes. Our electricians are registered and we issue Certificates of Compliance where the work requires one.",
  },
  {
    q: "Do I need an electrical COC to sell my house?",
    a: "In South Africa a valid electrical COC is normally required when you sell a property, and insurers often ask for one after a claim. We inspect the installation, repair anything that fails, and issue the certificate.",
  },
  {
    q: "What if the inspection finds problems?",
    a: "We list what needs attention and quote the repairs. Once the work is done and tested, we issue the certificate.",
  },
  {
    q: "Do you take on small jobs like extra plug points or lights?",
    a: "Yes. Plug points, downlights and outdoor or security lighting are all jobs we do regularly, and we work to leave walls and ceilings tidy.",
  },
  {
    q: "My DB board is old. Should I replace it?",
    a: "If it still has ceramic fuses, has no earth leakage protection, or shows burn marks or crowded wiring, an upgrade is worth doing. We replace it with a clean, labelled, compliant board.",
  },
]

const solarFaqs: Faq[] = [
  {
    q: "How do you size a solar or backup system?",
    a: "We start with what you actually use and what you need to keep running, not a generic package. The system is then designed around that, with room to grow later.",
  },
  {
    q: "What stays on during load shedding?",
    a: "We split out your essential circuits, such as lights, fridge and Wi-Fi, so they run from the inverter and battery. Heavy loads like stoves and geysers usually need a much larger system, so we talk through that with you first.",
  },
  {
    q: "Do you install hybrid inverters and lithium batteries?",
    a: "Yes. We install hybrid inverters and lithium batteries, with or without solar panels, and wire everything neatly and safely.",
  },
  {
    q: "Is the paperwork included?",
    a: "Mounting, wiring, commissioning and the required paperwork are part of our solar installations.",
  },
]

const generalFaqs: Faq[] = [
  {
    q: "Which areas do you cover?",
    a: "Johannesburg, Pretoria, Sandton, Midrand, Centurion, the East and West Rand and the outskirts of Gauteng. See the full list on our areas page, or call if you are further out.",
  },
  {
    q: "Do you work for businesses as well as homes?",
    a: "Yes. We work for homeowners, offices, shops and complexes, from once-off repairs to planned maintenance.",
  },
  {
    q: "How do I get a quote?",
    a: "Call us or WhatsApp a photo or description of the job. We will give you an idea over the phone and a clear quote once we have seen the work.",
  },
  {
    q: "How can I contact you outside office hours?",
    a: "Our emergency line is open day and night. Call or WhatsApp at any time.",
  },
]

const securityFaqs: Faq[] = [
  {
    q: "Do you repair electric fences, gates and CCTV?",
    a: "Yes. Repairs on all three are among our most common jobs, and no job is too small, from a single broken fence wire to a gate remote or one dead camera.",
  },
  {
    q: "Why does my gate stop working during load shedding?",
    a: "Gate motors run from a battery when the power is off. If the battery is tired, the gate stops. We test and replace gate batteries and chargers.",
  },
  {
    q: "Will my electric fence work during load shedding?",
    a: "Fence energisers normally run from a battery during outages. If your fence goes dead when the power does, the battery or charger is usually the first thing we check.",
  },
  {
    q: "Can I watch my CCTV cameras on my phone?",
    a: "Yes. We set up remote viewing so you can check your cameras from your phone, and we can fix it if it has stopped working.",
  },
  {
    q: "My solar geyser gives no hot water. What should I do?",
    a: "Check that the geyser breaker has not tripped, then call us. Common causes are a failed element or thermostat, or a controller or pump fault on a solar system.",
  },
]

const SECTIONS = [
  {
    id: "emergencies",
    title: "Emergencies and faults",
    items: emergencyFaqs,
    image: "/pr/job-emergency.png",
    alt: "Electrician attending an electrical emergency",
  },
  {
    id: "installations",
    title: "Installations, COCs and DB boards",
    items: installFaqs,
    image: "/pr/power-rescue-residential-distribution-board-installation.jpg",
    alt: "Residential distribution board installation",
  },
  {
    id: "solar",
    title: "Solar and backup power",
    items: solarFaqs,
    image: "/pr/power-rescue-residential-home-solar-system-installation.jpg",
    alt: "Home solar system installation",
  },
  {
    id: "security",
    title: "Gates, fences, CCTV and geysers",
    items: securityFaqs,
    image: "/pr/power-rescue-automatic-sliding-gate-motor-installation.jpg",
    alt: "Automatic sliding gate motor installation",
  },
  {
    id: "general",
    title: "General",
    items: generalFaqs,
    image: "/pr/power-rescue-electrical-inspection-multimeter-testing.jpg",
    alt: "Electrical inspection with a multimeter",
  },
]

const allFaqs = SECTIONS.flatMap((s) => s.items)

const RELATED = [
  { href: "/emergency-electrical-repairs", title: "Emergency electrical repairs", copy: "Tripping, burning smells, no power.", image: "/pr/job-emergency.png" },
  { href: "/electrical-coc-certificate", title: "Electrical COC certificates", copy: "For selling your home or insurance.", image: "/pr/power-rescue-electrical-inspection-multimeter-testing.jpg" },
  { href: "/inverter-battery-backup", title: "Inverter and battery backup", copy: "Keep the lights on through load shedding.", image: "/pr/inverter-install.png" },
]

const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Power Rescue, I have a question.")}`

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: allFaqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

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
            <span className="text-white">FAQ</span>
          </nav>
          <h1 className="mt-6 max-w-3xl text-balance font-display text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl">
            Electrician FAQs, <span className="text-accent">answered straight.</span>
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/75">
            What people ask us about emergencies, COCs, DB boards, solar and backup power across Gauteng. Can&apos;t find
            yours? Call or WhatsApp us.
          </p>
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
      </section>

      {/* Jump links */}
      <nav aria-label="FAQ topics" className="border-b border-border bg-background">
        <ul className="mx-auto flex max-w-7xl flex-wrap gap-3 px-4 py-6 sm:px-6">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="inline-flex rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary"
              >
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* FAQ sections */}
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:py-12">
        {SECTIONS.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-32 py-10">
            <div className="relative aspect-[21/9] overflow-hidden rounded-[28px]">
              <Image
                src={section.image}
                alt={section.alt}
                fill
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" aria-hidden="true" />
            </div>
            <h2 className="mt-6 font-display text-3xl font-bold text-foreground sm:text-4xl">{section.title}</h2>
            <div className="mt-6 divide-y divide-border border-y border-border">
              {section.items.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-lg font-bold text-foreground marker:hidden [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span
                      aria-hidden="true"
                      className="mt-2 h-2 w-2 shrink-0 rotate-45 border-b-2 border-r-2 border-primary transition-transform group-open:-rotate-[135deg] group-open:translate-y-1"
                    />
                  </summary>
                  <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Related */}
      <section className="border-t border-border bg-secondary/50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-bold text-foreground">Related services</h2>
          <ul className="mt-8 grid gap-5 sm:grid-cols-3">
            {RELATED.map((r) => (
              <li key={r.href}>
                <Link
                  href={r.href}
                  className="group block h-full overflow-hidden rounded-[28px] border border-border bg-card transition-colors hover:border-primary"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={r.image}
                      alt=""
                      fill
                      sizes="(min-width: 640px) 33vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-foreground">{r.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{r.copy}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-center text-white">
        <h2 className="text-balance font-display text-3xl font-bold sm:text-4xl">Still have a question?</h2>
        <p className="mx-auto mt-4 max-w-md text-white/75">Call or WhatsApp. We are happy to talk it through.</p>
        <a
          href={`tel:${PHONE_TEL}`}
          className="mt-8 inline-flex h-14 items-center rounded-full bg-white px-8 font-semibold text-primary transition-transform hover:scale-[1.02]"
        >
          Call {PHONE_DISPLAY}
        </a>
      </section>
    </>
  )
}
