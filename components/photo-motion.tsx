import { MovingImage } from "@/components/moving-image"
import { cn } from "@/lib/utils"

export type Photo = { src: string; alt: string }

/** A strip of job photos drifting sideways. Pauses on hover. Duplicates are hidden from screen readers. */
export function PhotoReel({ photos, label = "Recent jobs" }: { photos: Photo[]; label?: string }) {
  const all = [...photos, ...photos]
  return (
    <div className="overflow-hidden" role="group" aria-label={label}>
      <div className="reel flex w-max gap-4">
        {all.map((p, i) => (
          <MovingImage
            key={i}
            src={p.src}
            alt={i < photos.length ? p.alt : ""}
            variant={i}
            sizes="320px"
            className="h-56 w-72 shrink-0 rounded-[28px] sm:h-64 sm:w-80"
          />
        ))}
      </div>
    </div>
  )
}

function Column({ photos, direction, offset }: { photos: Photo[]; direction: "up" | "down"; offset: number }) {
  const all = [...photos, ...photos]
  return (
    <div className="relative h-full overflow-hidden">
      <div className={cn("flex flex-col gap-4", direction === "up" ? "roll-up" : "roll-down")}>
        {all.map((p, i) => (
          <MovingImage
            key={i}
            src={p.src}
            alt={i < photos.length ? p.alt : ""}
            variant={i + offset}
            sizes="(min-width: 1024px) 22vw, 45vw"
            className="aspect-[3/4] w-full shrink-0 rounded-[28px]"
          />
        ))}
      </div>
    </div>
  )
}

/** Two columns of photos rolling past each other. Faded at the top and bottom edges. */
export function RollingColumns({
  left,
  right,
  className,
  label = "Power Rescue jobs",
}: {
  left: Photo[]
  right: Photo[]
  className?: string
  label?: string
}) {
  const mask = "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)"
  return (
    <div
      role="group"
      aria-label={label}
      className={cn("grid h-[460px] grid-cols-2 gap-4 md:h-[560px]", className)}
      style={{ maskImage: mask, WebkitMaskImage: mask }}
    >
      <Column photos={left} direction="up" offset={0} />
      <Column photos={right} direction="down" offset={1} />
    </div>
  )
}
