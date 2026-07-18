import Image from "next/image";

const complianceBadges = [
  { src: "/images/HIPAA.png", alt: "HIPAA" },
  { src: "/images/ISO9001.jpeg", alt: "ISO 9001" },
  { src: "/images/ISO27001.png", alt: "ISO 27001" },
  { src: "/images/SOC2.jpg", alt: "SOC 2" },
  { src: "/images/SOX%20(1).png", alt: "SOX" },
];

export default function ComplianceSupport() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.22),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.18),transparent_42%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

      <div className="container mx-auto px-6 relative">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-5 text-4xl font-bold text-white md:text-5xl">
            Support for Regulated Environments
          </h2>
          <p className="text-xl leading-relaxed text-slate-300">
            We support and administer systems designed to meet these compliance
            requirements.
          </p>
        </div>

        <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-4 min-[520px]:grid-cols-3 md:gap-6 lg:grid-cols-5">
          {complianceBadges.map((badge) => (
            <li
              key={badge.src}
              className="flex min-h-28 items-center justify-center rounded-2xl border border-white/15 bg-white p-4 shadow-xl shadow-black/20 md:min-h-36 md:p-6"
            >
              <Image
                src={badge.src}
                alt={badge.alt}
                width={160}
                height={80}
                quality={85}
                sizes="(max-width: 519px) 42vw, (max-width: 1023px) 28vw, 160px"
                className={`h-14 w-full max-w-40 object-contain md:h-20 ${
                  badge.src === "/images/ISO9001.jpeg"
                    ? "scale-150"
                    : badge.src === "/images/ISO27001.png"
                      ? "scale-[1.40]"
                      : ""
                }`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
