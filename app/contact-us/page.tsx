// app/contact/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Clock,
  Shield,
  Users,
} from "lucide-react";

const ContactForm = dynamic(() => import("@/components/sections/ContactForm"), {
  ssr: true,
});

export const metadata: Metadata = {
  title: "Contact iSectra | Virtual IT Department for Pharma & SMB",
  description:
    "Contact iSectra for enterprise-grade IT services targeting pharmaceutical companies and small businesses. Free consultation, no hidden fees, U.S.-based support.",
  alternates: { canonical: "https://isectra.com/contact" },
  openGraph: {
    title: "Contact iSectra | Virtual IT Department for Pharma & SMB",
    description:
      "Let's talk about your technology. Free consultation, transparent pricing, U.S.-based engineers.",
    url: "https://isectra.com/contact",
    siteName: "iSectra",
    type: "website",
    images: [
      {
        url: "https://isectra.com/og/isectra-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact iSectra",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact iSectra | Virtual IT Department for Pharma & SMB",
    description:
      "Free consultation within 24 hours. No hard sells — just real conversations.",
    images: ["https://isectra.com/og/isectra-contact.jpg"],
  },
};

const ADDRESS_LINES = ["230 Arlington Rd N", "Jacksonville, FL 32211"];
const PHONE = "+1-845-563-0346";
const EMAIL = "info@isectra.com";

/* ------------------------------ JSON-LD SCHEMA ---------------------------- */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: "iSectra",
  url: "https://isectra.com/",
  logo: "https://isectra.com/logo.png",
  telephone: PHONE,
  email: EMAIL,
  address: {
    "@type": "PostalAddress",
    streetAddress: "230 Arlington Rd N",
    addressLocality: "Jacksonville",
    addressRegion: "FL",
    postalCode: "32211",
    addressCountry: "US",
  },
  areaServed: { "@type": "Country", name: "United States" },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: EMAIL,
      telephone: PHONE,
      areaServed: "US",
      availableLanguage: ["English"],
    },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Contact iSectra",
  url: "https://isectra.com/contact",
  description:
    "Contact iSectra to schedule a free consultation. Enterprise-grade IT for pharma & SMBs.",
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
        name: "Contact",
        item: "https://isectra.com/contact",
      },
    ],
  },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "h2"],
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <main>
        {/* HERO - Service Page Style with Image */}
        <section className="relative min-h-[75vh] flex items-center overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-blue-50 via-50% to-blue-200" />

          {/* Right side image with stronger blue overlay */}
          <div className="absolute top-0 right-0 bottom-0 left-1/2 lg:block hidden">
            <Image
              src="/images/jacksonville.jpg"
              alt="Jacksonville, FL - iSectra Headquarters"
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
                  <li className="text-blue-600 font-semibold">Contact</li>
                </ol>
              </nav>

              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6 animate-fadeInUp">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-blue-600 tracking-wide uppercase">
                  Contact Us
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 animate-fadeInUp animation-delay-200 leading-tight">
                Let's talk about your technology.
              </h1>

              <p className="text-xl md:text-2xl text-slate-700 mb-8 leading-relaxed animate-fadeInUp animation-delay-400">
                We don't do hard sells — we do real conversations. At iSectra,
                we believe the best way to support your business is by first
                understanding it. Tell us about your goals, your challenges, and
                what you want your technology to do.
              </p>

              {/* Highlight Grid */}
              <div className="grid md:grid-cols-2 gap-4 mb-10 animate-fadeInUp animation-delay-600">
                {[
                  "Free 30-minute consultation",
                  "Response within 24 hours",
                  "No obligation, no pressure",
                  "U.S.-based senior engineers",
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
                <Link
                  href="#contact-form"
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href={`tel:${PHONE}`}
                  className="px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold text-lg hover:bg-slate-50 transition-all duration-300 border-2 border-slate-200 hover:border-slate-300 shadow-sm"
                >
                  Call {PHONE}
                </a>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/60 to-transparent pointer-events-none" />
        </section>

        {/* WHY REACH OUT TODAY - 3 Card Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-blue-600 tracking-wide uppercase">
                  Why iSectra
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Why Reach Out Today?
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Start your journey with a risk-free consultation and experience
                enterprise-grade IT support
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border-2 border-blue-100 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Free Consultation
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  We'll start with a free consultation to understand your
                  business and technology environment. Our senior engineers will
                  review your setup and provide actionable insights.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 border-2 border-slate-200 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center mb-6">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  No-Obligation Trial
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  We offer a no-obligation one-month free trial of our
                  full-service IT model to ensure we're the right fit.
                  Experience our 24/7 support firsthand.
                </p>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 border-2 border-cyan-100 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Transparent Pricing
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  We believe in transparency: no hidden fees, no vendor
                  mark-ups, no complicated contracts—just predictable monthly
                  service with clear value.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT INFO + MAP SECTION - 2 Columns */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-blue-600 tracking-wide uppercase">
                  Visit Us
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Company Headquarters
              </h2>
              <p className="text-xl text-slate-600">
                Based in Jacksonville, FL — serving clients across all 50 U.S.
                states
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* LEFT - Contact Information */}
              <div className="space-y-6">
                {/* Contact Cards */}
                <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        Address
                      </h3>
                      <address className="not-italic text-slate-600">
                        {ADDRESS_LINES[0]}
                        <br />
                        {ADDRESS_LINES[1]}
                      </address>
                      <Link
                        href="https://maps.google.com/?q=230%20Arlington%20Rd%20N%2C%20Jacksonville%2C%20FL%2032211"
                        target="_blank"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm mt-2"
                      >
                        View on Google Maps
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#7dca00]/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#7dca00]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        Phone
                      </h3>
                      <a
                        href={`tel:${PHONE}`}
                        className="text-slate-600 hover:text-slate-900 text-lg"
                      >
                        {PHONE}
                      </a>
                      <p className="text-sm text-slate-500 mt-1">
                        Available 24/7
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-cyan-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        Email
                      </h3>
                      <a
                        href={`mailto:${EMAIL}`}
                        className="text-slate-600 hover:text-slate-900"
                      >
                        {EMAIL}
                      </a>
                      <p className="text-sm text-slate-500 mt-1">
                        We respond within 24 hours
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service Area Note */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border-2 border-blue-100">
                  <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    Nationwide Coverage
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    Even if your business is based outside Florida, our
                    U.S.-based engineers and secure remote infrastructure mean
                    we can support you anywhere in the country.
                  </p>
                </div>
              </div>

              {/* RIGHT - Map */}
              <div>
                <div className="rounded-3xl overflow-hidden border-2 border-slate-200 shadow-lg h-full min-h-[500px]">
                  <iframe
                    title="iSectra Headquarters Map"
                    aria-label="Map showing 230 Arlington Rd N, Jacksonville, FL 32211"
                    className="w-full h-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps?q=230%20Arlington%20Rd%20N%2C%20Jacksonville%2C%20FL%2032211&output=embed"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA + CONTACT FORM COMBINED SECTION */}
        <section
          id="contact-form"
          className="py-24 md:py-32 bg-gradient-to-br from-slate-50 to-blue-50"
        >
          <div className="container mx-auto px-6 max-w-5xl">
            {/* CTA Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-blue-600 tracking-wide uppercase">
                  Get Started
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Ready to Transform Your IT?
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Schedule your free consultation today. Our senior engineers will
                respond within 24 hours — no hard sells, just real conversations
                about your technology needs.
              </p>

              {/* Quick Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-lg rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Call {PHONE}
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold text-lg rounded-xl hover:bg-slate-50 transition-all duration-300 border-2 border-slate-200 hover:border-slate-300 shadow-sm"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
              </div>

              <p className="text-sm text-slate-500">
                Or fill out the form below and we'll get back to you within 24
                hours
              </p>
            </div>

            {/* Contact Form */}
            <ContactForm />

            {/* Trust Indicators Below Form */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { icon: Clock, label: "24-Hour Response" },
                { icon: Shield, label: "No Obligation" },
                { icon: Users, label: "Free Consultation" },
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
