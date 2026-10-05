import Link from "next/link"
import { Logo } from "@/components/header"
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_NUMBER } from "@/components/contact-info"
import { AREAS, SERVICES } from "@/lib/power-rescue"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col gap-8 border-b border-white/10 py-14 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-xl text-balance font-display text-4xl font-bold leading-[1.05] sm:text-5xl">
            Lights out? <span className="text-accent">Call the rescue.</span>
          </h2>
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${PHONE_TEL}`}
              className="flex h-14 items-center rounded-full bg-accent px-7 font-semibold text-accent-foreground transition-transform hover:scale-[1.02]"
            >
              {PHONE_DISPLAY}
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 items-center rounded-full border border-white/20 px-7 font-semibold transition-colors hover:border-white/50"
            >
              WhatsApp us
            </a>
          </div>
        </div>

        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              Emergency repairs, installations, maintenance and solar for homes and businesses across Gauteng and its
              outskirts.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/#${s.slug}`} className="text-white/75 transition-colors hover:text-accent">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Company</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { label: "About us", href: "/about" },
                { label: "Our work", href: "/gallery" },
                { label: "How it works", href: "/#how-it-works" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/75 transition-colors hover:text-accent">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Get in touch</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={`tel:${PHONE_TEL}`} className="text-white/75 hover:text-accent">
                  +27 63 039 2007
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="text-white/75 hover:text-accent">
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Where we work</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {AREAS.slice(0, 12).map((a) => (
                <li key={a} className="rounded-full border border-white/12 px-3 py-1 text-xs text-white/70">
                  {a}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-white/45">Plus the outskirts of Gauteng. Ask if you are further out.</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 py-6 text-xs text-white/45 sm:flex-row sm:justify-between">
          <p>
            {"© "}
            {year} Power Rescue Electrical. All rights reserved.
          </p>
          <p>powerrescue.co.za</p>
        </div>
      </div>
    </footer>
  )
}
