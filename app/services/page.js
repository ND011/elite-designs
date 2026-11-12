import React from "react";
import Link from "next/link";
import { SERVICES_CATALOG, STUDIO_IDENTITY } from "@/data/studioData";

const SERVICE_IMAGES = [
  "/portfolio/spatial-elevation-board.jpg",
  "/portfolio/ikigai-apartment-board.jpg",
  "/portfolio/apartment-interior-sheet.jpg",
  "/portfolio/product-prototyping-board.jpg",
  "/portfolio/daylight-spatial-research.jpg",
  "/portfolio/master-bedroom-spread.jpg",
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Top Subtle Coordinate Strip */}
      <div className="w-full px-margin lg:px-margin-desktop py-space-sm bg-surface-container-low flex flex-wrap items-center justify-between gap-space-sm">
        <div className="flex items-center gap-space-md">
          <span className="font-label-mono text-label-mono text-secondary uppercase">
            ELITE DESIGNS STUDIO
          </span>
          <span className="text-secondary/40 font-label-mono text-label-mono">
            /
          </span>
          <span className="font-label-mono text-label-mono text-on-surface-variant uppercase">
            ARCHITECTURE · INTERIORS · BESPOKE FURNITURE · PRODUCT DESIGN
          </span>
        </div>
        <div className="flex items-center gap-space-md">
          <span className="font-label-mono text-label-mono text-secondary uppercase">
            {STUDIO_IDENTITY.founder.location}
          </span>
          <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
        </div>
      </div>

      {/* 1. Editorial Header */}
      <section className="w-full px-margin lg:px-margin-desktop pt-space-xl pb-space-2xl bg-surface">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-baseline">
          <div className="lg:col-span-3">
            <span className="font-label-mono text-label-mono text-secondary uppercase tracking-widest block mb-space-xs">
              03 / DISCIPLINES &amp; SERVICES
            </span>
            <span className="font-label-mono text-label-mono text-outline block">
              ELITE DESIGNS CAPABILITIES
            </span>
          </div>
          <div className="lg:col-span-9 flex flex-col gap-space-md">
            <h1 className="font-display text-display-mobile lg:text-display text-on-surface max-w-4xl tracking-tight">
              What clients can hire Elite Designs for.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl pt-space-sm">
              Organised into six distinct design disciplines, each service
              clearly defines what is included, who it is for, and the exact
              deliverables you receive.
            </p>
          </div>
        </div>
      </section>

      {/* Metric Strip: Studio Capacities */}
      <section className="w-full px-margin lg:px-margin-desktop py-space-lg bg-surface-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
          <div className="flex flex-col gap-space-xs">
            <span className="font-label-mono text-label-mono text-secondary uppercase">
              PRINCIPAL DESIGNER
            </span>
            <span className="font-headline-sm text-headline-sm text-on-surface font-light">
              {STUDIO_IDENTITY.founder.name}
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Master&apos;s in Design • Educator
            </span>
          </div>
          <div className="flex flex-col gap-space-xs">
            <span className="font-label-mono text-label-mono text-secondary uppercase">
              DISCIPLINES
            </span>
            <span className="font-headline-sm text-headline-sm text-on-surface font-light">
              06 SPECIALISATIONS
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Spaces, Furniture &amp; Objects
            </span>
          </div>
          <div className="flex flex-col gap-space-xs">
            <span className="font-label-mono text-label-mono text-secondary uppercase">
              DOCUMENTATION
            </span>
            <span className="font-headline-sm text-headline-sm text-on-surface font-light">
              GFC + 3D + 1:1 MOCKUPS
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Complete construction &amp; BOM packs
            </span>
          </div>
          <div className="flex flex-col gap-space-xs">
            <span className="font-label-mono text-label-mono text-secondary uppercase">
              SERVICE COVERAGE
            </span>
            <span className="font-headline-sm text-headline-sm text-on-surface font-light">
              AHMEDABAD &amp; PAN-INDIA
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Plus international remote consultancy
            </span>
          </div>
        </div>
      </section>

      {/* 2. Six Core Services Deep-Dive */}
      <section className="w-full px-margin lg:px-margin-desktop py-space-2xl bg-surface flex flex-col gap-space-2xl">
        {SERVICES_CATALOG.map((svc, idx) => {
          const reverse = idx % 2 === 1;
          const img = SERVICE_IMAGES[idx % SERVICE_IMAGES.length];
          return (
            <div
              key={svc.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start bg-surface-container-lowest p-space-lg lg:p-space-xl shadow-sm border border-surface-container-highest"
            >
              {/* Text Column */}
              <div
                className={`lg:col-span-5 flex flex-col justify-between h-full gap-space-lg ${
                  reverse ? "order-1 lg:order-2" : ""
                }`}
              >
                <div className="space-y-space-sm">
                  <div className="flex items-center gap-space-sm">
                    <span className="font-label-mono text-label-mono text-secondary">
                      [ {svc.number} ]
                    </span>
                    <span className="font-label-lg text-label-lg uppercase tracking-wider text-outline">
                      {svc.subtitle}
                    </span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface">
                    {svc.title}
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {svc.summary}
                  </p>
                </div>

                <div className="space-y-space-md pt-space-md bg-surface-container-low p-space-md">
                  <div>
                    <span className="font-label-mono text-label-mono text-secondary uppercase block mb-space-xs">
                      1. WHAT THE SERVICE INCLUDES
                    </span>
                    <ul className="font-body-sm text-body-sm text-on-surface space-y-1">
                      {svc.includes.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="font-label-mono text-label-mono text-secondary uppercase block mb-space-xs">
                      2. WHO THIS SERVICE IS FOR
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface">
                      {svc.forWhom}
                    </p>
                  </div>

                  <div>
                    <span className="font-label-mono text-label-mono text-secondary uppercase block mb-space-xs">
                      3. CLIENT DELIVERABLES
                    </span>
                    <ul className="font-body-sm text-body-sm text-on-surface space-y-1">
                      {svc.deliverables.map((del) => (
                        <li key={del} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          <span className="font-medium">{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Image Column */}
              <div
                className={`lg:col-span-7 flex flex-col gap-space-md ${
                  reverse ? "order-2 lg:order-1" : ""
                }`}
              >
                <div className="w-full aspect-[16/10] overflow-hidden bg-surface-container">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    alt={svc.title}
                    src={img}
                  />
                </div>
                <div className="flex flex-wrap items-center justify-between text-on-surface-variant gap-space-sm pt-space-xs">
                  <span className="font-label-mono text-label-mono uppercase">
                    ELITE DESIGNS DISCIPLINE {svc.number} — {svc.title}
                  </span>
                  <Link
                    href="/contact"
                    className="font-label-mono text-label-mono uppercase text-primary underline underline-offset-4"
                  >
                    Enquire About This Service →
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Direct Project Inquiry CTA */}
      <section className="w-full px-margin lg:px-margin-desktop py-space-2xl bg-surface-container-lowest">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center bg-primary text-on-primary p-space-xl lg:p-space-2xl">
          <div className="lg:col-span-8 space-y-space-md">
            <div className="flex items-center gap-space-sm">
              <span className="font-label-mono text-label-mono uppercase tracking-widest text-on-primary-container">
                ELITE DESIGNS • COMMISSION ENQUIRIES
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-primary max-w-2xl">
              Ready to discuss your residential, commercial, furniture, or
              product project?
            </h2>
            <p className="font-body-md text-body-md text-on-primary-container max-w-xl">
              Connect directly with {STUDIO_IDENTITY.founder.name} in Ahmedabad
              for a tailored scope and fee proposal.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-space-md lg:items-end">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-space-lg py-space-md bg-on-primary text-primary font-label-lg text-label-lg uppercase tracking-widest hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-colors duration-200"
            >
              Enquire Now
            </Link>
            <div className="flex items-center gap-space-xs font-label-mono text-label-mono text-on-primary-container">
              <span>{STUDIO_IDENTITY.founder.phone}</span>
              <span>•</span>
              <span>{STUDIO_IDENTITY.founder.email}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
