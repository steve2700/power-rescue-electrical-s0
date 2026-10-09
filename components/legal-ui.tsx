import Link from "next/link"
import type { ReactNode } from "react"
import { EMAIL, PHONE_DISPLAY, PHONE_TEL } from "@/components/contact-info"

export function LegalHero({ title, meta }: { title: string; meta: string }) {
  return (
    <section className="bg-primary text-white">
      <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:py-20">
        <nav aria-label="Breadcrumb" className="text-sm text-white/60">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white">{title}</span>
        </nav>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-accent">Legal</p>
        <h1 className="mt-3 text-balance font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-white/60">{meta}</p>
      </div>
    </section>
  )
}

export function LegalBody({ children }: { children: ReactNode }) {
  return (
    <div className="bg-background px-4 py-14 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-3xl">{children}</div>
    </div>
  )
}

export function Section({ number, title, children }: { number: number; title: string; children: ReactNode }) {
  return (
    <section className="border-t border-border py-10 first:border-t-0 first:pt-0">
      <h2 className="flex items-baseline gap-4 font-display text-2xl font-bold tracking-tight text-foreground">
        <span className="text-sm font-bold tabular-nums text-muted-foreground">{String(number).padStart(2, "0")}</span>
        {title}
      </h2>
      <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">{children}</div>
    </section>
  )
}

export function Bullets({ items }: { items: ReactNode[] }) {
  return (
    <ul className="list-disc space-y-2 pl-6">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  )
}

export function SubHeading({ children }: { children: ReactNode }) {
  return <h3 className="pt-2 font-display text-lg font-semibold text-foreground">{children}</h3>
}

export function Strong({ children }: { children: ReactNode }) {
  return <strong className="text-foreground">{children}</strong>
}

export function PhoneLink() {
  return (
    <a href={`tel:${PHONE_TEL}`} className="font-semibold text-primary hover:underline">
      {PHONE_DISPLAY}
    </a>
  )
}

export function EmailLink() {
  return (
    <a href={`mailto:${EMAIL}`} className="font-semibold text-primary hover:underline">
      {EMAIL}
    </a>
  )
}

export function LegalClosing({ heading, copy }: { heading: string; copy: string }) {
  return (
    <section className="bg-primary py-14 text-center text-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-balance font-display text-3xl font-bold">{heading}</h2>
        <p className="mx-auto mt-3 max-w-xl text-white/75">{copy}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-primary transition-transform hover:scale-[1.02]"
          >
            Call {PHONE_DISPLAY}
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 px-7 text-sm font-semibold transition-colors hover:bg-white/10"
          >
            Email us
          </a>
        </div>
      </div>
    </section>
  )
}
