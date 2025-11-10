// app/blog/BlogShell.tsx
"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import Link from "next/link";
import { Calendar, Clock, User, ArrowLeft, ChevronRight } from "lucide-react";
import { BlogPost } from "@/app/blog/posts";

interface BlogShellProps {
  post: BlogPost;
}

export default function BlogShell({ post }: BlogShellProps) {
  const [headings, setHeadings] = useState<
    { id: string; text: string; level: number }[]
  >([]);
  const [activeId, setActiveId] = useState<string>("");

  // Extract headings from content for table of contents
  useEffect(() => {
    const content = document.querySelector(".blog-content");
    if (!content) return;

    const headingElements = content.querySelectorAll("h2, h3");
    const headingData = Array.from(headingElements).map((heading, index) => {
      const id = `heading-${index}`;
      (heading as HTMLElement).id = id;
      return {
        id,
        text: heading.textContent || "",
        level: parseInt(heading.tagName.charAt(1)),
      };
    });

    setHeadings(headingData);

    // Intersection Observer for active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId((entry.target as HTMLElement).id);
          }
        });
      },
      { rootMargin: "-100px 0px -80% 0px" }
    );

    headingElements.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, []);

  // Generate Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "iSectra",
      logo: {
        "@type": "ImageObject",
        url: "https://isectra.com/images/logo.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://isectra.com/blog/${post.slug}`,
    },
    keywords: post.categories.join(", "),
  };

  // Generate BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://isectra.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://isectra.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://isectra.com/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      {/* Schema Markup */}
      <Script
        id="article-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Explicit CSS to style dangerouslySetInnerHTML content */}
      <style jsx global>{`
        /* Base typography */
        .blog-content {
          font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, sans-serif !important;
          -webkit-font-smoothing: antialiased !important;
        }

        /* H2 - Main section headings */
        .blog-content h2 {
          font-size: 36px !important;
          font-weight: 700 !important;
          line-height: 1.3 !important;
          color: #111827 !important;
          margin-top: 96px !important;
          margin-bottom: 48px !important;
          padding-bottom: 24px !important;
          border-bottom: 2px solid #dbeafe !important;
        }

        /* H3 - Subsection headings */
        .blog-content h3 {
          font-size: 28px !important;
          font-weight: 700 !important;
          line-height: 1.4 !important;
          color: #1f2937 !important;
          margin-top: 80px !important;
          margin-bottom: 40px !important;
        }

        /* H4 - Sub-subsection headings */
        .blog-content h4 {
          font-size: 22px !important;
          font-weight: 600 !important;
          line-height: 1.5 !important;
          color: #1f2937 !important;
          margin-top: 64px !important;
          margin-bottom: 32px !important;
        }

        /* Paragraphs - generous spacing */
        .blog-content p {
          font-size: 19px !important;
          line-height: 2 !important;
          color: #374151 !important;
          margin-bottom: 40px !important;
        }

        /* First paragraph - larger lead-in */
        .blog-content > p:first-of-type {
          font-size: 22px !important;
          line-height: 1.8 !important;
          color: #1f2937 !important;
          margin-bottom: 48px !important;
        }

        /* Lists - huge spacing */
        .blog-content ul,
        .blog-content ol {
          margin-top: 48px !important;
          margin-bottom: 48px !important;
          padding-left: 0 !important;
          list-style: none !important;
        }

        /* List items */
        .blog-content ul li,
        .blog-content ol li {
          font-size: 19px !important;
          line-height: 2 !important;
          color: #374151 !important;
          margin-bottom: 24px !important;
          position: relative !important;
        }

        /* Unordered list bullets */
        .blog-content ul li {
          padding-left: 40px !important;
        }

        .blog-content ul li::before {
          content: "" !important;
          position: absolute !important;
          left: 8px !important;
          top: 12px !important;
          width: 8px !important;
          height: 8px !important;
          border-radius: 50% !important;
          background-color: #3b82f6 !important;
        }

        /* Ordered list numbers */
        .blog-content ol {
          counter-reset: item !important;
        }

        .blog-content ol li {
          counter-increment: item !important;
          padding-left: 48px !important;
        }

        .blog-content ol li::before {
          content: counter(item) !important;
          position: absolute !important;
          left: 0 !important;
          top: 2px !important;
          width: 30px !important;
          height: 30px !important;
          background: linear-gradient(
            135deg,
            #3b82f6 0%,
            #2563eb 100%
          ) !important;
          color: white !important;
          border-radius: 50% !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          font-size: 14px !important;
          font-weight: 700 !important;
        }

        /* Remove top spacing after headings */
        .blog-content h2 + p,
        .blog-content h2 + ul,
        .blog-content h2 + ol,
        .blog-content h3 + p,
        .blog-content h3 + ul,
        .blog-content h3 + ol,
        .blog-content h4 + p,
        .blog-content h4 + ul,
        .blog-content h4 + ol {
          margin-top: 0 !important;
        }

        /* Links */
        .blog-content a {
          color: #2563eb !important;
          text-decoration: none !important;
          border-bottom: 1px solid #93c5fd !important;
        }

        .blog-content a:hover {
          color: #1d4ed8 !important;
          border-bottom-color: #2563eb !important;
        }

        /* Strong text */
        .blog-content strong {
          font-weight: 600 !important;
          color: #111827 !important;
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-16 lg:py-24">
          <div className="absolute inset-0 bg-black/10"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm mb-8 text-white/80">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">{post.title}</span>
            </nav>

            {/* Categories */}
            {post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {post.categories.map((category) => (
                  <span
                    key={category}
                    className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium"
                  >
                    {category}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readingTime} read</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sidebar - Table of Contents (Desktop) */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-24">
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-5 pb-3 border-b border-gray-200">
                    Table of Contents
                  </h3>
                  <nav className="space-y-3">
                    {headings.map((heading) => (
                      <a
                        key={heading.id}
                        href={`#${heading.id}`}
                        className={`block text-sm transition-all duration-200 ${
                          heading.level === 3
                            ? "pl-4 text-[13px]"
                            : "font-medium"
                        } ${
                          activeId === heading.id
                            ? "text-blue-600 font-semibold transform translate-x-1"
                            : "text-gray-600 hover:text-blue-600 hover:translate-x-1"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById(heading.id)?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        }}
                      >
                        {heading.text}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Back to Blog Button */}
                <Link
                  href="/blog"
                  className="mt-6 flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Blog
                </Link>
              </div>
            </aside>

            {/* Article Content */}
            <article className="lg:col-span-9">
              {/* Featured Image */}
              {post.image && (
                <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-auto"
                  />
                </div>
              )}

              {/* Article Summary */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-600 p-8 rounded-r-xl mb-10 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Article Summary
                </h2>
                <p className="text-gray-700 leading-loose text-[17px]">
                  {post.description}
                </p>
              </div>

              {/* Mobile TOC */}
              {headings.length > 0 && (
                <div className="lg:hidden bg-white rounded-xl shadow-lg p-6 mb-10 border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-5 pb-3 border-b border-gray-200">
                    Table of Contents
                  </h3>
                  <nav className="space-y-3">
                    {headings.map((heading) => (
                      <a
                        key={heading.id}
                        href={`#${heading.id}`}
                        className={`block text-sm transition-colors ${
                          heading.level === 3
                            ? "pl-4 text-[13px]"
                            : "font-medium"
                        } text-gray-600 hover:text-blue-600`}
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById(heading.id)?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        }}
                      >
                        {heading.text}
                      </a>
                    ))}
                  </nav>
                </div>
              )}

              {/* Article Body */}
              <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10 lg:p-16">
                <div
                  className="blog-content max-w-none"
                  style={{
                    fontFamily:
                      'var(--font-inter), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    WebkitFontSmoothing: "antialiased",
                    MozOsxFontSmoothing: "grayscale",
                    textRendering: "optimizeLegibility",
                  }}
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>

              {/* Call to Action */}
              <div className="mt-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl shadow-lg p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Transform Your IT?
                </h3>
                <p className="text-lg mb-6 text-white/90">
                  Get enterprise-grade IT support without the enterprise price.
                </p>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all hover:scale-105"
                >
                  Schedule Free Consultation
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Mobile Back to Blog */}
              <div className="lg:hidden mt-8">
                <Link
                  href="/blog"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Blog
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
