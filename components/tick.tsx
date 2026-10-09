export function Tick({ className = "border-accent" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block h-2.5 w-1.5 shrink-0 -translate-y-px rotate-45 border-b-2 border-r-2 ${className}`}
    />
  )
}
