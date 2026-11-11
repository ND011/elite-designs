# Growspace × Elite Designs — Project Documentation

## 1. Project Overview
**Growspace** (engineered by **Elite Designs Studio** — Mohammadali G. Tharadara, Ahmedabad, India) is a Next.js spatial architecture and modular furniture planning platform designed for compact Indian homes.

Most 10×12 ft Indian rooms are **75%+ saturated at floor level** by legacy furniture (steel almirahs, box diwans, folding khats, plastic drawers, and metal trunks) while leaving **60%+ of vertical headroom completely unused**. Growspace diagnoses floor bottlenecks, specifies tactile BWR marine ply + 25mm MS square tube + 5mm fluted glass frames, and lets users configure custom assemblies on an interactive 2D snap-to-grid planner with live INR pricing.

---

## 2. Tech Stack & Design Tokens
- **Framework**: Next.js 15 (App Router) + React 19
- **Styling**: Tailwind CSS 3.4 + Architectural Grid Utilities (`bg-arch-grid`)
- **Icons**: `lucide-react`
- **Typography**:
  - Headings: `Cormorant Garamond` (Serif)
  - Body / UI / Telemetry: `Plus Jakarta Sans` & Monospace
- **Color Palette (Warm Greige & Architectural Concrete)**:
  - Canvas Background: `#F3F3F1` (`bg-canvas`)
  - Primary Text / Structural Charcoal: `#1E1F1E` (`text-charcoal`)
  - Mineral Borders: `#D5D3CC` (`border-mineral-100`)
  - Diagnostic Accents:
    - Choke / Bottleneck Red: `#B85D43` (`accent-terracotta`)
    - Reclaimed Headroom Green: `#4A6B53` (`accent-sage`)
    - Daylight / Hardware Amber: `#C88A36` (`accent-amber`)
    - BWR Veneer / Brass: `#9A7B4F` (`accent-brass`)

---

## 3. Application Architecture & Route Map

| Route | File Path | Core Capabilities |
| :--- | :--- | :--- |
| **`/` (Home)** | `app/page.js` | Split Hero with interactive **Before/After Spatial Elevation Comparison Slider**, 3-step Growspace methodology pillars, and 3 curated Starter Kits with INR pricing (`₹18,400`, `₹29,800`, `₹42,500`) and 1-click loading into the Builder. |
| **`/space-check`** | `app/space-check/page.js` | **8-Step Spatial Audit Wizard** with a sticky **Live Spatial Saturation Meter** at the top. Step 4 features visual selectable cards for *Steel Almirah*, *Diwan with Box Storage*, *Khat / Folding Cot*, *Plastic Drawers*, and *Galvanized Metal Trunk*. |
| **`/diagnosis`** | `app/diagnosis/page.js` | Reads room dimensions and legacy inventory from `SpaceContext`. Renders an interactive **SVG 2D Floorplan Schematic** highlighting circulation choke points in red and vertical headroom opportunities in green, plus a 1-click prescription loader into `/builder`. |
| **`/materials`** | `app/materials/page.js` | Tactile material specification cards for **18mm IS:303 BWR Gurjan Ply**, **25×25mm 16G MS Tube**, and **5mm Toughened Reeded (Fluted) Glass**, paired with an interactive **CAD Joinery Exploder** (`0%` to `100%` explosion slider). |
| **`/builder`** | `app/builder/page.js` | Interactive **12' × 10' Snap-to-Grid 2D Modular Frame Planner**. Supports clicking or dragging modules onto the grid, 90° rotation, directional nudging, kit presets, and a sticky **Live Bill of Materials (BOM)** sidebar totaling parts count, load capacity (kg), and INR cost. |
| **`/projects`** | `app/projects/page.js` | Filterable **Portfolio & Case Studies Index** showcasing 6 architectural, interior, and industrial product projects with full design thinking summaries. |
| **`/projects/[slug]`** | `app/projects/[slug]/page.js` | Dedicated **Project Case Study Page** for each portfolio work featuring Location, Year, Status, Area, Exact Role, Design Challenge, Central Concept, Research & Development, Material Palette, and Final Outcome. |
| **`/studio`** | `app/studio/page.js` | Official **Elite Designs Studio Hub** featuring founder **Mohammadali G. Tharadara** (Designer + Educator, Ahmedabad), brand identity card with QR connect, all 6 multidisciplinary services (with Includes, Target Clients, and Deliverables), 5-stage design process, Journal & Design Insights articles, and Project Enquiry form. |

---

## 4. State Management
- **`context/SpaceContext.jsx`**:
  - Persists user inputs across reloads via `localStorage` (`growspace_state_v1`).
  - Automatically computes live metrics:
    - `roomArea` (sq.ft)
    - `occupiedSqFt` (footprint of selected Indian furniture items)
    - `saturationPercent` (floor congestion index including occupant circulation buffer)
    - `verticalCubicFt` & `unusedVerticalPercent` (reclaimable overhead volume)
    - `preloadedBuilderItems` (bridges Starter Kits and Diagnosis prescriptions directly into `/builder`)

---

## 5. Local Development & Deployment Commands

```bash
# Install dependencies
npm install

# Run local development server (http://localhost:3000)
npm run dev

# Verify production build
npm run build

# Start production server
npm start
```

### Git Remote Configuration
- **Repository**: `https://github.com/ND011/elite-designs.git`
- **Branch**: `main`

