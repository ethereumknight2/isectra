import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Virtual IT Department for Small Businesses, Top IT Outsourcing Company Jacksonville FL - iSectra",
  description:
    "Looking for reliable IT support for your small business in Jacksonville, FL? Explore virtual IT Support offering expert support and cost-effective IT solutions. Ensure your business runs smoothly with trusted IT support.",
  keywords: [
    "IT support Jacksonville",
    "managed IT services",
    "virtual IT department",
    "IT outsourcing",
    "cybersecurity",
  ],
  authors: [{ name: "iSectra" }],
  openGraph: {
    title:
      "Virtual IT Department for Small Businesses, Top IT Outsourcing Company Jacksonville FL - iSectra",
    description:
      "Looking for reliable IT support for your small business in Jacksonville, FL? Explore virtual IT Support offering expert support and cost-effective IT solutions.",
    url: "https://isectra.com",
    siteName: "iSectra",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Virtual IT Department for Small Businesses, Top IT Outsourcing Company Jacksonville FL - iSectra",
    description:
      "Looking for reliable IT support for your small business in Jacksonville, FL? Explore virtual IT Support offering expert support and cost-effective IT solutions.",
  },
  icons: {
    icon: "https://isectra.com/hubfs/iSectraBALL.png",
    shortcut: "https://isectra.com/hubfs/iSectraBALL.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // LocalBusiness Schema (includes Organization data + local business specifics)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "iSectra",
    url: "https://isectra.com",
    logo: "https://isectra.com/hubfs/iSectraBALL.png",
    image: "https://isectra.com/hs-fs/hubfs/iSectraDatacenter%20(1).jpg",
    description:
      "Virtual IT Department for Small Businesses. Professional IT support and managed services in Jacksonville, FL. 24/7 Level 3 IT support with no contracts required.",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jacksonville",
      addressRegion: "FL",
      addressCountry: "US",
      postalCode: "32099",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "30.3322",
      longitude: "-81.6557",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-904-555-0100",
      contactType: "customer service",
      email: "info@isectra.com",
      availableLanguage: "English",
      areaServed: ["US", "Florida"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    },
    openingHours: "Mo-Su 00:00-23:59",
    telephone: "+1-904-555-0100",
    email: "info@isectra.com",
    sameAs: [
      "https://www.linkedin.com/company/isectra",
      "https://www.facebook.com/isectra",
      "https://twitter.com/isectra",
      "https://www.linkedin.com/in/dcolarte/",
    ],
    founder: {
      "@type": "Person",
      name: "Damian Colarte",
      jobTitle: "CEO",
      sameAs: "https://www.linkedin.com/in/dcolarte/",
    },
    employee: [
      {
        "@type": "Person",
        name: "Damian Colarte",
        jobTitle: "CEO",
      },
      {
        "@type": "Person",
        name: "Bob Larsen",
        jobTitle: "COO",
      },
      {
        "@type": "Person",
        name: "Roni Banerjee",
        jobTitle: "CMO & Investment Officer",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "50",
    },
    knowsAbout: [
      "IT Support",
      "Managed IT Services",
      "Cybersecurity",
      "Cloud Solutions",
      "Network Management",
      "IT Consulting",
      "Data Backup",
      "Disaster Recovery",
      "Compliance Management",
    ],
    areaServed: [
      {
        "@type": "State",
        name: "Florida",
      },
      {
        "@type": "City",
        name: "Jacksonville",
      },
    ],
    slogan: "Your True IT Department",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "IT Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Managed IT Services",
            description: "Complete IT infrastructure management and support",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cybersecurity Services",
            description: "Protection, monitoring, and compliance",
          },
        },
      ],
    },
  };

  // Service Schema - Main IT Services
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "Service",
        name: "Cybersecurity Services",
        description:
          "Planning, implementation, administration, penetration tests, regulatory compliance including HIPAA, SOX, CMMC, NIST frameworks",
        provider: {
          "@type": "Organization",
          name: "iSectra",
        },
        serviceType: "Cybersecurity",
        areaServed: {
          "@type": "State",
          name: "Florida",
        },
        availableChannel: {
          "@type": "ServiceChannel",
          servicePhone: {
            "@type": "ContactPoint",
            telephone: "+1-904-555-0100",
            availableLanguage: "English",
          },
        },
      },
      {
        "@type": "Service",
        name: "Cloud Solutions",
        description:
          "Microsoft Azure, AWS, cloud migration, and hybrid infrastructure management",
        provider: {
          "@type": "Organization",
          name: "iSectra",
        },
        serviceType: "Cloud Computing",
        areaServed: {
          "@type": "State",
          name: "Florida",
        },
      },
      {
        "@type": "Service",
        name: "Network Management",
        description:
          "Design, implementation, monitoring, and optimization of network infrastructure with 24/7 support",
        provider: {
          "@type": "Organization",
          name: "iSectra",
        },
        serviceType: "Network Infrastructure",
        areaServed: {
          "@type": "State",
          name: "Florida",
        },
      },
      {
        "@type": "Service",
        name: "Data Backup & Recovery",
        description:
          "Automated backups, disaster recovery, and business continuity planning",
        provider: {
          "@type": "Organization",
          name: "iSectra",
        },
        serviceType: "Data Management",
        areaServed: {
          "@type": "State",
          name: "Florida",
        },
      },
      {
        "@type": "Service",
        name: "24/7 IT Support",
        description:
          "Level 3 technical support via phone, email, chat, and remote access. No extra charges for off-hours or holidays.",
        provider: {
          "@type": "Organization",
          name: "iSectra",
        },
        serviceType: "Technical Support",
        areaServed: {
          "@type": "Country",
          name: "United States",
        },
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      },
      {
        "@type": "Service",
        name: "IT Consulting",
        description:
          "Strategic planning, technology roadmaps, and digital transformation consulting",
        provider: {
          "@type": "Organization",
          name: "iSectra",
        },
        serviceType: "IT Consulting",
        areaServed: {
          "@type": "State",
          name: "Florida",
        },
      },
      {
        "@type": "Service",
        name: "Device Management",
        description:
          "Complete lifecycle management for all endpoints and mobile devices with monitoring and security",
        provider: {
          "@type": "Organization",
          name: "iSectra",
        },
        serviceType: "Device Management",
        areaServed: {
          "@type": "State",
          name: "Florida",
        },
      },
      {
        "@type": "Service",
        name: "Compliance & Security Management",
        description:
          "HIPAA, SOX, CMMC, NIST frameworks and regulatory compliance services",
        provider: {
          "@type": "Organization",
          name: "iSectra",
        },
        serviceType: "Compliance Management",
        areaServed: {
          "@type": "State",
          name: "Florida",
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-inter antialiased">
        {/* LocalBusiness Schema for SEO */}
        <Script
          id="localbusiness-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
          strategy="beforeInteractive"
        />

        {/* Service Schema for SEO */}
        <Script
          id="service-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
          strategy="beforeInteractive"
        />

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
