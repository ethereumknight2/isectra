"use client";

import { Layers, Rocket, Headphones } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Transparency",
    description:
      "Unlike MSPs, and other IT Service companies we never upsell other vendor systems. We are just like an in-house IT department, except at a fraction of the cost.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Rocket,
    title: "Personalized Support",
    description:
      "We believe IT support should be 365x24x7. You get with Senior Technicians. No level 1, level 2, no extra charge for off-hours or holidays.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Headphones,
    title: "24x7 Uptime and Monitoring",
    description:
      "Our systems proactively monitor your network and all your devices, 365x24x7, shield from attacks, updated with the latest patches, and keeping them compliant to your industry.",
    color: "from-blue-600 to-cyan-600",
  },
];

export default function Features() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="gradient-text">iSectra</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We do not upsell vendors. We solve your business problems as your IT
            Department.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card hover-lift hover-glow p-8 group animate-fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300`}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative element */}
              <div className="mt-6 w-12 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center">
          <div
            className="glass rounded-3xl p-8 md:p-12 shadow-xl animate-fadeInUp"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 border-4 border-white flex items-center justify-center text-white font-bold"
                  >
                    ⭐
                  </div>
                ))}
              </div>
            </div>
            <blockquote className="text-xl md:text-2xl text-gray-800 italic mb-4 max-w-4xl mx-auto">
              "iSectra provided us with outstanding IT management with excellent
              business acumen. They understand the need for 'real world'
              solutions to business problems. iSectra is resourceful and their
              engineers know how to find answers to problem in the business
              process and makes good use of resources to offer solutions that
              work for your business."
            </blockquote>
            <p className="text-gray-600 font-semibold">
              - Verified Customer Review
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
