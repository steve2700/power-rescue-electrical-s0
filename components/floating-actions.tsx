"use client"

import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { PHONE_TEL, WHATSAPP_NUMBER } from "@/components/contact-info"
import { trackCallClick, trackWhatsAppClick } from "@/lib/analytics"

const WA_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi Power Rescue, I need a technician.",
)}`

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" focusable="false">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  )
}

export function FloatingActions() {
  return (
    <>
      {/* Desktop: round WhatsApp button that reveals its label on hover or keyboard focus */}
      <a
        href={WA_HREF}
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackWhatsAppClick}
        aria-label="WhatsApp a Power Rescue technician"
        className="group fixed bottom-6 right-6 z-40 hidden h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-[#0b141a] shadow-xl shadow-black/25 transition-transform hover:scale-105 focus-visible:scale-105 md:flex"
      >
        <span aria-hidden="true" className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/35 motion-reduce:hidden" />
        <WhatsAppIcon className="relative h-8 w-8" aria-hidden="true" />
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
          WhatsApp a technician
        </span>
      </a>

      {/* Mobile: sticky Call now and WhatsApp bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2.5 border-t border-white/10 bg-primary/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
        <a
          href={`tel:${PHONE_TEL}`}
          onClick={trackCallClick}
          className="call-pulse flex h-12 items-center justify-center gap-2 rounded-full bg-accent text-[15px] font-bold text-accent-foreground active:scale-95"
        >
          <PhoneIcon className="h-[18px] w-[18px]" />
          Call now
        </a>
        <a
          href={WA_HREF}
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackWhatsAppClick}
          aria-label="WhatsApp a Power Rescue technician"
          className="flex h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] text-[15px] font-bold text-[#0b141a] active:scale-95"
        >
          <WhatsAppIcon className="h-5 w-5" aria-hidden="true" />
          WhatsApp now
        </a>
      </div>
    </>
  )
}
