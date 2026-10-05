"use client"

import { useState } from "react"
import { track } from "@vercel/analytics"
import { TrackedLink } from "@/components/service-cta"
import { PHONE_DISPLAY } from "@/components/contact-info"
import { JOB_TYPES } from "@/lib/service-areas"

function OptionButton({
  selected,
  onSelect,
  children,
}: {
  selected: boolean
  onSelect: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onSelect}
      className={`rounded-md border px-3.5 py-2 text-left text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary ${
        selected
          ? "border-accent bg-accent text-accent-foreground"
          : "border-white/20 text-primary-foreground/85 hover:border-white/50 hover:text-primary-foreground"
      }`}
    >
      {children}
    </button>
  )
}

export function AreaCallDesk({
  areaName,
  places,
  placeLabel = "Your suburb",
  id = "call-desk",
}: {
  areaName: string
  places: string[]
  placeLabel?: string
  id?: string
}) {
  const [place, setPlace] = useState<string | null>(null)
  const [job, setJob] = useState<string | null>(null)

  const where = place ? (place === areaName ? areaName : `${place}, ${areaName}`) : areaName
  const whatsappMessage = `Hi Borehole Works, I'm in ${where}. ${job ? `${job}.` : "I need help with water or plumbing."} When can you come out?`

  const report = (channel: "call" | "whatsapp") => {
    track("area_contact", { channel, area: areaName, place: place ?? "not set", job: job ?? "not set" })
  }

  const rows = [
    { key: "area", label: "Area", value: areaName as string | null },
    {
      key: "place",
      label: placeLabel.replace("Your ", "").replace(/^./, (c) => c.toUpperCase()),
      value: place,
    },
    { key: "job", label: "Job", value: job },
  ]

  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-24 bg-primary text-primary-foreground">
      <div className="container mx-auto grid gap-12 px-4 py-16 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-24">
        <div className="lg:col-span-7">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Call desk, {areaName}</p>
          <h2 id={`${id}-heading`} className="mt-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Tell us where you are. We&apos;ll tell you when we can be there.
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-primary-foreground/70">
            Pick your {placeLabel.toLowerCase().replace("your ", "")} and what&apos;s going on. The job card fills in as you
            go, so when you call, you already know what to say.
          </p>

          <fieldset className="mt-10">
            <legend className="flex items-baseline gap-3 text-sm font-semibold">
              <span className="tabular-nums text-accent">1</span>
              {placeLabel}
            </legend>
            <div className="mt-4 flex flex-wrap gap-2">
              {places.map((p) => (
                <OptionButton key={p} selected={place === p} onSelect={() => setPlace(place === p ? null : p)}>
                  {p}
                </OptionButton>
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-8">
            <legend className="flex items-baseline gap-3 text-sm font-semibold">
              <span className="tabular-nums text-accent">2</span>
              {"What's going on"}
            </legend>
            <div className="mt-4 flex flex-wrap gap-2">
              {JOB_TYPES.map((j) => (
                <OptionButton key={j} selected={job === j} onSelect={() => setJob(job === j ? null : j)}>
                  {j}
                </OptionButton>
              ))}
            </div>
          </fieldset>
        </div>

        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <div className="-rotate-1 rounded-lg bg-card p-6 text-card-foreground shadow-2xl shadow-black/40 transition-transform duration-500 hover:rotate-0 sm:p-8">
              <div className="flex items-baseline justify-between border-b-2 border-foreground pb-3">
                <p className="text-lg font-bold tracking-tight">Job card</p>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Borehole Works</p>
              </div>

              <dl className="job-card-lines mt-1 text-sm" aria-live="polite">
                {rows.map((row) => (
                  <div key={row.key} className="flex h-12 items-center justify-between gap-4">
                    <dt className="text-muted-foreground">{row.label}</dt>
                    <dd key={row.value ?? "empty"} className="area-card-in text-right font-semibold">
                      {row.value ?? <span className="font-normal text-muted-foreground/70">Not picked yet</span>}
                    </dd>
                  </div>
                ))}
              </dl>

              <TrackedLink
                kind="call"
                onClick={() => report("call")}
                ariaLabel={`Call Borehole Works on ${PHONE_DISPLAY}`}
                className="mt-6 flex w-full flex-col items-center rounded-md bg-primary px-6 py-4 text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Call now</span>
                <span className="mt-1 text-2xl font-bold tabular-nums tracking-tight">{PHONE_DISPLAY}</span>
              </TrackedLink>

              <TrackedLink
                kind="whatsapp"
                message={whatsappMessage}
                onClick={() => report("whatsapp")}
                className="mt-3 block w-full rounded-md border border-border px-6 py-3 text-center text-sm font-semibold transition-colors hover:border-foreground"
              >
                Send this card on WhatsApp instead
              </TrackedLink>

              <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                Read the card out when we answer. A photo of the pump, tank or leak on WhatsApp helps us quote faster.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function AreaStickyCall({ areaName }: { areaName: string }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-primary/95 px-4 py-3 backdrop-blur md:hidden">
      <TrackedLink
        kind="call"
        onClick={() => track("area_contact", { channel: "call", area: areaName, place: "sticky bar", job: "not set" })}
        className="flex items-center justify-between gap-3 rounded-md bg-accent px-4 py-3 text-accent-foreground"
      >
        <span className="text-sm font-semibold">Call us in {areaName}</span>
        <span className="text-base font-bold tabular-nums">{PHONE_DISPLAY}</span>
      </TrackedLink>
    </div>
  )
}
