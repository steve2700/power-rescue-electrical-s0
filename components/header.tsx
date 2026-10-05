"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Menu, Phone, ChevronDown, ChevronRight, X, MapPin, Mail, Home } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { TrackedLink } from "@/components/service-cta"
import { EMAIL, PHONE_DISPLAY } from "@/components/contact-info"
import { cn } from "@/lib/utils"

const services = [
  {
    title: "Borehole Drilling",
    href: "/borehole-drilling",
    description: "Site assessment, drilling and yield testing for new boreholes",
  },
  {
    title: "Pump Installation & Repairs",
    href: "/pump-installation-repairs",
    description: "Borehole, pressure & submersible pump installs and repairs",
  },
  {
    title: "Solar Borehole Pumps",
    href: "/solar-borehole-pumps",
    description: "Solar-powered pump systems for off-grid water supply",
  },
  {
    title: "Irrigation Systems",
    href: "/irrigation-systems",
    description: "Garden, farm and agricultural irrigation design & install",
  },
  {
    title: "JoJo Water Tank Installation",
    href: "/jojo-water-tank-installation",
    description: "Tank stands, plumbing, pumps & pressure systems",
  },
  {
    title: "Plumbing Services",
    href: "/plumbing-services",
    description: "Installations, repairs, leak detection & geysers",
  },
  {
    title: "Emergency Plumber & Burst Pipes",
    href: "/emergency-plumber-burst-pipes",
    description: "24/7 emergency response for burst pipes & leaks",
  },
  {
    title: "Geyser Installation & Repairs",
    href: "/geyser-installation-repairs",
    description: "Electric, solar & Kwikot geyser installs & repairs",
  },
  {
    title: "Blocked Drains Unblocking",
    href: "/blocked-drains-unblocking",
    description: "Fast drain cleaning with jetting & CCTV inspection",
  },
]

const navLinkClass =
  "inline-flex h-10 items-center justify-center rounded-full px-4 text-sm font-medium transition-colors hover:bg-muted hover:text-accent"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <>
      {/* Top Bar with Contact Info (scrolls away, the pill below stays) */}
      <div className="hidden bg-primary text-primary-foreground lg:block">
        <div className="container mx-auto flex h-10 items-center justify-between px-4 lg:px-8">
          <div className="flex items-center gap-6 text-sm">
            <TrackedLink kind="call" className="flex items-center gap-2 transition-colors hover:text-accent">
              <Phone className="h-3.5 w-3.5" />
              {PHONE_DISPLAY}
            </TrackedLink>
            <TrackedLink kind="whatsapp" className="flex items-center gap-2 transition-colors hover:text-accent">
              <WhatsAppIcon className="h-3.5 w-3.5" />
              WhatsApp Us
            </TrackedLink>
            <TrackedLink kind="email" className="flex items-center gap-2 transition-colors hover:text-accent">
              <Mail className="h-3.5 w-3.5" />
              {EMAIL}
            </TrackedLink>
            
              <a
              href="https://www.google.com/maps?q=Borehole+Works+Gauteng+South+Africa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-accent"
            >
              <MapPin className="h-3.5 w-3.5" />
              Gauteng, South Africa
            </a>
          </div>
        </div>
      </div>

      {/* Floating pill header */}
      <header className="sticky top-0 z-50 px-3 pb-3 pt-3 lg:px-6">
        <div
          className={cn(
            "mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full border px-3 transition-all duration-300 sm:px-4 lg:h-[68px] lg:px-5",
            scrolled
              ? "border-border bg-background/95 shadow-xl backdrop-blur-lg"
              : "border-border/60 bg-background shadow-lg",
          )}
        >
          <Link href="/" className="flex items-center gap-3">
            <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full">
              <Image
                src="/logo-icon.png"
                alt="Borehole Works Logo"
                width={44}
                height={44}
                className="object-cover"
                priority
                quality={90}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-tight tracking-tight text-primary sm:text-xl">
                Borehole <span className="text-accent">Works</span>
              </span>
              <span className="hidden text-xs text-muted-foreground sm:block">Water & Pump Specialists</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            <Link href="/" className={navLinkClass}>
              Home
            </Link>

            <Link href="/about" className={navLinkClass}>
              About Us
            </Link>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={navLinkClass}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronDown
                  className={cn("ml-1 h-4 w-4 transition-transform duration-200", servicesOpen && "rotate-180")}
                />
              </button>

              {servicesOpen && (
                <div className="absolute left-0 top-full z-50 mt-4 w-[640px] rounded-3xl border border-border bg-white shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="grid max-h-[70vh] grid-cols-2 gap-1 overflow-y-auto p-4">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => setServicesOpen(false)}
                        className="group block select-none rounded-2xl border-l-2 border-transparent p-3 transition-all hover:border-accent hover:bg-muted"
                      >
                        <div className="mb-1 text-sm font-semibold leading-tight text-foreground transition-colors group-hover:text-accent">
                          {service.title}
                        </div>
                        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                          {service.description}
                        </p>
                      </Link>
                    ))}
                    <div className="col-span-2 mt-2 border-t border-border pt-3">
                      <Link
                        href="/services"
                        onClick={() => setServicesOpen(false)}
                        className="flex items-center justify-center gap-2 rounded-full bg-accent/10 p-3 text-sm font-semibold text-accent transition-all hover:bg-accent hover:text-accent-foreground"
                      >
                        View All Services <ChevronRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/gallery" className={navLinkClass}>
              Gallery
            </Link>

            <Link href="/service-areas" className={navLinkClass}>
              Service Areas
            </Link>

            <Link href="/contact" className={navLinkClass}>
              Contact
            </Link>
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-3">
            <TrackedLink
              kind="call"
              className="hidden h-11 items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/25 transition hover:bg-accent/90 sm:inline-flex"
            >
              <Phone className="h-4 w-4" />
              Call for a Free Quote
            </TrackedLink>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-11 w-11 rounded-full border-primary/20 bg-transparent transition-all hover:bg-primary hover:text-primary-foreground lg:hidden"
                  aria-label="Toggle menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-md overflow-hidden border-l-0 p-0 [&>button]:hidden">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <SheetDescription className="sr-only">Site navigation and contact options</SheetDescription>

                {/* Mobile Menu Header */}
                <div className="bg-primary p-6 text-primary-foreground">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full">
                        <Image
                          src="/logo-icon.png"
                          alt="Borehole Works"
                          width={40}
                          height={40}
                          className="object-cover"
                          priority
                        />
                      </div>
                      <div>
                        <p className="text-sm font-bold">Borehole Works</p>
                        <p className="text-xs text-white/70">Water & Pump Specialists</p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsOpen(false)}
                      className="rounded-full text-white hover:bg-white/10"
                      aria-label="Close menu"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                  <div className="space-y-2 text-sm text-white/90">
                    <TrackedLink kind="call" className="flex items-center gap-2 transition-colors hover:text-white">
                      <Phone className="h-4 w-4" />
                      {PHONE_DISPLAY}
                    </TrackedLink>
                    <TrackedLink kind="whatsapp" className="flex items-center gap-2 transition-colors hover:text-white">
                      <WhatsAppIcon className="h-4 w-4" />
                      WhatsApp: {PHONE_DISPLAY}
                    </TrackedLink>
                    <TrackedLink kind="email" className="flex items-center gap-2 transition-colors hover:text-white">
                      <Mail className="h-4 w-4" />
                      {EMAIL}
                    </TrackedLink>
                    
                      <a
                      href="https://www.google.com/maps?q=Borehole+Works+Gauteng+South+Africa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 transition-colors hover:text-white"
                    >
                      <MapPin className="h-4 w-4" />
                      Gauteng, South Africa
                    </a>
                  </div>
                </div>

                {/* Mobile Menu Navigation */}
                <nav className="flex-1 overflow-y-auto p-6">
                  <div className="flex flex-col gap-1">
                    <Link
                      href="/"
                      className="flex items-center gap-3 rounded-2xl p-4 text-lg font-medium transition-colors hover:bg-muted"
                      onClick={() => setIsOpen(false)}
                    >
                      <Home className="h-5 w-5 text-accent" />
                      Home
                    </Link>

                    <Link
                      href="/about"
                      className="flex items-center gap-3 rounded-2xl p-4 text-lg font-medium transition-colors hover:bg-muted"
                      onClick={() => setIsOpen(false)}
                    >
                      About Us
                    </Link>

                    {/* Services Accordion */}
                    <div className="overflow-hidden rounded-2xl">
                      <button
                        className="flex w-full items-center justify-between gap-3 p-4 text-lg font-medium transition-colors hover:bg-muted"
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        aria-expanded={mobileServicesOpen}
                      >
                        Services
                        <ChevronDown
                          className={cn(
                            "h-5 w-5 text-muted-foreground transition-transform duration-300",
                            mobileServicesOpen && "rotate-180",
                          )}
                        />
                      </button>

                      <div
                        className={cn(
                          "overflow-hidden transition-all duration-300",
                          mobileServicesOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0",
                        )}
                      >
                        <div className="flex flex-col gap-1 px-4 pb-4">
                          {services.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              className="rounded-xl border-l-2 border-transparent p-3 text-sm font-medium transition-colors hover:border-accent hover:bg-muted hover:text-accent"
                              onClick={() => setIsOpen(false)}
                            >
                              {service.title}
                            </Link>
                          ))}
                        </div>
                        <Link
                          href="/services"
                          className="mx-4 mb-4 flex items-center justify-center gap-2 rounded-full border-2 border-dashed border-accent/30 p-3 text-sm font-medium text-accent transition-colors hover:bg-accent/5"
                          onClick={() => setIsOpen(false)}
                        >
                          View All Services
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>

                    <Link
                      href="/gallery"
                      className="flex items-center gap-3 rounded-2xl p-4 text-lg font-medium transition-colors hover:bg-muted"
                      onClick={() => setIsOpen(false)}
                    >
                      Gallery
                    </Link>

                    <Link
                      href="/service-areas"
                      className="flex items-center gap-3 rounded-2xl p-4 text-lg font-medium transition-colors hover:bg-muted"
                      onClick={() => setIsOpen(false)}
                    >
                      Service Areas
                    </Link>

                    <Link
                      href="/contact"
                      className="flex items-center gap-3 rounded-2xl p-4 text-lg font-medium transition-colors hover:bg-muted"
                      onClick={() => setIsOpen(false)}
                    >
                      Contact
                    </Link>
                  </div>
                </nav>

                {/* Mobile Menu Footer CTA */}
                <div className="border-t border-border bg-muted/50 p-6">
                  <TrackedLink
                    kind="call"
                    className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-accent text-base font-semibold text-accent-foreground shadow-lg transition hover:bg-accent/90"
                  >
                    <Phone className="h-5 w-5" />
                    Call for a Free Quote
                  </TrackedLink>
                  <p className="mt-3 text-center text-xs text-muted-foreground">
                    Free assessments • Licensed & Insured • Gauteng
                  </p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  )
}
