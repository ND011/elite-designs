"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  Sliders,
  Maximize2,
  Layers,
  CheckCircle2,
  MoveHorizontal,
  ShieldCheck,
  Sparkles,
  Ruler,
  Package,
} from "lucide-react";
import { STARTER_KITS, useSpace } from "@/context/SpaceContext";

export default function HomePage() {
  const [sliderPos, setSliderPos] = useState(52);
  const { updateSpaceData } = useSpace();
  const router = useRouter();

  const handleLoadKitToBuilder = (kit) => {
    updateSpaceData({
      recommendedKitId: kit.id,
      preloadedBuilderItems: kit.builderPreset,
    });
    router.push("/builder");
  };

  return (
    <div className="space-y-24 pb-12">
      {/* HERO SECTION WITH INTERACTIVE BEFORE / AFTER SPATIAL SLIDER */}
      <section className="relative border-b border-mineral-100 bg-arch-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Architectural Copy */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-mineral-100 bg-canvas text-xs uppercase tracking-widest text-concrete-600">
                <Sparkles className="w-3.5 h-3.5 text-accent-brass" />
                <span>Modular Vertical Architecture • Indian Homes</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-charcoal leading-[1.08]">
                Reclaim the vertical cubic volume of your room.
              </h1>

              <p className="text-base sm:text-lg text-concrete-600 leading-relaxed max-w-xl">
                Most 10×12 ft Indian rooms are{" "}
                <span className="text-charcoal font-medium">
                  78% saturated at floor level
                </span>{" "}
                by legacy steel almirahs, box diwans, and trunks—while leaving
                over 65% of vertical headroom completely unused. Growspace
                engineers boltless MS-tube and BWR-ply frames that bridge over
                existing furniture without civil work.
              </p>

              {/* Primary CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/space-check"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-charcoal text-canvas text-xs uppercase tracking-widest font-medium hover:bg-concrete-800 transition-colors"
                >
                  <span>Start 8-Step Space Check</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/builder"
                  className="inline-flex items-center gap-2 px-6 py-3.5 border border-charcoal bg-canvas text-charcoal text-xs uppercase tracking-widest font-medium hover:bg-concrete-200/60 transition-colors"
                >
                  <span>Open 2D Frame Builder</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/studio"
                  className="inline-flex items-center gap-2 px-5 py-3.5 border border-mineral-100 bg-concrete-100/70 text-charcoal text-xs uppercase tracking-widest font-medium hover:border-charcoal transition-colors"
                >
                  <span>Elite Designs Studio & Portfolio</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Architectural Telemetry Strip */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-mineral-100">
                <div>
                  <p className="font-serif text-2xl sm:text-3xl font-semibold text-charcoal">
                    +42 sq.ft
                  </p>
                  <p className="text-xs text-concrete-600">
                    Avg. Reclaimed Surface
                  </p>
                </div>
                <div>
                  <p className="font-serif text-2xl sm:text-3xl font-semibold text-charcoal">
                    0 Drills
                  </p>
                  <p className="text-xs text-concrete-600">
                    Compression-Jack Fit
                  </p>
                </div>
                <div>
                  <p className="font-serif text-2xl sm:text-3xl font-semibold text-charcoal">
                    45 Mins
                  </p>
                  <p className="text-xs text-concrete-600">
                    Single-Key Assembly
                  </p>
                </div>
              </div>
            </div>

            {/* Right Interactive Before/After Spatial Comparison Slider */}
            <div className="lg:col-span-6">
              <div className="border border-mineral-100 bg-canvas p-3 sm:p-4 shadow-sm">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-mineral-100 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-mono uppercase tracking-wider text-concrete-600">
                      FIG 01 // ELEVATION COMPARISON (12&apos; × 10&apos; ROOM)
                    </span>
                  </div>
                  <span className="font-mono text-concrete-500">
                    Drag slider: {sliderPos}%
                  </span>
                </div>

                {/* Comparison Viewport */}
                <div className="relative h-[380px] sm:h-[420px] w-full overflow-hidden border border-mineral-100 select-none bg-concrete-100">
                  {/* AFTER LAYER (Full Background - Growspace Vertical System) */}
                  <div className="absolute inset-0 bg-[#EFECE6] flex flex-col justify-between p-5">
                    <div className="flex justify-between items-start">
                      <span className="px-2.5 py-1 bg-accent-sage text-canvas text-[10px] font-mono uppercase tracking-widest">
                        AFTER: GROWSPACE VERTICAL MATRIX (34% FLOOR CHOKE)
                      </span>
                      <span className="text-[11px] font-mono text-accent-sage font-semibold">
                        +38 SQ.FT RECLAIMED
                      </span>
                    </div>

                    {/* Architectural SVG Elevation — AFTER */}
                    <svg
                      viewBox="0 0 500 280"
                      className="w-full h-64 overflow-visible"
                    >
                      {/* Grid Lines */}
                      <g stroke="#D5D3CC" strokeWidth="0.6" strokeDasharray="3 3">
                        <line x1="0" y1="40" x2="500" y2="40" />
                        <line x1="0" y1="100" x2="500" y2="100" />
                        <line x1="0" y1="160" x2="500" y2="160" />
                        <line x1="0" y1="220" x2="500" y2="220" />
                      </g>

                      {/* Reclaimed Green Headroom Zone */}
                      <rect
                        x="30"
                        y="25"
                        width="440"
                        height="85"
                        fill="#4A6B53"
                        fillOpacity="0.12"
                        stroke="#4A6B53"
                        strokeDasharray="4 4"
                      />
                      <text
                        x="42"
                        y="45"
                        fill="#4A6B53"
                        fontSize="10"
                        fontFamily="monospace"
                      >
                        ACTIVE OVERHEAD LOFT BRIDGE (110 KG RATING)
                      </text>

                      {/* Growspace MS Tube Vertical Posts */}
                      <rect x="45" y="20" width="6" height="240" fill="#1E1F1E" />
                      <rect x="195" y="20" width="6" height="240" fill="#1E1F1E" />
                      <rect x="345" y="20" width="6" height="240" fill="#1E1F1E" />
                      <rect x="450" y="20" width="6" height="240" fill="#1E1F1E" />

                      {/* Overhead BWR Ply Decks */}
                      <rect x="45" y="55" width="411" height="8" fill="#9A7B4F" />
                      <rect x="195" y="105" width="261" height="7" fill="#9A7B4F" />

                      {/* Stored Trunks on Loft */}
                      <rect
                        x="65"
                        y="28"
                        width="70"
                        height="27"
                        fill="#63615A"
                        stroke="#1E1F1E"
                      />
                      <rect
                        x="145"
                        y="32"
                        width="42"
                        height="23"
                        fill="#8C8980"
                        stroke="#1E1F1E"
                      />

                      {/* Existing Steel Almirah neatly framed */}
                      <rect
                        x="60"
                        y="75"
                        width="120"
                        height="185"
                        fill="#D5D3CC"
                        stroke="#1E1F1E"
                        strokeWidth="1.5"
                      />
                      <line
                        x1="120"
                        y1="75"
                        x2="120"
                        y2="260"
                        stroke="#1E1F1E"
                      />
                      <text
                        x="75"
                        y="165"
                        fill="#1E1F1E"
                        fontSize="9"
                        fontFamily="monospace"
                      >
                        ALMIRAH BRIDGED
                      </text>

                      {/* Cantilever Work Desk + Fluted Glass Bay */}
                      <rect
                        x="201"
                        y="112"
                        width="144"
                        height="58"
                        fill="#F9F9F8"
                        stroke="#1E1F1E"
                      />
                      <text
                        x="215"
                        y="144"
                        fill="#1E1F1E"
                        fontSize="9"
                        fontFamily="monospace"
                      >
                        FLUTED GLASS CABINET
                      </text>

                      {/* BWR Cantilever Study Surface */}
                      <rect
                        x="195"
                        y="185"
                        width="255"
                        height="9"
                        fill="#9A7B4F"
                        stroke="#1E1F1E"
                      />
                      <text
                        x="215"
                        y="212"
                        fill="#4A6B53"
                        fontSize="10"
                        fontFamily="monospace"
                      >
                        CLEAR FLOOR CIRCULATION & WORK BAY
                      </text>

                      {/* Floor Line */}
                      <line
                        x1="10"
                        y1="260"
                        x2="490"
                        y2="260"
                        stroke="#1E1F1E"
                        strokeWidth="2"
                      />
                    </svg>

                    <div className="flex justify-between text-[11px] text-concrete-600 border-t border-mineral-100 pt-2">
                      <span>Vertical Utilization: 82%</span>
                      <span>Boltless 25mm MS Frame + 18mm BWR Ply</span>
                    </div>
                  </div>

                  {/* BEFORE LAYER (Clipped by sliderPos - Cluttered Floor & Unused Headroom) */}
                  <div
                    className="absolute inset-0 bg-[#E6E3DC] flex flex-col justify-between p-5 border-r-2 border-charcoal"
                    style={{
                      clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
                    }}
                  >
                    <div className="flex justify-between items-start">
                      <span className="px-2.5 py-1 bg-accent-terracotta text-canvas text-[10px] font-mono uppercase tracking-widest">
                        BEFORE: FLOOR CONGESTION (84% SATURATED)
                      </span>
                      <span className="text-[11px] font-mono text-accent-terracotta font-semibold">
                        DEAD AIR SPACE
                      </span>
                    </div>

                    {/* Architectural SVG Elevation — BEFORE */}
                    <svg
                      viewBox="0 0 500 280"
                      className="w-full h-64 overflow-visible"
                    >
                      {/* Dead Vertical Volume Warning Box */}
                      <rect
                        x="30"
                        y="25"
                        width="440"
                        height="110"
                        fill="#B85D43"
                        fillOpacity="0.12"
                        stroke="#B85D43"
                        strokeDasharray="4 4"
                      />
                      <text
                        x="130"
                        y="75"
                        fill="#B85D43"
                        fontSize="11"
                        fontFamily="monospace"
                      >
                        68% UNUSED VERTICAL HEADROOM (DEAD VOLUME)
                      </text>

                      {/* Bulky Almirah */}
                      <rect
                        x="45"
                        y="85"
                        width="125"
                        height="175"
                        fill="#B8B5AC"
                        stroke="#1E1F1E"
                        strokeWidth="1.5"
                      />
                      <text
                        x="62"
                        y="175"
                        fill="#1E1F1E"
                        fontSize="9"
                        fontFamily="monospace"
                      >
                        STEEL ALMIRAH
                      </text>

                      {/* Metal Trunk on Floor */}
                      <rect
                        x="180"
                        y="210"
                        width="85"
                        height="50"
                        fill="#8C8980"
                        stroke="#1E1F1E"
                      />
                      <text
                        x="192"
                        y="240"
                        fill="#F3F3F1"
                        fontSize="8"
                        fontFamily="monospace"
                      >
                        METAL PETI
                      </text>

                      {/* Plastic Drawers */}
                      <rect
                        x="275"
                        y="165"
                        width="60"
                        height="95"
                        fill="#C4C1B8"
                        stroke="#1E1F1E"
                      />
                      <text
                        x="282"
                        y="215"
                        fill="#1E1F1E"
                        fontSize="8"
                        fontFamily="monospace"
                      >
                        PLASTIC
                      </text>

                      {/* Box Diwan sprawling across floor */}
                      <rect
                        x="345"
                        y="195"
                        width="135"
                        height="65"
                        fill="#B85D43"
                        fillOpacity="0.3"
                        stroke="#B85D43"
                        strokeWidth="1.5"
                      />
                      <text
                        x="362"
                        y="232"
                        fill="#1E1F1E"
                        fontSize="9"
                        fontFamily="monospace"
                      >
                        DIWAN CHOKE ZONE
                      </text>

                      {/* Floor Line */}
                      <line
                        x1="10"
                        y1="260"
                        x2="490"
                        y2="260"
                        stroke="#1E1F1E"
                        strokeWidth="2"
                      />
                    </svg>

                    <div className="flex justify-between text-[11px] text-concrete-600 border-t border-mineral-100 pt-2">
                      <span>Floor Choke Points: 3 Critical</span>
                      <span>Zero Vertical Integration</span>
                    </div>
                  </div>

                  {/* Interactive Range Input Overlay */}
                  <input
                    type="range"
                    min="5"
                    max="95"
                    value={sliderPos}
                    onChange={(e) => setSliderPos(Number(e.target.value))}
                    aria-label="Compare Before and After Spatial Elevation"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                  />

                  {/* Visual Handle */}
                  <div
                    className="absolute top-0 bottom-0 w-0.5 bg-charcoal pointer-events-none z-10"
                    style={{ left: `${sliderPos}%` }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 bg-charcoal text-canvas flex items-center justify-center border border-canvas shadow-md">
                      <MoveHorizontal className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Slider Quick Toggles */}
                <div className="mt-3 flex items-center justify-between text-xs text-concrete-600">
                  <button
                    type="button"
                    onClick={() => setSliderPos(85)}
                    className="underline underline-offset-4 hover:text-charcoal"
                  >
                    View Legacy Floor Clutter
                  </button>
                  <span className="font-mono text-[11px]">
                    Slide horizontally to inspect vertical frame intervention
                  </span>
                  <button
                    type="button"
                    onClick={() => setSliderPos(15)}
                    className="underline underline-offset-4 hover:text-charcoal"
                  >
                    View Growspace Frame
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3-STEP GROWSPACE METHODOLOGY SECTION (VALUE PILLARS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-concrete-500 mb-2">
              ARCHITECTURAL METHODOLOGY
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
              Three steps from congested room to modular clarity.
            </h2>
          </div>
          <Link
            href="/materials"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-medium text-charcoal hover:underline underline-offset-4"
          >
            <span>Explore Material Engineering</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              step: "PILLAR 01",
              title: "Spatial Choke-Point Audit",
              desc: "We map your existing Indian household inventory—steel almirahs, box diwans, folding khats, and metal trunks—to quantify exact door-swing conflicts and dead vertical headroom.",
              metric: "8-Step Diagnostic Engine",
              href: "/space-check",
              cta: "Run Room Audit",
              icon: Sliders,
            },
            {
              step: "PILLAR 02",
              title: "Exoskeletal MS + BWR Bridging",
              desc: "Instead of discarding heavy heirloom furniture, our 25mm powder-coated MS square tubes straddle existing pieces—creating overhead loft decks and cantilevered work bays.",
              metric: "240 kg Safe Frame Load",
              href: "/materials",
              cta: "Inspect Joinery",
              icon: Layers,
            },
            {
              step: "PILLAR 03",
              title: "Snap-to-Grid 2D Frame Planner",
              desc: "Configure posts, BWR marine ply decks, and 5mm fluted glass privacy screens on a 300mm architectural grid with live INR budgeting and part-by-part BOM generation.",
              metric: "Live INR Cost & Load Counter",
              href: "/builder",
              cta: "Open 2D Builder",
              icon: Maximize2,
            },
          ].map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.step}
                className="border border-mineral-100 bg-concrete-50/60 p-7 flex flex-col justify-between hover:border-charcoal transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-widest text-concrete-500">
                      {pillar.step}
                    </span>
                    <div className="w-9 h-9 border border-mineral-100 bg-canvas flex items-center justify-center">
                      <Icon className="w-4 h-4 text-charcoal" />
                    </div>
                  </div>
                  <h3 className="font-serif text-2xl text-charcoal">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-concrete-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-mineral-100 flex items-center justify-between">
                  <span className="text-xs font-mono text-concrete-600">
                    {pillar.metric}
                  </span>
                  <Link
                    href={pillar.href}
                    className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-semibold text-charcoal hover:underline underline-offset-4"
                  >
                    <span>{pillar.cta}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CURATED STARTER KIT PREVIEW GRID WITH PRICES IN INR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-concrete-500 mb-2">
              PRE-ENGINEERED ARCHITECTURAL ASSEMBLIES
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
              Curated Starter Kits (INR Pricing)
            </h2>
          </div>
          <p className="text-sm text-concrete-600 max-w-md">
            Every starter kit ships flat-packed with an Allen hex torque key,
            leveling brass feet, and 1-click loading into our 2D customization
            grid.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {STARTER_KITS.map((kit, idx) => (
            <div
              key={kit.id}
              className="border border-mineral-100 bg-canvas flex flex-col justify-between hover:border-charcoal transition-all"
            >
              <div>
                {/* Schematic Header */}
                <div className="p-6 border-b border-mineral-100 bg-concrete-100/70">
                  <div className="flex items-center justify-between text-xs font-mono text-concrete-600 mb-3">
                    <span>ASSEMBLY 0{idx + 1}</span>
                    <span>{kit.footprint}</span>
                  </div>

                  {/* Mini Architectural Isometric/Elevation Wireframe */}
                  <div className="h-36 border border-mineral-100 bg-canvas p-3 flex items-center justify-center">
                    <svg viewBox="0 0 240 100" className="w-full h-full">
                      <line
                        x1="15"
                        y1="88"
                        x2="225"
                        y2="88"
                        stroke="#1E1F1E"
                        strokeWidth="1.5"
                      />
                      {/* Vertical posts */}
                      <rect x="35" y="12" width="4" height="76" fill="#1E1F1E" />
                      <rect x="118" y="12" width="4" height="76" fill="#1E1F1E" />
                      <rect x="200" y="12" width="4" height="76" fill="#1E1F1E" />
                      {/* Overhead Loft */}
                      <rect x="35" y="22" width="169" height="5" fill="#9A7B4F" />
                      {/* Mid work surface */}
                      <rect
                        x="35"
                        y="55"
                        width={idx === 0 ? "90" : "169"}
                        height="5"
                        fill="#9A7B4F"
                      />
                      {/* Fluted glass infill representation */}
                      <rect
                        x="122"
                        y="27"
                        width="78"
                        height="28"
                        fill="#D5D3CC"
                        fillOpacity="0.6"
                        stroke="#1E1F1E"
                      />
                    </svg>
                  </div>
                </div>

                {/* Kit Details */}
                <div className="p-6 space-y-4">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-serif text-2xl text-charcoal">
                      {kit.name}
                    </h3>
                  </div>

                  <p className="text-sm text-concrete-600 leading-relaxed">
                    {kit.tagline}
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                    <div className="p-2.5 border border-mineral-100 bg-concrete-50">
                      <span className="text-concrete-500 block">Max Load</span>
                      <span className="font-mono font-semibold text-charcoal">
                        {kit.loadCapacityKg} kg UDL
                      </span>
                    </div>
                    <div className="p-2.5 border border-mineral-100 bg-concrete-50">
                      <span className="text-concrete-500 block">Modular Parts</span>
                      <span className="font-mono font-semibold text-charcoal">
                        {kit.partsCount} Components
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1.5 pt-2">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-concrete-500">
                      Included Material Spec:
                    </p>
                    {kit.materials.map((mat) => (
                      <div
                        key={mat}
                        className="flex items-center gap-2 text-xs text-concrete-800"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent-sage shrink-0" />
                        <span>{mat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price & Builder Action Footer */}
              <div className="p-6 border-t border-mineral-100 bg-concrete-50/60 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-concrete-500 block">
                    Complete Kit Price
                  </span>
                  <span className="font-serif text-2xl font-semibold text-charcoal">
                    ₹{kit.priceINR.toLocaleString("en-IN")}
                  </span>
                  <span className="text-[11px] text-concrete-500 ml-1">
                    incl. GST
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => handleLoadKitToBuilder(kit)}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-charcoal text-canvas text-xs uppercase tracking-widest font-medium hover:bg-concrete-800 transition-colors"
                >
                  <span>Load in Builder</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

