import React from "react";
import Link from "next/link";
import { ArrowUpRight, MapPin, Mail, Phone, Layers } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-mineral-100 bg-concrete-200/30 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-mineral-100">
          {/* Studio column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border border-charcoal flex items-center justify-center bg-charcoal text-canvas">
                <span className="font-serif text-base font-semibold">G</span>
              </div>
              <span className="font-serif text-2xl font-semibold tracking-tight">
                GROWSPACE × ELITE DESIGNS
              </span>
            </div>
            <p className="text-sm text-concrete-600 leading-relaxed max-w-md">
              We believe good design begins with understanding. By exploring the
              relationship between people, space, material, geometry, and function,
              we engineer modular structural frames that reclaim vertical cubic
              volume in compact Indian homes.
            </p>
            <div className="pt-2 space-y-1.5 text-xs text-concrete-600">
              <div className="flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-charcoal" />
                <span className="font-medium text-charcoal">
                  Principal Designer + Educator: Mohammadali G. Tharadara
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-charcoal" />
                <span>Ahmedabad, Gujarat, India</span>
              </div>
              <div className="flex items-center gap-4 pt-1">
                <a
                  href="mailto:mg.th257@gmail.com"
                  className="inline-flex items-center gap-1.5 hover:text-charcoal underline underline-offset-4"
                >
                  <Mail className="w-3.5 h-3.5" />
                  mg.th257@gmail.com
                </a>
                <a
                  href="tel:+918980676705"
                  className="inline-flex items-center gap-1.5 hover:text-charcoal underline underline-offset-4"
                >
                  <Phone className="w-3.5 h-3.5" />
                  +91 89806 76705
                </a>
              </div>
            </div>
          </div>

          {/* Workflow Navigation */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-concrete-500">
              Spatial Workflow
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:underline underline-offset-4 flex items-center justify-between max-w-[220px]"
                >
                  <span>01. Home & Starter Kits</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </Link>
              </li>
              <li>
                <Link
                  href="/space-check"
                  className="hover:underline underline-offset-4 flex items-center justify-between max-w-[220px]"
                >
                  <span>02. 8-Step Space Check</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </Link>
              </li>
              <li>
                <Link
                  href="/diagnosis"
                  className="hover:underline underline-offset-4 flex items-center justify-between max-w-[220px]"
                >
                  <span>03. Choke-Point Diagnosis</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </Link>
              </li>
              <li>
                <Link
                  href="/materials"
                  className="hover:underline underline-offset-4 flex items-center justify-between max-w-[220px]"
                >
                  <span>04. Tactile Materials & Joinery</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </Link>
              </li>
              <li>
                <Link
                  href="/builder"
                  className="hover:underline underline-offset-4 flex items-center justify-between max-w-[220px]"
                >
                  <span>05. 2D Modular Frame Builder</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </Link>
              </li>
              <li>
                <Link
                  href="/studio"
                  className="hover:underline underline-offset-4 flex items-center justify-between max-w-[220px]"
                >
                  <span>06. Elite Designs Studio & Portfolio</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Material Standards */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-concrete-500">
              Architectural Spec
            </h4>
            <div className="p-4 border border-mineral-100 bg-canvas space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-concrete-600">Primary Grid:</span>
                <span className="font-mono">300mm × 300mm</span>
              </div>
              <div className="flex justify-between">
                <span className="text-concrete-600">Structural Tube:</span>
                <span className="font-mono">25×25mm MS 16G</span>
              </div>
              <div className="flex justify-between">
                <span className="text-concrete-600">Core Decking:</span>
                <span className="font-mono">18mm IS:303 BWR Ply</span>
              </div>
              <div className="flex justify-between">
                <span className="text-concrete-600">Infill Glazing:</span>
                <span className="font-mono">5mm Toughened Reeded</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-concrete-500 gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <p>© {new Date().getFullYear()} Growspace System by Elite Designs. Thoughtful spaces for modern living.</p>
            <Link
              href="/privacy-policy"
              className="underline underline-offset-4 hover:text-charcoal font-mono"
            >
              Privacy Policy & Legal Notice
            </Link>
          </div>
          <p className="font-mono">
            PALETTE: #F3F3F1 CANVAS • #1E1F1E CHARCOAL • #D5D3CC MINERAL
          </p>
        </div>
      </div>
    </footer>
  );
}

