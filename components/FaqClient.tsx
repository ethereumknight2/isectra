// components/FaqClient.tsx - Side Menu Search + Category Filter with Dynamic Counts
"use client";

import { useMemo, useState } from "react";
import { ChevronDown, CheckCircle2, HelpCircle, Search, X } from "lucide-react";

type QA = { q: string; a: string; id: string };

type CategoryConfig = {
  name: string;
  keyword: string;
};

export default function FaqClient({ faqs }: { faqs: QA[] }) {
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);
  const [category, setCategory] = useState<string>("");

  // Base category configs (counts are computed from faqs)
  const categoryConfigs: CategoryConfig[] = [
    { name: "All Questions", keyword: "" },
    { name: "Pricing & Cost", keyword: "pricing|price|cost|expensive" },
    { name: "Services", keyword: "services|onboard|support|help desk" },
    {
      name: "Trial & Contract",
      keyword: "trial|termination|switching|contract",
    },
    {
      name: "Compliance & Security",
      keyword: "compliant|compliance|data|secure|security",
    },
    { name: "Remote & Location", keyword: "remote|location|onsite|on-site" },
  ];

  // Dynamically compute counts per category
  const categories = useMemo(() => {
    return categoryConfigs.map((cfg) => {
      if (!cfg.keyword) {
        return { ...cfg, count: faqs.length };
      }

      let count = 0;
      try {
        const regex = new RegExp(cfg.keyword, "i");
        count = faqs.filter(
          (item) => regex.test(item.q) || regex.test(item.a)
        ).length;
      } catch {
        const kw = cfg.keyword.toLowerCase();
        count = faqs.filter(
          (item) =>
            item.q.toLowerCase().includes(kw) ||
            item.a.toLowerCase().includes(kw)
        ).length;
      }

      return { ...cfg, count };
    });
  }, [faqs, categoryConfigs]);

  const activeCategory =
    categories.find((c) => c.keyword === category) ?? categories[0];

  // Apply category filter first, then free-text search
  const filtered = useMemo(() => {
    let base = faqs;

    if (category) {
      try {
        const regex = new RegExp(category, "i");
        base = base.filter((item) => regex.test(item.q) || regex.test(item.a));
      } catch {
        const catLower = category.toLowerCase();
        base = base.filter(
          (item) =>
            item.q.toLowerCase().includes(catLower) ||
            item.a.toLowerCase().includes(catLower)
        );
      }
    }

    if (!query.trim()) return base;

    const q = query.toLowerCase();
    return base.filter(
      (item) =>
        item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q)
    );
  }, [faqs, query, category]);

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* LEFT SIDEBAR - Search & Categories */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 space-y-6">
              {/* Search Box */}
              <div className="bg-white rounded-2xl border-2 border-slate-200 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <Search className="w-5 h-5 text-blue-600" />
                  Search Questions
                </h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Type keywords..."
                    className="w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    aria-label="Search FAQs"
                  />
                  {query && (
                    <button
                      onClick={() => setQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                      aria-label="Clear search"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
                {query && (
                  <p className="mt-3 text-sm text-slate-600">
                    <span className="font-semibold text-blue-600">
                      {filtered.length}
                    </span>{" "}
                    result{filtered.length === 1 ? "" : "s"}
                  </p>
                )}
              </div>

              {/* Quick Categories */}
              <div className="bg-white rounded-2xl border-2 border-slate-200 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">
                  Quick Filter
                </h3>
                <div className="space-y-2">
                  {categories.map((cat, i) => (
                    <button
                      key={i}
                      onClick={() => setCategory(cat.keyword)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all ${
                        category === cat.keyword
                          ? "bg-blue-50 text-blue-700 font-semibold border-2 border-blue-200"
                          : "hover:bg-slate-50 text-slate-700 border-2 border-transparent"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{cat.name}</span>
                        <span
                          className={`text-sm ${
                            category === cat.keyword
                              ? "text-blue-600"
                              : "text-slate-400"
                          }`}
                        >
                          {cat.count}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Help Card */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border-2 border-blue-100 p-6">
                <h3 className="font-semibold text-slate-900 mb-2">
                  Can't find your answer?
                </h3>
                <p className="text-sm text-slate-700 mb-4">
                  Contact our team and we'll respond within 24 hours.
                </p>
                <a
                  href="tel:+1-845-563-0346"
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Call (845) 563-0346
                </a>
              </div>
            </div>
          </aside>

          {/* RIGHT CONTENT - FAQ Accordion */}
          <div className="lg:col-span-3">
            {/* Section Header */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-4">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-blue-600 tracking-wide uppercase">
                  Knowledge Base
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                {query
                  ? `Search Results for "${query}"`
                  : category
                    ? activeCategory.name
                    : "All Questions & Answers"}
              </h2>
              <p className="text-lg text-slate-600">
                {filtered.length}{" "}
                {filtered.length === 1 ? "question" : "questions"} available
              </p>
            </div>

            {/* FAQ Cards */}
            <div className="space-y-4">
              {filtered.map((item) => {
                const isOpen = openId === item.id;

                return (
                  <div
                    key={item.id}
                    id={item.id}
                    className={`rounded-2xl border-2 transition-all duration-300 ${
                      isOpen
                        ? "border-blue-300 bg-white shadow-lg"
                        : "border-slate-200 bg-white hover:border-blue-200 hover:shadow-md"
                    }`}
                  >
                    <button
                      onClick={() => setOpenId(isOpen ? null : item.id)}
                      className="w-full text-left p-6 md:p-8 flex items-start gap-4"
                      aria-expanded={isOpen}
                      aria-controls={`faq-${item.id}`}
                    >
                      <div
                        className={`mt-1 rounded-xl p-2.5 transition-colors ${
                          isOpen ? "bg-blue-100" : "bg-slate-100"
                        }`}
                      >
                        <HelpCircle
                          className={`w-6 h-6 ${
                            isOpen ? "text-blue-600" : "text-slate-600"
                          }`}
                        />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 pr-4">
                          {item.q}
                        </h3>
                      </div>

                      <div
                        className={`ml-auto transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        <ChevronDown className="w-6 h-6 text-slate-400" />
                      </div>
                    </button>

                    {isOpen && (
                      <div
                        id={`faq-${item.id}`}
                        className="px-6 md:px-8 pb-8 animate-fadeIn"
                      >
                        <div className="pl-14 border-l-4 border-blue-100">
                          {item.a
                            .split("\n")
                            .filter((p) => p.trim())
                            .map((p, i) => (
                              <p
                                key={i}
                                className="text-lg text-slate-700 leading-relaxed mb-4 pl-4"
                              >
                                {p}
                              </p>
                            ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* No Results */}
            {filtered.length === 0 && (
              <div className="text-center py-16 bg-white rounded-2xl border-2 border-slate-200 mt-8">
                <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
                  <Search className="w-10 h-10 text-slate-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  No results found
                </h3>
                <p className="text-slate-600 mb-6">
                  Try different keywords or{" "}
                  <button
                    onClick={() => {
                      setQuery("");
                      setCategory("");
                    }}
                    className="text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    view all questions
                  </button>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* TRUST INDICATORS - Full Width Below */}
      <div className="container mx-auto px-6 max-w-7xl mt-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-blue-600 tracking-wide uppercase">
              Why iSectra
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why Choose iSectra?
          </h2>
          <p className="text-lg text-slate-600">
            Three reasons our clients stay with us year after year
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Senior Engineers Only",
              description:
                "Not just tier-1 scripts — every engineer on our team has 3+ years experience and proper certifications",
            },
            {
              title: "Transparent Agreements",
              description:
                "No upsells, no vendor lock-in, no hidden fees — just predictable monthly service with clear value",
            },
            {
              title: "Built for Compliance",
              description:
                "Designed for uptime, security, audit readiness, and scale — so you can focus on your business",
            },
          ].map((point, i) => (
            <div
              key={i}
              className="rounded-2xl border-2 border-slate-200 bg-white p-8 hover:border-blue-200 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mt-2">
                  {point.title}
                </h3>
              </div>
              <p className="text-slate-700 leading-relaxed pl-16">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
