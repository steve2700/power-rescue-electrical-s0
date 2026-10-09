"use client"

import { useMemo, useState } from "react"
import { cn } from "@/lib/utils"
import { WHATSAPP_NUMBER } from "@/components/contact-info"

const APPLIANCES = [
  { id: "fridge", label: "Fridge or freezer", watts: 150 },
  { id: "lights", label: "LED lights", watts: 150 },
  { id: "wifi", label: "Wi-Fi and fibre", watts: 30 },
  { id: "tv", label: "TV and decoder", watts: 150 },
  { id: "laptop", label: "Laptops and chargers", watts: 100 },
  { id: "security", label: "Gate, alarm and cameras", watts: 150 },
  { id: "washer", label: "Washing machine", watts: 500 },
  { id: "pump", label: "Borehole or pool pump", watts: 1000 },
  { id: "microwave", label: "Microwave", watts: 1200 },
  { id: "aircon", label: "Air conditioner", watts: 1500 },
  { id: "kettle", label: "Kettle", watts: 2000 },
  { id: "stove", label: "Stove and oven", watts: 3000 },
  { id: "geyser", label: "Geyser", watts: 3000 },
]

function verdict(total: number) {
  if (total === 0) return "Pick what you want to keep running."
  if (total < 1500) return "A light essential load. A modest inverter and battery handle this well."
  if (total < 4000) return "A mid-size load. This needs a properly sized inverter and battery bank."
  return "A heavy load. Worth a site visit so we can size it properly or keep some loads on the grid."
}

export function LoadPlanner({
  service,
  eyebrow,
  heading,
  intro,
}: {
  service: string
  eyebrow: string
  heading: string
  intro: string
}) {
  const [selected, setSelected] = useState<string[]>(["fridge", "lights", "wifi"])

  const toggle = (id: string) =>
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]))

  const { total, chosen } = useMemo(() => {
    const chosen = APPLIANCES.filter((a) => selected.includes(a.id))
    return { total: chosen.reduce((sum, a) => sum + a.watts, 0), chosen }
  }, [selected])

  const pct = Math.min(100, (total / 6000) * 100)
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    chosen.length
      ? `Hi Power Rescue, I am interested in ${service}. I want to keep running: ${chosen
          .map((a) => a.label)
          .join(", ")} (roughly ${total}W). Can you help?`
      : `Hi Power Rescue, I am interested in ${service}. Can you help?`,
  )}`

  return (
    <section className="border-y border-border bg-secondary/50 py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <p className="text-sm font-semibold text-muted-foreground">{eyebrow}</p>
          <h2 className="mt-3 text-balance font-display text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl">
            {heading}
          </h2>
          <p className="mt-4 max-w-lg text-muted-foreground">{intro}</p>
          <ul className="mt-8 flex flex-wrap gap-2.5">
            {APPLIANCES.map((a) => {
              const on = selected.includes(a.id)
              return (
                <li key={a.id}>
                  <button
                    type="button"
                    aria-pressed={on}
                    onClick={() => toggle(a.id)}
                    className={cn(
                      "rounded-full border px-4 py-2.5 text-sm font-medium transition-colors",
                      on
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-card text-foreground hover:border-primary",
                    )}
                  >
                    {a.label}
                    {a.watts >= 1500 && <span className="ml-2 text-xs opacity-60">heavy</span>}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="self-start rounded-[28px] bg-primary p-7 text-white sm:p-10" aria-live="polite">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Rough running load</p>
          <p className="mt-4 font-display text-6xl font-extrabold tabular-nums">
            {total.toLocaleString("en-ZA")}
            <span className="ml-1 text-2xl font-bold text-white/60">W</span>
          </p>
          <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/15" aria-hidden="true">
            <div className="h-full rounded-full bg-accent transition-all duration-500" style={{ width: `${pct}%` }} />
          </div>
          <p className="mt-6 leading-relaxed text-white/80">{verdict(total)}</p>
          <p className="mt-4 text-xs leading-relaxed text-white/50">
            A rough guide using typical running watts. Motors such as fridges and pumps draw more when they start, and we
            allow for that in the design. This is not a quote.
          </p>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex h-14 items-center rounded-full bg-accent px-7 font-semibold text-accent-foreground transition-transform hover:scale-[1.02]"
          >
            Send this list on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
