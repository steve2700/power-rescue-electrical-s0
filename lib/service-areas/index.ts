import type { AreaSlug, ServiceArea } from "./types"
import { pretoria } from "./areas/pretoria"
import { centurion } from "./areas/centurion"
import { midrand } from "./areas/midrand"
import { johannesburg } from "./areas/johannesburg"
import { sandton } from "./areas/sandton"
import { morningside } from "./areas/morningside"
import { fourways } from "./areas/fourways"
import { randburg } from "./areas/randburg"
import { rosebank } from "./areas/rosebank"
import { roodepoort } from "./areas/roodepoort"
import { bedfordview } from "./areas/bedfordview"

export const SITE_URL = "https://www.boreholeworks.co.za"
export const BUSINESS_ID = SITE_URL

export * from "./gallery"
export * from "./services"
export * from "./types"

export const SERVICE_AREAS: ServiceArea[] = [
  pretoria,
  centurion,
  midrand,
  johannesburg,
  sandton,
  morningside,
  fourways,
  randburg,
  rosebank,
  roodepoort,
  bedfordview,
]

export function getServiceArea(slug: AreaSlug): ServiceArea {
  const area = SERVICE_AREAS.find((a) => a.slug === slug)
  if (!area) throw new Error(`Unknown service area: ${slug}`)
  return area
}

export function areaUrl(slug: AreaSlug) {
  return `${SITE_URL}/service-areas/${slug}`
}
