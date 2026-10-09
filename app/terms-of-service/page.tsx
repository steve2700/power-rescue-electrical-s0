import type { Metadata } from "next"
import {
  Bullets,
  EmailLink,
  LegalBody,
  LegalClosing,
  LegalHero,
  PhoneLink,
  Section,
  Strong,
} from "@/components/legal-ui"

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Power Rescue Electrical. The terms that govern our website, quotations and electrical services in Gauteng, including repairs, installations, solar, fences, CCTV and gates.",
  alternates: { canonical: "/terms-of-service" },
  robots: { index: true, follow: true },
}

const EFFECTIVE_DATE = "9 October 2026"

export default function TermsOfServicePage() {
  return (
    <>
      <LegalHero title="Terms of Service" meta={`Power Rescue Electrical · Effective ${EFFECTIVE_DATE}`} />

      <LegalBody>
        <Section number={1} title="Introduction and acceptance">
          <p>
            These Terms of Service (&quot;Terms&quot;) govern your use of the website https://www.powerrescue.co.za and any
            quotation, project or service you engage Power Rescue Electrical (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) to carry out.
            By using our website or engaging our services, you agree to be bound by these Terms. If you do not agree,
            please do not use our website or services.
          </p>
          <p>
            For project-specific work, these Terms apply alongside any separate written quotation, contract or scope of
            work between you and Power Rescue Electrical. Where a signed contract and these Terms conflict, the signed
            contract takes precedence.
          </p>
        </Section>

        <Section number={2} title="Our services">
          <p>
            Power Rescue Electrical provides emergency electrical repairs, installations and wiring, maintenance and
            fault finding, Certificates of Compliance, DB board upgrades, lighting and plug points, solar and inverter
            backup systems, solar geyser installation and repairs, electric fence installation and repairs, CCTV
            installation and repairs, and security gate motor and automation installation and repairs, for residential
            and commercial clients across Gauteng, South Africa. The scope of any job is set out in the quotation or
            agreement made before work begins.
          </p>
          <p>
            We may decline or stop any service request where a site is unsafe, a request falls outside our expertise,
            or payment terms are not met.
          </p>
        </Section>

        <Section number={3} title="Quotations and estimates">
          <Bullets
            items={[
              <>
                <Strong>Phone and WhatsApp estimates.</Strong> Where possible we give an estimate over the phone or on
                WhatsApp. An itemised quotation follows once we have seen the job.
              </>,
              <>
                <Strong>Validity.</Strong> Quotations are valid for 30 days from the date issued unless stated
                otherwise.
              </>,
              <>
                <Strong>Scope.</Strong> A quotation reflects the scope known at the time. Hidden faults, concealed
                wiring or unforeseen site conditions may require a revised quotation before work continues.
              </>,
              <>
                <Strong>Approval.</Strong> Work begins only once you approve the quotation, including by email or
                WhatsApp confirmation. In a genuine emergency, you may approve urgent work verbally, and we will
                confirm what was agreed in writing afterwards.
              </>,
            ]}
          />
        </Section>

        <Section number={4} title="Payment terms">
          <Bullets
            items={[
              "A deposit may be required before work starts on larger jobs, for example to order materials, as specified in your quotation.",
              "Progress payments may apply for larger projects, invoiced at agreed milestones.",
              "Final payment is due on completion, unless otherwise agreed in writing.",
              "Any call-out or after-hours charges are confirmed with you before we come out.",
              "Late payments may incur interest and may pause further work until resolved.",
              "We accept EFT and other payment methods as confirmed at the time of quoting.",
            ]}
          />
          <p className="text-sm italic">
            Specific payment schedules, deposit amounts and milestones for your job are set out in your individual
            quotation or agreement.
          </p>
        </Section>

        <Section number={5} title="Emergency call-outs">
          <p>
            Our emergency line is open day and night. Arrival times we give you are estimates, and depend on your
            location, traffic, weather and the availability of the nearest electrician.
          </p>
          <Bullets
            items={[
              "Our first priority is to make the fault safe. This can mean isolating a circuit or switching off part of your installation.",
              "If an installation is unsafe, we may decline to restore power until the necessary repairs have been done.",
              "Temporary repairs made to restore power in an emergency are explained to you, and a permanent repair can be quoted separately.",
            ]}
          />
        </Section>

        <Section number={6} title="Electrical safety and Certificates of Compliance">
          <p>
            Where the law requires a Certificate of Compliance (COC) for work we carry out, we will issue one once the
            work has been completed and has passed testing. We cannot issue a certificate for an installation that does
            not meet the required standard until the faults have been repaired.
          </p>
          <p>
            An inspection or certificate reflects the condition of the installation on the day it was inspected. It is
            not a guarantee that no fault will develop later.
          </p>
          <p>
            You agree to follow our safety advice, including not using equipment or circuits we have told you are
            unsafe.
          </p>
        </Section>

        <Section number={7} title="Solar, backup power and savings">
          <p>
            Solar, inverter, battery and solar geyser systems are designed around the information you give us about your
            usage and goals. Any figures we discuss for savings, output or backup time are estimates, not guarantees.
          </p>
          <Bullets
            items={[
              "Solar output depends on sunlight, weather, roof orientation, shading and the condition of the system.",
              "How long a battery system lasts during an outage depends on the battery size, its charge and what you run on it.",
              "Savings on your electricity bill depend on your usage and on tariffs, which we do not control.",
              "You are responsible for obtaining any body corporate, landlord or municipal approvals needed for a system on your property, unless we agree in writing that we will handle them.",
            ]}
          />
        </Section>

        <Section number={8} title="Repairs on existing systems">
          <p>
            Much of our repair work, including on electric fences, CCTV systems, gate motors and solar geysers, is on
            systems that someone else installed. In that case:
          </p>
          <Bullets
            items={[
              "We diagnose the fault and tell you whether it is a repair or a replacement.",
              "We are responsible for the repair we carry out and the parts we supply, but not for the rest of a system we did not install, or for faults already present that were not part of the repair.",
              "Equipment that is old, discontinued or damaged may not be repairable. We will tell you before you commit to cost.",
              "If we find further faults while working, we will tell you and quote separately.",
            ]}
          />
        </Section>

        <Section number={9} title="Changes, variations and cancellations">
          <p>
            <Strong>Changes to scope.</Strong> Any change to the agreed scope of work must be confirmed in writing and
            may result in a revised quotation and adjusted timeline.
          </p>
          <p>
            <Strong>Cancellations.</Strong> You may cancel a job before work begins. Deposits already paid may be
            non-refundable where materials have been ordered or labour scheduled on your behalf. Cancelling once work
            has started may require payment for work completed and materials committed.
          </p>
        </Section>

        <Section number={10} title="Warranties and guarantees">
          <p>
            We stand behind the quality of our workmanship. Warranty terms, including duration and coverage, depend on
            the type of work and will be detailed in your job documentation. Warranties generally do not cover:
          </p>
          <Bullets
            items={[
              "Damage caused by misuse, neglect or lack of maintenance",
              "Normal wear and tear, including ageing of batteries, fence wires and gate parts",
              "Damage from lightning, power surges, floods or theft",
              "Work or alterations carried out by others after we finish",
              "Pre-existing defects not identified as part of the original scope",
            ]}
          />
          <p>
            Manufacturer warranties on inverters, batteries, panels, geysers, energisers, cameras, gate motors and
            fittings are passed through to you as provided by the manufacturer or supplier.
          </p>
        </Section>

        <Section number={11} title="Client responsibilities">
          <p>To help us deliver your job safely and on schedule, you agree to:</p>
          <Bullets
            items={[
              "Provide safe and reasonable site access, including access to your DB board and relevant equipment",
              "Tell us about known hazards, such as damaged wiring, asbestos, hidden cables or pipes and animals on site",
              "Obtain any body corporate, landlord or authority approvals required",
              "Respond promptly to requests for decisions or approvals",
              "Make sure that someone over 18 is present, or that we have your permission to work unattended",
              "Settle invoices according to the agreed payment terms",
            ]}
          />
        </Section>

        <Section number={12} title="Limitation of liability">
          <p>
            While we take reasonable care in all work performed, Power Rescue Electrical&apos;s liability for any claim
            arising from our services is limited to the value of the relevant job, except where liability cannot be
            excluded or limited under South African law, including gross negligence or wilful misconduct.
          </p>
          <p>
            We are not liable for indirect or consequential losses, such as loss of income, spoiled goods or loss of
            data, or for delays or failures caused by circumstances beyond our reasonable control, including extreme
            weather, load shedding, supplier delays or municipal service interruptions.
          </p>
          <p>
            Nothing in these Terms limits any rights you have under the Consumer Protection Act, 2008, or any other law
            that cannot be limited by agreement.
          </p>
        </Section>

        <Section number={13} title="Website use and intellectual property">
          <p>
            All content on this website, including text, photographs, logos and design, belongs to Power Rescue
            Electrical or its licensors and may not be copied, reproduced or used without our prior written consent.
          </p>
          <p>
            Information on this website is general. It is not a quote and does not replace advice from an electrician
            who has seen your installation. You agree not to use this website for any unlawful purpose or in a way that
            could damage, disable or impair it.
          </p>
        </Section>

        <Section number={14} title="Disputes and governing law">
          <p>
            If a dispute arises about our services, please contact us directly so we can resolve it promptly. If it
            cannot be resolved informally, the dispute will be handled in accordance with South African law and, where
            applicable, referred to mediation or arbitration before formal legal proceedings.
          </p>
          <p>
            These Terms are governed by the laws of the Republic of South Africa. Any dispute not resolved through
            mediation is subject to the jurisdiction of the South African courts.
          </p>
        </Section>

        <Section number={15} title="Changes to these Terms">
          <p>
            We may update these Terms from time to time to reflect changes in our services or legal requirements.
            Updates are posted on this page with a revised effective date. Continued use of our website or services
            after changes are posted means you accept the updated Terms.
          </p>
          <p>For active jobs, the Terms in effect when your quotation was accepted continue to apply to that job.</p>
        </Section>

        <Section number={16} title="Contact us">
          <p>Questions about these Terms can be sent to:</p>
          <ul className="space-y-1">
            <li>
              Email: <EmailLink />
            </li>
            <li>
              Phone: <PhoneLink />
            </li>
            <li>Location: Gauteng, South Africa</li>
          </ul>
          <p className="text-sm">Last updated and effective: {EFFECTIVE_DATE}</p>
        </Section>
      </LegalBody>

      <LegalClosing
        heading="Questions about our terms?"
        copy="We are happy to talk through anything here before you commit to a job."
      />
    </>
  )
}
