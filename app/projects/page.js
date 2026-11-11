"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Filter, Layers, Compass, Sparkles } from "lucide-react";
import { PORTFOLIO_PROJECTS } from "@/data/studioData";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Interior Design",
    "Product Design",
    "Architecture & Spatial",
  ];

  const filtered =
    selectedCategory === "All"
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-mineral-100 pb-8">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-concrete-500 block mb-2">
            PORTFOLIO & CASE STUDIES // ELITE DESIGNS STUDIO
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-charcoal">
            Selected Works & Spatial Research
          </h1>
          <p className="text-sm text-concrete-600 mt-2 max-w-2xl">
            Every project is presented with its full design thinking: client
            brief, spatial challenge, research methodology, material palette,
            and technical execution.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-2 text-xs font-mono border transition-colors ${
                selectedCategory === cat
                  ? "bg-charcoal text-canvas border-charcoal"
                  : "bg-canvas text-concrete-600 border-mineral-100 hover:border-charcoal"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* PROJECT CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filtered.map((project, idx) => (
          <article
            key={project.slug}
            className="border border-mineral-100 bg-canvas flex flex-col justify-between hover:border-charcoal transition-all group"
          >
            <div>
              {/* Cover Image + Meta Bar */}
              <div className="p-4 border-b border-mineral-100 bg-concrete-50">
                <div className="flex items-center justify-between text-xs font-mono text-concrete-500 mb-3">
                  <span>
                    0{idx + 1} // {project.category.toUpperCase()}
                  </span>
                  <span>
                    {project.location} • {project.year}
                  </span>
                </div>
                <Link
                  href={`/projects/${project.slug}`}
                  className="block h-72 overflow-hidden border border-mineral-100 bg-canvas"
                >
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <Link href={`/projects/${project.slug}`}>
                    <h2 className="font-serif text-2xl sm:text-3xl text-charcoal group-hover:underline underline-offset-4">
                      {project.title}
                    </h2>
                  </Link>
                  <span className="text-[10px] font-mono uppercase px-2.5 py-1 border border-mineral-100 bg-concrete-100 text-charcoal shrink-0">
                    {project.status}
                  </span>
                </div>

                <p className="text-sm text-concrete-600 leading-relaxed">
                  {project.brief}
                </p>

                <div className="p-3.5 border border-mineral-100 bg-concrete-50/70 space-y-1 text-xs">
                  <span className="font-mono uppercase text-[10px] text-concrete-500 block">
                    DESIGN CHALLENGE & CONCEPT:
                  </span>
                  <p className="text-concrete-800 line-clamp-2">
                    {project.concept}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.materials.slice(0, 3).map((mat) => (
                    <span
                      key={mat}
                      className="px-2 py-0.5 border border-mineral-100 bg-canvas text-[10px] font-mono text-concrete-600"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Link to Full Case Study */}
            <div className="px-6 py-4 border-t border-mineral-100 bg-concrete-50/50 flex items-center justify-between text-xs font-mono">
              <span className="text-concrete-600">Role: {project.role}</span>
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-1.5 font-semibold text-charcoal hover:underline underline-offset-4"
              >
                <span>Read Full Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

