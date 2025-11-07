"use client";

import {
  Shield,
  Cloud,
  Network,
  HardDrive,
  Smartphone,
  Lock,
  Database,
  Wifi,
  Server,
  Monitor,
  Wrench,
  HeadphonesIcon,
} from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Planning, implementation, administration, penetration tests, regulatory compliance",
    color: "from-blue-600 to-blue-700",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Microsoft Azure, AWS, cloud migration, and hybrid infrastructure",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: Network,
    title: "Network Management",
    description:
      "Design, implementation, monitoring, and optimization of network infrastructure",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: HardDrive,
    title: "Data Backup & Recovery",
    description:
      "Automated backups, disaster recovery, and business continuity planning",
    color: "from-blue-700 to-cyan-600",
  },
  {
    icon: Smartphone,
    title: "Device Management",
    description:
      "Complete lifecycle management for all endpoints and mobile devices",
    color: "from-cyan-600 to-blue-500",
  },
  {
    icon: Lock,
    title: "Compliance & Security",
    description: "HIPAA, SOX, CMMC, NIST frameworks and regulatory compliance",
    color: "from-blue-600 to-blue-800",
  },
  {
    icon: Database,
    title: "Database Management",
    description: "SQL Server, Oracle, MySQL administration and optimization",
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: Wifi,
    title: "Wireless Solutions",
    description: "Enterprise WiFi design, deployment, and management",
    color: "from-cyan-500 to-cyan-700",
  },
  {
    icon: Server,
    title: "Server Infrastructure",
    description:
      "Physical and virtual server management, maintenance, and support",
    color: "from-blue-700 to-blue-900",
  },
  {
    icon: Monitor,
    title: "Monitoring & Maintenance",
    description:
      "24/7 proactive monitoring, updates, and preventative maintenance",
    color: "from-cyan-600 to-blue-700",
  },
  {
    icon: Wrench,
    title: "IT Consulting",
    description:
      "Strategic planning, technology roadmaps, and digital transformation",
    color: "from-blue-600 to-cyan-600",
  },
  {
    icon: HeadphonesIcon,
    title: "Help Desk Support",
    description:
      "24/7 Level 3 technical support via phone, email, chat, and remote access",
    color: "from-cyan-500 to-blue-600",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="section-padding bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Explore All Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse through all the services we provide. All of these services
            are included in one monthly bundle for all our customers
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative card p-6 hover-lift cursor-pointer animate-fadeInUp"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
              >
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div
            className="glass rounded-3xl p-8 md:p-12 max-w-4xl mx-auto shadow-xl animate-fadeInUp"
            style={{ animationDelay: "0.6s" }}
          >
            <h3 className="text-3xl font-bold mb-4">
              Does Your Technology Help You Grow or Hold You Back?
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Do your computers, phones, laptops, printers, network, and IT
              systems empower your business? If the answer is not a big Yes, you
              must talk to us. Especially if you are a small business. Small
              business needs all the tools and support that larger companies
              have to compete.
            </p>
            <p className="text-xl font-semibold text-blue-600 mb-8">
              We provide everything that larger companies have at a fraction of
              the cost, at a set monthly price and at world-class, industry
              standard service.
            </p>
            <a href="#contact" className="btn-primary">
              Get Your Free Consultation
            </a>
          </div>
        </div>

        {/* Partnership Section */}
        <div
          className="mt-16 text-center animate-fadeInUp"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="mb-8">
            <img
              src="https://isectra.com/hs-fs/hubfs/iSectraMSSilver.png"
              alt="iSectra Microsoft Silver Partner"
              className="max-w-md mx-auto rounded-xl shadow-lg"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Along with Microsoft, our most valuable partnership, we are Partners
            & Certified with most Industry standard platforms.
          </p>
        </div>
      </div>
    </section>
  );
}
