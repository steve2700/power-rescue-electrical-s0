import Link from "next/link"
import { cn } from "@/lib/utils"

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" focusable="false">
      <rect x="2" y="15" width="44" height="18" rx="3.5" className="fill-accent" />
      <rect x="15" y="2" width="18" height="44" rx="3.5" className="fill-accent" />
      <path d="M28 5 13 27h9l-3 16 16-23h-9l2-15Z" className="fill-primary" />
    </svg>
  )
}

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("group flex shrink-0 items-center gap-2.5", className)}
      aria-label="Power Rescue Electrical home"
    >
      <LogoMark className="h-9 w-9 transition-transform duration-300 group-hover:rotate-90 sm:h-10 sm:w-10" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[15px] font-extrabold uppercase tracking-[-0.01em] text-white sm:text-[17px]">
          Power <span className="text-accent">Rescue</span>
        </span>
        <span className="mt-1.5 flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.34em] text-white/55 sm:text-[10px]">
          <span className="h-px w-3 bg-accent" aria-hidden="true" />
          Electrical
        </span>
      </span>
    </Link>
  )
}
