import Image from "next/image"
import { cn } from "@/lib/utils"

const DRIFTS = ["drift-a", "drift-b", "drift-c"] as const

/** A photo that slowly drifts and zooms, so the page never feels frozen. */
export function MovingImage({
  src,
  alt,
  className,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  priority = false,
  variant = 0,
}: {
  src: string
  alt: string
  className?: string
  sizes?: string
  priority?: boolean
  variant?: number
}) {
  return (
    <div className={cn("relative isolate overflow-hidden bg-primary/80", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("object-cover", DRIFTS[Math.abs(variant) % DRIFTS.length])}
      />
    </div>
  )
}

/** Full-bleed drifting photo for hero sections. Put a gradient overlay on top for text contrast. */
export function DriftBackdrop({
  src,
  variant = 0,
  className,
  priority = true,
}: {
  src: string
  variant?: number
  className?: string
  priority?: boolean
}) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)} aria-hidden="true">
      <Image
        src={src}
        alt=""
        fill
        sizes="100vw"
        priority={priority}
        className={cn("object-cover", DRIFTS[Math.abs(variant) % DRIFTS.length])}
      />
    </div>
  )
}
