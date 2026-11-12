"use client";

import React, { useState } from "react";
import Link from "next/link";
import { STUDIO_IDENTITY } from "@/data/studioData";

const PROCESS_STEPS = [
  {
    phase: "STAGE 01",
    duration: "UNDERSTAND & BRIEF",
    cardTitle: "Understanding Client Needs & Context",
    cardDesc:
      "Site visits, spatial measurements, user lifestyle interviews, and defining functional, aesthetic, and budget parameters.",
    code: "STAGE 01 / DISCOVERY & BRIEF",
    title: "Empirical Site & User Understanding",
    desc: "Every Elite Designs project begins with listening and observing. We document existing spatial constraints, daylight orientation, family or commercial workflows, and ergonomic requirements before drawing a single line.",
    d1: "Measured Site Survey & Client Brief Dossier",
    d2: "Circulation Bottlenecks & Daylight Entry",
    d3: "Homeowners, Commercial Teams, Principal Designer",
  },
  {
    phase: "STAGE 02",
    duration: "RESEARCH & CONCEPT",
    cardTitle: "Spatial Research & Concept Ideation",
    cardDesc:
      "Zoning diagrams, solar/ventilation studies, ergonomic form exploration, and curated material & colour palettes.",
    code: "STAGE 02 / RESEARCH & CONCEPT",
    title: "Spatial Zoning & Material Exploration",
    desc: "We translate research into spatial zoning diagrams, sketch ideations, and tactile material boards—pairing BWR marine plywood, natural stone, warm timber veneers, and powder-coated steel.",
    d1: "2D Zoning Layouts, Sketchbooks & Moodboards",
    d2: "Spatial Proportion, Material Honesty & Comfort",
    d3: "Principal Designer, Material Suppliers, Client",
  },
  {
    phase: "STAGE 03",
    duration: "PROTOTYPING & 3D",
    cardTitle: "3D Visualisation & 1:1 Prototyping",
    cardDesc:
      "Photorealistic 3D renders, physical sectional models, and 1:1 functional mockups for furniture and products.",
    code: "STAGE 03 / DESIGN DEVELOPMENT",
    title: "3D Modeling & Physical Validation",
    desc: "We build detailed 3D CAD models, sectional lighting studies, and low-to-high fidelity physical prototypes ('Explore → Trial → Experiment → Finalize') to validate ergonomics and joinery tolerances.",
    d1: "3D Renders, Sectional Models & Working Prototypes",
    d2: "Ergonomic Validation & Joinery Precision",
    d3: "Design Studio, Workshop Craftsmen, Engineers",
  },
  {
    phase: "STAGE 04",
    duration: "TECHNICAL DELIVERY",
    cardTitle: "GFC Drawings & Execution Support",
    cardDesc:
      "Complete Good-for-Construction (GFC) technical drawings, electrical/ceiling layouts, BOM cut-lists, and site supervision.",
    code: "STAGE 04 / EXECUTION & HANDOVER",
    title: "Technical Precision & Site Realization",
    desc: "We issue comprehensive 1:50 / 1:75 construction drawings, reflected ceiling plans, custom millwork details, and CNC bills of materials, supervising fabrication through final handover.",
    d1: "Full GFC Drawing Package & Production BOM",
    d2: "Millimetric Site Execution & Finish Quality",
    d3: "Principal Designer, Contractors, Master Carpenters",
  },
];

export default function AboutPage() {
  const [selectedStep, setSelectedStep] = useState(0);
  const currentStep = PROCESS_STEPS[selectedStep];

  return (
    <div className="flex flex-col w-full">
      {/* Section 1: Editorial Page Header */}
      <section className="w-full px-margin lg:px-margin-desktop py-space-xl lg:py-space-2xl bg-surface">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-baseline">
          <div className="lg:col-span-3 flex flex-col space-y-space-sm">
            <img
              src="/brand/elite-logo-full-dark.png"
              alt="Elite Designs Official Logo"
              className="w-40 h-auto object-contain mb-2"
            />
            <span className="font-label-mono text-label-mono text-secondary tracking-widest uppercase">
              01 / ABOUT ELITE DESIGNS
            </span>
            <span className="font-label-mono text-label-mono text-outline">
              AHMEDABAD, GUJARAT, INDIA
            </span>
          </div>
          <div className="lg:col-span-9 flex flex-col space-y-space-lg">
            <h1 className="font-display text-display-mobile lg:text-display text-on-surface tracking-tight max-w-4xl">
              Thoughtful spaces, bespoke furniture, and purposeful objects for
              modern living.
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter pt-space-md">
              <div className="md:col-span-8">
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  {STUDIO_IDENTITY.philosophy}
                </p>
              </div>
              <div className="md:col-span-4 flex flex-col justify-end space-y-space-xs">
                <span className="font-label-mono text-label-mono uppercase text-secondary">
                  Practice Identity
                </span>
                <span className="font-label-mono text-label-mono text-on-surface">
                  {STUDIO_IDENTITY.firmName}
                </span>
                <span className="font-label-mono text-label-mono text-on-surface">
                  Designer + Educator Practice
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Studio Introduction & Banner */}
      <section className="w-full bg-surface-container-low px-margin lg:px-margin-desktop py-space-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop">
          <div className="lg:col-span-5 flex flex-col justify-between space-y-space-lg">
            <div className="space-y-space-md">
              <span className="font-label-mono text-label-mono uppercase text-secondary tracking-widest">
                STUDIO STORY &amp; VISION
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                Bridging design research with buildable craft.
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {STUDIO_IDENTITY.mission}
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {STUDIO_IDENTITY.vision}
              </p>
            </div>
            <div className="p-space-lg bg-surface shadow-sm space-y-space-xs">
              <span className="font-label-mono text-label-mono text-secondary uppercase">
                Material Palette
              </span>
              <p className="font-headline-sm text-headline-sm text-on-surface">
                BWR Marine Timber • Smoked Walnut • Mild Steel • Honed Marble
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant pt-space-xs">
                Every material is selected for climate resilience, tactile
                warmth, and honest structural expression.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between space-y-space-md">
            <div className="w-full overflow-hidden bg-surface-container border border-surface-container-highest shadow-sm">
              <img
                className="w-full h-auto object-cover"
                alt="Elite Designs Studio Presentation Banner"
                src="/brand/studio-banner.jpg"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter">
              <div className="bg-surface p-space-md border border-surface-container-highest">
                <span className="font-label-mono text-label-mono text-secondary uppercase block">
                  Specialisation
                </span>
                <p className="font-body-sm text-body-sm text-on-surface mt-1">
                  Architecture, Interior Architecture, Bespoke &amp; Modular
                  Furniture, and Industrial Product Design.
                </p>
              </div>
              <div className="bg-surface p-space-md border border-surface-container-highest">
                <span className="font-label-mono text-label-mono text-secondary uppercase block">
                  Target Clients
                </span>
                <p className="font-body-sm text-body-sm text-on-surface mt-1">
                  Homeowners, commercial businesses, retail showrooms, property
                  developers, and furniture brands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Founder Profile — Mohammadali G. Tharadara */}
      <section className="w-full px-margin lg:px-margin-desktop py-space-2xl bg-surface">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
          {/* Founder Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="w-full aspect-square bg-surface-container overflow-hidden shadow-sm">
              <img
                alt="Mohammadali G. Tharadara — Founder & Principal Designer"
                className="w-full h-full object-cover object-top"
                src="/brand/founder-portrait.jpg"
              />
            </div>
            <div className="p-space-md bg-surface-container-low mt-space-md flex justify-between items-center">
              <div>
                <span className="font-label-mono text-label-mono text-secondary uppercase">
                  Founder &amp; Principal Designer
                </span>
                <p className="font-body-sm text-body-sm text-on-surface">
                  {STUDIO_IDENTITY.founder.name} • {STUDIO_IDENTITY.founder.location}
                </p>
              </div>
              <span className="font-label-mono text-label-mono text-outline">
                [ 23°01′N 72°34′E ]
              </span>
            </div>
          </div>

          {/* Founder Bio & Credentials */}
          <div className="lg:col-span-7 flex flex-col space-y-space-lg lg:pl-space-md">
            <div className="space-y-space-xs">
              <span className="font-label-mono text-label-mono uppercase text-secondary tracking-widest">
                {STUDIO_IDENTITY.founder.role}
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                {STUDIO_IDENTITY.founder.name}
              </h2>
              <p className="font-label-mono text-label-mono text-outline">
                {STUDIO_IDENTITY.founder.credentials}
              </p>
            </div>
            <blockquote className="p-space-lg bg-surface-container shadow-sm">
              <p className="font-headline-md text-headline-md italic text-on-surface leading-snug">
                “{STUDIO_IDENTITY.philosophy}”
              </p>
            </blockquote>
            <div className="space-y-space-md font-body-md text-body-md text-on-surface-variant leading-relaxed">
              <p>
                <strong>Mohammadali G. Tharadara</strong> is a multidisciplinary
                designer, researcher, and design educator based in Ahmedabad,
                Gujarat. Holding a <strong>Master&apos;s in Design</strong> with
                professional experience spanning residential and retail interior
                architecture, bespoke and modular furniture systems, and
                industrial product prototyping, he established{" "}
                <strong>Elite Designs</strong> to deliver research-backed,
                deeply functional design solutions.
              </p>
              <p>
                His dual engagement in professional design practice and academic
                design education enables the studio to approach every commission
                with analytical rigor—investigating solar light paths, complex
                non-orthogonal floorplans, boltless modular joinery, and 1:1
                ergonomic product validation before execution.
              </p>
            </div>

            {/* Credentials Grid */}
            <div className="pt-space-md grid grid-cols-1 sm:grid-cols-2 gap-space-md">
              <div className="px-space-md py-space-sm bg-surface-container-low">
                <span className="font-label-mono text-label-mono text-secondary uppercase block">
                  Education &amp; Academic Role
                </span>
                <span className="font-body-sm text-body-sm font-medium text-on-surface">
                  Master&apos;s in Design • Design Educator &amp; Researcher
                </span>
              </div>
              <div className="px-space-md py-space-sm bg-surface-container-low">
                <span className="font-label-mono text-label-mono text-secondary uppercase block">
                  Practice Experience
                </span>
                <span className="font-body-sm text-body-sm font-medium text-on-surface">
                  Residential, Retail, Furniture &amp; Product Design
                </span>
              </div>
              <div className="px-space-md py-space-sm bg-surface-container-low">
                <span className="font-label-mono text-label-mono text-secondary uppercase block">
                  Direct Telephone
                </span>
                <span className="font-body-sm text-body-sm font-medium text-on-surface">
                  {STUDIO_IDENTITY.founder.phone}
                </span>
              </div>
              <div className="px-space-md py-space-sm bg-surface-container-low">
                <span className="font-label-mono text-label-mono text-secondary uppercase block">
                  Email &amp; Instagram
                </span>
                <span className="font-body-sm text-body-sm font-medium text-on-surface">
                  {STUDIO_IDENTITY.founder.email} • {STUDIO_IDENTITY.founder.instagram}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Design Philosophy (4 Core Values) */}
      <section className="w-full bg-surface-container px-margin lg:px-margin-desktop py-space-2xl">
        <div className="max-w-3xl mb-space-xl">
          <span className="font-label-mono text-label-mono uppercase text-secondary tracking-widest">
            FOUNDATIONAL ETHOS
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mt-space-xs">
            Four Pillars of Elite Designs.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {STUDIO_IDENTITY.values.map((val, idx) => (
            <div
              key={val.title}
              className="bg-surface p-space-lg flex flex-col justify-between shadow-sm"
            >
              <div>
                <span className="font-label-mono text-label-mono text-secondary uppercase">
                  PILLAR 0{idx + 1}
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mt-space-xs">
                  {val.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-space-md">
                  {val.desc}
                </p>
              </div>
              <div className="mt-space-lg pt-space-md bg-surface-container-low p-space-sm">
                <span className="font-label-mono text-label-mono text-secondary uppercase block">
                  Studio Standard
                </span>
                <span className="font-body-sm text-body-sm text-on-surface">
                  Research-Led &amp; Craft Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Design Process (Interactive Timeline / Workflow) */}
      <section
        className="w-full px-margin lg:px-margin-desktop py-space-2xl bg-surface"
        id="process-section"
      >
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-space-xl">
          <div>
            <span className="font-label-mono text-label-mono uppercase text-secondary tracking-widest">
              STUDIO METHODOLOGY
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              From Research to Final Execution
            </h2>
          </div>
          <span className="font-label-mono text-label-mono text-outline pt-space-xs md:pt-0">
            CLICK ANY STAGE TO INSPECT DELIVERABLES
          </span>
        </div>

        {/* 4-Step Interactive Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = idx === selectedStep;
            return (
              <button
                key={step.phase}
                type="button"
                onClick={() => setSelectedStep(idx)}
                className={`text-left p-space-lg flex flex-col justify-between cursor-pointer transition-all duration-300 ${
                  isActive
                    ? "bg-surface shadow-md ring-1 ring-primary"
                    : "bg-surface-container-low hover:bg-surface-container shadow-sm"
                }`}
              >
                <div className="space-y-space-md w-full">
                  <div className="flex justify-between items-center">
                    <span className="font-label-mono text-label-mono text-secondary">
                      {step.phase}
                    </span>
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${
                        isActive ? "bg-primary" : "bg-outline"
                      }`}
                    />
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    {step.cardTitle}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {step.cardDesc}
                  </p>
                </div>
                <div className="mt-space-lg pt-space-md font-label-mono text-label-mono text-secondary">
                  {step.duration}
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Stage Deep-Dive Plinth */}
        <div className="mt-space-lg p-space-xl bg-surface-container-lowest shadow-sm border border-surface-container-highest">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <div className="lg:col-span-4">
              <span className="font-label-mono text-label-mono text-secondary uppercase">
                {currentStep.code}
              </span>
              <h4 className="font-headline-md text-headline-md text-on-surface mt-space-xs">
                {currentStep.title}
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant mt-space-md">
                {currentStep.desc}
              </p>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-gutter pt-space-md lg:pt-0">
              <div className="bg-surface p-space-md">
                <span className="font-label-mono text-label-mono text-secondary uppercase block">
                  Key Deliverable
                </span>
                <span className="font-body-sm text-body-sm text-on-surface font-medium mt-space-xs block">
                  {currentStep.d1}
                </span>
              </div>
              <div className="bg-surface p-space-md">
                <span className="font-label-mono text-label-mono text-secondary uppercase block">
                  Precision Focus
                </span>
                <span className="font-body-sm text-body-sm text-on-surface font-medium mt-space-xs block">
                  {currentStep.d2}
                </span>
              </div>
              <div className="bg-surface p-space-md">
                <span className="font-label-mono text-label-mono text-secondary uppercase block">
                  Collaboration
                </span>
                <span className="font-body-sm text-body-sm text-on-surface font-medium mt-space-xs block">
                  {currentStep.d3}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Commission Callout Banner */}
      <section className="w-full bg-primary-container text-inverse-on-surface px-margin lg:px-margin-desktop py-space-2xl">
        <div className="max-w-4xl mx-auto text-center space-y-space-lg">
          <span className="font-label-mono text-label-mono text-on-primary-container tracking-widest uppercase block">
            ELITE DESIGNS • AHMEDABAD
          </span>
          <h2 className="font-display text-display-mobile lg:text-display text-surface-bright leading-tight">
            Let&apos;s design your space, furniture, or product with clarity and
            craft.
          </h2>
          <p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl mx-auto">
            Reach out directly to {STUDIO_IDENTITY.founder.name} to discuss
            residential or commercial interiors, bespoke furniture, or product
            design commissions.
          </p>
          <div className="pt-space-md flex flex-wrap justify-center gap-space-md">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-space-lg py-space-md bg-surface text-primary font-label-lg text-label-lg uppercase tracking-wider hover:bg-secondary-fixed transition-colors"
            >
              Start a Project
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-space-lg py-space-md bg-transparent text-surface-bright border border-outline-variant/40 hover:bg-inverse-surface transition-colors font-label-lg text-label-lg uppercase tracking-wider"
            >
              Explore Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
