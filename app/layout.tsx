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

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo", weight: ["500", "600", "700", "800"] })

const SITE = "https://powerrescue.co.za"

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Power Rescue Electrical | Emergency Electricians in Gauteng",
    template: "%s | Power Rescue Electrical",
  },
  description:
    "Power Rescue Electrical handles emergency electrical repairs, installations, maintenance, COCs, solar systems and inverter backup across Gauteng and its outskirts. Call or WhatsApp 063 039 2007.",
  keywords:
    "emergency electrician Gauteng, electrician Johannesburg, electrician Pretoria, electrical COC, solar installation Gauteng, inverter installation, DB board upgrade, Power Rescue Electrical",
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
      "Emergency repairs, installations, maintenance and solar across Gauteng. Call or WhatsApp 063 039 2007.",
    images: [{ url: "/pr/hero-db-board.png", width: 1376, height: 768, alt: "Power Rescue electrician working on a distribution board" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Power Rescue Electrical | Gauteng Electricians",
    description: "Emergency repairs, installations, maintenance and solar across Gauteng.",
    images: ["/pr/hero-db-board.png"],
  },
  alternates: { canonical: SITE },
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Electrician",
              "@id": SITE,
              name: "Power Rescue Electrical",
              url: SITE,
              image: `${SITE}/pr/hero-db-board.png`,
              telephone: "+27-63-039-2007",
              email: "info@powerrescue.co.za",
              address: {
                "@type": "PostalAddress",
                addressRegion: "Gauteng",
                addressCountry: "ZA",
              },
              areaServed: ["Gauteng", "Johannesburg", "Pretoria", "Sandton", "Midrand", "Centurion", "East Rand", "West Rand"],
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "00:00",
                closes: "23:59",
              },
            }),
          }}
        />
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
