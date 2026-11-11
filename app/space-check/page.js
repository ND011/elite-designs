"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  AlertTriangle,
  Activity,
  Box,
  Users,
  Sun,
  Hammer,
  IndianRupee,
  Maximize2,
  Layers,
} from "lucide-react";
import {
  useSpace,
  FURNITURE_INVENTORY_CATALOG,
  STARTER_KITS,
} from "@/context/SpaceContext";

const WIZARD_STEPS = [
  { id: 1, title: "Room Archetype", subtitle: "Primary spatial function" },
  { id: 2, title: "Envelope Dimensions", subtitle: "Length, width & ceiling height" },
  { id: 3, title: "Occupancy Density", subtitle: "Daily active users in room" },
  { id: 4, title: "Legacy Furniture Inventory", subtitle: "Visual Indian household pieces" },
  { id: 5, title: "Daily Activity Zones", subtitle: "Overlapping functional demands" },
  { id: 6, title: "Daylight & Fenestration", subtitle: "Window & air circulation vectors" },
  { id: 7, title: "Wall & Ceiling Substrate", subtitle: "Structural anchoring method" },
  { id: 8, title: "Target Investment Tier", subtitle: "Modular kit allocation in INR" },
];

export default function SpaceCheckPage() {
  const [step, setStep] = useState(1);
  const { spaceData, updateSpaceData, metrics } = useSpace();
  const router = useRouter();

  const toggleInventoryItem = (id) => {
    const current = spaceData.inventory || [];
    const exists = current.includes(id);
    const next = exists ? current.filter((item) => item !== id) : [...current, id];
    updateSpaceData({ inventory: next });
  };

  const toggleActivity = (act) => {
    const current = spaceData.activities || [];
    const exists = current.includes(act);
    const next = exists ? current.filter((a) => a !== act) : [...current, act];
    updateSpaceData({ activities: next });
  };

  const handleFinishWizard = () => {
    // Automatically pick best recommended starter kit based on inventory & room size
    let recId = "vertical-work-bay";
    if ((spaceData.inventory || []).length <= 1 && metrics.roomArea <= 110) {
      recId = "compact-study-spine";
    } else if ((spaceData.activities || []).includes("Privacy Partition") || metrics.roomArea >= 140) {
      recId = "living-partition-grid";
    }
    const foundKit = STARTER_KITS.find((k) => k.id === recId) || STARTER_KITS[1];
    updateSpaceData({
      recommendedKitId: foundKit.id,
      preloadedBuilderItems: foundKit.builderPreset,
    });
    router.push("/diagnosis");
  };

  // Determine saturation color state
  const isHighSaturation = metrics.saturationPercent >= 70;
  const isModerateSaturation =
    metrics.saturationPercent >= 48 && metrics.saturationPercent < 70;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* TOP LIVE SPATIAL SATURATION METER */}
      <div className="border border-mineral-100 bg-canvas p-5 sm:p-6 shadow-sm sticky top-20 z-30">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
          <div className="flex items-center gap-2.5">
            <Activity className="w-4 h-4 text-charcoal" />
            <span className="text-xs font-mono uppercase tracking-widest text-charcoal font-semibold">
              LIVE SPATIAL SATURATION METER
            </span>
            <span
              className={`text-[10px] font-mono uppercase px-2 py-0.5 border ${
                isHighSaturation
                  ? "bg-accent-terracotta/15 text-accent-terracotta border-accent-terracotta"
                  : isModerateSaturation
                  ? "bg-accent-amber/15 text-accent-amber border-accent-amber"
                  : "bg-accent-sage/15 text-accent-sage border-accent-sage"
              }`}
            >
              {isHighSaturation
                ? "Critical Floor Choke"
                : isModerateSaturation
                ? "Moderate Congestion"
                : "Optimal Circulation"}
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono">
            <div>
              <span className="text-concrete-500">Floor Area: </span>
              <span className="font-semibold text-charcoal">
                {metrics.roomArea} sq.ft
              </span>
            </div>
            <div>
              <span className="text-concrete-500">Furniture Footprint: </span>
              <span className="font-semibold text-charcoal">
                {metrics.occupiedSqFt} sq.ft
              </span>
            </div>
            <div>
              <span className="text-concrete-500">Unused Headroom: </span>
              <span className="font-semibold text-accent-sage">
                {metrics.unusedVerticalPercent}% Free
              </span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-3 bg-concrete-200 border border-mineral-100 overflow-hidden relative">
          <div
            className={`h-full transition-all duration-300 ${
              isHighSaturation
                ? "bg-accent-terracotta"
                : isModerateSaturation
                ? "bg-accent-amber"
                : "bg-accent-sage"
            }`}
            style={{ width: `${metrics.saturationPercent}%` }}
          />
        </div>

        <div className="flex justify-between text-[11px] font-mono text-concrete-600 mt-2">
          <span>0% Empty Envelope</span>
          <span>
            Current Floor Saturation:{" "}
            <strong className="text-charcoal">{metrics.saturationPercent}%</strong>{" "}
            (Includes {spaceData.occupants} occupant circulation buffer)
          </span>
          <span>100% Gridlocked</span>
        </div>
      </div>

      {/* 8-STEP PROGRESS TRACKER */}
      <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
        {WIZARD_STEPS.map((s) => {
          const isCurrent = s.id === step;
          const isCompleted = s.id < step;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => setStep(s.id)}
              className={`p-2.5 text-left border transition-all ${
                isCurrent
                  ? "bg-charcoal text-canvas border-charcoal"
                  : isCompleted
                  ? "bg-concrete-200/70 text-charcoal border-mineral-100"
                  : "bg-canvas text-concrete-500 border-mineral-100 hover:border-charcoal"
              }`}
            >
              <div className="flex items-center justify-between text-[10px] font-mono">
                <span>0{s.id}</span>
                {isCompleted && <Check className="w-3 h-3" />}
              </div>
              <p className="text-xs font-medium truncate mt-1">{s.title}</p>
            </button>
          );
        })}
      </div>

      {/* ACTIVE STEP PANEL */}
      <div className="border border-mineral-100 bg-canvas p-6 sm:p-10 min-h-[420px] flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between border-b border-mineral-100 pb-4 mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-concrete-500">
                STEP 0{step} OF 08 // {WIZARD_STEPS[step - 1].subtitle}
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl text-charcoal mt-1">
                {WIZARD_STEPS[step - 1].title}
              </h1>
            </div>
            <span className="hidden sm:inline-block px-3 py-1 border border-mineral-100 text-xs font-mono bg-concrete-50">
              Auto-saved to Profile
            </span>
          </div>

          {/* STEP 1: ROOM ARCHETYPE */}
          {step === 1 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  name: "Multipurpose Bedroom",
                  desc: "Shared sleep, study/WFH, and heavy wardrobe storage in a single room.",
                },
                {
                  name: "1BHK Living-cum-Sleeping Hall",
                  desc: "Daytime family lounge that converts to a sleeping or workspace zone at night.",
                },
                {
                  name: "Compact Study / Creator Studio",
                  desc: "High desk-surface requirement with vertical equipment and book archiving.",
                },
                {
                  name: "Children's Shared Sibling Room",
                  desc: "Dual study stations + twin sleeping footprints needing vertical separation.",
                },
              ].map((option) => {
                const selected = spaceData.roomType === option.name;
                return (
                  <button
                    key={option.name}
                    type="button"
                    onClick={() => updateSpaceData({ roomType: option.name })}
                    className={`p-6 text-left border transition-all flex flex-col justify-between ${
                      selected
                        ? "border-charcoal bg-concrete-200/50 ring-1 ring-charcoal"
                        : "border-mineral-100 bg-concrete-50/40 hover:border-charcoal"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-serif text-2xl text-charcoal">
                        {option.name}
                      </span>
                      <div
                        className={`w-5 h-5 border flex items-center justify-center ${
                          selected
                            ? "bg-charcoal text-canvas border-charcoal"
                            : "border-mineral-100"
                        }`}
                      >
                        {selected && <Check className="w-3.5 h-3.5" />}
                      </div>
                    </div>
                    <p className="text-xs text-concrete-600 leading-relaxed">
                      {option.desc}
                    </p>
                  </button>
                );
              })}
            </div>
          )}

          {/* STEP 2: DIMENSIONS */}
          {step === 2 && (
            <div className="space-y-8">
              <p className="text-sm text-concrete-600">
                Adjust the sliders to match your room&apos;s interior wall-to-wall
                dimensions in feet. Notice how the Saturation Meter above updates
                immediately.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    key: "length",
                    label: "Room Length (ft)",
                    min: 8,
                    max: 20,
                    val: spaceData.dimensions?.length || 12,
                  },
                  {
                    key: "width",
                    label: "Room Width (ft)",
                    min: 7,
                    max: 16,
                    val: spaceData.dimensions?.width || 10,
                  },
                  {
                    key: "height",
                    label: "Ceiling Height (ft)",
                    min: 8,
                    max: 13,
                    val: spaceData.dimensions?.height || 10,
                  },
                ].map((dim) => (
                  <div
                    key={dim.key}
                    className="p-5 border border-mineral-100 bg-concrete-50/50 space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono uppercase text-concrete-600">
                        {dim.label}
                      </span>
                      <span className="font-serif text-3xl font-semibold text-charcoal">
                        {dim.val} ft
                      </span>
                    </div>
                    <input
                      type="range"
                      min={dim.min}
                      max={dim.max}
                      step="1"
                      value={dim.val}
                      onChange={(e) =>
                        updateSpaceData({
                          dimensions: {
                            ...spaceData.dimensions,
                            [dim.key]: Number(e.target.value),
                          },
                        })
                      }
                      className="w-full accent-charcoal cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] font-mono text-concrete-500">
                      <span>{dim.min} ft</span>
                      <span>{dim.max} ft</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border border-mineral-100 bg-concrete-100 flex items-center justify-between text-xs font-mono">
                <span>
                  COMPUTED FLOOR AREA: {metrics.roomArea} SQ.FT
                </span>
                <span>
                  TOTAL CUBIC VOLUME: {metrics.verticalCubicFt} CU.FT
                </span>
              </div>
            </div>
          )}

          {/* STEP 3: OCCUPANCY */}
          {step === 3 && (
            <div className="space-y-6">
              <p className="text-sm text-concrete-600">
                Each person requires approximately 14 sq.ft of unobstructed
                pathway and ergonomic chair-pullback clearance.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((num) => {
                  const selected = Number(spaceData.occupants) === num;
                  return (
                    <button
                      key={num}
                      type="button"
                      onClick={() => updateSpaceData({ occupants: num })}
                      className={`p-6 border text-center transition-all ${
                        selected
                          ? "bg-charcoal text-canvas border-charcoal"
                          : "bg-concrete-50/50 text-charcoal border-mineral-100 hover:border-charcoal"
                      }`}
                    >
                      <Users className="w-6 h-6 mx-auto mb-2 opacity-80" />
                      <span className="font-serif text-3xl font-semibold block">
                        {num} {num === 1 ? "Person" : "People"}
                      </span>
                      <span className="text-[11px] font-mono opacity-75 mt-1 block">
                        {num * 14} sq.ft buffer
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 4: VISUAL EXISTING FURNITURE INVENTORY (KEY PROMPT REQUIREMENT) */}
          {step === 4 && (
            <div className="space-y-6">
              <p className="text-sm text-concrete-600">
                Select the existing furniture pieces currently inside your room.
                Growspace frames are engineered to straddle and bridge over these
                exact Indian household archetypes.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {FURNITURE_INVENTORY_CATALOG.map((item) => {
                  const isSelected = (spaceData.inventory || []).includes(item.id);
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => toggleInventoryItem(item.id)}
                      className={`p-5 border text-left transition-all flex flex-col justify-between ${
                        isSelected
                          ? "border-charcoal bg-concrete-200/60 ring-1 ring-charcoal"
                          : "border-mineral-100 bg-concrete-50/40 hover:border-charcoal"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 border border-mineral-100 bg-canvas text-concrete-600">
                            {item.category}
                          </span>
                          <div
                            className={`w-5 h-5 border flex items-center justify-center ${
                              isSelected
                                ? "bg-charcoal text-canvas border-charcoal"
                                : "border-mineral-100 bg-canvas"
                            }`}
                          >
                            {isSelected && <Check className="w-3.5 h-3.5" />}
                          </div>
                        </div>

                        {/* Visual Schematic Icon of the Furniture Item */}
                        <div className="h-24 border border-mineral-100 bg-canvas mb-3 flex items-center justify-center p-2">
                          {item.id === "steel-almirah" && (
                            <svg viewBox="0 0 100 70" className="w-20 h-16">
                              <rect
                                x="25"
                                y="5"
                                width="50"
                                height="60"
                                fill="#D5D3CC"
                                stroke="#1E1F1E"
                                strokeWidth="1.5"
                              />
                              <line
                                x1="50"
                                y1="5"
                                x2="50"
                                y2="65"
                                stroke="#1E1F1E"
                              />
                              <circle cx="46" cy="35" r="1.5" fill="#1E1F1E" />
                              <circle cx="54" cy="35" r="1.5" fill="#1E1F1E" />
                            </svg>
                          )}
                          {item.id === "diwan-storage" && (
                            <svg viewBox="0 0 100 70" className="w-24 h-16">
                              <rect
                                x="10"
                                y="32"
                                width="80"
                                height="26"
                                fill="#C4C1B8"
                                stroke="#1E1F1E"
                                strokeWidth="1.5"
                              />
                              <rect
                                x="10"
                                y="24"
                                width="80"
                                height="8"
                                fill="#9A7B4F"
                                stroke="#1E1F1E"
                              />
                              <line
                                x1="36"
                                y1="32"
                                x2="36"
                                y2="58"
                                stroke="#1E1F1E"
                                strokeDasharray="2 2"
                              />
                              <line
                                x1="64"
                                y1="32"
                                x2="64"
                                y2="58"
                                stroke="#1E1F1E"
                                strokeDasharray="2 2"
                              />
                            </svg>
                          )}
                          {item.id === "khat-cot" && (
                            <svg viewBox="0 0 100 70" className="w-24 h-16">
                              <line
                                x1="12"
                                y1="38"
                                x2="88"
                                y2="38"
                                stroke="#9A7B4F"
                                strokeWidth="3"
                              />
                              <line
                                x1="16"
                                y1="38"
                                x2="12"
                                y2="60"
                                stroke="#1E1F1E"
                                strokeWidth="2"
                              />
                              <line
                                x1="84"
                                y1="38"
                                x2="88"
                                y2="60"
                                stroke="#1E1F1E"
                                strokeWidth="2"
                              />
                              <path
                                d="M 20 38 Q 50 44 80 38"
                                fill="none"
                                stroke="#1E1F1E"
                                strokeDasharray="3 2"
                              />
                            </svg>
                          )}
                          {item.id === "plastic-drawers" && (
                            <svg viewBox="0 0 100 70" className="w-20 h-16">
                              <rect
                                x="32"
                                y="12"
                                width="36"
                                height="48"
                                fill="#E7E5DF"
                                stroke="#1E1F1E"
                                strokeWidth="1.5"
                              />
                              <line x1="32" y1="24" x2="68" y2="24" stroke="#1E1F1E" />
                              <line x1="32" y1="36" x2="68" y2="36" stroke="#1E1F1E" />
                              <line x1="32" y1="48" x2="68" y2="48" stroke="#1E1F1E" />
                            </svg>
                          )}
                          {item.id === "metal-trunk" && (
                            <svg viewBox="0 0 100 70" className="w-22 h-16">
                              <rect
                                x="18"
                                y="28"
                                width="64"
                                height="30"
                                fill="#8C8980"
                                stroke="#1E1F1E"
                                strokeWidth="1.5"
                              />
                              <line
                                x1="18"
                                y1="36"
                                x2="82"
                                y2="36"
                                stroke="#1E1F1E"
                              />
                              <rect
                                x="46"
                                y="33"
                                width="8"
                                height="7"
                                fill="#F3F3F1"
                                stroke="#1E1F1E"
                              />
                            </svg>
                          )}
                        </div>

                        <h3 className="font-serif text-xl text-charcoal">
                          {item.name}
                        </h3>
                        <p className="text-[11px] text-concrete-600 mt-1">
                          {item.chokeRisk}
                        </p>
                      </div>

                      <div className="pt-3 mt-3 border-t border-mineral-100 flex items-center justify-between text-xs font-mono">
                        <span>{item.dimensions}</span>
                        <span className="text-accent-terracotta font-semibold">
                          +{item.footprintSqFt} sq.ft
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 5: ACTIVITIES */}
          {step === 5 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Sleep",
                "Remote Work / Dual Monitor Desk",
                "Heavy Seasonal Trunk Storage",
                "Privacy Partition",
                "Study & Book Archiving",
                "Dressing & Wardrobe Zone",
              ].map((act) => {
                const active = (spaceData.activities || []).includes(act);
                return (
                  <button
                    key={act}
                    type="button"
                    onClick={() => toggleActivity(act)}
                    className={`p-5 border text-left flex items-center justify-between transition-all ${
                      active
                        ? "bg-charcoal text-canvas border-charcoal"
                        : "bg-concrete-50/40 text-charcoal border-mineral-100 hover:border-charcoal"
                    }`}
                  >
                    <span className="font-medium text-sm">{act}</span>
                    <div
                      className={`w-5 h-5 border flex items-center justify-center ${
                        active ? "border-canvas" : "border-mineral-100"
                      }`}
                    >
                      {active && <Check className="w-3.5 h-3.5" />}
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* STEP 6: DAYLIGHT & VENTILATION */}
          {step === 6 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Single Window (East / Morning Sun)",
                "Single Window (West / Afternoon Glare)",
                "Balcony Door + Window Cross-Breeze",
                "Internal Room (Low Daylight — Needs Fluted Glass)",
              ].map((light) => {
                const selected = spaceData.lightSource === light;
                return (
                  <button
                    key={light}
                    type="button"
                    onClick={() => updateSpaceData({ lightSource: light })}
                    className={`p-5 border text-left flex items-center justify-between ${
                      selected
                        ? "border-charcoal bg-concrete-200/60 ring-1 ring-charcoal"
                        : "border-mineral-100 bg-concrete-50/40 hover:border-charcoal"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Sun className="w-4 h-4 text-accent-amber" />
                      <span className="text-sm font-medium">{light}</span>
                    </div>
                    {selected && <Check className="w-4 h-4" />}
                  </button>
                );
              })}
            </div>
          )}

          {/* STEP 7: WALL & CEILING CONDITION */}
          {step === 7 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  label: "Brick & Plaster (Load Bearing)",
                  note: "Supports heavy wall cleats + compression posts",
                },
                {
                  label: "Rented Apartment (Zero Wall Drilling)",
                  note: "Uses ceiling-to-floor EPDM rubber compression jacks",
                },
                {
                  label: "RCC Concrete Columns + AAC Block",
                  note: "Ideal for spanning 6ft overhead loft bridges",
                },
                {
                  label: "Old Lime Plaster / Heritage Wall",
                  note: "Free-standing 4-post cage configuration required",
                },
              ].map((w) => {
                const selected = spaceData.wallCondition === w.label;
                return (
                  <button
                    key={w.label}
                    type="button"
                    onClick={() => updateSpaceData({ wallCondition: w.label })}
                    className={`p-5 border text-left space-y-1 ${
                      selected
                        ? "border-charcoal bg-concrete-200/60 ring-1 ring-charcoal"
                        : "border-mineral-100 bg-concrete-50/40 hover:border-charcoal"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-xl text-charcoal">
                        {w.label}
                      </span>
                      {selected && <Check className="w-4 h-4" />}
                    </div>
                    <p className="text-xs text-concrete-600">{w.note}</p>
                  </button>
                );
              })}
            </div>
          )}

          {/* STEP 8: BUDGET TIER */}
          {step === 8 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {
                    tier: "Starter (₹15,000 – ₹24,000)",
                    desc: "Single 4ft vertical spine desk + 1 overhead shelf bay.",
                  },
                  {
                    tier: "Balanced (₹25,000 – ₹45,000)",
                    desc: "Full Almirah-bridge loft + BWR work bay + fluted glass cabinet.",
                  },
                  {
                    tier: "Complete Room Matrix (₹45,000+)",
                    desc: "Multi-bay acoustic fluted partition + dual loft bridge + wardrobe.",
                  },
                ].map((b) => {
                  const selected = spaceData.budgetTier === b.tier;
                  return (
                    <button
                      key={b.tier}
                      type="button"
                      onClick={() => updateSpaceData({ budgetTier: b.tier })}
                      className={`p-6 border text-left flex flex-col justify-between ${
                        selected
                          ? "border-charcoal bg-concrete-200/60 ring-1 ring-charcoal"
                          : "border-mineral-100 bg-concrete-50/40 hover:border-charcoal"
                      }`}
                    >
                      <div>
                        <IndianRupee className="w-5 h-5 text-charcoal mb-2" />
                        <h3 className="font-serif text-2xl text-charcoal">
                          {b.tier}
                        </h3>
                        <p className="text-xs text-concrete-600 mt-2 leading-relaxed">
                          {b.desc}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-mineral-100 text-[11px] font-mono text-concrete-500">
                        {selected ? "ACTIVE SELECTION" : "CLICK TO SELECT"}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="p-4 border border-accent-sage bg-accent-sage/10 text-xs text-charcoal flex items-center justify-between">
                <span>
                  All 8 spatial parameters captured. Ready to generate your
                  Floorplan Choke-Point & Headroom Diagnosis.
                </span>
                <span className="font-mono font-semibold">100% COMPLETE</span>
              </div>
            </div>
          )}
        </div>

        {/* STEP FOOTER NAVIGATION */}
        <div className="pt-8 mt-8 border-t border-mineral-100 flex items-center justify-between">
          <button
            type="button"
            disabled={step === 1}
            onClick={() => setStep((s) => Math.max(1, s - 1))}
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-mineral-100 text-xs uppercase tracking-widest font-medium disabled:opacity-40 hover:border-charcoal"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous Step</span>
          </button>

          {step < 8 ? (
            <button
              type="button"
              onClick={() => setStep((s) => Math.min(8, s + 1))}
              className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-canvas text-xs uppercase tracking-widest font-medium hover:bg-concrete-800"
            >
              <span>Next: {WIZARD_STEPS[step].title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleFinishWizard}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent-sage text-canvas text-xs uppercase tracking-widest font-semibold hover:opacity-95"
            >
              <span>Generate Spatial Diagnosis Report</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

