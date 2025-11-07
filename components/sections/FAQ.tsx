// components/sections/FAQAndNewsletter.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import {
  ChevronDown,
  Mail,
  Loader2,
  CheckCircle,
  ShieldCheck,
  BellRing,
} from "lucide-react";
import Script from "next/script";

type FAQItem = { question: string; answer: string };

const faqs: FAQItem[] = [
  {
    question: "How Do You Price Your Services?",
    answer:
      "We start with a free consultation to learn about your business... Our contracts are monthly retainers and we work within your constraints for a long-term partnership.",
  },
  {
    question: "Why Are You Different Than MSPs?",
    answer:
      "Traditional MSPs optimize “nodes.” We align technology to business drivers and outcomes—roadmaps, compliance, uptime, security, and cost of ownership.",
  },
  {
    question: "What If We Do Not Need All Your Services?",
    answer:
      "We tailor scope to needs and risk. You don’t pay for what you don’t use.",
  },
  {
    question: "How Do You Onboard Customers?",
    answer:
      "We execute a roadmap with implementation plans, quality, and risk management. Step one is 24×7 stability; then we uplift to best practices and full compliance.",
  },
  {
    question: "Are You More Expensive?",
    answer:
      "No. Counting downtime, risk, compliance, and slow response, our TCO is typically lower than internal teams or MSPs.",
  },
  {
    question: "Can You Support Us Remotely?",
    answer: "Yes—built for remote first, with on-site capability when needed.",
  },
  {
    question: "Are You Compliant?",
    answer:
      "We support HIPAA, SOX, CMMC, NIST and others—backed by two decades of regulated-industry experience.",
  },
];

export default function FAQAndNewsletter() {
  // FAQ state
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggleFAQ = (i: number) => setOpenIndex(openIndex === i ? null : i);

  // Newsletter state
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [consent, setConsent] = useState(true);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [hp, setHp] = useState(""); // honeypot

  // Sticky card activation (adds slight shadow when past header)
  const asideRef = useRef<HTMLDivElement | null>(null);
  const [raised, setRaised] = useState(false);
  useEffect(() => {
    if (!asideRef.current) return;
    const obs = new IntersectionObserver(
      (entries) => setRaised(!entries[0].isIntersecting),
      { rootMargin: "-80px 0px 0px 0px", threshold: 0 }
    );
    obs.observe(asideRef.current);
    return () => obs.disconnect();
  }, []);

  // JSON-LD for FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (hp) return; // bot
    setLoading(true);
    setMessage("");
    setIsSuccess(false);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName, consent }),
      });
      const data = await res.json();
      if (res.ok) {
        setIsSuccess(true);
        setMessage(data.message || "Subscribed! Check your inbox.");
        setEmail("");
        setFirstName("");
      } else {
        setIsSuccess(false);
        setMessage(data.error || "Failed to subscribe. Please try again.");
      }
    } catch {
      setIsSuccess(false);
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden py-24 lg:py-28 bg-gradient-to-b from-white to-slate-50"
    >
      {/* Subtle background system (very light + slow) */}
      <div
        className="absolute inset-0 -z-10 opacity-90"
        style={{
          background:
            "radial-gradient(900px 500px at 12% 15%, rgba(59,130,246,.08), transparent 55%)," +
            "radial-gradient(900px 600px at 85% 30%, rgba(6,182,212,.08), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.05] motion-safe:animate-[gridSlide_28s_linear_infinite]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(30,58,138,.45) 1px, transparent 1px), linear-gradient(to bottom, rgba(30,58,138,.45) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      {/* FAQ JSON-LD */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Answers first—then join our list for monthly insights and alerts.
          </p>
        </div>

        {/* Grid: FAQ + Newsletter */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
          {/* FAQ Left (2 cols on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl border border-white/60 bg-white/70 backdrop-blur hover:shadow-xl transition-shadow"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-lg md:text-xl font-bold text-slate-900 pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-blue-600 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <div className="px-6 pb-6 pt-0 text-slate-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Right (sticky) */}
          <div ref={asideRef} className="lg:sticky lg:top-24 h-fit">
            <div
              className={`relative rounded-2xl border border-white/60 bg-white/70 backdrop-blur p-6 md:p-7 shadow-sm transition-shadow ${
                raised ? "lg:shadow-xl" : ""
              }`}
            >
              {/* Top accent */}
              <span className="absolute top-0 left-0 right-0 h-0.5 bg-[linear-gradient(90deg,#7dca00,#5ea300)]" />
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 text-white grid place-items-center">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                  Monthly IT Insights
                </h3>
              </div>
              <p className="text-slate-600 mb-4">
                Security alerts, optimization tips, and real-world lessons. No
                spam—just signal.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Honeypot */}
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={hp}
                  onChange={(e) => setHp(e.target.value)}
                  className="hidden"
                  aria-hidden="true"
                />
                <input
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-white/60 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white/80"
                />
                <input
                  type="email"
                  placeholder="Email address *"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-white/60 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white/80"
                />

                <label className="flex items-start gap-2 text-sm text-slate-600">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1"
                  />
                  <span className="flex-1">
                    I agree to receive emails from iSectra and understand I can
                    unsubscribe at any time.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-white transition-all
                             bg-[linear-gradient(90deg,#7dca00,#5ea300)] hover:shadow-2xl hover:shadow-lime-500/30 hover:translate-y-[-1px] disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Subscribing…
                    </>
                  ) : (
                    <>Subscribe</>
                  )}
                </button>

                {message && (
                  <div
                    className={`mt-2 px-3 py-2 rounded-lg text-sm flex items-center gap-2 ${
                      isSuccess
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {isSuccess ? <CheckCircle className="w-4 h-4" /> : null}
                    {message}
                  </div>
                )}
              </form>

              {/* Trust row */}
              <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-slate-500" />
                  <span>Privacy first</span>
                </div>
                <div className="flex items-center gap-2">
                  <BellRing className="w-4 h-4 text-slate-500" />
                  <span>1–2 emails/month</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fallback CTA */}
        <div className="mt-14 text-center">
          <p className="text-slate-700">
            Still have questions?{" "}
            <a
              href="#contact"
              className="underline decoration-[length:2px] decoration-[#7dca00] underline-offset-4"
            >
              Contact us
            </a>
            .
          </p>
        </div>
      </div>

      {/* Local keyframes (very gentle) */}
      <style jsx>{`
        @keyframes gridSlide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-52px);
          }
        }
      `}</style>
    </section>
  );
}
