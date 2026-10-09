import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  EMAIL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_NUMBER,
} from "@/components/contact-info";
import { JobCard } from "@/components/home/job-card";
import { Tick } from "@/components/tick";
import { AREAS, SERVICES } from "@/lib/power-rescue";

const SITE = "https://www.powerrescue.co.za";

export const metadata: Metadata = {
  title: "Contact an Electrician in Gauteng",
  description:
    "Call, WhatsApp or email Power Rescue Electrical for emergency repairs, installations, COCs, solar and backup power across Gauteng. 24/7 emergency line: 063 039 2007.",
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
    title: "Contact Power Rescue Electrical | 24/7 Electricians in Gauteng",
    description:
      "Speak to a registered electrician now. Call, WhatsApp or send a job card.",
    images: ["/pr/hero-db-board.png"],
  },
};

const wa = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

const TELL_US = [
  "Your suburb, so we can confirm straight away that we cover you",
  "What is happening: no power, a tripping breaker, a burning smell, or a new job you want quoted",
  "A photo of the DB board, the damage or the area, if you can grab one",
  "Whether it is urgent, so we can prioritise the right electrician",
];

const STRIP = [
  {
    src: "/pr/power-rescue-residential-distribution-board-installation.jpg",
    alt: "Residential distribution board installation",
    caption: "DB boards",
  },
  {
    src: "/pr/power-rescue-electrical-inspection-multimeter-testing.jpg",
    alt: "Electrical inspection with a multimeter",
    caption: "Fault finding",
  },
  {
    src: "/pr/power-rescue-residential-home-solar-system-installation.jpg",
    alt: "Residential solar system installation",
    caption: "Solar",
  },
  {
    src: "/pr/inverter-install.png",
    alt: "Hybrid inverter and battery installation",
    caption: "Backup power",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Power Rescue Electrical",
    url: `${SITE}/contact`,
    mainEntity: {
      "@type": "Electrician",
      name: "Power Rescue Electrical",
      url: SITE,
      telephone: "+27-63-039-2007",
      email: EMAIL,
      image: `${SITE}/pr/hero-db-board.png`,
      areaServed: AREAS.map((a) => ({
        "@type": "Place",
        name: `${a}, Gauteng`,
      })),
      address: {
        "@type": "PostalAddress",
        addressRegion: "Gauteng",
        addressCountry: "ZA",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+27-63-039-2007",
        contactType: "emergency",
        areaServed: "ZA-GP",
        availableLanguage: ["English"],
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact",
        item: `${SITE}/contact`,
      },
    ],
  },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
        <div
          className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
          <nav aria-label="Breadcrumb" className="text-sm text-white/60">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Contact</span>
          </nav>
          <h1 className="mt-6 max-w-3xl text-balance font-display text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl">
            Need an electrician?{" "}
            <span className="text-accent">Talk to us now.</span>
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/75">
            Call, WhatsApp or send a job card. You get a straight answer from a
            registered electrician team that covers Johannesburg, Pretoria, the
            East and West Rand.
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-white/85">
            {[
              "Emergency line open day and night",
              "Registered electricians",
              "COC issued",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2.5">
                <Tick />
                {t}
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
            <a
              href={wa("Hi Power Rescue, I need an electrician.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 items-center rounded-full border border-white/25 px-7 font-semibold transition-colors hover:bg-white/10"
            >
              WhatsApp us now
            </a>
          </div>
        </div>
      </section>

      {/* Photo strip */}
      <section className="relative z-10 -mt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {STRIP.map((p) => (
              <li
                key={p.src}
                className="group relative aspect-[4/3] overflow-hidden rounded-[24px] border-4 border-background shadow-xl"
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 to-transparent p-3 pt-10">
                  <p className="text-sm font-semibold text-white">
                    {p.caption}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pick the fastest route */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-sm font-semibold text-muted-foreground">
            Get in touch
          </p>
          <h2 className="mt-3 max-w-2xl text-balance font-display text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl">
            Pick the fastest way to get sorted.
          </h2>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            <div className="flex flex-col overflow-hidden rounded-[28px] bg-primary p-8 text-white">
              <div className="relative -mx-8 -mt-8 mb-8 aspect-[16/9]">
                <Image
                  src="/pr/job-emergency.png"
                  alt="Electrician attending an electrical emergency"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Urgent
              </p>
              <h3 className="mt-4 font-display text-2xl font-bold">
                No power, a burning smell or a dead board?
              </h3>
              <p className="mt-3 flex-1 leading-relaxed text-white/75">
                Call now. We will dispatch the closest available electrician and
                give you an honest arrival estimate for your area.
              </p>
              <a
                href={`tel:${PHONE_TEL}`}
                className="mt-8 inline-flex h-14 w-fit items-center rounded-full bg-accent px-7 font-semibold text-accent-foreground transition-transform hover:scale-[1.02]"
              >
                Call {PHONE_DISPLAY}
              </a>
            </div>

            <div className="flex flex-col overflow-hidden rounded-[28px] border border-border bg-secondary/60 p-8">
              <div className="relative -mx-8 -mt-8 mb-8 aspect-[16/9]">
                <Image
                  src="/pr/power-rescue-electrical-db-board-maintenance.jpg"
                  alt="Electrician working on a DB board"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Fastest quote
              </p>
              <h3 className="mt-4 font-display text-2xl font-bold text-foreground">
                Send a photo, get a straight answer
              </h3>
              <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">
                WhatsApp a photo of the DB board, the damage or the area and
                tell us what you need. We will tell you what it involves.
              </p>
              <a
                href={wa(
                  "Hi Power Rescue, here is a photo of what I need help with:",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex h-14 w-fit items-center rounded-full bg-primary px-7 font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                WhatsApp a photo
              </a>
            </div>

            <div className="flex flex-col overflow-hidden rounded-[28px] border border-border bg-secondary/60 p-8">
              <div className="relative -mx-8 -mt-8 mb-8 aspect-[16/9]">
                <Image
                  src="/pr/power-rescue-commercial-rooftop-solar-array-system.jpg"
                  alt="Commercial rooftop solar array"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Written quote
              </p>
              <h3 className="mt-4 font-display text-2xl font-bold text-foreground">
                Need it in writing? Email us
              </h3>
              <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">
                Best for larger jobs like rewires, solar and backup systems.
                Send plans or details and we will come back with a proper quote.
              </p>
              <a
                href={`mailto:${EMAIL}?subject=${encodeURIComponent("Quote request")}`}
                className="mt-8 inline-flex h-14 w-fit items-center rounded-full border border-border bg-card px-7 font-semibold text-foreground transition-colors hover:border-primary"
              >
                Email us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp by service */}
      <section className="border-y border-border bg-secondary/50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="max-w-2xl text-balance font-display text-3xl font-bold text-foreground sm:text-4xl">
            What do you need? Tap and message us.
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Each button opens WhatsApp with your job already described, so you
            only have to hit send.
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <a
                  href={wa(`Hi Power Rescue, I need help with: ${s.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Details + job card */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-4xl font-bold text-foreground">
              Contact details
            </h2>
            <dl className="mt-8 space-y-6">
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Phone
                </dt>
                <dd className="mt-1">
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="font-display text-3xl font-bold tabular-nums text-foreground hover:text-primary"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  WhatsApp
                </dt>
                <dd className="mt-1">
                  <a
                    href={wa("Hi Power Rescue, I need an electrician.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-foreground hover:text-primary"
                  >
                    Message us on {PHONE_DISPLAY}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-lg font-semibold text-foreground hover:text-primary"
                  >
                    {EMAIL}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Emergency line
                </dt>
                <dd className="mt-1 text-lg text-foreground">
                  Open day and night, every day of the week
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Coverage
                </dt>
                <dd className="mt-1 text-lg text-foreground">
                  Gauteng and its outskirts.{" "}
                  <Link
                    href="/areas"
                    className="font-semibold text-primary hover:underline"
                  >
                    See all areas
                  </Link>
                </dd>
              </div>
            </dl>

            <h3 className="mt-12 font-display text-2xl font-bold text-foreground">
              Tell us this and we can help faster
            </h3>
            <ul className="mt-6 space-y-4">
              {TELL_US.map((item, i) => (
                <li key={item} className="flex gap-4">
                  <span className="font-display text-sm font-bold tabular-nums text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div id="job-card" className="scroll-mt-32">
            <div className="rounded-[32px] bg-primary p-2 sm:p-3">
              <JobCard />
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Prefer a form? Send a job card and we will come back to you. For
              anything urgent, calling is faster.
            </p>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="border-t border-border bg-secondary/50 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-foreground">
            We work across Gauteng
          </h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {AREAS.map((a) => (
              <li
                key={a}
                className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground"
              >
                {a}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">
            Not on the list?{" "}
            <a
              href={`tel:${PHONE_TEL}`}
              className="font-semibold text-primary hover:underline"
            >
              Call {PHONE_DISPLAY}
            </a>{" "}
            and we will tell you whether we can get to you. General question
            first? Read the{" "}
            <Link
              href="/faq"
              className="font-semibold text-primary hover:underline"
            >
              FAQ
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative overflow-hidden bg-primary py-20 text-center text-white">
        <Image
          src="/pr/power-rescue-industrial-three-phase-panel-wiring.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-primary/70" aria-hidden="true" />
        <div className="relative px-4">
          <h2 className="text-balance font-display text-3xl font-bold sm:text-4xl">
            Do not sit in the dark.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-white/75">
            One call gets you an honest answer and a plan.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex h-14 items-center rounded-full bg-white px-8 font-semibold text-primary transition-transform hover:scale-[1.02]"
            >
              Call {PHONE_DISPLAY}
            </a>
            <a
              href={wa("Hi Power Rescue, I need an electrician.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center rounded-full border border-white/25 px-8 font-semibold transition-colors hover:bg-white/10"
            >
              WhatsApp us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
