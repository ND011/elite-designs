import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-primary-container text-inverse-on-surface border-t border-surface-container-highest">
      <div className="w-full px-margin lg:px-margin-desktop py-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter-desktop">
          {/* Studio Identity — Crisp Light Transparent Emblem */}
          <div className="lg:col-span-5 flex flex-col justify-between pr-0 lg:pr-space-lg">
            <div className="space-y-space-md">
              <div className="flex items-center gap-4">
                <img
                  src="/brand/elite-emblem-light.png"
                  alt="Elite Designs Official Emblem"
                  className="w-20 h-20 object-contain shrink-0"
                />
                <div>
                  <span className="font-display text-2xl uppercase tracking-[0.2em] text-surface-bright block">
                    ELITE DESIGNS
                  </span>
                  <span className="font-label-mono text-label-mono uppercase text-on-primary-container tracking-widest block mt-1">
                    Thoughtful spaces for modern living
                  </span>
                </div>
              </div>
              <p className="font-body-md text-body-md text-on-primary-container max-w-md">
                An interdisciplinary design practice founded by{" "}
                <strong className="text-surface-bright font-normal">
                  Mohammadali G. Tharadara
                </strong>{" "}
                (Designer + Educator), exploring architecture, interior
                environments, bespoke &amp; modular furniture, and industrial
                products through thoughtful design, material exploration, and
                purposeful form.
              </p>
            </div>
            <div className="mt-space-lg pt-space-md border-t border-outline-variant/20 flex flex-wrap items-center gap-space-md">
              <a
                className="font-label-mono text-label-mono uppercase text-surface-bright hover:text-secondary-fixed transition-colors"
                href="mailto:mg.th257@gmail.com"
              >
                mg.th257@gmail.com
              </a>
              <span className="text-outline font-label-mono text-label-mono">
                •
              </span>
              <a
                className="font-label-mono text-label-mono uppercase text-surface-bright hover:text-secondary-fixed transition-colors"
                href="tel:+918980676705"
              >
                +91 89806 76705
              </a>
            </div>
          </div>

          {/* Studio Location & Service Regions */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-gutter">
            <div className="space-y-space-xs">
              <h4 className="font-label-lg text-label-lg uppercase tracking-widest text-surface-bright pb-space-xs border-b border-outline-variant/30">
                Primary Studio
              </h4>
              <p className="font-body-sm text-body-sm text-on-primary-container pt-space-xs">
                Elite Designs Studio
                <br />
                Ahmedabad, Gujarat
                <br />
                India (23°01′N 72°34′E)
              </p>
            </div>
            <div className="space-y-space-xs">
              <h4 className="font-label-lg text-label-lg uppercase tracking-widest text-surface-bright pb-space-xs border-b border-outline-variant/30">
                Service Regions
              </h4>
              <p className="font-body-sm text-body-sm text-on-primary-container pt-space-xs">
                Ahmedabad &amp; Gujarat
                <br />
                Pan-India Commissions
                <br />
                UAE &amp; Remote Consultancy
              </p>
            </div>
          </div>

          {/* Index & Dispatch */}
          <div className="lg:col-span-3 flex flex-col justify-between space-y-space-lg">
            <div className="space-y-space-sm">
              <h4 className="font-label-lg text-label-lg uppercase tracking-widest text-surface-bright pb-space-xs border-b border-outline-variant/30">
                Studio Navigation
              </h4>
              <div className="flex flex-col space-y-space-xs pt-space-xs">
                <Link
                  className="font-body-sm text-body-sm text-on-primary-container hover:text-surface-bright transition-colors"
                  href="/projects"
                >
                  Portfolio &amp; Case Studies
                </Link>
                <Link
                  className="font-body-sm text-body-sm text-on-primary-container hover:text-surface-bright transition-colors"
                  href="/services"
                >
                  Design Disciplines &amp; Services
                </Link>
                <Link
                  className="font-body-sm text-body-sm text-on-primary-container hover:text-surface-bright transition-colors"
                  href="/about"
                >
                  About Founder &amp; Philosophy
                </Link>
                <Link
                  className="font-body-sm text-body-sm text-on-primary-container hover:text-surface-bright transition-colors"
                  href="/journal"
                >
                  Design Research &amp; Insights
                </Link>
                <Link
                  className="font-body-sm text-body-sm text-on-primary-container hover:text-surface-bright transition-colors"
                  href="/builder"
                >
                  Growspace 2D Frame Builder
                </Link>
                <Link
                  className="font-body-sm text-body-sm text-on-primary-container hover:text-surface-bright transition-colors"
                  href="/contact"
                >
                  Start a Project / Contact
                </Link>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-space-sm pt-space-sm">
              <a
                className="font-label-mono text-label-mono uppercase text-on-primary-container hover:text-surface-bright transition-colors"
                href="https://instagram.com/elitedesigns226"
                target="_blank"
                rel="noreferrer"
              >
                @elitedesigns226
              </a>
              <span className="text-outline font-label-mono text-label-mono">
                /
              </span>
              <a
                className="font-label-mono text-label-mono uppercase text-on-primary-container hover:text-surface-bright transition-colors"
                href="https://www.linkedin.com/in/mohammad-ali-tharadara-577424187"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <span className="text-outline font-label-mono text-label-mono">
                /
              </span>
              <Link
                className="font-label-mono text-label-mono uppercase text-on-primary-container hover:text-surface-bright transition-colors"
                href="/privacy-policy"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-space-xl pt-space-lg border-t border-outline-variant/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md text-on-primary-container">
          <div className="flex flex-wrap items-center gap-space-md">
            <span className="font-label-mono text-label-mono text-on-primary-container">
              © 2026 ELITE DESIGNS — Mohammadali G. Tharadara. All Rights
              Reserved.
            </span>
          </div>
          <div className="flex items-center gap-space-sm">
            <span className="font-label-mono text-label-mono text-outline">
              Master&apos;s in Design • Architecture, Interior, Furniture &amp;
              Product Practice
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
