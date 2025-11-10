// app/terms/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Terms of Service | iSectra",
  description:
    "Terms of Service for iSectra’s website, services, and newsletter.",
  alternates: { canonical: "https://isectra.com/terms" },
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
        // No physical street address. Reflect footprint via areaServed.
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
            contactType: "customer support",
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
            name: "Terms of Service",
            item: `${COMPANY.domain}/terms`,
          },
        ],
      },
      {
        "@type": "TermsOfService",
        "@id": `${COMPANY.domain}/terms#tos`,
        name: "iSectra Terms of Service",
        url: `${COMPANY.domain}/terms`,
        publisher: { "@id": `${COMPANY.domain}#org` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function TermsPage() {
  const effective = "November 6, 2025";

  return (
    <main className="relative pt-28 md:pt-36">
      <JsonLd />

      {/* Subtle background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-cyan-50" />

      {/* Header */}
      <section className="relative border-b border-slate-200">
        <div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
            Terms of Service
          </div>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
            Terms of Service
          </h1>
          <p className="mt-2 text-slate-600">Effective Date: {effective}</p>
          <p className="mt-4 text-slate-600 max-w-3xl">
            These Terms govern your use of {COMPANY.name}’s website (
            {COMPANY.domain}) and related services, including IT consulting and
            support, managed services, hosting, and our email newsletter. By
            using the site or submitting information through our forms, you
            agree to these Terms.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-5xl px-6 py-10 md:py-14">
        <div className="rounded-3xl border border-slate-200 bg-white shadow-xl overflow-hidden">
          {/* TOC */}
          <div className="px-6 md:px-10 py-6 bg-gradient-to-r from-slate-50 to-blue-50 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">Contents</h2>
            <ul className="mt-3 grid gap-2 text-sm text-slate-700 md:grid-cols-2">
              {[
                ["Services", "#services"],
                ["Acceptable Use", "#acceptable-use"],
                ["Contact & Newsletter", "#submissions"],
                ["Intellectual Property", "#ip"],
                ["Disclaimers & Liability", "#disclaimers"],
                ["Indemnification", "#indemnification"],
                ["Governing Law & Disputes", "#law"],
                ["Changes to Terms", "#changes"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a className="hover:text-blue-700" href={href}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Content */}
          <div className="px-6 md:px-10 py-8 space-y-10 text-slate-700">
            <section id="services">
              <h3 className="text-xl font-semibold text-slate-900">
                1) Services
              </h3>
              <p className="mt-3">
                We provide information technology services including—IT strategy
                and consulting, help desk and end-user support, device lifecycle
                management, network and endpoint monitoring, cloud/on-prem
                hosting, website & domain services, security hardening and
                compliance support (e.g., HIPAA/NIST/CMMC/SOX), and vendor
                procurement/management. We may add, modify, or discontinue
                features at any time.
              </p>
            </section>

            <section id="acceptable-use">
              <h3 className="text-xl font-semibold text-slate-900">
                2) Acceptable Use
              </h3>
              <ul className="mt-3 list-disc pl-6 space-y-2">
                <li>
                  Do not use the site for unlawful, harmful, or abusive
                  activities.
                </li>
                <li>
                  No attempts to disrupt, reverse engineer, or gain unauthorized
                  access.
                </li>
                <li>
                  You must be 18+ and provide accurate information when
                  requested.
                </li>
              </ul>
            </section>

            <section id="submissions">
              <h3 className="text-xl font-semibold text-slate-900">
                3) Contact & Newsletter
              </h3>
              <p className="mt-3">
                When you submit the contact form or sign up for the newsletter,
                we collect first/last name, email, phone, company, and any
                message you include. By submitting, you authorize us to contact
                you regarding your inquiry and to send marketing communications
                if you opted in. Newsletter signups may use double opt-in; you
                can unsubscribe at any time. See our{" "}
                <Link href="/privacy" className="text-blue-700 hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </section>

            <section id="ip">
              <h3 className="text-xl font-semibold text-slate-900">
                4) Intellectual Property
              </h3>
              <p className="mt-3">
                All site content is owned by {COMPANY.name} or its licensors and
                protected by applicable IP laws. You may not copy, distribute,
                modify, or create derivative works without our prior written
                consent.
              </p>
            </section>

            <section id="disclaimers">
              <h3 className="text-xl font-semibold text-slate-900">
                5) Disclaimers & Limitation of Liability
              </h3>
              <p className="mt-3">
                THE SITE AND SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE”
                WITHOUT WARRANTIES OF ANY KIND. TO THE MAXIMUM EXTENT PERMITTED
                BY LAW, WE DISCLAIM ALL WARRANTIES, AND WE ARE NOT LIABLE FOR
                ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR
                PUNITIVE DAMAGES, OR LOST PROFITS/REVENUE, ARISING FROM YOUR USE
                OF THE SITE OR SERVICES.
              </p>
            </section>

            <section id="indemnification">
              <h3 className="text-xl font-semibold text-slate-900">
                6) Indemnification
              </h3>
              <p className="mt-3">
                You agree to defend, indemnify, and hold harmless {COMPANY.name}
                and its affiliates from any claims, damages, costs, and expenses
                arising from your use of the site or violation of these Terms.
              </p>
            </section>

            <section id="law">
              <h3 className="text-xl font-semibold text-slate-900">
                7) Governing Law & Disputes
              </h3>
              <p className="mt-3">
                These Terms are governed by the laws of Florida. You agree to
                exclusive jurisdiction of the state and federal courts located
                in Jacksonville, FL.
              </p>
            </section>

            <section id="changes">
              <h3 className="text-xl font-semibold text-slate-900">
                8) Changes to Terms
              </h3>
              <p className="mt-3">
                We may update these Terms from time to time. Updates are
                effective when posted with an updated Effective Date. Your
                continued use constitutes acceptance.
              </p>
            </section>

            <section id="contact">
              <h3 className="text-xl font-semibold text-slate-900">
                9) Contact
              </h3>
              <address className="mt-3 not-italic text-slate-700">
                {COMPANY.name}
                <br />
                Operating in: {COMPANY.regions.join(", ")}
                <br />
                Serving customers across all 50 U.S. states.
                <br />
                <a
                  className="text-blue-700 hover:underline"
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
