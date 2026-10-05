"use client"

import { useEffect, useRef, useState } from "react"

type Variant = "up" | "left" | "wipe"

const hiddenStyles: Record<Variant, React.CSSProperties> = {
  up: { opacity: 0, transform: "translateY(24px)" },
  left: { opacity: 0, transform: "translateX(-28px)" },
  wipe: { clipPath: "inset(0 0 100% 0)" },
}

const shownStyles: Record<Variant, React.CSSProperties> = {
  up: { opacity: 1, transform: "translateY(0)" },
  left: { opacity: 1, transform: "translateX(0)" },
  wipe: { clipPath: "inset(0 0 0% 0)" },
}

export function ScrollReveal({
  children,
  delay = 0,
  variant = "up",
  className,
}: {
  children: React.ReactNode
  delay?: number
  variant?: Variant
  className?: string
}) {
  // The outer node is what we observe. It is never clipped or hidden,
  // so the observer can always see it. Only the inner node animates.
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      typeof IntersectionObserver === "undefined"
    ) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={className}>
      <div
        className={`h-full transition-all ease-out ${variant === "wipe" ? "duration-1000" : "duration-700"}`}
        style={{
          ...(visible ? shownStyles[variant] : hiddenStyles[variant]),
          transitionDelay: `${delay}ms`,
        }}
      >
        {children}
      </div>
    </div>
  )
}
