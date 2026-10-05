import type { GalleryPhoto } from "./gallery"
import type { ServiceKey } from "./services"

export type AreaSlug =
  | "pretoria"
  | "centurion"
  | "midrand"
  | "johannesburg"
  | "sandton"
  | "morningside"
  | "fourways"
  | "randburg"
  | "rosebank"
  | "roodepoort"
  | "bedfordview"

export interface ServiceArea {
  slug: AreaSlug
  name: string
  municipality: string
  character: string
  geo: { lat: number; lng: number }
  metaTitle: string
  metaDescription: string
  keywords: string[]
  headline: string
  lede: string
  heroPhotos: [GalleryPhoto, GalleryPhoto, GalleryPhoto]
  facts: { label: string; value: string }[]
  story: { heading: string; paragraphs: string[]; pullQuote: string; photo: GalleryPhoto }
  callouts: { service: ServiceKey; title: string; copy: string; photo: GalleryPhoto }[]
  suburbs: string[]
  faqs: { q: string; a: string }[]
  nearby: AreaSlug[]
  marquee: GalleryPhoto[]
}
