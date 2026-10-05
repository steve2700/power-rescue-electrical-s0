// File path: app/terms-of-service/page.tsx
// Clean URL: https://www.boreholeworks.co.za/terms-of-service

import type { Metadata } from "next"
import type { ReactNode } from "react"
import { EMAIL, PHONE_DISPLAY, PHONE_TEL } from "@/components/contact-info"

export const metadata: Metadata = {
  title: "Terms of Service | Borehole Works",
  description:
    "Terms of Service for Borehole Works. Read the terms governing our website, quotations, and our borehole, pump, tank, irrigation and plumbing services in Gauteng.",
  alternates: {
    canonical: "https://www.boreholeworks.co.za/terms-of-service",
  },
  robots: "index, follow",
}

const EFFECTIVE_DATE = "September 28, 2026"

function Section({ number, title, children }: { number: number; title: string; children: ReactNode }) {
  return (
    <section className="border-t border-border py-10 first:border-t-0 first:pt-0">
      <h2 className="flex items-baseline gap-4 text-2xl font-bold tracking-tight">
        <span className="text-sm font-bold text-accent">{String(number).padStart(2, "0")}</span>
        {title}
      </h2>
      <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">{children}</div>
    </section>
  )
}

function Bullets({ items }: { items: ReactNode[] }) {
  return (
    <ul className="list-disc space-y-2 pl-6">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  )
}

export default function TermsOfServicePage() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-border bg-muted py-14 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Legal</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Terms of Service</h1>
            <p className="mt-4 text-muted-foreground">Borehole Works · Effective {EFFECTIVE_DATE}</p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div className="container mx-auto px-4 py-14 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <Section number={1} title="Introduction and acceptance">
            <p>
              These Terms of Service ("Terms") govern your use of the website https://www.boreholeworks.co.za and any
              quotation, project or service you engage Borehole Works ("we", "us", "our") to carry out. By using our
              website or engaging our services, you agree to be bound by these Terms. If you do not agree, please do not
              use our website or services.
            </p>
            <p>
              For project-specific work, these Terms apply alongside any separate written quotation, contract or scope
              of work between you and Borehole Works. Where a signed contract and these Terms conflict, the signed
              contract takes precedence.
            </p>
          </Section>

          <Section number={2} title="Our services">
            <p>
              Borehole Works provides borehole drilling, pump installation and repairs, solar borehole pumps,
              irrigation systems, water tank installation, plumbing, geyser installation and repairs, blocked drain
              unblocking and emergency plumbing for residential, commercial and agricultural clients across Gauteng,
              South Africa. The scope of any job is set out in the written quotation provided before work begins.
            </p>
            <p>
              We may decline or stop any service request where a site is unsafe, a request falls outside our
              expertise, or payment terms are not met.
            </p>
          </Section>

          <Section number={3} title="Quotations and estimates">
            <Bullets
              items={[
                <>
                  <strong className="text-foreground">Free assessments and quotations.</strong> Initial site
                  assessments and quotations are free, following a site visit or consultation.
                </>,
                <>
                  <strong className="text-foreground">Phone estimates.</strong> Where possible we give an estimate over
                  the phone before we drive out. An itemised quotation follows once we have seen the job.
                </>,
                <>
                  <strong className="text-foreground">Validity.</strong> Quotations are valid for 30 days from the
                  date issued unless stated otherwise.
                </>,
                <>
                  <strong className="text-foreground">Scope.</strong> A quotation reflects the scope known at the time.
                  Unforeseen site conditions, such as ground conditions or hidden pipework, may require a revised
                  quotation before work continues.
                </>,
                <>
                  <strong className="text-foreground">Written approval.</strong> Work begins only once you approve the
                  quotation in writing, including by email or WhatsApp confirmation.
                </>,
              ]}
            />
          </Section>

          <Section number={4} title="Payment terms">
            <Bullets
              items={[
                "A deposit may be required before work starts, as specified in your quotation.",
                "Progress payments may apply for larger projects, invoiced at agreed milestones.",
                "Final payment is due on completion, unless otherwise agreed in writing.",
                "Callout fees, where applicable, are confirmed on the phone before we come out.",
                "Late payments may incur interest and may pause further work until resolved.",
                "We accept EFT and other payment methods as confirmed at the time of quoting.",
              ]}
            />
            <p className="text-sm italic">
              Specific payment schedules, deposit amounts and milestones for your job are set out in your individual
              quotation or contract.
            </p>
          </Section>

          <Section number={5} title="Borehole drilling and water yield">
            <p>
              Groundwater is variable. A site assessment gives you an honest view of your chances of finding water and
              roughly what yield to expect, but it is an assessment, not a guarantee.
            </p>
            <Bullets
              items={[
                "We cannot guarantee that water will be found, or the depth, quality or sustained yield of any borehole.",
                "Drilling work carried out as quoted is payable even if the borehole is dry or yields less than hoped, unless your written quotation states otherwise.",
                "Yield tests show what a borehole can deliver at the time of testing. Yields can change with season, rainfall and other water users nearby.",
                "Water quality is not tested unless your quotation says so. If the water will be used for drinking, we recommend a laboratory test.",
                "You are responsible for obtaining any municipal or water-use approvals needed to drill or use groundwater on your property, unless we agree otherwise in writing.",
              ]}
            />
          </Section>

          <Section number={6} title="Changes, variations and cancellations">
            <p>
              <strong className="text-foreground">Changes to scope.</strong> Any change to the agreed scope of work must
              be confirmed in writing and may result in a revised quotation and adjusted timeline.
            </p>
            <p>
              <strong className="text-foreground">Cancellations.</strong> You may cancel a job before work begins.
              Deposits already paid may be non-refundable where materials have been ordered or labour scheduled on your
              behalf. Cancelling once work has started may require payment for work completed and materials committed.
            </p>
          </Section>

          <Section number={7} title="Warranties and guarantees">
            <p>
              We stand behind the quality of our workmanship. Warranty terms, including duration and coverage, depend on
              the type of work and will be detailed in your job documentation. Warranties generally do not cover:
            </p>
            <Bullets
              items={[
                "Damage caused by misuse, neglect or lack of maintenance",
                "Normal wear and tear",
                "Work or alterations carried out by others after we finish",
                "Pre-existing defects not identified as part of the original scope",
                "Changes in borehole yield or water quality caused by natural conditions",
              ]}
            />
            <p>
              Manufacturer warranties on pumps, tanks, geysers and fittings are passed through to you as provided by
              the manufacturer or supplier.
            </p>
          </Section>

          <Section number={8} title="Client responsibilities">
            <p>To help us deliver your job safely and on schedule, you agree to:</p>
            <Bullets
              items={[
                "Provide safe and reasonable site access",
                "Tell us about known hazards, including underground pipes, cables and boundaries, before we drill or dig",
                "Obtain any body corporate, landlord or authority approvals required",
                "Respond promptly to requests for decisions or approvals",
                "Make water and electricity available where needed",
                "Settle invoices according to the agreed payment terms",
              ]}
            />
          </Section>

          <Section number={9} title="Limitation of liability">
            <p>
              While we take reasonable care in all work performed, Borehole Works' liability for any claim arising from
              our services is limited to the value of the relevant job, except where liability cannot be excluded or
              limited under South African law, including gross negligence or wilful misconduct.
            </p>
            <p>
              We are not liable for delays or failures caused by circumstances beyond our reasonable control, including
              extreme weather, load shedding, supplier delays or municipal service interruptions.
            </p>
          </Section>

          <Section number={10} title="Insurance">
            <p>
              We maintain insurance cover appropriate to the work we perform. Details can be provided on request. We
              recommend that you maintain your own homeowner's or business insurance covering the property while work
              is carried out.
            </p>
          </Section>

          <Section number={11} title="Website use and intellectual property">
            <p>
              All content on this website, including text, photographs, logos and design, belongs to Borehole Works or
              its licensors and may not be copied, reproduced or used without our prior written consent.
            </p>
            <p>
              You agree not to use this website for any unlawful purpose or in a way that could damage, disable or
              impair it.
            </p>
          </Section>

          <Section number={12} title="Dispute resolution">
            <p>
              If a dispute arises about our services, please contact us directly so we can resolve it promptly. If it
              cannot be resolved informally, the dispute will be handled in accordance with South African law and,
              where applicable, referred to mediation or arbitration before formal legal proceedings.
            </p>
          </Section>

          <Section number={13} title="Governing law">
            <p>
              These Terms are governed by the laws of the Republic of South Africa. Any dispute not resolved through
              mediation is subject to the jurisdiction of the South African courts.
            </p>
          </Section>

          <Section number={14} title="Changes to these Terms">
            <p>
              We may update these Terms from time to time to reflect changes in our services or legal requirements.
              Updates are posted on this page with a revised effective date. Continued use of our website or services
              after changes are posted means you accept the updated Terms.
            </p>
            <p>
              For active jobs, the Terms in effect when your quotation was accepted continue to apply to that job.
            </p>
          </Section>

          <Section number={15} title="Contact us">
            <p>Questions about these Terms can be sent to:</p>
            <ul className="space-y-1">
              <li>
                Email: <a href={`mailto:${EMAIL}`} className="font-semibold text-accent hover:underline">{EMAIL}</a>
              </li>
              <li>
                Phone: <a href={`tel:${PHONE_TEL}`} className="font-semibold text-accent hover:underline">{PHONE_DISPLAY}</a>
              </li>
              <li>Location: Gauteng, South Africa</li>
            </ul>
            <p className="text-sm">Last updated and effective: {EFFECTIVE_DATE}</p>
          </Section>
        </div>
      </div>

      {/* CLOSING */}
      <section className="bg-primary py-14 text-primary-foreground">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h2 className="text-3xl font-bold">Questions about our terms?</h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">
            We're happy to talk through anything here before you commit to a job.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={`tel:${PHONE_TEL}`} className="inline-flex h-12 items-center justify-center rounded-xl bg-accent px-6 text-sm font-semibold text-accent-foreground hover:bg-accent/90">Call {PHONE_DISPLAY}</a>
            <a href={`mailto:${EMAIL}`} className="inline-flex h-12 items-center justify-center rounded-xl border border-white/40 px-6 text-sm font-semibold text-white hover:bg-white/10">Email us</a>
          </div>
        </div>
      </section>
    </>
  )
}
