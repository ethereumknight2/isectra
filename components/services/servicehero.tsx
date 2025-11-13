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

interface ServiceHeroProps {
  title: string;
  description: string;
  highlights?: string[];
  ctaPrimary?: string;
  ctaSecondary?: string;
  gradientFrom: string;
  gradientTo: string;
  iconName: string;
  imagePath?: string;
  trustBadge?: string;
  compact?: boolean;
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
}: ServiceHeroProps) {
  const Icon = iconMap[iconName as keyof typeof iconMap] || Server;
  const hasSecondary = Boolean(ctaSecondary);

  // Sizing presets for normal vs compact
  const minH = compact
    ? "min-h-[68svh] md:min-h-[64svh] lg:min-h-[60svh]"
    : "min-h-[90svh]";

  const padY = compact
    ? "pt-24 pb-10 md:pt-28 md:pb-12 lg:pt-32"
    : "pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-40";

  const titleClasses = compact
    ? "text-[36px] md:text-5xl lg:text-6xl leading-[1.1]"
    : "text-4xl md:text-6xl lg:text-7xl leading-tight";
  const descClasses = compact
    ? "text-base md:text-xl mb-6"
    : "text-lg md:text-2xl mb-10";
  const gridGap = compact ? "gap-4 mb-8" : "gap-5 mb-12";
  const leftWidth = compact ? "lg:max-w-[46%]" : "lg:max-w-[45%]";
  const iconBox = compact
    ? "w-14 h-14 md:w-16 md:h-16"
    : "w-16 h-16 md:w-20 md:h-20";
  const iconSize = compact
    ? "w-7 h-7 md:w-8 md:h-8"
    : "w-8 h-8 md:w-10 md:h-10";
  const ctaGap = compact
    ? hasSecondary
      ? "gap-3"
      : "gap-0"
    : hasSecondary
      ? "gap-4"
      : "gap-0";
  const imageMaskOpacity = compact ? "opacity-30" : "opacity-35";

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
          <div
            className={`mb-4 md:mb-6 inline-flex items-center justify-center ${iconBox} rounded-2xl bg-gradient-to-br ${gradientFrom} ${gradientTo} shadow-lg`}
          >
            <Icon className={`${iconSize} text-white`} />
          </div>

          <h1
            className={`font-bold text-slate-900 mb-3 md:mb-4 ${titleClasses}`}
          >
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
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm md:text-base font-medium leading-snug">
                  {highlight}
                </span>
              </div>
            ))}
          </div>

          <div className={`flex flex-col sm:flex-row ${ctaGap} mb-6`}>
            {ctaPrimary && (
              <Link
                href="/contact-us"
                className="group px-6 md:px-7 py-3 md:py-3.5 bg-gradient-to-r from-[#7dca00] to-[#64ad00] text-white rounded-xl font-semibold text-base md:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#7dca00]"
              >
                {ctaPrimary}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
            {hasSecondary && (
              <Link
                href="#pricing"
                className="px-6 md:px-7 py-3 md:py-3.5 bg-white text-slate-900 rounded-xl font-semibold text-base md:text-lg hover:bg-slate-50 border-2 border-slate-200 hover:border-blue-300 shadow-sm flex items-center justify-center gap-2"
              >
                {ctaSecondary}
              </Link>
            )}
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-xs md:text-sm text-slate-600">
              <div className="flex -space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400"
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
