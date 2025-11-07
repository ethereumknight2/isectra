"use client";

import { Sparkles } from "lucide-react";

interface Stat {
  label: string;
  value: string;
  note?: string;
}

interface BusinessImpactProps {
  title?: string;
  copy?: string;
  /** Show 2–4 small metrics below the copy */
  stats?: Stat[];
}

export default function BusinessImpact({
  title = "Business Impact",
  copy = "Our turnkey approach reduces risk and accelerates time-to-productivity: fewer lost workdays, predictable budgets, and clean hand-offs to operations. Whether it’s an office IT relocation, a server-room buildout, or network cabling services, we deliver audited, documented outcomes aligned with compliance and growth.",
  stats = [
    {
      value: "30–45 days",
      label: "Time to Value",
      note: "typical onboarding window",
    },
    { value: "<10 min", label: "Avg. Response", note: "priority issues" },
    { value: "99.9%", label: "Uptime Targets", note: "SLA-backed" },
  ],
}: BusinessImpactProps) {
  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      {/* full-bleed ambient background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1000px 600px at 15% 10%, rgba(59,130,246,.18), transparent 55%)," +
            "radial-gradient(900px 520px at 85% 20%, rgba(6,182,212,.18), transparent 60%)," +
            "linear-gradient(to bottom, #ffffff 0%, #f8fbff 60%, #eef6ff 100%)",
        }}
      />
      {/* subtle moving grid, same vibe as other sections */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] motion-safe:animate-[impactGrid_22s_linear_infinite]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(30,58,138,.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(30,58,138,.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-6 max-w-7xl">
        {/* header */}
        <div className="text-center">
          <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-md">
            <Sparkles className="h-6 w-6" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900">
            {title}
          </h2>
        </div>

        {/* wide copy band */}
        <div className="mx-auto mt-8 max-w-5xl">
          <p className="text-xl md:text-[22px] leading-relaxed text-slate-700 text-center">
            {copy}
          </p>
        </div>

        {/* stats row (optional) */}
        {stats?.length > 0 && (
          <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {stats.slice(0, 4).map((s, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur p-6 shadow-lg hover:shadow-2xl hover:-translate-y-0.5 transition-all"
              >
                <div className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {s.value}
                </div>
                <div className="mt-1 text-slate-800 font-semibold">
                  {s.label}
                </div>
                {s.note && (
                  <div className="mt-1 text-sm text-slate-500">{s.note}</div>
                )}
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-[0.05] transition-opacity" />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* gentle bottom glow to anchor section */}
      <div className="mx-auto mt-10 h-10 w-2/3 max-w-4xl rounded-full bg-gradient-to-r from-transparent via-blue-200/30 to-transparent blur-2xl" />

      <style jsx>{`
        @keyframes impactGrid {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-60px);
          }
        }
      `}</style>
    </section>
  );
}
