// components/sections/TrustedTwoDecades.tsx
"use client";

import { useEffect, useState } from "react";
import {
  Shield,
  Target,
  TrendingUp,
  Award,
  Clock,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

export default function TrustedTwoDecades() {
  const [mount, setMount] = useState(false);
  useEffect(() => setMount(true), []);

  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* ==== Background: animated gradients + grid (no images) ==== */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1200px 600px at 10% 20%, rgba(59,130,246,.16), transparent 55%)," +
            "radial-gradient(900px 600px at 90% 35%, rgba(6,182,212,.16), transparent 60%)," +
            "radial-gradient(1000px 800px at 50% 110%, rgba(99,102,241,.18), transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 -z-10 pointer-events-none motion-safe:animate-[spin_60s_linear_infinite]"
        style={{
          background:
            "conic-gradient(from 90deg at 70% 30%, rgba(59,130,246,.10), transparent 25%, rgba(6,182,212,.10), transparent 50%, rgba(99,102,241,.10), transparent 75%, rgba(59,130,246,.10))",
          maskImage:
            "radial-gradient(1200px 1200px at 60% 35%, rgba(0,0,0,.9), transparent 65%)",
        }}
      />
      {/* Grid (darker on right for depth) */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.08] [mask-image:linear-gradient(to_right,transparent,black_30%,black_90%)]"
      >
        <div
          className="absolute inset-0 motion-safe:animate-[gridSlide_18s_linear_infinite]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(30,58,138,.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(30,58,138,.5) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />
      </div>
      {/* Data lines */}
      <svg
        className="absolute -z-10 right-0 top-0 h-full w-full opacity-35 pointer-events-none"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
      >
        {[
          { y: 160, c: "#60a5fa" },
          { y: 230, c: "#22d3ee" },
          { y: 300, c: "#818cf8" },
          { y: 370, c: "#38bdf8" },
        ].map((row, i) => (
          <path
            key={i}
            d={`M-50 ${row.y} C 300 ${row.y - 60}, 600 ${row.y + 80}, 950 ${
              row.y
            } S 1200 ${row.y + 40}, 1250 ${row.y}`}
            fill="none"
            stroke={row.c}
            strokeOpacity="0.55"
            strokeWidth="1.6"
            strokeDasharray="6 10"
            className="motion-safe:[animation:dashmove_18s_linear_infinite]"
          />
        ))}
      </svg>

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div
            className={`inline-flex items-center gap-2 px-5 py-2 bg-white/60 backdrop-blur border border-white/40 rounded-full mb-6 shadow-sm ${
              mount
                ? "motion-safe:animate-[fadeIn_.6s_ease_forwards]"
                : "opacity-0"
            }`}
          >
            <Award className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700 tracking-wide uppercase">
              20 Years of Excellence
            </span>
          </div>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight ${
              mount
                ? "motion-safe:animate-[rise_.7s_.05s_ease_forwards]"
                : "opacity-0"
            }`}
          >
            Trusted for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Two Decades
            </span>
          </h2>
          <p
            className={`mt-5 text-xl text-slate-700 ${
              mount
                ? "motion-safe:animate-[rise_.7s_.15s_ease_forwards]"
                : "opacity-0"
            }`}
          >
            From small labs to public pharma—and from 15-employee shops to
            100-person teams—we keep mission-critical systems online, secure,
            and compliant.
          </p>
        </div>

        {/* Split: Statement + Stats */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mt-16 items-start">
          {/* Statement / Badges */}
          <div
            className={`${
              mount
                ? "motion-safe:animate-[rise_.7s_.25s_ease_forwards]"
                : "opacity-0"
            }`}
          >
            <div className="relative pl-8">
              <span className="absolute -left-0 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-blue-600 to-cyan-500" />
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-snug">
                Enterprise Infrastructure,{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Without Enterprise Cost
                </span>
              </h3>
              <p className="mt-5 text-lg text-slate-700">
                We build resilient, audit-ready environments for regulated
                industries—and make them affordable for growing SMBs.
              </p>
              {/* Industry chips (glass) */}
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  { label: "Pharma", color: "blue" },
                  { label: "Biotech", color: "green" },
                  { label: "Life Sciences", color: "blue" },
                  { label: "Growing SMBs", color: "green" },
                ].map((b) => (
                  <div
                    key={b.label}
                    className={`px-4 py-2 rounded-lg border backdrop-blur text-sm font-semibold ${
                      b.color === "blue"
                        ? "bg-white/70 border-blue-200 text-slate-800"
                        : "bg-white/70 border-lime-200 text-slate-800"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle
                        className={`w-5 h-5 ${
                          b.color === "blue"
                            ? "text-blue-600"
                            : "text-[#7dca00]"
                        }`}
                      />
                      {b.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats: glass tiles with conic halos */}
          <div
            className={`${
              mount
                ? "motion-safe:animate-[rise_.7s_.3s_ease_forwards]"
                : "opacity-0"
            }`}
          >
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Shield, label: "Years in Business", value: "20+" },
                { icon: Target, label: "Client Retention", value: "100%" },
                {
                  icon: TrendingUp,
                  label: "Employee Sweet Spot",
                  value: "15–50",
                },
                { icon: Clock, label: "Expert Support", value: "24/7" },
              ].map(({ icon: Icon, label, value }, i) => (
                <div
                  key={label}
                  className="group relative p-6 rounded-2xl border border-white/60 bg-white/70 backdrop-blur shadow-sm hover:shadow-xl transition-all"
                >
                  {/* conic ring halo */}
                  <div className="absolute -top-8 -left-8 w-24 h-24">
                    <div
                      className="w-full h-full rounded-full opacity-60 motion-safe:animate-[spin_14s_linear_infinite]"
                      style={{
                        background:
                          "conic-gradient(from 0deg, rgba(59,130,246,.0), rgba(59,130,246,.45), rgba(6,182,212,.45), rgba(99,102,241,.45), rgba(59,130,246,.0))",
                        maskImage:
                          "radial-gradient(circle at center, transparent 42%, black 43%)",
                      }}
                    />
                  </div>

                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-3xl font-bold text-slate-900">
                      {value}
                    </div>
                    <div className="text-sm font-semibold text-slate-600 mt-1">
                      {label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Three pillars (replacing green circle cards) */}
        <div className="mt-20 grid md:grid-cols-3 gap-6 lg:gap-8">
          {[
            {
              title: "Pharmaceutical Excellence",
              icon: Shield,
              text: "Audit-ready architectures that scale from research to manufacturing without downtime.",
            },
            {
              title: "SMB Partnership",
              icon: Target,
              text: "Senior engineers on call, 24×7 coverage, and zero vendor upsell—just outcomes.",
            },
            {
              title: "Predictable Model",
              icon: TrendingUp,
              text: "All-in monthly retainer. No surprises. Lower total cost than staffing internally.",
            },
          ].map(({ title, icon: Icon, text }, i) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-white/60 bg-white/70 backdrop-blur p-8 shadow-sm hover:shadow-xl transition-all overflow-hidden"
            >
              {/* subtle top accent */}
              <span className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600" />
              {/* corner glow */}
              <div className="absolute -right-12 -top-12 w-40 h-40 rounded-full blur-3xl opacity-20 bg-gradient-to-br from-blue-600 to-cyan-400" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl mb-5 flex items-center justify-center text-white bg-gradient-to-br from-blue-600 to-cyan-500 shadow">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{title}</h3>
                <p className="mt-3 text-slate-700 leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* local keyframes */}
      <style jsx>{`
        @keyframes rise {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes gridSlide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-52px);
          }
        }
        @keyframes dashmove {
          to {
            stroke-dashoffset: -1000;
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
