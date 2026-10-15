// Google Ads conversion tracking for Power Rescue.
//
// The Google tag loads on every page from app/layout.tsx. The click listener in
// components/click-tracking.tsx counts every WhatsApp and email link on the site, wherever it sits.
// Phone calls are counted by Google itself through the "calls from website" action below.

export const GOOGLE_ADS_CONVERSION_ID = "AW-18512805415"

// "Calls from website": Google swaps in a forwarding number for visitors who arrived from your ads,
// and counts the calls made to it. The number must match how it appears on the site.
export const PHONE_NUMBER = "0630392007"
export const PHONE_CALL_LABEL = "1DuGCNCZ0JwdEKf8y_tE"

// Click conversions: paste each label here (the text after the slash in send_to: 'AW-.../LABEL').
// An empty label does nothing.
export const CONVERSION_LABELS = {
  call: "LXJLCMKR2Z0dEKf8y_tE", // "Call click": counts taps on any phone number (set it to Secondary in Google Ads)
  whatsapp: "THGHCLzvyZwdEKf8y_tE",
  email: "4IbwCM-LypwdEKf8y_tE",
}

const CONVERSION_VALUE = { value: 1.0, currency: "ZAR" }

type Gtag = (...args: unknown[]) => void
const getGtag = (): Gtag | undefined => {
  if (typeof window === "undefined") return undefined
  const g = (window as typeof window & { gtag?: Gtag }).gtag
  return typeof g === "function" ? g : undefined
}

// Some buttons track themselves and the site-wide listener also sees them.
// Ignore a second click on the same action within 1.5 seconds so nothing is counted twice.
const lastFired: Record<string, number> = {}

function fireConversion(label: string) {
  if (!GOOGLE_ADS_CONVERSION_ID || !label) return
  const gtag = getGtag()
  if (!gtag) return

  const now = Date.now()
  if (now - (lastFired[label] ?? 0) < 1500) return
  lastFired[label] = now

  gtag("event", "conversion", {
    send_to: `${GOOGLE_ADS_CONVERSION_ID}/${label}`,
    ...CONVERSION_VALUE,
  })
}

/** Turns on "calls from website" for the current page. Run it again after every page change. */
export function enablePhoneCallTracking() {
  if (!GOOGLE_ADS_CONVERSION_ID || !PHONE_CALL_LABEL) return
  getGtag()?.("config", `${GOOGLE_ADS_CONVERSION_ID}/${PHONE_CALL_LABEL}`, {
    phone_conversion_number: PHONE_NUMBER,
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
