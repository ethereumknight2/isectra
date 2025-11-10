// components/sections/RealResults.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { TrendingUp, Clock, Server, DollarSign, Award } from "lucide-react";

/** ---------- CountUp (in-view) ---------- */
function useInViewOnce<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, inView };
}

function CountUp({
  value,
  decimals = 0,
  duration = 1200,
  prefix = "",
  suffix = "",
  lessThan = false, // for "<10min"
}: {
  value: number;
  decimals?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  lessThan?: boolean;
}) {
  const { ref, inView } = useInViewOnce<HTMLSpanElement>();
  const [display, setDisplay] = useState(decimals ? "0.0" : "0");
  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion || duration <= 0) {
      setDisplay(value.toFixed(decimals));
      return;
    }
    let raf = 0;
    const start = performance.now();
    const startVal = 0;
    const animate = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3);
      const current = startVal + (value - startVal) * eased;
      setDisplay(current.toFixed(decimals));
      if (p < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, decimals, duration, reduceMotion]);

  return (
    <span ref={ref}>
      {prefix}
      {lessThan ? "<" : ""}
      {display}
      {suffix}
    </span>
  );
}

/** ---------- Data ---------- */
type Stat = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  description: string;
  // animation config
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  lessThan?: boolean;
};

const stats: Stat[] = [
  {
    icon: TrendingUp,
    label: "Uptime",
    description: "Average uptime across all managed clients",
    value: 99.99,
    decimals: 2,
    suffix: "%",
  },
  {
    icon: Clock,
    label: "Response Time",
    description: "Average help-desk response time",
    value: 10,
    lessThan: false,
    suffix: "min",
  },
  {
    icon: Server,
    label: "Migrations",
    description:
      "Successful Microsoft 365 & server migrations with zero downtime",
    value: 100,
    suffix: "+",
  },
  {
    icon: DollarSign,
    label: "Cost Savings",
    description: "Typical IT cost savings vs internal IT team",
    value: 35,
    suffix: "%",
  },
  {
    icon: Award,
    label: "Lost Customers",
    description: "We've never lost a customer to a competitor",
    value: 0,
  },
];

/** ---------- Section ---------- */
export default function RealResults() {
  // for a tiny stagger without extra libs
  const delays = useMemo(() => stats.map((_, i) => i * 60), []);

  return (
    <section className="relative overflow-hidden py-20 lg:py-24 bg-gradient-to-br from-white via-slate-50 to-slate-100">
      {/* Subtle wash */}
      <div
        className="absolute inset-0 -z-10 opacity-70"
        style={{
          background:
            "radial-gradient(900px 500px at 12% 18%, rgba(59,130,246,.08), transparent 60%)," +
            "radial-gradient(900px 600px at 85% 30%, rgba(6,182,212,.08), transparent 65%)",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      />

      {/* Faint grid */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(100,116,139,.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(100,116,139,.35) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      {/* Gentle lines */}
      <svg
        className="absolute -z-10 right-0 top-0 h-full w-full opacity-25 pointer-events-none"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
      >
        {[
          { y: 180, c: "#93c5fd" }, // blue-300
          { y: 300, c: "#7dd3fc" }, // sky-300
          { y: 420, c: "#60a5fa" }, // blue-400
        ].map((row, i) => (
          <path
            key={i}
            d={`M-50 ${row.y} C 300 ${row.y - 60}, 600 ${row.y + 80}, 950 ${
              row.y
            } S 1200 ${row.y + 40}, 1250 ${row.y}`}
            fill="none"
            stroke={row.c}
            strokeOpacity="0.35"
            strokeWidth="1.4"
            strokeDasharray="6 12"
            className="motion-safe:[animation:dashmove_24s_linear_infinite]"
          />
        ))}
      </svg>

      <div className="container mx-auto px-6 relative z-10">
        {/* Mixed-color heading: black + blue emphasis */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            <span className="text-slate-900">Real </span>
            <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Results
            </span>
            <span className="text-slate-900">, Real </span>
            <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Impact
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Metrics our clients rely on every day
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {stats.map(
            (
              {
                icon: Icon,
                label,
                description,
                value,
                decimals,
                prefix,
                suffix,
                lessThan,
              },
              idx
            ) => (
              <div
                key={label}
                className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-blue-200 min-w-0"
                style={{ animationDelay: `${delays[idx]}ms` }}
              >
                {/* Top accent (blue gradient) */}
                <span className="absolute left-0 right-0 top-0 h-1 rounded-t-2xl bg-[linear-gradient(90deg,#3b82f6,#06b6d4)] opacity-90" />

                {/* Icon chip */}
                <div className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600 shadow-sm group-hover:shadow-cyan-300/40 transition-shadow">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Metric with count-up */}
                <div className="text-4xl md:text-5xl font-extrabold mb-1 bg-gradient-to-r from-slate-900 via-slate-900 to-blue-700 bg-clip-text text-transparent">
                  <span className="inline-block whitespace-nowrap pr-1">
                    <CountUp
                      value={value}
                      decimals={decimals ?? 0}
                      duration={1100 + idx * 150}
                      prefix={prefix}
                      suffix={suffix}
                      lessThan={!!lessThan}
                    />
                  </span>
                </div>
                {/* Label + description */}
                <div className="text-base font-semibold text-blue-700 mb-2 tracking-wide">
                  {label}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {description}
                </p>

                {/* Bottom underline — brand green on hover */}
                <span className="pointer-events-none absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 origin-left bg-[linear-gradient(90deg,#7dca00,#5ea300)] transition-transform duration-300 group-hover:scale-x-100" />
              </div>
            )
          )}
        </div>

        {/* Bottom message */}
        <div className="mt-16 text-center">
          <div className="relative rounded-2xl p-8 md:p-10 max-w-4xl mx-auto bg-white/80 backdrop-blur border border-slate-200 shadow-sm">
            <span className="absolute top-0 left-0 right-0 h-[2px] bg-[linear-gradient(90deg,#3b82f6,#06b6d4)]" />
            <p className="text-lg md:text-2xl text-slate-800 leading-relaxed font-medium">
              These metrics reflect our commitment to{" "}
              <strong className="text-slate-900">proactive support</strong>,{" "}
              <strong className="text-slate-900">business alignment</strong>,
              and{" "}
              <strong className="text-slate-900">deep domain expertise</strong>.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes dashmove {
          to {
            stroke-dashoffset: -1000;
          }
        }
      `}</style>
    </section>
  );
}
