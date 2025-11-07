// components/sections/DataCenter.tsx
"use client";

import { Server, Shield, Users, Clock, CheckCircle2 } from "lucide-react";

const teamMembers = [
  {
    name: "Santiago Aristizabal",
    role: "Engineering Team",
    image: "https://isectra.com/hubfs/Santialog%20Aristizabal-3.png",
  },
  {
    name: "Azariel Israel",
    role: "Engineering Team",
    image:
      "https://isectra.com/hubfs/Azariel%20Israel%20White%20Background-1.png",
  },
];

const highlights = [
  {
    icon: Server,
    title: "State-of-the-Art Data Center",
    description: "Located in Jacksonville, FL with redundant systems",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance standards",
  },
  {
    icon: Users,
    title: "Expert Engineering Team",
    description: "All Level 3 certified IT professionals",
  },
  {
    icon: Clock,
    title: "Always Available",
    description: "365 days, 24/7 monitoring and support",
  },
];

export default function DataCenter() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-24 bg-gradient-to-b from-white to-slate-50">
      {/* Calm background: faint gradient wash + static grid (no heavy animation) */}
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
        className="absolute inset-0 -z-10 opacity-[0.05] [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(30,58,138,.45) 1px, transparent 1px), linear-gradient(to bottom, rgba(30,58,138,.45) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />
      {/* Very subtle “data-flow” lines to tie in with the system */}
      <svg
        className="absolute -z-10 right-0 top-0 h-full w-full opacity-15 pointer-events-none"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
      >
        {[
          { y: 170, c: "#7dd3fc" },
          { y: 250, c: "#93c5fd" },
          { y: 330, c: "#a5b4fc" },
        ].map((row, i) => (
          <path
            key={i}
            d={`M-50 ${row.y} C 300 ${row.y - 60}, 600 ${row.y + 80}, 950 ${
              row.y
            } S 1200 ${row.y + 40}, 1250 ${row.y}`}
            fill="none"
            stroke={row.c}
            strokeOpacity="0.5"
            strokeWidth="1.4"
            strokeDasharray="6 12"
            className="motion-safe:[animation:dashmove_26s_linear_infinite]"
          />
        ))}
      </svg>

      <div className="container mx-auto px-6 relative">
        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Data Center Image (with refined overlay) */}
          <div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-white/60 bg-white/70 backdrop-blur">
              <div className="aspect-[4/3] relative">
                <img
                  src="https://isectra.com/hs-fs/hubfs/iSectraDatacenter%20(1).jpg"
                  alt="iSectra Data Center in Jacksonville FL"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display =
                      "none";
                  }}
                />
                {/* Subtle darkening + info chips */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1.5 rounded-xl text-white/90 text-sm font-semibold bg-slate-900/50 backdrop-blur border border-white/10">
                    Our Data Center
                  </span>
                  <span className="px-3 py-1.5 rounded-xl text-white/90 text-sm font-semibold bg-slate-900/50 backdrop-blur border border-white/10">
                    Jacksonville, Florida
                  </span>
                  <span className="px-3 py-1.5 rounded-xl text-white/90 text-sm font-semibold bg-slate-900/50 backdrop-blur border border-white/10">
                    Redundant Power & Cooling
                  </span>
                </div>
                {/* Corner accent */}
                <span className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600" />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Expert Guidance{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Whenever You Need It
              </span>
            </h2>
            <p className="text-xl text-slate-700 leading-relaxed">
              Everyone at iSectra is a Level 3 IT Engineer. All our Executives
              are hands-on techs, and we only hire Engineers who have 3+ years
              of experience with proper certifications.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our support is 24×7: nights, weekends, holidays. We’re a phone
              call, email, or text away—and on site when you need us. We never
              outsource work. We are proudly an all-American company.
            </p>

            {/* Quick bullet list with brand-green ticks */}
            <ul className="grid sm:grid-cols-2 gap-3 pt-2">
              {[
                "Level 3 engineers across the team",
                "Hands-on executives",
                "On-site capability nationwide",
                "No outsourcing—ever",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 inline-flex items-center justify-center rounded-full bg-lime-100 w-6 h-6">
                    <CheckCircle2 className="w-4 h-4 text-[#7dca00]" />
                  </span>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Highlights Grid (glass tiles; neutral with subtle accents) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map(({ icon: Icon, title, description }, i) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-white/60 bg-white/70 backdrop-blur p-6 shadow-sm hover:shadow-xl transition-shadow"
            >
              {/* static conic halo (no motion) */}
              <div className="absolute -top-6 -left-6 w-20 h-20 opacity-50">
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

              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow bg-gradient-to-br from-slate-700 to-slate-800 text-white">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-1">{title}</h3>
              <p className="text-slate-600 text-sm">{description}</p>

              {/* brand-green micro accent on hover */}
              <span className="pointer-events-none absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 origin-left bg-[linear-gradient(90deg,#7dca00,#5ea300)] transition-transform duration-300 group-hover:scale-x-100" />
            </div>
          ))}
        </div>

        {/* Team Members (cards refined to match system) */}
        <div className="space-y-8">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-slate-900">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Engineering Team
            </span>
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="relative rounded-2xl border border-white/60 bg-white/70 backdrop-blur p-8 text-center shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden bg-slate-100 ring-4 ring-white/60">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display =
                        "none";
                    }}
                  />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-1">
                  {member.name}
                </h4>
                <p className="text-blue-600 font-semibold">{member.role}</p>

                {/* corner glow */}
                <div className="pointer-events-none absolute -right-12 -top-12 w-40 h-40 rounded-full blur-3xl opacity-20 bg-gradient-to-br from-blue-600 to-cyan-400" />
              </div>
            ))}
          </div>
        </div>

        {/* Key Points (glass banner with soft accent) */}
        <div className="mt-16">
          <div className="relative overflow-hidden rounded-2xl border border-white/60 bg-white/70 backdrop-blur p-8">
            <span className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600" />
            <h3 className="text-2xl font-bold mb-6 text-center text-slate-900">
              End-to-End Device & Network Management
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "End-to-end device and network management 365×24×7",
                "Every type of device is monitored, secured, updated and supported",
                "We respond in minutes (not hours and days like most IT companies)",
                "We are open 24×7, 365 days a year",
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex items-center justify-center rounded-full bg-lime-100 w-6 h-6">
                    <CheckCircle2 className="w-4 h-4 text-[#7dca00]" />
                  </span>
                  <p className="text-slate-700">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Local keyframes (very subtle) */}
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
