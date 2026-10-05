import Image from "next/image"

export function WatermarkedImage({
  src,
  alt,
  className = "",
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  priority = false,
}: {
  src: string
  alt: string
  className?: string
  sizes?: string
  priority?: boolean
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      <div className="absolute bottom-2 right-2 h-7 w-7 drop-shadow-md">
        <Image
          src="/water_droplet_logo_transparent.png"
          alt=""
          fill
          sizes="28px"
          className="object-contain"
        />
      </div>
    </div>
  )
}
