"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  AlertTriangle,
  CheckCircle2,
  ArrowUpRight,
  Sliders,
  Layers,
  Maximize2,
  Eye,
  Compass,
} from "lucide-react";
import { useSpace, STARTER_KITS } from "@/context/SpaceContext";

export default function DiagnosisPage() {
  const { spaceData, updateSpaceData, metrics } = useSpace();
  const [viewMode, setViewMode] = useState("both"); // "both" | "choke" | "headroom"
  const router = useRouter();

  const recommendedKit =
    STARTER_KITS.find((k) => k.id === spaceData.recommendedKitId) ||
    STARTER_KITS[1];

  const hasAlmirah = (spaceData.inventory || []).includes("steel-almirah");
  const hasDiwan = (spaceData.inventory || []).includes("diwan-storage");
  const hasKhat = (spaceData.inventory || []).includes("khat-cot");
  const hasDrawers = (spaceData.inventory || []).includes("plastic-drawers");
  const hasTrunk = (spaceData.inventory || []).includes("metal-trunk");

  const handleLoadRecommendedFrame = () => {
    updateSpaceData({
      recommendedKitId: recommendedKit.id,
      preloadedBuilderItems: recommendedKit.builderPreset,
    });
    router.push("/builder");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* HEADER BAR */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-mineral-100 pb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 border border-mineral-100 bg-concrete-100 text-xs font-mono uppercase tracking-widest text-concrete-600 mb-3">
            <span>DIAGNOSTIC REPORT // {spaceData.roomType}</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl text-charcoal">
            Spatial Bottleneck & Vertical Headroom Analysis
          </h1>
          <p className="text-sm text-concrete-600 mt-2 max-w-2xl">
            Based on your{" "}
            <strong className="text-charcoal">
              {spaceData.dimensions?.length}&apos; × {spaceData.dimensions?.width}&apos; ×{" "}
              {spaceData.dimensions?.height}&apos;
            </strong>{" "}
            envelope ({metrics.roomArea} sq.ft) and{" "}
            {metrics.selectedInventoryObjects.length} legacy furniture pieces.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/space-check"
            className="inline-flex items-center gap-2 px-4 py-2.5 border border-mineral-100 bg-canvas text-xs uppercase tracking-widest font-medium hover:border-charcoal"
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Modify Room Inputs</span>
          </Link>
          <button
            type="button"
            onClick={handleLoadRecommendedFrame}
            className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-canvas text-xs uppercase tracking-widest font-medium hover:bg-concrete-800 transition-colors"
          >
            <span>1-Click Load Recommended Frame in Builder</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* KPI SUMMARY STRIP */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 border border-mineral-100 bg-canvas">
          <span className="text-xs font-mono uppercase text-concrete-500">
            Floor Saturation Index
          </span>
          <p className="font-serif text-3xl font-semibold text-accent-terracotta mt-1">
            {metrics.saturationPercent}% Occupied
          </p>
          <p className="text-xs text-concrete-600 mt-1">
            {metrics.occupiedSqFt} sq.ft furniture + {spaceData.occupants * 14} sq.ft user path
          </p>
        </div>

        <div className="p-5 border border-mineral-100 bg-canvas">
          <span className="text-xs font-mono uppercase text-concrete-500">
            Unused Vertical Headroom
          </span>
          <p className="font-serif text-3xl font-semibold text-accent-sage mt-1">
            {metrics.unusedVerticalPercent}% Available
          </p>
          <p className="text-xs text-concrete-600 mt-1">
            In {metrics.verticalCubicFt} cu.ft total room volume
          </p>
        </div>

        <div className="p-5 border border-mineral-100 bg-canvas">
          <span className="text-xs font-mono uppercase text-concrete-500">
            Reclaimable Surface Area
          </span>
          <p className="font-serif text-3xl font-semibold text-charcoal mt-1">
            +{Math.round(metrics.occupiedSqFt * 0.85 + 14)} sq.ft
          </p>
          <p className="text-xs text-concrete-600 mt-1">
            Via overhead loft deck & cantilever bay
          </p>
        </div>

        <div className="p-5 border border-mineral-100 bg-canvas">
          <span className="text-xs font-mono uppercase text-concrete-500">
            Anchoring Protocol
          </span>
          <p className="font-serif text-2xl font-semibold text-charcoal mt-1 truncate">
            {spaceData.wallCondition}
          </p>
          <p className="text-xs text-concrete-600 mt-1">
            {spaceData.lightSource}
          </p>
        </div>
      </div>

      {/* MAIN SPLIT: SVG FLOORPLAN SCHEMATIC + RECOMMENDED KIT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left 7 Cols: Interactive SVG Floorplan Choke-Point Diagram */}
        <div className="lg:col-span-7 border border-mineral-100 bg-canvas p-6 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 border-b border-mineral-100">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-concrete-500 block">
                  ARCHITECTURAL SCHEMATIC // SCALE 1:25
                </span>
                <h2 className="font-serif text-2xl text-charcoal">
                  2D Floorplan Choke-Point & Vertical Opportunity Map
                </h2>
              </div>

              {/* Layer Filter Buttons */}
              <div className="flex items-center gap-1 border border-mineral-100 p-1 bg-concrete-50 text-xs">
                {[
                  { id: "both", label: "All Layers" },
                  { id: "choke", label: "Red Bottlenecks" },
                  { id: "headroom", label: "Green Headroom" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setViewMode(tab.id)}
                    className={`px-2.5 py-1 font-mono text-[11px] transition-colors ${
                      viewMode === tab.id
                        ? "bg-charcoal text-canvas"
                        : "text-concrete-600 hover:text-charcoal"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* SVG Floorplan Schematic */}
            <div className="border border-mineral-100 bg-arch-grid p-4 flex items-center justify-center">
              <svg
                viewBox="0 0 560 400"
                className="w-full h-auto max-h-[420px]"
              >
                {/* Outer Room Walls */}
                <rect
                  x="40"
                  y="30"
                  width="480"
                  height="340"
                  fill="#F9F9F8"
                  stroke="#1E1F1E"
                  strokeWidth="4"
                />

                {/* Dimension Callouts */}
                <text
                  x="280"
                  y="20"
                  textAnchor="middle"
                  fontSize="11"
                  fontFamily="monospace"
                  fill="#63615A"
                >
                  NORTH WALL — {spaceData.dimensions?.length || 12} FT
                </text>
                <text
                  x="18"
                  y="200"
                  textAnchor="middle"
                  fontSize="11"
                  fontFamily="monospace"
                  fill="#63615A"
                  transform="rotate(-90 18 200)"
                >
                  WEST WALL — {spaceData.dimensions?.width || 10} FT
                </text>

                {/* East Daylight Window Indicator */}
                <rect x="516" y="120" width="8" height="110" fill="#C88A36" />
                <text
                  x="505"
                  y="175"
                  textAnchor="end"
                  fontSize="9"
                  fontFamily="monospace"
                  fill="#C88A36"
                >
                  DAYLIGHT VECTOR →
                </text>

                {/* Room Entry Door on South-West */}
                <line
                  x1="70"
                  y1="370"
                  x2="145"
                  y2="370"
                  stroke="#F9F9F8"
                  strokeWidth="6"
                />
                <path
                  d="M 70 370 L 70 295 A 75 75 0 0 1 145 370"
                  fill="#B85D43"
                  fillOpacity={viewMode !== "headroom" ? "0.14" : "0.04"}
                  stroke="#B85D43"
                  strokeDasharray="4 4"
                />
                <text
                  x="80"
                  y="358"
                  fontSize="9"
                  fontFamily="monospace"
                  fill="#B85D43"
                >
                  ENTRY SWING ARC
                </text>

                {/* LEGACY INVENTORY ITEMS + RED BOTTLENECK ZONES */}
                {hasAlmirah && (
                  <g>
                    <rect
                      x="55"
                      y="45"
                      width="135"
                      height="65"
                      fill="#D5D3CC"
                      stroke="#1E1F1E"
                      strokeWidth="1.5"
                    />
                    <text
                      x="122"
                      y="82"
                      textAnchor="middle"
                      fontSize="10"
                      fontFamily="monospace"
                      fill="#1E1F1E"
                    >
                      STEEL ALMIRAH
                    </text>

                    {/* Red Choke Zone: Almirah Door Swing */}
                    {viewMode !== "headroom" && (
                      <g>
                        <rect
                          x="55"
                          y="110"
                          width="135"
                          height="60"
                          fill="#B85D43"
                          fillOpacity="0.22"
                          stroke="#B85D43"
                          strokeDasharray="3 3"
                        />
                        <text
                          x="122"
                          y="144"
                          textAnchor="middle"
                          fontSize="9"
                          fontFamily="monospace"
                          fill="#B85D43"
                        >
                          CHOKE: 36&quot; DOOR ARC
                        </text>
                      </g>
                    )}
                  </g>
                )}

                {hasDiwan && (
                  <g>
                    <rect
                      x="280"
                      y="45"
                      width="220"
                      height="115"
                      fill="#E7E5DF"
                      stroke="#1E1F1E"
                      strokeWidth="1.5"
                    />
                    <text
                      x="390"
                      y="105"
                      textAnchor="middle"
                      fontSize="10"
                      fontFamily="monospace"
                      fill="#1E1F1E"
                    >
                      BOX DIWAN (6&apos; × 3&apos;)
                    </text>
                    {viewMode !== "headroom" && (
                      <rect
                        x="260"
                        y="160"
                        width="240"
                        height="38"
                        fill="#B85D43"
                        fillOpacity="0.22"
                        stroke="#B85D43"
                        strokeDasharray="3 3"
                      />
                    )}
                  </g>
                )}

                {hasTrunk && (
                  <g>
                    <rect
                      x="200"
                      y="45"
                      width="70"
                      height="50"
                      fill="#B8B5AC"
                      stroke="#1E1F1E"
                    />
                    <text
                      x="235"
                      y="73"
                      textAnchor="middle"
                      fontSize="8"
                      fontFamily="monospace"
                      fill="#1E1F1E"
                    >
                      METAL TRUNK
                    </text>
                  </g>
                )}

                {hasDrawers && (
                  <g>
                    <rect
                      x="430"
                      y="285"
                      width="70"
                      height="65"
                      fill="#D5D3CC"
                      stroke="#1E1F1E"
                    />
                    <text
                      x="465"
                      y="320"
                      textAnchor="middle"
                      fontSize="8"
                      fontFamily="monospace"
                      fill="#1E1F1E"
                    >
                      PLASTIC DRAWERS
                    </text>
                  </g>
                )}

                {hasKhat && (
                  <g>
                    <rect
                      x="180"
                      y="255"
                      width="195"
                      height="95"
                      fill="#E7E5DF"
                      stroke="#1E1F1E"
                      strokeDasharray="5 3"
                    />
                    <text
                      x="277"
                      y="305"
                      textAnchor="middle"
                      fontSize="9"
                      fontFamily="monospace"
                      fill="#1E1F1E"
                    >
                      FOLDING KHAT / COT FOOTPRINT
                    </text>
                  </g>
                )}

                {/* Central Bottleneck Pinch Point */}
                {viewMode !== "headroom" && (
                  <g>
                    <circle
                      cx="235"
                      cy="195"
                      r="34"
                      fill="#B85D43"
                      fillOpacity="0.25"
                      stroke="#B85D43"
                      strokeWidth="1.5"
                    />
                    <text
                      x="235"
                      y="192"
                      textAnchor="middle"
                      fontSize="8"
                      fontFamily="monospace"
                      fill="#B85D43"
                      fontWeight="bold"
                    >
                      PINCH POINT
                    </text>
                    <text
                      x="235"
                      y="204"
                      textAnchor="middle"
                      fontSize="8"
                      fontFamily="monospace"
                      fill="#B85D43"
                    >
                      19&quot; WALKWAY
                    </text>
                  </g>
                )}

                {/* GREEN VERTICAL HEADROOM OPPORTUNITIES */}
                {viewMode !== "choke" && (
                  <g>
                    {/* North Wall Overhead Bridge Opportunity */}
                    <rect
                      x="50"
                      y="40"
                      width="455"
                      height="75"
                      fill="#4A6B53"
                      fillOpacity="0.22"
                      stroke="#4A6B53"
                      strokeWidth="2"
                    />
                    <text
                      x="277"
                      y="62"
                      textAnchor="middle"
                      fontSize="10"
                      fontFamily="monospace"
                      fill="#1E1F1E"
                      fontWeight="bold"
                    >
                      OPPORTUNITY 01: NORTH WALL OVERHEAD LOFT BRIDGE (+18 SQ.FT)
                    </text>

                    {/* West Wall Vertical Spine Desk Opportunity */}
                    <rect
                      x="50"
                      y="175"
                      width="95"
                      height="115"
                      fill="#4A6B53"
                      fillOpacity="0.22"
                      stroke="#4A6B53"
                      strokeWidth="2"
                    />
                    <text
                      x="97"
                      y="230"
                      textAnchor="middle"
                      fontSize="8"
                      fontFamily="monospace"
                      fill="#1E1F1E"
                      fontWeight="bold"
                    >
                      CANTILEVER DESK BAY
                    </text>
                  </g>
                )}
              </svg>
            </div>
          </div>

          {/* Legend */}
          <div className="pt-4 mt-4 border-t border-mineral-100 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-accent-terracotta/40 border border-accent-terracotta inline-block" />
              <span className="text-concrete-600">
                Red: Circulation Bottleneck / Door Swing Conflict
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-accent-sage/40 border border-accent-sage inline-block" />
              <span className="text-concrete-600">
                Green: Reclaimable Vertical Headroom Zone (Above 6.5 ft)
              </span>
            </div>
          </div>
        </div>

        {/* Right 5 Cols: Prescription & 1-Click Load into Builder */}
        <div className="lg:col-span-5 space-y-6">
          {/* Choke-Point Findings Card */}
          <div className="border border-mineral-100 bg-canvas p-6 space-y-4">
            <div className="flex items-center gap-2 text-accent-terracotta">
              <AlertTriangle className="w-4 h-4" />
              <h3 className="text-xs font-mono uppercase tracking-widest font-semibold">
                DETECTED FLOOR BOTTLENECKS
              </h3>
            </div>

            <ul className="space-y-3 text-xs text-concrete-600">
              {metrics.selectedInventoryObjects.map((item) => (
                <li
                  key={item.id}
                  className="p-3 border border-mineral-100 bg-concrete-50 flex items-start justify-between gap-3"
                >
                  <div>
                    <strong className="text-charcoal block">{item.name}</strong>
                    <span>{item.chokeRisk}</span>
                  </div>
                  <span className="font-mono text-accent-terracotta shrink-0">
                    {item.footprintSqFt} sq.ft
                  </span>
                </li>
              ))}
              {metrics.selectedInventoryObjects.length === 0 && (
                <li className="p-3 border border-mineral-100 bg-concrete-50">
                  Minimal legacy clutter selected. Ideal for a clean perimeter
                  modular spine.
                </li>
              )}
            </ul>
          </div>

          {/* Recommended Kit Prescription */}
          <div className="border border-charcoal bg-concrete-100/80 p-6 space-y-5">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 bg-accent-sage text-canvas text-[10px] font-mono uppercase tracking-widest">
                ARCHITECTURAL PRESCRIPTION
              </span>
              <span className="text-xs font-mono text-concrete-600">
                {recommendedKit.footprint}
              </span>
            </div>

            <div>
              <h3 className="font-serif text-3xl text-charcoal">
                {recommendedKit.name}
              </h3>
              <p className="text-xs text-concrete-600 mt-1 leading-relaxed">
                {recommendedKit.tagline}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="p-2.5 border border-mineral-100 bg-canvas">
                <span className="text-concrete-500 block">Price</span>
                <span className="font-mono font-semibold text-charcoal">
                  ₹{recommendedKit.priceINR.toLocaleString("en-IN")}
                </span>
              </div>
              <div className="p-2.5 border border-mineral-100 bg-canvas">
                <span className="text-concrete-500 block">Capacity</span>
                <span className="font-mono font-semibold text-charcoal">
                  {recommendedKit.loadCapacityKg} kg
                </span>
              </div>
              <div className="p-2.5 border border-mineral-100 bg-canvas">
                <span className="text-concrete-500 block">Parts</span>
                <span className="font-mono font-semibold text-charcoal">
                  {recommendedKit.partsCount} pcs
                </span>
              </div>
            </div>

            <div className="space-y-1.5">
              {recommendedKit.materials.map((m) => (
                <div key={m} className="flex items-center gap-2 text-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent-sage" />
                  <span>{m}</span>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={handleLoadRecommendedFrame}
              className="w-full py-3.5 px-5 bg-charcoal text-canvas text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 hover:bg-concrete-800 transition-colors"
            >
              <span>Load Recommended Frame into 2D Builder</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

