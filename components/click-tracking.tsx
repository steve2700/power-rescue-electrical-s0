"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { enablePhoneCallTracking, trackCallClick, trackEmailClick, trackWhatsAppClick } from "@/lib/analytics"

/**
 * Site-wide tracking, in one place. Renders nothing.
 *  1. Turns on "calls from website" on every page, including after client-side page changes.
 *  2. Counts every WhatsApp and email link (and call taps, if a call label is set) wherever it sits,
 *     so no button has to be wired up one by one.
 * Links that already track themselves are not counted twice: see the guard in lib/analytics.ts.
 */
export function ClickTracking() {
  const pathname = usePathname()

  // The new page's phone numbers are in the page by the time this runs
  useEffect(() => {
    enablePhoneCallTracking()
  }, [pathname])

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null
      const link = target?.closest?.("a[href]") as HTMLAnchorElement | null
      if (!link) return
      const href = link.getAttribute("href") ?? ""
      if (href.startsWith("tel:")) trackCallClick()
      else if (href.startsWith("mailto:")) trackEmailClick()
      else if (/^https?:\/\/(wa\.me|api\.whatsapp\.com|wa\.link)\//i.test(href)) trackWhatsAppClick()
    }
    document.addEventListener("click", onClick, { passive: true })
    return () => document.removeEventListener("click", onClick)
  }, [])

  return null
}
