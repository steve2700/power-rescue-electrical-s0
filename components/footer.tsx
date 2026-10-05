import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock, ShieldCheck, BadgeCheck, ArrowRight } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { TrackedLink } from "@/components/service-cta"
import { EMAIL, PHONE_DISPLAY } from "@/components/contact-info"
import { SERVICES, SERVICE_AREAS, areaUrl } from "@/lib/service-areas"

const services = Object.values(SERVICES)
const featuredAreas = SERVICE_AREAS.slice(0, 6)

const quickLinks = [
  { title: "About Us", href: "/about" },
  { title: "All Services", href: "/services" },
  { title: "Gallery", href: "/gallery" },
  { title: "Service Areas", href: "/service-areas" },
  { title: "FAQ", href: "/faq" },
  { title: "Contact Us", href: "/contact" },
]

const trustBadges = [
  { icon: BadgeCheck, title: "Licensed & Certified", copy: "Fully compliant professionals" },
  { icon: ShieldCheck, title: "Insured & Guaranteed", copy: "All work fully insured" },
  { icon: Clock, title: "Experienced Team", copy: "10+ years in water systems" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA banner, mirrors the header's accent pill treatment */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-10 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-primary-foreground/10 bg-primary-foreground/5 p-8 text-center lg:flex-row lg:text-left">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Water problem right now?</p>
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-white lg:text-3xl">
                We pick up the phone when it stops.
              </h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <TrackedLink
                kind="call"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/25 transition hover:bg-accent/90"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </TrackedLink>
              <TrackedLink
                kind="whatsapp"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-semibold text-white transition hover:bg-[#25D366]/90"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp Us
              </TrackedLink>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="border-b border-primary-foreground/10 bg-primary/95">
        <div className="container mx-auto px-4 py-8 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {trustBadges.map(({ icon: Icon, title, copy }) => (
              <div key={title} className="flex items-start gap-3 border-l-2 border-accent pl-4">
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <h4 className="font-semibold text-white">{title}</h4>
                  <p className="text-sm text-primary-foreground/70">{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-6">
          {/* Company Info */}
          <div className="space-y-4 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full shadow-lg shadow-accent/10 ring-1 ring-primary-foreground/10">
                <Image
                  src="/logo-icon.png"
                  alt="Borehole Works Logo"
                  width={48}
                  height={48}
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Borehole <span className="text-accent">Works</span>
                </h3>
                <p className="text-xs text-primary-foreground/70">Water & Pump Specialists</p>
              </div>
            </Link>

            <p className="max-w-md text-sm leading-relaxed text-primary-foreground/80">
              Borehole Works is your trusted partner for borehole drilling, pump installation, water tanks, and
              plumbing services across Gauteng. From the first site assessment to the last drop reaching your
              tap, we deliver reliable water systems that last.
            </p>

            <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-xs font-semibold text-primary-foreground/80">
              <Clock className="h-3.5 w-3.5 text-accent" />
              Mon–Fri 8:00–17:00
              <span className="h-1 w-1 rounded-full bg-primary-foreground/30" />
              <span className="text-accent">24/7 Emergency Support</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-primary-foreground/80 transition-colors hover:text-accent"
                  >
                    <span className="transition-transform group-hover:translate-x-1">{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services — sourced from lib/service-areas, never hand-duplicated */}
          <div className="lg:col-span-2">
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Our Services</h4>
            <div className="grid grid-cols-2 gap-x-6">
              <ul className="space-y-2.5">
                {services.slice(0, 5).map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="group inline-flex items-center gap-1.5 text-sm text-primary-foreground/80 transition-colors hover:text-accent"
                    >
                      <span className="transition-transform group-hover:translate-x-1">{service.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2.5">
                {services.slice(5, 9).map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="group inline-flex items-center gap-1.5 text-sm text-primary-foreground/80 transition-colors hover:text-accent"
                    >
                      <span className="transition-transform group-hover:translate-x-1">{service.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/services"
              className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
            >
              View All Services <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <TrackedLink kind="call" className="flex items-center gap-2 text-primary-foreground/80 transition-colors hover:text-accent">
                  <Phone className="h-4 w-4 shrink-0 text-accent" />
                  {PHONE_DISPLAY}
                </TrackedLink>
              </li>
              <li>
                <TrackedLink kind="whatsapp" className="flex items-center gap-2 text-primary-foreground/80 transition-colors hover:text-accent">
                  <WhatsAppIcon className="h-4 w-4 shrink-0" />
                  WhatsApp: {PHONE_DISPLAY}
                </TrackedLink>
              </li>
              <li>
                <TrackedLink kind="email" className="flex items-center gap-2 text-primary-foreground/80 transition-colors hover:text-accent">
                  <Mail className="h-4 w-4 shrink-0 text-accent" />
                  {EMAIL}
                </TrackedLink>
              </li>
              <li>
                
                  <a
                  href="https://www.google.com/maps?q=Borehole+Works+Gauteng+South+Africa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-3 py-1.5 text-primary-foreground/80 transition-colors hover:bg-accent hover:text-white"
                >
                  <MapPin className="h-4 w-4 shrink-0" />
                  Get Directions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Service Areas Bar */}
        <div className="mt-10 border-t border-primary-foreground/10 pt-8">
          <h4 className="mb-4 text-center text-sm font-bold uppercase tracking-wider text-white">
            Proudly Serving Gauteng
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {featuredAreas.map((area) => (
              <Link
                key={area.slug}
                href={areaUrl(area.slug).replace(/^https?:\/\/[^/]+/, "")}
                className="rounded-full bg-primary-foreground/10 px-4 py-1.5 text-sm text-primary-foreground/80 transition-all hover:bg-accent hover:text-white"
              >
                {area.name}
              </Link>
            ))}
            <Link
              href="/service-areas"
              className="rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-white hover:bg-accent/90"
            >
              View All Areas →
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 md:flex-row">
          <p className="text-center text-sm text-primary-foreground/70 md:text-left">
            © {new Date().getFullYear()} Borehole Works. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/privacy-policy" className="text-sm text-primary-foreground/70 transition-colors hover:text-accent">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-primary-foreground/70 transition-colors hover:text-accent">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="text-sm text-primary-foreground/70 transition-colors hover:text-accent">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
