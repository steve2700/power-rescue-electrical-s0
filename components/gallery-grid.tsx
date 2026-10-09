"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export type GalleryItem = { src: string; caption: string; category: string }

export function GalleryGrid({ items, categories }: { items: GalleryItem[]; categories: string[] }) {
  const [active, setActive] = useState("All")
  const [open, setOpen] = useState<number | null>(null)

  const visible = active === "All" ? items : items.filter((i) => i.category === active)
  const current = open !== null ? visible[open] : null

  const close = useCallback(() => setOpen(null), [])
  const step = useCallback(
    (dir: 1 | -1) => setOpen((i) => (i === null ? i : (i + dir + visible.length) % visible.length)),
    [visible.length],
  )

  // Keyboard controls and scroll lock while the lightbox is open
  useEffect(() => {
    if (open === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowRight") step(1)
      if (e.key === "ArrowLeft") step(-1)
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [open, close, step])

  const count = (c: string) => (c === "All" ? items.length : items.filter((i) => i.category === c).length)

  return (
    <>
      <div role="tablist" aria-label="Gallery categories" className="flex flex-wrap gap-2.5">
        {["All", ...categories].map((c) => (
          <button
            key={c}
            type="button"
            role="tab"
            aria-selected={c === active}
            onClick={() => {
              setActive(c)
              setOpen(null)
            }}
            className={cn(
              "rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors",
              c === active
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-foreground hover:border-primary",
            )}
          >
            {c} <span className="ml-1 opacity-60">{count(c)}</span>
          </button>
        ))}
      </div>

      <ul className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {visible.map((item, i) => (
          <li key={item.src}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              aria-label={`View photo: ${item.caption}`}
              className="group relative block aspect-[4/3] w-full overflow-hidden rounded-[22px] border border-border bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <Image
                src={item.src}
                alt={item.caption}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 to-transparent p-3 pt-10 text-left text-sm font-semibold text-white">
                {item.caption}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
          className="fixed inset-0 z-50 flex flex-col bg-black/90 p-4 sm:p-8"
          onClick={close}
        >
          <div className="flex items-center justify-between text-white">
            <p className="text-sm text-white/70">
              {(open ?? 0) + 1} / {visible.length}
            </p>
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-xl hover:bg-white/10"
            >
              ×
            </button>
          </div>

          <div className="relative my-4 flex-1" onClick={(e) => e.stopPropagation()}>
            <Image src={current.src} alt={current.caption} fill sizes="100vw" className="object-contain" priority />
          </div>

          <div className="flex items-center justify-between gap-4 text-white" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous photo"
              className="h-12 rounded-full border border-white/25 px-6 text-sm font-semibold hover:bg-white/10"
            >
              Previous
            </button>
            <p className="text-center text-sm font-semibold">{current.caption}</p>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next photo"
              className="h-12 rounded-full border border-white/25 px-6 text-sm font-semibold hover:bg-white/10"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  )
}
