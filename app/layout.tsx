import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Archivo } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { GOOGLE_ADS_CONVERSION_ID } from "@/lib/analytics"
import { AREAS, SERVICES } from "@/lib/power-rescue"
import { SITE_URL as SITE } from "@/lib/site"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo", weight: ["500", "600", "700", "800"] })

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Power Rescue Electrical | Emergency Electricians in Gauteng",
    template: "%s | Power Rescue Electrical",
  },
  description:
    "Emergency electricians across Gauteng. Repairs, installations, COCs, DB boards, solar, inverter backup, solar geysers, electric fences, CCTV and gate motors. Call or WhatsApp 063 039 2007.",
  keywords:
    "emergency electrician Gauteng, electrician Johannesburg, electrician Pretoria, electrical COC, DB board upgrade, solar installation Gauteng, inverter installation, solar geyser repairs, electric fence repairs, CCTV installation, gate motor repairs, Power Rescue Electrical",
  authors: [{ name: "Power Rescue Electrical", url: SITE }],
  creator: "Power Rescue Electrical",
  publisher: "Power Rescue Electrical",
  applicationName: "Power Rescue Electrical",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: SITE,
    siteName: "Power Rescue Electrical",
    title: "Power Rescue Electrical | Emergency Electricians in Gauteng",
    description:
      "Emergency repairs, installations, solar, electric fences, CCTV and gate motors across Gauteng. Call or WhatsApp 063 039 2007.",
    images: [{ url: "/pr/hero-db-board.png", width: 1376, height: 768, alt: "Power Rescue electrician working on a distribution board" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Power Rescue Electrical | Gauteng Electricians",
    description: "Emergency repairs, installations, solar, fences, CCTV and gate motors across Gauteng.",
    images: ["/pr/hero-db-board.png"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#151a33" }],
  },
  manifest: "/site.webmanifest",
  // No site-wide canonical here: every page sets its own, and a layout-level one
  // would point pages that forget to set theirs at the homepage.
  category: "Electrical Services",
  other: {
    "geo.region": "ZA-GP",
    "geo.placename": "Gauteng, South Africa",
  },
}

export const viewport: Viewport = {
  themeColor: "#151a33",
  width: "device-width",
  initialScale: 1,
}

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  "@id": `${SITE}/#business`,
  name: "Power Rescue Electrical",
  url: SITE,
  image: `${SITE}/pr/hero-db-board.png`,
  telephone: "+27-63-039-2007",
  email: "info@powerrescue.co.za",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Gauteng",
    addressCountry: "ZA",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Gauteng" },
    ...AREAS.map((a) => ({ "@type": "Place", name: `${a}, Gauteng` })),
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Electrical services",
    itemListElement: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title, url: `${SITE}/${s.slug}` },
    })),
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-ZA" className={`${inter.variable} ${archivo.variable}`}>
      <head>
        <meta name="format-detection" content="telephone=yes" />

        {/* Google Ads conversion tracking - fill in GOOGLE_ADS_CONVERSION_ID in lib/analytics.ts to activate */}
        {GOOGLE_ADS_CONVERSION_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_CONVERSION_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GOOGLE_ADS_CONVERSION_ID}');
                `,
              }}
            />
          </>
        )}

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      </head>
      <body className="font-sans antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <WhatsAppButton />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
