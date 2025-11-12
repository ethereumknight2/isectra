// components/ui/Breadcrumbs.tsx
"use client";

import Link from "next/link";

export type Crumb = {
  label: string;
  href?: string;
};

interface BreadcrumbsProps {
  items: Crumb[];
  className?: string;
  /** Mobile-safe top padding to avoid fixed header overlap (Tailwind classes). Default: pt-16 sm:pt-0 */
  offsetClass?: string;
}

export default function Breadcrumbs({
  items,
  className = "",
  offsetClass = "pt-16 sm:pt-0",
}: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`mb-3 text-sm text-slate-600 ${offsetClass} ${className}`}
    >
      <ol className="flex items-center flex-wrap gap-2">
        {items.map((crumb, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center">
              {crumb.href && !isLast ? (
                <Link
                  href={crumb.href}
                  className="hover:text-blue-600 transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span
                  className={isLast ? "text-blue-600 font-semibold" : undefined}
                >
                  {crumb.label}
                </span>
              )}
              {!isLast && <span className="mx-2 text-slate-400">›</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
