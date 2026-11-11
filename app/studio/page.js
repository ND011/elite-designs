"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Mail,
  Phone,
  Instagram,
  Linkedin,
  ArrowUpRight,
  CheckCircle2,
  Briefcase,
  Layers,
  Compass,
  Sparkles,
  FileText,
  Send,
} from "lucide-react";

const PORTFOLIO_SHEETS = [
  {
    id: "ikigai-apartment",
    title: "Ikigai Residential Metamorphosis",
    category: "Interior Design",
    location: "Urban Compact Apartment",
    year: "2025",
    status: "Design Development & Moodboard",
    image: "/portfolio/ikigai-apartment-board.jpg",
    summary:
      "A transformative residential interior renovation concept crafted for a family of five—harmonizing light oak wood, walnut joinery, white marble, and multifunctional living zones.",
    deliverables: ["Site & Sunlight Study", "Material Palette", "3D Interior Section"],
  },
  {
    id: "apartment-interior-sheet",
    title: "Radial Plan Apartment & Custom Millwork",
    category: "Interior Design",
    location: "High-Rise Residence",
    year: "2025",
    status: "Technical Documentation",
    image: "/portfolio/apartment-interior-sheet.jpg",
    summary:
      "Complete interior architecture package featuring radial floorplan zoning, reflected ceiling plans, acoustic wall paneling details, and integrated dining-kitchen millwork.",
    deliverables: ["1:75 Floorplans", "Ceiling & Lighting Plan", "Wall Section Details"],
  },
  {
    id: "spatial-elevation-board",
    title: "Public Pavilion & Helical Circulation Study",
    category: "Spatial Design",
    location: "Cultural Exhibition Center",
    year: "2024",
    status: "Conceptual Architecture",
    image: "/portfolio/spatial-elevation-board.jpg",
    summary:
      "Long-span metallic truss envelope with sculpted roof lightwells and a double-height crimson helical ramp anchoring the public exhibition hall.",
    deliverables: ["1:100 Elevations", "Double-Height Section", "Physical Study Models"],
  },
  {
    id: "daylight-spatial-research",
    title: "House of Light & Shadows — Heliostatic Study",
    category: "Spatial Design",
    location: "Narrow Urban Infill Plot",
    year: "2024",
    status: "Design Research",
    image: "/portfolio/daylight-spatial-research.jpg",
    summary:
      "Architectural research exploring linear top-light skylights, prism louvers, and glass-brick interior partitions to channel natural daylight deep into a narrow urban plot.",
    deliverables: ["Solar Ray Diagrams", "1:200 Plans & Sections", "Sectional Physical Model"],
  },
  {
    id: "sectional-model-study",
    title: "Exoskeletal Diagrid & Sectional Model",
    category: "Product & Object Design",
    location: "Academic & Studio Research",
    year: "2024",
    status: "Prototype & Model",
    image: "/portfolio/sectional-model-study.jpg",
    summary:
      "1:50 polystyrene and plexiglass sectional fabrication investigating load-bearing modular exoskeletons that free interior floorplates from internal columns.",
    deliverables: ["Exploded Axonometric", "1:50 Physical Model", "Structural Elevation"],
  },
  {
    id: "curated-architecture",
    title: "Brick Vault & Visual Identity System",
    category: "Spatial Design",
    location: "Ahmedabad / Studio Direction",
    year: "2025",
    status: "Concept Reference",
    image: "/portfolio/curated-architecture.jpg",
    summary:
      "Translating tactile brick-and-concrete architectural geometry into a cohesive spatial direction and restrained visual identity system.",
    deliverables: ["Material Direction", "Parametric Brick Facade", "Brand Identity"],
  },
];

const DESIGN_PROCESS_STAGES = [
  {
    stage: "STAGE 01",
    name: "Understand",
    desc: "Client discussion, project brief, site/user analysis, spatial requirements, and structural constraints.",
  },
  {
    stage: "STAGE 02",
    name: "Research",
    desc: "Context, precedents, climate-appropriate materials, user ergonomics, and functional circulation flows.",
  },
  {
    stage: "STAGE 03",
    name: "Concept Development",
    desc: "Sketches, spatial zoning diagrams, modular frame concepts, and 2D/3D form exploration.",
  },
  {
    stage: "STAGE 04",
    name: "Design Development",
    desc: "Detailed working drawings, physical/digital models, BWR ply & MS joinery specs, and 3D visualization.",
  },
  {
    stage: "STAGE 05",
    name: "Delivery",
    desc: "Agreed technical documentation, bill of materials (BOM), prototyping, and site coordination support.",
  },
];

export default function StudioPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [enquirySubmitted, setEnquirySubmitted] = useState(false);
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    phone: "",
    projectType: "Interior Design",
    location: "Ahmedabad, Gujarat",
    areaSqFt: "",
    budgetRange: "₹25,000 – ₹1,50,000 (Modular / Room Upgrade)",
    timeline: "Within 1–2 Months",
    description: "",
  });

  const categories = [
    "All",
    "Interior Design",
    "Spatial Design",
    "Product & Object Design",
  ];

  const filteredProjects =
    activeCategory === "All"
      ? PORTFOLIO_SHEETS
      : PORTFOLIO_SHEETS.filter((p) => p.category === activeCategory);

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    setEnquirySubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
      {/* 1. STUDIO HERO BANNER WITH OFFICIAL ELITE DESIGNS IDENTITY */}
      <section className="border border-mineral-100 bg-canvas p-6 sm:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-3 px-3 py-1.5 border border-mineral-100 bg-concrete-50">
              <img
                src="/brand/logo-square.jpg"
                alt="Elite Designs Monogram"
                className="w-6 h-6 object-contain"
              />
              <span className="text-xs font-mono uppercase tracking-widest text-charcoal">
                ELITE DESIGNS STUDIO • AHMEDABAD, INDIA
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal leading-[1.08]">
              Thoughtful spaces for modern living.
            </h1>

            <p className="text-base text-concrete-600 leading-relaxed max-w-2xl">
              “We believe good design begins with understanding. By exploring
              the relationship between people, space, material, geometry, and
              function, we develop design solutions that are purposeful,
              considered, and enduring.”
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {[
                "Interior Design",
                "Furniture Design",
                "Product Design",
                "Spatial Design",
                "UI/UX Design",
                "Design Management",
              ].map((pill) => (
                <span
                  key={pill}
                  className="px-3 py-1 border border-mineral-100 bg-concrete-100/70 text-xs font-mono text-charcoal"
                >
                  {pill}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#enquiry-form"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-charcoal text-canvas text-xs uppercase tracking-widest font-medium hover:bg-concrete-800 transition-colors"
              >
                <span>Discuss Your Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <Link
                href="/space-check"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-charcoal bg-canvas text-charcoal text-xs uppercase tracking-widest font-medium hover:bg-concrete-200/50 transition-colors"
              >
                <span>Launch Growspace Room Audit</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Official Studio Visual Banner */}
          <div className="lg:col-span-5">
            <div className="border border-mineral-100 bg-concrete-100 p-3 space-y-3">
              <img
                src="/brand/studio-banner.jpg"
                alt="Mohammadali G. Tharadara — Designer + Educator Banner"
                className="w-full h-auto border border-mineral-100 object-cover"
              />
              <div className="flex items-center justify-between text-[11px] font-mono text-concrete-600 px-1">
                <span>DESIGN THINKER | PROBLEM SOLVER | STORY TELLER</span>
                <span>RESEARCH • DESIGN • IMPACT</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FOUNDER PROFILE & BRAND CARD */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Founder Portrait & Bio */}
        <div className="lg:col-span-7 border border-mineral-100 bg-canvas p-6 sm:p-8 flex flex-col sm:flex-row gap-8 items-center">
          <div className="w-full sm:w-56 shrink-0 border border-mineral-100 bg-concrete-100 p-2">
            <img
              src="/brand/founder-portrait.jpg"
              alt="Mohammadali G. Tharadara"
              className="w-full h-72 object-cover"
            />
          </div>
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-concrete-500">
              FOUNDER & PRINCIPAL EDUCATOR
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
              Mohammadali G. Tharadara
            </h2>
            <p className="text-xs font-mono uppercase tracking-wider text-accent-brass">
              Designer + Educator • Ahmedabad, Gujarat, India
            </p>
            <p className="text-sm text-concrete-600 leading-relaxed">
              Leading a multidisciplinary practice at the intersection of
              interior architecture, modular furniture systems, industrial
              product design, and design education. Every project balances
              tactile material honesty with rigorous human-centered ergonomics—from
              bespoke residential interiors to the{" "}
              <strong className="text-charcoal">Growspace</strong> modular
              frame platform.
            </p>
            <div className="pt-3 border-t border-mineral-100 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
              <a
                href="tel:+918980676705"
                className="flex items-center gap-2 hover:underline"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+91 89806 76705</span>
              </a>
              <a
                href="mailto:mg.th257@gmail.com"
                className="flex items-center gap-2 hover:underline"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>mg.th257@gmail.com</span>
              </a>
              <a
                href="https://instagram.com/elitedesigns226"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:underline"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>@elitedesigns226</span>
              </a>
              <a
                href="https://www.linkedin.com/in/mohammad-ali-tharadara-577424187"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:underline"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>mohammad-ali-tharadara</span>
              </a>
            </div>
          </div>
        </div>

        {/* Digital Visiting Card + QR Code */}
        <div className="lg:col-span-5 border border-mineral-100 bg-canvas p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-mineral-100 pb-3 mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-concrete-500">
              OFFICIAL STUDIO IDENTITY CARD
            </span>
            <a
              href="/brand/Design_Firm_Website_Planning_Guide.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs font-mono text-charcoal underline underline-offset-4"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Planning Brief PDF</span>
            </a>
          </div>
          <img
            src="/brand/business-card.jpg"
            alt="Elite Designs Visiting Card & QR Connect"
            className="w-full h-72 object-contain border border-mineral-100 bg-concrete-50 p-2"
          />
          <p className="text-[11px] font-mono text-concrete-500 mt-3 text-center">
            Scan QR code on card to save studio contact directly to your phone.
          </p>
        </div>
      </section>

      {/* 3. MULTIDISCIPLINARY SERVICES MATRIX */}
      <section className="space-y-8">
        <div className="border-b border-mineral-100 pb-4">
          <span className="text-xs font-mono uppercase tracking-widest text-concrete-500 block mb-1">
            PRACTICE DISCIPLINES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
            Services & Deliverables
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              code: "01 // INTERIORS",
              title: "Interior Architecture & Design",
              subtitle: "Material • Comfort • Detail",
              scope:
                "Residential, retail, office, and hospitality interiors; compact space planning; furniture layouts; lighting concepts; and turnkey refurbishment.",
              deliverables: "2D Layouts, 3D Renders, Material Boards, Working Drawings",
            },
            {
              code: "02 // FURNITURE",
              title: "Bespoke & Modular Furniture",
              subtitle: "Craft • Proportion • Utility",
              scope:
                "Custom residential/commercial furniture, the Growspace boltless MS + BWR ply modular frame system, joinery engineering, and prototyping.",
              deliverables: "Shop Drawings, Joinery Nodes, Cut-Lists, Prototypes",
            },
            {
              code: "03 // PRODUCT",
              title: "Product & Industrial Design",
              subtitle: "Function • Form • Iteration",
              scope:
                "Functional everyday objects, hardware nodes, material experimentation, CAD 3D modeling, and manufacturing-ready development.",
              deliverables: "3D CAD Assemblies, Tolerance Specs, Physical Mockups",
            },
            {
              code: "04 // SPATIAL",
              title: "Spatial & Exhibition Design",
              subtitle: "Form • Light • Context",
              scope:
                "Architectural concepts, facade studies, daylight/shadow optimization, exhibition environments, and design consultancy.",
              deliverables: "Sectional Models, Solar Studies, Spatial Narratives",
            },
          ].map((srv) => (
            <div
              key={srv.code}
              className="border border-mineral-100 bg-canvas p-6 flex flex-col justify-between hover:border-charcoal transition-colors"
            >
              <div className="space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-widest text-concrete-500">
                  {srv.code}
                </span>
                <h3 className="font-serif text-2xl text-charcoal">
                  {srv.title}
                </h3>
                <p className="text-xs font-mono text-accent-brass">
                  {srv.subtitle}
                </p>
                <p className="text-xs text-concrete-600 leading-relaxed">
                  {srv.scope}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-mineral-100 text-[11px] font-mono text-concrete-600">
                <strong className="text-charcoal block mb-0.5">
                  DELIVERABLES:
                </strong>
                {srv.deliverables}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CURATED PORTFOLIO & ARCHITECTURAL PRESENTATION BOARDS */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-mineral-100 pb-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-concrete-500 block mb-1">
              SELECTED WORKS & RESEARCH SHEETS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
              Portfolio & Spatial Studies
            </h2>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-mono border transition-colors ${
                  activeCategory === cat
                    ? "bg-charcoal text-canvas border-charcoal"
                    : "bg-canvas text-concrete-600 border-mineral-100 hover:border-charcoal"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="border border-mineral-100 bg-canvas flex flex-col justify-between hover:border-charcoal transition-all"
            >
              <div>
                <div className="p-4 border-b border-mineral-100 bg-concrete-50">
                  <div className="flex items-center justify-between text-xs font-mono text-concrete-500 mb-3">
                    <span>{project.category.toUpperCase()}</span>
                    <span>
                      {project.location} • {project.year}
                    </span>
                  </div>
                  <div className="h-64 overflow-hidden border border-mineral-100 bg-canvas">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-2xl text-charcoal">
                      {project.title}
                    </h3>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 border border-mineral-100 bg-concrete-50 text-concrete-600">
                      {project.status}
                    </span>
                  </div>
                  <p className="text-sm text-concrete-600 leading-relaxed">
                    {project.summary}
                  </p>
                </div>
              </div>

              <div className="px-6 py-4 border-t border-mineral-100 bg-concrete-50/50 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                <div className="flex flex-wrap gap-2">
                  {project.deliverables.map((d) => (
                    <span
                      key={d}
                      className="px-2 py-0.5 border border-mineral-100 bg-canvas text-[10px]"
                    >
                      {d}
                    </span>
                  ))}
                </div>
                <a
                  href={project.image}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-charcoal underline underline-offset-4"
                >
                  <span>Full Sheet</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. 5-STAGE DESIGN PROCESS */}
      <section className="border border-mineral-100 bg-canvas p-6 sm:p-10 space-y-8">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-concrete-500 block mb-1">
            METHODOLOGY FROM THE STUDIO BRIEF
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
            Five-Stage Design Process
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {DESIGN_PROCESS_STAGES.map((st) => (
            <div
              key={st.stage}
              className="p-5 border border-mineral-100 bg-concrete-50/50 space-y-2"
            >
              <span className="text-xs font-mono text-accent-brass font-semibold">
                {st.stage}
              </span>
              <h3 className="font-serif text-2xl text-charcoal">{st.name}</h3>
              <p className="text-xs text-concrete-600 leading-relaxed">
                {st.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. PROJECT ENQUIRY FORM (FROM SECTION 8 OF PLANNING GUIDE) */}
      <section
        id="enquiry-form"
        className="border border-charcoal bg-canvas p-6 sm:p-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-concrete-500">
              START A CONVERSATION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
              Project & Modular Frame Enquiry
            </h2>
            <p className="text-sm text-concrete-600 leading-relaxed">
              Whether you are commissioning a full residential interior in
              Ahmedabad, custom furniture prototyping, or ordering a custom
              Growspace modular frame assembly, share your project parameters
              below.
            </p>

            <div className="p-5 border border-mineral-100 bg-concrete-50 space-y-3 text-xs">
              <div className="font-mono uppercase text-concrete-500">
                DIRECT STUDIO CHANNELS
              </div>
              <p className="font-medium text-charcoal">
                Mohammadali G. Tharadara — Elite Designs
              </p>
              <p className="text-concrete-600">
                Service Regions: Ahmedabad, Gujarat • Pan-India Modular Delivery
                • Remote Design Consultancy
              </p>
              <div className="pt-2 space-y-1 font-mono">
                <div>Phone / WhatsApp: +91 89806 76705</div>
                <div>Email: mg.th257@gmail.com</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            {enquirySubmitted ? (
              <div className="p-8 border border-accent-sage bg-accent-sage/10 space-y-4">
                <div className="flex items-center gap-2 text-accent-sage font-semibold">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Project Brief Recorded</span>
                </div>
                <h3 className="font-serif text-2xl text-charcoal">
                  Thank you, {formState.fullName || "Client"}.
                </h3>
                <p className="text-sm text-concrete-600">
                  Your enquiry for <strong>{formState.projectType}</strong> in{" "}
                  <strong>{formState.location}</strong> ({formState.budgetRange})
                  has been formatted. You can also send it immediately via
                  email or WhatsApp to Mohammadali G. Tharadara:
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={`mailto:mg.th257@gmail.com?subject=${encodeURIComponent(
                      `Project Enquiry: ${formState.projectType} - ${formState.fullName}`
                    )}&body=${encodeURIComponent(
                      `Name: ${formState.fullName}\nPhone: ${formState.phone}\nLocation: ${formState.location}\nArea: ${formState.areaSqFt} sq.ft\nBudget: ${formState.budgetRange}\nTimeline: ${formState.timeline}\n\nBrief:\n${formState.description}`
                    )}`}
                    className="px-5 py-2.5 bg-charcoal text-canvas text-xs font-mono uppercase tracking-widest"
                  >
                    Send via Email Client
                  </a>
                  <button
                    type="button"
                    onClick={() => setEnquirySubmitted(false)}
                    className="px-4 py-2.5 border border-mineral-100 text-xs font-mono"
                  >
                    Edit Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleEnquirySubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-concrete-600 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.fullName}
                      onChange={(e) =>
                        setFormState({ ...formState, fullName: e.target.value })
                      }
                      placeholder="e.g., Aarav Mehta"
                      className="w-full px-3.5 py-2.5 border border-mineral-100 bg-concrete-50/50 text-sm focus:outline-none focus:border-charcoal"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-concrete-600 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      placeholder="name@domain.com"
                      className="w-full px-3.5 py-2.5 border border-mineral-100 bg-concrete-50/50 text-sm focus:outline-none focus:border-charcoal"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-concrete-600 mb-1">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={formState.phone}
                      onChange={(e) =>
                        setFormState({ ...formState, phone: e.target.value })
                      }
                      placeholder="+91 98XXX XXXXX"
                      className="w-full px-3.5 py-2.5 border border-mineral-100 bg-concrete-50/50 text-sm focus:outline-none focus:border-charcoal"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-concrete-600 mb-1">
                      Discipline / Scope
                    </label>
                    <select
                      value={formState.projectType}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          projectType: e.target.value,
                        })
                      }
                      className="w-full px-3.5 py-2.5 border border-mineral-100 bg-concrete-50/50 text-sm focus:outline-none focus:border-charcoal"
                    >
                      <option>Growspace Modular Frame Kit</option>
                      <option>Residential Interior Design</option>
                      <option>Commercial / Studio Interior</option>
                      <option>Bespoke Furniture Design</option>
                      <option>Product / Industrial Design</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-concrete-600 mb-1">
                      Approx. Area (sq.ft)
                    </label>
                    <input
                      type="text"
                      value={formState.areaSqFt}
                      onChange={(e) =>
                        setFormState({ ...formState, areaSqFt: e.target.value })
                      }
                      placeholder="e.g., 120 sq.ft room / 1200 sq.ft flat"
                      className="w-full px-3.5 py-2.5 border border-mineral-100 bg-concrete-50/50 text-sm focus:outline-none focus:border-charcoal"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-concrete-600 mb-1">
                      Project Location
                    </label>
                    <input
                      type="text"
                      value={formState.location}
                      onChange={(e) =>
                        setFormState({ ...formState, location: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 border border-mineral-100 bg-concrete-50/50 text-sm focus:outline-none focus:border-charcoal"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-concrete-600 mb-1">
                      Estimated Budget Range (INR)
                    </label>
                    <select
                      value={formState.budgetRange}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          budgetRange: e.target.value,
                        })
                      }
                      className="w-full px-3.5 py-2.5 border border-mineral-100 bg-concrete-50/50 text-sm focus:outline-none focus:border-charcoal"
                    >
                      <option>₹18,000 – ₹45,000 (Single Room Growspace Frame)</option>
                      <option>₹45,000 – ₹1,50,000 (Multi-Room Modular Upgrade)</option>
                      <option>₹1,50,000 – ₹5,00,000 (Bespoke Interior + Furniture)</option>
                      <option>₹5,00,000+ (Full Turnkey Residential/Commercial)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-concrete-600 mb-1">
                    Project Description & Requirements
                  </label>
                  <textarea
                    rows={3}
                    value={formState.description}
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        description: e.target.value,
                      })
                    }
                    placeholder="Describe your room dimensions, existing furniture challenges, or bespoke design goals..."
                    className="w-full px-3.5 py-2.5 border border-mineral-100 bg-concrete-50/50 text-sm focus:outline-none focus:border-charcoal"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[11px] text-concrete-500">
                    Privacy Notice: Details are used solely to prepare your
                    initial design consultation.
                  </span>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-canvas text-xs uppercase tracking-widest font-semibold hover:bg-concrete-800 transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Project Enquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

