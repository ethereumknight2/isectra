// components/services/servicefeatures.tsx
"use client";

import {
  Server,
  Shield,
  Cloud,
  HeadphonesIcon,
  TrendingUp,
  Database,
  Settings,
  Lock,
  Zap,
  Users,
  CheckCircle2,
  AlertTriangle,
  FileText,
  BarChart,
  Briefcase,
} from "lucide-react";

const iconMap = {
  server: Server,
  shield: Shield,
  cloud: Cloud,
  headphones: HeadphonesIcon,
  "trending-up": TrendingUp,
  database: Database,
  settings: Settings,
  lock: Lock,
  zap: Zap,
  users: Users,
  "check-circle": CheckCircle2,
  "alert-triangle": AlertTriangle,
  "file-text": FileText,
  "bar-chart": BarChart,
  briefcase: Briefcase,
} as const;

type IconKey = keyof typeof iconMap;

interface Feature {
  iconName: IconKey | string;
  title: string;
  description: string;
}

interface ServiceFeaturesProps {
  title: string;
  subtitle?: string;
  features?: Feature[]; // optional, will default to []
  columns?: 2 | 3 | 4; // optional, will default to 3
  gradientFrom: string;
  gradientTo: string;
}

export default function ServiceFeatures({
  title,
  subtitle,
  features = [],
  columns = 3,
  gradientFrom,
  gradientTo,
}: ServiceFeaturesProps) {
  // Sanitize columns to 2|3|4
  const resolvedColumns: 2 | 3 | 4 = [2, 3, 4].includes(columns) ? columns : 3;

  const gridCols: Record<2 | 3 | 4, string> = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  // ✅ This is the variable to use in className
  const gridClassName = gridCols[resolvedColumns];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {title}
          </h2>
          {subtitle && <p className="text-xl text-slate-600">{subtitle}</p>}
        </div>

        {/* Features Grid */}
        <div className={`grid ${gridClassName} gap-8`}>
          {(features ?? []).map((feature, index) => {
            const Icon =
              iconMap[(feature.iconName as IconKey) || "server"] || Server;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div
                  className={`mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${gradientFrom} ${gradientTo} text-white group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-8 h-8" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Accent */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradientFrom} ${gradientTo} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
