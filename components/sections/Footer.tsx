"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Industries", href: "/industries" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    {
      name: "Cloud & Microsoft 365",
      href: "/services/cloud-microsoft-365-migrations",
    },
    { name: "Managed IT", href: "/services/managed-it-services" },
    { name: "Cybersecurity", href: "/services/cybersecurity-data-protection" },
    {
      name: "Projects & Moves",
      href: "/services/projects-infrastructure-office-moves",
    },
    { name: "Help Desk", href: "/services/help-desk-end-user-support" },
  ],
  resources: [
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Careers", href: "/careers" },
  ],
};

const complianceBadges = [
  { src: "/images/HIPAA.png", alt: "HIPAA Compliant" },
  { src: "/images/ISO9001.jpeg", alt: "ISO 9001" },
  { src: "/images/ISO27001.png", alt: "ISO 27001" },
  { src: "/images/SOC2.jpg", alt: "SOC 2" },
  { src: "/images/SOX%20(1).png", alt: "SOX" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer - Compact Grid */}
        <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo.svg"
                alt="iSectra"
                width={80}
                height={80}
                className="h-16 w-16 md:h-20 md:w-20 brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-slate-400 mb-4 max-w-sm leading-relaxed">
              Your Virtual IT Department. Enterprise-grade IT for pharma &
              growing businesses.
            </p>

            {/* Contact - Compact */}
            <div className="space-y-1.5 text-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Jacksonville, FL</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <a
                  href="tel:+19045550100"
                  className="hover:text-white transition-colors"
                >
                  (904) 555-0100
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <a
                  href="mailto:info@isectra.com"
                  className="hover:text-white transition-colors"
                >
                  info@isectra.com
                </a>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-3">Company</h3>
            <ul className="space-y-1.5">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-3">Services</h3>
            <ul className="space-y-1.5">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-3">Resources</h3>
            <ul className="space-y-1.5">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="py-4 border-t border-slate-800">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-3 ml-auto">
              {complianceBadges.map((badge) => (
                <div
                  key={badge.src}
                  className="h-10 bg-white rounded px-3 py-1.5 flex items-center justify-center"
                >
                  <Image
                    src={badge.src}
                    alt={badge.alt}
                    width={56}
                    height={28}
                    className="h-7 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="py-4 border-t border-slate-800">
          <p className="text-center text-xs text-slate-400">
            <strong> iSectra — </strong>
            <span className="text-slate-200">
              Your IT Department, Reimagined. Reliable. Transparent. Human.
            </span>{" "}
          </p>
        </div>

        {/* Bottom Bar - Minimal */}
        <div className="py-3 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} iSectra. All rights reserved.</p>
            <div className="flex items-center gap-3">
              <Link
                href="/privacy"
                className="hover:text-slate-300 transition-colors"
              >
                Privacy
              </Link>
              <span>•</span>
              <Link
                href="/terms"
                className="hover:text-slate-300 transition-colors"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
