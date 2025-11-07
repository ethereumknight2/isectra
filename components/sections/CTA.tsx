// components/sections/CTA.tsx
"use client";

import { useEffect, useCallback, useState } from "react";
import { Phone, Mail, CalendarDays, X } from "lucide-react";
import ContactForm from "./ContactForm";

export default function CTA() {
  const [open, setOpen] = useState(false);

  // Close on Escape
  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setOpen(false);
  }, []);
  useEffect(() => {
    if (!open) return;
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onKeyDown]);

  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      {/* === ANIMATED BACKGROUND (restored) === */}
      {/* Soft radial backdrop */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1200px 700px at 10% 5%, rgba(59,130,246,.20), transparent 55%)," +
            "radial-gradient(1100px 650px at 90% 12%, rgba(6,182,212,.18), transparent 60%)," +
            "linear-gradient(to bottom, #ffffff 0%, #f8fbff 60%, #eef6ff 100%)",
        }}
      />
      {/* Animated grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(30,58,138,.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(30,58,138,.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          animation: "gridSlide 18s linear infinite",
        }}
      />
      {/* Floating blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -left-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"
        style={{ animation: "float1 14s ease-in-out infinite" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-16 -right-16 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl"
        style={{ animation: "float2 16s ease-in-out infinite" }}
      />
      {/* Vertical glow columns */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-[8%] w-[90px] rounded-full bg-gradient-to-b from-blue-200/40 via-transparent to-blue-200/40"
        style={{
          filter: "blur(12px)",
          animation: "columnGlow 8s ease-in-out infinite",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-[10%] w-[120px] rounded-full bg-gradient-to-b from-cyan-200/40 via-transparent to-cyan-200/40"
        style={{
          filter: "blur(14px)",
          animation: "columnGlow 9s ease-in-out infinite 0.6s",
        }}
      />

      {/* ===== CONTENT ===== */}
      <div className="relative container mx-auto px-6 max-w-5xl z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur border border-white/40 rounded-full mb-6 shadow-sm">
            <div className="w-2 h-2 bg-blue-600 rounded-full motion-safe:animate-pulse" />
            <span className="text-sm font-semibold text-blue-700 tracking-wide uppercase">
              Get Started
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Ready to Transform Your IT?
          </h2>
          <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">
            Book a no-obligation consult with an Engineer. Get your customized
            trial plan within 48 hours.
          </p>
        </div>

        {/* Actions */}
        <div className="mx-auto mb-8 max-w-3xl rounded-3xl border border-slate-200/80 bg-white/80 backdrop-blur-xl shadow-xl p-5">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+1-845-563-0346"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-white
                         bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-2xl hover:shadow-blue-500/30 hover:translate-y-[-1px] transition-all"
            >
              <Phone className="w-5 h-5" />
              Call (845) 563-0346
            </a>

            <a
              href="mailto:info@isectra.com"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold
                         bg-white text-slate-900 border border-slate-300 shadow-sm hover:bg-slate-50 hover:border-slate-400 transition-all"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>

            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-white
                         bg-[linear-gradient(90deg,#7dca00,#5ea300)] hover:shadow-2xl hover:shadow-lime-500/30 hover:translate-y-[-1px] transition-all"
            >
              <CalendarDays className="w-5 h-5" />
              Get Free Assessment
            </button>
          </div>
          <p className="text-slate-600 text-sm mt-4 text-center">
            Prefer forms? Open the quick form—average reply under 48 hours.
          </p>
        </div>

        {/* Trust chips */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            "Free Assessment",
            "48-Hour Response",
            "No Pressure Sales",
            "Free Month Trial",
          ].map((label) => (
            <div
              key={label}
              className="rounded-2xl border border-white/60 bg-white/70 backdrop-blur p-4 shadow-sm"
            >
              <span className="text-slate-800 text-sm font-medium">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Modal (smaller + visible close) ===== */}
      {open && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50">
          {/* Backdrop */}
          <div
            className="absolute inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          {/* Centered panel */}
          <div
            className="relative z-50 h-dvh w-dvw flex items-center justify-center p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-w-xl rounded-2xl bg-white shadow-2xl border border-slate-200">
              {/* Close button INSIDE */}
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute top-3 right-3 z-50 w-9 h-9 rounded-full bg-white/95 text-slate-900 shadow grid place-items-center hover:bg-white"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Scroll area */}
              <div className="max-h-[80vh] overflow-y-auto p-6 sm:p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Keyframes for background animation */}
      <style jsx>{`
        @keyframes gridSlide {
          0% {
            transform: translateX(0);
          }
          100% {
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
