// components/sections/ServiceCTA.tsx
"use client";

import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import Link from "next/link";

interface ServiceCTAProps {
  title?: string;
  description?: string;
}

export default function ServiceCTA({
  title = "Why Choose Us — Our All-Inclusive Model",
  description = "We’ve designed our services model to remove complexity and align with your business. Here’s how we do it:",
}: ServiceCTAProps) {
  const bullets = [
    "One monthly retainer covers all the services above. No a-la-carte, no surprise fees.",
    "Transparent pricing: we don’t mark up vendor licenses or push you into unnecessary systems.",
    "Senior engineers from the start — you don’t wait through Tier 1 then Tier 2.",
    "Business-aligned IT: we focus on your outcomes (growth, compliance, cost) — not just nodes.",
    "Rapid onboarding: many clients start seeing value within the first 30 days.",
    "Flexible termination: if it’s not working, our contracts allow you to walk away.",
    "Free one-month trial available: see how we work with no obligation.",
  ];

  const lastIndex = bullets.length - 1;

  // Layout logic
  const hasLonelyOnLg = bullets.length % 3 === 1; // for lg:grid-cols-3
  const needsFillerOnXl = bullets.length % 4 !== 0; // for xl:grid-cols-4

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Ambient BG */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(1200px 600px at 10% 20%, rgba(59,130,246,.18), transparent 55%)," +
            "radial-gradient(900px 500px at 85% 30%, rgba(6,182,212,.18), transparent 60%)," +
            "radial-gradient(1000px 700px at 50% 110%, rgba(99,102,241,.18), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-20 opacity-[0.08] motion-safe:animate-[gridSlide_18s_linear_infinite]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(30,58,138,.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(30,58,138,.6) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 45%, black 100%)",
        }}
      />

      <div className="relative container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur border border-white/40 rounded-full mb-6 shadow-sm">
            <div className="w-2 h-2 bg-blue-600 rounded-full motion-safe:animate-pulse" />
            <span className="text-sm font-semibold text-blue-700 tracking-wide uppercase">
              All-Inclusive Model
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            {title}
          </h2>
          <p className="mt-4 text-lg md:text-xl text-slate-700 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {bullets.map((b, i) => {
            // On lg (3-col), if there's a lonely last card, make it span 2 cols
            const spanClass =
              hasLonelyOnLg && i === lastIndex
                ? "lg:col-span-2 xl:col-span-1" // on xl we cancel span
                : "";

            return (
              <div
                key={i}
                className={`group relative rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all ${spanClass}`}
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <p className="text-slate-800 leading-relaxed">{b}</p>
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-[0.06] transition-opacity" />
              </div>
            );
          })}

          {/* XL-only filler card to complete the row when needed */}
          {needsFillerOnXl && (
            <div className="hidden xl:block group relative rounded-2xl border border-emerald-200/70 bg-white/80 backdrop-blur p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[linear-gradient(90deg,#7dca00,#64ad00)] text-white">
                <Sparkles className="h-5 w-5" />
              </div>
              <p className="text-slate-800 leading-relaxed font-medium">
                No long-term contracts. Start with a free month and see the
                difference.
              </p>
              <div className="mt-4">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-white font-semibold
                             bg-[linear-gradient(90deg,#7dca00,#64ad00)]
                             hover:shadow-[0_10px_24px_-10px_rgba(125,202,0,0.6)] transition-all"
                >
                  Start Free Month Trial
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-lime-400 to-emerald-400 opacity-0 group-hover:opacity-[0.06] transition-opacity" />
            </div>
          )}
        </div>

        {/* CTAs */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact-us"
            className="group inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-white font-semibold shadow-[0_10px_30px_-10px_rgba(125,202,0,0.6)] transition-all
                       bg-[linear-gradient(90deg,#7dca00,#64ad00)]
                       hover:shadow-[0_14px_34px_-10px_rgba(125,202,0,0.75)] hover:-translate-y-0.5
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#7dca00]"
          >
            Schedule Your Free Consultation
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 font-semibold transition-all
                       border-2 border-[#7dca00] text-[#2c4a00]
                       hover:bg-[#7dca00] hover:text-white hover:-translate-y-0.5"
          >
            Start Free Month Trial
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        <p className="mt-4 text-center text-sm text-slate-600">
          Let’s transform your IT together.
        </p>
      </div>

      {/* Keyframes for the subtle sliding grid */}
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
