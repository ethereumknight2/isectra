"use client";

import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

interface PricingFeature {
  text: string;
  included: boolean;
}

interface ServicePricingProps {
  serviceName: string;
  startingPrice: string;
  priceDescription: string;
  features: PricingFeature[];
  note?: string;
  gradientFrom: string;
  gradientTo: string;
}

export default function ServicePricing({
  serviceName,
  startingPrice,
  priceDescription,
  features,
  note,
  gradientFrom,
  gradientTo,
}: ServicePricingProps) {
  return (
    <section
      id="pricing"
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-slate-600">
              No hidden fees. No surprises. Just honest, straightforward
              pricing.
            </p>
          </div>

          {/* Pricing Card */}
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-slate-200">
            {/* Accent Bar */}
            <div
              className={`h-2 bg-gradient-to-r ${gradientFrom} ${gradientTo}`}
            />

            <div className="p-10">
              {/* Service Name */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {serviceName}
                </h3>
                <p className="text-slate-600">{priceDescription}</p>
              </div>

              {/* Price */}
              <div className="text-center mb-10">
                <div className="flex items-start justify-center gap-1 mb-2">
                  <span className="text-2xl font-semibold text-slate-900 mt-2">
                    $
                  </span>
                  <span className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    {startingPrice}
                  </span>
                  <span className="text-2xl font-semibold text-slate-600 self-end mb-3">
                    /month
                  </span>
                </div>
                <p className="text-slate-500 text-sm">
                  Starting price - scales with your needs
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-10">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-3 ${
                      feature.included ? "text-slate-900" : "text-slate-400"
                    }`}
                  >
                    <Check
                      className={`w-6 h-6 flex-shrink-0 ${
                        feature.included ? "text-green-500" : "text-slate-300"
                      }`}
                    />
                    <span className="text-lg">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Note */}
              {note && (
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
                  <p className="text-sm text-blue-900">
                    <strong>Note:</strong> {note}
                  </p>
                </div>
              )}

              {/* CTA */}
              <Link
                href="#contact"
                className={`group w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300`}
              >
                Get Your Free Assessment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <p className="text-center text-sm text-slate-500 mt-4">
                No credit card required • Free 30-day trial available
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">
              Need a custom quote for your specific needs?
            </p>
            <Link
              href="/contact"
              className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2 group"
            >
              Contact our sales team
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
