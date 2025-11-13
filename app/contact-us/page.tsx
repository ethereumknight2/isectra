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
  Headphones,
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
        url: "https://isectra.com/og/isectra-logo.png",
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

const PHONE = "+1-845-563-0346";
const EMAIL = "info@isectra.com";
const SUPPORT_EMAIL = "support@isectra.com";
const REGIONS = ["NY", "NJ", "MA", "CT", "PA", "MD", "VA", "FL"];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: "iSectra",
  url: "https://isectra.com/",
  logo: "https://isectra.com/logo.png",
  telephone: PHONE,
  email: EMAIL,
  areaServed: [
    "US-NY",
    "US-NJ",
    "US-MA",
    "US-CT",
    "US-PA",
    "US-MD",
    "US-VA",
    "US-FL",
    "US",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: EMAIL,
      telephone: PHONE,
      areaServed: "US",
      availableLanguage: ["English"],
    },
    {
      "@type": "ContactPoint",
      contactType: "technical support",
      email: SUPPORT_EMAIL,
      telephone: PHONE,
      areaServed: "US",
      availableLanguage: ["English"],
      hoursAvailable: "24/7",
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
        {/* HERO - extra top padding so it clears the header nicely */}
        <section className="relative min-h-[58vh] flex items-center overflow-hidden pt-28 md:pt-32 pb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-blue-50 via-50% to-blue-200" />

          {/* Right side image with stronger blue overlay */}
          <div className="absolute top-0 right-0 bottom-0 left-1/2 lg:block hidden">
            <Image
              src="/images/contactpage.jpeg"
              alt="iSectra contact us"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 via-35% via-white/40 via-50% to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 opacity-30 mix-blend-multiply" />
            <div className="absolute inset-0 bg-blue-600/20" />
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
            <div className="max-w-2xl lg:max-w-[45%]">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6 animate-fadeInUp">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-blue-600 tracking-wide uppercase">
                  Contact Us
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-5 animate-fadeInUp animation-delay-200 leading-tight">
                Let's talk about your technology.
              </h1>

              <p className="text-lg md:text-xl text-slate-700 mb-6 leading-relaxed animate-fadeInUp animation-delay-400">
                We operate in {REGIONS.join(", ")} and support customers across
                all 50 states with U.S.-based senior engineers.
              </p>

              <div className="grid md:grid-cols-2 gap-3 mb-8 animate-fadeInUp animation-delay-600">
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
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-blue-600 mt-0.5" />
                    <span className="text-base font-medium">{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 animate-fadeInUp animation-delay-800">
                <Link
                  href="#contact-form"
                  className="group px-7 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold text-base hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href={`tel:${PHONE}`}
                  className="px-7 py-3.5 bg-white text-slate-900 rounded-xl font-semibold text-base hover:bg-slate-50 transition-all duration-300 border-2 border-slate-200 hover:border-slate-300 shadow-sm"
                >
                  Call {PHONE}
                </a>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/60 to-transparent pointer-events-none" />
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
                  Real Expertise, Zero Hassle
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Skip the sales pitch. Talk directly with our senior engineers
                  who understand pharma compliance, SMB growth challenges, and
                  real-world IT needs.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border-2 border-blue-100 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mb-6">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Fast, Transparent Process
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  No runaround, no hidden fees. We'll assess your setup, provide
                  honest recommendations, and get you a clear proposal — all
                  within 24 hours.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border-2 border-blue-100 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Risk-Free Trial Period
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Try our services with no long-term contract. Experience the
                  iSectra difference firsthand before committing to a full
                  partnership.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT FORM SECTION */}
        <section id="contact-form" className="py-24 md:py-32 bg-slate-50">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-blue-600 tracking-wide uppercase">
                  Get In Touch
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Fill out the form below and we'll get back to you within 24
                hours
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Form - Takes up 2/3 width (2 columns) */}
              <div className="lg:col-span-2">
                <ContactForm />
              </div>

              {/* Contact Info & Additional Details - Takes up 1/3 width (1 column) */}
              <div className="space-y-8">
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">
                    Other Ways to Reach Us
                  </h3>

                  <div className="space-y-6">
                    <a
                      href={`tel:${PHONE}`}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                        <Phone className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 mb-1">
                          Call Us
                        </p>
                        <p className="text-slate-600">{PHONE}</p>
                        <p className="text-sm text-slate-500 mt-1">
                          Available 24/7
                        </p>
                      </div>
                    </a>

                    <a
                      href={`mailto:${EMAIL}`}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                        <Mail className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 mb-1">
                          Email Us
                        </p>
                        <p className="text-slate-600">{EMAIL}</p>
                        <p className="text-sm text-slate-500 mt-1">
                          Response within 24 hours
                        </p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50">
                      <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 mb-1">
                          Service Areas
                        </p>
                        <p className="text-slate-600">
                          {REGIONS.join(", ")} and all 50 U.S. states
                        </p>
                        <p className="text-sm text-slate-500 mt-1">
                          Remote and on-site support available
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border-2 border-blue-100">
                  <div className="flex items-center gap-3 mb-4">
                    <Headphones className="w-8 h-8 text-blue-600" />
                    <h3 className="text-xl font-bold text-slate-900">
                      24/7 Support Available
                    </h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Our U.S.-based support team is always available to help.
                    Average response time under 10 minutes.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    <span>No outsourced support teams</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600 mt-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    <span>Senior engineers on every call</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
