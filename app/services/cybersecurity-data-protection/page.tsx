import type { Metadata } from "next";
import ServiceHero from "@/components/services/servicehero";
import ServiceFeatures from "@/components/services/servicefeatures";
import ServiceFAQ from "@/components/services/servicefaq";
import ServiceCTA from "@/components/services/servicecta";
import WhyItMatters from "@/components/services/Whyitmatters";

const title = "Cybersecurity & Data Protection | iSectra";
const description =
  "Enterprise-grade security tailored for your business size. 24×7 monitoring and response, next-gen endpoint protection, secure backups, and compliance-ready architectures.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "small business cybersecurity",
    "data protection services",
    "endpoint security for SMB",
    "backup and disaster recovery services",
  ],
  openGraph: {
    title,
    description,
    type: "website",
    url: "https://isectra.com/services/cybersecurity-data-protection",
    images: [
      {
        url: "https://isectra.com/hs-fs/hubfs/iSectraDatacenter%20(1).jpg",
        width: 1200,
        height: 630,
        alt: "Cybersecurity & Data Protection",
      },
    ],
  },
  alternates: {
    canonical: "https://isectra.com/services/cybersecurity-data-protection",
  },
};

export default function CybersecurityDataProtectionPage() {
  const heroHighlights: string[] = [
    "24×7 threat monitoring and rapid response",
    "Next-gen EDR with real-time detection",
    "Secure backups + DR testing for fast recovery",
    "Compliance-ready policies and hardening",
  ];

  const features = [
    {
      iconName: "shield",
      title: "Next-Gen Endpoint Protection",
      description:
        "Deploy and manage EDR to monitor and defend devices in real time with behavioral detection and automated containment.",
    },
    {
      iconName: "headphones",
      title: "24×7 Monitoring & Response",
      description:
        "Our team watches alerts, logs, and anomalies around the clock and acts immediately to contain and remediate threats.",
    },
    {
      iconName: "database",
      title: "Backups & DR Testing",
      description:
        "Cloud + data-center redundancy with scheduled test restores to validate RPO/RTO and ensure rapid recovery.",
    },
    {
      iconName: "file-text",
      title: "Email & User Defense",
      description:
        "Advanced filtering, phishing simulation, and employee awareness training—because users are half of security.",
    },
    {
      iconName: "server",
      title: "Network Security Architecture",
      description:
        "Firewalls, segmentation, secure remote access, and baseline hardening aligned to compliance frameworks.",
    },
    {
      iconName: "bar-chart",
      title: "Compliance & Reporting",
      description:
        "Mapped controls, evidence collection, and executive reporting to satisfy audits without slowing the business.",
    },
  ];

  const faqs = [
    {
      question: "What makes this different from basic antivirus?",
      answer:
        "EDR provides behavioral detection, containment, and forensic visibility beyond signature-based AV—plus our 24×7 team responds in minutes, not days.",
    },
    {
      question: "How do you minimize downtime during incidents?",
      answer:
        "We pre-define runbooks, isolate affected endpoints or segments, fail over to clean backups when needed, and coordinate clear stakeholder communications.",
    },
    {
      question: "Can you support HIPAA, SOX, or similar requirements?",
      answer:
        "Yes. We align controls (MFA, logging, retention, DLP, least privilege, hardening) and package evidence so audits are predictable and faster.",
    },
    {
      question: "How often do you test backups and recovery?",
      answer:
        "We schedule test restores and DR exercises regularly and report RPO/RTO outcomes so recovery isn’t just theoretical.",
    },
  ];

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Cybersecurity & Data Protection",
    url: "https://isectra.com/services/cybersecurity-data-protection",
    description:
      "Enterprise-grade security tailored for your business size, including 24×7 monitoring and response, next-gen endpoint protection, secure backups, and compliance.",
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
          name: "Cybersecurity & Data Protection",
          item: "https://isectra.com/services/cybersecurity-data-protection",
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
        name: "Endpoint Detection & Response (EDR)",
        description:
          "Real-time endpoint protection with behavioral detection and automated containment.",
        provider: { "@type": "Organization", name: "iSectra" },
        serviceType: "Cybersecurity",
      },
      {
        "@type": "Service",
        name: "24×7 SOC Monitoring & Response",
        description:
          "Always-on monitoring, alert triage, threat hunting, and incident response.",
        provider: { "@type": "Organization", name: "iSectra" },
        serviceType: "Threat Monitoring",
      },
      {
        "@type": "Service",
        name: "Backup & Disaster Recovery",
        description:
          "Cloud + data-center redundancy with recurring test restores to validate recoverability.",
        provider: { "@type": "Organization", name: "iSectra" },
        serviceType: "Data Protection",
      },
      {
        "@type": "Service",
        name: "Network Security Architecture",
        description:
          "Firewalls, segmentation, secure remote access, and policy enforcement aligned to compliance.",
        provider: { "@type": "Organization", name: "iSectra" },
        serviceType: "Network Security",
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
        title="Cybersecurity & Data Protection"
        description="Enterprise-grade security tailored for your business size. Cyber threats are evolving, and for small enterprises and pharma firms the stakes are high—regulatory mandates, intellectual property, uptime requirements. iSectra brings enterprise-level protection scaled for your environment—without enterprise overhead."
        highlights={heroHighlights}
        gradientFrom="from-blue-600"
        gradientTo="to-cyan-500"
        iconName="shield"
        imagePath="/images/cybersecurity-data-protection.jpeg"
        ctaPrimary="Get a Security Assessment"
        ctaSecondary=""
      />

      {/* FEATURES */}
      <ServiceFeatures
        title="Key Components"
        subtitle="Defense-in-depth without enterprise overhead"
        features={features}
        columns={3}
        gradientFrom="from-blue-600"
        gradientTo="to-cyan-500"
      />

      {/* WHY IT MATTERS */}
      <WhyItMatters />

      {/* FAQ */}
      <ServiceFAQ
        title="Cybersecurity FAQs"
        subtitle="What customers ask before engaging"
        faqs={faqs}
        showViewAll={true}
        gradientFrom="from-blue-600"
        gradientTo="to-cyan-500"
      />

      {/* CTA */}
      <ServiceCTA
        title="Ready to Strengthen Your Security?"
        description="Get a free assessment and prioritized action plan."
      />
    </>
  );
}
