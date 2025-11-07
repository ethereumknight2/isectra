"use client";

import { Calendar, FileText, Rocket, RefreshCw, Users } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: Calendar,
    title: "Discovery Consultation",
    description:
      "We conduct a comprehensive review of your business operations, technology infrastructure, pain points, and strategic goals.",
  },
  {
    number: 2,
    icon: FileText,
    title: "Customized IT Strategy",
    description:
      "Receive a detailed assessment of your current environment with a strategic roadmap to achieve enterprise-grade IT infrastructure.",
  },
  {
    number: 3,
    icon: Rocket,
    title: "Seamless Onboarding",
    description:
      "Our team handles the complete transition, ensuring zero disruption to your daily operations while implementing best practices.",
  },
  {
    number: 4,
    icon: RefreshCw,
    title: "System Optimization",
    description:
      "We stabilize and enhance your IT systems, deploy advanced monitoring, and integrate your infrastructure into our proven platform.",
  },
  {
    number: 5,
    icon: Users,
    title: "Strategic Partnership",
    description:
      "Benefit from predictable monthly costs, continuous improvement, proactive support, and a technology partner aligned with your business vision.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="section-padding relative overflow-hidden"
    >
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50"></div>

      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #1e40af 1px, transparent 1px),
                           linear-gradient(to bottom, #1e40af 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fadeInUp">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-600/10 text-blue-600 rounded-full text-sm font-semibold tracking-wide uppercase">
              Our Process
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900">
            Your Path to{" "}
            <span className="gradient-text">Enterprise-Grade IT</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A proven methodology refined over two decades, designed to deliver
            exceptional results with minimal disruption.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="group relative animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Connector Line (Desktop Only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-full top-12 w-full h-0.5 -ml-6">
                    <div className="w-full h-full bg-gradient-to-r from-blue-600/50 to-cyan-500/50 opacity-30"></div>
                  </div>
                )}

                {/* Step Card */}
                <div className="relative h-full">
                  {/* Number Badge */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-all duration-500 group-hover:shadow-2xl group-hover:rotate-3">
                      <span className="text-3xl font-bold text-white">
                        {step.number}
                      </span>
                    </div>
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                      <step.icon className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div
          className="text-center mt-20 animate-fadeInUp"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-10 border border-slate-200">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">
              Ready to Transform Your IT Infrastructure?
            </h3>
            <p className="text-slate-600 mb-8 text-lg">
              Schedule a complimentary consultation with our team to discuss
              your technology needs and business objectives.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Calendar className="w-5 h-5" />
              Schedule Your Consultation
            </a>
            <p className="text-slate-500 mt-6 text-sm">
              No obligation • Confidential discussion • Tailored recommendations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
