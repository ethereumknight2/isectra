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

        {/* TopBar – shows background above/below the button */}
        <div className="fixed top-0 left-0 right-0 z-[60] bg-slate-900/95 text-white border-b border-slate-800">
          <div className="container mx-auto px-6">
            {/* Make the bar taller than the button */}
            <div className="h-12 flex items-center justify-between text-sm">
              <div className="flex items-center gap-5">
                {/* Shorter, rectangular button so bar peeks above/below */}
                <a
                  href="https://halo.isectra.com/portal"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open iSectra Support Portal"
                  className="inline-flex items-center gap-2 rounded-md px-4 py-1.5 leading-none
                     text-white shadow-sm ring-1 ring-inset ring-white/10
                     bg-gradient-to-r from-cyan-600 to-blue-600
                     hover:from-cyan-500 hover:to-blue-500 hover:shadow-md transition-all"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 12a8 8 0 1116 0v5a3 3 0 01-3 3h-2m-6 0H7a3 3 0 01-3-3v-2m2 0h3m8 0h3M8 17v-2a2 2 0 012-2h4a2 2 0 012 2v2"
                    />
                  </svg>
                  <span>Support Portal</span>
                  <span className="ml-1 hidden sm:inline-flex items-center gap-1 rounded-sm bg-white/10 px-2 py-0.5 text-[11px] font-medium">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    24/7
                  </span>
                </a>

                <a
                  href="tel:+1-845-563-0346"
                  className="flex items-center gap-2 text-white/85 hover:text-white transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.5 5.5A2.5 2.5 0 016 3h2.3a1 1 0 01.95.68l1.3 3.9a1 1 0 01-.5 1.2l-1.8.9a10.5 10.5 0 005.82 5.82l.9-1.8a1 1 0 011.2-.5l3.9 1.3a1 1 0 01.68.95V18a2.5 2.5 0 01-2.5 2.5H19C10.72 20.5 3.5 13.28 3.5 5.5z"
                    />
                  </svg>
                  <span>(845) 563-0346</span>
                </a>
              </div>

              {/* Right: Socials */}
              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/company/isectra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/channel/UC-wt1L0VzRFdHGPnIPL3FmA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label="YouTube"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 00.5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 002.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 002.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.5 15.6V8.4L15.8 12l-6.3 3.6z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/iSectraIT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/iSectra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073C0 18.062 4.388 23.027 10.125 23.927v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/Isectrait/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm10 2H7a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3zm-5 3.5a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 2.2a3.3 3.3 0 100 6.6 3.3 3.3 0 000-6.6zM18.6 6.1a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
