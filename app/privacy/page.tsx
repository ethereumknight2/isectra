// app/privacy/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | iSectra",
  description:
    "Privacy Policy describing what data iSectra collects via contact and newsletter forms, how it’s used, and your choices.",
  alternates: { canonical: "https://isectra.com/privacy" },
};

const COMPANY = {
  name: "iSectra",
  domain: "https://isectra.com",
  email: "info@isectra.com",
  phone: "+1-845-563-0346",
  regions: ["NY", "NJ", "MA", "CT", "PA", "MD", "VA", "FL"],
  country: "US",
};

function JsonLd() {
  const faq = {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What personal data does iSectra collect?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We collect information you submit on our forms (name, email, phone, company, message) and limited analytics data such as IP address, device, and pages viewed.",
        },
      },
      {
        "@type": "Question",
        name: "How is my data used?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We use your data to respond to inquiries, provide services, send the newsletter if you opted in, and to operate and improve our website. You may unsubscribe from marketing at any time.",
        },
      },
      {
        "@type": "Question",
        name: "Can I opt out of the newsletter?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Each email includes an unsubscribe link. You can also contact us at info@isectra.com to request removal.",
        },
      },
    ],
  };

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${COMPANY.domain}#website`,
        url: COMPANY.domain,
        name: "iSectra",
        publisher: { "@id": `${COMPANY.domain}#org` },
      },
      {
        "@type": "Organization",
        "@id": `${COMPANY.domain}#org`,
        name: COMPANY.name,
        url: COMPANY.domain,
        email: COMPANY.email,
        telephone: COMPANY.phone,
        // No physical street address since the building is being sold.
        // Use areaServed to reflect operating states and national coverage.
        areaServed: [
          "US-NY",
          "US-NJ",
          "US-MA",
          "US-CT",
          "US-PA",
          "US-MD",
          "US-VA",
          "US-FL",
          "US",
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "privacy",
            email: COMPANY.email,
            telephone: COMPANY.phone,
            areaServed: "US",
            availableLanguage: ["English"],
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: COMPANY.domain,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Privacy Policy",
            item: `${COMPANY.domain}/privacy`,
          },
        ],
      },
      {
        "@type": "PrivacyPolicy",
        "@id": `${COMPANY.domain}/privacy#policy`,
        name: "iSectra Privacy Policy",
        url: `${COMPANY.domain}/privacy`,
        publisher: { "@id": `${COMPANY.domain}#org` },
      },
      faq,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function PrivacyPage() {
  const effective = "November 6, 2025";

  return (
    <main className="relative pt-28 md:pt-36">
      <JsonLd />

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-50 via-white to-blue-50" />

      {/* Header */}
      <section className="relative border-b border-slate-200">
        <div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-sm font-semibold">
            Privacy Policy
          </div>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
            Privacy Policy
          </h1>
          <p className="mt-2 text-slate-600">Effective Date: {effective}</p>
          <p className="mt-4 text-slate-600 max-w-3xl">
            {COMPANY.name} (“we”, “us”) values your privacy. This policy
            explains what we collect, how we use it, and your choices when you
            interact with {COMPANY.domain}, submit our contact form, or
            subscribe to our newsletter.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-5xl px-6 py-10 md:py-14">
        <div className="rounded-3xl border border-slate-200 bg-white shadow-xl overflow-hidden">
          {/* TOC */}
          <div className="px-6 md:px-10 py-6 bg-gradient-to-r from-slate-50 to-cyan-50 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">Contents</h2>
            <ul className="mt-3 grid gap-2 text-sm text-slate-700 md:grid-cols-2">
              {[
                ["Information We Collect", "#collect"],
                ["How We Use Information", "#use"],
                ["Sharing & Disclosure", "#share"],
                ["Cookies & Tracking", "#cookies"],
                ["Marketing & Newsletter", "#marketing"],
                ["Data Retention", "#retention"],
                ["Your Rights", "#rights"],
                ["Security", "#security"],
                ["Children", "#children"],
                ["International Transfers", "#transfers"],
                ["Changes", "#changes"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a className="hover:text-cyan-700" href={href}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Content */}
          <div className="px-6 md:px-10 py-8 space-y-10 text-slate-700">
            <section id="collect">
              <h3 className="text-xl font-semibold text-slate-900">
                1) Information We Collect
              </h3>
              <p className="mt-3">
                <span className="font-medium">Provided by you:</span> when you
                submit the contact form or subscribe to the newsletter, we
                collect first/last name, email address, phone number, company
                name, and any message you include. Newsletter signup may use
                double opt-in.
              </p>
              <p className="mt-3">
                <span className="font-medium">Automatically collected:</span> IP
                address, device and browser type, pages viewed, referring URLs,
                and timestamps via standard logs and analytics.
              </p>
            </section>

            <section id="use">
              <h3 className="text-xl font-semibold text-slate-900">
                2) How We Use Information
              </h3>
              <ul className="mt-3 list-disc pl-6 space-y-2">
                <li>
                  Respond to your inquiries and provide requested services.
                </li>
                <li>
                  Send newsletters/updates if you opted in (unsubscribe
                  anytime).
                </li>
                <li>Operate, secure, and improve our website and offerings.</li>
                <li>
                  Comply with legal obligations and enforce our{" "}
                  <Link href="/terms" className="text-cyan-700 hover:underline">
                    Terms of Service
                  </Link>
                  .
                </li>
              </ul>
            </section>

            <section id="share">
              <h3 className="text-xl font-semibold text-slate-900">
                3) Sharing & Disclosure
              </h3>
              <p className="mt-3">
                We do not sell personal information. We may share data with
                service providers who help us operate the site and deliver
                communications (e.g., hosting, email delivery). These providers
                are bound by confidentiality and security obligations. We may
                disclose information when required by law or to protect our
                rights and users.
              </p>
            </section>

            <section id="cookies">
              <h3 className="text-xl font-semibold text-slate-900">
                4) Cookies & Tracking
              </h3>
              <p className="mt-3">
                We use cookies and similar technologies to remember preferences,
                measure traffic, and improve performance. You can adjust cookie
                settings in your browser. If you deploy a cookie banner/manager,
                your choices there will be honored.
              </p>
            </section>

            <section id="marketing">
              <h3 className="text-xl font-semibold text-slate-900">
                5) Marketing & Newsletter
              </h3>
              <p className="mt-3">
                If you subscribe, we will send occasional updates and offers. We
                may use double opt-in to confirm your email address. You can
                unsubscribe at any time using the link in any email or by
                contacting us at {COMPANY.email}. Unsubscribing from marketing
                does not affect operational messages.
              </p>
            </section>

            <section id="retention">
              <h3 className="text-xl font-semibold text-slate-900">
                6) Data Retention
              </h3>
              <p className="mt-3">
                We retain personal information only as long as necessary for the
                purposes outlined here, or as required by law. When no longer
                needed, we delete or anonymize it.
              </p>
            </section>

            <section id="rights">
              <h3 className="text-xl font-semibold text-slate-900">
                7) Your Rights
              </h3>
              <p className="mt-3">
                Depending on your location, you may have the right to request
                access, correction, deletion, or restriction of your personal
                information, and to withdraw consent for marketing at any time.
                To exercise these rights, contact us using the details below.
              </p>
            </section>

            <section id="security">
              <h3 className="text-xl font-semibold text-slate-900">
                8) Security
              </h3>
              <p className="mt-3">
                We use administrative, technical, and physical safeguards
                designed to protect your information. However, no method of
                transmission or storage is 100% secure.
              </p>
            </section>

            <section id="children">
              <h3 className="text-xl font-semibold text-slate-900">
                9) Children’s Privacy
              </h3>
              <p className="mt-3">
                Our website is not intended for children under 16. We do not
                knowingly collect data from children under 16. If you believe a
                child provided data, contact us and we will delete it.
              </p>
            </section>

            <section id="transfers">
              <h3 className="text-xl font-semibold text-slate-900">
                10) International Transfers
              </h3>
              <p className="mt-3">
                If you access the site from outside the United States, your
                information may be processed in the U.S. By using the site, you
                consent to such transfers subject to applicable law.
              </p>
            </section>

            <section id="changes">
              <h3 className="text-xl font-semibold text-slate-900">
                11) Changes to This Policy
              </h3>
              <p className="mt-3">
                We may update this Policy from time to time. Changes are
                effective when posted with an updated Effective Date. Your
                continued use indicates acceptance.
              </p>
            </section>

            <section id="contact">
              <h3 className="text-xl font-semibold text-slate-900">
                12) Contact
              </h3>
              <address className="mt-3 not-italic text-slate-700">
                {COMPANY.name}
                <br />
                Operating in: {COMPANY.regions.join(", ")}
                <br />
                Serving customers across all 50 U.S. states.
                <br />
                <a
                  className="text-cyan-700 hover:underline"
                  href={`mailto:${COMPANY.email}`}
                >
                  {COMPANY.email}
                </a>{" "}
                · {COMPANY.phone}
              </address>
            </section>
          </div>
        </div>

        <p className="mt-6 text-sm text-slate-500">Last updated: {effective}</p>
      </section>
    </main>
  );
}
