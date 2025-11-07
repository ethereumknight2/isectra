// app/services/cloud-microsoft-365-migrations/page.tsx
import type { Metadata } from "next";
import ServiceHero from "@/components/services/servicehero";
import ServiceFeatures from "@/components/services/servicefeatures";
import ServiceFAQ from "@/components/services/servicefaq";
import ServiceCTA from "@/components/services/servicecta";

const title = "Cloud & Microsoft 365 Migrations | iSectra";
const description =
  "Modernize securely and scale for growth. Seamless Microsoft 365 and Azure migrations with zero disruption, license optimization, and ongoing management.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Microsoft 365 migration",
    "cloud migration services",
    "Azure migration for SMEs",
    "business cloud IT solutions",
  ],
  openGraph: {
    title,
    description,
    type: "website",
    url: "https://isectra.com/services/cloud-microsoft-365-migrations",
    images: [
      {
        url: "https://isectra.com/hs-fs/hubfs/iSectraDatacenter%20(1).jpg",
        width: 1200,
        height: 630,
        alt: "Cloud & Microsoft 365 Migrations",
      },
    ],
  },
  alternates: {
    canonical: "https://isectra.com/services/cloud-microsoft-365-migrations",
  },
};

export default function CloudMicrosoft365MigrationsPage() {
  // HERO highlights (safe, non-undefined array)
  const heroHighlights: string[] = [
    "Zero-downtime cutovers and user training",
    "SharePoint/Teams/OneDrive architecture done right",
    "Security-first approach with Entra ID governance",
    "License usage tracked to remove waste",
  ];

  // FEATURES — mutable array (no `as const`)
  const features = [
    {
      iconName: "cloud",
      title: "Microsoft 365 Deployment",
      description:
        "Deployment and admin of Teams, SharePoint, OneDrive, and Entra ID (Azure AD). Governance, naming, and retention policies included.",
    },
    {
      iconName: "server",
      title: "Azure Architectures",
      description:
        "Hybrid or full Azure (IaaS/PaaS) designs built for scalability, redundancy, security baselines, and compliance.",
    },
    {
      iconName: "file-text",
      title: "Zero-Disruption Migrations",
      description:
        "Pre-flight assessments, migration runbooks, staged pilot groups, and phased cutovers to avoid business interruption.",
    },
    {
      iconName: "bar-chart",
      title: "License Optimization",
      description:
        "We right-size SKUs, remove idle accounts, and automate reviews so you only pay for what’s used.",
    },
    {
      iconName: "shield",
      title: "Security & Compliance",
      description:
        "Baseline hardening, MFA/conditional access, DLP, and data residency controls aligned to regulatory needs.",
    },
    {
      iconName: "headphones",
      title: "Adoption & Support",
      description:
        "User enablement sessions, quick-reference guides, and responsive support to drive high satisfaction.",
    },
  ];

  // FAQS — safe array
  const faqs = [
    {
      question: "How do you ensure there’s no downtime?",
      answer:
        "We use staged migrations, pilot users, and scheduled cutovers (often off-hours). Users are pre-communicated, trained, and redirected seamlessly during the switch.",
    },
    {
      question: "Can you migrate from Google Workspace or on-prem Exchange?",
      answer:
        "Yes. We routinely migrate from Google Workspace, on-prem Exchange, IMAP, or mixed environments into Microsoft 365 with coexistence as needed.",
    },
    {
      question: "What about governance and security?",
      answer:
        "We implement Entra ID conditional access, MFA, device compliance, and SharePoint/Teams governance (naming, lifecycle, retention) as part of the rollout.",
    },
    {
      question: "How do you optimize license spend?",
      answer:
        "We analyze actual usage, align SKUs to roles, remove stale accounts, and set automated reviews. Many clients cut 10–30% from recurring license costs.",
    },
  ];

  // JSON-LD for this page (keep LocalBusiness in layout)
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Cloud & Microsoft 365 Migrations",
    url: "https://isectra.com/services/cloud-microsoft-365-migrations",
    description:
      "Modernize securely and scale for growth with Microsoft 365 and Azure migrations, governance, and license optimization.",
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
          name: "Cloud & Microsoft 365 Migrations",
          item: "https://isectra.com/services/cloud-microsoft-365-migrations",
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
        name: "Microsoft 365 Deployment & Administration",
        description:
          "Teams, SharePoint, OneDrive, and Entra ID configured with governance and retention policies.",
        provider: { "@type": "Organization", name: "iSectra" },
        serviceType: "Microsoft 365",
      },
      {
        "@type": "Service",
        name: "Azure Cloud Architecture",
        description:
          "Hybrid or full Azure architectures with security baselines and regulatory alignment.",
        provider: { "@type": "Organization", name: "iSectra" },
        serviceType: "Cloud Computing",
      },
      {
        "@type": "Service",
        name: "Data Migration & Cutover",
        description:
          "Zero-disruption runbooks, staged pilots, and user communications.",
        provider: { "@type": "Organization", name: "iSectra" },
        serviceType: "Migration",
      },
      {
        "@type": "Service",
        name: "License Tracking & Optimization",
        description:
          "Ongoing reviews to eliminate waste and right-size SKUs based on usage.",
        provider: { "@type": "Organization", name: "iSectra" },
        serviceType: "Cost Optimization",
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

      {/* HERO — pass strings for ctas to match component typing */}
      <ServiceHero
        title="Cloud & Microsoft 365 Migrations"
        description="Modernize securely and scale for growth. Whether you’re a pharmaceutical startup moving into commercialization or a small business ready to upgrade your infrastructure, we make your cloud transition seamless."
        highlights={heroHighlights}
        gradientFrom="from-blue-600"
        gradientTo="to-cyan-500"
        iconName="cloud"
        imagePath="/images/cloud-microsoft-365-migrations.jpeg"
        ctaPrimary="Start Your Migration"
        ctaSecondary=""
      />

      {/* FEATURES */}
      <ServiceFeatures
        title="Services Included"
        subtitle="Built for secure modernization and fast adoption"
        features={features}
        columns={3}
        gradientFrom="from-blue-600"
        gradientTo="to-cyan-500"
      />

      {/* FAQ */}
      <ServiceFAQ
        title="Cloud & Microsoft 365 FAQs"
        subtitle="Everything you need to know before moving"
        faqs={faqs}
        showViewAll={true}
        gradientFrom="from-blue-600"
        gradientTo="to-cyan-500"
      />

      {/* CONTACT */}
      <ServiceCTA
        title="Ready to Migrate?"
        description="Get a free assessment and migration plan tailored to your
                environment."
      />
    </>
  );
}
