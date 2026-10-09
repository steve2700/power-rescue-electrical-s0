import type { MetadataRoute } from "next"
import { SERVICES } from "@/lib/power-rescue"
import { SITE_URL } from "@/lib/site"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const mainPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/services`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/areas`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/about`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/contact`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/gallery`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/faq`, lastModified, changeFrequency: "monthly", priority: 0.6 },
  ]

  // Every service page, including emergency-electrical-repairs, comes from SERVICES
  const servicePages: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${SITE_URL}/${s.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: s.slug === "emergency-electrical-repairs" ? 0.95 : 0.85,
    images: [`${SITE_URL}${s.image}`],
  }))

  const legalPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/privacy-policy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms-of-service`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ]

  return [...mainPages, ...servicePages, ...legalPages]
}
