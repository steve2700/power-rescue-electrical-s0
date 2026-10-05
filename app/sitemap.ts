import type { MetadataRoute } from "next"
import { SERVICE_AREAS, SITE_URL } from "@/lib/service-areas"

export const dynamic = "force-static"

const services = [
  "borehole-drilling",
  "pump-installation-repairs",
  "solar-borehole-pumps",
  "jojo-water-tank-installation",
  "irrigation-systems",
  "plumbing-services",
  "geyser-installation-repairs",
  "blocked-drains-unblocking",
  "emergency-plumber-burst-pipes",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const mainPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/services`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/service-areas`, lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/contact`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/gallery`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/faq`, lastModified, changeFrequency: "monthly", priority: 0.6 },
  ]

  const servicePages: MetadataRoute.Sitemap = services.map((slug) => ({
    url: `${SITE_URL}/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.85,
  }))

  const serviceAreaPages: MetadataRoute.Sitemap = SERVICE_AREAS.map((a) => ({
    url: `${SITE_URL}/service-areas/${a.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.75,
    images: a.heroPhotos.map((p) => `${SITE_URL}${p}`),
  }))

  const legalPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/privacy-policy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms-of-service`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ]

  return [...mainPages, ...servicePages, ...serviceAreaPages, ...legalPages]
}
