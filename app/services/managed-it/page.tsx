import { Metadata } from "next";
import {
  Server,
  Shield,
  Cloud,
  HeadphonesIcon,
  TrendingUp,
  Clock,
  CheckCircle2,
  Users,
  Zap,
  Lock,
  Database,
  Settings,
} from "lucide-react";
import ServiceHero from "@/components/services/servicehero";
import ServiceFeatures from "@/components/services/servicefeatures";
import ServicePricing from "@/components/services/servicepricing";
import ServiceFAQ from "@/components/services/servicefaq";
import ServiceCTA from "@/components/services/servicecta";

export const metadata: Metadata = {
  title:
    "Managed IT Services | Complete IT Outsourcing for Growing Businesses | iSectra",
  description:
    "Get enterprise-grade managed IT services without enterprise prices. 24/7 monitoring, unlimited support, and proactive maintenance for pharmaceutical companies and businesses with 15-50 employees.",
  keywords: [
    "managed IT services",
    "IT outsourcing",
    "managed service provider",
    "IT support Jacksonville",
    "pharmaceutical IT",
  ],
  openGraph: {
    title: "Managed IT Services | iSectra",
    description:
      "Enterprise-grade IT management for growing businesses. 24/7 monitoring, unlimited support, proactive maintenance.",
    type: "website",
  },
};

export default function ManagedITServicesPage() {
  // Hero highlights
  const heroHighlights = [
    "24/7 proactive monitoring & maintenance",
    "Unlimited help desk support included",
    "Strategic IT planning & budget forecasting",
    "Complete vendor & asset management",
  ];

  // Main features
  const features = [
    {
      iconName: "server",
      title: "24/7 Monitoring",
      description:
        "Proactive monitoring of all your systems, networks, and applications. We identify and resolve issues before they impact your business.",
    },
    {
      iconName: "headphones",
      title: "Unlimited Support",
      description:
        "Unlimited help desk support for all your employees. Phone, email, chat, and remote assistance with <10 minute response time.",
    },
    {
      iconName: "trending-up",
      title: "Strategic Planning",
      description:
        "Regular technology assessments and strategic planning sessions to align IT with your business goals and growth plans.",
    },
    {
      iconName: "shield",
      title: "Security Management",
      description:
        "Comprehensive cybersecurity including firewalls, antivirus, patch management, and security awareness training.",
    },
    {
      iconName: "database",
      title: "Backup & Recovery",
      description:
        "Automated daily backups with offsite replication. Disaster recovery planning and testing to protect your critical data.",
    },
    {
      iconName: "settings",
      title: "Vendor Management",
      description:
        "We handle all your technology vendors and renewals, negotiating better rates and eliminating IT procurement headaches.",
    },
  ];

  // Pricing features
  const pricingFeatures = [
    { text: "24/7 proactive monitoring & maintenance", included: true },
    { text: "Unlimited help desk support (<10 min response)", included: true },
    { text: "Strategic IT planning & vCIO services", included: true },
    { text: "Cybersecurity & compliance management", included: true },
    { text: "Daily backups & disaster recovery", included: true },
    { text: "Vendor & contract management", included: true },
    { text: "Software & hardware lifecycle management", included: true },
    { text: "Monthly reporting & business reviews", included: true },
    { text: "Employee onboarding/offboarding support", included: true },
    { text: "On-site support (Jacksonville area)", included: true },
  ];

  // FAQs
  const faqs = [
    {
      question: "What does Managed IT Services include?",
      answer:
        "Our Managed IT Services provide complete IT department functionality: 24/7 monitoring, unlimited help desk support, strategic planning, cybersecurity, backup & recovery, vendor management, and ongoing maintenance. Think of us as your outsourced IT department.",
    },
    {
      question: "How is this different from break-fix IT support?",
      answer:
        "Break-fix IT is reactive - you call when something breaks and pay per incident. Managed IT is proactive - we monitor and maintain your systems 24/7 to prevent problems. You get predictable monthly costs, faster issue resolution, and better long-term planning.",
    },
    {
      question: "What is your response time for support tickets?",
      answer:
        "Our average response time is under 10 minutes during business hours. Critical issues receive immediate attention 24/7. We prioritize based on business impact and have never missed our SLA commitments.",
    },
    {
      question: "Do you support remote employees?",
      answer:
        "Absolutely! We support employees wherever they work - office, home, or on the road. Our remote management tools allow us to provide the same fast support regardless of location.",
    },
    {
      question: "Is there a long-term contract required?",
      answer:
        "No. While we offer discounts for annual commitments, we also provide month-to-month agreements. We have never lost a customer to a competitor because we focus on delivering exceptional value and service.",
    },
    {
      question: "How quickly can you onboard our company?",
      answer:
        "Most companies are fully onboarded within 2-4 weeks. This includes documenting your environment, installing monitoring tools, training your team, and establishing support processes. We can accelerate this for urgent situations.",
    },
  ];

  return (
    <>
      <ServiceHero
        title="Managed IT Services"
        description="Get a complete IT department for less than the cost of one full-time employee. We provide enterprise-grade IT management, security, and support designed specifically for pharmaceutical companies and growing businesses."
        highlights={heroHighlights}
        gradientFrom="from-blue-600"
        gradientTo="to-cyan-500"
        iconName="server"
        imagePath="/images/managed-it.jpeg"
      />

      {/* What's Included Section */}
      <ServiceFeatures
        title="Everything You Need to Run IT Efficiently"
        subtitle="Comprehensive managed services covering all aspects of your technology"
        features={features}
        columns={3}
        gradientFrom="from-blue-600"
        gradientTo="to-cyan-500"
      />

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-4">
              How Managed IT Services Work
            </h2>
            <p className="text-xl text-center text-slate-600 mb-16">
              A simple, proven process to transform your IT operations
            </p>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Free Assessment
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    We start with a comprehensive assessment of your current IT
                    environment, security posture, and business needs. This
                    includes interviewing key stakeholders and documenting your
                    technology stack.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Custom Solution Design
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Based on the assessment, we design a customized IT
                    management plan with transparent pricing. You will see
                    exactly what is included and how we will improve your
                    operations.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Seamless Onboarding
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    We deploy monitoring tools, document your systems, integrate
                    with your workflows, and train your team. Most companies are
                    fully onboarded within 2-4 weeks with minimal disruption.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Proactive Management
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Once live, we monitor your systems 24/7, perform regular
                    maintenance, apply security patches, and provide unlimited
                    support. You focus on your business while we handle IT.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform">
                  5
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Ongoing Optimization
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Through monthly reports and quarterly business reviews, we
                    continuously optimize your IT environment, plan for growth,
                    and ensure technology drives your success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <ServicePricing
        serviceName="Managed IT Services"
        startingPrice="2,000"
        priceDescription="For a company with approximately 10 employees"
        features={pricingFeatures}
        note="Pricing scales based on number of users, devices, servers, and specific requirements. Most companies with 15-50 employees invest $3,000-$8,000/month for comprehensive managed IT services."
        gradientFrom="from-blue-600"
        gradientTo="to-cyan-500"
      />

      {/* Industries Served */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Built for Your Industry
            </h2>
            <p className="text-xl text-slate-600 mb-12">
              We specialize in serving pharmaceutical companies and growing
              businesses that need enterprise-grade IT without enterprise
              complexity.
            </p>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              {/* Pharmaceutical */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Pharmaceutical Companies
                </h3>
                <p className="text-slate-600 mb-4">
                  We understand pharma's unique needs: HIPAA compliance, FDA 21
                  CFR Part 11 validation, secure data handling, and quality
                  system integration.
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>HIPAA-compliant infrastructure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Validated systems documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Audit-ready processes</span>
                  </li>
                </ul>
              </div>

              {/* Growing Businesses */}
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border-2 border-slate-200">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Growing Businesses (15-50 Employees)
                </h3>
                <p className="text-slate-600 mb-4">
                  Perfect for companies that have outgrown basic IT but do not
                  need full enterprise solutions. We scale with you as you grow.
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Scalable infrastructure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Growth-focused planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Budget-friendly pricing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <ServiceFAQ
        title="Common Questions About Managed IT"
        subtitle="Everything you need to know before getting started"
        faqs={faqs}
        gradientFrom="from-blue-600"
        gradientTo="to-cyan-500"
      />

      {/* Final CTA with Contact Form */}
      <ServiceCTA
        title="Ready to Transform Your IT Operations?"
        description="Get a free IT assessment and see how a complete virtual IT department can save you time and money."
      />
    </>
  );
}
