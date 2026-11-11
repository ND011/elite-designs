"use client";

import React, { useState, useEffect } from "react";
import {
  Grid,
  Plus,
  Trash2,
  RotateCcw,
  CheckCircle2,
  Package,
  Weight,
  IndianRupee,
  Move,
  Sparkles,
  Download,
  Layers,
} from "lucide-react";
import { useSpace, STARTER_KITS } from "@/context/SpaceContext";

const MODULE_PALETTE = [
  {
    type: "post-8ft",
    name: "8ft MS Vertical Post",
    category: "Structural Column",
    w: 1,
    h: 1,
    price: 2200,
    load: 80,
    partCount: 2,
    color: "bg-[#1E1F1E] text-[#F3F3F1] border-[#1E1F1E]",
    desc: "25×25mm 16G powder-coated column + ceiling compression jack",
  },
  {
    type: "desk-bwr",
    name: "BWR Ply Work Surface (4ft)",
    category: "Work Surface",
    w: 4,
    h: 2,
    price: 6800,
    load: 45,
    partCount: 4,
    color: "bg-[#B5926B]/85 text-[#1E1F1E] border-[#1E1F1E]",
    desc: "18mm IS:303 Gurjan marine ply desk with cantilever brackets",
  },
  {
    type: "loft-bridge",
    name: "Overhead Trunk Bridge Deck (6ft)",
    category: "Overhead Loft",
    w: 6,
    h: 2,
    price: 8900,
    load: 110,
    partCount: 6,
    color: "bg-[#4A6B53]/85 text-[#F3F3F1] border-[#1E1F1E]",
    desc: "High-load overhead bridge spanning above steel almirahs or beds",
  },
  {
    type: "fluted-cabinet",
    name: "Fluted Glass Dust-Free Module",
    category: "Enclosed Storage",
    w: 3,
    h: 2,
    price: 7500,
    load: 40,
    partCount: 5,
    color: "bg-[#D9DFDC] text-[#1E1F1E] border-[#1E1F1E]",
    desc: "5mm toughened reeded glass sliding doors in BWR box shell",
  },
  {
    type: "shelf-cantilever",
    name: "Overhead Cantilever Shelf",
    category: "Books & Archive",
    w: 4,
    h: 1,
    price: 3600,
    load: 35,
    partCount: 3,
    color: "bg-[#C88A36]/75 text-[#1E1F1E] border-[#1E1F1E]",
    desc: "12-inch deep BWR ply shelf with twin CNC steel gussets",
  },
  {
    type: "fluted-screen",
    name: "Translucent Fluted Glass Screen",
    category: "Spatial Partition",
    w: 4,
    h: 1,
    price: 11200,
    load: 30,
    partCount: 6,
    color: "bg-[#B85D43]/80 text-[#F3F3F1] border-[#1E1F1E]",
    desc: "Acoustic & visual room divider panel preserving cross-ventilation",
  },
];

const GRID_COLS = 12; // 12 ft default grid
const GRID_ROWS = 10; // 10 ft default grid

export default function BuilderPage() {
  const { spaceData, hydrated } = useSpace();
  const [placedItems, setPlacedItems] = useState([]);
  const [activeTool, setActiveTool] = useState(MODULE_PALETTE[1]);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [draggingId, setDraggingId] = useState(null);
  const [snapEnabled, setSnapEnabled] = useState(true);
  const [exportBanner, setExportBanner] = useState(false);

  // Load preloaded kit or default starter kit on mount
  useEffect(() => {
    if (!hydrated) return;
    if (
      spaceData.preloadedBuilderItems &&
      spaceData.preloadedBuilderItems.length > 0
    ) {
      setPlacedItems(spaceData.preloadedBuilderItems);
    } else {
      setPlacedItems(STARTER_KITS[1].builderPreset);
    }
  }, [hydrated, spaceData.preloadedBuilderItems]);

  // Place new module at clicked grid cell (snapped to 1ft × 1ft grid)
  const handleCellClick = (colIndex, rowIndex) => {
    if (!activeTool) return;
    const clampedX = Math.min(GRID_COLS - activeTool.w, Math.max(0, colIndex));
    const clampedY = Math.min(GRID_ROWS - activeTool.h, Math.max(0, rowIndex));

    const newItem = {
      id: `mod-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      type: activeTool.type,
      name: activeTool.name,
      x: clampedX,
      y: clampedY,
      w: activeTool.w,
      h: activeTool.h,
      price: activeTool.price,
      load: activeTool.load,
      partCount: activeTool.partCount,
    };

    setPlacedItems((prev) => [...prev, newItem]);
    setSelectedItemId(newItem.id);
  };

  // Drag & Drop handlers on grid cells
  const handleDragStartItem = (e, id) => {
    e.stopPropagation();
    setDraggingId(id);
    setSelectedItemId(id);
  };

  const handleDropOnCell = (e, colIndex, rowIndex) => {
    e.preventDefault();
    if (!draggingId) return;
    setPlacedItems((prev) =>
      prev.map((item) => {
        if (item.id !== draggingId) return item;
        const nextX = Math.min(GRID_COLS - item.w, Math.max(0, colIndex));
        const nextY = Math.min(GRID_ROWS - item.h, Math.max(0, rowIndex));
        return { ...item, x: nextX, y: nextY };
      })
    );
    setDraggingId(null);
  };

  const moveSelectedItem = (dx, dy) => {
    if (!selectedItemId) return;
    setPlacedItems((prev) =>
      prev.map((item) => {
        if (item.id !== selectedItemId) return item;
        return {
          ...item,
          x: Math.min(GRID_COLS - item.w, Math.max(0, item.x + dx)),
          y: Math.min(GRID_ROWS - item.h, Math.max(0, item.y + dy)),
        };
      })
    );
  };

  const rotateSelectedItem = () => {
    if (!selectedItemId) return;
    setPlacedItems((prev) =>
      prev.map((item) => {
        if (item.id !== selectedItemId) return item;
        const nextW = item.h;
        const nextH = item.w;
        return {
          ...item,
          w: nextW,
          h: nextH,
          x: Math.min(GRID_COLS - nextW, item.x),
          y: Math.min(GRID_ROWS - nextH, item.y),
        };
      })
    );
  };

  const deleteSelectedItem = () => {
    if (!selectedItemId) return;
    setPlacedItems((prev) => prev.filter((i) => i.id !== selectedItemId));
    setSelectedItemId(null);
  };

  const loadKitPreset = (kit) => {
    setPlacedItems(kit.builderPreset);
    setSelectedItemId(null);
  };

  // Dynamic Totals for Sticky Sidebar
  const totalPartsCount = placedItems.reduce(
    (sum, item) => sum + (item.partCount || 2),
    0
  );
  const totalLoadCapacity = placedItems.reduce(
    (sum, item) => sum + (item.load || 40),
    0
  );
  const totalPriceINR = placedItems.reduce(
    (sum, item) => sum + (item.price || 0),
    0
  );

  const getModuleStyle = (type) => {
    const found = MODULE_PALETTE.find((m) => m.type === type);
    return found
      ? found.color
      : "bg-charcoal text-canvas border-charcoal";
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* HEADER BAR */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b border-mineral-100 pb-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-concrete-500 block mb-1">
            INTERACTIVE 2D MODULAR FRAME PLANNER // 300MM SNAP GRID
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-charcoal">
            Growspace 2D Frame Builder
          </h1>
          <p className="text-sm text-concrete-600 mt-1">
            Select a modular component below and click any grid cell to snap it
            in place, or drag existing modules across your{" "}
            <strong className="text-charcoal">12&apos; × 10&apos;</strong> room
            matrix.
          </p>
        </div>

        {/* Preset Starter Kit Switcher */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-concrete-500 mr-1">
            LOAD KIT:
          </span>
          {STARTER_KITS.map((kit, idx) => (
            <button
              key={kit.id}
              type="button"
              onClick={() => loadKitPreset(kit)}
              className="px-3 py-1.5 border border-mineral-100 bg-canvas text-xs font-mono hover:border-charcoal transition-colors"
            >
              Kit 0{idx + 1} (₹{(kit.priceINR / 1000).toFixed(1)}k)
            </button>
          ))}
          <button
            type="button"
            onClick={() => {
              setPlacedItems([]);
              setSelectedItemId(null);
            }}
            className="px-3 py-1.5 border border-accent-terracotta/50 text-accent-terracotta bg-canvas text-xs font-mono hover:bg-accent-terracotta hover:text-canvas transition-colors"
          >
            Clear Grid
          </button>
        </div>
      </div>

      {/* MAIN BUILDER WORKSPACE: LEFT PALETTE + CENTER 2D GRID + RIGHT STICKY BOM SIDEBAR */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT + CENTER (8 Cols): Component Palette & Interactive 2D Grid */}
        <div className="lg:col-span-8 space-y-6">
          {/* Component Palette Strip */}
          <div className="border border-mineral-100 bg-canvas p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-widest text-concrete-600 font-semibold">
                1. SELECT MODULAR COMPONENT TO PLACE ON GRID
              </span>
              <label className="flex items-center gap-2 text-xs font-mono cursor-pointer">
                <input
                  type="checkbox"
                  checked={snapEnabled}
                  onChange={(e) => setSnapEnabled(e.target.checked)}
                  className="accent-charcoal"
                />
                <span>Snap-to-Grid (300mm / 1ft)</span>
              </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {MODULE_PALETTE.map((mod) => {
                const isSelected = activeTool?.type === mod.type;
                return (
                  <button
                    key={mod.type}
                    type="button"
                    onClick={() => setActiveTool(mod)}
                    className={`p-3.5 border text-left transition-all flex flex-col justify-between ${
                      isSelected
                        ? "border-charcoal bg-concrete-200/70 ring-1 ring-charcoal"
                        : "border-mineral-100 bg-concrete-50/40 hover:border-charcoal"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between text-[10px] font-mono text-concrete-500 mb-1">
                        <span>{mod.category}</span>
                        <span>
                          {mod.w}&apos;×{mod.h}&apos;
                        </span>
                      </div>
                      <p className="font-serif text-lg text-charcoal leading-tight">
                        {mod.name}
                      </p>
                    </div>
                    <div className="pt-2 mt-2 border-t border-mineral-100 flex items-center justify-between text-xs font-mono">
                      <span className="font-semibold text-charcoal">
                        ₹{mod.price.toLocaleString("en-IN")}
                      </span>
                      <span className="text-concrete-600">+{mod.load} kg</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive 2D Snap-to-Grid Canvas */}
          <div className="border border-mineral-100 bg-canvas p-5">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-mineral-100">
              <div className="flex items-center gap-2 text-xs font-mono">
                <Grid className="w-4 h-4 text-charcoal" />
                <span>
                  2D PLAN VIEW // CLICK ANY CELL TO PLACE:{" "}
                  <strong className="text-charcoal">{activeTool?.name}</strong>
                </span>
              </div>

              {/* Active Module Inspector Controls */}
              {selectedItemId && (
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => moveSelectedItem(-1, 0)}
                    className="px-2 py-1 border border-mineral-100 text-xs font-mono hover:border-charcoal"
                    title="Nudge Left"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={() => moveSelectedItem(1, 0)}
                    className="px-2 py-1 border border-mineral-100 text-xs font-mono hover:border-charcoal"
                    title="Nudge Right"
                  >
                    →
                  </button>
                  <button
                    type="button"
                    onClick={() => moveSelectedItem(0, -1)}
                    className="px-2 py-1 border border-mineral-100 text-xs font-mono hover:border-charcoal"
                    title="Nudge Up"
                  >
                    ↑
                  </button>
                  <button
                    type="button"
                    onClick={() => moveSelectedItem(0, 1)}
                    className="px-2 py-1 border border-mineral-100 text-xs font-mono hover:border-charcoal"
                    title="Nudge Down"
                  >
                    ↓
                  </button>
                  <button
                    type="button"
                    onClick={rotateSelectedItem}
                    className="inline-flex items-center gap-1 px-2.5 py-1 border border-mineral-100 text-xs font-mono hover:border-charcoal"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Rotate 90°</span>
                  </button>
                  <button
                    type="button"
                    onClick={deleteSelectedItem}
                    className="inline-flex items-center gap-1 px-2.5 py-1 border border-accent-terracotta text-accent-terracotta text-xs font-mono hover:bg-accent-terracotta hover:text-canvas"
                  >
                    <Trash2 className="w-3 h-3" />
                    <span>Delete</span>
                  </button>
                </div>
              )}
            </div>

            {/* Coordinate Rulers + 12x10 Grid Container */}
            <div className="overflow-x-auto">
              <div className="min-w-[600px]">
                {/* Top X-Axis Ruler */}
                <div className="grid grid-cols-12 mb-1 text-[10px] font-mono text-concrete-500 text-center">
                  {Array.from({ length: GRID_COLS }).map((_, colIdx) => (
                    <div key={colIdx}>{colIdx + 1}&apos;</div>
                  ))}
                </div>

                {/* Relative Grid Board */}
                <div
                  className="relative border-2 border-charcoal bg-concrete-50 select-none"
                  style={{ height: "440px" }}
                >
                  {/* 12x10 Clickable Snap Cells */}
                  <div className="grid grid-cols-12 grid-rows-10 w-full h-full">
                    {Array.from({ length: GRID_ROWS }).map((_, rowIdx) =>
                      Array.from({ length: GRID_COLS }).map((__, colIdx) => (
                        <div
                          key={`${colIdx}-${rowIdx}`}
                          onClick={() => handleCellClick(colIdx, rowIdx)}
                          onDragOver={(e) => e.preventDefault()}
                          onDrop={(e) => handleDropOnCell(e, colIdx, rowIdx)}
                          className="border border-mineral-100/60 hover:bg-accent-sage/15 transition-colors cursor-crosshair relative group"
                        >
                          <span className="opacity-0 group-hover:opacity-70 text-[9px] font-mono text-concrete-500 absolute top-0.5 left-1 pointer-events-none">
                            {colIdx + 1},{rowIdx + 1}
                          </span>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Placed Modular Frames Overlay */}
                  {placedItems.map((item) => {
                    const isSelected = item.id === selectedItemId;
                    const leftPercent = (item.x / GRID_COLS) * 100;
                    const topPercent = (item.y / GRID_ROWS) * 100;
                    const widthPercent = (item.w / GRID_COLS) * 100;
                    const heightPercent = (item.h / GRID_ROWS) * 100;

                    return (
                      <div
                        key={item.id}
                        draggable
                        onDragStart={(e) => handleDragStartItem(e, item.id)}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedItemId(item.id);
                        }}
                        style={{
                          left: `${leftPercent}%`,
                          top: `${topPercent}%`,
                          width: `${widthPercent}%`,
                          height: `${heightPercent}%`,
                        }}
                        className={`absolute p-2 border-2 cursor-move flex flex-col justify-between transition-shadow ${getModuleStyle(
                          item.type
                        )} ${
                          isSelected
                            ? "ring-2 ring-offset-1 ring-charcoal z-20 shadow-md"
                            : "z-10 opacity-95 hover:opacity-100"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-1 overflow-hidden">
                          <span className="text-[10px] font-mono font-semibold leading-tight truncate">
                            {item.name}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-[9px] font-mono opacity-85">
                          <span>
                            {item.w}&apos;×{item.h}&apos;
                          </span>
                          <span>₹{(item.price / 1000).toFixed(1)}k</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Orientation Bar */}
                <div className="flex justify-between text-[11px] font-mono text-concrete-500 mt-2">
                  <span>NORTH PERIMETER WALL (LOAD BEARING)</span>
                  <span>
                    ACTIVE MODULES ON GRID: {placedItems.length} UNITS
                  </span>
                  <span>EAST DAYLIGHT FENESTRATION →</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT STICKY SIDEBAR (4 Cols): Live Budget, Load Capacity & Parts Counter */}
        <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
          <div className="border border-charcoal bg-canvas p-6 space-y-6 shadow-sm">
            <div className="border-b border-mineral-100 pb-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-concrete-500 block">
                LIVE BILL OF MATERIALS (BOM)
              </span>
              <h2 className="font-serif text-2xl text-charcoal mt-0.5">
                Frame Telemetry & Budget
              </h2>
            </div>

            {/* 3 Primary Dynamic Counters */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 border border-mineral-100 bg-concrete-50">
                <div className="flex items-center gap-1.5 text-xs text-concrete-600">
                  <Package className="w-3.5 h-3.5 text-charcoal" />
                  <span>Total Parts</span>
                </div>
                <p className="font-serif text-3xl font-semibold text-charcoal mt-1">
                  {totalPartsCount}{" "}
                  <span className="text-xs font-mono font-normal">pcs</span>
                </p>
              </div>

              <div className="p-3.5 border border-mineral-100 bg-concrete-50">
                <div className="flex items-center gap-1.5 text-xs text-concrete-600">
                  <Weight className="w-3.5 h-3.5 text-accent-sage" />
                  <span>Load Rating</span>
                </div>
                <p className="font-serif text-3xl font-semibold text-accent-sage mt-1">
                  {totalLoadCapacity}{" "}
                  <span className="text-xs font-mono font-normal">kg</span>
                </p>
              </div>
            </div>

            {/* Live Price Counter in INR */}
            <div className="p-4 border border-charcoal bg-concrete-100/70 flex items-baseline justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-concrete-600 block">
                  Estimated Frame Total (INR)
                </span>
                <span className="text-xs text-concrete-500">
                  Includes M6 hex hardware & brass feet
                </span>
              </div>
              <span className="font-serif text-3xl font-semibold text-charcoal">
                ₹{totalPriceINR.toLocaleString("en-IN")}
              </span>
            </div>

            {/* Itemized Module List */}
            <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
              <div className="flex items-center justify-between text-[11px] font-mono uppercase text-concrete-500 pb-1 border-b border-mineral-100">
                <span>Placed Component</span>
                <span>INR / Remove</span>
              </div>

              {placedItems.length === 0 ? (
                <p className="text-xs text-concrete-500 py-6 text-center">
                  No components on grid yet. Click any cell on the 2D canvas to
                  place your first modular unit.
                </p>
              ) : (
                placedItems.map((item, idx) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedItemId(item.id)}
                    className={`p-2.5 border text-xs flex items-center justify-between cursor-pointer ${
                      selectedItemId === item.id
                        ? "border-charcoal bg-concrete-200/60"
                        : "border-mineral-100 bg-concrete-50/40"
                    }`}
                  >
                    <div className="truncate pr-2">
                      <span className="font-mono text-[10px] text-concrete-500 mr-1.5">
                        #{idx + 1}
                      </span>
                      <span className="font-medium text-charcoal">
                        {item.name}
                      </span>
                      <span className="block text-[10px] font-mono text-concrete-500">
                        Grid Pos: ({item.x + 1}&apos;, {item.y + 1}&apos;) •{" "}
                        {item.partCount} parts • {item.load}kg
                      </span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="font-mono font-semibold">
                        ₹{item.price.toLocaleString("en-IN")}
                      </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setPlacedItems((prev) =>
                            prev.filter((p) => p.id !== item.id)
                          );
                        }}
                        className="text-concrete-500 hover:text-accent-terracotta p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Export / Lock Specification Button */}
            <button
              type="button"
              onClick={() => setExportBanner(true)}
              className="w-full py-3.5 px-5 bg-charcoal text-canvas text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 hover:bg-concrete-800 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Generate Cut-List & Assembly Schedule</span>
            </button>

            {exportBanner && (
              <div className="p-3.5 border border-accent-sage bg-accent-sage/10 text-xs space-y-1">
                <div className="flex items-center gap-1.5 font-semibold text-charcoal">
                  <CheckCircle2 className="w-4 h-4 text-accent-sage" />
                  <span>Assembly Schedule Ready</span>
                </div>
                <p className="text-concrete-600">
                  {placedItems.length} modular units ({totalPartsCount} parts,{" "}
                  {totalLoadCapacity} kg load capacity) locked at ₹
                  {totalPriceINR.toLocaleString("en-IN")}.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

