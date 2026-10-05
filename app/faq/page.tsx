// File path: app/faq/page.tsx
// Clean URL: https://www.boreholeworks.co.za/faq

import type { Metadata } from "next"
import Link from "next/link"
import { CallButton, WhatsAppCta, StickyCallBar, BigPhoneLink } from "@/components/service-cta"
import { ImageMarquee } from "@/components/image-marquee"
import { PHONE_DISPLAY } from "@/components/contact-info"

export const metadata: Metadata = {
  title: "FAQ | Borehole Works Gauteng",
  description:
    "Answers to common questions about borehole drilling, pump installation, solar pumps, water tanks and plumbing in Gauteng. Call 072 411 5472 or WhatsApp us.",
  alternates: {
    canonical: "https://www.boreholeworks.co.za/faq",
  },
}

const marqueeImages = [
  { src: "/borehole_drilling_water_gushing.jpg", alt: "Borehole drilling striking water" },
  { src: "/pump_installation_hero.jpg", alt: "Pump installation" },
  { src: "/solar_borehole_pump_aerial_view.jpg", alt: "Solar borehole pump aerial view" },
  { src: "/jojo_tank_installation.jpg", alt: "Water tank installation" },
  { src: "/kwikot_geyser_installation.jpg", alt: "Geyser installation" },
]

const drillingFaqs = [
  {
    q: "How do you know if there's water on my property?",
    a: "We do a site assessment first, reading the land and using our drilling experience in your specific area of Gauteng to give you an honest probability, before any drilling starts.",
  },
  {
    q: "What if you drill and don't find water?",
    a: "It's rare when a proper site assessment has been done first, which is exactly why we don't skip that step. We'll always be upfront about the risk on your specific property before you commit.",
  },
  {
    q: "How deep do boreholes usually need to go in Gauteng?",
    a: "It varies a lot by area, anywhere from around 40m to over 100m. Your site assessment gives you a realistic estimate for your specific property, not a generic industry number.",
  },
  {
    q: "How long does drilling take?",
    a: "Most residential boreholes are drilled and cased within a day, sometimes two depending on ground conditions. Yield testing typically follows a day or two after that.",
  },
]

const pumpFaqs = [
  {
    q: "Do you repair pumps you didn't install yourselves?",
    a: "Yes. Most of our pump callouts are repairs on systems someone else installed. We diagnose the fault first, then tell you honestly whether it's a repair or a replacement, no matter who fitted it originally.",
  },
  {
    q: "What types of pumps do you work on?",
    a: "Submersible, borehole, pressure and booster pumps, across most major brands. If it moves water around your property, we can very likely repair or install it.",
  },
  {
    q: "My borehole pump has stopped working. What's usually wrong?",
    a: "Most commonly a burnt-out motor, a dropped or damaged cable, or the pump has simply run dry because the borehole yield dropped. We test on site rather than guessing before we quote.",
  },
  {
    q: "How do you decide whether to repair or replace a pump?",
    a: "Age, the specific fault, and cost of parts against a new unit. If a repair genuinely makes sense we'll say so and do it. We don't push a replacement when a repair will do the job for years to come.",
  },
]

const generalFaqs = [
  {
    q: "Which areas of Gauteng do you cover?",
    a: "Pretoria, Johannesburg, Midrand, Sandton, Centurion, Randburg, Fourways, Rosebank, Bedfordview and Roodepoort, plus surrounding suburbs. Not sure if you're covered? Just call us.",
  },
  {
    q: "Do you offer emergency callouts?",
    a: "Yes, for burst pipes and urgent plumbing issues we offer 24/7 emergency response across our service areas.",
  },
  {
    q: "How do I get a quote?",
    a: "Call us now, WhatsApp us a photo or description of what you need, or fill in our contact form. We'll give you an estimate on the phone and an itemised quote once we've seen the job.",
  },
]

const allFaqs = [...drillingFaqs, ...pumpFaqs, ...generalFaqs]

function FaqSection({ id, title, items }: { id: string; title: string; items: typeof drillingFaqs }) {
  return (
    <section id={id} className="scroll-mt-24 py-12">
      <h2 className="text-2xl font-bold lg:text-3xl">{title}</h2>
      <div className="mt-6 divide-y divide-border">
        {items.map((faq) => (
          <details key={faq.q} className="group py-5">
            <summary className="cursor-pointer list-none text-lg font-semibold marker:hidden">
              {faq.q}
            </summary>
            <p className="mt-3 leading-relaxed text-muted-foreground">{faq.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

export default function FaqPage() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-border bg-muted py-14 lg:py-20 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="mb-3 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary">
            Frequently Asked Questions
          </p>
          <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Answers before you call
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            Everything people usually ask us about borehole drilling, pumps, water tanks and plumbing across
            Gauteng. Can't find your answer? Call now or WhatsApp us directly.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CallButton size="lg" />
            <WhatsAppCta size="lg" label="WhatsApp us" />
          </div>
        </div>

        {/* Moving image strip */}
        <div className="mt-10">
          <ImageMarquee images={marqueeImages} name="faq" direction="left" speed={40} />
        </div>
      </section>

      {/* JUMP LINKS */}
      <section className="border-b border-border py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap gap-3">
            <a href="#drilling" className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:border-accent hover:text-accent">
              Borehole Drilling
            </a>
            <a href="#pumps" className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:border-accent hover:text-accent">
              Pumps
            </a>
            <a href="#general" className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:border-accent hover:text-accent">
              General
            </a>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-3xl px-4 lg:px-8">
        <FaqSection id="drilling" title="Borehole Drilling" items={drillingFaqs} />
        <FaqSection id="pumps" title="Pumps" items={pumpFaqs} />
        <FaqSection id="general" title="General" items={generalFaqs} />
      </div>

      {/* INTERNAL LINKING */}
      <section className="border-t border-border bg-muted py-14">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-bold">Related services</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <Link href="/borehole-drilling" className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent">
              <h3 className="font-bold">Borehole drilling</h3>
              <p className="mt-1 text-sm text-muted-foreground">Free site assessments across Gauteng.</p>
            </Link>
            <Link href="/pump-installation-repairs" className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent">
              <h3 className="font-bold">Pump installation & repairs</h3>
              <p className="mt-1 text-sm text-muted-foreground">Submersible, borehole and pressure pumps.</p>
            </Link>
            <Link href="/jojo-water-tank-installation" className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent">
              <h3 className="font-bold">Water tank installation</h3>
              <p className="mt-1 text-sm text-muted-foreground">Stand, plumbing and pump, in one visit.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h2 className="text-3xl font-bold lg:text-4xl">Still have a question?</h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Call now or send us a message on WhatsApp, we're happy to talk it through.
          </p>
          <BigPhoneLink />
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <CallButton size="lg" />
            <WhatsAppCta size="lg" label="WhatsApp us" />
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
            "@type": "FAQPage",
            mainEntity: allFaqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />
    </>
  )
}
