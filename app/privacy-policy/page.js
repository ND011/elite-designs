import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { STUDIO_IDENTITY } from "@/data/studioData";

export const metadata = {
  title: "Privacy Policy & Legal Notice | Elite Designs × Growspace",
  description:
    "How Elite Designs Studio (Ahmedabad) collects, uses, and protects project enquiry data and portfolio intellectual property.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="flex items-center justify-between border-b border-mineral-100 pb-6">
        <Link
          href="/studio"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-concrete-600 hover:text-charcoal"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Studio</span>
        </Link>
        <span className="text-xs font-mono uppercase px-2.5 py-1 border border-mineral-100 bg-concrete-100">
          LEGAL & PRIVACY NOTICE
        </span>
      </div>

      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 text-accent-sage text-xs font-mono uppercase tracking-widest">
          <ShieldCheck className="w-4 h-4" />
          <span>DATA TRANSPARENCY & PORTFOLIO DISCLOSURE</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl text-charcoal">
          Privacy Policy & Portfolio Notice
        </h1>
        <p className="text-sm text-concrete-600">
          Last Updated: November 2026 • {STUDIO_IDENTITY.firmName} (
          {STUDIO_IDENTITY.founder.location})
        </p>
      </div>

      <div className="space-y-6 border border-mineral-100 bg-canvas p-6 sm:p-8 text-sm text-concrete-600 leading-relaxed">
        <section className="space-y-2">
          <h2 className="font-serif text-2xl text-charcoal">
            1. Project Enquiry Information Collection
          </h2>
          <p>
            When you submit a project or modular frame enquiry through our
            website, we collect only the information necessary to evaluate your
            project scope and communicate with you: your name, email address,
            optional telephone/WhatsApp number, project location, approximate
            area, estimated budget tier, and project brief.
          </p>
        </section>

        <section className="space-y-2 pt-4 border-t border-mineral-100">
          <h2 className="font-serif text-2xl text-charcoal">
            2. Local Storage & Room Configuration Data
          </h2>
          <p>
            The interactive <strong>Growspace Space Check</strong> and{" "}
            <strong>2D Modular Frame Builder</strong> store your room dimensions
            and furniture inventory locally in your browser&apos;s{" "}
            <code>localStorage</code> (`growspace_state_v1`) so your progress is
            preserved across pages. This spatial telemetry remains on your
            device unless you explicitly include it in a project enquiry.
          </p>
        </section>

        <section className="space-y-2 pt-4 border-t border-mineral-100">
          <h2 className="font-serif text-2xl text-charcoal">
            3. Portfolio & Intellectual Property Disclosure
          </h2>
          <p>
            In accordance with professional design ethics, all portfolio works
            on this website are clearly labeled by their status (
            <em>Completed Technical Package</em>, <em>Design Development</em>,{" "}
            <em>Working Prototype</em>, <em>Conceptual Architecture</em>, or{" "}
            <em>Design Research</em>) and state the creator&apos;s exact role. No
            confidential client or employer material restricted by an NDA is
            published without permission.
          </p>
        </section>

        <section className="space-y-2 pt-4 border-t border-mineral-100">
          <h2 className="font-serif text-2xl text-charcoal">
            4. Contact for Data Requests
          </h2>
          <p>
            To request deletion or modification of any enquiry details shared
            with our studio, please contact Principal Designer{" "}
            <strong className="text-charcoal">
              {STUDIO_IDENTITY.founder.name}
            </strong>{" "}
            at{" "}
            <a
              href={`mailto:${STUDIO_IDENTITY.founder.email}`}
              className="underline text-charcoal"
            >
              {STUDIO_IDENTITY.founder.email}
            </a>{" "}
            or{" "}
            <a
              href={`tel:${STUDIO_IDENTITY.founder.phone.replace(/\s+/g, "")}`}
              className="underline text-charcoal"
            >
              {STUDIO_IDENTITY.founder.phone}
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}

