import Image from "next/image"
import { GALLERY, photoAlt, type GalleryPhoto } from "@/lib/service-areas"

export function AreaPhoto({
  src,
  areaName,
  sizes,
  priority,
  className = "",
  imageClassName = "",
  decorative = false,
}: {
  src: GalleryPhoto
  areaName?: string
  sizes: string
  priority?: boolean
  className?: string
  imageClassName?: string
  decorative?: boolean
}) {
  return (
    <div className={`relative overflow-hidden bg-muted ${className}`}>
      <Image
        src={src}
        alt={decorative ? "" : photoAlt(src, areaName)}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover ${imageClassName}`}
      />
      {GALLERY[src].watermark && (
        <div className="pointer-events-none absolute bottom-3 right-3 h-6 w-6 drop-shadow-md" aria-hidden="true">
          <Image src="/water_droplet_logo_transparent.png" alt="" fill sizes="24px" className="object-contain" />
        </div>
      )}
    </div>
  )
}
