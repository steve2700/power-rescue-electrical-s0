"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { EMAIL, PHONE_DISPLAY, PHONE_TEL } from "@/components/contact-info"
import { SERVICES } from "@/lib/power-rescue"
import { trackCallClick, trackEmailClick } from "@/lib/analytics"
import { Logo } from "@/components/logo"

const NAV = [
  { label: "Solar and backup", href: "/#backup" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Areas", href: "/#areas" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

export { Logo }

function Chevron({ open }: { open: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "ml-1.5 inline-block h-1.5 w-1.5 border-b-[1.5px] border-r-[1.5px] border-current transition-transform",
        open ? "-rotate-[135deg] translate-y-0.5" : "rotate-45 -translate-y-0.5",
      )}
    />
  )
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMenuOpen(false)
    setServicesOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-40">
      <div className="bg-accent text-accent-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-x-6 px-4 py-2 text-[13px] font-medium sm:justify-between sm:px-6">
          <p className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
            Emergency line open day and night across Gauteng
          </p>
          <div className="hidden items-center gap-6 sm:flex">
            <a href={`mailto:${EMAIL}`} onClick={trackEmailClick} className="hover:underline">
              {EMAIL}
            </a>
            <a href={`tel:${PHONE_TEL}`} onClick={trackCallClick} className="font-semibold hover:underline">
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>

      <div className="border-b border-white/10 bg-primary">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6">
          <Logo />

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            <div className="relative" onMouseLeave={() => setServicesOpen(false)}>
              <button
                type="button"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                onClick={() => setServicesOpen((v) => !v)}
                onMouseEnter={() => setServicesOpen(true)}
                className="flex items-center rounded-full px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                Services
                <Chevron open={servicesOpen} />
              </button>
              {servicesOpen && (
                <div className="absolute left-0 top-full pt-3">
                  <ul className="grid w-[520px] grid-cols-2 gap-1 rounded-3xl border border-border bg-card p-3 shadow-2xl">
                    {SERVICES.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/#${s.slug}`}
                          className="block rounded-2xl px-4 py-3 transition-colors hover:bg-muted"
                        >
                          <span className="block text-sm font-semibold text-foreground">{s.title}</span>
                          <span className="mt-0.5 block text-xs text-muted-foreground">{s.short}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${PHONE_TEL}`}
              onClick={trackCallClick}
              className="hidden items-center gap-3 rounded-full bg-white py-2 pl-5 pr-2 text-sm font-semibold text-primary transition-transform hover:scale-[1.02] sm:flex"
            >
              <span className="flex flex-col leading-tight">
                <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-primary/55">Call now</span>
                {PHONE_DISPLAY}
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent" aria-hidden="true">
                <span className="block h-2 w-2 rotate-45 border-r-2 border-t-2 border-primary -translate-x-px" />
              </span>
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-full border border-white/20 lg:hidden"
            >
              <span
                className={cn("block h-0.5 w-5 bg-white transition-transform", menuOpen && "translate-y-1 rotate-45")}
              />
              <span
                className={cn("block h-0.5 w-5 bg-white transition-transform", menuOpen && "-translate-y-1 -rotate-45")}
              />
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav id="mobile-nav" aria-label="Mobile" className="border-t border-white/10 bg-primary lg:hidden">
            <div className="mx-auto max-w-7xl px-4 pb-6 pt-4 sm:px-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Services</p>
              <ul className="mt-3 grid grid-cols-1 gap-1 sm:grid-cols-2">
                {SERVICES.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/#${s.slug}`} onClick={() => setMenuOpen(false)} className="block py-2 text-white/85">
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="mt-4 border-t border-white/10 pt-4">
                {NAV.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="block py-2.5 font-display text-xl font-semibold text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <a
                href={`tel:${PHONE_TEL}`}
                onClick={trackCallClick}
                className="mt-5 flex h-14 items-center justify-center rounded-full bg-accent font-semibold text-accent-foreground"
              >
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
