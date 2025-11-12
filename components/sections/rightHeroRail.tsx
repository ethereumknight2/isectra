// components/hero/RightHeroRail.tsx
"use client";

import Image from "next/image";

const badges = [
  { src: "/images/HIPAA.png", alt: "HIPAA Compliant" },
  { src: "/images/ISO9001.jpeg", alt: "ISO 9001" },
  { src: "/images/ISO27001.png", alt: "ISO 27001" },
  { src: "/images/SOC2.jpg", alt: "SOC 2" },
  { src: "/images/SOX%20(1).png", alt: "SOX" },
];

export default function RightHeroRail() {
  return (
    <aside
      aria-label="Trust and compliance"
      className="pointer-events-none absolute inset-y-0 right-0 hidden lg:flex w-[44vw] max-w-[680px] min-w-[540px]"
      style={{ maskImage: "linear-gradient(to left, black, transparent 78%)" }}
    >
      <div className="relative ml-auto flex w-full items-center">
        {/* animated decorative svg */}
        <svg
          className="absolute inset-0 opacity-30 motion-safe:animate-[floatSlow_22s_ease-in-out_infinite]"
          viewBox="0 0 800 800"
          aria-hidden="true"
        >
          {/* soft radial tint */}
          <defs>
            <radialGradient id="heroRad" cx="70%" cy="45%" r="60%">
              <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.35" />
              <stop offset="60%" stopColor="#67e8f9" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="heroStroke" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
          </defs>

          <rect x="0" y="0" width="800" height="800" fill="url(#heroRad)" />

          {/* "molecule" nodes for Pharma */}
          {[
            [560, 210],
            [660, 290],
            [520, 320],
            [610, 390],
            [720, 360],
          ].map(([x, y], i) => (
            <g
              key={i}
              className="motion-safe:animate-[pulseDot_3.6s_ease-in-out_infinite]"
            >
              <circle
                cx={x}
                cy={y}
                r="5"
                fill="url(#heroStroke)"
                opacity="0.9"
              />
              <circle
                cx={x}
                cy={y}
                r="14"
                fill="none"
                stroke="url(#heroStroke)"
                strokeOpacity="0.35"
              />
            </g>
          ))}
          {/* light connector curves */}
          <path
            d="M520 320 C 560 300, 600 260, 660 290"
            fill="none"
            stroke="url(#heroStroke)"
            strokeWidth="1.5"
            strokeOpacity="0.5"
            strokeDasharray="6 10"
          />
          <path
            d="M610 390 C 650 360, 690 350, 720 360"
            fill="none"
            stroke="url(#heroStroke)"
            strokeWidth="1.5"
            strokeOpacity="0.5"
            strokeDasharray="6 12"
          />

          {/* "storefront lines" for SMBs */}
          <path
            d="M520 520 h220"
            stroke="url(#heroStroke)"
            strokeWidth="2"
            strokeOpacity="0.35"
          />
          <path
            d="M540 555 h200"
            stroke="url(#heroStroke)"
            strokeWidth="2"
            strokeOpacity="0.25"
          />
          <rect
            x="540"
            y="470"
            width="180"
            height="40"
            rx="8"
            fill="none"
            stroke="url(#heroStroke)"
            strokeOpacity="0.4"
          />
        </svg>

        {/* content card */}
        <div className="pointer-events-auto relative ml-auto mr-10 rounded-2xl border border-white/60 bg-white/75 backdrop-blur p-5 shadow-sm w-[min(92%,520px)]">
          <p className="text-sm font-semibold text-slate-700 mb-1">
            Trusted by pharma & SMB clients
          </p>
          <p className="text-[13px] text-slate-600">
            Serving all 50 U.S. states • Microsoft Certified Partner • 24/7
            Support
          </p>

          {/* badges */}
          <div className="mt-4 flex flex-wrap items-center gap-2.5">
            {badges.map((b) => (
              <div
                key={b.src}
                className="h-9 bg-white rounded px-2.5 py-1.5 shadow-sm border border-slate-200"
              >
                <Image
                  src={b.src}
                  alt={b.alt}
                  width={56}
                  height={28}
                  className="h-6 w-auto object-contain"
                  priority={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes floatSlow {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(-10px, 8px, 0);
          }
        }
        @keyframes pulseDot {
          0%,
          100% {
            opacity: 0.9;
          }
          50% {
            opacity: 0.45;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          svg {
            animation: none !important;
          }
          .motion-safe\\:animate-\\[pulseDot_3\\.6s_ease-in-out_infinite\\] {
            animation: none !important;
          }
        }
      `}</style>
    </aside>
  );
}
