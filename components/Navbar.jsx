"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Compass,
  Grid,
  Layers,
  Activity,
  Sliders,
  Menu,
  X,
  ArrowUpRight,
  Briefcase,
} from "lucide-react";
import { useSpace } from "@/context/SpaceContext";

const NAV_ROUTES = [
  { href: "/", label: "Home", step: "01", icon: Compass },
  { href: "/space-check", label: "Space Check", step: "02", icon: Sliders },
  { href: "/diagnosis", label: "Diagnosis", step: "03", icon: Activity },
  { href: "/materials", label: "Materials", step: "04", icon: Layers },
  { href: "/builder", label: "Builder", step: "05", icon: Grid },
  { href: "/studio", label: "Studio & Portfolio", step: "06", icon: Briefcase },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { metrics } = useSpace();

  return (
    <header className="sticky top-0 z-50 bg-canvas/95 backdrop-blur-md border-b border-mineral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 border border-charcoal flex items-center justify-center bg-concrete-200/50 group-hover:bg-charcoal group-hover:text-canvas transition-colors">
              <span className="font-serif text-xl font-semibold tracking-tighter">
                G
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-2xl tracking-tight font-semibold text-charcoal">
                  GROWSPACE
                </span>
                <span className="text-[10px] uppercase tracking-widest px-1.5 py-0.5 border border-mineral-100 text-concrete-600 bg-concrete-200/40">
                  SYS 2.4
                </span>
              </div>
              <p className="text-[11px] text-concrete-600 tracking-wide">
                Modular Spatial Architecture • Elite Designs Studio
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {NAV_ROUTES.map((route) => {
              const Icon = route.icon;
              const isActive =
                route.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(route.href);

              return (
                <Link
                  key={route.href}
                  href={route.href}
                  className={`px-3.5 py-2 text-sm transition-all flex items-center gap-2 border ${
                    isActive
                      ? "bg-charcoal text-canvas border-charcoal font-medium"
                      : "border-transparent text-concrete-800 hover:border-mineral-100 hover:bg-concrete-200/40"
                  }`}
                >
                  <span
                    className={`text-[10px] font-mono ${
                      isActive ? "text-concrete-300" : "text-concrete-500"
                    }`}
                  >
                    {route.step}
                  </span>
                  <Icon className="w-3.5 h-3.5" />
                  <span>{route.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Live Status Pill & Action */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/space-check"
              className="flex items-center gap-2.5 px-3 py-1.5 border border-mineral-100 bg-concrete-50/70 text-xs"
              title="Live Spatial Saturation Index from your room profile"
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  metrics.saturationPercent > 70
                    ? "bg-accent-terracotta animate-pulse"
                    : "bg-accent-sage"
                }`}
              />
              <span className="text-concrete-600">Floor Density:</span>
              <span className="font-mono font-semibold text-charcoal">
                {metrics.saturationPercent}%
              </span>
            </Link>

            <Link
              href="/builder"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs uppercase tracking-widest font-medium bg-charcoal text-canvas hover:bg-concrete-800 transition-colors"
            >
              <span>Launch 2D Planner</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 border border-mineral-100 text-charcoal hover:bg-concrete-200/50"
              aria-label="Toggle Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-mineral-100 bg-canvas px-4 pt-3 pb-6 space-y-2">
          {NAV_ROUTES.map((route) => {
            const Icon = route.icon;
            const isActive =
              route.href === "/"
                ? pathname === "/"
                : pathname.startsWith(route.href);
            return (
              <Link
                key={route.href}
                href={route.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center justify-between px-4 py-3 border ${
                  isActive
                    ? "bg-charcoal text-canvas border-charcoal"
                    : "border-mineral-100 text-charcoal bg-concrete-50/40"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono opacity-60">{route.step}</span>
                  <Icon className="w-4 h-4" />
                  <span className="font-medium text-sm">{route.label}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 opacity-60" />
              </Link>
            );
          })}
          <div className="pt-2 flex items-center justify-between text-xs px-2 text-concrete-600">
            <span>Current Room Saturation: {metrics.saturationPercent}%</span>
            <span>Area: {metrics.roomArea} sq.ft</span>
          </div>
        </div>
      )}
    </header>
  );
}

