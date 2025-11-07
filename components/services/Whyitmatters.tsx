// components/sections/WhyItMatters.tsx
// Server Component (no "use client")

type Card = { title: string; body: string };

interface WhyItMattersProps {
  title?: string;
  copy?: string;
  cards?: Card[];
}

export default function WhyItMatters({
  title = "Why It Matters",
  copy = "Downtime, data loss, and compliance gaps don’t just slow teams—they jeopardize revenue, reputation, and the ability to operate. A security program aligned to your size and regulations prevents incidents, shortens recovery, and keeps audits predictable.",
  cards = [
    {
      title: "Minimize Business Disruption",
      body: "Hardening, monitoring, and tested recovery reduce surprises—so incidents don’t turn into outages.",
    },
    {
      title: "Protect Data & IP",
      body: "Layered controls and least-privilege access defend sensitive records and high-value assets.",
    },
    {
      title: "Be Audit-Ready",
      body: "Mapped controls and packaged evidence make HIPAA/SOX/industry reviews faster and less painful.",
    },
  ],
}: WhyItMattersProps) {
  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      {/* Full-bleed ambient background (static — no styled-jsx) */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1100px 600px at 12% 10%, rgba(59,130,246,.18), transparent 55%)," +
            "radial-gradient(900px 520px at 88% 18%, rgba(6,182,212,.18), transparent 60%)," +
            "linear-gradient(to bottom, #ffffff 0%, #f8fbff 60%, #eef6ff 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(30,58,138,.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(30,58,138,.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-md">
            {/* simple spark glyph */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="opacity-95"
            >
              <path
                d="M12 3l1.6 3.9L18 8.5l-3.9 1.6L12 14l-1.6-3.9L6.5 8.5l3.9-1.6L12 3z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-5xl text-lg md:text-xl leading-relaxed text-slate-700">
            {copy}
          </p>
        </div>

        {/* Supporting cards */}
        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur p-6 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-2xl"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 3l2.5 5 5.5.7-4 3.7 1.1 5.6L12 16.6 6.9 18l1.1-5.6-4-3.7 5.5-.7L12 3z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                {c.title}
              </h3>
              <p className="mt-2 text-slate-700 leading-relaxed">{c.body}</p>
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 opacity-0 transition-opacity group-hover:opacity-[0.06]" />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom glow */}
      <div className="mx-auto mt-10 h-10 w-2/3 max-w-4xl rounded-full bg-gradient-to-r from-transparent via-blue-200/30 to-transparent blur-2xl" />
    </section>
  );
}
