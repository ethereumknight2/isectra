// app/(site)/industries/page.tsx
import Link from "next/link";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Script from "next/script";
import {
  ArrowRight,
  CheckCircle2,
  FlaskConical,
  Building2,
  Quote,
  LineChart,
  Shield,
  Server,
} from "lucide-react";
import ServiceHero from "@/components/services/servicehero";
import ServiceCTA from "@/components/services/servicecta";

const Testimonials = dynamic(
  () => import("@/components/sections/Testimonials"),
  { ssr: true }
);
const ContactForm = dynamic(() => import("@/components/sections/ContactForm"), {
  ssr: true,
});

export const metadata: Metadata = {
  title: "Industries Served | Pharma & Small Business IT Services | iSectra",
  description:
    "iSectra delivers industry-specific IT solutions for pharmaceutical companies and small/mid-size businesses in the USA. Explore how we support pharma growth, SMB technology transformation and deliver measurable results.",
  alternates: { canonical: "https://isectra.com/industries" },
};

const pageUrl = "https://isectra.com/industries";
const siteName = "iSectra";
const logoUrl = "https://isectra.com/logo.png"; // update if different
const heroImage = "https://isectra.com/images/industries.jpeg"; // public/images/industries.jpeg

const industries = [
  {
    key: "pharma",
    title: "Pharmaceutical & Life Sciences",
    icon: FlaskConical,
    intro:
      "For over 20 years, iSectra has partnered with pharmaceutical and life sciences companies across their entire lifecycle — from lab startup to commercialization to public company. We know the demands of regulated environments: clinical data, GMP systems, FDA audits, intellectual property, research operations. Our technology solutions are built with those needs in mind.",
    challenges: [
      "Rapid scaling of operations, teams and systems while maintaining data integrity and uptime",
      "Navigating complex regulatory frameworks (FDA, HIPAA, GxP) and audit readiness",
      "Integrating laboratory systems, analytics, reporting, and quality systems into a secure infrastructure",
      "Managing cost efficiency without sacrificing reliability or compliance",
    ],
    helps: [
      "We design and deploy comprehensive IT infrastructure that supports R&D, quality, manufacturing and commercial stages.",
      "We ensure your systems are audit-ready, compliant and secure — without the usual complexity or hidden costs.",
      "We operate as your full IT department, providing 24×7 monitoring, support, and architecture that aligns with your growth roadmap.",
      "We bring decades of experience, so you don't have to reinvent technology around your business — we tailor it for you.",
    ],
    results: [
      "A biotech startup engaged us at seed stage; over 5 years we scaled their IT operations, supported them through FDA audits and their IPO — zero downtime and zero audit findings.",
      "Another client reduced their IT cost by ~35% while upgrading their systems to commercial standards and maintaining 99.99% uptime.",
      "Pharmaceutical firms using our services report improved productivity, faster time-to-market for launches, and fewer vendor surprises.",
    ],
    anchor: "pharmaceutical-life-sciences",
  },
  {
    key: "smb",
    title: "Small & Mid-Size Businesses (15–50 Employees)",
    icon: Building2,
    intro:
      "If you're a business with 15 to 50 employees, you may feel technology is a burden: budget constraints, no full IT team, risk of downtime, vendor confusion. At iSectra, we turn that around: you get a full-scale IT department, predictable cost, expert support, no upsells.",
    challenges: [
      "Limited budget for IT, yet high expectations for performance and security",
      "No internal IT team means difficulty planning, reacting, or supporting operations 24×7",
      "Vendor lock-ins, hidden fees, complex licensing models",
      "Need for business alignment — technology that supports growth, rather than hinders it",
    ],
    helps: [
      "We become your Virtual IT Department, delivering help desk, infrastructure, cloud, security, and strategy under one monthly retainer.",
      "We monitor and support your systems 24×7×365, with senior engineers on call — so your team stays productive.",
      "We don't upsell vendor systems or push products you don't need. We build your agreement after jointly identifying risk, cost of ownership, and expected value.",
      "We onboard quickly, migrate your systems if needed, and let you test our service for one month free (no obligation).",
    ],
    results: [
      "A 40-employee logistics firm switched to iSectra: IT costs dropped ~35%, help-desk tickets decreased 60%, average response time under 10 minutes.",
      "A 15-employee professional services firm gained enterprise-grade IT infrastructure and M365 migration in one weekend with near-zero downtime.",
      "Business owners now proactively plan technology for growth rather than react to problems, freeing up their teams to focus on strategy, not support.",
    ],
    anchor: "smb-15-50-employees",
  },
];

const caseStudies = [
  {
    slug: "pharma-startup-ipo",
    eyebrow: "CASE STUDY 1",
    title: "Pharma Startup → IPO",
    client: "Biotech company (seed stage → public company)",
    stats: [
      { label: "Uptime", value: "99.99%" },
      { label: "Audit Findings", value: "0" },
      { label: "Scale", value: "5 → 250+ users" },
    ],
    challenge:
      "Build a full IT infrastructure that supports R&D data, quality systems, regulatory audits; scale from 5 users to 250+; maintain uptime and compliance.",
    solution: [
      "Designed IT architecture supporting lab & commercial operations",
      "Deployed secure cloud + on-prem mix",
      "Implemented monitoring, help-desk, asset management, license oversight",
    ],
    outcome: [
      "Zero audit findings across FDA/GxP checkpoints",
      "99.99% uptime through growth and IPO",
      "Seamless scale with minimal disruption",
    ],
    bannerFrom: "from-blue-600",
    bannerTo: "to-cyan-500",
    icon: Shield,
    quote:
      "iSectra quickly understood the needs of our business and was able to design an IT platform that completely supported our business needs.",
    attribution: "Nick DiMaio, President & CEO, Dash Pharmaceuticals",
  },
  {
    slug: "smb-logistics",
    eyebrow: "CASE STUDY 2",
    title: "SMB Logistics Company",
    client: "40-employee logistics firm, U.S. national.",
    stats: [
      { label: "Cost Savings", value: "≈35%" },
      { label: "Tickets Down", value: "≈60%" },
      { label: "Avg. Response", value: "<10 min" },
    ],
    challenge:
      "No internal IT team, high downtime, reactive support, costly vendor contracts.",
    solution: [
      "Virtual IT department model; full monitoring; help-desk 24×7",
      "Standardized hardware, software & optimized cloud licensing",
      "Strategic roadmap aligned with business",
    ],
    outcome: [
      "Significant reduction in spend vs in-house",
      "Fewer disruptions and higher productivity",
      "Measured SLA response improvements",
    ],
    // ⬇️ Replaced slate banner with a more energetic emerald→lime gradient
    bannerFrom: "from-emerald-600",
    bannerTo: "to-lime-500",
    icon: LineChart,
    quote:
      "iSectra provided us with outstanding IT management with excellent business acumen. They understand the need for 'real world' solutions to business problems. iSectra is resourceful and their engineers know how to find answers to problem in the business process and makes good use of resources to offer solutions that work for your business.",
    attribution: "Jan Becev, Project Manager, Medicem",
  },
  {
    slug: "office-move",
    eyebrow: "CASE STUDY 3",
    title: "Critical Office Move",
    client: "Mid-sized pharmaceutical company moving headquarters.",
    stats: [
      { label: "Downtime", value: "0 days" },
      { label: "Budget", value: "On target" },
      { label: "Stability", value: "Day 1" },
    ],
    challenge:
      "Tight deadline, vendor chaos, mission-critical systems, risk of extended downtime.",
    solution: [
      "End-to-end project mgmt: server room, cabling, cloud, access control",
      "Cutover runbook + live war-room with continuous monitoring",
    ],
    outcome: [
      "Move completed within budget",
      "No work-day lost",
      "Full operational stability from hour zero",
    ],
    bannerFrom: "from-blue-600",
    bannerTo: "to-cyan-500",
    icon: Server,
    quote:
      "We could not be happier with iSectra. They always come through in critical situations with a professional and positive attitude. Their knowledge and ability has far exceeded our expectations!",
    attribution: "Lindsey Rey, Administration, Eagle Pharmaceuticals",
  },
];

// ---------- JSON-LD for AEO ----------
const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["WebPage", "CollectionPage"],
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Industries Served | Pharma & Small Business IT Services | iSectra",
      headline:
        "Industry-Focused IT That Delivers Results — From Pharma to Growing Businesses",
      description:
        "iSectra delivers industry-specific IT solutions for pharmaceutical companies and small/mid-size businesses in the USA. Explore how we support pharma growth, SMB technology transformation and deliver measurable results.",
      isPartOf: { "@id": "https://isectra.com/#website" },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: heroImage,
      },
      about: [
        { "@type": "Thing", name: "Pharmaceutical IT" },
        { "@type": "Thing", name: "GxP Compliance" },
        { "@type": "Thing", name: "SMB IT Services" },
        { "@type": "Thing", name: "Managed IT" },
        { "@type": "Thing", name: "Help Desk Support" },
        { "@type": "Thing", name: "Cloud & On-Prem Hybrid" },
      ],
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      publisher: { "@id": "https://isectra.com/#organization" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
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
          name: "Industries",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": "https://isectra.com/#organization",
      name: "iSectra",
      url: "https://isectra.com/",
      logo: {
        "@type": "ImageObject",
        url: logoUrl,
      },
      image: heroImage,
      areaServed: { "@type": "Country", name: "United States" },
      sameAs: ["https://www.linkedin.com/company/isectra"],
      makesOffer: {
        "@type": "Offer",
        url: pageUrl,
        category: "IT Services",
        areaServed: "United States",
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@type": "Service",
      name: "Pharmaceutical & Life Sciences IT",
      serviceType: "Managed IT & Compliance",
      areaServed: "United States",
      provider: { "@id": "https://isectra.com/#organization" },
      url: `${pageUrl}#pharmaceutical-life-sciences`,
      audience: { "@type": "BusinessAudience", name: "Pharma & Biotech" },
      termsOfService: "https://isectra.com/terms",
    },
    {
      "@type": "Service",
      name: "SMB Managed IT (15–50 Employees)",
      serviceType: "Managed IT & Cloud",
      areaServed: "United States",
      provider: { "@id": "https://isectra.com/#organization" },
      url: `${pageUrl}#smb-15-50-employees`,
      audience: { "@type": "BusinessAudience", name: "SMBs" },
      termsOfService: "https://isectra.com/terms",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Do you support FDA, HIPAA and GxP compliance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We design and operate audit-ready environments for FDA, HIPAA and GxP, including documentation, monitoring, access controls and validation practices.",
          },
        },
        {
          "@type": "Question",
          name: "Can you act as our full IT department?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. iSectra provides a Virtual IT Department model covering help desk, infrastructure, cloud, security and strategy under a predictable monthly retainer.",
          },
        },
        {
          "@type": "Question",
          name: "How fast is onboarding?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most SMBs onboard within days and complex pharma environments in phases; we provide a detailed runbook to minimize downtime and risk.",
          },
        },
      ],
    },
  ],
};

export default function IndustriesPage() {
  return (
    <>
      {/* AEO JSON-LD */}
      <Script
        id="schema-industries"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      <main>
        {/* HERO */}
        <ServiceHero
          title="Industry-Focused IT That Delivers Results — From Pharma to Growing Businesses"
          description="Whether you’re a pharmaceutical company scaling toward IPO or a growth-stage business with 15–50 employees, iSectra provides the technology backbone you need — aligned with your industry, your goals, and your budget."
          highlights={[
            "FDA/GxP/HIPAA audit-ready architecture",
            "24×7 monitoring & help desk with SLAs",
            "Cloud + on-prem hybrid done right",
            "Fast onboarding • Free month trial",
          ]}
          ctaPrimary="Book a Free Consultation"
          ctaSecondary=""
          gradientFrom="from-blue-600"
          gradientTo="to-cyan-500"
          iconName="server"
          imagePath="/images/industries.jpeg"
          trustBadge="Trusted by pharmaceutical & SMB clients nationwide"
          compact
        />

        {/* INDUSTRY SECTIONS (titles + intros centered) */}
        {industries.map((ind, idx) => {
          const Icon = ind.icon as any;
          return (
            <section
              key={ind.key}
              id={ind.anchor}
              className={`py-20 md:py-28 ${
                idx % 2 === 0 ? "bg-white" : "bg-slate-50"
              }`}
            >
              <div className="container mx-auto px-6 max-w-7xl">
                {/* Header (CENTERED) */}
                <div className="max-w-4xl mx-auto mb-12 text-center">
                  <div className="mx-auto mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                    {ind.title}
                  </h2>
                  <p className="mt-4 text-xl text-slate-700 leading-relaxed">
                    {ind.intro}
                  </p>
                </div>

                {/* Three Column Grid */}
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Challenges */}
                  <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold text-lg">
                        !
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">
                        Challenges
                      </h3>
                    </div>
                    <ul className="space-y-4">
                      {ind.challenges.map((c, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 bg-red-600 rounded-full" />
                          </div>
                          <span className="text-slate-700 leading-relaxed">
                            {c}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* How We Help */}
                  <div className="bg-white rounded-2xl border-2 border-blue-200 p-8 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg">
                        ✓
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">
                        How We Help
                      </h3>
                    </div>
                    <ul className="space-y-4">
                      {ind.helps.map((h, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700 leading-relaxed">
                            {h}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Real Results */}
                  <div className="bg-white rounded-2xl border-2 border-cyan-200 p-8 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-600 flex items-center justify-center font-bold text-lg">
                        ★
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">
                        Real Results
                      </h3>
                    </div>
                    <ul className="space-y-4">
                      {ind.results.map((r, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700 leading-relaxed">
                            {r}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* CASE STUDIES */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-blue-600 tracking-wide uppercase">
                  Success Stories
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Case Studies
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Real companies. Real challenges. Real results.
              </p>
            </div>

            <div className="space-y-8">
              {caseStudies.map((cs, idx) => {
                const Icon = cs.icon as any;
                return (
                  <article
                    key={idx}
                    id={cs.slug}
                    className="overflow-hidden rounded-3xl border-2 border-slate-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
                  >
                    {/* Banner */}
                    <div
                      className={`relative px-6 py-10 sm:px-10 bg-gradient-to-r ${cs.bannerFrom} ${cs.bannerTo}`}
                    >
                      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center">
                            <Icon className="w-9 h-9 text-white" />
                          </div>
                          <div>
                            <p className="text-white/80 text-xs uppercase tracking-wider font-semibold">
                              {cs.eyebrow}
                            </p>
                            <h3 className="text-white text-3xl font-bold leading-tight">
                              {cs.title}
                            </h3>
                            <p className="text-white/90 text-sm mt-1">
                              {cs.client}
                            </p>
                          </div>
                        </div>

                        {/* Stat chips */}
                        <div className="flex flex-wrap gap-3">
                          {cs.stats.map((s, i) => (
                            <div
                              key={i}
                              className="px-4 py-2 rounded-full bg-white/15 text-white text-sm font-semibold backdrop-blur"
                            >
                              {s.label}:{" "}
                              <span className="font-bold">{s.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="px-6 py-8 sm:px-10">
                      <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                          <h4 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center text-sm font-bold">
                              !
                            </span>
                            Challenge
                          </h4>
                          <p className="text-slate-700 leading-relaxed">
                            {cs.challenge}
                          </p>
                        </div>

                        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                          <h4 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold">
                              ✓
                            </span>
                            Solution
                          </h4>
                          <ul className="space-y-3">
                            {cs.solution.map((s, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                <span className="text-slate-700 text-sm">
                                  {s}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                          <h4 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-lg bg-cyan-100 text-cyan-600 flex items-center justify-center text-sm font-bold">
                              ★
                            </span>
                            Outcome
                          </h4>
                          <ul className="space-y-3">
                            {cs.outcome.map((o, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                                <span className="text-slate-700 text-sm">
                                  {o}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Quote */}
                      <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50/50 p-6">
                        <div className="flex items-start gap-3">
                          <Quote className="w-7 h-7 text-blue-600 mt-1 flex-shrink-0" />
                          <div>
                            <p className="italic text-slate-800 text-lg leading-relaxed">
                              “{cs.quote}”
                            </p>
                            <p className="mt-3 text-sm text-slate-600 font-semibold">
                              — {cs.attribution}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <Link
                href="/contact-us"
                className="group inline-flex items-center justify-center gap-2 px-12 py-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-lg rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
              >
                Book a Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <p className="text-slate-600 mt-4 text-sm">
                Let's build your roadmap together — and turn technology into an
                asset for your business.
              </p>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <Testimonials />

        {/* CONTACT (static, equal-height columns) */}
        <ServiceCTA
          title="Ready to Build Your Industry-Aligned IT Backbone?"
          description="Whether you’re a pharmaceutical company scaling toward IPO or a growth-stage business with 15–50 employees, our all-inclusive model delivers 24×7 support, audit-ready architecture, and predictable pricing — aligned to your industry, your goals, and your budget."
        />
      </main>
    </>
  );
}
