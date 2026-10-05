// File path: app/privacy-policy/page.tsx
// Clean URL: https://www.boreholeworks.co.za/privacy-policy

import type { Metadata } from "next"
import type { ReactNode } from "react"
import { EMAIL, PHONE_DISPLAY, PHONE_TEL } from "@/components/contact-info"

export const metadata: Metadata = {
  title: "Privacy Policy | Borehole Works - POPIA Compliant",
  description:
    "Privacy Policy for Borehole Works. Learn how we collect, use and protect your personal information in line with the Protection of Personal Information Act, 2013 (POPIA).",
  alternates: {
    canonical: "https://www.boreholeworks.co.za/privacy-policy",
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

function SubHeading({ children }: { children: ReactNode }) {
  return <h3 className="pt-2 text-lg font-semibold text-foreground">{children}</h3>
}

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-border bg-muted py-14 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Legal</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Privacy Policy</h1>
            <p className="mt-4 text-muted-foreground">Borehole Works · Effective {EFFECTIVE_DATE} · POPIA</p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div className="container mx-auto px-4 py-14 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <Section number={1} title="Introduction">
            <p>
              Borehole Works ("we", "us", "our") is committed to protecting your privacy and personal information.
              This Privacy Policy explains how we collect, use, share and protect your information when you visit our
              website https://www.boreholeworks.co.za, contact us, or use our services.
            </p>
            <p>
              This policy is written to comply with the Protection of Personal Information Act, 2013 (POPIA) and other
              applicable South African data protection law.
            </p>
            <ul className="space-y-1">
              <li>Location: Gauteng, South Africa</li>
              <li>
                Phone: <a href={`tel:${PHONE_TEL}`} className="font-semibold text-accent hover:underline">{PHONE_DISPLAY}</a>
              </li>
              <li>
                Email: <a href={`mailto:${EMAIL}`} className="font-semibold text-accent hover:underline">{EMAIL}</a>
              </li>
            </ul>
          </Section>

          <Section number={2} title="Information we collect">
            <SubHeading>2.1 Information you give us</SubHeading>
            <p>
              We collect personal information you choose to share when you call us, message us on WhatsApp, email us,
              send a job card from our website, request a quote or engage our services. This may include:
            </p>
            <Bullets
              items={[
                "Your name and surname",
                "Your phone number and email address",
                "Your physical address or suburb",
                "Company name, for business clients",
                "Property details and photos you send us",
                "What you need help with",
                "Payment details needed to process your job",
              ]}
            />

            <SubHeading>2.2 Information collected automatically</SubHeading>
            <p>When you visit our website, we and our service providers may automatically collect:</p>
            <Bullets
              items={[
                "IP address and approximate location",
                "Browser type, device and operating system",
                "Pages visited, time spent and how you arrived on our site",
                "Whether you clicked to call, WhatsApp or email us",
              ]}
            />

            <SubHeading>2.3 Information from advertising platforms</SubHeading>
            <p>
              If you arrive from an advertisement, the advertising platform may tell us which ad or campaign brought
              you to our website. We do not receive your identity from this.
            </p>
          </Section>

          <Section number={3} title="How we use your information">
            <Bullets
              items={[
                "Responding to enquiries and preparing quotations",
                "Scheduling site visits, callouts and installations",
                "Delivering, invoicing and following up on our services",
                "Keeping records for warranty, accounting and legal purposes",
                "Measuring how our website and advertising perform, and improving them",
                "Communicating with you about your job",
                "Protecting our rights and preventing fraud",
              ]}
            />
          </Section>

          <Section number={4} title="Lawful basis for processing">
            <p>We process personal information on these grounds under POPIA:</p>
            <Bullets
              items={[
                <><strong className="text-foreground">Consent</strong>, where you have given it for a specific purpose.</>,
                <><strong className="text-foreground">Contract</strong>, where processing is needed to deliver the service you asked for.</>,
                <><strong className="text-foreground">Legal obligation</strong>, where South African law requires us to keep or share information.</>,
                <><strong className="text-foreground">Legitimate interests</strong>, where processing is needed to run our business and does not override your rights.</>,
              ]}
            />
          </Section>

          <Section number={5} title="Who we share information with">
            <Bullets
              items={[
                "Subcontractors and specialists who help us complete your job",
                "Suppliers, where needed to order materials for your job",
                "Insurers, where you ask us to support a claim",
                "Technology providers, including website hosting, analytics, and messaging and email services",
                "Advertising platforms, in the form of anonymous conversion measurement",
                "Authorities, advisers and auditors, where the law requires or permits it",
              ]}
            />
            <p>
              Messages you send us on WhatsApp are also processed by WhatsApp under its own terms and privacy policy.
            </p>
            <p className="font-semibold text-foreground">We do not sell your personal information.</p>
          </Section>

          <Section number={6} title="Data security">
            <p>
              We take reasonable technical and organisational steps to protect personal information from loss, misuse
              and unauthorised access, including using reputable hosting with encrypted (HTTPS) connections, limiting
              who can see client information, and keeping records only where we need them.
            </p>
            <p className="text-sm italic">
              No method of transmission over the internet is completely secure, so we cannot guarantee absolute
              security.
            </p>
          </Section>

          <Section number={7} title="How long we keep information">
            <Bullets
              items={[
                "Client records: for the duration of our relationship plus 5 years",
                "Job records and documentation: 5 years after completion",
                "Financial records: 5 years, as required by South African tax law",
                "Marketing communications: until you unsubscribe or withdraw consent",
              ]}
            />
            <p>After the retention period we securely delete or anonymise your information.</p>
          </Section>

          <Section number={8} title="Your rights under POPIA">
            <p>You have the right to:</p>
            <Bullets
              items={[
                "Ask what personal information we hold about you and get access to it",
                "Ask us to correct inaccurate or incomplete information",
                "Ask us to delete your information, subject to legal retention requirements",
                "Object to us processing your information for certain purposes",
                "Ask us to restrict processing in certain circumstances",
                "Withdraw your consent where consent was the basis for processing",
                "Lodge a complaint with the Information Regulator",
              ]}
            />
            <p>
              To use any of these rights, contact us at{" "}
              <a href={`mailto:${EMAIL}`} className="font-semibold text-accent hover:underline">{EMAIL}</a> or{" "}
              <a href={`tel:${PHONE_TEL}`} className="font-semibold text-accent hover:underline">{PHONE_DISPLAY}</a>.
              We will respond within 30 days.
            </p>
          </Section>

          <Section number={9} title="Cookies, analytics and advertising">
            <p>
              Our website uses analytics and performance tools to understand how visitors use the site and how fast it
              loads. When we run Google Ads campaigns, we also use Google's conversion measurement to count calls,
              WhatsApp chats and email clicks that come from our ads. These tools may use cookies or similar
              technologies.
            </p>
            <p>
              You can control cookies through your browser settings. Turning them off may affect how parts of the
              website work.
            </p>
          </Section>

          <Section number={10} title="Third-party links">
            <p>
              Our website links to third-party services such as WhatsApp and Google Maps. We are not responsible for
              their privacy practices, so please review their policies before sharing personal information with them.
            </p>
          </Section>

          <Section number={11} title="Children">
            <p>
              Our services are not directed at anyone under 18 and we do not knowingly collect personal information
              from children. If you believe we have collected a child's information, please contact us and we will
              delete it.
            </p>
          </Section>

          <Section number={12} title="International data transfers">
            <p>
              We operate in South Africa, but some of our technology providers, such as website hosting, analytics and
              Google, may process information outside the country. We choose reputable providers and take reasonable
              steps to make sure your information stays protected in line with POPIA.
            </p>
          </Section>

          <Section number={13} title="Marketing communications">
            <p>
              We only send marketing messages with your consent. You can opt out at any time by telling us by phone,
              WhatsApp or email. You will still receive messages about your job, such as quotes and appointment
              details.
            </p>
          </Section>

          <Section number={14} title="Changes to this policy">
            <p>
              We may update this policy to reflect changes in our practices or the law. Updates are posted on this page
              with a revised date. Please check back from time to time.
            </p>
          </Section>

          <Section number={15} title="Contact and complaints">
            <SubHeading>15.1 Information Officer</SubHeading>
            <ul className="space-y-1">
              <li>Information Officer: Borehole Works Management</li>
              <li>
                Email: <a href={`mailto:${EMAIL}`} className="font-semibold text-accent hover:underline">{EMAIL}</a>
              </li>
              <li>
                Phone: <a href={`tel:${PHONE_TEL}`} className="font-semibold text-accent hover:underline">{PHONE_DISPLAY}</a>
              </li>
            </ul>

            <SubHeading>15.2 Complaints process</SubHeading>
            <ol className="list-decimal space-y-2 pl-6">
              <li>Contact our Information Officer using the details above.</li>
              <li>We will acknowledge your complaint within 5 business days.</li>
              <li>We will investigate and respond within 30 days.</li>
              <li>If you are not satisfied, you may lodge a complaint with the Information Regulator.</li>
            </ol>

            <SubHeading>15.3 Information Regulator (South Africa)</SubHeading>
            <ul className="space-y-1">
              <li>Address: JD House, 27 Stiemens Street, Braamfontein, Johannesburg, 2001</li>
              <li>Phone: +27 10 023 5200</li>
              <li>Email: inforeg@justice.gov.za</li>
              <li>
                Website:{" "}
                <a href="https://www.justice.gov.za/inforeg/" target="_blank" rel="noopener noreferrer" className="font-semibold text-accent hover:underline">
                  https://www.justice.gov.za/inforeg/
                </a>
              </li>
            </ul>
          </Section>

          <Section number={16} title="Consent">
            <p>
              By using our website and services, you agree to this Privacy Policy. Where POPIA requires it, we will
              ask for your explicit consent for specific processing.
            </p>
            <p className="text-sm">Last updated and effective: {EFFECTIVE_DATE}</p>
          </Section>
        </div>
      </div>

      {/* CLOSING */}
      <section className="bg-primary py-14 text-primary-foreground">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h2 className="text-3xl font-bold">Your privacy matters to us</h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">
            Questions about how we handle your information? Get in touch and we'll answer them.
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
