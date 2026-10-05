// File path: app/contact/page.tsx
// Clean URL: https://www.boreholeworks.co.za/contact

import type { Metadata } from "next"
import Link from "next/link"
import {
  CallButton,
  WhatsAppCta,
  EmailCta,
  StickyCallBar,
  BigPhoneLink,
  TrackedLink,
} from "@/components/service-cta"
import { ImageMarquee } from "@/components/image-marquee"
import { PHONE_DISPLAY, EMAIL } from "@/components/contact-info"

export const metadata: Metadata = {
  title: "Contact Borehole Works | Free Site Assessment in Gauteng",
  description:
    "Call, WhatsApp or email Borehole Works for borehole drilling, pumps, water tanks, irrigation and plumbing across Gauteng. Free site assessments. Call 072 411 5472.",
  keywords:
    "contact Borehole Works, borehole quote Gauteng, free site assessment Pretoria, pump installation quote Johannesburg, water tank quote Midrand",
  alternates: {
    canonical: "https://www.boreholeworks.co.za/contact",
  },
  openGraph: {
    title: "Contact Borehole Works | Free Site Assessment in Gauteng",
    description:
      "Speak to a water systems specialist today. Call, WhatsApp or email us for a straight answer and a free site assessment.",
    images: [
      {
        url: "/borehole_drilling_water_gushing.jpg",
        width: 1200,
        height: 630,
        alt: "Borehole Works drilling rig striking water in Gauteng",
      },
    ],
  },
}

const topRow = [
  { src: "/borehole_drilling_water_gushing.jpg", alt: "Borehole drilling striking water" },
  { src: "/solar_borehole_pump_aerial_view.jpg", alt: "Aerial view of a solar borehole pump" },
  { src: "/eco_water_tanks_installation.jpg", alt: "Eco water tanks installation" },
  { src: "/pump_installation_hero.jpg", alt: "Pump installation" },
  { src: "/kwikot_geyser_installation.jpg", alt: "Kwikot geyser installation" },
]

const bottomRow = [
  { src: "/jojo_tank_installation.jpg", alt: "Water tank on stand" },
  { src: "/pump_systems_boreholes.jpg", alt: "Borehole pump system" },
  { src: "/green_water_tank_installation.jpg", alt: "Water tank installation" },
  { src: "/borehole_drilling_rig_action.webp", alt: "Drilling rig on site" },
  { src: "/solar_borehole_tank_installation.jpg", alt: "Solar-powered tank installation" },
]

const areas = [
  "Pretoria", "Johannesburg", "Midrand", "Sandton", "Centurion",
  "Fourways", "Randburg", "Bedfordview", "Rosebank", "Roodepoort",
]

const helpfulDetails = [
  "Your suburb or address, so we can tell you straight away if we cover you",
  "What's happening: no water, low pressure, a pump that's stopped, or a new system you want",
  "A photo of the pump, tank, geyser or area if you can grab one",
  "Whether it's urgent, so we can prioritise the right team",
]

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-primary py-16 text-primary-foreground lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Free site assessments across Gauteng
            </p>
            <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Water problem? Talk to a specialist <span className="text-accent">right now.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
              No forms and no waiting for a callback. Call, WhatsApp or email us and you'll get a straight
              answer from someone who actually works on boreholes, pumps and tanks.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CallButton size="lg" />
              <WhatsAppCta size="lg" label="WhatsApp us now" />
              <EmailCta size="lg" label="Email us" onDark />
            </div>

            <p className="mt-6 text-sm text-primary-foreground/60">
              24/7 emergency callouts · Estimate on the phone before we drive out
            </p>
          </div>
        </div>
      </section>

      {/* MOVING PHOTOS */}
      <section className="overflow-hidden bg-muted py-10">
        <div className="space-y-4">
          <ImageMarquee images={topRow} name="contact-top" direction="left" speed={40} />
          <ImageMarquee images={bottomRow} name="contact-bottom" direction="right" speed={40} />
        </div>
      </section>

      {/* PICK THE FASTEST ROUTE */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold lg:text-4xl">Pick the fastest way to get sorted</h2>
            <p className="mt-4 text-muted-foreground">
              Three ways to reach us. Choose whichever suits your situation.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <div className="flex flex-col rounded-2xl border-2 border-accent bg-card p-8">
              <p className="text-sm font-bold uppercase tracking-wide text-accent">Urgent</p>
              <h3 className="mt-3 text-2xl font-bold">No water, flooding or a dead pump?</h3>
              <p className="mt-3 flex-1 text-muted-foreground">
                Call now. A person answers, not a call centre, and you'll get an honest arrival time
                before you commit to anything.
              </p>
              <div className="mt-6">
                <CallButton size="lg" />
              </div>
            </div>

            <div className="flex flex-col rounded-2xl border border-border bg-card p-8">
              <p className="text-sm font-bold uppercase tracking-wide text-accent">Fastest quote</p>
              <h3 className="mt-3 text-2xl font-bold">Send a photo, get a straight answer</h3>
              <p className="mt-3 flex-1 text-muted-foreground">
                WhatsApp us a photo of the pump, tank, geyser or your property and we'll tell you what it
                needs and roughly what it'll cost.
              </p>
              <div className="mt-6">
                <WhatsAppCta
                  size="lg"
                  label="WhatsApp a photo"
                  message="Hi Borehole Works, here's a photo of what I need help with:"
                />
              </div>
            </div>

            <div className="flex flex-col rounded-2xl border border-border bg-card p-8">
              <p className="text-sm font-bold uppercase tracking-wide text-accent">Written quote</p>
              <h3 className="mt-3 text-2xl font-bold">Need it in writing? Email us</h3>
              <p className="mt-3 flex-1 text-muted-foreground">
                Best for larger jobs like new boreholes, solar systems and irrigation. Send your details
                and we'll come back with a proper written quote.
              </p>
              <div className="mt-6">
                <EmailCta size="lg" label="Email us" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS + WHAT TO TELL US */}
      <section className="border-y border-border bg-muted py-16 lg:py-24">
        <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold lg:text-4xl">Contact details</h2>
            <dl className="mt-8 space-y-6">
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Phone</dt>
                <dd className="mt-1">
                  <TrackedLink kind="call" className="text-2xl font-bold tabular-nums hover:text-accent">
                    {PHONE_DISPLAY}
                  </TrackedLink>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">WhatsApp</dt>
                <dd className="mt-1">
                  <TrackedLink kind="whatsapp" className="text-lg font-semibold hover:text-accent">
                    Message us on {PHONE_DISPLAY}
                  </TrackedLink>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Email</dt>
                <dd className="mt-1">
                  <TrackedLink kind="email" className="text-lg font-semibold hover:text-accent">
                    {EMAIL}
                  </TrackedLink>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Hours</dt>
                <dd className="mt-1 text-lg">
                  Mon–Fri: 8:00 AM – 5:00 PM
                  <span className="block font-semibold text-accent">24/7 emergency support</span>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Coverage</dt>
                <dd className="mt-1 text-lg">Gauteng, South Africa. Serving Pretoria and Johannesburg.</dd>
              </div>
            </dl>
          </div>

          <div>
            <h2 className="text-3xl font-bold lg:text-4xl">Tell us this and we can quote faster</h2>
            <ul className="mt-8 space-y-4">
              {helpfulDetails.map((item, i) => (
                <li key={item} className="flex gap-4">
                  <span className="text-sm font-bold text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-muted-foreground">
              Got a general question first? See our{" "}
              <Link href="/faq" className="font-semibold text-accent hover:underline">
                FAQ page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-14">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-bold">We serve all of Gauteng</h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {areas.map((area) => (
              <li key={area} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium">
                {area}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">
            Don't see your area?{" "}
            <TrackedLink kind="call" className="font-semibold text-accent hover:underline">
              Call {PHONE_DISPLAY}
            </TrackedLink>{" "}
            and we'll tell you straight away whether we cover you.
          </p>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h2 className="text-3xl font-bold lg:text-4xl">Every day without reliable water costs you.</h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            One call gets you an honest answer, a rough price and a plan. No obligation.
          </p>
          <BigPhoneLink />
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <CallButton size="lg" />
            <WhatsAppCta size="lg" label="WhatsApp us" />
            <EmailCta size="lg" label="Email us" onDark />
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
            "@type": "ContactPage",
            name: "Contact Borehole Works",
            url: "https://www.boreholeworks.co.za/contact",
            mainEntity: {
              "@type": "LocalBusiness",
              name: "Borehole Works",
              telephone: "+27-72-411-5472",
              email: EMAIL,
              areaServed: areas.map((a) => ({ "@type": "City", name: a })),
              address: {
                "@type": "PostalAddress",
                addressLocality: "Johannesburg",
                addressRegion: "Gauteng",
                addressCountry: "ZA",
              },
            },
          }),
        }}
      />
    </>
  )
}
