"use client"

import Image from "next/image"
import { useState, type KeyboardEvent } from "react"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { WHATSAPP_NUMBER } from "@/components/contact-info"
import { trackWhatsAppClick } from "@/lib/analytics"
import { cn } from "@/lib/utils"
import { JOB_TYPES, QUICK_AREAS, WHEN_OPTIONS } from "./home-data"

type JobId = (typeof JOB_TYPES)[number]["id"]
type WhenId = (typeof WHEN_OPTIONS)[number]["id"]

const STEP_TITLES = ["What can we help with?", "Who are we helping?", "Where is the job?", "When do you need us?", "Ready to send"]

export function JobCard() {
  const [step, setStep] = useState(0)
  const [job, setJob] = useState<JobId | null>(null)
  const [name, setName] = useState("")
  const [area, setArea] = useState("")
  const [when, setWhen] = useState<WhenId | null>(null)

  const jobLabel = JOB_TYPES.find((j) => j.id === job)?.label
  const whenLabel = WHEN_OPTIONS.find((w) => w.id === when)?.label
  const firstName = name.trim().split(" ")[0]

  const heading =
    step === 1 && jobLabel
      ? `${jobLabel}. Got it.`
      : step === 2 && firstName
        ? `Thanks ${firstName}. Where is the job?`
        : STEP_TITLES[step]

  const canContinue = [job !== null, name.trim().length > 1, area.trim().length > 1, when !== null, true][step]

  const next = () => canContinue && setStep((s) => Math.min(s + 1, 4))
  const back = () => setStep((s) => Math.max(s - 1, 0))

  const pickAndAdvance = (fn: () => void) => {
    fn()
    window.setTimeout(() => setStep((s) => s + 1), 220)
  }

  const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter" || e.nativeEvent.isComposing || e.keyCode === 229) return
    e.preventDefault()
    next()
  }

  const message = [
    "Hi Power Rescue, here is my job card from the website.",
    "",
    `Job: ${jobLabel ?? ""}`,
    `Name: ${name.trim()}`,
    `Location: ${area.trim()}`,
    `When: ${whenLabel ?? ""}`,
  ].join("\n")

  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

  return (
    <div
      id="job-card"
      className="relative w-full scroll-mt-28 overflow-hidden rounded-[28px] border border-white/10 bg-[#1c2240]/90 p-5 text-white shadow-2xl shadow-black/40 backdrop-blur-md sm:p-7"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-white/80">
          <span className="live-dot h-2 w-2 rounded-full bg-success" aria-hidden="true" />
          WhatsApp job card
        </span>
        <span className="text-xs tabular-nums text-white/50">
          {step < 4 ? `Step ${step + 1} of 4` : "All done"}
        </span>
      </div>

      <div className="mt-4 flex gap-1.5" aria-hidden="true">
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className={cn(
              "h-1 flex-1 rounded-full transition-colors duration-500",
              i < step || step === 4 ? "bg-accent" : i === step ? "bg-accent/60" : "bg-white/10",
            )}
          />
        ))}
      </div>

      <h2 className="mt-6 text-balance font-display text-2xl font-bold leading-tight sm:text-[1.7rem]">
        {heading}
      </h2>
      {step === 1 && <p className="mt-1 text-sm text-white/60">{"Who should we ask for when we call?"}</p>}

      <div key={step} className="step-in mt-5 min-h-[248px]">
        {step === 0 && (
          <div className="grid grid-cols-2 gap-3" role="radiogroup" aria-label="Type of job">
            {JOB_TYPES.map((t) => {
              const active = job === t.id
              return (
                <button
                  key={t.id}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => pickAndAdvance(() => setJob(t.id))}
                  className={cn(
                    "group flex flex-col items-center rounded-2xl border-2 bg-[#f6f3ea] p-3 text-center text-primary transition-all hover:-translate-y-0.5",
                    active ? "border-accent ring-4 ring-accent/25" : "border-transparent hover:border-accent/60",
                  )}
                >
                  <Image
                    src={t.image}
                    alt=""
                    width={96}
                    height={96}
                    className="h-16 w-16 object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20"
                  />
                  <span className="mt-1 text-sm font-semibold leading-tight">{t.label}</span>
                  <span className="mt-0.5 hidden text-[11px] leading-tight text-primary/60 sm:block">{t.hint}</span>
                </button>
              )
            })}
          </div>
        )}

        {step === 1 && (
          <div>
            <label htmlFor="jc-name" className="sr-only">
              Your name
            </label>
            <input
              id="jc-name"
              autoFocus
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={onEnter}
              placeholder="Your name"
              className="w-full border-b-2 border-white/15 bg-transparent pb-3 font-display text-3xl font-semibold text-white outline-none transition-colors placeholder:text-white/25 focus:border-accent"
            />
            <p className="mt-4 text-sm leading-relaxed text-white/55">
              {"We only use this to greet you properly. No mailing lists."}
            </p>
          </div>
        )}

        {step === 2 && (
          <div>
            <label htmlFor="jc-area" className="sr-only">
              Suburb or area
            </label>
            <input
              id="jc-area"
              autoFocus
              autoComplete="address-level2"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              onKeyDown={onEnter}
              placeholder="Suburb or area"
              className="w-full border-b-2 border-white/15 bg-transparent pb-3 font-display text-3xl font-semibold text-white outline-none transition-colors placeholder:text-white/25 focus:border-accent"
            />
            <p className="mt-5 text-xs uppercase tracking-[0.16em] text-white/45">Popular areas</p>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {QUICK_AREAS.map((a) => (
                <button
                  key={a}
                  type="button"
                  onClick={() => setArea(a)}
                  className={cn(
                    "rounded-full border px-3.5 py-1.5 text-sm transition-colors",
                    area === a
                      ? "border-accent bg-accent text-accent-foreground"
                      : "border-white/15 text-white/80 hover:border-white/40",
                  )}
                >
                  {a}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="flex flex-col gap-2.5" role="radiogroup" aria-label="When do you need us">
            {WHEN_OPTIONS.map((w) => {
              const active = when === w.id
              const urgent = w.id === "now"
              return (
                <button
                  key={w.id}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => pickAndAdvance(() => setWhen(w.id))}
                  className={cn(
                    "flex items-center justify-between rounded-full border px-5 py-3 text-left transition-all",
                    active
                      ? "border-accent bg-accent text-accent-foreground"
                      : "border-white/12 bg-white/[0.04] hover:border-white/35 hover:bg-white/[0.07]",
                  )}
                >
                  <span className="font-semibold">{w.label}</span>
                  <span
                    className={cn(
                      "text-xs",
                      active ? "text-accent-foreground/70" : urgent ? "text-accent" : "text-white/50",
                    )}
                  >
                    {w.hint}
                  </span>
                </button>
              )
            })}
          </div>
        )}

        {step === 4 && (
          <div>
            <div className="rounded-2xl bg-[#0b141a] p-4">
              <div className="ml-auto max-w-[92%] rounded-2xl rounded-tr-md bg-[#005c4b] px-4 py-3 text-[13px] leading-relaxed text-white/95 shadow">
                <p>{"Hi Power Rescue, here is my job card."}</p>
                <dl className="mt-2 grid grid-cols-[auto_1fr] gap-x-3 gap-y-0.5">
                  <dt className="text-white/60">Job</dt>
                  <dd>{jobLabel}</dd>
                  <dt className="text-white/60">Name</dt>
                  <dd>{name.trim()}</dd>
                  <dt className="text-white/60">Location</dt>
                  <dd>{area.trim()}</dd>
                  <dt className="text-white/60">When</dt>
                  <dd>{whenLabel}</dd>
                </dl>
              </div>
            </div>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackWhatsAppClick}
              className="mt-4 flex w-full items-center justify-center gap-2.5 rounded-full bg-[#25D366] py-4 text-base font-semibold text-[#0b141a] transition-transform hover:scale-[1.02]"
            >
              <WhatsAppIcon className="h-5 w-5" aria-hidden="true" />
              Send on WhatsApp
            </a>
            <button
              type="button"
              onClick={() => setStep(0)}
              className="mt-3 w-full text-center text-sm text-white/50 underline-offset-4 hover:text-white hover:underline"
            >
              Edit details
            </button>
          </div>
        )}
      </div>

      {step < 4 && (
        <div className="mt-6 flex items-center gap-3">
          {step > 0 && (
            <button
              type="button"
              onClick={back}
              aria-label="Go back a step"
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-white/40"
            >
              <span className="block h-2.5 w-2.5 -rotate-45 border-l-2 border-t-2 border-white translate-x-0.5" aria-hidden="true" />
            </button>
          )}
          <button
            type="button"
            onClick={next}
            disabled={!canContinue}
            className="flex h-14 flex-1 items-center justify-center rounded-full bg-accent font-semibold text-accent-foreground transition-all hover:brightness-105 disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-white/35"
          >
            {"Continue"}
          </button>
        </div>
      )}
    </div>
  )
}
