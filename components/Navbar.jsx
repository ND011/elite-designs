"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

const TOOL_LINKS = [
  { href: "/space-check", label: "01. Space Check" },
  { href: "/diagnosis", label: "02. Diagnosis" },
  { href: "/materials", label: "03. Material Lab" },
  { href: "/builder", label: "04. 2D Frame Builder" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-md border-b border-surface-container-highest transition-colors duration-200">
      <div className="h-20 w-full px-margin lg:px-margin-desktop flex items-center justify-between gap-gutter">
        {/* Brand Identity — Crisp Tightly-Cropped Transparent Emblem */}
        <div className="flex items-center gap-space-md shrink-0">
          <Link
            href="/"
            className="flex items-center gap-3.5 group focus:outline-none"
          >
            <img
              alt="Elite Designs Official Emblem"
              className="h-14 w-14 object-contain transition-transform duration-300 group-hover:scale-105"
              src="/brand/elite-emblem-dark.png"
            />
            <span className="flex flex-col">
              <span className="font-display text-xl md:text-2xl uppercase tracking-[0.18em] text-on-surface font-medium leading-none">
                ELITE DESIGNS
              </span>
              <span className="font-label-mono text-label-mono uppercase text-secondary tracking-[0.2em] mt-1">
                Mohammadali G. Tharadara
              </span>
            </span>
          </Link>
        </div>

        {/* Primary Stitch Navigation */}
        <nav className="hidden xl:flex items-center gap-space-lg">
          {NAV_LINKS.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-1 font-label-lg text-label-lg uppercase tracking-widest transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:bg-primary after:transition-all after:duration-300 ${
                  isActive
                    ? "text-primary font-bold after:w-full"
                    : "text-on-surface-variant hover:text-on-surface after:w-0 hover:after:w-full"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          {/* Spatial Planner Tools Dropdown */}
          <div className="relative group">
            <button
              type="button"
              className="flex items-center gap-1 py-1 font-label-mono text-label-mono uppercase tracking-widest text-secondary hover:text-primary transition-colors"
            >
              <span>[Growspace Lab]</span>
              <span className="material-symbols-outlined text-xs">
                expand_more
              </span>
            </button>
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute right-0 top-full pt-2 w-52">
              <div className="bg-surface border border-surface-container-highest shadow-lg p-space-xs flex flex-col">
                {TOOL_LINKS.map((tool) => (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    className="px-space-sm py-2 font-label-mono text-label-mono uppercase text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors"
                  >
                    {tool.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Right Coordinate & CTA */}
        <div className="flex items-center gap-space-md shrink-0">
          <div className="hidden md:flex flex-col text-right pr-space-sm border-r border-surface-container-highest">
            <span className="font-label-mono text-label-mono text-secondary uppercase">
              AHMEDABAD, INDIA
            </span>
            <span className="font-label-mono text-label-mono text-outline">
              23°01′N 72°34′E
            </span>
          </div>
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center px-space-md py-2 rounded-full bg-primary text-on-primary font-label-lg text-label-lg uppercase tracking-wider hover:bg-inverse-surface hover:text-inverse-on-surface transition-colors duration-200"
          >
            Start a Project
          </Link>
          <Link href="/about" className="flex items-center pl-space-xs">
            <img
              alt="Mohammadali G. Tharadara"
              className="w-10 h-10 rounded-full object-cover object-top border border-surface-container-highest"
              src="/brand/founder-portrait.jpg"
            />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden p-1.5 text-on-surface hover:bg-surface-container-low"
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="xl:hidden bg-surface border-b border-surface-container-highest px-margin py-space-md space-y-space-md">
          <div className="grid grid-cols-2 gap-2">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-2 px-3 bg-surface-container-low font-label-lg text-label-lg uppercase tracking-widest text-on-surface hover:bg-primary hover:text-on-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="pt-2 border-t border-surface-container-highest">
            <span className="font-label-mono text-label-mono uppercase text-secondary block mb-2">
              Growspace Interactive Tools
            </span>
            <div className="grid grid-cols-2 gap-2">
              {TOOL_LINKS.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-1.5 px-2 bg-surface-container font-label-mono text-label-mono uppercase text-on-surface-variant hover:text-primary"
                >
                  {tool.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
