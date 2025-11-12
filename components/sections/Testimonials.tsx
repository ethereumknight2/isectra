// components/sections/Testimonials.tsx
"use client";

import { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";

type Testimonial = {
  text: string;
  author: string;
  company: string;
  rating: number;
  industry: string;
};

const testimonials: Testimonial[] = [
  {
    text: "iSectra provided us with outstanding IT management with excellent business acumen. They understand the need for 'real world' solutions and deliver what works for our business.",
    author: "Business Owner",
    company: "Manufacturing Company",
    rating: 5,
    industry: "Manufacturing",
  },
  {
    text: "Great staff of knowledgeable professionals with a passion for customer service that exceeds expectations.",
    author: "IT Director",
    company: "Healthcare Organization",
    rating: 5,
    industry: "Healthcare",
  },
  {
    text: "The level of expertise and responsiveness from the iSectra team is unmatched. They truly act as our IT department.",
    author: "CEO",
    company: "Professional Services Firm",
    rating: 5,
    industry: "Professional Services",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  // Spotlight cycle (subtle)
  useEffect(() => {
    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) return;
    const id = setInterval(
      () => setActive((p) => (p + 1) % testimonials.length),
      4000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden py-20 lg:py-24">
      {/* ==== Hero-like ambient background ==== */}
      {/* Color washes */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(900px 500px at 12% 18%, rgba(59,130,246,.16), transparent 60%)," +
            "radial-gradient(900px 520px at 85% 30%, rgba(6,182,212,.16), transparent 65%)," +
            "radial-gradient(1000px 700px at 50% 110%, rgba(99,102,241,.12), transparent 60%)",
        }}
      />
      {/* Slow conic shimmer */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none motion-safe:animate-[spin_60s_linear_infinite]"
        style={{
          background:
            "conic-gradient(from 90deg at 70% 30%, rgba(59,130,246,.10), transparent 25%, rgba(6,182,212,.10), transparent 50%, rgba(99,102,241,.10), transparent 75%, rgba(59,130,246,.10))",
          maskImage:
            "radial-gradient(1200px 1200px at 62% 38%, rgba(0,0,0,.95), transparent 70%)",
        }}
      />
      {/* Faint grid */}
      <div aria-hidden className="absolute inset-0 -z-10 opacity-[0.08]">
        <div
          className="absolute inset-0 motion-safe:animate-[gridSlide_22s_linear_infinite]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(30,58,138,.55) 1px, transparent 1px), linear-gradient(to bottom, rgba(30,58,138,.55) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 45%, black 100%)",
          }}
        />
      </div>
      {/* Gentle flowing lines */}
      <svg
        className="absolute -z-10 right-0 top-0 h-full w-full opacity-35 pointer-events-none"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
      >
        {[
          { y: 170, c: "#60a5fa" },
          { y: 230, c: "#22d3ee" },
          { y: 290, c: "#818cf8" },
        ].map((row, i) => (
          <path
            key={i}
            d={`M-50 ${row.y} C 300 ${row.y - 60}, 600 ${row.y + 80}, 950 ${
              row.y
            } S 1200 ${row.y + 40}, 1250 ${row.y}`}
            fill="none"
            stroke={row.c}
            strokeOpacity="0.7"
            strokeWidth="1.6"
            strokeDasharray="6 12"
            className="motion-safe:[animation:dashmove_18s_linear_infinite]"
          />
        ))}
      </svg>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header with blue gradient like other sections */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            <span className="text-slate-900">What Our </span>
            <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-lg text-slate-600 mt-3">
            Real feedback from teams running on reliable, enterprise-grade IT
          </p>
        </div>

        {/* Testimonials Grid (no logo marquee) */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => {
            const isActive = i === active;
            return (
              <article
                key={i}
                className={`relative rounded-2xl border bg-white p-7 shadow-sm transition-all duration-300
                ${
                  isActive
                    ? "border-blue-200 shadow-lg translate-y-[-2px]"
                    : "border-slate-200 hover:shadow-md"
                } motion-safe:animate-[rise_.6s_ease_forwards]`}
                style={{ animationDelay: `${i * 90}ms` }}
              >
                {/* Top accent line (blue gradient) */}
                <span className="absolute left-0 right-0 top-0 h-1 rounded-t-2xl bg-[linear-gradient(90deg,#3b82f6,#06b6d4)]" />

                {/* Quote icon chip */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 text-blue-700 grid place-items-center mb-4">
                  <Quote className="w-6 h-6" />
                </div>

                {/* Stars */}
                <div className="flex mb-3">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star
                      key={s}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-700 mb-5 leading-relaxed text-[15px]">
                  "{t.text}"
                </p>

                {/* Footer */}
                <div className="border-t border-slate-200 pt-4">
                  <p className="font-semibold text-slate-900">{t.author}</p>
                  <p className="text-sm text-slate-600">{t.company}</p>
                  <span className="mt-2 inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium">
                    {t.industry}
                  </span>
                </div>

                {/* Brand-green underline on hover (ties into your theme) */}
                <span className="pointer-events-none absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 origin-left bg-[linear-gradient(90deg,#7dca00,#5ea300)] transition-transform duration-300 group-hover:scale-x-100" />
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg text-white transition-all bg-[linear-gradient(90deg,#3b82f6,#06b6d4)] hover:shadow-2xl hover:shadow-blue-400/30 hover:translate-y-[-1px]"
          >
            Start Your Free Trial
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Keyframes borrowed from hero for cohesion */}
      <style jsx>{`
        @keyframes dashmove {
          to {
            stroke-dashoffset: -1000;
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
        @keyframes rise {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
