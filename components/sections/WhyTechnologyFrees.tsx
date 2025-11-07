// components/sections/WhyTechnologyFrees.tsx
"use client";

import { Target, Shield, TrendingUp, DollarSign } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Day-to-day operations covered",
    description:
      "Monitoring, updates, help desk, support—all handled seamlessly.",
  },
  {
    icon: Shield,
    title: "Strategic oversight",
    description:
      "Architecture, roadmap, licensing, vendor management aligned with your goals.",
  },
  {
    icon: TrendingUp,
    title: "Compliance and security baked in",
    description: "Not added later. Built into every system from day one.",
  },
  {
    icon: DollarSign,
    title: "Predictable cost",
    description:
      "No surprise vendor mark-ups. Transparent monthly retainer model.",
  },
];

export default function WhyTechnologyFrees() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-24 bg-white">
      {/* Calm background: subtle gradient wash + faint static grid (no animation) */}
      <div
        className="absolute inset-0 -z-10 opacity-90"
        style={{
          background:
            "radial-gradient(900px 500px at 10% 15%, rgba(59,130,246,.08), transparent 55%)," +
            "radial-gradient(900px 600px at 85% 30%, rgba(6,182,212,.08), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.05] [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(30,58,138,.55) 1px, transparent 1px), linear-gradient(to bottom, rgba(30,58,138,.55) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
            Technology Should{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Empower Your Business
            </span>
            , Not Hold It Hostage
          </h2>
          <p className="text-xl text-slate-700 leading-relaxed mb-5">
            At iSectra, we believe that many IT providers focus on the wrong
            things—servers, nodes, devices—while losing sight of your business
            goals. Rather, we work as your{" "}
            <strong>full-service IT department</strong>: strategic, proactive,
            and always aligned with your mission.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Whether you're a biotech startup scaling up for an exit or a
            30-employee professional services firm that needs reliable IT
            without hiring an entire team, you'll get:
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {benefits.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-white/60 bg-white/70 backdrop-blur p-7 shadow-sm hover:shadow-xl transition-shadow"
            >
              {/* static conic halo (no motion) */}
              <div className="absolute -top-7 -left-7 w-20 h-20 opacity-50">
                <div
                  className="w-full h-full rounded-full"
                  style={{
                    background:
                      "conic-gradient(from 0deg, rgba(59,130,246,.0), rgba(59,130,246,.35), rgba(6,182,212,.35), rgba(99,102,241,.35), rgba(59,130,246,.0))",
                    maskImage:
                      "radial-gradient(circle at center, transparent 42%, black 43%)",
                  }}
                />
              </div>

              {/* Icon chip */}
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mb-4 text-white shadow">
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
              <p className="text-slate-600">{description}</p>

              {/* hover accent line (micro-interaction only) */}
              <span className="pointer-events-none absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 origin-left bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 transition-transform duration-300 group-hover:scale-x-100" />
            </div>
          ))}
        </div>

        {/* Bottom Statement (glass) */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="rounded-2xl border border-white/60 bg-white/70 backdrop-blur p-8 shadow-sm">
            <p className="text-xl md:text-2xl font-semibold text-slate-900 leading-relaxed">
              We don't just manage your technology;{" "}
              <span className="text-blue-600">
                we integrate with your business
              </span>
              . When your business succeeds, we succeed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
