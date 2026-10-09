"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { WHATSAPP_NUMBER } from "@/components/contact-info"

type Item = { label: string; meaning: string; action: string }

export function ServiceExplorer({
  service,
  eyebrow,
  heading,
  intro,
  items,
}: {
  service: string
  eyebrow: string
  heading: string
  intro: string
  items: Item[]
}) {
  const [active, setActive] = useState(0)
  const item = items[active]
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi Power Rescue, ${service}: ${item.label}. Can you help?`,
  )}`

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold text-muted-foreground">{eyebrow}</p>
            <h2 className="mt-3 max-w-2xl text-balance font-display text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl">
              {heading}
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">{intro}</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div role="tablist" aria-label={eyebrow} className="flex flex-wrap gap-2 lg:flex-col lg:flex-nowrap">
            {items.map((it, i) => (
              <button
                key={it.label}
                type="button"
                role="tab"
                id={`explorer-tab-${i}`}
                aria-selected={i === active}
                aria-controls="explorer-panel"
                onClick={() => setActive(i)}
                className={cn(
                  "flex items-center justify-between gap-4 rounded-full border px-5 py-3 text-left text-sm font-semibold transition-colors lg:rounded-2xl lg:py-4 lg:text-base",
                  i === active
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-foreground hover:border-primary",
                )}
              >
                {it.label}
                <span
                  aria-hidden="true"
                  className="hidden h-2 w-2 shrink-0 rotate-45 border-r-2 border-t-2 border-current lg:inline-block"
                />
              </button>
            ))}
          </div>

          <div
            role="tabpanel"
            id="explorer-panel"
            aria-labelledby={`explorer-tab-${active}`}
            className="flex flex-col justify-between rounded-[28px] bg-primary p-7 text-white sm:p-10"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{item.label}</p>
              <div className="mt-6 grid gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="font-display text-lg font-bold">What this usually means</h3>
                  <p className="mt-2 leading-relaxed text-white/75">{item.meaning}</p>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold">What we do</h3>
                  <p className="mt-2 leading-relaxed text-white/75">{item.action}</p>
                </div>
              </div>
            </div>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex h-14 w-fit items-center rounded-full bg-accent px-7 font-semibold text-accent-foreground transition-transform hover:scale-[1.02]"
            >
              WhatsApp us about this
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
