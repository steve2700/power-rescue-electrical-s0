// Fill these in once you've created your Google Ads conversion actions:
// Google Ads > Goals > Conversions > Summary > [action] > Tag setup > Google tag
// Paste your conversion ID (starts with AW-) and each action's label below.
// Until GOOGLE_ADS_CONVERSION_ID is set, these functions do nothing — safe to
// leave blank while you're not running ads yet.

export const GOOGLE_ADS_CONVERSION_ID = "" // e.g. "AW-123456789"

export const CONVERSION_LABELS = {
  call: "", // label for phone call clicks
  whatsapp: "", // label for WhatsApp clicks
  email: "", // label for email clicks
}

function fireConversion(label: string) {
  if (!GOOGLE_ADS_CONVERSION_ID || !label) return
  if (typeof window === "undefined") return
  const w = window as typeof window & { gtag?: (...args: unknown[]) => void }
  if (typeof w.gtag !== "function") return
  w.gtag("event", "conversion", {
    send_to: `${GOOGLE_ADS_CONVERSION_ID}/${label}`,
  })
}

export function trackCallClick() {
  fireConversion(CONVERSION_LABELS.call)
}
export function trackWhatsAppClick() {
  fireConversion(CONVERSION_LABELS.whatsapp)
}
export function trackEmailClick() {
  fireConversion(CONVERSION_LABELS.email)
}
