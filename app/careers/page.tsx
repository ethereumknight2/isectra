// app/(site)/careers/page.tsx
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  Heart,
  DollarSign,
  Home,
  GraduationCap,
  Quote,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Careers at iSectra | Join the Fastest Growing IT Services Company",
  description:
    "Join iSectra, the fastest growing IT services company in America. We offer competitive salaries, full benefits, work-from-home flexibility, and a drama-free, family-oriented culture. Explore current openings.",
  alternates: { canonical: "https://isectra.com/careers" },
};

const pageUrl = "https://isectra.com/careers";
const siteName = "iSectra";
const logoUrl = "https://isectra.com/logo.png";

const qualificationQuestions = [
  "Do you want to join a company that is disrupting an age-old Industry?",
  "Do you have passion for IT and hunger for learning?",
  "Do you believe that you are a student all your life?",
  "Are you a self-starter and a self-reliant person?",
  "Do you handle tough phone calls with kindness and compassion?",
  "Do you know how to explain IT problems to a non-IT person?",
  "Are you a person of integrity, high-energy?",
];

const benefits = [
  {
    category: "Compensation & Financial",
    icon: DollarSign,
    items: [
      "Highest paid in your area",
      "Salaries are annualized & guaranteed, not per hour or per job",
      "Annual salary hikes",
      "Annual profit sharing",
      "401K with the best company match",
    ],
    bannerFrom: "from-blue-600",
    bannerTo: "to-cyan-500",
  },
  {
    category: "Health & Wellness",
    icon: Heart,
    items: [
      "Full medical benefits, health, vision, dental",
      "Disability & Life Insurance",
      "HR Advocate",
    ],
    bannerFrom: "from-emerald-600",
    bannerTo: "to-lime-500",
  },
  {
    category: "Professional Development",
    icon: GraduationCap,
    items: [
      "All certifications taken are paid by the company",
      "We are learning and improving daily",
    ],
    bannerFrom: "from-cyan-600",
    bannerTo: "to-blue-500",
  },
  {
    category: "Work-Life Balance",
    icon: Home,
    items: [
      "Family environment, we are all family people",
      "Flexible work schedules",
      "Work from Home (with visits to customer sites in the off-chance)",
      "We value work-life balance",
    ],
    bannerFrom: "from-slate-700",
    bannerTo: "to-slate-500",
  },
];

const culturePoints = [
  "Fun-loving and high-energy atmosphere",
  "We are learning and improving daily",
  "We a 100% drama-free environment",
  "We genuinely care about each other",
  "Our commitment is to customer excellence",
  "We believe in doing good by everyone",
  "Our culture is infectious!",
  "We are an all-American company",
  "We value work-life balance",
];

export default function CareersPage() {
  return (
    <>
      <main>
        {/* CUSTOM HERO WITH BETTER IMAGE POSITIONING */}
        <section className="relative bg-slate-900 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/iSectra_Culture.png"
              alt="iSectra Team Culture"
              className="w-full h-full object-cover object-center opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-20 sm:py-28 lg:py-32">
            <div className="max-w-3xl">
              {/* Icon */}
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg">
                  <svg
                    className="w-9 h-9 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Join the Fastest Growing IT Services Company in America
              </h1>

              {/* Description */}
              <p className="text-xl text-slate-200 mb-8 leading-relaxed">
                Are you passionate about IT, committed to excellence, and ready
                to be part of a drama-free, family-oriented team? If you're a
                self-starter who values learning, integrity, and kindness, we
                want to hear from you.
              </p>

              {/* Highlights */}
              <ul className="space-y-3 mb-10">
                <li className="flex items-center gap-3 text-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span>
                    Highest paid in your area with guaranteed salaries
                  </span>
                </li>
                <li className="flex items-center gap-3 text-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span>Full benefits: health, vision, dental, 401K match</span>
                </li>
                <li className="flex items-center gap-3 text-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span>100% drama-free, family-oriented environment</span>
                </li>
                <li className="flex items-center gap-3 text-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span>Work from home with flexible schedules</span>
                </li>
              </ul>

              {/* CTA Button */}
              <Link
                href="/contact-us"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-lg rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Trust Badge */}
              <div className="mt-8 flex items-center gap-2 text-slate-300">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm">
                  20+ years of excellence • Growing team • All-American company
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* INSPIRATIONAL QUOTE */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="text-center">
              <Quote className="w-12 h-12 text-white/80 mx-auto mb-6" />
              <blockquote className="text-2xl sm:text-3xl font-semibold text-white leading-relaxed mb-4">
                "Perfection is not attainable, but if we chase perfection, we
                can catch excellence"
              </blockquote>
              <cite className="text-white/90 text-lg font-medium">
                — Vince Lombardi
              </cite>
            </div>
          </div>
        </section>

        {/* ARE YOU A FIT? */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
                Are You a Fit?
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Before you apply, ask yourself these questions:
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 sm:p-12 border-2 border-blue-200 shadow-xl">
                <ul className="space-y-4">
                  {qualificationQuestions.map((question, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <span className="text-lg text-slate-800 leading-relaxed">
                        {question}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 p-6 bg-white rounded-2xl border border-blue-200">
                  <p className="text-slate-800 text-lg font-semibold mb-2">
                    If you answer "no" to any of the above, we are not the
                    company for you.
                  </p>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    If "yes", and you can get through our stringent hiring, we
                    can guarantee you will have the best career in this industry
                    you can get. Click the link below to Contact Us and tell us
                    why you would be a good fit at{" "}
                    <Link
                      href="/"
                      className="text-blue-600 hover:text-blue-700 font-semibold underline"
                    >
                      iSectra
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/contact-us"
                className="group inline-flex items-center justify-center gap-2 px-12 py-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-lg rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
              >
                Contact Us to Apply
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section id="benefits" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
                We Take Care of Our Employees
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Comprehensive benefits and support for your success
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">
                        {benefit.category}
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {benefit.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700 leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CULTURE */}
        <section id="culture" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
                Our Culture
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                What makes iSectra special
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {culturePoints.map((point, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-slate-800 text-lg leading-relaxed mt-1">
                      {point}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SIMPLE CTA */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Ready to Join the iSectra Team?
            </h2>
            <p className="text-xl text-slate-700 leading-relaxed mb-10">
              If you're passionate about IT, committed to excellence, and ready
              to be part of a company that values integrity, learning, and
              work-life balance, we want to hear from you. Apply today and
              discover why iSectra is the best place to build your IT career.
            </p>
            <Link
              href="/contact-us"
              className="group inline-flex items-center justify-center gap-2 px-12 py-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-lg rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
            >
              Contact Us to Apply
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
