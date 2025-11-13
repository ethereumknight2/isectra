// ^^^ Replace the stub above with this full component body ↓
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  Star,
  ShieldCheck,
  Headphones,
  Globe2,
} from "lucide-react";
import Link from "next/link";

export default function HeroAnimated() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  return (
    <section
      id="home"
      className="relative min-h-[84vh] flex items-center overflow-hidden pt-20 pb-20"
    >
      {/* ===== Background (unchanged) ===== */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1200px 600px at 10% 20%, rgba(59,130,246,.22), transparent 55%)," +
            "radial-gradient(900px 500px at 85% 30%, rgba(6,182,212,.22), transparent 60%)," +
            "radial-gradient(1000px 700px at 50% 110%, rgba(99,102,241,.22), transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 -z-10 pointer-events-none motion-safe:animate-[spin_60s_linear_infinite]"
        style={{
          background:
            "conic-gradient(from 90deg at 70% 30%, rgba(59,130,246,.12), transparent 25%, rgba(6,182,212,.12), transparent 50%, rgba(99,102,241,.12), transparent 75%, rgba(59,130,246,.12))",
          maskImage:
            "radial-gradient(1200px 1200px at 62% 38%, rgba(0,0,0,.95), transparent 70%)",
        }}
      />
      <div className="absolute inset-y-0 right-0 w-[56%] -z-10">
        <div className="absolute inset-0 bg-gradient-to-l from-slate-950/28 via-slate-900/16 to-transparent backdrop-blur-[1px]" />
        <div className="absolute inset-y-0 right-10 w-40 opacity-30 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
          <div className="h-full w-px bg-cyan-300/60 motion-safe:animate-[columnGlow_5s_ease-in-out_infinite]" />
          <div className="absolute left-8 h-full w-px bg-blue-300/50 motion-safe:animate-[columnGlow_6s_.6s_ease-in-out_infinite]" />
          <div className="absolute left-16 h-full w-px bg-indigo-300/50 motion-safe:animate-[columnGlow_7s_.2s_ease-in-out_infinite]" />
        </div>
      </div>
      <div aria-hidden className="absolute inset-0 -z-10 opacity-[0.09]">
        <div
          className="absolute inset-0 motion-safe:animate-[gridSlide_18s_linear_infinite]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(30,58,138,.55) 1px, transparent 1px), linear-gradient(to bottom, rgba(30,58,138,.55) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 45%, black 100%)",
          }}
        />
      </div>
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute right-[6%] top-[20%] w-[520px] h-[520px] rounded-full blur-3xl opacity-30 bg-gradient-to-r from-blue-600 to-cyan-500 motion-safe:animate-[float1_10s_ease-in-out_infinite]" />
        <div className="absolute left-[4%] bottom-[10%] w-[360px] h-[360px] rounded-full blur-3xl opacity-20 bg-gradient-to-r from-indigo-500 to-blue-500 motion-safe:animate-[float2_12s_ease-in-out_infinite]" />
        <div className="absolute right-[18%] bottom-[14%] w-[260px] h-[260px] rounded-full blur-2xl opacity-25 bg-gradient-to-tr from-sky-500 to-cyan-400 motion-safe:animate-[float2_14s_.3s_ease-in-out_infinite]" />
      </div>
      <svg
        className="absolute -z-10 right-0 top-0 h-full w-full opacity-45 pointer-events-none"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
      >
        {[
          { y: 170, c: "#60a5fa" },
          { y: 230, c: "#22d3ee" },
          { y: 290, c: "#818cf8" },
          { y: 350, c: "#38bdf8" },
          { y: 410, c: "#67e8f9" },
        ].map((row, i) => (
          <path
            key={i}
            d={`M-50 ${row.y} C 300 ${row.y - 60}, 600 ${row.y + 80}, 950 ${
              row.y
            } S 1200 ${row.y + 40}, 1250 ${row.y}`}
            fill="none"
            stroke={row.c}
            strokeOpacity="0.75"
            strokeWidth="1.8"
            strokeDasharray="6 10"
            className="motion-safe:[animation:dashmove_16s_linear_infinite]"
          />
        ))}
      </svg>
      <div className="absolute inset-0 -z-10 opacity-[0.08] mix-blend-overlay [background-image:url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.95%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%2240%22 height=%2240%22 filter=%22url(%23n)%22/></svg>')]" />

      {/* ===== Content ===== */}
      <div className="relative container mx-auto px-6">
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur border border-white/40 rounded-full mb-6 shadow-sm ${
            isVisible
              ? "motion-safe:animate-[fadeIn_.6s_ease_forwards]"
              : "opacity-0"
          }`}
        >
          <span className="w-2 h-2 bg-blue-600 rounded-full motion-safe:animate-pulse" />
          <span className="text-sm font-semibold text-blue-700 tracking-wide uppercase">
            Free Trial • No Obligations
          </span>
        </div>

        {/* ===== Split layout ===== */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT */}
          <div className="lg:col-span-7">
            <h1
              className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-slate-900 mb-6 ${
                isVisible
                  ? "motion-safe:animate-[rise_.7s_.1s_ease_forwards]"
                  : "opacity-0"
              }`}
            >
              Enterprise-Grade IT for{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Pharma &amp; Growing Businesses
              </span>
            </h1>

            <p
              className={`text-xl md:text-2xl text-slate-700 leading-relaxed mb-10 ${
                isVisible
                  ? "motion-safe:animate-[rise_.7s_.25s_ease_forwards]"
                  : "opacity-0"
              }`}
            >
              For over 20 years, iSectra has been the technology backbone for
              pharmaceutical innovators and 15-to-50-employee businesses across
              the United States.
            </p>

            <div
              className={`grid md:grid-cols-2 gap-5 mb-8 ${
                isVisible
                  ? "motion-safe:animate-[rise_.7s_.35s_ease_forwards]"
                  : "opacity-0"
              }`}
            >
              {[
                "99.99% Uptime Guaranteed",
                "<10min Response Time",
                "Never Lost a Customer",
                "35% Average Cost Savings",
              ].map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 text-slate-800 group"
                >
                  <CheckCircle className="w-6 h-6 flex-shrink-0 text-blue-600 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-lg font-medium leading-snug">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <div
              className={`flex flex-col sm:flex-row gap-4 ${
                isVisible
                  ? "motion-safe:animate-[rise_.7s_.45s_ease_forwards]"
                  : "opacity-0"
              }`}
            >
              <Link
                href="#contact"
                className="group px-8 py-4 rounded-xl font-semibold text-lg text-white transition-all duration-300 flex items-center justify-center gap-2
                           bg-[linear-gradient(90deg,#7dca00,#5ea300)] hover:shadow-2xl hover:shadow-lime-500/30 hover:scale-105"
              >
                Book Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="#how-it-works"
                className="px-8 py-4 bg-white/85 backdrop-blur text-slate-900 rounded-xl font-semibold text-lg hover:bg-white transition-all duration-300 border-2 border-white/60 hover:border-blue-300 shadow-sm flex items-center justify-center"
              >
                Start Free Trial
              </Link>
            </div>
          </div>

          {/* RIGHT — Premium Trust Panel (Bigger + Organized) */}
          <aside
            className={`lg:col-span-5 justify-self-end w-full max-w-[640px] rounded-3xl p-8 md:p-10 bg-white/80 backdrop-blur-xl border border-slate-200/80 shadow-xl relative overflow-hidden
                        ${
                          isVisible
                            ? "motion-safe:animate-[rise_.7s_.55s_ease_forwards]"
                            : "opacity-0"
                        }`}
          >
            {/* Decorative lines inside the card only */}
            <svg
              className="pointer-events-none absolute opacity-20 -z-10"
              style={{ inset: 0, position: "absolute" }}
              viewBox="0 0 800 400"
              preserveAspectRatio="none"
            >
              {[140, 200, 260].map((y, i) => (
                <path
                  key={i}
                  d={`M-50 ${y} C 150 ${y - 40}, 400 ${
                    y + 60
                  }, 750 ${y} S 900 ${y + 20}, 950 ${y}`}
                  fill="none"
                  stroke={i === 1 ? "#60a5fa" : "#22d3ee"}
                  strokeOpacity={0.5}
                  strokeWidth={1.5}
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="0"
                    to="-1000"
                    dur={`${22 + i * 2}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="stroke-dasharray"
                    values="6 14; 10 18; 6 14"
                    dur="8s"
                    repeatCount="indefinite"
                  />
                </path>
              ))}
            </svg>

            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-5">
              <div>
                <div className="inline-flex -space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                  Trusted by Pharma & SMB Clients
                </h3>
                <p className="text-base md:text-lg text-slate-700 mt-1">
                  Enterprise-grade reliability with a partner who understands
                  growth.
                </p>
              </div>
            </div>

            {/* Meta line */}
            <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-3 text-[15px] text-slate-800">
              <div className="flex items-center gap-2">
                <Globe2 className="w-4.5 h-4.5 text-blue-600" />
                Serving all 50 U.S. states
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4.5 h-4.5 text-blue-600" />
                Microsoft Certified Partner
              </div>
              <div className="flex items-center gap-2">
                <Headphones className="w-4.5 h-4.5 text-blue-600" />
                24/7 Support
              </div>
            </div>

            {/* Divider */}
            <div className="my-6 h-px bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200" />

            {/* Badges — consistent sizing, two rows */}
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-6">
              {[
                { src: "/images/HIPAA.png", alt: "HIPAA Compliant" },
                { src: "/images/ISO9001.jpeg", alt: "ISO 9001" },
                { src: "/images/ISO27001.png", alt: "ISO 27001" },
                { src: "/images/SOC2.jpg", alt: "SOC 2" },
                { src: "/images/SOX%20(1).png", alt: "SOX" },
              ].map((b) => (
                <div
                  key={b.src}
                  className="h-12 bg-white rounded-xl px-3 py-2 flex items-center justify-center border border-slate-200 shadow-sm"
                >
                  <Image
                    src={b.src}
                    alt={b.alt}
                    width={64}
                    height={32}
                    className="h-8 w-auto object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Value bullets */}
            <div className="grid md:grid-cols-2 gap-3 text-[15px]">
              {[
                "Audit-ready controls and documentation",
                "Zero-downtime migration playbooks",
                "Proactive monitoring & auto-remediation",
                "Leadership access — not ticket takers",
              ].map((t) => (
                <div key={t} className="flex items-start gap-2 text-slate-800">
                  <CheckCircle className="w-5 h-5 text-cyan-600 mt-0.5" />
                  <span>{t}</span>
                </div>
              ))}
            </div>

            {/* Chips */}
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <div className="px-3 py-2 rounded-lg bg-blue-50/70 border border-blue-100 text-blue-900 font-medium">
                Pharma • Biotech
              </div>
              <div className="px-3 py-2 rounded-lg bg-cyan-50/70 border border-cyan-100 text-cyan-900 font-medium">
                15–50 Employee SMBs
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Bottom fade + scroll cue */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/80 to-transparent pointer-events-none" />
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 motion-safe:animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-600 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-2.5 bg-blue-600 rounded-full motion-safe:animate-pulse" />
        </div>
      </div>

      {/* Keyframes */}
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
        @keyframes float1 {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(-14px, -10px, 0) scale(1.05);
          }
        }
        @keyframes float2 {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(18px, 12px, 0) scale(1.06);
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
        @keyframes columnGlow {
          0%,
          100% {
            box-shadow: 0 0 0px rgba(59, 130, 246, 0);
          }
          50% {
            box-shadow: 0 0 28px rgba(59, 130, 246, 0.35);
          }
        }
      `}</style>
    </section>
  );
}
