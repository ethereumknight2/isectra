import type { Metadata } from "next";
import ServiceHero from "@/components/services/servicehero";
import ServiceFeatures from "@/components/services/servicefeatures";
import ServiceFAQ from "@/components/services/servicefaq";
import ContactForm from "@/components/sections/ContactForm";
import ServiceCTA from "@/components/services/servicecta";
import HelpDeskValue from "@/components/services/Helpdeskvalue";

const title = "Help Desk & End-User Support | iSectra";
const description =
  "Real people. Real results. Real fast. 24×7 IT help desk with phone, email, chat, and remote support, prioritized SLAs, onsite coverage, and full device lifecycle management for small businesses.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "24×7 IT help desk",
    "remote IT support for small business",
    "managed IT support services",
    "end-user IT assistance",
    "IT ticketing portal",
    "device lifecycle management",
    "business-critical IT support",
  ],
  openGraph: {
    title,
    description,
    type: "website",
    url: "https://isectra.com/services/help-desk-end-user-support",
    images: [
      {
        url: "https://isectra.com/hs-fs/hubfs/iSectraDatacenter%20(1).jpg",
        width: 1200,
        height: 630,
        alt: "Help Desk & End-User Support",
      },
    ],
  },
  alternates: {
    canonical: "https://isectra.com/services/help-desk-end-user-support",
  },
};

export default function HelpDeskEndUserSupportPage() {
  // HERO
  const heroHighlights: string[] = [
    "Phone, email, chat, and remote desktop included",
    "Priority handling for business-critical issues",
    "<10 minute average first response",
    "Onsite coverage available across the USA",
  ];

  // FEATURES — keep as a mutable array and icon names your set already supports
  const features = [
    {
      iconName: "headphones",
      title: "Multi-Channel Support",
      description:
        "Phone, email, chat, and secure remote assistance—covered under your monthly retainer so users get help the way they prefer.",
    },
    {
      iconName: "settings",
      title: "SLA-Driven Triage",
      description:
        "Prioritization based on impact and urgency. Critical incidents jump the line with clear severity levels and escalation paths.",
    },
    {
      iconName: "server",
      title: "Onsite When It Matters",
      description:
        "Field engineers available nationwide for desk setups, network issues, and hands-on fixes that can’t be done remotely.",
    },
    {
      iconName: "database",
      title: "Device Lifecycle Management",
      description:
        "Provisioning, patching, warranty tracking, replacements, and secure retirement—fully documented with audit trails.",
    },
    {
      iconName: "shield",
      title: "Secure by Default",
      description:
        "MFA enforcement, least-privilege access, endpoint protection checks, and change control integrated into the support flow.",
    },
    {
      iconName: "trending-up",
      title: "Visibility & Reporting",
      description:
        "Self-service portal, ticket status, CSAT, MTTR, top issue categories, and trend reports to guide continuous improvement.",
    },
  ];

  // FAQS — mutable array
  const faqs = [
    {
      question: "What are your support hours and response targets?",
      answer:
        "We operate 24×7 for critical incidents with an average first response under 10 minutes during business hours. Non-critical requests follow published SLAs with rapid acknowledgement and regular updates.",
    },
    {
      question: "Is onsite help available or is it all remote?",
      answer:
        "Remote solves most issues fast, but we also dispatch onsite engineers across the USA for hardware installs, office setups, and issues that require hands-on work.",
    },
    {
      question: "How do users submit and track tickets?",
      answer:
        "Users can call, email, chat, or use the portal. Every ticket is tracked in the portal with status, timestamps, assigned engineer, and resolution notes for complete transparency.",
    },
    {
      question: "Do you support Mac, Windows, and mobile devices?",
      answer:
        "Yes. We support Windows and macOS endpoints, iOS and Android devices, and common business apps including Microsoft 365, collaboration suites, and VPN/remote access tools.",
    },
    {
      question: "Can you take over patching and routine maintenance?",
      answer:
        "Absolutely. We maintain OS and application patches, verify endpoint protection, and schedule maintenance windows to reduce disruption while keeping systems secure.",
    },
  ];

  // JSON-LD
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Help Desk & End-User Support",
    url: "https://isectra.com/services/help-desk-end-user-support",
    description:
      "24×7 IT help desk for small businesses with phone, email, chat, remote support, onsite coverage, device lifecycle management, and transparent reporting.",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Services",
          item: "https://isectra.com/services",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Help Desk & End-User Support",
          item: "https://isectra.com/services/help-desk-end-user-support",
        },
      ],
    },
  };

  const jsonLdItemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "Service",
        name: "24×7 IT Help Desk",
        description:
          "Real-time support via phone, email, chat, and remote desktop with SLA-driven response.",
        provider: { "@type": "Organization", name: "iSectra" },
        serviceType: "Managed IT Support",
      },
      {
        "@type": "Service",
        name: "Remote IT Support for Small Business",
        description:
          "Fast diagnosis and resolution for end-user issues, apps, and connectivity problems.",
        provider: { "@type": "Organization", name: "iSectra" },
        serviceType: "End-User Support",
      },
      {
        "@type": "Service",
        name: "Onsite IT Assistance",
        description:
          "Nationwide onsite support for installs, office moves, and hardware repairs.",
        provider: { "@type": "Organization", name: "iSectra" },
        serviceType: "Field Services",
      },
      {
        "@type": "Service",
        name: "Device Lifecycle Management",
        description:
          "Provisioning, patching, warranty tracking, and secure decommissioning.",
        provider: { "@type": "Organization", name: "iSectra" },
        serviceType: "Device Management",
      },
    ],
  };

  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      {/* Page-level JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdItemList) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />

      {/* HERO */}
      <ServiceHero
        title="Help Desk & End-User Support"
        description="Nothing kills productivity like slow IT support. For lean teams, every minute counts—so our help desk is engineered for speed, clarity, and reliability."
        highlights={heroHighlights}
        gradientFrom="from-blue-600"
        gradientTo="to-cyan-500"
        iconName="headphones"
        imagePath="/images/support-desk.jpeg"
        ctaPrimary="Get Started"
        ctaSecondary="See SLAs & Pricing"
        compact
      />

      {/* FEATURES */}
      <ServiceFeatures
        title="What’s Included"
        subtitle="Real people. Real results. Real fast."
        features={features}
        columns={3}
        gradientFrom="from-blue-600"
        gradientTo="to-cyan-500"
      />

      {/* VALUE COPY FOR SEO */}

      <HelpDeskValue />

      {/* FAQ */}
      <ServiceFAQ
        title="Help Desk FAQs"
        subtitle="How we keep users productive and protected"
        faqs={faqs}
        showViewAll={true}
        gradientFrom="from-blue-600"
        gradientTo="to-cyan-500"
      />

      {/* CONTACT */}
      <ServiceCTA
        title="Ready to Give Your Team Faster IT Support?"
        description="Get a free support assessment and see how <10 minute response times can transform your productivity."
      />
    </>
  );
}
