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
  BookOpen,
} from "lucide-react";
import {
  STUDIO_IDENTITY,
  SERVICES_CATALOG,
  PORTFOLIO_PROJECTS,
  JOURNAL_ARTICLES,
} from "@/data/studioData";

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
    projectType: "Interior Architecture & Design",
    location: "Ahmedabad, Gujarat",
    areaSqFt: "",
    budgetRange: "₹1,50,000 – ₹5,00,000 (Bespoke Interior + Furniture)",
    timeline: "Within 1–2 Months",
    description: "",
  });

  const categories = [
    "All",
    "Interior Design",
    "Product Design",
    "Architecture & Spatial",
  ];

  const filteredProjects =
    activeCategory === "All"
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);

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
                {STUDIO_IDENTITY.firmName.toUpperCase()} •{" "}
                {STUDIO_IDENTITY.founder.location.toUpperCase()}
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal leading-[1.08]">
              {STUDIO_IDENTITY.headline}
            </h1>

            <p className="text-base text-concrete-600 leading-relaxed max-w-2xl">
              {STUDIO_IDENTITY.supportingStatement}
            </p>

            <blockquote className="p-4 border-l-2 border-charcoal bg-concrete-50/70 text-sm italic font-serif text-charcoal">
              “{STUDIO_IDENTITY.philosophy}”
            </blockquote>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-charcoal text-canvas text-xs uppercase tracking-widest font-medium hover:bg-concrete-800 transition-colors"
              >
                <span>Explore Full Portfolio</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href="#enquiry-form"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-charcoal bg-canvas text-charcoal text-xs uppercase tracking-widest font-medium hover:bg-concrete-200/50 transition-colors"
              >
                <span>Discuss Your Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
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

      {/* 2. FOUNDER PROFILE, CREDENTIALS & DIGITAL VISITING CARD */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-7 border border-mineral-100 bg-canvas p-6 sm:p-8 flex flex-col justify-between">
          <div className="flex flex-col sm:flex-row gap-8 items-center">
            <div className="w-full sm:w-52 shrink-0 border border-mineral-100 bg-concrete-100 p-2">
              <img
                src="/brand/founder-portrait.jpg"
                alt={STUDIO_IDENTITY.founder.name}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-concrete-500">
                FOUNDER PROFILE & CREDENTIALS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
                {STUDIO_IDENTITY.founder.name}
              </h2>
              <p className="text-xs font-mono uppercase tracking-wider text-accent-brass">
                {STUDIO_IDENTITY.founder.credentials}
              </p>
              <p className="text-sm text-concrete-600 leading-relaxed">
                With a background bridging postgraduate design education,
                academic design research, retail space design, and furniture/product
                prototyping, Mohammadali G. Tharadara leads{" "}
                <strong className="text-charcoal">Elite Designs</strong> in
                Ahmedabad. His dual role as practitioner and educator ensures
                every commission is grounded in analytical research, material
                longevity, and clear technical communication.
              </p>
            </div>
          </div>

          {/* Studio Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 mt-6 border-t border-mineral-100">
            {STUDIO_IDENTITY.values.map((val) => (
              <div
                key={val.title}
                className="p-3.5 border border-mineral-100 bg-concrete-50/50"
              >
                <h3 className="font-serif text-lg text-charcoal font-semibold">
                  {val.title}
                </h3>
                <p className="text-xs text-concrete-600 mt-1 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
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
          <div className="pt-4 mt-4 border-t border-mineral-100 grid grid-cols-2 gap-2 text-xs font-mono">
            <a
              href={`tel:${STUDIO_IDENTITY.founder.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-1.5 hover:underline"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{STUDIO_IDENTITY.founder.phone}</span>
            </a>
            <a
              href={`mailto:${STUDIO_IDENTITY.founder.email}`}
              className="flex items-center gap-1.5 hover:underline"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{STUDIO_IDENTITY.founder.email}</span>
            </a>
            <a
              href={STUDIO_IDENTITY.founder.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:underline"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>{STUDIO_IDENTITY.founder.instagram}</span>
            </a>
            <a
              href={STUDIO_IDENTITY.founder.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:underline truncate"
            >
              <Linkedin className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">LinkedIn Profile</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3. COMPLETE 6-DISCIPLINE SERVICES MATRIX (SECTION 4 OF GUIDE) */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-mineral-100 pb-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-concrete-500 block mb-1">
              WHAT CLIENTS CAN COMMISSION US FOR
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
              Six Multidisciplinary Design Services
            </h2>
          </div>
          <span className="text-xs font-mono text-concrete-600">
            Regions: {STUDIO_IDENTITY.founder.serviceRegions}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_CATALOG.map((srv) => (
            <div
              key={srv.id}
              className="border border-mineral-100 bg-canvas p-6 flex flex-col justify-between hover:border-charcoal transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-concrete-500">
                    SERVICE {srv.number}
                  </span>
                  <span className="text-accent-brass">{srv.subtitle}</span>
                </div>

                <h3 className="font-serif text-2xl text-charcoal">
                  {srv.title}
                </h3>

                <p className="text-xs text-concrete-600 leading-relaxed">
                  {srv.summary}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-mineral-100">
                  <span className="text-[10px] font-mono uppercase text-concrete-500 block">
                    WHAT IT INCLUDES:
                  </span>
                  {srv.includes.map((inc) => (
                    <div
                      key={inc}
                      className="flex items-start gap-2 text-xs text-charcoal"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent-sage shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-5 border-t border-mineral-100 space-y-2 text-xs">
                <div>
                  <span className="font-mono text-[10px] uppercase text-concrete-500 block">
                    IDEAL FOR:
                  </span>
                  <span className="text-concrete-800">{srv.forWhom}</span>
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase text-concrete-500 block">
                    KEY DELIVERABLES:
                  </span>
                  <span className="font-mono text-[11px] text-charcoal">
                    {srv.deliverables.join(" • ")}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CURATED PORTFOLIO & CASE STUDIES (SECTION 5 OF GUIDE) */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-mineral-100 pb-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-concrete-500 block mb-1">
              SELECTED PORTFOLIO CASE STUDIES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
              Featured Projects & Research Sheets
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.slug}
              className="border border-mineral-100 bg-canvas flex flex-col justify-between hover:border-charcoal transition-all group"
            >
              <div>
                <div className="p-3.5 border-b border-mineral-100 bg-concrete-50">
                  <div className="flex items-center justify-between text-[11px] font-mono text-concrete-500 mb-2">
                    <span>{project.category.toUpperCase()}</span>
                    <span>{project.year}</span>
                  </div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="block h-52 overflow-hidden border border-mineral-100 bg-canvas"
                  >
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>
                </div>

                <div className="p-5 space-y-2.5">
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 border border-mineral-100 bg-concrete-50 text-concrete-600">
                    {project.status} • {project.location}
                  </span>
                  <Link href={`/projects/${project.slug}`}>
                    <h3 className="font-serif text-2xl text-charcoal group-hover:underline underline-offset-4 mt-1">
                      {project.title}
                    </h3>
                  </Link>
                  <p className="text-xs text-concrete-600 leading-relaxed line-clamp-3">
                    {project.brief}
                  </p>
                </div>
              </div>

              <div className="px-5 py-3.5 border-t border-mineral-100 bg-concrete-50/50 flex items-center justify-between text-xs font-mono">
                <span className="text-concrete-500 truncate max-w-[160px]">
                  {project.role}
                </span>
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1 text-charcoal font-semibold hover:underline underline-offset-4"
                >
                  <span>Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. 5-STAGE DESIGN PROCESS (SECTION 6 OF GUIDE) */}
      <section className="border border-mineral-100 bg-canvas p-6 sm:p-10 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-concrete-500 block mb-1">
              HOW WE TURN AN INITIAL IDEA INTO FINISHED DESIGN
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
              Five-Stage Studio Design Process
            </h2>
          </div>
          <span className="text-xs font-mono text-concrete-600">
            Scope: Design Consultancy, Technical Documentation & Prototyping
          </span>
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

      {/* 6. JOURNAL & DESIGN INSIGHTS (SECTION 8 OF GUIDE) */}
      <section className="space-y-8">
        <div className="border-b border-mineral-100 pb-4">
          <span className="text-xs font-mono uppercase tracking-widest text-concrete-500 block mb-1">
            RESEARCH & ACADEMIC THOUGHT LEADERSHIP
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
            Journal & Design Insights
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {JOURNAL_ARTICLES.map((art) => (
            <article
              key={art.slug}
              className="border border-mineral-100 bg-canvas p-6 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-concrete-500">
                  <span>{art.category.toUpperCase()}</span>
                  <span>{art.readTime}</span>
                </div>
                <h3 className="font-serif text-2xl text-charcoal leading-snug">
                  {art.title}
                </h3>
                <p className="text-xs text-concrete-600 leading-relaxed">
                  {art.excerpt}
                </p>
                <ul className="space-y-1.5 pt-3 border-t border-mineral-100">
                  {art.takeaways.map((t) => (
                    <li
                      key={t}
                      className="text-xs text-charcoal flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-brass mt-1.5 shrink-0" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-4 mt-4 border-t border-mineral-100 flex items-center justify-between text-xs font-mono text-concrete-500">
                <span>Published: {art.date}</span>
                <span className="text-charcoal">By M. G. Tharadara</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 7. PROJECT ENQUIRY FORM (SECTION 7 OF GUIDE) */}
      <section
        id="enquiry-form"
        className="border border-charcoal bg-canvas p-6 sm:p-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-concrete-500">
              START A PROJECT WITH ELITE DESIGNS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
              Project & Modular Frame Enquiry
            </h2>
            <p className="text-sm text-concrete-600 leading-relaxed">
              Share your project parameters below to schedule an initial
              consultation with <strong>Mohammadali G. Tharadara</strong>.
            </p>

            <div className="p-5 border border-mineral-100 bg-concrete-50 space-y-3 text-xs">
              <div className="font-mono uppercase text-concrete-500">
                DIRECT STUDIO CHANNELS
              </div>
              <p className="font-medium text-charcoal">
                {STUDIO_IDENTITY.founder.name} — {STUDIO_IDENTITY.firmName}
              </p>
              <p className="text-concrete-600">
                Service Regions: {STUDIO_IDENTITY.founder.serviceRegions}
              </p>
              <div className="pt-2 space-y-1 font-mono">
                <div>Phone / WhatsApp: {STUDIO_IDENTITY.founder.phone}</div>
                <div>Email: {STUDIO_IDENTITY.founder.email}</div>
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
                  has been formatted. Click below to send directly via email or
                  edit your brief:
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={`mailto:${
                      STUDIO_IDENTITY.founder.email
                    }?subject=${encodeURIComponent(
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
                      <option>Interior Architecture & Design</option>
                      <option>Growspace Modular Frame Kit</option>
                      <option>Architecture & Spatial Design</option>
                      <option>Bespoke Furniture Design</option>
                      <option>Product & Industrial Design</option>
                      <option>Design Consultancy & 3D Visualisation</option>
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
                      placeholder="e.g., 120 sq.ft room / 1500 sq.ft flat"
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
                    Privacy Notice: Submitted information is used strictly to
                    evaluate project scope and respond to your enquiry.
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
