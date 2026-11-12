# Growspace × Elite Designs — Site Design & Plan

> **Brand:** Growspace System by Elite Designs Studio  
> **Founder:** Mohammadali G. Tharadara — Principal Designer + Educator, Ahmedabad  
> **Stack:** Next.js 15 · React 19 · Tailwind CSS · Lucide React · No backend

---

## 1. Project Purpose

Two interlinked goals delivered through one site:

| Layer | What it is |
|---|---|
| **Growspace** | A modular boltless MS-tube + BWR-ply furniture system for compact Indian homes. Sold and explained through an interactive 3-step spatial tool. |
| **Elite Designs Studio** | The professional portfolio and business presence of the founder — services, case studies, journal, and project enquiry. |

---

## 2. Site Map

```
/                           → Home (marketing + kit preview)
├── /space-check            → Step 1: 8-step room audit wizard
├── /diagnosis              → Step 2: Spatial analysis report + kit prescription
├── /materials              → Material specs + joinery exploder
├── /builder                → Step 3: 2D snap-to-grid frame planner
├── /projects               → Filterable portfolio listing
│   └── /projects/[slug]    → Case study detail page
├── /studio                 → Elite Designs full studio page
│   └── #enquiry-form       → Project enquiry (anchor within /studio)
├── /journal/[slug]         → Journal article pages
└── /privacy-policy         → Privacy policy
```

**Navigation order (Navbar):**
`Home 01` → `Space Check 02` → `Diagnosis 03` → `Materials 04` → `Builder 05` → `Portfolio 06` → `Studio 07`

---

## 3. Design System

### Colors

| Token | Value | Use |
|---|---|---|
| `canvas` | `#F3F3F1` | Page background, light surfaces |
| `charcoal` | `#1E1F1E` | Primary text, borders, CTAs |
| `concrete-50 → 900` | Gray scale | Secondary text, dividers, hover states |
| `mineral-100` | Muted warm gray | Subtle borders throughout |
| `accent-terracotta` | `#B85D43` | Critical / alert states |
| `accent-sage` | `#4A6B53` | Success / optimal states |
| `accent-amber` | `#C88A36` | Moderate / warning states |
| `accent-brass` | `#9A7B4F` | Decorative accents, icons |

### Typography

| Role | Font | Usage |
|---|---|---|
| Headings / Display | Cormorant Garamond (serif) | H1–H3, blockquotes, editorial text |
| Body / UI | Plus Jakarta Sans (sans) | Body copy, labels, navigation, forms |
| Mono labels | System monospace | Step tags, spec codes, metric readouts |

### Layout

- Max content width: `max-w-7xl` (1280px)
- Padding: `px-4 sm:px-6 lg:px-8`
- Section spacing: `space-y-20` to `space-y-24`
- Background texture: `.bg-arch-grid` and `.bg-arch-subgrid` (CSS grid pattern used as a visual motif)

### Component Conventions

- Bordered cards with `border border-mineral-100 bg-canvas` — no drop shadows
- CTAs: dark (`bg-charcoal text-canvas`) or outlined (`border border-charcoal bg-canvas`)
- Tags and badges: `text-xs font-mono uppercase tracking-widest`
- No rounded corners — sharp edges throughout (architectural aesthetic)

---

## 4. Page-by-Page Breakdown

### `/` — Home Page
**Purpose:** Marketing and product entry point.

**Sections:**
1. **Hero** — Headline + 3 CTAs (Space Check, Builder, Studio) + interactive before/after SVG spatial elevation slider (draggable range input)
2. **Methodology Strip** — 3 pillars: Choke-Point Audit → MS+BWR Bridging → 2D Frame Planner
3. **Starter Kits Grid** — All 3 kits with mini SVG wireframe previews, INR pricing, materials list, and "Load in Builder" buttons

**State interactions:** "Load Kit" buttons call `updateSpaceData({ preloadedBuilderItems })` then push to `/builder`

---

### `/space-check` — Space Check Wizard
**Purpose:** Collect all room parameters to feed the diagnosis and builder.

**8 Wizard Steps:**

| Step | Title | Input type |
|---|---|---|
| 1 | Room Archetype | Radio button cards |
| 2 | Envelope Dimensions | 3 range sliders (length 8–20ft, width 8–18ft, height 8–12ft) |
| 3 | Occupancy Density | Stepper (1–8 people) |
| 4 | Legacy Furniture Inventory | Visual SVG schematic cards (multi-select) |
| 5 | Daily Activity Zones | Tag-style toggle chips |
| 6 | Daylight & Fenestration | Radio button cards |
| 7 | Wall & Ceiling Substrate | Radio button cards |
| 8 | Target Investment Tier | Radio button cards |

**Sticky top:** Live Spatial Saturation Meter (progress bar, color-coded: sage / amber / terracotta)

**On finish:** Auto-selects recommended kit → saves to SpaceContext → redirects to `/diagnosis`

---

### `/diagnosis` — Spatial Analysis Report
**Purpose:** Show the analysis result and present the prescribed kit.

**Sections:**
1. **KPI Strip** — Floor saturation %, unused vertical headroom %, reclaimable surface area, anchoring protocol
2. **Interactive SVG 2D Floorplan** — 1:25 scale plan with legacy furniture, red choke zones (door arcs, pinch points), green vertical opportunity overlays
3. **Layer filter buttons** — All Layers / Red Bottlenecks / Green Headroom
4. **Kit Prescription Card** — Driven by `recommendedKitId`, with "Load into Builder" CTA

**⚠ Known gap:** The SVG floorplan uses hardcoded pixel positions — room dimension changes from the wizard don't re-scale the SVG.

---

### `/materials` — Material Specs
**Purpose:** Educate on the 3 core Growspace materials.

**Sections:**
1. **3 Material Cards** — 18mm IS:303 BWR Gurjan Marine Ply · 25×25mm 16G MS Tube · 5mm Toughened Reeded Fluted Glass (each with CSS texture swatch + spec table)
2. **Interactive Joinery Exploder** — SVG of "Node J-04 Triple-Axis Collar Joint" with 0–100% explosion slider animating 5 component parts apart

---

### `/builder` — 2D Frame Planner
**Purpose:** The core interactive product tool — configure a Growspace frame.

**Layout:** Left sidebar (module palette) + 12×10 ft snap grid canvas + Right sidebar (live BOM)

**Module Palette (6 types):**

| Module | Size | Price |
|---|---|---|
| 8ft MS Vertical Post | 1×1 | ₹2,200 |
| BWR Ply Work Surface (4ft) | 4×2 | ₹6,800 |
| Overhead Trunk Bridge Deck (6ft) | 6×2 | ₹8,900 |
| Fluted Glass Dust-Free Module | 3×2 | ₹7,500 |
| Overhead Cantilever Shelf | 4×1 | ₹3,600 |
| Translucent Fluted Glass Screen | 4×1 | ₹11,200 |

**Interactions:**
- Click cell → place active module
- HTML5 drag/drop → reposition modules
- Selected item → nudge (arrow keys), rotate (swaps w/h), delete
- Kit switcher → instantly loads any of 3 preset configurations

**Right BOM sidebar (live):** Parts count, load capacity (kg), total INR price, itemized list

**⚠ Known gap:** "Generate Cut-List & Assembly Schedule" button shows a banner only — no actual export yet.

---

### `/projects` — Portfolio Listing
**Purpose:** Showcase all case studies with category filtering.

**Filters:** All · Interior Design · Product Design · Architecture & Spatial

**Current projects (6):**
1. Ikigai Residence — Spatial Metamorphosis *(Interior Design, 2025)*
2. Radial Plan Residence & Technical Millwork *(Interior Design, 2025)*
3. Monolith Master Suite & Dressing Sanctuary *(Interior Design, 2024)*
4. *(3 more in studioData.js)*

---

### `/projects/[slug]` — Case Study Detail
**Purpose:** Full case study for each portfolio project.

**Sections:** Metadata matrix (location, year, role, area) · Cover image · Challenge · Concept · Research · Outcome · Materials palette sidebar · CTA to enquiry form

**⚠ Known gap:** `gallery[]` arrays are defined in data but gallery is never rendered — only `coverImage` shows.

---

### `/studio` — Elite Designs Studio Page
**Purpose:** Full business presence — 7 sections in one long-scroll page.

**Sections:**
1. Studio hero — logo, headline, philosophy quote, CTAs
2. Founder profile — portrait, credentials, 4 studio values, digital visiting card
3. Services matrix — 6 services from `SERVICES_CATALOG`
4. Portfolio preview — filterable grid linking to `/projects/[slug]`
5. Design process timeline — 5 stages (Understand → Research → Concept → Develop → Deliver)
6. Journal preview — 3 articles linking to `/journal/[slug]`
7. Project enquiry form — `mailto:` on submit (⚠ no backend)

---

### `/journal/[slug]` — Journal Articles
**Current articles (3):**
- Article 1 *(slug in studioData.js)*
- Article 2
- Article 3

**⚠ Known gap:** All 3 articles render the same hardcoded boilerplate body text. Per-article content is not stored in `studioData.js`.

---

### `/privacy-policy` — Privacy Policy
Static server-rendered page. No interactions.

---

## 5. Data Architecture

### `context/SpaceContext.jsx` — Global State

```
spaceData {
  roomType, dimensions { length, width, height },
  occupants, inventory[], activities[],
  lightSource, wallCondition, budgetTier,
  recommendedKitId, preloadedBuilderItems[]
}

Computed metrics (live, derived):
  roomArea, occupiedSqFt, saturationPercent (12–98%),
  verticalCubicFt, unusedVerticalPercent,
  selectedInventoryObjects[]
```

Persisted to `localStorage` under key `growspace_state_v1`.

### `data/studioData.js` — All Content

```
STUDIO_IDENTITY     → firm info, founder, contacts, values
SERVICES_CATALOG    → 6 services with includes/deliverables
PORTFOLIO_PROJECTS  → 6 projects with slug, images, content
JOURNAL_ARTICLES    → 3 articles (title, excerpt, takeaways)
```

### `FURNITURE_INVENTORY_CATALOG` (in SpaceContext)
5 Indian household furniture types with `footprintSqFt`, `volumeImpact`, `chokeRisk`, `dimensions`.

### `STARTER_KITS` (in SpaceContext)
3 pre-engineered frame assemblies with exact 2D builder grid coordinates for instant preloading.

---

## 6. User Flows

### Flow A — Growspace Tool Journey
```
Home → /space-check (fill 8 steps) → /diagnosis (see analysis + kit)
     → /builder (configure frame, check BOM)
     → /materials (understand components)
     → /studio (enquire about installation)
```

### Flow B — Studio / Portfolio Journey
```
Home → /studio → /projects (browse) → /projects/[slug] (case study)
     → #enquiry-form (contact)
```

### Flow C — Direct Kit Selection
```
Home (Kit cards) → click "Load in Builder" → /builder (preset loaded)
```

---

## 7. Outstanding Work (Prioritized)

| # | Task | File(s) | Priority |
|---|---|---|---|
| 1 | Write actual body content for each journal article | `data/studioData.js`, `app/journal/[slug]/page.js` | High |
| 2 | Builder export — generate downloadable BOM (CSV or printable) | `app/builder/page.js` | High |
| 3 | Enquiry form — replace mailto with real submission (EmailJS / Resend / server action) | `app/studio/page.js` | High |
| 4 | Diagnosis floorplan SVG — make it scale to actual room dimensions | `app/diagnosis/page.js` | Medium |
| 5 | Render gallery images on project case study pages | `app/projects/[slug]/page.js`, `data/studioData.js` | Medium |
| 6 | Swap `<img>` tags to Next.js `<Image>` + enable image optimization | All pages + `next.config.mjs` | Medium |
| 7 | Add loading/skeleton states during localStorage hydration | All tool pages | Low |
| 8 | Add a Journal preview section to the Home page | `app/page.js` | Low |
| 9 | Add URL-based sharing for Builder configurations | `app/builder/page.js` | Low |

---

## 8. File Structure Reference

```
c:\0ND\work\
├── app/
│   ├── layout.js                   Root layout: SpaceProvider, Navbar, Footer, fonts, metadata
│   ├── globals.css                 Tailwind directives + CSS tokens + bg-arch-grid pattern
│   ├── page.js                     Home page
│   ├── space-check/page.js         8-step room wizard
│   ├── diagnosis/page.js           Spatial report + kit prescription
│   ├── materials/page.js           Material cards + joinery exploder
│   ├── builder/page.js             2D frame planner
│   ├── studio/page.js              Elite Designs full studio page
│   ├── projects/page.js            Portfolio listing
│   ├── projects/[slug]/page.js     Case study detail (server, generateStaticParams)
│   ├── journal/[slug]/page.js      Journal article (server, generateStaticParams)
│   └── privacy-policy/page.js     Privacy policy
├── components/
│   ├── Navbar.jsx                  Sticky nav + live floor density pill + mobile drawer
│   └── Footer.jsx                  Studio contact, nav links, material spec panel
├── context/
│   └── SpaceContext.jsx            Global state, furniture catalog, starter kits, metrics
├── data/
│   └── studioData.js               All content: identity, services, projects, journal
├── public/
│   ├── brand/                      founder-portrait.jpg, studio-banner.jpg,
│   │                               business-card.jpg, logo-square.jpg, PDF
│   └── portfolio/                  8 project presentation board images
├── tailwind.config.js              Custom design tokens (colors, fonts, spacing)
├── next.config.mjs                 images.unoptimized: true (temporary)
└── jsconfig.json                   @/* path alias
```

---

## 9. Brand Identity Quick Reference

| Field | Value |
|---|---|
| Studio name | Elite Designs |
| Product name | Growspace System |
| Founder | Mohammadali G. Tharadara |
| Location | Ahmedabad, Gujarat, India |
| Phone | +91 89806 76705 |
| Email | mg.th257@gmail.com |
| Instagram | @elitedesigns226 |
| System version shown in nav | SYS 2.4 |
| Primary grid module | 25×25mm 16G MS square tube |
| Primary deck material | 18mm IS:303 BWR Gurjan Marine Ply |
| Glazing material | 5mm toughened reeded fluted glass |

---

*Last updated: November 2026*
