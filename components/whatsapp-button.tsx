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
  message = "Hi Power Rescue, I need an electrician.",
}: WhatsAppButtonProps) {
  const href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackWhatsAppClick}
      aria-label="Chat with Power Rescue Electrical on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/20 transition-transform hover:scale-105"
    >
      <WhatsAppIcon className="h-7 w-7" aria-hidden="true" />
    </a>
  )
}
