import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { GOOGLE_ADS_CONVERSION_ID } from "@/lib/analytics"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.boreholeworks.co.za"),
  title: {
    default: "Borehole Works | Borehole Drilling, Pumps & Water Systems in Gauteng",
    template: "%s | Borehole Works - Gauteng's Water & Pump Specialists",
  },
  description:
    "Borehole Works provides borehole drilling, pump installation, solar borehole pumps, irrigation systems, JoJo water tanks, and plumbing services across Gauteng, Pretoria & Johannesburg. Reliable water systems, done right the first time.",
  keywords:
    "borehole drilling Gauteng, borehole pump installation Pretoria, solar borehole pumps Johannesburg, irrigation systems Gauteng, JoJo tank installation Pretoria, water tank installer Johannesburg, plumbing services Gauteng, geyser installation Centurion, blocked drains Gauteng, Borehole Works",
  authors: [{ name: "Borehole Works", url: "https://www.boreholeworks.co.za" }],
  creator: "Borehole Works",
  publisher: "Borehole Works",
  applicationName: "Borehole Works",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#26282B" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://www.boreholeworks.co.za",
    siteName: "Borehole Works",
    title: "Borehole Works | Borehole Drilling, Pumps & Water Systems in Gauteng",
    description:
      "Gauteng's trusted borehole and water systems specialists. Drilling, pump installation, solar pumps, irrigation, water tanks and plumbing. Serving Pretoria, Johannesburg & surrounds.",
    images: [
      {
        url: "/logo-square.png",
        width: 512,
        height: 512,
        alt: "Borehole Works Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Borehole Works | Borehole Drilling & Water Systems Gauteng",
    description:
      "Borehole drilling, pump installation, solar pumps, irrigation, water tanks and plumbing across Gauteng. Serving Pretoria, Johannesburg & surrounds.",
    images: ["/logo-square.png"],
  },
  alternates: {
    canonical: "https://www.boreholeworks.co.za",
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "Water & Pump Services",
  other: {
    "geo.region": "ZA-GP",
    "geo.placename": "Gauteng, South Africa",
    "geo.position": "-26.1076;28.0567",
    "ICBM": "-26.1076, 28.0567",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-ZA">
      <head>
        <meta name="theme-color" content="#26282B" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
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

        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Borehole Works",
              url: "https://www.boreholeworks.co.za",
              logo: "https://www.boreholeworks.co.za/logo-icon.png",
              description: "Borehole drilling, pump installation, solar borehole pumps, irrigation systems, water tanks and plumbing services in Gauteng",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Johannesburg",
                addressRegion: "Gauteng",
                addressCountry: "ZA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -26.1076,
                longitude: 28.0567,
              },
              areaServed: ["Gauteng", "Pretoria", "Johannesburg", "Sandton", "Midrand", "Centurion"],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+27-72-411-5472",
                contactType: "Customer Service",
                areaServed: "ZA",
                availableLanguage: ["en"],
              },
            }),
          }}
        />

        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.boreholeworks.co.za",
              name: "Borehole Works",
              image: "https://www.boreholeworks.co.za/logo-icon.png",
              url: "https://www.boreholeworks.co.za",
              telephone: "+27-72-411-5472",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Johannesburg",
                addressRegion: "Gauteng",
                addressCountry: "ZA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -26.1076,
                longitude: 28.0567,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:00",
                closes: "17:00",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
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
