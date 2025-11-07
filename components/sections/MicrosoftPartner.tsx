// components/sections/MicrosoftPartner.tsx
"use client";

import Image from "next/image";

type Props = {
  className?: string;
  logoSrc?: string; // optional override
  compact?: boolean; // slightly tighter padding if true
};

export default function MicrosoftPartner({
  className = "",
  logoSrc = "/images/iSectraMSSilver.jpg",
  compact = false,
}: Props) {
  return (
    <section
      className={`relative overflow-hidden ${
        compact ? "py-14" : "py-20 lg:py-24"
      } bg-gradient-to-b from-white to-slate-50 ${className}`}
      aria-labelledby="ms-partner-heading"
    >
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* LEFT: Microsoft Partner lockup + caption */}
          <div className="relative rounded-2xl border border-white/60 bg-white/70 backdrop-blur shadow-sm p-8 md:p-10">
            {/* thin top accent bar to match site style */}
            <span className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600" />
            <div className="relative w-full max-w-[560px] h-32 md:h-28">
              <Image
                src={logoSrc}
                alt="iSectra — Microsoft Partner: Silver Small and Midmarket Cloud Solutions"
                fill
                className="object-contain"
                priority
              />
            </div>
            <p className="mt-6 text-center md:text-left text-sm md:text-base font-semibold text-slate-700">
              Along with Microsoft, our most valuable partnership, we are
              Partners &amp; Certified with most industry-standard platforms.
            </p>
          </div>

          {/* RIGHT: Copy block aligned with homepage tone */}
          <div>
            <p className="text-xs font-extrabold tracking-widest text-[#7dca00]">
              IT AS YOUR BUSINESS PARTNER
            </p>
            <h2
              id="ms-partner-heading"
              className="mt-2 text-4xl md:text-5xl font-bold leading-tight text-slate-900"
            >
              Does Your Technology Help You Grow or Hold You Back?
            </h2>
            <p className="mt-4 text-lg text-slate-700 leading-relaxed">
              Do your computers, phones, laptops, printers, network, and IT
              systems empower your business? If the answer is not a big Yes, you
              must talk to us—especially if you are a small business. SMBs need
              the tools and support larger companies have, at a fraction of the
              cost, on a set monthly price, and at world-class,
              industry-standard service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
