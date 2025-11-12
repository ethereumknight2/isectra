"use client";

import {
  ArrowRight,
  CheckCircle2,
  Server,
  Shield,
  Cloud,
  HeadphonesIcon,
  Briefcase,
  Star,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const iconMap = {
  server: Server,
  shield: Shield,
  cloud: Cloud,
  headphones: HeadphonesIcon,
  briefcase: Briefcase,
};

type Crumb = { label: string; href?: string };

interface ServiceHeroProps {
  title: string;
  description: string;
  highlights?: string[];
  ctaPrimary?: string;
  ctaSecondary?: string; // optional
  gradientFrom: string;
  gradientTo: string;
  iconName: string;
  imagePath?: string;
  trustBadge?: string;
  compact?: boolean;

  /** NEW — show/hide visible breadcrumb trail (default: true) */
  showBreadcrumbs?: boolean;
  /** NEW — override crumb items; default is Home > Services > {title} */
  breadcrumbs?: Crumb[];
}

export default function ServiceHero({
  title,
  description,
  highlights = [],
  ctaPrimary = "Get Free Assessment",
  ctaSecondary,
  gradientFrom,
  gradientTo,
  iconName,
  imagePath,
  trustBadge = "Trusted by pharmaceutical and SMB clients nationwide",
  compact = false,

  showBreadcrumbs = true,
  breadcrumbs,
}: ServiceHeroProps) {
  const Icon = iconMap[iconName as keyof typeof iconMap] || Server;
  const hasSecondary = Boolean(ctaSecondary);

  // --- sizing presets for normal vs compact ---
  const minH = compact
    ? "min-h-[68svh] md:min-h-[64svh] lg:min-h-[60svh]"
    : "min-h-[90svh]";
  const padY = compact ? "pt-24 pb-10 md:pt-24 md:pb-12" : "pt-32 pb-20";
  const titleClasses = compact
    ? "text-[40px] md:text-5xl lg:text-6xl leading-[1.1]"
    : "text-5xl md:text-6xl lg:text-7xl leading-tight";
  const descClasses = compact
    ? "text-lg md:text-xl mb-6"
    : "text-xl md:text-2xl mb-10";
  const gridGap = compact ? "gap-4 mb-8" : "gap-5 mb-12";
  const leftWidth = compact ? "lg:max-w-[46%]" : "lg:max-w-[45%]";
  const iconBox = compact ? "w-16 h-16" : "w-20 h-20";
  const iconSize = compact ? "w-8 h-8" : "w-10 h-10";
  const ctaGap = compact
    ? hasSecondary
      ? "gap-3"
      : "gap-0"
    : hasSecondary
      ? "gap-4"
      : "gap-0";
  const imageMaskOpacity = compact ? "opacity-30" : "opacity-35";

  // --- default breadcrumbs if none provided ---
  const crumbItems: Crumb[] =
    breadcrumbs && breadcrumbs.length
      ? breadcrumbs
      : [
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: title },
        ];

  return (
    <section
      className={`relative flex items-center overflow-hidden ${minH} ${padY}`}
    >
      {/* background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#eef3fb] via-blue-50 via-50% to-blue-200" />

      {/* right image */}
      {imagePath && (
        <div className="absolute top-0 right-0 bottom-0 left-1/2 lg:block hidden">
          <Image
            src={imagePath}
            alt={title}
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#eef3fb] via-[#eef3fb]/85 via-30% via-white/60 via-50% to-transparent" />
          <div
            className={`absolute inset-0 bg-gradient-to-br ${gradientFrom} ${gradientTo} ${imageMaskOpacity} mix-blend-multiply`}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-slate-900/10" />
        </div>
      )}

      {/* subtle blobs (kept light) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-40 right-0 w-[520px] h-[520px] bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-full mix-blend-multiply blur-3xl opacity-10`}
        />
        <div
          className={`absolute bottom-16 right-40 w-64 h-64 bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-full mix-blend-multiply blur-3xl opacity-15`}
        />
      </div>

      <div className="relative container mx-auto px-6">
        <div className={`max-w-2xl ${leftWidth}`}>
          {/* ===== Breadcrumbs (visible, fixed-header-safe on all screens) ===== */}
          {showBreadcrumbs && (
            <nav
              aria-label="Breadcrumb"
              className="pt-16 sm:pt-16 mb-3 text-sm text-slate-600"
            >
              <ol className="flex items-center flex-wrap gap-2">
                {crumbItems.map((c, i) => {
                  const last = i === crumbItems.length - 1;
                  return (
                    <li key={i} className="flex items-center">
                      {c.href && !last ? (
                        <Link
                          href={c.href}
                          className="hover:text-blue-600 transition-colors"
                        >
                          {c.label}
                        </Link>
                      ) : (
                        <span
                          className={
                            last ? "text-blue-600 font-semibold" : undefined
                          }
                        >
                          {c.label}
                        </span>
                      )}
                      {!last && <span className="mx-2 text-slate-400">›</span>}
                    </li>
                  );
                })}
              </ol>
            </nav>
          )}

          <div
            className={`mb-6 inline-flex items-center justify-center ${iconBox} rounded-2xl bg-gradient-to-br ${gradientFrom} ${gradientTo} shadow-lg`}
          >
            <Icon className={`${iconSize} text-white`} />
          </div>

          <h1 className={`font-bold text-slate-900 mb-4 ${titleClasses}`}>
            {title}
          </h1>

          <p className={`text-slate-700 leading-relaxed ${descClasses}`}>
            {description}
          </p>

          <div className={`grid md:grid-cols-2 ${gridGap}`}>
            {highlights.slice(0, compact ? 3 : 4).map((highlight, index) => (
              <div
                key={index}
                className="flex items-start gap-2.5 text-slate-800"
              >
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5" />
                <span className="text-[15px] md:text-base font-medium leading-snug">
                  {highlight}
                </span>
              </div>
            ))}
          </div>

          <div className={`flex flex-col sm:flex-row ${ctaGap} mb-6`}>
            {ctaPrimary && (
              <Link
                href="/contact-us"
                className={`group px-7 py-3.5 bg-gradient-to-r from-[#7dca00] to-[#64ad00] text-white 
  rounded-xl font-semibold text-base md:text-lg hover:shadow-2xl hover:scale-105 
  transition-all duration-300 flex items-center justify-center gap-2 
  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#7dca00]`}
              >
                {ctaPrimary}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
            {hasSecondary && (
              <Link
                href="#pricing"
                className="px-7 py-3.5 bg-white text-slate-900 rounded-xl font-semibold text-base md:text-lg hover:bg-slate-50 border-2 border-slate-200 hover:border-blue-300 shadow-sm flex items-center justify-center gap-2"
              >
                {ctaSecondary}
              </Link>
            )}
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <div className="flex -space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="font-medium">{trustBadge}</span>
            </div>
          </div>
        </div>
      </div>

      {/* lighter bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/80 to-transparent pointer-events-none" />
    </section>
  );
}
