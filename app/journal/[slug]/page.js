import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, BookOpen, CheckCircle2 } from "lucide-react";
import { JOURNAL_ARTICLES, STUDIO_IDENTITY } from "@/data/studioData";

export function generateStaticParams() {
  return JOURNAL_ARTICLES.map((art) => ({
    slug: art.slug,
  }));
}

export default async function JournalArticlePage({ params }) {
  const resolvedParams = await params;
  const article = JOURNAL_ARTICLES.find((a) => a.slug === resolvedParams.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="flex items-center justify-between border-b border-mineral-100 pb-6">
        <Link
          href="/studio"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-concrete-600 hover:text-charcoal"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Studio & Journal</span>
        </Link>

        <span className="text-xs font-mono uppercase px-3 py-1 border border-mineral-100 bg-concrete-100 text-charcoal">
          {article.category} • {article.readTime}
        </span>
      </div>

      <header className="space-y-4">
        <div className="text-xs font-mono text-concrete-500">
          PUBLISHED {article.date.toUpperCase()} • BY{" "}
          {STUDIO_IDENTITY.founder.name.toUpperCase()} (DESIGNER + EDUCATOR)
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl text-charcoal leading-tight">
          {article.title}
        </h1>
        <p className="text-base sm:text-lg text-concrete-600 leading-relaxed">
          {article.excerpt}
        </p>
      </header>

      {/* Key Takeaways Box */}
      <div className="p-6 border border-mineral-100 bg-concrete-50 space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-accent-brass block">
          KEY RESEARCH TAKEAWAYS
        </span>
        <ul className="space-y-2">
          {article.takeaways.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 text-sm text-charcoal"
            >
              <CheckCircle2 className="w-4 h-4 text-accent-sage shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Article Body */}
      <div className="border border-mineral-100 bg-canvas p-6 sm:p-10 space-y-6 text-sm sm:text-base text-concrete-600 leading-relaxed">
        <h2 className="font-serif text-2xl sm:text-3xl text-charcoal">
          1. Understanding the Spatial & Material Context
        </h2>
        <p>
          In contemporary Indian residential architecture—particularly across
          high-density urban apartments in Ahmedabad, Mumbai, and Bengaluru—rooms
          are frequently expected to serve three overlapping roles: sleeping
          sanctuary, remote work studio, and multi-generational storage vault.
          When floorplates are dominated by legacy steel almirahs, box diwans,
          and trunks, horizontal circulation breaks down.
        </p>

        <h2 className="font-serif text-2xl sm:text-3xl text-charcoal pt-2">
          2. Bridging Vertical Volume Instead of Discarding Heirloom Furniture
        </h2>
        <p>
          Rather than demanding expensive civil demolition or discarding durable
          household pieces, our research at <strong>Elite Designs</strong>{" "}
          focuses on exoskeletal modular intervention. Using 25×25mm 16-gauge
          powder-coated mild steel tubes paired with 18mm IS:303 BWR Gurjan
          marine plywood decks, we establish a structural datum above 6.5 feet—turning
          dead air volume into high-load storage and cantilevered study bays.
        </p>

        <h2 className="font-serif text-2xl sm:text-3xl text-charcoal pt-2">
          3. Tactile Honesty & Iterative Prototyping
        </h2>
        <p>
          Every joint and surface in our studio undergoes physical validation—moving
          from quick 1:1 corrugated ergonomics mockups to CNC-slotted collar
          cleats and 5mm toughened reeded glass panels that preserve daylight
          while muting visual clutter.
        </p>
      </div>

      {/* Footer CTA */}
      <div className="p-6 border border-charcoal bg-concrete-100/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-serif text-2xl text-charcoal">
            Apply these principles to your own room.
          </h3>
          <p className="text-xs text-concrete-600 mt-1">
            Run the 8-step Space Check or configure a custom frame in our 2D
            Builder.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/space-check"
            className="px-5 py-2.5 bg-charcoal text-canvas text-xs font-mono uppercase tracking-widest flex items-center gap-1.5"
          >
            <span>Run Space Check</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/projects"
            className="px-5 py-2.5 border border-charcoal bg-canvas text-charcoal text-xs font-mono uppercase tracking-widest flex items-center gap-1.5"
          >
            <span>Explore Portfolio</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

