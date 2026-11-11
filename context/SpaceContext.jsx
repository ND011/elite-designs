"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const defaultSpaceState = {
  roomType: "Multipurpose Bedroom",
  dimensions: { length: 12, width: 10, height: 10 }, // in feet
  occupants: 2,
  inventory: ["steel-almirah", "diwan-storage"],
  activities: ["Sleep", "Remote Work", "Storage"],
  lightSource: "Single Window (East)",
  wallCondition: "Brick & Plaster (Load Bearing)",
  budgetTier: "Balanced (₹25,000 – ₹45,000)",
  recommendedKitId: "vertical-work-bay",
  preloadedBuilderItems: null,
};

export const FURNITURE_INVENTORY_CATALOG = [
  {
    id: "steel-almirah",
    name: "Steel Almirah (Godrej Type)",
    footprintSqFt: 8.5,
    volumeImpact: 18,
    chokeRisk: "High door-swing arc (36 in clearance needed)",
    category: "Heavy Storage",
    dimensions: "3.0' × 1.8' × 6.5'",
  },
  {
    id: "diwan-storage",
    name: "Diwan with Box Storage",
    footprintSqFt: 18.0,
    volumeImpact: 24,
    chokeRisk: "Blocks lower wall perimeter & top-lift access",
    category: "Seating / Sleep",
    dimensions: "6.0' × 3.0' × 1.5'",
  },
  {
    id: "khat-cot",
    name: "Khat / Folding Charpai Cot",
    footprintSqFt: 15.0,
    volumeImpact: 14,
    chokeRisk: "Flexible when folded; high floor footprint at night",
    category: "Sleep",
    dimensions: "6.0' × 2.5' × 1.4'",
  },
  {
    id: "plastic-drawers",
    name: "Modular Plastic Drawers",
    footprintSqFt: 4.0,
    volumeImpact: 9,
    chokeRisk: "Dead vertical space above 4ft height",
    category: "Light Storage",
    dimensions: "2.0' × 1.5' × 3.8'",
  },
  {
    id: "metal-trunk",
    name: "Galvanized Metal Trunk (Peti)",
    footprintSqFt: 7.5,
    volumeImpact: 12,
    chokeRisk: "Requires floor drag clearance to open lid",
    category: "Seasonal Storage",
    dimensions: "3.5' × 2.0' × 1.6'",
  },
];

export const STARTER_KITS = [
  {
    id: "compact-study-spine",
    name: "Kit 01 // Spine Study & Loft Bay",
    tagline: "Reclaims 14 sq.ft of floor area above a standard Diwan or single cot.",
    priceINR: 18400,
    loadCapacityKg: 140,
    footprint: "4.0' W × 1.5' D × 8.0' H",
    partsCount: 14,
    materials: ["25mm MS Square Tube", "18mm BWR Gurjan Ply", "Brass Leveling Feet"],
    idealFor: "Students & WFH setups in 10×10 ft rooms",
    builderPreset: [
      { id: "p-1", type: "post-8ft", name: "8ft MS Vertical Post", x: 2, y: 1, w: 1, h: 1, price: 2200, load: 80, partCount: 2 },
      { id: "p-2", type: "post-8ft", name: "8ft MS Vertical Post", x: 5, y: 1, w: 1, h: 1, price: 2200, load: 80, partCount: 2 },
      { id: "p-3", type: "desk-bwr", name: "BWR Ply Work Surface (4ft)", x: 2, y: 1, w: 4, h: 2, price: 6800, load: 45, partCount: 4 },
      { id: "p-4", type: "shelf-cantilever", name: "Overhead Cantilever Shelf", x: 2, y: 1, w: 4, h: 1, price: 3600, load: 35, partCount: 3 },
      { id: "p-5", type: "peg-panel", name: "Perforated Acoustic Steel Back", x: 2, y: 1, w: 4, h: 1, price: 3600, load: 20, partCount: 3 },
    ],
  },
  {
    id: "vertical-work-bay",
    name: "Kit 02 // Almirah-Bridge & Wardrobe Tower",
    tagline: "Bridges dead vertical air-space around bulky steel almirahs and trunks.",
    priceINR: 29800,
    loadCapacityKg: 240,
    footprint: "6.0' W × 2.0' D × 8.5' H",
    partsCount: 22,
    materials: ["25mm MS Tube (Powder Coated)", "18mm BWR Marine Ply", "Fluted Glass Sliding Bay"],
    idealFor: "Shared bedrooms with heavy legacy storage",
    builderPreset: [
      { id: "v-1", type: "post-8ft", name: "8ft MS Vertical Post", x: 1, y: 1, w: 1, h: 1, price: 2200, load: 80, partCount: 2 },
      { id: "v-2", type: "post-8ft", name: "8ft MS Vertical Post", x: 4, y: 1, w: 1, h: 1, price: 2200, load: 80, partCount: 2 },
      { id: "v-3", type: "post-8ft", name: "8ft MS Vertical Post", x: 7, y: 1, w: 1, h: 1, price: 2200, load: 80, partCount: 2 },
      { id: "v-4", type: "loft-bridge", name: "Overhead Trunk Bridge Deck (6ft)", x: 1, y: 1, w: 6, h: 2, price: 8900, load: 110, partCount: 6 },
      { id: "v-5", type: "fluted-cabinet", name: "Fluted Glass Dust-Free Module", x: 1, y: 1, w: 3, h: 2, price: 7500, load: 40, partCount: 5 },
      { id: "v-6", type: "desk-bwr", name: "BWR Ply Work Surface (4ft)", x: 4, y: 1, w: 3, h: 2, price: 6800, load: 45, partCount: 5 },
    ],
  },
  {
    id: "living-partition-grid",
    name: "Kit 03 // Acoustic Fluted Partition Matrix",
    tagline: "Divides a living-cum-sleeping hall without blocking cross-ventilation or daylight.",
    priceINR: 42500,
    loadCapacityKg: 310,
    footprint: "8.0' W × 1.5' D × 9.0' H",
    partsCount: 31,
    materials: ["5mm Reeded Fluted Glass", "MS Architectural Frame", "Teak-Veneered BWR Ply"],
    idealFor: "1BHK / Studio halls needing dual privacy zones",
    builderPreset: [
      { id: "l-1", type: "post-8ft", name: "8ft MS Vertical Post", x: 1, y: 3, w: 1, h: 1, price: 2200, load: 80, partCount: 2 },
      { id: "l-2", type: "post-8ft", name: "8ft MS Vertical Post", x: 4, y: 3, w: 1, h: 1, price: 2200, load: 80, partCount: 2 },
      { id: "l-3", type: "post-8ft", name: "8ft MS Vertical Post", x: 7, y: 3, w: 1, h: 1, price: 2200, load: 80, partCount: 2 },
      { id: "l-4", type: "post-8ft", name: "8ft MS Vertical Post", x: 9, y: 3, w: 1, h: 1, price: 2200, load: 80, partCount: 2 },
      { id: "l-5", type: "fluted-screen", name: "Translucent Fluted Glass Screen", x: 1, y: 3, w: 4, h: 1, price: 11200, load: 30, partCount: 6 },
      { id: "l-6", type: "fluted-cabinet", name: "Fluted Glass Dust-Free Module", x: 4, y: 3, w: 3, h: 2, price: 7500, load: 40, partCount: 5 },
      { id: "l-7", type: "loft-bridge", name: "Overhead Trunk Bridge Deck (6ft)", x: 1, y: 3, w: 6, h: 2, price: 8900, load: 110, partCount: 6 },
      { id: "l-8", type: "desk-bwr", name: "Fold-Down BWR Dining/Work Leaf", x: 6, y: 3, w: 3, h: 2, price: 6100, load: 45, partCount: 6 },
    ],
  },
];

const SpaceContext = createContext(null);

export function SpaceProvider({ children }) {
  const [spaceData, setSpaceData] = useState(defaultSpaceState);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("growspace_state_v1");
      if (saved) {
        setSpaceData((prev) => ({ ...prev, ...JSON.parse(saved) }));
      }
    } catch (e) {
      console.error("Failed to read growspace state from localStorage", e);
    }
    setHydrated(true);
  }, []);

  const updateSpaceData = (updates) => {
    setSpaceData((prev) => {
      const next = typeof updates === "function" ? updates(prev) : { ...prev, ...updates };
      try {
        localStorage.setItem("growspace_state_v1", JSON.stringify(next));
      } catch (e) {
        console.error("Failed to save growspace state", e);
      }
      return next;
    });
  };

  const resetSpaceData = () => {
    setSpaceData(defaultSpaceState);
    try {
      localStorage.removeItem("growspace_state_v1");
    } catch (e) {}
  };

  // Compute live floor density & vertical headroom opportunity
  const roomArea = Math.max(
    40,
    (Number(spaceData.dimensions?.length) || 12) * (Number(spaceData.dimensions?.width) || 10)
  );
  const selectedInventoryObjects = FURNITURE_INVENTORY_CATALOG.filter((item) =>
    (spaceData.inventory || []).includes(item.id)
  );
  const occupiedSqFt = selectedInventoryObjects.reduce((acc, item) => acc + item.footprintSqFt, 0);
  const occupantBufferSqFt = (Number(spaceData.occupants) || 1) * 14;
  const rawSaturation = Math.round(((occupiedSqFt + occupantBufferSqFt) / roomArea) * 100);
  const saturationPercent = Math.min(98, Math.max(12, rawSaturation));

  const verticalCubicFt = roomArea * (Number(spaceData.dimensions?.height) || 10);
  const unusedVerticalPercent = Math.min(
    88,
    Math.max(42, Math.round(78 - selectedInventoryObjects.length * 3 + ((Number(spaceData.dimensions?.height) || 10) - 9) * 5))
  );

  return (
    <SpaceContext.Provider
      value={{
        spaceData,
        updateSpaceData,
        resetSpaceData,
        hydrated,
        metrics: {
          roomArea,
          occupiedSqFt: Number(occupiedSqFt.toFixed(1)),
          saturationPercent,
          verticalCubicFt,
          unusedVerticalPercent,
          selectedInventoryObjects,
        },
      }}
    >
      {children}
    </SpaceContext.Provider>
  );
}

export function useSpace() {
  const context = useContext(SpaceContext);
  if (!context) {
    throw new Error("useSpace must be used within a SpaceProvider");
  }
  return context;
}

