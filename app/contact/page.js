"use client";

import React, { useState } from "react";
import { STUDIO_IDENTITY } from "@/data/studioData";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    discipline: "Interior Architecture & Design",
    location: "Ahmedabad, Gujarat",
    budget: "₹10L – ₹25L",
    brief: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="flex flex-col w-full">
      {/* Editorial Header */}
      <section className="w-full px-margin lg:px-margin-desktop py-space-xl lg:py-space-2xl bg-surface">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-baseline">
          <div className="lg:col-span-3 space-y-space-sm">
            <img
              src="/brand/elite-logo-full-dark.png"
              alt="Elite Designs Official Logo"
              className="w-36 h-auto object-contain mb-2"
            />
            <span className="font-label-mono text-label-mono text-secondary uppercase tracking-widest block">
              05 / CONTACT ELITE DESIGNS
            </span>
            <span className="font-label-mono text-label-mono text-outline block">
              AHMEDABAD, GUJARAT, INDIA
            </span>
          </div>
          <div className="lg:col-span-9 space-y-space-md">
            <h1 className="font-display text-display-mobile lg:text-display text-on-surface max-w-4xl tracking-tight">
              Start a project with {STUDIO_IDENTITY.firmName}.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Connect directly with{" "}
              <strong>{STUDIO_IDENTITY.founder.name}</strong> (
              {STUDIO_IDENTITY.founder.role}) for architecture, interior design,
              bespoke &amp; modular furniture, or product design commissions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="w-full px-margin lg:px-margin-desktop pb-space-2xl bg-surface">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop">
          {/* Left Column: Studio Dossier & Business Card */}
          <div className="lg:col-span-5 space-y-space-lg">
            <div className="bg-surface-container-low p-space-lg space-y-space-md">
              <span className="font-label-mono text-label-mono uppercase text-secondary tracking-widest">
                FOUNDER &amp; PRINCIPAL CONTACT
              </span>
              <h2 className="font-headline-md text-headline-md text-on-surface">
                {STUDIO_IDENTITY.founder.name}
              </h2>
              <p className="font-label-mono text-label-mono text-outline">
                {STUDIO_IDENTITY.founder.credentials}
              </p>

              <div className="pt-space-sm space-y-2 border-t border-surface-container-highest font-body-sm text-body-sm">
                <div className="flex justify-between">
                  <span className="font-label-mono text-label-mono text-secondary uppercase">
                    Direct Phone / WhatsApp
                  </span>
                  <a
                    href={`tel:${STUDIO_IDENTITY.founder.phone.replace(/\s+/g, "")}`}
                    className="text-on-surface font-medium hover:underline"
                  >
                    {STUDIO_IDENTITY.founder.phone}
                  </a>
                </div>
                <div className="flex justify-between">
                  <span className="font-label-mono text-label-mono text-secondary uppercase">
                    Email
                  </span>
                  <a
                    href={`mailto:${STUDIO_IDENTITY.founder.email}`}
                    className="text-on-surface font-medium hover:underline"
                  >
                    {STUDIO_IDENTITY.founder.email}
                  </a>
                </div>
                <div className="flex justify-between">
                  <span className="font-label-mono text-label-mono text-secondary uppercase">
                    Instagram
                  </span>
                  <a
                    href={STUDIO_IDENTITY.founder.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-on-surface font-medium hover:underline"
                  >
                    {STUDIO_IDENTITY.founder.instagram}
                  </a>
                </div>
                <div className="flex justify-between">
                  <span className="font-label-mono text-label-mono text-secondary uppercase">
                    LinkedIn
                  </span>
                  <a
                    href={STUDIO_IDENTITY.founder.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-on-surface font-medium hover:underline"
                  >
                    Mohammadali G. Tharadara
                  </a>
                </div>
                <div className="flex justify-between">
                  <span className="font-label-mono text-label-mono text-secondary uppercase">
                    Location
                  </span>
                  <span className="text-on-surface font-medium">
                    {STUDIO_IDENTITY.founder.location}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-low p-space-md space-y-space-xs">
              <span className="font-label-mono text-label-mono text-secondary uppercase block">
                Official Elite Designs Visiting Card
              </span>
              <img
                src="/brand/business-card.jpg"
                alt="Elite Designs Visiting Card"
                className="w-full h-auto object-contain border border-surface-container-highest"
              />
            </div>
          </div>

          {/* Right Column: Interactive Project Enquiry Form */}
          <div className="lg:col-span-7 bg-surface-container-lowest p-space-lg lg:p-space-xl border border-surface-container-highest shadow-sm">
            <div className="mb-space-lg pb-space-sm border-b border-surface-container-highest flex items-center justify-between">
              <span className="font-label-mono text-label-mono uppercase tracking-widest text-secondary">
                [ ELITE DESIGNS PROJECT ENQUIRY FORM ]
              </span>
              <span className="font-label-mono text-label-mono text-outline">
                AHMEDABAD • INDIA
              </span>
            </div>

            {submitted ? (
              <div className="p-space-xl bg-surface-container-low space-y-space-md">
                <span className="font-label-mono text-label-mono uppercase text-primary font-bold">
                  [ ENQUIRY PREPARED ]
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  Thank you, {formData.name || "Client"}. Your project brief for{" "}
                  {STUDIO_IDENTITY.firmName} is ready.
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Send your brief directly to{" "}
                  <strong>{STUDIO_IDENTITY.founder.name}</strong> via WhatsApp
                  or Email below:
                </p>
                <div className="pt-space-sm flex flex-wrap gap-space-sm">
                  <a
                    href={`https://wa.me/918980676705?text=${encodeURIComponent(
                      `Hello Mohammadali (Elite Designs),\nName: ${formData.name}\nService: ${formData.discipline}\nLocation: ${formData.location}\nBudget: ${formData.budget}\nBrief: ${formData.brief}`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-space-lg py-space-sm bg-primary text-on-primary font-label-lg text-label-lg uppercase tracking-widest"
                  >
                    Send on WhatsApp (+91 89806 76705) →
                  </a>
                  <a
                    href={`mailto:${STUDIO_IDENTITY.founder.email}?subject=${encodeURIComponent(
                      `Elite Designs Project Enquiry — ${formData.discipline}`
                    )}&body=${encodeURIComponent(
                      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.discipline}\nLocation: ${formData.location}\nBudget: ${formData.budget}\n\nProject Brief:\n${formData.brief}`
                    )}`}
                    className="px-space-md py-space-sm border border-primary font-label-mono text-label-mono uppercase"
                  >
                    Send via Email
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-space-md py-space-sm border border-outline-variant font-label-mono text-label-mono uppercase"
                  >
                    Edit Brief
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-space-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                  <div>
                    <label className="font-label-mono text-label-mono uppercase text-secondary block mb-1">
                      01 / Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Your full name"
                      className="w-full px-space-sm py-2.5 bg-surface border border-surface-container-highest focus:border-primary focus:outline-none font-body-sm"
                    />
                  </div>
                  <div>
                    <label className="font-label-mono text-label-mono uppercase text-secondary block mb-1">
                      02 / Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="you@example.com"
                      className="w-full px-space-sm py-2.5 bg-surface border border-surface-container-highest focus:border-primary focus:outline-none font-body-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                  <div>
                    <label className="font-label-mono text-label-mono uppercase text-secondary block mb-1">
                      03 / Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+91 98XXX XXXXX"
                      className="w-full px-space-sm py-2.5 bg-surface border border-surface-container-highest focus:border-primary focus:outline-none font-body-sm"
                    />
                  </div>
                  <div>
                    <label className="font-label-mono text-label-mono uppercase text-secondary block mb-1">
                      04 / Project Location / City *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) =>
                        setFormData({ ...formData, location: e.target.value })
                      }
                      placeholder="Ahmedabad / Gujarat / City"
                      className="w-full px-space-sm py-2.5 bg-surface border border-surface-container-highest focus:border-primary focus:outline-none font-body-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                  <div>
                    <label className="font-label-mono text-label-mono uppercase text-secondary block mb-1">
                      05 / Service Required
                    </label>
                    <select
                      value={formData.discipline}
                      onChange={(e) =>
                        setFormData({ ...formData, discipline: e.target.value })
                      }
                      className="w-full px-space-sm py-2.5 bg-surface border border-surface-container-highest focus:border-primary focus:outline-none font-body-sm"
                    >
                      <option>Architecture &amp; Spatial Design</option>
                      <option>Interior Architecture &amp; Design</option>
                      <option>Bespoke &amp; Modular Furniture Design</option>
                      <option>Product &amp; Industrial Design</option>
                      <option>Retail, Exhibition &amp; Experimental Design</option>
                      <option>Design Consultancy &amp; 3D Visualisation</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-label-mono text-label-mono uppercase text-secondary block mb-1">
                      06 / Estimated Budget Range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) =>
                        setFormData({ ...formData, budget: e.target.value })
                      }
                      className="w-full px-space-sm py-2.5 bg-surface border border-surface-container-highest focus:border-primary focus:outline-none font-body-sm"
                    >
                      <option>Under ₹5L (Single Room / Bespoke Furniture)</option>
                      <option>₹5L – ₹15L (Apartment / Retail Interior)</option>
                      <option>₹15L – ₹35L (Full Residence / Commercial)</option>
                      <option>₹35L+ (Comprehensive Turnkey / Architecture)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-label-mono text-label-mono uppercase text-secondary block mb-1">
                    07 / Project Brief, Area (sq.ft) &amp; Timeline *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.brief}
                    onChange={(e) =>
                      setFormData({ ...formData, brief: e.target.value })
                    }
                    placeholder="Tell us about your space, furniture, or product requirements, approximate area (sq.ft), and timeline..."
                    className="w-full px-space-sm py-2.5 bg-surface border border-surface-container-highest focus:border-primary focus:outline-none font-body-sm"
                  />
                </div>

                <div className="pt-space-sm flex flex-wrap items-center justify-between gap-space-md">
                  <span className="font-label-mono text-label-mono text-outline">
                    DIRECT CONSULTATION WITH MOHAMMADALI G. THARADARA
                  </span>
                  <button
                    type="submit"
                    className="px-space-xl py-3.5 bg-primary text-on-primary font-label-lg text-label-lg uppercase tracking-widest hover:bg-inverse-surface transition-colors"
                  >
                    Prepare Project Enquiry →
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
