// components/sections/ContactWide.tsx
// Server Component (no "use client")

import dynamic from "next/dynamic";

const ContactForm = dynamic(() => import("@/components/sections/ContactForm"), {
  ssr: true,
});

interface ContactWideProps {
  eyebrow?: string;
  title?: string;
  copy?: string;
  phone?: string;
  email?: string;
}

export default function ContactWide({
  eyebrow = "Get Started",
  title = "Let’s Talk About Your Business",
  copy = "Schedule your free consultation or start your free month trial — no credit card required, no long-term contract.",
  phone = "(845) 563-0346",
  email = "info@isectra.com",
}: ContactWideProps) {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* ONE card that holds both columns */}
        <div className="rounded-3xl border-2 border-slate-200 bg-white shadow-xl">
          <div className="grid items-stretch lg:grid-cols-2 gap-0">
            {/* Left: Copy */}
            <div className="p-8 md:p-12 h-full flex flex-col">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-blue-600 tracking-wide uppercase">
                  {eyebrow}
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                {title}
              </h2>
              <p className="mt-4 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
                {copy}
              </p>

              {/* quick contact chips */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
                <a
                  href={`tel:+1-${phone.replace(/\D/g, "")}`}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border-2 border-slate-200 hover:border-blue-300 hover:shadow-md transition"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 text-blue-700"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3.1 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.12.81.3 1.6.54 2.36a2 2 0 0 1-.45 2.11L9 10a16 16 0 0 0 5 5l.81-1.09a2 2 0 0 1 2.11-.45c.76.24 1.55.42 2.36.54A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-semibold">
                      Call Us
                    </p>
                    <p className="text-slate-900 font-semibold">{phone}</p>
                    <p className="text-xs text-slate-500">24/7 Support</p>
                  </div>
                </a>

                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border-2 border-slate-200 hover:border-cyan-300 hover:shadow-md transition"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-100 flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 text-cyan-700"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M4 4h16v16H4z" />
                      <path d="m22 6-10 7L2 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-semibold">
                      Email
                    </p>
                    <p className="text-slate-900 font-semibold">{email}</p>
                    <p className="text-xs text-slate-500">Reply within 24h</p>
                  </div>
                </a>
              </div>

              {/* bottom CTA keeps the left column visually anchored */}
              <div className="mt-8">
                <a
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-semibold
                             bg-[linear-gradient(90deg,#7dca00,#64ad00)]
                             hover:shadow-[0_10px_24px_-10px_rgba(125,202,0,0.6)] hover:-translate-y-0.5 transition"
                >
                  Book a Free Consultation
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right: Form – constrained, shorter & same height */}
            <div className="p-8 md:p-12 border-t lg:border-t-0 lg:border-l border-slate-200 h-full">
              <div className="max-w-xl">
                {/* Optional heading for the form side (kept minimal) */}
                <h3 className="sr-only">Contact Form</h3>

                {/* Make the form fit: short & wide feel */}
                <div className="grid gap-4">
                  <ContactForm />
                </div>

                {/* small reassurance line */}
                <p className="mt-4 text-xs text-slate-500">
                  By submitting this form, you agree to be contacted about
                  iSectra services.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* subtle bottom glow to anchor the section */}
        <div className="mx-auto mt-10 h-8 w-1/2 max-w-3xl rounded-full bg-gradient-to-r from-transparent via-blue-200/30 to-transparent blur-2xl" />
      </div>
    </section>
  );
}
