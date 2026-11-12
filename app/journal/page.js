import React from "react";
import Link from "next/link";
import { JOURNAL_ARTICLES, STUDIO_IDENTITY } from "@/data/studioData";

const ARTICLE_IMAGES = [
  "/portfolio/ikigai-apartment-board.jpg",
  "/portfolio/apartment-interior-sheet.jpg",
  "/portfolio/product-prototyping-board.jpg",
];

export default function JournalPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="w-full px-margin lg:px-margin-desktop py-space-xl lg:py-space-2xl bg-surface">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-baseline">
          <div className="lg:col-span-3">
            <span className="font-label-mono text-label-mono text-secondary uppercase tracking-widest block mb-space-xs">
              04 / RESEARCH &amp; INSIGHTS
            </span>
            <span className="font-label-mono text-label-mono text-outline block">
              ELITE DESIGNS JOURNAL
            </span>
          </div>
          <div className="lg:col-span-9 space-y-space-md">
            <h1 className="font-display text-display-mobile lg:text-display text-on-surface max-w-4xl tracking-tight">
              Design research, material exploration, and studio notes.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Articles and research notes authored by{" "}
              <strong>{STUDIO_IDENTITY.founder.name}</strong> ({STUDIO_IDENTITY.founder.role}) on space planning, material honesty, and 1:1 furniture &amp; product prototyping.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full px-margin lg:px-margin-desktop pb-space-2xl bg-surface">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-desktop">
          {JOURNAL_ARTICLES.map((post, idx) => (
            <Link
              key={post.slug}
              href={`/journal/${post.slug}`}
              className="group bg-surface-container-low p-space-lg flex flex-col justify-between hover:bg-surface-container transition-colors"
            >
              <div>
                <div className="aspect-[16/10] w-full overflow-hidden bg-surface-container-high mb-space-md">
                  <img
                    src={ARTICLE_IMAGES[idx % ARTICLE_IMAGES.length]}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between font-label-mono text-label-mono text-secondary uppercase mb-space-xs">
                  <span>{post.category}</span>
                  <span>{post.date}</span>
                </div>
                <h2 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                  {post.excerpt}
                </p>
              </div>
              <div className="mt-space-lg pt-space-sm border-t border-surface-container-highest flex items-center justify-between">
                <span className="font-label-mono text-label-mono text-outline uppercase">
                  {post.readTime}
                </span>
                <span className="font-label-lg text-label-lg uppercase tracking-widest text-primary group-hover:underline">
                  Read Article →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
