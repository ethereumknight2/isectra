// app/faq/page.tsx - REDESIGNED
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Phone, Mail } from "lucide-react";
import FaqClient from "@/components/FaqClient";

export const metadata: Metadata = {
  title: "IT Services FAQ | iSectra — Pharma & SMB IT Experts",
  description:
    "Read the frequently asked questions about how iSectra delivers enterprise-grade IT for pharmaceutical companies and small businesses. Pricing, services, trials, onboarding and more.",
  alternates: { canonical: "https://isectra.com/faq" },
  openGraph: {
    title: "IT Services FAQ | iSectra — Pharma & SMB IT Experts",
    description:
      "Answers about pricing, onboarding, compliance, remote support, and switching to iSectra.",
    url: "https://isectra.com/faq",
    siteName: "iSectra",
    type: "website",
    images: [
      {
        url: "https://isectra.com/og/isectra-faq.jpg",
        width: 1200,
        height: 630,
        alt: "iSectra — Frequently Asked Questions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Services FAQ | iSectra — Pharma & SMB IT Experts",
    description:
      "Transparent answers to the most common questions about working with iSectra.",
    images: ["https://isectra.com/og/isectra-faq.jpg"],
  },
};

const FaqData = [
  {
    id: "pricing",
    q: "How Do You Price Your Services?",
    a: `We start with a free consultation to learn about your business. During this session, we use industry-standard frameworks to map your environment — including markets, customers, suppliers, employees, partners, competition, marketing channels, sales, R&D, manufacturing, operations, financials, and regulatory/compliance systems.

Once we have this map, we assess your current technology and compare it to best-practice models to build a tailored technology roadmap. Finally, we present you with a proposal based on a monthly retainer model, aligned with your business and budget.

We believe that building a long-term partnership is more valuable than short-term contracts — so if we are a good fit for each other, we work with your constraints to make it work.`,
  },
  {
    id: "difference",
    q: "Why Are You Different Than Typical MSPs?",
    a: `Many Managed Service Providers treat your business as a collection of "nodes" — devices, servers, endpoints — whose uptime they monitor. While uptime matters, we believe that technology has moved out of the server room into the board room.

At iSectra, our focus is on aligning technology with your business drivers — growth, compliance, productivity, cost management — not just device-health. We become your full IT department, not just your help desk.`,
  },
  {
    id: "partial-services",
    q: "What If We Don't Need All Your Services?",
    a: `While we believe every business will benefit from end-to-end IT and infrastructure management, we understand budget constraints and changing needs.

We therefore do not expect you to pay for services you don't use. After our discovery and roadmap process, we build a service agreement together that reflects your risk profile, cost of ownership, and expected return. You only pay for what you need.`,
  },
  {
    id: "onboarding",
    q: "How Do You Onboard Customers?",
    a: `Our onboarding process is structured, thorough, and designed to minimize disruption:

1) Discovery & Roadmap Creation — we analyze your environment, business goals, systems, risks, and build a technology roadmap.
2) Implementation Kick-Off — we begin with stabilizing your IT estate so it runs 24×7×365, then move into optimization and compliance.
3) Platform Transition — we bring your systems into our monitoring, support, and management platform — your virtual IT department is live.
4) Continuous Improvement — we monitor performance, adjust as you grow, review regularly, and keep aligning IT with business outcomes.`,
  },
  {
    id: "expensive",
    q: "Are You More Expensive Than My Current IT Vendor?",
    a: `No. When you compare the total cost of ownership — including contract costs, downtime, risk of non-compliance, lost productivity due to poor support — you'll find that we are always cheaper than many IT companies or MSPs with similar promises. We deliver senior-level engineers, enterprise-grade processes and monitoring, without the enterprise cost.`,
  },
  {
    id: "remote",
    q: "Can You Support Us Remotely?",
    a: `Yes. With over 15 years of experience and investment in remote-monitoring and support tools, we can deliver most services remotely — saving you time, money and resources.

If your scenario requires onsite support, we have engineering teams and logistics to serve your physical location as needed.`,
  },
  {
    id: "compliance",
    q: "Are You Compliant?",
    a: `Yes. We have decades of experience supporting clients in regulated industries including pharma, life sciences and manufacturing. We work with frameworks such as HIPAA, SOX, CMMC, NIST, and others. Our systems and processes are designed for compliance, audit readiness, security, and business continuity — so you don't have to worry.`,
  },
  {
    id: "trial",
    q: "Do You Offer a Free Trial of Your Services?",
    a: `Yes. We can offer one month of free services, with no obligation and no long-term contract required. We ask only that you sign an NDA agreeing not to disclose our internal processes to competitors.

To get started, just email info@isectra.com or fill out our Contact Us form and mention the free-trial offer.`,
  },
  {
    id: "termination",
    q: "Are There Termination Clauses in Your Contracts?",
    a: `Yes. All of our contracts include simple, fair termination clauses. We don't like locking up our customers with restrictive terms. If you're unsatisfied, we will work hard to make it right — and if we're still not the right fit, you can terminate.

Proudly, we have never lost a customer to a competitor.`,
  },
  {
    id: "switching",
    q: "How Hard Is It to Switch from My Current IT Company to Yours?",
    a: `It's easy. We perform a free assessment of your current IT environment, then transition your systems into our management platform. You will have a worry-free, full-service IT department at a fraction of the cost of an internal team.

And yes — you can try us free for one month.`,
  },
  {
    id: "how-much",
    q: "How Much Does It Cost?",
    a: `Cost depends on many factors — number of users, devices, cloud assets, complexity of systems and regulatory needs. As a rough estimate: a 10-employee business might pay around $2,000/month for full-service IT: monitoring devices 24×7×365, help desk, infrastructure management, cloud backup, patching, asset management and consulting.

We'll provide you a custom quote based on your business during the free consultation.`,
  },
  {
    id: "data-safety",
    q: "Is My Data Safe With You?",
    a: `Yes. We prioritize your data safety. Our preferred approach is backup of all devices and systems to the Microsoft Azure cloud. As Certified Microsoft Partners, we receive tier-one support from Microsoft.

If your business prefers not to use public cloud services, we also offer secure data-center hosting and colocation — already in use for many of our clients for over two decades.`,
  },
  {
    id: "other",
    q: "All Other Questions",
    a: `We're happy to answer any other question you have. Whether it's about licensing, compliance, datacenters, remote work, or vendor strategy — feel free to call, text, chat or fill out our Contact Us page.`,
  },
];

/* ------------------------------ JSON-LD SCHEMAS ---------------------------- */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FaqData.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a.replace(/\n/g, " "),
    },
  })),
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Frequently Asked Questions — iSectra",
  url: "https://isectra.com/faq",
  description:
    "Frequently asked questions about iSectra's industry-focused IT services for pharma and SMBs, including pricing, onboarding, compliance, and trials.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://isectra.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "FAQ",
        item: "https://isectra.com/faq",
      },
    ],
  },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "h2"],
  },
  inLanguage: "en",
  isPartOf: { "@type": "WebSite", url: "https://isectra.com/" },
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main>
        {/* HERO - Service Page Style with Image */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-blue-50 via-50% to-blue-200" />

          {/* Right side image with stronger blue overlay */}
          <div className="absolute top-0 right-0 bottom-0 left-1/2 lg:block hidden">
            <Image
              src="/images/faqs.jpeg"
              alt="iSectra support team - FAQ assistance"
              fill
              className="object-cover object-center"
              priority
            />

            {/* Stronger left gradient fade - more aggressive blend */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 via-35% via-white/40 via-50% to-transparent" />

            {/* Stronger blue tint overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 opacity-30 mix-blend-multiply" />

            {/* Additional color wash */}
            <div className="absolute inset-0 bg-blue-600/20" />

            {/* Top and bottom fades */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-100/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-100/40 to-transparent" />
          </div>

          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-40 right-0 w-[600px] h-[600px] bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" />
            <div className="absolute bottom-20 right-40 w-80 h-80 bg-gradient-to-r from-cyan-600 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float-delayed" />
          </div>

          <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
            <div
              className="absolute right-0 top-0 bottom-0 w-1/2"
              style={{
                backgroundImage: `
                  linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                  linear-gradient(180deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
                `,
                backgroundSize: "60px 60px",
              }}
            />
          </div>

          <div className="relative container mx-auto px-6">
            {/* Constrain content to left 45% to avoid image overlap */}
            <div className="max-w-2xl lg:max-w-[45%]">
              {/* Breadcrumb */}
              <nav className="flex mb-6 animate-fadeIn">
                <ol className="flex items-center space-x-2 text-sm text-slate-600">
                  <li>
                    <Link
                      href="/"
                      className="hover:text-blue-600 transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li>›</li>
                  <li className="text-blue-600 font-semibold">FAQ</li>
                </ol>
              </nav>

              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6 animate-fadeInUp">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-blue-600 tracking-wide uppercase">
                  Frequently Asked Questions
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 animate-fadeInUp animation-delay-200 leading-tight">
                Your Questions, Answered
              </h1>

              <p className="text-xl md:text-2xl text-slate-700 mb-8 leading-relaxed animate-fadeInUp animation-delay-400">
                At iSectra, we believe in transparency. Below are the most
                common questions we hear — and our clear, straightforward
                answers. If your question isn't listed, please reach out. We're
                always happy to talk.
              </p>

              {/* Highlight Grid */}
              <div className="grid md:grid-cols-2 gap-4 mb-10 animate-fadeInUp animation-delay-600">
                {[
                  "13 detailed answers",
                  "Transparent pricing info",
                  "Free trial available",
                  "No long-term contracts",
                ].map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 text-slate-800"
                  >
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 text-blue-600 mt-0.5" />
                    <span className="text-lg font-medium">{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 animate-fadeInUp animation-delay-800">
                <a
                  href="#faqs"
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  Browse Questions
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold text-lg hover:bg-slate-50 transition-all duration-300 border-2 border-slate-200 hover:border-slate-300 shadow-sm"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/60 to-transparent pointer-events-none" />
        </section>

        {/* FAQ CONTENT */}
        <div id="faqs">
          <FaqClient faqs={FaqData} />
        </div>

        {/* CTA + CONTACT SECTION - Matches Contact Page Style */}
        <section className="py-24 md:py-32 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-6 max-w-5xl">
            {/* CTA Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-blue-600 tracking-wide uppercase">
                  Still Have Questions?
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Let's Start a Conversation
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Book a free consultation or try us free for one month — no
                long-term contract required. Our senior engineers are ready to
                help.
              </p>

              {/* Quick Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+1-845-563-0346"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-lg rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Call (845) 563-0346
                </a>

                <a
                  href="mailto:info@isectra.com"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold text-lg rounded-xl hover:bg-slate-50 transition-all duration-300 border-2 border-slate-200 hover:border-slate-300 shadow-sm"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
              </div>

              <p className="text-sm text-slate-500 mt-6">
                Or visit our{" "}
                <Link
                  href="/contact"
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  contact page
                </Link>{" "}
                to send us a message
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { icon: CheckCircle2, label: "24-Hour Response" },
                { icon: CheckCircle2, label: "No Obligation" },
                { icon: CheckCircle2, label: "Free Consultation" },
                { icon: CheckCircle2, label: "One Month Free Trial" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-xl bg-white border-2 border-blue-100 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <span className="text-sm font-medium text-slate-700">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
