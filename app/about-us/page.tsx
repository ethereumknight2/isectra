// app/about/page.tsx
"use client";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  ArrowRight,
  Target,
  Users,
  Award,
  Zap,
  Heart,
  Star,
  Lightbulb,
  Shield,
  TrendingUp,
  Linkedin,
} from "lucide-react";

const missionPoints = [
  {
    title: "Business Alignment over Node Management",
    description:
      "We challenge the conventional MSP model that focuses solely on nodes and uptime.",
  },
  {
    title: "Comprehensive IT Leadership",
    description:
      "Recognizing that the IT backbone comprises a spectrum of roles, from visionary leadership to hands-on technical expertise, we position ourselves as your complete IT department.",
  },
  {
    title: "Affordability without Compromise",
    description:
      "We understand that not every business can afford a full in-house IT department. iSectra fills this gap by offering a comprehensive IT department experience at a fraction of the cost, ensuring accessibility without compromising on quality or expertise.",
  },
  {
    title: "Continuous Education and Innovation",
    description:
      "We invest relentlessly in our education and knowledge base, staying ahead of the curve in technology trends, innovations, and best practices.",
  },
  {
    title: "End-to-End Support",
    description:
      "From strategic planning and implementation to day-to-day operations, our diverse team ensures that your IT ecosystem operates seamlessly.",
  },
  {
    title: "Humanize IT Support",
    description:
      "Our customers do not remember the problem, but they remember how we made them feel.",
  },
];

const values = [
  {
    title: "Customer-Centric Excellence",
    blurb:
      "We are committed to the success of our customers. Their triumphs are our triumphs.",
    icon: Target,
  },
  {
    title: "Continuous Learning & Improvement",
    blurb: "Our culture thrives on curiosity, adaptation and advancing skill.",
    icon: TrendingUp,
  },
  {
    title: "Fun-Loving & High-Energy",
    blurb: "A positive, high-energy culture is built into how we work.",
    icon: Zap,
  },
  {
    title: "Drama-Free Zone",
    blurb:
      "We eliminate distractions, politics and drama so we can focus on solutions.",
    icon: Shield,
  },
  {
    title: "Family-Like Connection",
    blurb:
      "We genuinely care about each other and our clients. We're more than a vendor — we're a partner.",
    icon: Heart,
  },
  {
    title: "Respecting Our Customers",
    blurb:
      "It's not just about solutions, it's about experience. We treat you like a trusted ally.",
    icon: Users,
  },
  {
    title: "Infectious Culture",
    blurb: "Our energy, our attitude and our approach spread beyond our team.",
    icon: Award,
  },
  {
    title: "Integrity & Fairness",
    blurb: "We never take unfair advantage. Ethical, transparent, reliable.",
    icon: CheckCircle,
  },
  {
    title: "Giving Back",
    blurb:
      "We believe in contributing to our communities, beyond just business.",
    icon: Heart,
  },
  {
    title: "Revolutionizing the Industry",
    blurb:
      "We challenge the status quo and set new standards for what IT should be.",
    icon: Lightbulb,
  },
];

const steps = [
  {
    k: "01",
    h: "Initiate",
    title: "Technology Landscape Analysis",
    p: "We start by conducting a thorough examination of your current technology setup: systems in use, industry-specific software, vendor relationships, regulatory and audit needs.",
  },
  {
    k: "02",
    h: "Strategize",
    title: "Understanding Business Objectives",
    p: "We engage with your leadership to understand short-term and long-term goals, challenges and aspirations — the business drivers behind the tech.",
  },
  {
    k: "03",
    h: "Blueprint",
    title: "Technology Assessment & Gap Analysis",
    p: "We benchmark your current state, identify gaps, compare to best-practice models, and deliver an IT report plus roadmap.",
  },
  {
    k: "04",
    h: "Contract",
    title: "Simple Monthly Retainer",
    p: "If we're a good fit, we move to contract: a clear monthly retainer with set objectives and service levels, avoiding long-winded geek-speak, complexity or surprise terms.",
  },
  {
    k: "05",
    h: "Transition",
    title: "Implementation Excellence",
    p: "We take over your IT operations and execute the roadmap with precision — whether migrating to cloud, upgrading infrastructure, or setting up monitoring. We minimize disruption, accelerate value.",
  },
  {
    k: "06",
    h: "Integrate",
    title: "We Become Your Virtual IT Department",
    p: "From boardroom to server room to cloud, we act as your full IT department — with strategy, operations and support all aligned.",
  },
  {
    k: "07",
    h: "Measure",
    title: "Optimize & Innovate",
    p: "We continuously monitor performance, generate dashboards, optimize systems and seek innovation. Your IT evolves with your business.",
  },
];

/**
 * Team — replaced with the 10 members from Images_new/OurTeam,
 * alphabetized by first name. LinkedIn included where provided.
 */
const team = [
  {
    name: "Adam Looney",
    role: "Lead Engineer",
    focus: "Network performance, endpoint security, operations",
    photo: "/images/Adam-Looney.png",
    linkedin: undefined,
  },
  {
    name: "Brian Martins",
    role: "Senior Support Engineer",
    focus: "Help desk leadership, customer experience",
    photo: "/images/Brian-Martins.png",
    linkedin: "https://www.linkedin.com/in/brian-martins-46246a262/",
  },
  {
    name: "Dalton Thompson",
    role: "Support Engineer",
    focus: "End-user support, onboarding, monitoring",
    photo: "/images/Dalton-Thompson.png",
    linkedin: "https://www.linkedin.com/in/dalton-lee-thompson/",
  },
  {
    name: "Damian Colarte",
    role: "Founder & CEO",
    focus: "Strategic vision, client relationships, long-term growth",
    photo: "/images/Damian-Colarte.png",
    linkedin: "https://www.linkedin.com/in/dcolarte/",
  },
  {
    name: "Joseph Cerniglia",
    role: "Project Manager",
    focus: "Office relocations, new build-outs, implementation logistics",
    photo: "/images/Joseph_Cerniglia.png",
    linkedin: undefined,
  },
  {
    name: "Michael Colarte",
    role: "Operations",
    focus: "Vendor coordination, asset management",
    photo: "/images/Michael-Colarte.png",
    linkedin: "https://www.linkedin.com/in/michael-colarte-5b74a5228/",
  },
  {
    name: "RJ Garrett",
    role: "Cloud Specialist",
    focus: "Microsoft 365, Azure, hybrid cloud setups",
    photo: "/images/RJ-Garrett.png",
    linkedin: undefined,
  },
  {
    name: "Roni Banerjee",
    role: "Chief Strategy Officer",
    focus: "Systems architecture, compliance alignment, analytics",
    photo: "/images/Roni-Banerjee.png",
    linkedin: "https://www.linkedin.com/in/ronibanerjee/",
  },
  {
    name: "Santiago Aristizabal",
    role: "CTO",
    focus: "Infrastructure design, cloud architecture, security",
    photo: "/images/Santiago-Aristizabal.jpg",
    linkedin: "https://www.linkedin.com/in/santiago-aristizabal-1a5b89146/",
  },
  {
    name: "Thomas Mauro",
    role: "Systems Specialist",
    focus: "Servers, backups, monitoring and automation",
    photo: "/images/Thomas-Mauro.png",
    linkedin: undefined,
  },
];

export default function AboutPage() {
  // Organization Schema with Team Members
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "iSectra",
    url: "https://isectra.com",
    logo: "https://isectra.com/hubfs/iSectraBALL.png",
    description:
      "Virtual IT Department for Small Businesses. Professional IT support and managed services in Jacksonville, FL. 24/7 Level 3 IT support with no contracts required.",
    foundingDate: "2003",
    slogan: "Your True IT Department",
    email: "info@isectra.com",
    telephone: "+1-904-555-0100",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jacksonville",
      addressRegion: "FL",
      addressCountry: "US",
      postalCode: "32099",
    },
    founder: {
      "@type": "Person",
      name: "Damian Colarte",
      jobTitle: "Founder & CEO",
      sameAs: "https://www.linkedin.com/in/dcolarte/",
    },
    employee: team.map((member) => ({
      "@type": "Person",
      name: member.name,
      jobTitle: member.role,
      description: member.focus,
      sameAs: member.linkedin ? [member.linkedin] : undefined,
    })),
    sameAs: [
      "https://www.linkedin.com/company/isectra",
      "https://www.facebook.com/isectra",
      "https://twitter.com/isectra",
    ],
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    knowsAbout: [
      "IT Support",
      "Managed IT Services",
      "Cybersecurity",
      "Cloud Solutions",
      "Network Management",
      "IT Consulting",
      "Pharmaceutical IT",
      "Regulatory Compliance",
      "HIPAA Compliance",
    ],
  };

  // LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "iSectra",
    image: "https://isectra.com/hubfs/iSectraBALL.png",
    "@id": "https://isectra.com",
    url: "https://isectra.com",
    telephone: "+1-904-555-0100",
    email: "info@isectra.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "",
      addressLocality: "Jacksonville",
      addressRegion: "FL",
      postalCode: "32099",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.3322,
      longitude: -81.6557,
    },
    openingHoursSpecification: {
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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "50",
    },
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://isectra.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About Us",
        item: "https://isectra.com/about",
      },
    ],
  };

  // AboutPage Schema
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About iSectra - Virtual IT Department",
    description:
      "Learn about iSectra's mission, vision, values, and team. We deliver enterprise-grade IT support for pharmaceutical companies and growing businesses with 15-50 employees.",
    url: "https://isectra.com/about",
    mainEntity: {
      "@type": "Organization",
      name: "iSectra",
    },
  };

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />

      <main className="bg-white text-slate-900">
        {/* ====== PREMIUM HERO (tighter + better crop) ====== */}
        <section className="relative pt-28 pb-20 md:pt-32 md:pb-28 min-h-[620px] md:min-h-[720px] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/iSectraTeam.png"
              alt="iSectra Team"
              fill
              priority
              quality={90}
              className="object-cover object-[50%_30%] md:object-[50%_28%]"
            />
            {/* Premium Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/70 to-slate-900/50" />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-white" />
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-4xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8 animate-fadeInUp">
                <div className="w-2 h-2 bg-[#7dca00] rounded-full" />
                <span className="text-sm font-semibold text-white tracking-wide uppercase">
                  About iSectra
                </span>
              </div>

              {/* Headline */}
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8 animate-fadeInUp"
                style={{ animationDelay: "0.1s" }}
              >
                Old-Fashioned Customer Service
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Meets Modern Technology
                </span>
              </h1>

              {/* Accent Line */}
              <div
                className="w-24 h-1 bg-gradient-to-r from-blue-500 to-[#7dca00] mb-8 animate-fadeInUp"
                style={{ animationDelay: "0.2s" }}
              />

              {/* Subheadline */}
              <p
                className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-3xl mb-10 animate-fadeInUp"
                style={{ animationDelay: "0.3s" }}
              >
                For more than two decades, iSectra has operated on a simple but
                powerful belief: that every growing business deserves
                enterprise-grade IT, without enterprise pricing or vendor games.
              </p>

              {/* CTAs */}
              <div
                className="flex flex-col sm:flex-row gap-4 animate-fadeInUp"
                style={{ animationDelay: "0.4s" }}
              >
                {/* Left: more solid for readability */}
                <a
                  href="#team"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4
               bg-white text-slate-900 font-semibold rounded-lg
               shadow-xl hover:shadow-2xl border border-white/0
               hover:bg-slate-50 transition-all duration-300"
                >
                  Meet the Team
                  <ArrowRight className="w-5 h-5" />
                </a>

                {/* Right: consistent green gradient primary */}
                <Link
                  href="/contact-us"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4
               bg-gradient-to-r from-[#7dca00] to-[#64ad00] text-white
               font-semibold rounded-lg shadow-xl hover:shadow-2xl
               hover:scale-105 transition-all duration-300
               focus:outline-none focus-visible:ring-2
               focus-visible:ring-offset-2 focus-visible:ring-[#7dca00]"
                >
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ====== INTRO SECTION - SYMMETRICAL REDESIGN ====== */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-white to-slate-50">
          <div className="container-custom">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left - Text Content */}
                <div className="space-y-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/10 rounded-full">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-sm font-semibold text-blue-600 tracking-wide uppercase">
                      Our Story
                    </span>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                    From Pharma to
                    <br />
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                      Every Growing Business
                    </span>
                  </h2>

                  <p className="text-xl text-slate-700 leading-relaxed">
                    We got our start working deeply with{" "}
                    <strong className="text-slate-900">
                      pharmaceutical companies
                    </strong>
                    , building complete IT infrastructures that met the rigors
                    of R&D labs, regulatory audits, and manufacturing scale-ups.
                  </p>

                  <p className="text-lg text-slate-600 leading-relaxed">
                    Over time, we refined a model that delivers the
                    responsiveness of a boutique firm with the depth of a large
                    IT department. Today, iSectra remains a lean,
                    high-efficiency team that blends decades of experience,
                    cutting-edge automation, and human accountability to provide
                    seamless, secure, and scalable IT for companies with 15-50
                    employees and beyond.
                  </p>
                </div>

                {/* Right - Symmetrical 2x2 Grid */}
                <div className="grid grid-cols-2 gap-6">
                  {/* Top Left */}
                  <div className="group relative bg-white border-2 border-blue-600 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-2xl font-bold text-white">
                          20+
                        </span>
                      </div>
                      <p className="text-slate-900 font-bold text-lg mb-1">
                        Years Excellence
                      </p>
                      <p className="text-slate-600 text-sm">
                        Proven track record
                      </p>
                    </div>
                  </div>

                  {/* Top Right - SOLID GRADIENT */}
                  <div className="group relative bg-gradient-to-br from-[#7dca00] to-green-500 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <div className="text-center text-white">
                      <div className="text-3xl font-bold mb-2">100%</div>
                      <p className="font-bold mb-1">Client Retention</p>
                      <p className="text-sm text-green-100">
                        Never lost a customer
                      </p>
                    </div>
                  </div>

                  {/* Bottom Left */}
                  <div className="group relative bg-white border-2 border-cyan-500 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-xl font-bold text-white">
                          24/7
                        </span>
                      </div>
                      <p className="text-slate-900 font-bold text-lg mb-1">
                        Always Available
                      </p>
                      <p className="text-slate-600 text-sm">Around the clock</p>
                    </div>
                  </div>

                  {/* Bottom Right */}
                  <div className="group relative bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <div className="text-center text-white">
                      <div className="text-3xl font-bold mb-2">15-50</div>
                      <p className="font-bold mb-1">Employees</p>
                      <p className="text-sm text-blue-100">Perfect fit range</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====== MISSION SECTION - COLORFUL REDESIGN ====== */}
        <section
          id="mission"
          className="py-20 md:py-28 bg-white relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#7dca00]/5 rounded-full blur-3xl"></div>

          <div className="container-custom relative z-10">
            <div className="max-w-7xl mx-auto">
              <SectionHeader
                eyebrow="Our Mission"
                title="Revolutionizing IT Services"
              />

              {/* Mission Statement - Colorful Box */}
              <div className="mt-12 relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-3xl opacity-20 blur"></div>
                <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-10 md:p-14 border-2 border-blue-200 shadow-xl">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-2xl md:text-3xl font-light text-slate-700 leading-relaxed italic">
                        "iSectra's mission is to revolutionize the IT service
                        industry by challenging the status quo and providing
                        businesses with a transformative approach to technology
                        management. We believe that the traditional model of
                        Managed Service Providers (MSPs) falls short in truly
                        aligning with the diverse and evolving needs of our
                        clients."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mission Points - Colorful Cards */}
              <div className="mt-16 grid md:grid-cols-2 gap-6">
                {missionPoints.map((point, index) => {
                  const colors = [
                    {
                      border: "border-blue-600",
                      bg: "from-blue-50 to-white",
                      icon: "from-blue-600 to-cyan-500",
                    },
                    {
                      border: "border-[#7dca00]",
                      bg: "from-green-50 to-white",
                      icon: "from-[#7dca00] to-green-500",
                    },
                    {
                      border: "border-cyan-500",
                      bg: "from-cyan-50 to-white",
                      icon: "from-cyan-500 to-blue-600",
                    },
                    {
                      border: "border-blue-600",
                      bg: "from-blue-50 to-white",
                      icon: "from-blue-600 to-cyan-500",
                    },
                    {
                      border: "border-[#7dca00]",
                      bg: "from-green-50 to-white",
                      icon: "from-[#7dca00] to-green-500",
                    },
                    {
                      border: "border-cyan-500",
                      bg: "from-cyan-50 to-white",
                      icon: "from-cyan-500 to-blue-600",
                    },
                  ];
                  const color = colors[index % colors.length];

                  return (
                    <div
                      key={index}
                      className={`group relative bg-gradient-to-br ${color.bg} border-2 ${color.border} rounded-xl p-8 hover:shadow-2xl transition-all duration-300`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${color.icon} rounded-lg flex items-center justify-center shadow-lg`}
                        >
                          <CheckCircle className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-slate-900 mb-3">
                            {point.title}
                          </h3>
                          <p className="text-slate-600 leading-relaxed">
                            {point.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ====== VISION SECTION - REDESIGNED ====== */}
        <section
          id="vision"
          className="py-20 md:py-28 bg-white relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#7dca00]/5 rounded-full blur-3xl"></div>

          <div className="container-custom relative z-10">
            <div className="max-w-7xl mx-auto">
              <SectionHeader
                eyebrow="Our Vision"
                title="The Driving Force Behind IT Innovation"
              />

              {/* Vision Statement Card */}
              <div className="mt-12 relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl opacity-20 blur"></div>
                <div className="relative bg-white rounded-3xl p-10 md:p-14 border border-slate-200 shadow-2xl">
                  <div className="absolute top-8 left-8 text-8xl text-blue-600/10 font-serif">
                    "
                  </div>
                  <p className="relative text-2xl md:text-3xl font-light text-slate-700 leading-relaxed italic text-center">
                    iSectra's vision is to be the driving force behind a
                    paradigm shift in IT services, where businesses experience a
                    seamless fusion of technology and strategy, propelling them
                    to new heights of success in the digital era.
                  </p>
                </div>
              </div>

              {/* Vision Points - Interactive Cards */}
              <div className="mt-16 grid md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="group relative bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-2xl p-8 hover:border-blue-600 transition-all duration-300 hover:shadow-xl">
                  <div className="absolute -top-4 left-8 w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">
                      Never Lost a Customer
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      We are proud to say that we have never lost a customer to
                      another IT company. Why? Because we become a part of their
                      business to achieve their business goals.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="group relative bg-gradient-to-br from-[#7dca00]/10 to-white border-2 border-green-200 rounded-2xl p-8 hover:border-[#7dca00] transition-all duration-300 hover:shadow-xl">
                  <div className="absolute -top-4 left-8 w-12 h-12 bg-gradient-to-br from-[#7dca00] to-green-500 rounded-xl flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">
                      Through Thick & Thin
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      When times are tough, we focus on helping them get through
                      the rough patches and succeed, rather than chase payments.
                      When times are good, we focus on supporting their growth
                      through our 24×7×365 availability.
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="group relative bg-gradient-to-br from-cyan-50 to-white border-2 border-cyan-200 rounded-2xl p-8 hover:border-cyan-500 transition-all duration-300 hover:shadow-xl">
                  <div className="absolute -top-4 left-8 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">
                      Industry Expertise
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      We invest our success into learning the technology needs
                      of our customers' industry so that they do not have to.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====== VALUES SECTION ====== */}
        <section id="values" className="py-20 md:py-28 bg-slate-50">
          <div className="container-custom">
            <div className="max-w-7xl mx-auto">
              <SectionHeader
                eyebrow="Our Values"
                title="What Drives Us Every Day"
              />

              <p className="mt-6 text-lg text-slate-600 max-w-3xl">
                At iSectra, our values aren't marketing statements — they are
                the real-world pillars that guide our actions and shape our team
                culture.
              </p>

              <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {values.map((v) => {
                  const IconComponent = v.icon;
                  return (
                    <li
                      key={v.title}
                      className="group relative bg-white border border-slate-200 rounded-xl p-6 hover:border-blue-300 transition-all duration-300 hover:shadow-xl"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-blue-50/50 to-blue-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-bold text-slate-900 mb-2">
                          {v.title}
                        </h3>
                        <p className="text-slate-600">{v.blurb}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>

        {/* ====== PROCESS SECTION ====== */}
        <section id="process" className="py-20 md:py-28 bg-white">
          <div className="container-custom">
            <div className="max-w-7xl mx-auto">
              <SectionHeader
                eyebrow="Our Process"
                title="How We Onboard & Support Our Customers"
              />

              <div className="mt-8 max-w-4xl">
                <p className="text-lg text-slate-600 leading-relaxed">
                  At iSectra, we believe in a comprehensive and strategic
                  approach to IT transformation, ensuring that every aspect of
                  your technology aligns with your business objectives.
                </p>
                <p className="mt-4 text-lg font-semibold text-slate-900">
                  Your involvement can be none, minimal, or as much as you like.
                  Here's how we work:
                </p>
              </div>

              <div className="mt-12 space-y-6">
                {steps.map((s) => (
                  <div
                    key={s.k}
                    className="group bg-white border border-slate-200 rounded-xl p-8 hover:border-blue-300 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {s.k}
                      </div>
                      <div className="flex-1 pt-2">
                        <h3 className="text-2xl font-bold text-slate-900 mb-1">
                          {s.h}
                        </h3>
                        <h4 className="text-lg font-semibold text-blue-600 mb-3">
                          {s.title}
                        </h4>
                        <p className="text-lg text-slate-600 leading-relaxed">
                          {s.p}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ====== TEAM SECTION - UPDATED MEMBERS & LINKEDIN ====== */}
        <section
          id="team"
          className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white"
        >
          <div className="container-custom">
            <div className="max-w-7xl mx-auto">
              {/* Team Header - Premium Box */}
              <div className="relative mb-16">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl opacity-20 blur"></div>
                <div className="relative bg-white rounded-3xl p-10 md:p-12 border border-slate-200 shadow-xl">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/10 rounded-full mb-4">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-sm font-semibold text-blue-600 tracking-wide uppercase">
                          The Team
                        </span>
                      </div>
                      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        Meet Our Elite Group
                      </h2>
                      <p className="text-xl text-slate-600 leading-relaxed">
                        We are a lean, elite group of technologists, business
                        strategists and support specialists who deliver the
                        responsiveness of a boutique firm and the reliability of
                        a large IT department. Each member brings decades of
                        experience, deep industry knowledge, and a commitment to
                        your success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Grid - Premium Cards */}
              <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {team.map((m, index) => (
                  <li
                    key={m.name}
                    className="group animate-fadeInUp flex"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative bg-white rounded-2xl overflow-hidden border-2 border-slate-200 hover:border-blue-600 transition-all duration-300 hover:shadow-2xl flex flex-col w-full">
                      {/* Image */}
                      <div className="relative aspect-[3/4] bg-slate-200 overflow-hidden">
                        <Image
                          src={m.photo}
                          alt={m.name}
                          fill
                          className={`object-cover group-hover:scale-110 transition-transform duration-500 ${
                            m.name === "Brian Martins"
                              ? "object-[30%_center]"
                              : "object-center"
                          }`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>

                        {/* Hover overlay with focus text */}
                        <div className="absolute inset-0 bg-blue-600/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                          <p className="text-white text-center leading-relaxed">
                            {m.focus}
                          </p>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="font-bold text-slate-900 text-xl mb-1">
                          {m.name}
                        </h3>
                        <p className="text-blue-600 font-semibold mb-4">
                          {m.role}
                        </p>

                        {/* LinkedIn button (only if profile provided) - pushed to bottom */}
                        <div className="mt-auto">
                          {m.linkedin && (
                            <a
                              href={m.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Connect with ${m.name} on LinkedIn`}
                              className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg bg-[#0a66c2] text-white hover:bg-[#095aab] transition-colors"
                            >
                              <Linkedin className="w-4 h-4" />
                              Connect with {m.name.split(" ")[0]} on LinkedIn
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Decorative corner */}
                      <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Why Lean Team Matters - Elegant Card */}
              <div className="mt-16 relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl opacity-20 blur"></div>
                <div className="relative bg-white rounded-3xl p-10 md:p-14 border-2 border-blue-200 shadow-2xl">
                  <div className="grid md:grid-cols-[auto_1fr] gap-8 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#7dca00] to-green-500 rounded-2xl flex items-center justify-center shadow-xl">
                        <Award className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#7dca00]/10 rounded-full mb-4">
                        <div className="w-2 h-2 bg-[#7dca00] rounded-full"></div>
                        <span className="text-sm font-semibold text-[#7dca00] tracking-wide uppercase">
                          Our Advantage
                        </span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Why Our Lean Team Matters
                      </h3>
                      <p className="text-xl text-slate-600 leading-relaxed">
                        With decades of accumulated assets, processes, and AI
                        tools, we operate efficiently: delivering
                        enterprise-grade technology management at a fraction of
                        the cost. You get senior engineers from day one, fewer
                        layers of bureaucracy, and real alignment with your
                        business goals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====== TEAM CANDID PHOTOS ====== */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image
                    src="/images/Team 1.png"
                    alt="Team collaboration"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image
                    src="/images/Team 2.png"
                    alt="Team meeting"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image
                    src="/images/Team 3.png"
                    alt="Team innovation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====== TESTIMONIAL ====== */}
        <section className="py-20 md:py-28 bg-slate-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl p-12 md:p-16 shadow-2xl border border-slate-200">
                <div className="flex justify-center gap-2 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-7 h-7 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <blockquote className="text-center">
                  <p className="text-2xl md:text-3xl font-light text-slate-700 leading-relaxed italic mb-8">
                    "Have been a customer for many years and it never ceases to
                    amaze me the level of support I get in times of need. This
                    sort of customer service is practically unheard of in this
                    day and age."
                  </p>
                </blockquote>
                <div className="text-center mb-6">
                  <p className="text-lg font-semibold text-slate-900">
                    Brian Rogers
                  </p>
                  <p className="text-sm text-slate-500">Jacksonville, FL</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent"></div>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <div className="w-2 h-2 bg-[#7dca00] rounded-full"></div>
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  </div>
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====== FINAL CTA ====== */}
        <section id="contact-cta" className="py-32 md:py-40 bg-slate-100">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
                Ready to Experience the iSectra Difference?
              </h2>
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="w-20 h-px bg-slate-300"></div>
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <div className="w-20 h-px bg-slate-300"></div>
              </div>
              <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed">
                Talk to a senior engineer today. Free consultation with same-day
                response.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact-us"
                  className="group inline-flex items-center justify-center gap-2 px-12 py-6
             bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500
             text-white font-semibold text-lg rounded-lg shadow-xl
             hover:shadow-2xl hover:scale-105
             hover:from-blue-700 hover:via-blue-600 hover:to-cyan-600
             active:scale-[0.99]
             transition-all duration-300
             focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600"
                >
                  Schedule a Consultation
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              <p className="text-sm text-slate-500 mt-8">
                Free consultation • Same-day response
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

/* ---------- Components ---------- */

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="max-w-3xl">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/10 rounded-full mb-4">
        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
        <span className="text-sm font-semibold text-blue-600 tracking-wide uppercase">
          {eyebrow}
        </span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-slate-900">{title}</h2>
    </div>
  );
}
