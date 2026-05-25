/**
 * -------------------------------------------------------------------
 * Section: AboutPreview
 * -------------------------------------------------------------------
 */

import { Link } from "react-router-dom";
import Reveal from "../Reveal";

// ========================
// COMPONENT
// ========================

export default function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a]">

      {/* SYSTEM TINT */}
      <div className="absolute inset-0 bg-blue-500/[0.01] pointer-events-none" />

      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-stretch relative z-10">

        {/* ======================================================
            LEFT SIDE (TEXT + CTA LOCKED BOTTOM)
        ====================================================== */}
        <Reveal className="flex flex-col h-full justify-between">

          {/* TOP CONTENT */}
          <div>
            <p className="text-blue-400 uppercase tracking-[0.25em] text-xs mb-4">
              About Practice
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
              We Design with Construction Reality in Mind
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Every project is planned to reduce confusion on site, improve coordination, and make construction easier to execute.
            </p>
          </div>

          {/* CTA (BOTTOM ALIGNED) */}
          <div>
            <Link
              to="/about"
              className="
                inline-block
                border border-white/20
                px-6 py-3 text-sm mt-10
                text-white/80
                hover:text-blue-400
                hover:border-blue-500/40
                transition-all duration-200
                hover:-translate-y-0.5
              "
            >
              Learn More →
            </Link>
          </div>

        </Reveal>

        {/* ======================================================
            RIGHT SIDE (STACKED CARDS)
        ====================================================== */}
        <Reveal className="flex flex-col justify-between h-full">

          <div className="space-y-6">
            {[
              {
                title: "Structural Clarity",
                desc: "Clear load paths designed to ensure structural safety and prevent settlement issues."
              },
              {
                title: "Cost Control",
                desc: "Optimized reinforcement parameters to prevent waste and keep the budget predictable."
              },
              {
                title: "Buildability",
                desc: "Coordinated details designed to align with actual site tools and ease contractor execution."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="
                  bg-white/[0.02]
                  border border-white/10
                  rounded-2xl p-6
                  hover:border-blue-500/30
                  transition-all duration-300
                  text-left
                "
              >
                <h3 className="text-base font-semibold text-white/90 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </Reveal>

      </div>
    </section>
  );
}