"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Layers,
  ShieldCheck,
  Droplets,
  Weight,
  Wrench,
  Maximize2,
  ArrowUpRight,
  Sliders,
} from "lucide-react";

const TACTILE_MATERIALS = [
  {
    id: "bwr-ply",
    code: "MAT-01 // DECKING SUBSTRATE",
    name: "18mm IS:303 BWR Gurjan Marine Grade Plywood",
    finish: "Hand-rubbed Raw Teak Veneer & Matte Polyurethane Seal",
    thickness: "18.0 mm (13-Ply Core)",
    loadRating: "95 kg per 1200mm span",
    moistureSpec: "Boiling Water Resistant (72-hr Monsoon Humidity Tested)",
    costPerSqFt: "₹145 / sq.ft",
    swatchBg: "bg-[#B5926B]",
    description:
      "Engineered for high-humidity Indian monsoons without sagging or delamination. Exposed multi-ply birch/gurjan edges arechamfered at 45° and sealed with natural beeswax.",
    highlights: [
      "Zero-formaldehyde E0 phenolic resin bonding",
      "Pre-threaded M6 brass insert nuts on underside",
      "Scratch-resistant matte open-grain tactile warmth",
    ],
  },
  {
    id: "ms-tube",
    code: "MAT-02 // EXOSKELETAL FRAME",
    name: "25×25mm 16-Gauge Mild Steel Square Tube",
    finish: "RAL 7021 Architectural Charcoal Micro-Textured Powder Coat",
    thickness: "1.6 mm Wall Thickness",
    loadRating: "320 kg axial column load",
    moistureSpec: "Zinc-Phosphate Anti-Rust Primer + 80-Micron Bake",
    costPerSqFt: "₹210 / running mtr",
    swatchBg: "bg-[#242524]",
    description:
      "Laser-slotted on a 75mm vertical pitch so shelves, loft bridges, and cantilever desks can be repositioned in 3 minutes using a single 5mm hex key.",
    highlights: [
      "Internal concealed sleeve couplers for 8ft+ ceiling heights",
      "EPDM high-friction ceiling & floor compression jacks (Zero drilling)",
      "Weld-free visible corners via CNC-bent gusset plates",
    ],
  },
  {
    id: "fluted-glass",
    code: "MAT-03 // TRANSLUCENT INFILL",
    name: "5mm Toughened Reeded (Fluted) Architectural Glass",
    finish: "12mm Linear Vertical Ribbing in Anodized Aluminum Channel",
    thickness: "5.0 mm Tempered Safety Glass",
    loadRating: "78% Light Transmission / 85% Visual Privacy",
    moistureSpec: "100% Waterproof & Dust-Seal EPDM Gasket",
    costPerSqFt: "₹185 / sq.ft",
    swatchBg: "bg-[#D9DFDC]",
    description:
      "Diffuses harsh Indian afternoon glare into soft, rhythmic vertical light bands while visually concealing shelf clutter inside compact bedrooms.",
    highlights: [
      "4x stronger than annealed float glass (IS:2553 certified)",
      "Tool-free slide-in nylon track channels",
      "Allows daylight penetration across room partitions",
    ],
  },
];

export default function MaterialsPage() {
  const [explodeFactor, setExplodeFactor] = useState(55); // 0 = assembled, 100 = fully exploded
  const [selectedMaterial, setSelectedMaterial] = useState(TACTILE_MATERIALS[0]);

  // Offset helper for exploded SVG view
  const offset = (val) => Math.round((explodeFactor / 100) * val);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-mineral-100 pb-8">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-concrete-500 block mb-2">
            MATERIAL HONESTY & STRUCTURAL JOINERY
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-charcoal">
            Tactile Materials & Boltless Joinery Exploder
          </h1>
          <p className="text-sm text-concrete-600 mt-2 max-w-2xl">
            Every Growspace frame is built from three honest architectural
            materials—18mm BWR marine ply, 25mm powder-coated MS steel tube, and
            5mm toughened fluted glass—joined by a single M6 hex node.
          </p>
        </div>

        <Link
          href="/builder"
          className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-canvas text-xs uppercase tracking-widest font-medium hover:bg-concrete-800 transition-colors"
        >
          <span>Configure Materials in 2D Builder</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      {/* TACTILE MATERIAL CARDS */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {TACTILE_MATERIALS.map((mat) => {
          const isSelected = selectedMaterial.id === mat.id;
          return (
            <div
              key={mat.id}
              onClick={() => setSelectedMaterial(mat)}
              className={`border bg-canvas cursor-pointer transition-all flex flex-col justify-between ${
                isSelected
                  ? "border-charcoal ring-1 ring-charcoal"
                  : "border-mineral-100 hover:border-charcoal"
              }`}
            >
              <div>
                {/* Tactile Swatch Visual Header */}
                <div className="p-6 border-b border-mineral-100 bg-concrete-50">
                  <div className="flex items-center justify-between text-xs font-mono text-concrete-500 mb-3">
                    <span>{mat.code}</span>
                    <span>{mat.costPerSqFt}</span>
                  </div>

                  {/* Textured Swatch Representation */}
                  <div
                    className={`h-32 border border-charcoal/20 relative overflow-hidden p-4 flex items-end justify-between ${mat.swatchBg}`}
                  >
                    {mat.id === "bwr-ply" && (
                      <div className="absolute inset-0 opacity-25 bg-[repeating-linear-gradient(12deg,#1E1F1E_0px,#1E1F1E_1px,transparent_1px,transparent_9px)]" />
                    )}
                    {mat.id === "ms-tube" && (
                      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#F3F3F1_1px,transparent_1px)] [background-size:6px_6px]" />
                    )}
                    {mat.id === "fluted-glass" && (
                      <div className="absolute inset-0 opacity-45 bg-[repeating-linear-gradient(90deg,#1E1F1E_0px,#1E1F1E_1px,#F9F9F8_1px,#F9F9F8_8px)]" />
                    )}

                    <span className="relative z-10 px-2.5 py-1 bg-canvas/90 text-charcoal font-mono text-[10px] uppercase tracking-widest border border-mineral-100">
                      {mat.thickness}
                    </span>
                    <span className="relative z-10 px-2.5 py-1 bg-charcoal text-canvas font-mono text-[10px] uppercase tracking-widest">
                      {mat.loadRating}
                    </span>
                  </div>
                </div>

                {/* Card Copy */}
                <div className="p-6 space-y-4">
                  <h2 className="font-serif text-2xl text-charcoal leading-snug">
                    {mat.name}
                  </h2>
                  <p className="text-xs font-mono text-concrete-600">
                    FINISH: {mat.finish}
                  </p>
                  <p className="text-sm text-concrete-600 leading-relaxed">
                    {mat.description}
                  </p>

                  <ul className="space-y-2 pt-2 border-t border-mineral-100">
                    {mat.highlights.map((h) => (
                      <li
                        key={h}
                        className="text-xs text-concrete-800 flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-charcoal mt-1.5 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-6 py-4 border-t border-mineral-100 bg-concrete-50/70 flex items-center justify-between text-xs font-mono">
                <span className="text-concrete-600">{mat.moistureSpec}</span>
              </div>
            </div>
          );
        })}
      </section>

      {/* INTERACTIVE JOINERY EXPLODER SECTION */}
      <section className="border border-mineral-100 bg-canvas p-6 sm:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left 5 Cols: Controls & Engineering Spec */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 border border-mineral-100 bg-concrete-100 text-xs font-mono uppercase tracking-widest text-concrete-600">
              <Wrench className="w-3.5 h-3.5 text-charcoal" />
              <span>NODE J-04 // TRIPLE-AXIS COLLAR JOINT</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
              Interactive Joinery Exploder
            </h2>

            <p className="text-sm text-concrete-600 leading-relaxed">
              Drag the explosion slider below to inspect how the{" "}
              <strong className="text-charcoal">25mm MS Vertical Post</strong>,{" "}
              <strong className="text-charcoal">CNC Steel Collar Cleat</strong>,{" "}
              <strong className="text-charcoal">18mm BWR Plywood Deck</strong>,
              and <strong className="text-charcoal">Fluted Glass Track</strong>{" "}
              lock together with zero visible welds.
            </p>

            {/* Slider Control */}
            <div className="p-5 border border-mineral-100 bg-concrete-50 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="uppercase text-concrete-600">
                  Assembly Explosion Factor
                </span>
                <span className="font-semibold text-charcoal">
                  {explodeFactor}% Exploded
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={explodeFactor}
                onChange={(e) => setExplodeFactor(Number(e.target.value))}
                className="w-full accent-charcoal cursor-pointer"
              />
              <div className="flex justify-between text-[11px] font-mono text-concrete-500">
                <button
                  type="button"
                  onClick={() => setExplodeFactor(0)}
                  className="underline hover:text-charcoal"
                >
                  0% (Locked Torque)
                </button>
                <button
                  type="button"
                  onClick={() => setExplodeFactor(55)}
                  className="underline hover:text-charcoal"
                >
                  55% (Inspection)
                </button>
                <button
                  type="button"
                  onClick={() => setExplodeFactor(100)}
                  className="underline hover:text-charcoal"
                >
                  100% (Full BOM)
                </button>
              </div>
            </div>

            {/* Part Callout Legend */}
            <div className="space-y-2 text-xs font-mono">
              <div className="p-3 border border-mineral-100 flex justify-between">
                <span>01. 25×25mm MS Post (Laser Slotted)</span>
                <span className="text-concrete-500">1.6mm 16G Steel</span>
              </div>
              <div className="p-3 border border-mineral-100 flex justify-between">
                <span>02. Interlocking U-Collar Gusset</span>
                <span className="text-concrete-500">3.0mm Cold Rolled</span>
              </div>
              <div className="p-3 border border-mineral-100 flex justify-between">
                <span>03. 18mm BWR Gurjan Deck + Brass Insert</span>
                <span className="text-concrete-500">IS:303 Marine Grade</span>
              </div>
              <div className="p-3 border border-mineral-100 flex justify-between">
                <span>04. M6 Low-Profile Hex Bolt & EPDM Pad</span>
                <span className="text-concrete-500">Vibration-Proof</span>
              </div>
            </div>
          </div>

          {/* Right 7 Cols: Dynamic Exploding SVG Diagram */}
          <div className="lg:col-span-7 border border-mineral-100 bg-arch-grid p-6 flex flex-col justify-between min-h-[440px]">
            <div className="flex items-center justify-between text-xs font-mono text-concrete-500 border-b border-mineral-100 pb-3">
              <span>CAD EXPLODED AXONOMETRIC // NODE J-04</span>
              <span>HEX TORQUE: 12 N·m</span>
            </div>

            <div className="my-auto py-6 flex items-center justify-center">
              <svg
                viewBox="0 0 540 340"
                className="w-full h-auto max-h-[340px] overflow-visible"
              >
                {/* Center Axis Guide Lines (Dashed) */}
                <line
                  x1="150"
                  y1="30"
                  x2="150"
                  y2="310"
                  stroke="#B85D43"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
                <line
                  x1="100"
                  y1="170"
                  x2="470"
                  y2="170"
                  stroke="#4A6B53"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />

                {/* PART 1: Vertical 25mm MS Post (Moves Left on Explode) */}
                <g
                  style={{
                    transform: `translate(${-offset(45)}px, 0px)`,
                    transition: "transform 120ms ease-out",
                  }}
                >
                  <rect
                    x="132"
                    y="35"
                    width="36"
                    height="270"
                    fill="#1E1F1E"
                    stroke="#F3F3F1"
                    strokeWidth="1.5"
                  />
                  {/* Laser Slots */}
                  {[70, 110, 150, 190, 230, 270].map((yPos) => (
                    <rect
                      key={yPos}
                      x="146"
                      y={yPos}
                      width="8"
                      height="16"
                      fill="#F3F3F1"
                    />
                  ))}
                  <text
                    x="118"
                    y="55"
                    textAnchor="end"
                    fontSize="10"
                    fontFamily="monospace"
                    fill="#1E1F1E"
                  >
                    [01] 25mm MS POST
                  </text>
                </g>

                {/* PART 2: CNC Steel Collar Bracket (Center Anchor, Moves Slightly Left/Down) */}
                <g
                  style={{
                    transform: `translate(${offset(10)}px, ${offset(18)}px)`,
                    transition: "transform 120ms ease-out",
                  }}
                >
                  <path
                    d="M 168 148 L 245 148 L 245 162 L 185 190 L 168 190 Z"
                    fill="#63615A"
                    stroke="#1E1F1E"
                    strokeWidth="1.5"
                  />
                  <circle cx="182" cy="160" r="4" fill="#F3F3F1" />
                  <circle cx="222" cy="155" r="3.5" fill="#F3F3F1" />
                  <text
                    x="205"
                    y="210"
                    fontSize="10"
                    fontFamily="monospace"
                    fill="#1E1F1E"
                  >
                    [02] CNC COLLAR GUSSET
                  </text>
                </g>

                {/* PART 3: 18mm BWR Marine Plywood Deck (Moves Up & Right on Explode) */}
                <g
                  style={{
                    transform: `translate(${offset(55)}px, ${-offset(42)}px)`,
                    transition: "transform 120ms ease-out",
                  }}
                >
                  <rect
                    x="190"
                    y="122"
                    width="240"
                    height="26"
                    fill="#B5926B"
                    stroke="#1E1F1E"
                    strokeWidth="1.5"
                  />
                  {/* Multi-ply veneer lines */}
                  <line
                    x1="190"
                    y1="130"
                    x2="430"
                    y2="130"
                    stroke="#1E1F1E"
                    strokeOpacity="0.35"
                  />
                  <line
                    x1="190"
                    y1="139"
                    x2="430"
                    y2="139"
                    stroke="#1E1F1E"
                    strokeOpacity="0.35"
                  />
                  {/* Embedded Brass Nut */}
                  <rect
                    x="216"
                    y="140"
                    width="12"
                    height="8"
                    fill="#C88A36"
                    stroke="#1E1F1E"
                  />
                  <text
                    x="310"
                    y="112"
                    textAnchor="middle"
                    fontSize="10"
                    fontFamily="monospace"
                    fill="#1E1F1E"
                  >
                    [03] 18mm BWR GURJAN PLY + BRASS INSERT
                  </text>
                </g>

                {/* PART 4: Fluted Glass Upper Privacy Panel (Moves Further Up & Right) */}
                <g
                  style={{
                    transform: `translate(${offset(75)}px, ${-offset(85)}px)`,
                    transition: "transform 120ms ease-out",
                  }}
                >
                  <rect
                    x="255"
                    y="45"
                    width="150"
                    height="70"
                    fill="#D9DFDC"
                    fillOpacity="0.75"
                    stroke="#1E1F1E"
                    strokeWidth="1.5"
                  />
                  {[270, 285, 300, 315, 330, 345, 360, 375, 390].map((gx) => (
                    <line
                      key={gx}
                      x1={gx}
                      y1="45"
                      x2={gx}
                      y2="115"
                      stroke="#1E1F1E"
                      strokeOpacity="0.35"
                    />
                  ))}
                  <text
                    x="330"
                    y="36"
                    textAnchor="middle"
                    fontSize="10"
                    fontFamily="monospace"
                    fill="#4A6B53"
                  >
                    5mm TOUGHENED FLUTED GLASS INFILL
                  </text>
                </g>

                {/* PART 5: M6 Hex Bolt Fastener (Moves Down on Explode) */}
                <g
                  style={{
                    transform: `translate(${offset(32)}px, ${offset(68)}px)`,
                    transition: "transform 120ms ease-out",
                  }}
                >
                  <rect
                    x="218"
                    y="165"
                    width="8"
                    height="22"
                    fill="#9A7B4F"
                    stroke="#1E1F1E"
                  />
                  <rect
                    x="213"
                    y="187"
                    width="18"
                    height="6"
                    fill="#1E1F1E"
                  />
                  <text
                    x="242"
                    y="192"
                    fontSize="10"
                    fontFamily="monospace"
                    fill="#B85D43"
                  >
                    [04] M6 HEX LOCK BOLT
                  </text>
                </g>
              </svg>
            </div>

            <div className="flex items-center justify-between text-xs text-concrete-600 border-t border-mineral-100 pt-3">
              <span>Zero-weld field assembly • Disassembles in 15 minutes when moving homes</span>
              <span className="font-mono">TOLERANCE: ±0.2mm</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

