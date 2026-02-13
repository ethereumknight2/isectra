"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ThankYouPage() {
  // Forced CSS override to ensure no layout interference from RootLayout
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      html, body { 
        margin: 0 !important;
        padding: 0 !important;
        overflow-x: hidden !important;
        background: #f0f4f8 !important;
      }
      header, footer, nav, .fixed.top-0, [class*="Header"], [class*="Footer"] { 
        display: none !important; 
        height: 0 !important;
      }
      body::before, body::after { display: none !important; content: none !important; }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div
      className="font-inter antialiased"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        minHeight: "100vh",
        zIndex: 99999,
        background:
          "linear-gradient(145deg, #f0f4f8 0%, #e8edf5 40%, #eef1f7 70%, #f5f7fa 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "60px 20px",
      }}
    >
      <div className="relative z-10 flex flex-col items-center text-center max-w-lg">
        {/* Logo */}
        <div className="mb-10 flex flex-col items-center">
          <img
            src="/images/logo.svg"
            alt="iSectra"
            className="w-20 h-20 mb-6"
          />
        </div>

        {/* Checkmark circle with site-specific gradient */}
        <div className="relative mb-8">
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)",
              boxShadow: "0 8px 32px rgba(37,99,235,0.3)",
            }}
          >
            <svg
              className="w-11 h-11 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <div
            className="absolute inset-0 rounded-full border-2 border-blue-400/25 scale-110 animate-ping"
            style={{ animationDuration: "2s" }}
          />
        </div>

        <h1 className="text-slate-900 text-3xl font-bold mb-3 font-poppins">
          You&apos;re All Set!
        </h1>
        <p className="text-slate-600 text-lg mb-2">
          Thanks for requesting your free IT assessment.
        </p>
        <p className="text-slate-500 text-base mb-10 leading-relaxed">
          A member of our team will reach out within{" "}
          <span className="text-blue-600 font-semibold">one business day</span>{" "}
          to schedule your complimentary consultation.
        </p>

        {/* What to expect card */}
        <div className="w-full rounded-2xl p-8 mb-10 text-left bg-white border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
          <h2 className="text-blue-600 font-bold text-xs mb-4 uppercase tracking-widest">
            What Happens Next
          </h2>
          <ol className="space-y-4">
            {[
              "Our team will review your submission",
              "A senior engineer calls to learn more about your environment",
              "We deliver a customized assessment with no-pressure recommendations",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center mt-0.5"
                  style={{
                    background: "linear-gradient(135deg, #2563eb, #0ea5e9)",
                  }}
                >
                  {i + 1}
                </span>
                <span className="text-slate-600 text-sm leading-snug">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </div>

        {/* Gradient Style Button to match landing page */}
        <Link
          href="/"
          className="w-full py-4 text-white font-bold rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-center mb-6"
          style={{
            background: "linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)",
            boxShadow: "0 10px 25px -5px rgba(37, 99, 235, 0.4)",
          }}
        >
          Return to iSectra.com
        </Link>

        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-slate-400 hover:text-slate-700 text-sm font-semibold transition-colors"
        >
          <svg
            className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 17l-5-5m0 0l5-5m-5 5h12"
            />
          </svg>
          Visit Homepage
        </Link>
      </div>
    </div>
  );
}
