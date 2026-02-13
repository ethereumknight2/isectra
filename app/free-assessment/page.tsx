"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function FreeAssessmentPage() {
  const router = useRouter();

  // "Nuclear" CSS to kill global layout/grid interference
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

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source: "Free Assessment Landing Page",
          tags: ["Free IT Assessment"], // Mapped to Mailchimp
        }),
      });
      if (res.ok) router.push("/free-assessment/thank-you");
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

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
        background: "linear-gradient(145deg, #f0f4f8 0%, #e8edf5 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "60px 20px",
      }}
    >
      <div className="flex flex-col items-center mb-10 text-center">
        <img src="/images/logo.svg" alt="iSectra" className="w-22 h-22 mb-8" />
        <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.2em] mt-1">
          Free IT Assessment
        </p>
      </div>

      <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        <div className="p-8 md:p-12">
          <h1 className="text-slate-900 text-2xl font-bold mb-2 font-poppins">
            Get Your Free Assessment
          </h1>
          <p className="text-slate-500 text-sm mb-8">
            No pressure. No strings. Just expert IT strategy.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                required
                name="firstName"
                placeholder="First Name *"
                onChange={handleChange}
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 outline-none focus:border-blue-500 transition-colors"
              />
              <input
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <input
              required
              type="email"
              name="email"
              placeholder="Work Email *"
              onChange={handleChange}
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 outline-none focus:border-blue-500 transition-colors"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="phone"
                placeholder="Phone"
                onChange={handleChange}
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 outline-none focus:border-blue-500 transition-colors"
              />
              <input
                required
                name="company"
                placeholder="Company *"
                onChange={handleChange}
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <textarea
              name="message"
              placeholder="What is your biggest IT challenge?"
              onChange={handleChange}
              rows={3}
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 outline-none focus:border-blue-500 resize-none transition-colors"
            />

            {/* Gradient Button Styling */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 text-white font-bold rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
              style={{
                background: "linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)",
                boxShadow: "0 10px 25px -5px rgba(37, 99, 235, 0.4)",
              }}
            >
              {isSubmitting ? "Sending..." : "Claim My Free Assessment"}
            </button>
          </form>
        </div>

        {/* Updated Trust Strip */}
        <div className="bg-slate-50 border-t border-slate-100 p-6 flex flex-wrap justify-center gap-6">
          {[
            "20+ Years Experience",
            "Serving All 50 States",
            "No Obligation",
          ].map((item) => (
            <span
              key={item}
              className="flex items-center gap-2 text-slate-500 text-[11px] font-bold uppercase tracking-wider"
            >
              <svg
                className="w-4 h-4 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {item}
            </span>
          ))}
        </div>
      </div>

      <p className="mt-8 text-slate-400 text-xs flex items-center gap-2">
        <span>🔒</span> Your data is secure and will never be shared.
      </p>
    </div>
  );
}
