"use client"

import type { ReactNode } from "react"
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_NUMBER } from "@/components/contact-info"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { trackCallClick, trackEmailClick, trackWhatsAppClick } from "@/lib/analytics"

const sizeClasses = {
  md: "h-12 px-6 text-sm",
  lg: "h-14 px-8 text-base",
}

type Kind = "call" | "whatsapp" | "email"

function hrefFor(kind: Kind, message?: string) {
  if (kind === "call") return `tel:${PHONE_TEL}`
  if (kind === "email") return `mailto:${EMAIL}`
  const base = `https://wa.me/${WHATSAPP_NUMBER}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

const trackers: Record<Kind, () => void> = {
  call: trackCallClick,
  whatsapp: trackWhatsAppClick,
  email: trackEmailClick,
}

// One tracked link for everything. Use this anywhere a page needs a phone,
// WhatsApp or email link, so every click fires the right conversion event.
// Pass onClick for any extra tracking (for example Vercel Analytics events).
export function TrackedLink({
  kind,
  className,
  children,
  message,
  ariaLabel,
  onClick,
}: {
  kind: Kind
  className?: string
  children: ReactNode
  message?: string
  ariaLabel?: string
  onClick?: () => void
}) {
  const isWhatsApp = kind === "whatsapp"
  return (
    
      <a
      href={hrefFor(kind, message)}
      onClick={() => {
        trackers[kind]()
        onClick?.()
      }}
      target={isWhatsApp ? "_blank" : undefined}
      rel={isWhatsApp ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel}
      className={className}
    >
      {children}
    </a>
  )
}

export function CallButton({ size = "md", label }: { size?: "md" | "lg"; label?: string }) {
  return (
    <TrackedLink
      kind="call"
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-accent font-semibold text-accent-foreground transition hover:bg-accent/90 ${sizeClasses[size]}`}
    >
      {label ?? `Call ${PHONE_DISPLAY}`}
    </TrackedLink>
  )
}

export function WhatsAppCta({
  size = "md",
  label = "WhatsApp Us",
  message,
}: {
  size?: "md" | "lg"
  label?: string
  message?: string
}) {
  return (
    <TrackedLink
      kind="whatsapp"
      message={message}
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] font-semibold text-white transition hover:bg-[#25D366]/90 ${sizeClasses[size]}`}
    >
      <WhatsAppIcon className="h-5 w-5" />
      {label}
    </TrackedLink>
  )
}

export function EmailCta({
  size = "md",
  label = "Email Us",
  onDark = false,
}: {
  size?: "md" | "lg"
  label?: string
  onDark?: boolean
}) {
  return (
    <TrackedLink
      kind="email"
      className={`inline-flex items-center justify-center gap-2 rounded-xl border font-semibold transition ${
        onDark
          ? "border-white/40 text-white hover:bg-white/10"
          : "border-border bg-card text-foreground hover:bg-muted"
      } ${sizeClasses[size]}`}
    >
      {label}
    </TrackedLink>
  )
}

export function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-border bg-background md:hidden">
      <TrackedLink
        kind="call"
        className="flex flex-1 items-center justify-center gap-2 bg-accent py-4 text-sm font-semibold text-accent-foreground"
      >
        Call Now
      </TrackedLink>
      <TrackedLink
        kind="whatsapp"
        className="flex flex-1 items-center justify-center gap-2 bg-[#25D366] py-4 text-sm font-semibold text-white"
      >
        <WhatsAppIcon className="h-4 w-4" />
        WhatsApp
      </TrackedLink>
    </div>
  )
}

export function HeroPhoneLink({ label }: { label: string }) {
  return (
    <TrackedLink
      kind="call"
      ariaLabel={`Call Borehole Works on ${PHONE_DISPLAY}`}
      className="group mt-8 flex items-center gap-4 text-white"
    >
      <span>
        <span className="block text-sm uppercase tracking-wide text-white/70">{label}</span>
        <span className="block text-3xl font-bold tabular-nums group-hover:underline sm:text-4xl">
          {PHONE_DISPLAY}
        </span>
      </span>
    </TrackedLink>
  )
}

export function BigPhoneLink() {
  return (
    <TrackedLink
      kind="call"
      className="mt-6 inline-block text-4xl font-bold tabular-nums hover:underline sm:text-5xl"
    >
      {PHONE_DISPLAY}
    </TrackedLink>
  )
}

export function RequestQuoteLink() {
  return (
    <TrackedLink
      kind="call"
      className="inline-flex items-center justify-center rounded-xl border border-white/40 px-7 py-4 text-base font-semibold text-white transition hover:bg-white/10 md:text-lg"
    >
      Request a Quote — Call {PHONE_DISPLAY}
    </TrackedLink>
  )
}
