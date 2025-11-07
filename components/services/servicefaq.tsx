"use client";

import { useState, useMemo } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  title?: string;
  subtitle?: string;
  faqs?: FAQItem[];
  showViewAll?: boolean;
  gradientFrom: string;
  gradientTo: string;
  /** Make section span the same width as features/cards (container max-w-7xl) */
  wide?: boolean;
}

export default function ServiceFAQ({
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about this service",
  faqs = [],
  showViewAll = true,
  gradientFrom,
  gradientTo,
  wide = true, // default to wide so it aligns with the cards below
}: ServiceFAQProps) {
  const initialOpen = faqs.length > 0 ? 0 : null;
  const [openIndex, setOpenIndex] = useState<number | null>(initialOpen);
  const toggleFAQ = (i: number) => setOpenIndex(openIndex === i ? null : i);
  const ids = useMemo(
    () => faqs.map((_, i) => `faq-panel-${i}`),
    [faqs.length]
  );

  return (
    <section className="py-20 bg-white">
      <div
        className={`container mx-auto px-6 ${wide ? "max-w-7xl" : "max-w-4xl"}`}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${gradientFrom} ${gradientTo} text-white mb-6`}
          >
            <HelpCircle className="w-8 h-8" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-slate-600">{subtitle}</p>
        </div>

        {/* FAQ Items (wider cards to match below section) */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border-2 border-slate-200 rounded-2xl overflow-hidden hover:border-blue-300 transition-colors duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-start justify-between gap-4 text-left hover:bg-slate-50 transition-colors duration-200"
                aria-expanded={openIndex === index}
                aria-controls={ids[index]}
              >
                <span className="font-semibold text-lg text-slate-900 flex-1">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                id={ids[index]}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}

          {faqs.length === 0 && (
            <div className="text-center text-slate-500">
              No FAQs yet. Check back soon.
            </div>
          )}
        </div>

        {/* View All */}
        {showViewAll && (
          <div className="text-center mt-10">
            <Link
              href="/faqs"
              className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300`}
            >
              View All FAQs
              <ChevronDown className="w-4 h-4 -rotate-90" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
