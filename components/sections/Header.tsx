"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about-us" },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      { name: "Managed IT", href: "/services/managed-it" },
      {
        name: "Cybersecurity & Data Protection",
        href: "/services/cybersecurity-data-protection",
      },
      {
        name: "Cloud & Microsoft 365",
        href: "/services/cloud-microsoft-365-migrations",
      },
      {
        name: "Projects & Infrastructure Moves",
        href: "/services/projects-infrastructure-office-moves",
      },
      {
        name: "Help Desk & End User Support",
        href: "/services/help-desk-end-user-support",
      },
    ],
  },
  { name: "Industries", href: "/industries" },
  { name: "FAQ", href: "/faqs" },
  { name: "Contact", href: "/contact-us" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setActiveDropdown(null);
    if (activeDropdown) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [activeDropdown]);

  const toggleDropdown = (name: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header
      className={`fixed top-12 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center group"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="relative w-30 h-30 md:w-26 md:h-26 transition-transform duration-300 group-hover:scale-110">
              <img
                src="/images/logo.svg"
                alt="iSectra Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  // Services with dropdown
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center gap-1 text-slate-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2"
                    >
                      {item.name}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          toggleDropdown(item.name, e);
                        }}
                        className="p-1"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </Link>

                    {/* Dropdown menu */}
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border-2 border-slate-100 py-2 animate-fadeIn">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => setActiveDropdown(null)}
                            className="block px-6 py-3 text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  // Regular nav items
                  <Link
                    href={item.href}
                    className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/contact-us"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-slate-700" />
            ) : (
              <Menu className="w-6 h-6 text-slate-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-[600px] opacity-100 mb-4"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="py-4 space-y-2 border-t border-slate-200">
            {navigation.map((item, index) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <>
                    {/* Row with parent link + toggle chevron */}
                    <div
                      className="flex items-center justify-between w-full py-3 px-2 animate-fadeIn"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {/* Left side: parent link to /services */}
                      <Link
                        href={item.href}
                        onClick={() => {
                          // keep menu open if you want; close if you prefer:
                          setIsMobileMenuOpen(false);
                          setActiveDropdown(null);
                        }}
                        className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-200"
                      >
                        {item.name}
                      </Link>

                      {/* Right side: toggle for submenu */}
                      <button
                        type="button"
                        aria-expanded={activeDropdown === item.name}
                        aria-controls={`mobile-submenu-${item.name}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveDropdown(
                            activeDropdown === item.name ? null : item.name
                          );
                        }}
                        className="p-2 rounded-md hover:bg-slate-100 transition-colors duration-200"
                      >
                        <ChevronDown
                          className={`w-4 h-4 text-slate-700 transition-transform duration-200 ${
                            activeDropdown === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {/* Collapsible submenu */}
                    {activeDropdown === item.name && (
                      <div
                        id={`mobile-submenu-${item.name}`}
                        className="pl-4 space-y-2 animate-fadeIn"
                      >
                        {/* Optional: 'All Services' at top */}
                        <Link
                          href={item.href}
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setActiveDropdown(null);
                          }}
                          className="block py-2 px-2 text-sm font-semibold text-slate-700 hover:text-blue-600"
                        >
                          All Services
                        </Link>

                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setActiveDropdown(null);
                            }}
                            className="block text-slate-600 hover:text-blue-600 py-2 px-2 text-sm"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  // Regular nav items unchanged
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-slate-700 hover:text-blue-600 font-medium transition-colors duration-200 py-3 px-2 animate-fadeIn"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            <Link
              href="/contact-us"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 animate-fadeIn mt-4"
              style={{ animationDelay: "0.6s" }}
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
