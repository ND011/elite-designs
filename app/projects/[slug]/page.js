import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  MapPin,
  Calendar,
  Maximize2,
  UserCheck,
  CheckCircle2,
  Layers,
} from "lucide-react";
import { PORTFOLIO_PROJECTS } from "@/data/studioData";

export function generateStaticParams() {
  return PORTFOLIO_PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectCaseStudyPage({ params }) {
  const resolvedParams = await params;
  const project = PORTFOLIO_PROJECTS.find(
    (p) => p.slug === resolvedParams.slug
  );

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">
      {/* Top Breadcrumb */}
      <div className="flex items-center justify-between border-b border-mineral-100 pb-6">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-concrete-600 hover:text-charcoal"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Projects</span>
        </Link>

        <span className="text-xs font-mono uppercase px-3 py-1 border border-mineral-100 bg-concrete-100 text-charcoal">
          {project.category} • {project.status}
        </span>
      </div>

      {/* Title & Metadata Matrix (From Section 5A of Planning Guide) */}
      <div className="space-y-8">
        <div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal leading-tight">
            {project.title}
          </h1>
          <p className="text-base sm:text-lg text-concrete-600 mt-3 max-w-3xl leading-relaxed">
            {project.brief}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 border border-mineral-100 bg-canvas">
            <span className="text-[10px] font-mono uppercase text-concrete-500 block">
              Location
            </span>
            <p className="font-medium text-sm text-charcoal mt-1">
              {project.location}
            </p>
          </div>
          <div className="p-4 border border-mineral-100 bg-canvas">
            <span className="text-[10px] font-mono uppercase text-concrete-500 block">
              Year & Status
            </span>
            <p className="font-medium text-sm text-charcoal mt-1">
              {project.year} — {project.status}
            </p>
          </div>
          <div className="p-4 border border-mineral-100 bg-canvas">
            <span className="text-[10px] font-mono uppercase text-concrete-500 block">
              Project Area / Scale
            </span>
            <p className="font-medium text-sm text-charcoal mt-1">
              {project.area}
            </p>
          </div>
          <div className="p-4 border border-mineral-100 bg-canvas">
            <span className="text-[10px] font-mono uppercase text-concrete-500 block">
              Creator&apos;s Exact Role
            </span>
            <p className="font-medium text-sm text-charcoal mt-1">
              {project.role}
            </p>
          </div>
        </div>
      </div>

      {/* Primary Presentation Board Image */}
      <div className="border border-mineral-100 bg-canvas p-3 sm:p-5">
        <div className="flex items-center justify-between text-xs font-mono text-concrete-500 pb-3 mb-3 border-b border-mineral-100">
          <span>ARCHITECTURAL & DESIGN PRESENTATION SHEET</span>
          <a
            href={project.coverImage}
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-charcoal"
          >
            Open High-Resolution Sheet ↗
          </a>
        </div>
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-auto border border-mineral-100 object-contain max-h-[680px] bg-concrete-50"
        />
      </div>

      {/* Structured Case Study Breakdown: Challenge, Concept, Research, Materials, Outcome */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-6">
          <div className="p-6 border border-mineral-100 bg-canvas space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-accent-terracotta">
              01 // THE DESIGN CHALLENGE
            </span>
            <h2 className="font-serif text-2xl text-charcoal">
              Problem Statement & Spatial Constraints
            </h2>
            <p className="text-sm text-concrete-600 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="p-6 border border-mineral-100 bg-canvas space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-accent-brass">
              02 // CENTRAL DESIGN CONCEPT
            </span>
            <h2 className="font-serif text-2xl text-charcoal">
              Architectural & Material Idea
            </h2>
            <p className="text-sm text-concrete-600 leading-relaxed">
              {project.concept}
            </p>
          </div>

          <div className="p-6 border border-mineral-100 bg-canvas space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-charcoal">
              03 // RESEARCH & DESIGN DEVELOPMENT
            </span>
            <h2 className="font-serif text-2xl text-charcoal">
              Site, Ergonomics, Drawings & Iterations
            </h2>
            <p className="text-sm text-concrete-600 leading-relaxed">
              {project.research}
            </p>
          </div>

          <div className="p-6 border border-accent-sage bg-accent-sage/10 space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-accent-sage">
              04 // FINAL OUTCOME
            </span>
            <h2 className="font-serif text-2xl text-charcoal">
              Spatial & Functional Resolution
            </h2>
            <p className="text-sm text-concrete-800 leading-relaxed">
              {project.outcome}
            </p>
          </div>
        </div>

        {/* Right 4 Cols: Material Palette & CTA */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 border border-mineral-100 bg-canvas space-y-4">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-charcoal" />
              <h3 className="text-xs font-mono uppercase tracking-widest text-charcoal font-semibold">
                MATERIALS & FINISHES PALETTE
              </h3>
            </div>
            <ul className="space-y-2.5 text-xs">
              {project.materials.map((mat) => (
                <li
                  key={mat}
                  className="p-3 border border-mineral-100 bg-concrete-50 flex items-center gap-2"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent-sage shrink-0" />
                  <span className="text-charcoal font-medium">{mat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 border border-charcoal bg-concrete-100/80 space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-concrete-600 block">
              COMMISSION A SIMILAR PROJECT
            </span>
            <h3 className="font-serif text-2xl text-charcoal">
              Discuss Your Space with Elite Designs
            </h3>
            <p className="text-xs text-concrete-600 leading-relaxed">
              Work directly with Mohammadali G. Tharadara on residential
              interiors, bespoke furniture, or modular spatial systems.
            </p>
            <div className="space-y-2 pt-1">
              <Link
                href="/studio#enquiry-form"
                className="w-full py-3 px-4 bg-charcoal text-canvas text-xs uppercase tracking-widest font-medium flex items-center justify-center gap-2 hover:bg-concrete-800"
              >
                <span>Start Project Enquiry</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/builder"
                className="w-full py-3 px-4 border border-charcoal bg-canvas text-charcoal text-xs uppercase tracking-widest font-medium flex items-center justify-center gap-2 hover:bg-concrete-200/50"
              >
                <span>Open 2D Frame Builder</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

