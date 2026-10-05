import Image from "next/image"

interface MarqueeImage {
  src: string
  alt: string
  watermark?: boolean
}

export function ImageMarquee({
  images,
  direction = "left",
  speed = 36,
  name,
}: {
  images: MarqueeImage[]
  direction?: "left" | "right"
  speed?: number
  name: string
}) {
  const cls = `marquee-${name}`
  return (
    <div className="overflow-hidden">
      <style>{`
        @keyframes ${cls}-kf-left { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes ${cls}-kf-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }
        .${cls} { animation: ${cls}-kf-${direction} ${speed}s linear infinite; }
        .${cls}:hover { animation-play-state: paused; }
      `}</style>
      <div className={`flex w-max ${cls}`}>
        {[...images, ...images].map((img, i) => (
          <div key={i} className="relative mx-2 h-48 w-72 flex-shrink-0 overflow-hidden rounded-2xl">
            <Image src={img.src} alt={i < images.length ? img.alt : ""} fill className="object-cover" sizes="288px" />
            {img.watermark !== false && (
            <div className="absolute bottom-2 right-2 h-5 w-5 drop-shadow-md">
              <Image
                src="/water_droplet_logo_transparent.png"
                alt=""
                fill
                sizes="20px"
                className="object-contain"
              />
            </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
