"use client";

import { Check, X } from "lucide-react";

const comparisons = [
  {
    feature: "Business-aligned IT strategy",
    isectra: true,
    msp: false,
  },
  {
    feature: "No vendor upselling",
    isectra: true,
    msp: false,
  },
  {
    feature: "24/7 Level 3 support",
    isectra: true,
    msp: false,
  },
  {
    feature: "All-American company",
    isectra: true,
    msp: false,
  },
  {
    feature: "No contracts required",
    isectra: true,
    msp: false,
  },
  {
    feature: "Personal relationships",
    isectra: true,
    msp: false,
  },
];

export default function WhyDifferent() {
  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Text Content */}
          <div className="space-y-6 animate-fadeInLeft">
            <h2 className="text-4xl md:text-5xl font-bold">
              We are <span className="gradient-text">not a traditional</span>{" "}
              Managed Service Provider
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              We do everything that MSPs do, but we also we align our IT support
              and support with the business mission strategy of our customers.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              MSPs treat customers as number of nodes to manage, upselling
              vendor systems and profiting from them. We work as your inhouse IT
              Department, partnering with you to solve your business problems
              with cutting edge technology at a fraction of the cost.
            </p>
          </div>

          {/* Right - Comparison Table */}
          <div className="animate-fadeInRight">
            <div className="glass rounded-2xl overflow-hidden shadow-2xl">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-6">
                <div className="grid grid-cols-3 gap-4 text-white font-bold text-center">
                  <div></div>
                  <div>iSectra</div>
                  <div>Traditional MSPs</div>
                </div>
              </div>

              {/* Comparison Rows */}
              <div className="divide-y divide-gray-200">
                {comparisons.map((item, index) => (
                  <div
                    key={item.feature}
                    className="grid grid-cols-3 gap-4 p-4 hover:bg-blue-50/50 transition-colors duration-200 items-center animate-fadeIn"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-sm md:text-base font-medium text-gray-700">
                      {item.feature}
                    </div>
                    <div className="flex justify-center">
                      {item.isectra ? (
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <Check className="w-5 h-5 text-green-600" />
                        </div>
                      ) : (
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                          <X className="w-5 h-5 text-red-600" />
                        </div>
                      )}
                    </div>
                    <div className="flex justify-center">
                      {item.msp ? (
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <Check className="w-5 h-5 text-green-600" />
                        </div>
                      ) : (
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                          <X className="w-5 h-5 text-red-600" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div
          className="grid md:grid-cols-4 gap-8 animate-fadeInUp"
          style={{ animationDelay: "0.4s" }}
        >
          {[
            { number: "20+", label: "Years Experience" },
            { number: "100%", label: "Level 3 Engineers" },
            { number: "24/7", label: "Support Available" },
            { number: "0", label: "Contracts Required" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-white shadow-lg hover-lift"
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
