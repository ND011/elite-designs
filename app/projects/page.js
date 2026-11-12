"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PORTFOLIO_PROJECTS, STUDIO_IDENTITY } from "@/data/studioData";

const FILTER_TABS = [
  { id: "all", label: `All Works (${PORTFOLIO_PROJECTS.length})` },
  { id: "Interior Design", label: "Interior Design (3)" },
  { id: "Architecture & Spatial", label: "Architecture & Spatial (2)" },
  { id: "Product Design", label: "Product Design (1)" },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' | 'index'

  const filteredItems =
    activeFilter === "all"
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((item) => item.category === activeFilter);

  return (
    <div className="flex flex-col w-full">
      {/* Top Spatial Anchor & Editorial Header */}
      <section className="w-full px-margin lg:px-margin-desktop pt-space-lg pb-space-xl">
        <div className="flex flex-col space-y-space-md max-w-5xl">
          <div className="flex items-center gap-space-sm">
            <span className="font-label-mono text-label-mono uppercase tracking-widest text-secondary">
              02 / ELITE DESIGNS PORTFOLIO
            </span>
            <span className="h-px w-12 bg-surface-container-highest" />
            <span className="font-label-mono text-label-mono text-outline uppercase">
              [ {STUDIO_IDENTITY.founder.name.toUpperCase()} ]
            </span>
          </div>
          <h1 className="font-display text-display-mobile lg:text-display text-on-surface">
            Selected works in architecture, interior environments, furniture,
            and product design.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl pt-space-xs">
            Our portfolio demonstrates not only how our work looks, but how we
            think, research, and solve spatial and ergonomic design problems.
          </p>
        </div>

        {/* Filter & View Switch Toolbar */}
        <div className="mt-space-xl pt-space-md border-t border-surface-container-highest flex flex-col md:flex-row md:items-center justify-between gap-space-md">
          {/* Interactive Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-space-xs">
            {FILTER_TABS.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-space-md py-space-xs font-label-mono text-label-mono uppercase transition-all duration-200 ${
                    isActive
                      ? "bg-primary text-on-primary"
                      : "bg-surface-container-low text-on-surface hover:bg-surface-container-high"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* View Layout Toggle */}
          <div className="flex items-center gap-space-xs p-1 bg-surface-container-low self-start md:self-auto">
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-space-xs px-space-sm py-1 font-label-mono text-label-mono uppercase transition-all duration-200 ${
                viewMode === "grid"
                  ? "bg-surface text-on-surface shadow-sm"
                  : "text-secondary hover:text-on-surface"
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">
                grid_view
              </span>
              <span>Editorial Grid</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("index")}
              className={`flex items-center gap-space-xs px-space-sm py-1 font-label-mono text-label-mono uppercase transition-all duration-200 ${
                viewMode === "index"
                  ? "bg-surface text-on-surface shadow-sm"
                  : "text-secondary hover:text-on-surface"
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">
                table_rows
              </span>
              <span>Archival Index</span>
            </button>
          </div>
        </div>
      </section>

      {/* Editorial Grid Presentation */}
      {viewMode === "grid" && (
        <section className="w-full px-margin lg:px-margin-desktop pb-space-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter-desktop">
            {filteredItems.map((item, idx) => {
              const colSpan =
                idx === 0
                  ? "lg:col-span-8"
                  : idx === 1
                  ? "lg:col-span-4"
                  : "lg:col-span-6";
              return (
                <Link
                  key={item.slug}
                  href={`/projects/${item.slug}`}
                  className={`${colSpan} flex flex-col group cursor-pointer bg-surface-container-low p-space-md hover:bg-surface-container transition-colors`}
                >
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-container-high">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                      alt={item.title}
                      src={item.coverImage}
                    />
                    <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur-sm px-space-sm py-space-xs">
                      <span className="font-label-mono text-label-mono uppercase tracking-widest text-on-surface">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="mt-space-md pt-space-xs flex items-start justify-between border-t border-surface-container-highest gap-space-sm">
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-secondary transition-colors">
                        {item.title}
                      </h3>
                      <p className="font-body-sm text-body-sm text-secondary mt-1">
                        {item.brief}
                      </p>
                    </div>
                    <span className="font-label-mono text-label-mono text-outline shrink-0">
                      {item.year} • {item.area}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* Archival Table View */}
      {viewMode === "index" && (
        <section className="w-full px-margin lg:px-margin-desktop py-space-xl">
          <div className="flex items-center justify-between pb-space-md border-b border-surface-container-highest">
            <div>
              <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface">
                Elite Designs Project Index
              </h3>
              <p className="font-body-sm text-body-sm text-secondary">
                Chronological register of architectural, interior, and product
                design case studies.
              </p>
            </div>
            <span className="font-label-mono text-label-mono text-outline">
              {filteredItems.length} ENTRIES REGISTERED
            </span>
          </div>
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-surface-container-highest text-secondary font-label-mono text-label-mono uppercase">
                  <th className="py-space-md pr-space-md">Year</th>
                  <th className="py-space-md pr-space-md">Discipline</th>
                  <th className="py-space-md pr-space-md">Project Title</th>
                  <th className="py-space-md pr-space-md">Role</th>
                  <th className="py-space-md pr-space-md">Location</th>
                  <th className="py-space-md text-right">Scale / Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container-highest font-body-sm text-body-sm">
                {filteredItems.map((item) => (
                  <tr
                    key={item.slug}
                    className="hover:bg-surface-container-lowest transition-colors cursor-pointer group"
                  >
                    <td className="py-space-md pr-space-md font-label-mono text-label-mono text-outline">
                      {item.year}
                    </td>
                    <td className="py-space-md pr-space-md font-label-mono text-label-mono text-primary font-bold">
                      {item.category}
                    </td>
                    <td className="py-space-md pr-space-md font-headline-sm text-headline-sm text-on-surface group-hover:text-secondary">
                      <Link href={`/projects/${item.slug}`}>{item.title}</Link>
                    </td>
                    <td className="py-space-md pr-space-md text-secondary">
                      {item.role}
                    </td>
                    <td className="py-space-md pr-space-md text-on-surface">
                      {item.location}
                    </td>
                    <td className="py-space-md text-right font-label-mono text-label-mono text-outline">
                      {item.area} • {item.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Detailed Inline Case Study Highlight: Ikigai Residence */}
      <section className="w-full bg-surface-container-low py-space-2xl px-margin lg:px-margin-desktop border-y border-surface-container-highest">
        <div className="max-w-7xl mx-auto space-y-space-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div>
              <div className="flex items-center gap-space-sm mb-space-xs">
                <span className="font-label-mono text-label-mono text-secondary uppercase">
                  [ FEATURED CASE STUDY SPECIFICATION ]
                </span>
                <span className="h-px w-8 bg-surface-container-highest" />
                <span className="font-label-mono text-label-mono text-primary font-bold uppercase">
                  ELITE DESIGNS STUDIO
                </span>
              </div>
              <h2 className="font-display text-headline-lg text-on-surface">
                Ikigai Residence — Spatial Metamorphosis
              </h2>
              <p className="font-body-lg text-body-lg text-secondary">
                1,650 sq.ft Multi-Bedroom Family Residence • Lead Designer:{" "}
                {STUDIO_IDENTITY.founder.name}
              </p>
            </div>
            <div className="flex items-center gap-space-md">
              <Link
                className="inline-flex items-center gap-space-xs font-label-mono text-label-mono uppercase text-on-surface hover:text-secondary transition-colors underline underline-offset-4"
                href="/projects/ikigai-apartment-metamorphosis"
              >
                Open Full Project Sheet →
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div className="space-y-space-xs">
              <div className="aspect-[16/10] bg-surface-container-high overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt="Ikigai Apartment Presentation Board"
                  src="/portfolio/ikigai-apartment-board.jpg"
                />
              </div>
              <div className="flex items-center justify-between pt-space-xs border-t border-surface-container-highest">
                <span className="font-label-mono text-label-mono text-on-surface uppercase">
                  SHEET 01 — SPATIAL ZONING, SOLAR PATH &amp; LIVING-DINING ELEVATION
                </span>
                <span className="font-label-mono text-label-mono text-outline">
                  ELITE DESIGNS ARCHIVE
                </span>
              </div>
            </div>
            <div className="space-y-space-xs">
              <div className="aspect-[16/10] bg-surface-container-high overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt="Radial Plan Technical Package"
                  src="/portfolio/apartment-interior-sheet.jpg"
                />
              </div>
              <div className="flex items-center justify-between pt-space-xs border-t border-surface-container-highest">
                <span className="font-label-mono text-label-mono text-on-surface uppercase">
                  SHEET 02 — TECHNICAL PARTITION, FLOORING &amp; RCP LIGHTING PLANS
                </span>
                <span className="font-label-mono text-label-mono text-outline">
                  1:75 &amp; 1:10 GFC DETAILS
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commissions & Inquiries Action Banner */}
      <section className="w-full bg-surface-container px-margin lg:px-margin-desktop py-space-2xl border-t border-surface-container-highest">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
          <div className="lg:col-span-8 space-y-space-sm">
            <span className="font-label-mono text-label-mono uppercase tracking-widest text-secondary">
              [ COMMISSION INQUIRIES • ELITE DESIGNS ]
            </span>
            <h2 className="font-display text-headline-lg text-on-surface">
              Discuss your interior, furniture, or product project with{" "}
              {STUDIO_IDENTITY.founder.name}.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
              From complete apartment transformations and retail spaces to
              custom modular furniture and industrial product prototypes.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-space-md">
            <Link
              href="/contact"
              className="px-space-lg py-space-md bg-primary text-on-primary font-label-lg text-label-lg uppercase tracking-widest hover:bg-surface-container-highest hover:text-on-surface transition-colors w-full sm:w-auto text-center"
            >
              Start a Project
            </Link>
            <span className="font-label-mono text-label-mono text-secondary">
              {STUDIO_IDENTITY.founder.phone} • {STUDIO_IDENTITY.founder.email}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
