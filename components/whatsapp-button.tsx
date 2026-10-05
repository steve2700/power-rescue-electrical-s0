"use client"

import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { WHATSAPP_NUMBER } from "@/components/contact-info"
import { trackWhatsAppClick } from "@/lib/analytics"

interface WhatsAppButtonProps {
  phoneNumber?: string
  message?: string
}

export function WhatsAppButton({
  phoneNumber = WHATSAPP_NUMBER,
  message = "Hi Borehole Works, I'd like a quote for a water project.",
}: WhatsAppButtonProps) {
  const href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    
      <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackWhatsAppClick}
      aria-label="Chat with Borehole Works on WhatsApp"
      // bottom-24 on mobile clears the sticky Call/WhatsApp bar on service pages;
      // md:bottom-6 restores the normal position on desktop, where there is no sticky bar.
      className="fixed bottom-24 right-6 z-50 flex h-14 w-14 items-center justify-center gap-2 rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 transition-transform hover:scale-105 hover:bg-[#25D366]/90 md:bottom-6 md:w-auto md:px-6"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping" aria-hidden="true" />
      <WhatsAppIcon className="relative h-7 w-7" aria-hidden="true" />
      <span className="relative hidden text-sm font-semibold md:inline">Chat on WhatsApp</span>
    </a>
  )
}
