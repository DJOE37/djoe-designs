/**
 * -------------------------------------------------------------------
 * Section: Insights
 * -------------------------------------------------------------------
 * Engineering Insights (System-Aligned Version)
 *
 * Purpose:
 * - Demonstrate engineering thinking and expertise
 * - Present insights as analytical knowledge (not blog posts)
 *
 * Design System:
 * - Blue accent consistency
 * - Soft card layering
 * - Structured hierarchy
 * -------------------------------------------------------------------
 */

import { Link } from "react-router-dom";
import { insights } from "../../data/insights";
import Reveal from "../Reveal";

// ========================
// COMPONENT
// ========================

export default function Insights() {
  return (
    <section className="relative border-b border-white/10">

      {/* Subtle Blue System Tint */}
      <div className="absolute inset-0 bg-blue-500/[0.01] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-28 relative z-10">

        {/* ======================================================
            HEADER
        ====================================================== */}
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-6">

          {/* TEXT */}
          <div className="max-w-xl">

            <p className="text-blue-400 uppercase tracking-[0.25em] text-xs mb-4">
              Insights
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
              Lessons from Real Construction Projects
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Practical observations from structural design, budgeting, and construction experience.
            </p>

          </div>

          {/* CTA */}
          <Link
            to="/insights"
            className="
              border border-white/20 px-5 py-2 text-sm
              hover:border-blue-500/40
              transition-all duration-200
              hover:-translate-y-0.5
              w-fit
            "
          >
            View All Insights
          </Link>

        </Reveal>

        {/* ======================================================
            GRID
        ====================================================== */}
        <Reveal className="grid md:grid-cols-3 gap-8">

          {insights.map((item) => (
            <div key={item.id}>
              <Link
                to={`/insights/${item.id}`}
                className="
                  group block
                  bg-white/[0.02]
                  border border-white/10
                  rounded-2xl
                  p-6
                  transition-all duration-300
                  hover:border-blue-500/25
                  hover:-translate-y-1
                "
              >

                {/* CATEGORY */}
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-3">
                  {item.category}
                </p>

                {/* TITLE */}
                <h3 className="text-lg font-medium mb-4 leading-snug group-hover:text-white transition">
                  {item.title}
                </h3>

                {/* ONE-LINE SUMMARY */}
                <p className="text-xs text-gray-400 leading-relaxed mb-6 line-clamp-1">
                  {item.summary}
                </p>

                {/* DIVIDER */}
                <div className="h-px bg-white/10 mb-6" />

                {/* LINK */}
                <span className="text-sm text-gray-300 group-hover:text-white transition">
                  Read Insight →
                </span>

              </Link>
            </div>
          ))}

        </Reveal>

      </div>
    </section>
  );
}