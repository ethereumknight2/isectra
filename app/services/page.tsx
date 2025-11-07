// app/services/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Server,
  Cloud,
  Shield,
  Briefcase,
  Headphones,
  ArrowRight,
  CheckCircle2,
  Clock,
  Award,
  Users,
  Zap,
} from "lucide-react";

const services = [
  {
    title: "Managed IT Services",
    slug: "managed-it",
    iconName: "server",
    description:
      "Complete IT management — proactive, predictable and personal.",
    highlights: [
      "Unlimited remote and onsite support 24×7×365",
      "Proactive monitoring of all systems",
      "Preventive maintenance and patching",
      "Asset lifecycle and vendor management",
    ],
    gradientFrom: "from-blue-600",
    gradientTo: "to-cyan-500",
  },
  {
    title: "Cloud & Microsoft 365 Migrations",
    slug: "cloud-microsoft-365-migrations",
    iconName: "cloud",
    description: "Modernize securely and scale for growth.",
    highlights: [
      "Microsoft 365 deployment and optimization",
      "Hybrid or full Azure cloud architectures",
      "Data migration with zero disruption",
      "Ongoing license tracking and optimization",
    ],
    gradientFrom: "from-cyan-600",
    gradientTo: "to-blue-500",
  },
  {
    title: "Cybersecurity & Data Protection",
    slug: "cybersecurity-data-protection",
    iconName: "shield",
    description: "Enterprise-grade security tailored for your business size.",
    highlights: [
      "Next-gen endpoint protection",
      "24×7 threat monitoring and response",
      "Secure backups and disaster recovery",
      "Email filtering and phishing defense",
    ],
    gradientFrom: "from-red-600",
    gradientTo: "to-orange-500",
  },
  {
    title: "Projects, Infrastructure & Office Moves",
    slug: "projects-infrastructure-office-moves",
    iconName: "briefcase",
    description:
      "From wiring to cloud, we execute your major technology initiatives.",
    highlights: [
      "IT project management start to finish",
      "Server-room and infrastructure design",
      "Network install and Wi-Fi planning",
      "Post-move stabilization and tuning",
    ],
    gradientFrom: "from-purple-600",
    gradientTo: "to-pink-500",
  },
  {
    title: "Help Desk & End-User Support",
    slug: "help-desk-end-user-support",
    iconName: "headphones",
    description: "Real people. Real results. Real fast.",
    highlights: [
      "Phone, email, remote and chat support",
      "Average response time under 10 minutes",
      "Onsite visits when needed",
      "Full lifecycle device support",
    ],
    gradientFrom: "from-green-600",
    gradientTo: "to-emerald-500",
  },
];

const iconMap = {
  server: Server,
  cloud: Cloud,
  shield: Shield,
  briefcase: Briefcase,
  headphones: Headphones,
};

const stats = [
  { number: "20+", label: "Years of IT Support & Excellence" },
  { number: "100+", label: "Customers Served Across USA" },
  { number: "50K+", label: "Tickets Recorded & Solved" },
];

export default function ServicesPage() {
  // Service Schema
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "iSectra IT Services",
    description:
      "Comprehensive IT services for pharmaceutical companies and small businesses",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        provider: {
          "@type": "Organization",
          name: "iSectra",
        },
        areaServed: {
          "@type": "Country",
          name: "United States",
        },
        url: `https://isectra.com/services/${service.slug}`,
      },
    })),
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
        name: "Services",
        item: "https://isectra.com/services",
      },
    ],
  };

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main>
        {/* Hero Section - Consistent white to blue gradient */}
        <section className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-40">
          {/* Gradient background - white to blue */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-blue-50 via-50% to-blue-200" />

          {/* Decorative blur elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-40 right-0 w-[600px] h-[600px] bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" />
            <div className="absolute bottom-20 right-40 w-80 h-80 bg-gradient-to-r from-cyan-600 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float-delayed" />
          </div>

          {/* Grid pattern on right side */}
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
            <div className="max-w-4xl">
              {/* Breadcrumb */}
              <div className="mb-6 animate-fadeInUp">
                <span className="text-sm font-semibold text-blue-600 tracking-wider uppercase">
                  Services
                </span>
              </div>

              {/* Title */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 animate-fadeInUp animation-delay-200 leading-tight">
                Your Virtual IT Department —
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Everything Under One Roof
                </span>
              </h1>

              {/* Description */}
              <p className="text-xl md:text-2xl text-slate-700 mb-8 leading-relaxed animate-fadeInUp animation-delay-400">
                At iSectra, we don't just provide IT services. We become your
                full-service technology partner. For growing pharmaceutical
                companies and businesses with 15-50 employees, we deliver
                end-to-end IT management—strategy, infrastructure, support,
                security—under one predictable monthly retainer.
              </p>

              {/* Trust signals */}
              <div className="flex flex-wrap gap-6 text-lg text-slate-800 mb-10 animate-fadeInUp animation-delay-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-[#76ca00]" />
                  <span className="font-medium">No hidden fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-[#76ca00]" />
                  <span className="font-medium">No vendor mark-ups</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-[#76ca00]" />
                  <span className="font-medium">No long-term contracts</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 animate-fadeInUp animation-delay-800">
                <Link
                  href="#services"
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  Explore Services
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold text-lg hover:bg-slate-50 transition-all duration-300 border-2 border-slate-200 hover:border-slate-300 shadow-sm"
                >
                  Get Free Consultation
                </Link>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-cyan-500 border-t border-blue-700">
            <div className="container mx-auto px-6 py-8">
              <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm md:text-base text-blue-50">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                  <span className="text-sm font-semibold text-blue-600 tracking-wide uppercase">
                    Our Services
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                  Complete IT Solutions
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Five core service areas that cover everything your business
                  needs
                </p>
              </div>

              {/* Service Cards */}
              <div className="grid md:grid-cols-2 gap-8">
                {services.map((service, index) => {
                  const Icon =
                    iconMap[service.iconName as keyof typeof iconMap];

                  return (
                    <Link
                      key={index}
                      href={`/services/${service.slug}`}
                      className="group relative bg-white border-2 border-slate-200 rounded-2xl p-8 hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden"
                    >
                      {/* Gradient overlay on hover */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${service.gradientFrom} ${service.gradientTo} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                      />

                      <div className="relative">
                        {/* Icon - All blue, centered */}
                        <div className="flex justify-center mb-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-slate-900 mb-3 text-center group-hover:text-blue-600 transition-colors duration-300">
                          {service.title}
                        </h3>

                        {/* Description */}
                        <p className="text-lg text-slate-600 mb-6 text-center">
                          {service.description}
                        </p>

                        {/* Highlights */}
                        <ul className="space-y-3 mb-8">
                          {service.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#76ca00]" />
                              <span className="text-slate-600">
                                {highlight}
                              </span>
                            </li>
                          ))}
                        </ul>

                        {/* Link */}
                        <div className="flex justify-center">
                          <div className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all duration-300">
                            Learn More
                            <ArrowRight className="w-5 h-5" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                  Our All-Inclusive Model
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  We've designed our services model to remove complexity and
                  align with your business
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="group bg-white border-2 border-slate-200 rounded-2xl p-8 hover:border-blue-600 hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-center mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Award className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 text-center">
                    One Monthly Retainer
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed text-center">
                    All services covered. No a-la-carte, no surprise fees.
                    Transparent pricing with no vendor markups.
                  </p>
                </div>

                <div className="group bg-white border-2 border-slate-200 rounded-2xl p-8 hover:border-[#76ca00] hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-center mb-6">
                    <div className="w-14 h-14 bg-[#76ca00] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 text-center">
                    Senior Engineers
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed text-center">
                    From day one. No waiting through Tier 1 then Tier 2. Direct
                    access to L3 talent.
                  </p>
                </div>

                <div className="group bg-white border-2 border-slate-200 rounded-2xl p-8 hover:border-cyan-600 hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-center mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-600 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 text-center">
                    Rapid Onboarding
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed text-center">
                    Many clients start seeing value within the first 30 days.
                    Free one-month trial available.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 md:py-40 overflow-hidden">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-blue-50 via-50% to-blue-200" />

          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-600 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-delayed" />
          </div>

          <div className="relative container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
                Let's Transform Your IT Together
              </h2>
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="w-20 h-px bg-slate-300" />
                <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
                <div className="w-20 h-px bg-slate-300" />
              </div>
              <p className="text-xl md:text-2xl text-slate-700 mb-12 leading-relaxed">
                Schedule your free consultation or start your free month trial
                today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact-us"
                  className="group inline-flex items-center justify-center gap-2 px-12 py-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-lg rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 px-12 py-6 bg-white text-slate-900 font-semibold text-lg rounded-xl border-2 border-slate-200 hover:border-blue-600 hover:shadow-xl transition-all duration-300"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <p className="text-sm text-slate-600 mt-8">
                Same-day response • Flexible contracts
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
