import Link from "next/link"
import { Logo } from "@/components/header"
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_NUMBER } from "@/components/contact-info"
import { AREAS, SERVICES } from "@/lib/power-rescue"

const COMPANY = [
  { label: "About us", href: "/about" },
  { label: "Our work", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
  { label: "Areas we cover", href: "/areas" },
  { label: "Contact", href: "/contact" },
]

const TRUST = ["Registered electricians", "COC issued", "Open day and night", "All of Gauteng"]

const headingClass = "text-xs font-semibold uppercase tracking-[0.2em] text-white/40"
const linkClass = "text-white/75 transition-colors hover:text-accent"

function Tick() {
  return (
    <span
      aria-hidden="true"
      className="inline-block h-2.5 w-1.5 shrink-0 -translate-y-px rotate-45 border-b-2 border-r-2 border-accent"
    />
  )
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* CTA */}
        <div className="flex flex-col gap-8 border-b border-white/10 py-14 md:flex-row md:items-end md:justify-between lg:py-16">
          <div>
            <p className="text-sm font-semibold text-accent">24/7 emergency electricians</p>
            <h2 className="mt-3 max-w-xl text-balance font-display text-4xl font-bold leading-[1.05] sm:text-5xl">
              Lights out? <span className="text-accent">Call the rescue.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${PHONE_TEL}`}
              className="flex h-14 items-center rounded-full bg-accent px-7 font-semibold text-accent-foreground transition-transform hover:scale-[1.02]"
            >
              Call {PHONE_DISPLAY}
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Power Rescue, I need an electrician.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 items-center rounded-full border border-white/20 px-7 font-semibold transition-colors hover:border-white/50 hover:bg-white/5"
            >
              WhatsApp us
            </a>
          </div>
        </div>

        {/* Trust strip */}
        <ul className="flex flex-wrap gap-x-8 gap-y-3 border-b border-white/10 py-6 text-sm font-medium text-white/80">
          {TRUST.map((t) => (
            <li key={t} className="flex items-center gap-2.5">
              <Tick />
              {t}
            </li>
          ))}
        </ul>

        {/* Columns */}
        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.2fr_1.1fr_0.8fr_1.2fr] lg:gap-10">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              Emergency repairs, installations, maintenance and solar for homes and businesses across Gauteng and its
              outskirts.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm">
              <li>
                <a href={`tel:${PHONE_TEL}`} className="font-semibold text-white hover:text-accent">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className={linkClass}>
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={headingClass}>Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/${s.slug}`} className={linkClass}>
                    {s.title}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link href="/services" className="font-semibold text-accent hover:underline">
                  View all services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={headingClass}>Company</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {COMPANY.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={headingClass}>Where we work</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {AREAS.map((a) => (
                <li key={a} className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70">
                  {a}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-white/45">
              Plus the outskirts of Gauteng. Ask if you are further out.
            </p>
            <Link href="/areas" className="mt-3 inline-block text-sm font-semibold text-accent hover:underline">
              See all areas
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-2 border-t border-white/10 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {"© "}
            {year} Power Rescue Electrical. All rights reserved.
          </p>
          <p>www.powerrescue.co.za</p>
        </div>
      </div>
    </footer>
  )
}
