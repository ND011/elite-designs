import React from "react";
import Link from "next/link";
import { STUDIO_IDENTITY, PORTFOLIO_PROJECTS, SERVICES_CATALOG } from "@/data/studioData";

export default function HomePage() {
  const featuredProjects = PORTFOLIO_PROJECTS.slice(0, 4);

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section className="relative w-full -mt-20 bg-surface overflow-hidden">
        <div className="relative w-full min-h-[900px] flex flex-col justify-between pt-28 pb-space-lg px-margin lg:px-margin-desktop">
          {/* Background Visual — Elite Designs Curated Architecture */}
          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: "url('/portfolio/curated-architecture.jpg')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/50 to-primary/30" />
          </div>

          {/* Top Technical Coordinate Badge */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-space-sm pt-space-md text-surface-bright">
            <div className="flex items-center gap-space-sm bg-primary/50 backdrop-blur-md px-space-md py-space-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-surface-bright animate-ping" />
              <span className="font-label-mono text-label-mono uppercase tracking-widest text-surface-bright">
                ELITE DESIGNS • DESIGNER + EDUCATOR
              </span>
            </div>
            <div className="hidden md:flex items-center gap-space-md font-label-mono text-label-mono text-surface-bright/80 uppercase">
              <span>Ahmedabad, Gujarat, India</span>
              <span>/</span>
              <span>23°01′N 72°34′E</span>
              <span>/</span>
              <span>Mohammadali G. Tharadara</span>
            </div>
          </div>

          {/* Hero Central Typography & Official Logo Statement */}
          <div className="relative z-10 max-w-5xl my-auto py-space-xl">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-space-lg">
              <img
                src="/brand/elite-logo-full-light.png"
                alt="Elite Designs Official Logo"
                className="w-44 md:w-52 h-auto object-contain drop-shadow-md"
              />
              <div className="sm:border-l sm:border-surface-bright/30 sm:pl-6">
                <span className="font-label-mono text-label-mono uppercase tracking-widest text-surface-bright/85 block">
                  {STUDIO_IDENTITY.firmName} • {STUDIO_IDENTITY.founder.name}
                </span>
                <span className="font-headline-sm text-headline-sm text-surface-bright italic mt-1 block">
                  “{STUDIO_IDENTITY.tagline}”
                </span>
              </div>
            </div>
            <h1 className="font-display text-display-mobile lg:text-display text-surface-bright tracking-tight leading-[1.05] mb-space-md">
              {STUDIO_IDENTITY.headline}
            </h1>
            <p className="font-body-lg text-body-lg text-surface-bright/90 max-w-2xl font-light leading-relaxed">
              {STUDIO_IDENTITY.supportingStatement}
            </p>
            {/* CTAs */}
            <div className="mt-space-lg flex flex-wrap items-center gap-space-md">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-space-lg py-3.5 bg-surface-bright text-primary font-label-lg text-label-lg uppercase tracking-widest hover:bg-surface-container-high transition-colors shadow-sm"
              >
                Explore Portfolio
                <span className="material-symbols-outlined ml-space-xs text-base">
                  arrow_forward
                </span>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-space-lg py-3.5 bg-primary/50 text-surface-bright backdrop-blur-sm border border-surface-bright/30 font-label-lg text-label-lg uppercase tracking-widest hover:bg-primary/80 transition-colors"
              >
                About Founder
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-space-lg py-3.5 bg-secondary/90 text-surface-bright backdrop-blur-sm font-label-mono text-label-mono uppercase tracking-widest hover:bg-secondary transition-colors"
              >
                Discuss Your Project →
              </Link>
            </div>
          </div>

          {/* Bottom Hero Footnote & Micro-specs Bar */}
          <div className="relative z-10 pt-space-md border-t border-surface-bright/20 flex flex-col md:flex-row md:items-end justify-between gap-space-md text-surface-bright">
            <div className="flex flex-col gap-0.5">
              <span className="font-label-mono text-label-mono text-surface-bright/60 uppercase">
                Principal Founder
              </span>
              <span className="font-headline-sm text-headline-sm tracking-tight text-surface-bright">
                {STUDIO_IDENTITY.founder.name}
              </span>
              <span className="font-body-sm text-body-sm text-surface-bright/80">
                {STUDIO_IDENTITY.founder.credentials}
              </span>
            </div>
            <div className="flex items-center gap-space-lg">
              <div className="hidden sm:flex flex-col text-right">
                <span className="font-label-mono text-label-mono text-surface-bright/60 uppercase">
                  Specialisation
                </span>
                <span className="font-label-mono text-label-mono uppercase text-surface-bright">
                  Architecture • Interiors • Furniture • Products
                </span>
              </div>
              <div className="flex items-center gap-space-xs text-surface-bright/80 font-label-mono text-label-mono uppercase animate-bounce">
                <span>Scroll</span>
                <span className="material-symbols-outlined text-sm">
                  arrow_downward
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STUDIO INTRODUCTION & METRICS */}
      <section className="w-full bg-surface py-space-2xl px-margin lg:px-margin-desktop">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-baseline">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-space-xs text-secondary mb-space-sm">
                <span className="font-label-mono text-label-mono uppercase tracking-widest">
                  [ 01 / Brand Philosophy ]
                </span>
              </div>
              <p className="font-label-mono text-label-mono uppercase text-outline">
                {STUDIO_IDENTITY.founder.location}
              </p>
            </div>
            <div className="lg:col-span-9 space-y-space-md">
              <p className="font-display text-headline-lg-mobile lg:text-headline-lg text-on-surface leading-[1.12] tracking-tight">
                {STUDIO_IDENTITY.philosophy}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg pt-space-md">
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  <strong>Mission:</strong> {STUDIO_IDENTITY.mission}
                </p>
                <p className="font-body-md text-body-md text-secondary leading-relaxed">
                  <strong>Vision:</strong> {STUDIO_IDENTITY.vision}
                </p>
              </div>
            </div>
          </div>

          {/* Architectural Tabular Metrics Grid */}
          <div className="mt-space-2xl pt-space-lg border-t border-surface-container-highest grid grid-cols-2 md:grid-cols-4 gap-gutter">
            <div className="flex flex-col space-y-space-xs pr-space-md">
              <span className="font-display text-headline-lg text-primary leading-none">
                06
              </span>
              <span className="font-label-mono text-label-mono uppercase tracking-widest text-on-surface">
                Core Disciplines
              </span>
              <p className="font-body-sm text-body-sm text-secondary">
                Architecture, Interior Architecture, Furniture, Product Design,
                Spatial Exhibitions, and Consultancy.
              </p>
            </div>
            <div className="flex flex-col space-y-space-xs pr-space-md">
              <span className="font-display text-headline-lg text-primary leading-none">
                M.Des
              </span>
              <span className="font-label-mono text-label-mono uppercase tracking-widest text-on-surface">
                Research &amp; Practice
              </span>
              <p className="font-body-sm text-body-sm text-secondary">
                Led by {STUDIO_IDENTITY.founder.name}, combining master&apos;s
                design research, retail practice, and academic teaching.
              </p>
            </div>
            <div className="flex flex-col space-y-space-xs pr-space-md">
              <span className="font-display text-headline-lg text-primary leading-none">
                1:1
              </span>
              <span className="font-label-mono text-label-mono uppercase tracking-widest text-on-surface">
                Prototyping Rigor
              </span>
              <p className="font-body-sm text-body-sm text-secondary">
                Every spatial system, modular frame, and product mechanism is
                validated through physical mockups and technical drawings.
              </p>
            </div>
            <div className="flex flex-col space-y-space-xs">
              <span className="font-display text-headline-lg text-primary leading-none">
                100%
              </span>
              <span className="font-label-mono text-label-mono uppercase tracking-widest text-on-surface">
                Material Honesty
              </span>
              <p className="font-body-sm text-body-sm text-secondary">
                Authentic BWR marine timber, powder-coated mild steel, natural
                stone, and fluted glass without artificial ornament.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED PROJECTS (ELITE DESIGNS PORTFOLIO BOARDS) */}
      <section className="w-full bg-surface-container-low py-space-2xl px-margin lg:px-margin-desktop">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-space-lg mb-space-lg border-b border-surface-container-highest gap-space-md">
            <div>
              <span className="font-label-mono text-label-mono uppercase tracking-widest text-secondary">
                [ 02 / Selected Portfolio ]
              </span>
              <h2 className="font-display text-headline-lg text-on-surface tracking-tight mt-1">
                Featured Works
              </h2>
            </div>
            <div className="flex items-center gap-space-md">
              <span className="font-label-mono text-label-mono text-secondary uppercase">
                Showing 04 of {PORTFOLIO_PROJECTS.length} Case Studies
              </span>
              <Link
                href="/projects"
                className="inline-flex items-center gap-1 font-label-lg text-label-lg uppercase tracking-wider text-primary hover:text-secondary transition-colors underline underline-offset-4"
              >
                View Complete Portfolio
                <span className="material-symbols-outlined text-sm">
                  arrow_outward
                </span>
              </Link>
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-desktop">
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group flex flex-col cursor-pointer bg-surface p-space-md transition-all duration-300 hover:bg-surface-container-lowest"
              >
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-container-high mb-space-md">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                  <div className="absolute top-space-sm left-space-sm bg-surface/90 backdrop-blur-sm px-space-sm py-1 font-label-mono text-label-mono uppercase text-on-surface">
                    {project.category}
                  </div>
                </div>
                <div className="flex items-start justify-between gap-space-sm pt-space-xs border-t border-surface-container-highest">
                  <div>
                    <span className="font-label-mono text-label-mono uppercase text-secondary">
                      {project.location} • {project.year}
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mt-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 line-clamp-2">
                      {project.brief}
                    </p>
                  </div>
                  <span className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-surface-container group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-base">
                      arrow_forward
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICES OVERVIEW (6 ELITE DESIGNS DISCIPLINES) */}
      <section className="w-full bg-surface py-space-2xl px-margin lg:px-margin-desktop">
        <div className="max-w-7xl mx-auto">
          <div className="mb-space-xl">
            <span className="font-label-mono text-label-mono uppercase tracking-widest text-secondary">
              [ 03 / Disciplines ]
            </span>
            <h2 className="font-display text-headline-lg text-on-surface tracking-tight mt-1">
              What Clients Hire Elite Designs For
            </h2>
            <p className="font-body-md text-body-md text-secondary max-w-2xl mt-space-xs">
              Six specialized design disciplines spanning spatial architecture,
              interior environments, modular furniture, and industrial product
              prototyping.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {SERVICES_CATALOG.map((service) => (
              <div
                key={service.id}
                className="flex flex-col justify-between bg-surface-container-low p-space-lg group hover:bg-surface-container transition-colors"
              >
                <div>
                  <span className="font-label-mono text-label-mono text-secondary">
                    {service.number} // {service.subtitle}
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mt-space-sm mb-space-xs">
                    {service.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
                    {service.summary}
                  </p>
                </div>
                <div className="pt-space-md border-t border-surface-container-highest flex items-center justify-between">
                  <span className="font-label-mono text-label-mono uppercase text-secondary">
                    Deliverables Included
                  </span>
                  <Link
                    href="/services"
                    className="font-label-lg text-label-lg uppercase tracking-wider text-primary group-hover:underline"
                  >
                    Explore →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DESIGN PHILOSOPHY & CORE VALUES */}
      <section className="w-full bg-surface-container py-space-2xl px-margin lg:px-margin-desktop">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
          {/* Left Column: Values */}
          <div className="lg:col-span-6 space-y-space-xl">
            <div>
              <span className="font-label-mono text-label-mono uppercase tracking-widest text-secondary">
                [ 04 / Studio Ethos ]
              </span>
              <h2 className="font-display text-headline-lg text-on-surface tracking-tight mt-1">
                Core Design Values
              </h2>
            </div>
            <div className="space-y-space-lg">
              {STUDIO_IDENTITY.values.map((val, idx) => (
                <div
                  key={val.title}
                  className={`border-l-2 ${
                    idx === 0 ? "border-primary" : "border-outline-variant"
                  } pl-space-md space-y-1`}
                >
                  <h4 className="font-headline-sm text-headline-sm text-on-surface">
                    {val.title}
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="pt-space-sm">
              <Link
                href="/about"
                className="inline-flex items-center gap-space-xs font-label-lg text-label-lg uppercase tracking-widest text-primary hover:text-secondary transition-colors underline underline-offset-4"
              >
                Read Founder Profile &amp; Story
                <span className="material-symbols-outlined text-sm">
                  menu_book
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: Elite Designs Visual Vignettes */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-space-md">
            <div className="space-y-space-md">
              <div className="aspect-[4/5] bg-surface-container-high overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt="Daylight & Optical Spatial Research"
                  src="/portfolio/daylight-spatial-research.jpg"
                />
              </div>
              <div className="p-space-sm bg-surface">
                <span className="font-label-mono text-label-mono uppercase text-secondary">
                  Study 01 //
                </span>
                <p className="font-body-sm text-body-sm text-on-surface mt-1">
                  Heliostatic Daylight &amp; Optical Section Study.
                </p>
              </div>
            </div>
            <div className="space-y-space-md pt-space-xl">
              <div className="aspect-[4/5] bg-surface-container-high overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt="1:1 Product Prototyping & Ergonomics"
                  src="/portfolio/product-prototyping-board.jpg"
                />
              </div>
              <div className="p-space-sm bg-surface">
                <span className="font-label-mono text-label-mono uppercase text-secondary">
                  Study 02 //
                </span>
                <p className="font-body-sm text-body-sm text-on-surface mt-1">
                  Iterative Physical Mockups &amp; Mechanism Validation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SELECTED WORKS INDEX (ELITE DESIGNS PROJECT REGISTER) */}
      <section className="w-full bg-surface py-space-2xl px-margin lg:px-margin-desktop">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-space-md border-b border-surface-container-highest gap-space-sm">
            <div>
              <span className="font-label-mono text-label-mono uppercase tracking-widest text-secondary">
                [ 05 / Register ]
              </span>
              <h2 className="font-display text-headline-lg text-on-surface tracking-tight mt-1">
                Selected Works Chronology
              </h2>
            </div>
            <div className="font-label-mono text-label-mono text-secondary uppercase">
              Elite Designs Portfolio Index
            </div>
          </div>

          <div className="w-full mt-space-md divide-y divide-surface-container-highest font-body-sm text-body-sm">
            <div className="hidden md:grid grid-cols-12 py-space-sm text-secondary font-label-mono text-label-mono uppercase tracking-widest">
              <div className="col-span-1">Year</div>
              <div className="col-span-2">Discipline</div>
              <div className="col-span-4">Project &amp; Scope</div>
              <div className="col-span-3">Context</div>
              <div className="col-span-2 text-right">Status</div>
            </div>

            {PORTFOLIO_PROJECTS.map((proj) => (
              <Link
                key={proj.slug}
                href={`/projects/${proj.slug}`}
                className="group grid grid-cols-1 md:grid-cols-12 py-space-md items-center hover:bg-surface-container-low transition-colors px-space-xs cursor-pointer"
              >
                <div className="col-span-1 font-label-mono text-label-mono text-secondary">
                  {proj.year}
                </div>
                <div className="col-span-2 font-label-mono text-label-mono text-outline">
                  {proj.category}
                </div>
                <div className="col-span-4 pr-space-md">
                  <span className="font-headline-sm text-headline-sm text-on-surface block group-hover:text-primary">
                    {proj.title}
                  </span>
                  <span className="text-secondary text-body-sm">
                    {proj.area}
                  </span>
                </div>
                <div className="col-span-3 text-on-surface-variant">
                  {proj.location}
                </div>
                <div className="col-span-2 text-left md:text-right mt-space-xs md:mt-0">
                  <span className="inline-block px-space-xs py-0.5 bg-primary text-on-primary font-label-mono text-label-mono uppercase">
                    {proj.status}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-space-lg flex justify-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-space-lg py-3 border border-on-surface text-on-surface font-label-lg text-label-lg uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-colors"
            >
              Open Full Portfolio Gallery ({PORTFOLIO_PROJECTS.length} Works)
              <span className="material-symbols-outlined text-sm">
                database
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. CONTACT / COMMISSION CALL-TO-ACTION */}
      <section className="w-full bg-primary text-on-primary py-space-2xl px-margin lg:px-margin-desktop">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop">
            <div className="lg:col-span-8 space-y-space-md">
              <span className="font-label-mono text-label-mono uppercase tracking-widest text-on-primary-container">
                [ Start a Project with Elite Designs ]
              </span>
              <h2 className="font-display text-headline-lg lg:text-display text-surface-bright tracking-tight leading-[1.05]">
                Have an upcoming interior, furniture, architectural, or product
                project?
              </h2>
              <p className="font-body-lg text-body-lg text-inverse-primary max-w-2xl font-light">
                We collaborate with homeowners, commercial businesses, property
                developers, and furniture brands seeking thoughtful, research-led
                design execution.
              </p>
              <div className="pt-space-md flex flex-wrap items-center gap-space-md">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-space-lg py-4 bg-surface-bright text-primary font-label-lg text-label-lg uppercase tracking-widest hover:bg-secondary-fixed transition-colors"
                >
                  Start a Project
                  <span className="material-symbols-outlined ml-space-xs text-base">
                    east
                  </span>
                </Link>
                <a
                  className="font-label-mono text-label-mono uppercase tracking-widest text-surface-bright underline underline-offset-8 hover:text-secondary-fixed transition-colors"
                  href={`mailto:${STUDIO_IDENTITY.founder.email}`}
                >
                  {STUDIO_IDENTITY.founder.email}
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-between pt-space-lg lg:pt-0 lg:pl-space-lg border-t lg:border-t-0 lg:border-l border-outline-variant/30">
              <div className="space-y-space-md">
                <div className="space-y-1">
                  <span className="font-label-mono text-label-mono text-on-primary-container uppercase">
                    Principal Designer
                  </span>
                  <p className="font-body-sm text-body-sm text-surface-bright">
                    {STUDIO_IDENTITY.founder.name}
                    <br />
                    {STUDIO_IDENTITY.founder.role}
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="font-label-mono text-label-mono text-on-primary-container uppercase">
                    Studio Coordinates
                  </span>
                  <p className="font-body-sm text-body-sm text-surface-bright">
                    {STUDIO_IDENTITY.founder.location}
                    <br />
                    Direct Line: {STUDIO_IDENTITY.founder.phone}
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="font-label-mono text-label-mono text-on-primary-container uppercase">
                    Service Coverage
                  </span>
                  <p className="font-body-sm text-body-sm text-surface-bright">
                    {STUDIO_IDENTITY.founder.serviceRegions}
                  </p>
                </div>
              </div>
              <div className="pt-space-md">
                <span className="font-label-mono text-label-mono text-on-primary-container block">
                  Instagram: {STUDIO_IDENTITY.founder.instagram}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
