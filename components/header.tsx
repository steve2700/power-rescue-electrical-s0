"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_NUMBER } from "@/components/contact-info"
import { SERVICES } from "@/lib/power-rescue"
import { trackCallClick, trackEmailClick } from "@/lib/analytics"
import { Logo } from "@/components/logo"

const NAV = [
  { label: "Solar and backup", href: "/inverter-battery-backup" },
  { label: "FAQ", href: "/faq" },
  { label: "Areas", href: "/areas" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

export { Logo }

function Chevron({ open }: { open: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "ml-2 inline-block h-1.5 w-1.5 border-b-[1.5px] border-r-[1.5px] border-current transition-transform duration-200",
        open ? "-rotate-[135deg] translate-y-0.5" : "rotate-45 -translate-y-0.5",
      )}
    />
  )
}

function Arrow({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("inline-block h-2 w-2 rotate-45 border-r-2 border-t-2 border-current", className)}
    />
  )
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const pathname = usePathname()
  const servicesRef = useRef<HTMLDivElement>(null)

  // Close everything on navigation
  useEffect(() => {
    setMenuOpen(false)
    setServicesOpen(false)
  }, [pathname])

  // Close the services menu on outside click or Escape
  useEffect(() => {
    if (!servicesOpen) return
    const onPointer = (e: PointerEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) setServicesOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setServicesOpen(false)
    }
    document.addEventListener("pointerdown", onPointer)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("pointerdown", onPointer)
      document.removeEventListener("keydown", onKey)
    }
  }, [servicesOpen])

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  const isActive = (href: string) => !href.includes("#") && (pathname === href || pathname.startsWith(`${href}/`))
  const servicesActive = pathname === "/services" || SERVICES.some((s) => isActive(`/${s.slug}`))

  return (
    <header className="sticky top-0 z-40">
      {/* Top bar */}
      <div className="bg-accent text-accent-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-x-6 px-4 py-2 text-[13px] font-medium sm:justify-between sm:px-6">
          <p className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
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

      {/* Main bar */}
      <div className="border-b border-white/10 bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/90">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:h-20">
          <Logo />

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            <div ref={servicesRef} className="relative" onMouseLeave={() => setServicesOpen(false)}>
              <button
                type="button"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                aria-controls="services-menu"
                onClick={() => setServicesOpen((v) => !v)}
                onMouseEnter={() => setServicesOpen(true)}
                className={cn(
                  "flex items-center rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                  servicesOpen || servicesActive ? "text-white" : "text-white/75",
                )}
              >
                Services
                <Chevron open={servicesOpen} />
              </button>

              {servicesOpen && (
                <div id="services-menu" className="absolute -left-24 top-full pt-3">
                  <div className="w-[640px] overflow-hidden rounded-[28px] border border-border bg-card shadow-2xl">
                    <ul className="grid grid-cols-2 gap-1 p-3">
                      {SERVICES.map((s, i) => (
                        <li key={s.slug}>
                          <Link
                            href={`/${s.slug}`}
                            aria-current={isActive(`/${s.slug}`) ? "page" : undefined}
                            className={cn(
                              "group block rounded-2xl px-4 py-3 transition-colors hover:bg-muted",
                              i === 0 && "bg-accent/25 hover:bg-accent/40",
                              isActive(`/${s.slug}`) && "bg-muted",
                            )}
                          >
                            <span className="flex items-center justify-between gap-3 text-sm font-semibold text-foreground">
                              {s.title}
                              <Arrow className="text-primary opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                            </span>
                            <span className="mt-0.5 block text-xs text-muted-foreground">{s.short}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between gap-4 border-t border-border bg-secondary/60 px-7 py-4 text-sm">
                      <Link href="/services" className="font-semibold text-primary hover:underline">
                        View all services
                      </Link>
                      <a href={`tel:${PHONE_TEL}`} onClick={trackCallClick} className="text-muted-foreground hover:text-foreground">
                        Emergency? Call <span className="font-semibold text-foreground">{PHONE_DISPLAY}</span>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                  isActive(item.href) ? "text-white" : "text-white/75",
                )}
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
                <Arrow className="-translate-x-px text-primary" />
              </span>
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-full border border-white/20 transition-colors hover:border-white/50 lg:hidden"
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

        {/* Mobile menu */}
        {menuOpen && (
          <nav
            id="mobile-nav"
            aria-label="Mobile"
            className="max-h-[calc(100dvh-7.5rem)] overflow-y-auto border-t border-white/10 bg-primary lg:hidden"
          >
            <div className="mx-auto max-w-7xl px-4 pb-8 pt-5 sm:px-6">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Services</p>
                <Link href="/services" className="text-sm font-semibold text-accent">
                  View all
                </Link>
              </div>
              <ul className="mt-3 grid grid-cols-1 gap-1 sm:grid-cols-2">
                {SERVICES.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/${s.slug}`}
                      aria-current={isActive(`/${s.slug}`) ? "page" : undefined}
                      className={cn(
                        "block rounded-2xl px-4 py-3",
                        isActive(`/${s.slug}`) ? "bg-white/10" : "hover:bg-white/5",
                      )}
                    >
                      <span className="block text-[15px] font-semibold text-white">{s.title}</span>
                      <span className="mt-0.5 block text-xs text-white/50">{s.short}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              <ul className="mt-5 border-t border-white/10 pt-3">
                {NAV.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="flex items-center justify-between py-3 font-display text-xl font-semibold text-white"
                    >
                      {item.label}
                      <Arrow className="text-white/30" />
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a
                  href={`tel:${PHONE_TEL}`}
                  onClick={trackCallClick}
                  className="flex h-14 items-center justify-center rounded-full bg-accent font-semibold text-accent-foreground"
                >
                  Call {PHONE_DISPLAY}
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Power Rescue, I need an electrician.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-14 items-center justify-center rounded-full border border-white/25 font-semibold text-white"
                >
                  WhatsApp us
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
