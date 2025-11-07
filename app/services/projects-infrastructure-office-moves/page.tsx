import type { Metadata } from "next";
import ServiceHero from "@/components/services/servicehero";
import ServiceFeatures from "@/components/services/servicefeatures";
import ServiceFAQ from "@/components/services/servicefaq";
import ServiceCTA from "@/components/services/servicecta";
import BusinessImpact from "@/components/services/BusinessImpact";

const title = "Projects, Infrastructure & Office Moves | iSectra";
const description =
  "From wiring to cloud, we execute major technology initiatives—office IT relocation, network cabling, Wi-Fi design, server-room buildouts, and turnkey IT project management for SMEs.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "office IT relocation",
    "IT infrastructure projects",
    "network cabling services",
    "IT project management for SMEs",
    "office move IT checklist",
    "data cabling CAT6 fiber",
    "server room design",
    "Wi-Fi planning and installation",
  ],
  openGraph: {
    title,
    description,
    type: "website",
    url: "https://isectra.com/services/projects-infrastructure-office-moves",
    images: [
      {
        url: "https://isectra.com/hs-fs/hubfs/iSectraDatacenter%20(1).jpg",
        width: 1200,
        height: 630,
        alt: "Projects, Infrastructure & Office Moves",
      },
    ],
  },
  alternates: {
    canonical:
      "https://isectra.com/services/projects-infrastructure-office-moves",
  },
};

export default function ProjectsInfrastructureOfficeMovesPage() {
  // HERO
  const heroHighlights: string[] = [
    "Turnkey IT project management for SMEs",
    "Office IT relocation with minimal downtime",
    "Network cabling (CAT6/fiber) & Wi-Fi design",
    "Server-room buildouts, racks, power, cooling",
  ];

  // FEATURES
  const features = [
    {
      iconName: "settings",
      title: "End-to-End IT Project Management",
      description:
        "Scope, planning, vendor coordination, scheduling, risk management, and budget oversight—delivered by certified PMs who keep workstreams on track.",
    },
    {
      iconName: "server",
      title: "Server-Room & Infrastructure Design",
      description:
        "Racks, PDUs, UPS/generators, hot/cold aisle considerations, structured cabling pathways, access control, and environmental monitoring.",
    },
    {
      iconName: "wifi",
      title: "Network Install & Wi-Fi Planning",
      description:
        "Heat-map design, AP placement, controller configuration, VLANs/QoS, secure remote access, and hybrid work enablement.",
    },
    {
      iconName: "cable",
      title: "Structured Cabling (CAT6/Fiber)",
      description:
        "Standards-based cabling, patch panels, labeling, test certification, and clean rack/IDF builds for long-term reliability.",
    },
    {
      iconName: "camera",
      title: "Access Control & Cameras",
      description:
        "Badge systems, smart locks, NVRs, cloud video, and policy integration with your directory and security standards.",
    },
    {
      iconName: "cloud",
      title: "Cloud & App Cutovers",
      description:
        "Sequenced migrations for M365/Azure/SaaS with change windows, comms plans, and user training to avoid downtime.",
    },
    {
      iconName: "wrench",
      title: "Post-Move Stabilization",
      description:
        "Hypercare support, performance tuning, and acceptance testing to ensure day-one reliability after the go-live.",
    },
    {
      iconName: "file-text",
      title: "Compliance & Documentation",
      description:
        "As-built diagrams, cable schedules, inventory, configuration baselines, and change records to satisfy audits.",
    },
  ];

  // FAQS
  const faqs = [
    {
      question: "How do you minimize downtime during an office IT relocation?",
      answer:
        "We build a detailed move plan with change windows, pre-staging, dual-run or phased cutovers, and rollback options. Critical services maintain continuity while users are guided with clear communications.",
    },
    {
      question:
        "Do you handle network cabling, racks, and power for new offices?",
      answer:
        "Yes. We deliver end-to-end infrastructure: CAT6/fiber pulls, patch panels, racks, PDUs/UPS, and cooling considerations—plus certification and labeling for future maintenance.",
    },
    {
      question: "Can you coordinate third-party vendors and building teams?",
      answer:
        "Absolutely. We act as the single point of contact for ISPs, low-voltage contractors, furniture vendors, electricians, and building management to keep timelines aligned.",
    },
    {
      question:
        "What deliverables do we receive at the end of an IT infrastructure project?",
      answer:
        "As-built drawings, cable schedules, asset inventory, config backups, acceptance tests, and a stabilization report with performance baselines and open items.",
    },
    {
      question:
        "How does Wi-Fi planning work for multi-floor or dense environments?",
      answer:
        "We use predictive heat-mapping and onsite validation to place APs, set channel/power plans, and implement VLAN/QoS policies that balance performance, security, and capacity.",
    },
  ];

  // JSON-LD
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Projects, Infrastructure & Office Moves",
    url: "https://isectra.com/services/projects-infrastructure-office-moves",
    description:
      "Turnkey IT project management, office IT relocation, server-room design, network cabling services, and Wi-Fi planning for growing businesses.",
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
          name: "Projects, Infrastructure & Office Moves",
          item: "https://isectra.com/services/projects-infrastructure-office-moves",
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
        name: "Office IT Relocation",
        description:
          "Planning and executing office moves with phased cutovers and minimal downtime.",
        provider: { "@type": "Organization", name: "iSectra" },
        serviceType: "IT Project Management",
      },
      {
        "@type": "Service",
        name: "IT Infrastructure Projects",
        description:
          "Server-room buildouts, racks, power, cooling, and standards-based designs.",
        provider: { "@type": "Organization", name: "iSectra" },
        serviceType: "Infrastructure",
      },
      {
        "@type": "Service",
        name: "Network Cabling Services",
        description:
          "CAT6 and fiber installation, patch panels, labeling, and certification.",
        provider: { "@type": "Organization", name: "iSectra" },
        serviceType: "Structured Cabling",
      },
      {
        "@type": "Service",
        name: "Wi-Fi Planning & Installation",
        description:
          "Predictive heat-mapping, AP placement, controller setup, and VLAN/QoS.",
        provider: { "@type": "Organization", name: "iSectra" },
        serviceType: "Networking",
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
        title="Projects, Infrastructure & Office Moves"
        description="From wiring to cloud, we execute your major technology initiatives. Growing companies hit milestones—relocation, modernization, expansion—that demand precision and minimal disruption. With iSectra you’re covered."
        highlights={heroHighlights}
        gradientFrom="from-blue-600"
        gradientTo="to-cyan-500"
        iconName="settings"
        imagePath="/images/infrastructure-office-moves.jpeg"
        ctaPrimary="Plan My Office IT Move"
        ctaSecondary=""
      />

      {/* FEATURES */}
      <ServiceFeatures
        title="What We Offer"
        subtitle="Less risk, faster go-live, and no burden on your internal team"
        features={features}
        columns={4}
        gradientFrom="from-blue-600"
        gradientTo="to-cyan-500"
      />

      {/* VALUE SECTION */}
      <BusinessImpact />
      {/* FAQ */}
      <ServiceFAQ
        title="Office Moves & Infrastructure FAQs"
        subtitle="Key details about scope, timelines, and deliverables"
        faqs={faqs}
        showViewAll={true}
        gradientFrom="from-blue-600"
        gradientTo="to-cyan-500"
      />

      {/* CONTACT */}
      <ServiceCTA
        title="Ready to Plan Your Move?"
        description="Get a free project plan and itemized quote."
      />
    </>
  );
}
