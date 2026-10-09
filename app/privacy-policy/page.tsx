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
  SubHeading,
} from "@/components/legal-ui"

export const metadata: Metadata = {
  title: "Privacy Policy | POPIA",
  description:
    "Privacy Policy for Power Rescue Electrical. How we collect, use and protect your personal information in line with the Protection of Personal Information Act, 2013 (POPIA).",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
}

const EFFECTIVE_DATE = "9 October 2026"

export default function PrivacyPolicyPage() {
  return (
    <>
      <LegalHero title="Privacy Policy" meta={`Power Rescue Electrical · Effective ${EFFECTIVE_DATE} · POPIA`} />

      <LegalBody>
        <Section number={1} title="Introduction">
          <p>
            Power Rescue Electrical (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your privacy and personal
            information. This Privacy Policy explains how we collect, use, share and protect your information when you
            visit our website https://www.powerrescue.co.za, contact us, or use our services.
          </p>
          <p>
            This policy is written to comply with the Protection of Personal Information Act, 2013 (POPIA) and other
            applicable South African data protection law.
          </p>
          <ul className="space-y-1">
            <li>Location: Gauteng, South Africa</li>
            <li>
              Phone: <PhoneLink />
            </li>
            <li>
              Email: <EmailLink />
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
              "Property details and photos you send us, such as photos of a DB board or damage",
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
            If you arrive from an advertisement, the advertising platform may tell us which ad or campaign brought you
            to our website. We do not receive your identity from this.
          </p>
        </Section>

        <Section number={3} title="The website job card">
          <p>
            Our website job card does not store your answers on our website. When you finish it, the website prepares
            a WhatsApp message containing your details, and you choose whether to send it. Once you send it, WhatsApp
            handles the message under its own terms and privacy policy.
          </p>
        </Section>

        <Section number={4} title="How we use your information">
          <Bullets
            items={[
              "Responding to enquiries and preparing quotations",
              "Dispatching electricians, scheduling call-outs and carrying out installations and repairs",
              "Delivering, invoicing and following up on our services, including issuing certificates",
              "Keeping records for warranty, accounting and legal purposes",
              "Measuring how our website and advertising perform, and improving them",
              "Communicating with you about your job",
              "Protecting our rights and preventing fraud",
            ]}
          />
        </Section>

        <Section number={5} title="Lawful basis for processing">
          <p>We process personal information on these grounds under POPIA:</p>
          <Bullets
            items={[
              <>
                <Strong>Consent</Strong>, where you have given it for a specific purpose.
              </>,
              <>
                <Strong>Contract</Strong>, where processing is needed to deliver the service you asked for.
              </>,
              <>
                <Strong>Legal obligation</Strong>, where South African law requires us to keep or share information.
              </>,
              <>
                <Strong>Legitimate interests</Strong>, where processing is needed to run our business and does not
                override your rights.
              </>,
            ]}
          />
        </Section>

        <Section number={6} title="Who we share information with">
          <Bullets
            items={[
              "Electricians, subcontractors and specialists who help us complete your job",
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

        <Section number={7} title="Data security">
          <p>
            We take reasonable technical and organisational steps to protect personal information from loss, misuse
            and unauthorised access, including using reputable hosting with encrypted (HTTPS) connections, limiting who
            can see client information, and keeping records only where we need them.
          </p>
          <p className="text-sm italic">
            No method of transmission over the internet is completely secure, so we cannot guarantee absolute security.
          </p>
        </Section>

        <Section number={8} title="How long we keep information">
          <Bullets
            items={[
              "Client records: for the duration of our relationship plus 5 years",
              "Job records and documentation, including certificates: 5 years after completion",
              "Financial records: 5 years, as required by South African tax law",
              "Marketing communications: until you unsubscribe or withdraw consent",
            ]}
          />
          <p>After the retention period we securely delete or anonymise your information.</p>
        </Section>

        <Section number={9} title="Your rights under POPIA">
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
            To use any of these rights, contact us at <EmailLink /> or <PhoneLink />. We will respond within 30 days.
          </p>
        </Section>

        <Section number={10} title="Cookies, analytics and advertising">
          <p>
            Our website uses analytics and performance tools to understand how visitors use the site and how fast it
            loads. When we run Google Ads campaigns, we also use Google&apos;s conversion measurement to count calls,
            WhatsApp chats and email clicks that come from our ads. These tools may use cookies or similar
            technologies.
          </p>
          <p>
            You can control cookies through your browser settings. Turning them off may affect how parts of the
            website work.
          </p>
        </Section>

        <Section number={11} title="Third-party links">
          <p>
            Our website links to third-party services such as WhatsApp. We are not responsible for their privacy
            practices, so please review their policies before sharing personal information with them.
          </p>
        </Section>

        <Section number={12} title="Children">
          <p>
            Our services are not directed at anyone under 18 and we do not knowingly collect personal information from
            children. If you believe we have collected a child&apos;s information, please contact us and we will delete
            it.
          </p>
        </Section>

        <Section number={13} title="International data transfers">
          <p>
            We operate in South Africa, but some of our technology providers, such as website hosting, analytics and
            Google, may process information outside the country. We choose reputable providers and take reasonable
            steps to make sure your information stays protected in line with POPIA.
          </p>
        </Section>

        <Section number={14} title="Marketing communications">
          <p>
            We only send marketing messages with your consent. You can opt out at any time by telling us by phone,
            WhatsApp or email. You will still receive messages about your job, such as quotes and appointment details.
          </p>
        </Section>

        <Section number={15} title="Changes to this policy">
          <p>
            We may update this policy to reflect changes in our practices or the law. Updates are posted on this page
            with a revised date. Please check back from time to time.
          </p>
        </Section>

        <Section number={16} title="Contact and complaints">
          <SubHeading>16.1 Information Officer</SubHeading>
          <ul className="space-y-1">
            <li>Information Officer: Power Rescue Electrical Management</li>
            <li>
              Email: <EmailLink />
            </li>
            <li>
              Phone: <PhoneLink />
            </li>
          </ul>

          <SubHeading>16.2 Complaints process</SubHeading>
          <ol className="list-decimal space-y-2 pl-6">
            <li>Contact our Information Officer using the details above.</li>
            <li>We will acknowledge your complaint within 5 business days.</li>
            <li>We will investigate and respond within 30 days.</li>
            <li>If you are not satisfied, you may lodge a complaint with the Information Regulator.</li>
          </ol>

          <SubHeading>16.3 Information Regulator (South Africa)</SubHeading>
          <ul className="space-y-1">
            <li>Address: JD House, 27 Stiemens Street, Braamfontein, Johannesburg, 2001</li>
            <li>Phone: 010 023 5200</li>
            <li>
[O              Website:{" "}
              <a
                href="https://inforegulator.org.za"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary hover:underline"
              >
                inforegulator.org.za
              </a>
            </li>
          </ul>
        </Section>

        <Section number={17} title="Consent">
          <p>
            By using our website and services, you agree to this Privacy Policy. Where POPIA requires it, we will ask
            for your explicit consent for specific processing.
          </p>
          <p className="text-sm">Last updated and effective: {EFFECTIVE_DATE}</p>
        </Section>
      </LegalBody>

      <LegalClosing
        heading="Your privacy matters to us"
        copy="Questions about how we handle your information? Get in touch and we will answer them."
      />
    </>
  )
}
