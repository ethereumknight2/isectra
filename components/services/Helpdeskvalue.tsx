// components/sections/HelpDeskValue.tsx
// Server Component (no "use client")

type Highlight = { title: string; body: string };

interface HelpDeskValueProps {
  title?: string;
  copy?: string;
  highlights?: Highlight[]; // optional 2–6 items
}

export default function HelpDeskValue({
  title = "Managed IT Support Services Built for Small Businesses",
  copy = "Our 24×7 IT help desk gives your team fast, friendly resolutions and full transparency. With remote IT support, onsite coverage, end-user IT assistance, and device lifecycle management, you cut downtime, improve CSAT, and gain metrics—MTTR, ticket volumes, and top categories—to drive continuous improvement.",
  highlights = [
    {
      title: "24×7 Help Desk",
      body: "Real people, real time. Phone, email, chat, and remote desktop.",
    },
    {
      title: "Onsite When Needed",
      body: "Nationwide field engineers for installs and urgent hands-on fixes.",
    },
    {
      title: "Lifecycle Managed",
      body: "Procure, image, deploy, patch, replace, and retire devices.",
    },
  ],
}: HelpDeskValueProps) {
  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      {/* ambient background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1000px 600px at 10% 8%, rgba(59,130,246,.14), transparent 55%)," +
            "radial-gradient(900px 520px at 88% 18%, rgba(6,182,212,.14), transparent 60%)," +
            "linear-gradient(to bottom, #ffffff 0%, #f9fbff 60%, #eef6ff 100%)",
        }}
      />

      <div className="container mx-auto px-6 max-w-7xl">
        {/* header + copy */}
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            {title}
          </h2>
          <p className="mt-4 text-lg md:text-xl leading-relaxed text-slate-700">
            {copy}
          </p>
        </div>

        {/* optional highlights */}
        {highlights?.length > 0 && (
          <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.slice(0, 6).map((h, i) => (
              <div
                key={`${h.title}-${i}`}
                className="group relative rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur p-6 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-2xl"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
                  {/* simple check/star glyph */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 3l2.5 5 5.5.7-4 3.7 1.1 5.6L12 16.6 6.9 18l1.1-5.6-4-3.7 5.5-.7L12 3z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {h.title}
                </h3>
                <p className="mt-2 text-slate-700 leading-relaxed">{h.body}</p>
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 opacity-0 transition-opacity group-hover:opacity-[0.06]" />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* subtle bottom glow */}
      <div className="mx-auto mt-10 h-10 w-2/3 max-w-4xl rounded-full bg-gradient-to-r from-transparent via-blue-200/30 to-transparent blur-2xl" />
    </section>
  );
}
