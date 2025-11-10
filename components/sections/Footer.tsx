"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about-us" },
    { name: "Industries", href: "/industries" },
    { name: "Contact", href: "/contact-us" },
  ],
  services: [
    {
      name: "Cloud & Microsoft 365",
      href: "/services/cloud-microsoft-365-migrations",
    },
    { name: "Managed IT", href: "/services/managed-it" },
    { name: "Cybersecurity", href: "/services/cybersecurity-data-protection" },
    {
      name: "Projects & Moves",
      href: "/services/projects-infrastructure-office-moves",
    },
    { name: "Help Desk", href: "/services/help-desk-end-user-support" },
  ],
  resources: [
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faqs" },
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
            <div className="space-y-2.5 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Covering all 50 States</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a
                  href="tel:+18455630346"
                  className="hover:text-white transition-colors"
                >
                  (845) 563-0346
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-cyan-400 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a
                    href="mailto:support@isectra.com"
                    className="hover:text-white transition-colors"
                  >
                    Helpdesk: support@isectra.com
                  </a>
                  <a
                    href="mailto:info@isectra.com"
                    className="hover:text-white transition-colors"
                  >
                    Sales: info@isectra.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-5 flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/isectra/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/channel/UC-wt1L0VzRFdHGPnIPL3FmA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
                aria-label="YouTube"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 00.5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 002.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 002.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.5 15.6V8.4L15.8 12l-6.3 3.6z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/iSectraIT"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/iSectra/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073C0 18.062 4.388 23.027 10.125 23.927v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/Isectrait/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="mt-6">
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
          <div className="mt-6">
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
          <div className="mt-6">
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
