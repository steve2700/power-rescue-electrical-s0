// File path: app/emergency-plumber-burst-pipes/page.tsx
// Clean URL: https://www.boreholeworks.co.za/emergency-plumber-burst-pipes

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CallButton, WhatsAppCta, StickyCallBar, HeroPhoneLink, BigPhoneLink } from "@/components/service-cta"
import { WatermarkedImage } from "@/components/watermarked-image"
import { ImageMarquee } from "@/components/image-marquee"
import { PHONE_DISPLAY } from "@/components/contact-info"

export const metadata: Metadata = {
  title: "Emergency Plumber Gauteng | 24/7 Burst Pipe Repairs",
  description:
    "Burst pipe or major leak right now? Emergency plumbers in Pretoria, Johannesburg, Midrand and Centurion. On site fast, water stopped first. Call 072 411 5472 or WhatsApp us a photo.",
  keywords:
    "emergency plumber Gauteng, burst pipe repair Pretoria, 24 hour plumber Johannesburg, emergency plumbing Midrand, burst pipe near me, emergency leak repair Centurion",
  alternates: {
    canonical: "https://www.boreholeworks.co.za/emergency-plumber-burst-pipes",
  },
  openGraph: {
    title: "Emergency Plumber Gauteng | 24/7 Burst Pipe Repairs",
    description:
      "Water running where it shouldn't be? Our emergency plumbers respond fast, 24/7, across Pretoria, Johannesburg and Midrand. Call 072 411 5472.",
    images: [
      {
        url: "/24hr-Emergency-Plumber-Johannesburg.png",
        width: 1200,
        height: 630,
        alt: "24/7 emergency plumber on a callout in Johannesburg",
      },
    ],
  },
}

const emergencies = [
  {
    title: "Burst pipes",
    image: "/burst_pipe_centurion.jpg",
    alt: "Plumber repairing a burst water pipe at a home in Centurion",
    copy: "Water shut off on arrival, pipe cut out and replaced the same visit, pressure tested before we go.",
  },
  {
    title: "Geyser bursts",
    image: "/kwikot_geyser_installation.jpg",
    alt: "Replacement Kwikot geyser installed after a burst geyser emergency",
    copy: "Ceiling flooding from a burst geyser is the most common after-hours call we get. Power isolated, geyser replaced.",
  },
  {
    title: "Blocked sewer backing up",
    image: "/blocked_drains.jpg",
    alt: "High pressure jetting machine clearing a blocked sewer line",
    copy: "Sewage backing up into a house or yard doesn't wait for Monday. Jetted clear so it doesn't come straight back.",
  },
  {
    title: "No water supply",
    image: "/professional-plumber-working-on-pipes-installation.jpg",
    alt: "Plumber diagnosing a loss of water supply fault",
    copy: "Could be a burst on your side of the meter, a stuck valve or a borehole pump issue. We find out and tell you straight.",
  },
  {
    title: "Frozen or cracked pipes",
    image: "/professional-plumber-working-on-pipes-in-a-gauteng-.jpg",
    alt: "Plumber repairing a cracked pipe after a cold snap",
    copy: "Highveld cold snaps crack exposed pipework. We repair the split and lag the pipe so it doesn't happen again next winter.",
  },
  {
    title: "Active flood damage",
    image: "/emergency_plumber_Gauteng.jpg",
    alt: "Emergency plumber arriving to control flood damage",
    copy: "First job on arrival is always stopping the water. Permanent repairs come after the damage is contained.",
  },
]

const quickSteps = [
  {
    step: 1,
    title: "Shut off the main valve",
    description: "Usually near your water meter, at the boundary wall or under the kitchen sink. Turning it off stops the flooding getting worse while we're on the way.",
  },
  {
    step: 2,
    title: "Kill the power to wet areas",
    description: "If water is near a geyser, pump or a distribution board, switch off that circuit at the DB board. Don't touch switches with wet hands.",
  },
  {
    step: 3,
    title: "Call or WhatsApp us",
    description: "Tell us what's happening and send a photo if you can. We'll give you an honest arrival time before you commit to anything.",
  },
  {
    step: 4,
    title: "Move what you can, safely",
    description: "Furniture, rugs and valuables out of the water where it's safe to do so. Don't stand in standing water near any electrics.",
  },
]

const marqueeImages = [
  { src: "/24hr-Emergency-Plumber-Johannesburg.png", alt: "24/7 emergency plumber callout" },
  { src: "/burst_pipe_centurion.jpg", alt: "Burst pipe repair, Centurion" },
  { src: "/emergency_plumber_Gauteng.jpg", alt: "Emergency plumber controlling flood damage" },
  { src: "/blocked_drains.jpg", alt: "Blocked drain clearing" },
  { src: "/kwikot_geyser_installation.jpg", alt: "Kwikot geyser installation" },
]

const areas = [
  "Pretoria", "Johannesburg", "Midrand", "Centurion", "Sandton",
  "Randburg", "Fourways", "Rosebank", "Bedfordview", "Roodepoort",
]

const faqs = [
  {
    q: "How fast can you actually get to me?",
    a: "For active flooding in Pretoria, Centurion, Midrand and Johannesburg we aim to be on site within 60 to 90 minutes depending on traffic and where the nearest team is. We'll give you a real arrival time on the phone, not a vague promise.",
  },
  {
    q: "What does an emergency callout cost?",
    a: "You get a callout fee and a rough estimate on the phone before we drive out, so there's no surprise. Once the plumber has seen the problem you get an itemised quote for parts and labour.",
  },
  {
    q: "Is a burst geyser covered by my insurance?",
    a: "Most household policies cover geyser bursts and resulting damage. We supply the assessment report and photos your insurer needs, and install the replacement so the claim closes without back and forth.",
  },
  {
    q: "Do you charge more for after-hours or weekend callouts?",
    a: "Our emergency line runs 24/7, including weekends and public holidays. Any after-hours adjustment is confirmed on the phone before we come out, never added to the invoice afterward.",
  },
  {
    q: "What if it turns out not to be an emergency?",
    a: "That's fine, tell us what you're seeing and we'll say so honestly. If it can safely wait for a normal appointment, we'll book it in rather than charge you an emergency rate for a non-emergency.",
  },
]

export default function EmergencyPlumberPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="/24hr-Emergency-Plumber-Johannesburg.png"
          alt="Borehole Works emergency plumber responding to a callout in Johannesburg"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/90 via-black/75 to-black/45" aria-hidden="true" />

        <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-28">
          <div className="max-w-2xl text-white">
            <p className="mb-4 inline-flex items-center rounded-full bg-accent/20 px-4 py-1.5 text-sm font-semibold text-white ring-1 ring-inset ring-accent/50">
              Water running right now? Call, don't wait.
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Burst pipe or major leak? We're on our way.
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">
              A plumber answers this phone, day or night. Tell us what's flooding and where you are,
              and we'll get a fully stocked team moving while you're still on the call.
            </p>

            <HeroPhoneLink label="Emergency line, answered 24/7" />

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <CallButton size="lg" />
              <WhatsAppCta size="lg" label="WhatsApp a photo of it" />
            </div>

            <ul className="mt-10 grid gap-3 text-sm text-white/85 sm:grid-cols-3">
              <li>60–90 min average response</li>
              <li>Fully stocked emergency vehicles</li>
              <li>Licensed, experienced team</li>
            </ul>
          </div>
        </div>
      </section>

      {/* MOVING IMAGE STRIP */}
      <section className="bg-muted py-10">
        <ImageMarquee images={marqueeImages} name="emergency" direction="left" speed={36} />
      </section>

      {/* WHAT TO DO RIGHT NOW */}
      <section className="border-b border-border bg-primary py-14 text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold sm:text-3xl">While you're waiting for us, do this</h2>
            <p className="mt-3 text-primary-foreground/75">
              Four things you can safely do in the next five minutes to stop the damage getting worse.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {quickSteps.map((item) => (
              <div key={item.step} className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-5">
                <p className="text-sm font-bold text-accent">{String(item.step).padStart(2, "0")}</p>
                <h3 className="mt-3 font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">{item.description}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-primary-foreground/70">
            Not sure if it counts as an emergency? Call {PHONE_DISPLAY} anyway and describe what you're
            seeing, we'll tell you honestly whether it needs to be dealt with now.
          </p>
        </div>
      </section>

      {/* WHAT WE GET CALLED OUT FOR, WITH REAL PHOTOS */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold lg:text-4xl">Emergencies we handle every week</h2>
            <p className="mt-4 text-muted-foreground">
              Real jobs from callouts across Pretoria, Centurion, Midrand and Johannesburg.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {emergencies.map((job) => (
              <article key={job.title} className="overflow-hidden rounded-2xl border border-border bg-card">
                <WatermarkedImage src={job.image} alt={job.alt} className="aspect-[4/3]" />
                <div className="p-6">
                  <h3 className="text-xl font-bold">{job.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{job.copy}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <CallButton size="md" />
            <WhatsAppCta size="md" label="Send us a photo on WhatsApp" />
          </div>
        </div>
      </section>

      {/* INTERNAL LINKING */}
      <section className="border-y border-border bg-muted py-14">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-bold">Not an emergency? See the full service</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <Link href="/plumbing-services" className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent">
              <h3 className="font-bold">All plumbing services</h3>
              <p className="mt-1 text-sm text-muted-foreground">Everything we do, callouts and scheduled work.</p>
            </Link>
            <Link href="/geyser-installation-repairs" className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent">
              <h3 className="font-bold">Geyser installation and repairs</h3>
              <p className="mt-1 text-sm text-muted-foreground">Electric, solar and Kwikot.</p>
            </Link>
            <Link href="/blocked-drains-unblocking" className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent">
              <h3 className="font-bold">Blocked drains</h3>
              <p className="mt-1 text-sm text-muted-foreground">Jetting and CCTV inspection.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* PROOF AND PROCESS */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold lg:text-4xl">Why people call us when it's already bad</h2>
            <dl className="mt-8 space-y-6">
              <div>
                <dt className="font-bold">Damage control comes first</dt>
                <dd className="mt-1 text-muted-foreground">
                  The first job on any emergency callout is stopping the water. Permanent repairs follow
                  once the immediate danger is under control.
                </dd>
              </div>
              <div>
                <dt className="font-bold">Fully stocked emergency vehicles</dt>
                <dd className="mt-1 text-muted-foreground">
                  Fittings, pipe, elements, valves and geysers are already on the van, so most emergencies
                  finish on the first visit, not a second callout the next day.
                </dd>
              </div>
              <div>
                <dt className="font-bold">Honest pricing, even at 2am</dt>
                <dd className="mt-1 text-muted-foreground">
                  You get an estimate on the phone before we drive out, and an itemised quote once the
                  plumber has actually seen the problem.
                </dd>
              </div>
              <div>
                <dt className="font-bold">Insurance-ready paperwork</dt>
                <dd className="mt-1 text-muted-foreground">
                  Photos and an assessment report are supplied so your claim closes without you chasing us
                  for documents afterward.
                </dd>
              </div>
            </dl>
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-2xl">
            <WatermarkedImage
              src="/emergency_plumber_Gauteng.jpg"
              alt="Borehole Works emergency plumber on site controlling a flood in Gauteng"
              className="h-full"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="bg-muted py-14">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-bold">Where we respond</h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {areas.map((area) => (
              <li key={area} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium">
                {area}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">
            Not on the list? Call {PHONE_DISPLAY} and we'll tell you straight away whether we can reach
            you and how soon.
          </p>
        </div>
      </section>

      {/* FAQ PREVIEW */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto max-w-3xl px-4 lg:px-8">
          <h2 className="text-3xl font-bold">Questions we get asked mid-emergency</h2>
          <div className="mt-8 divide-y divide-border">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="cursor-pointer list-none text-lg font-semibold marker:hidden">
                  {faq.q}
                </summary>
                <p className="mt-3 leading-relaxed text-muted-foreground">{faq.a}</p>
              </details>
            ))}
          </div>
          <Link href="/faq#general" className="mt-6 inline-block text-sm font-semibold text-accent hover:underline">
            See all FAQs →
          </Link>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h2 className="text-3xl font-bold lg:text-4xl">Still flooding? Stop reading, start calling.</h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            A plumber picks up, not a call centre. Tell us what's happening and we'll get moving.
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
            "@type": "Plumber",
            "@id": "https://www.boreholeworks.co.za/emergency-plumber-burst-pipes#plumber",
            name: "Borehole Works Emergency Plumbing",
            url: "https://www.boreholeworks.co.za/emergency-plumber-burst-pipes",
            telephone: "+27-72-411-5472",
            image: "https://www.boreholeworks.co.za/24hr-Emergency-Plumber-Johannesburg.png",
            priceRange: "$$",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Johannesburg",
              addressRegion: "Gauteng",
              addressCountry: "ZA",
            },
            areaServed: areas.map((a) => ({ "@type": "City", name: a })),
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "00:00",
                closes: "23:59",
              },
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Emergency plumbing services",
              itemListElement: emergencies.map((job) => ({
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: job.title },
              })),
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
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
