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
import { motion } from "framer-motion";
import { insights } from "../../data/insights";

// ========================
// ANIMATION CONFIG
// ========================
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

// ========================
// COMPONENT
// ========================

export default function Insights() {
  return (
    <section className="relative border-b border-white/10">

      {/* Subtle Blue System Tint */}
      <div className="absolute inset-0 bg-blue-500/[0.01] pointer-events-none" />

      <motion.div
        className="max-w-7xl mx-auto px-6 py-28 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >

        {/* ======================================================
            HEADER
        ====================================================== */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-6"
        >

          {/* TEXT */}
          <div className="max-w-xl">

            <p className="text-blue-400 uppercase tracking-[0.25em] text-xs mb-4">
              Insights
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
              Engineering Thinking Applied to
              <br />
              Real Construction Challenges
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Technical observations and structured insights drawn from
              real-world construction analysis and engineering experience.
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

        </motion.div>

        {/* ======================================================
            GRID
        ====================================================== */}
        <div className="grid md:grid-cols-3 gap-8">

          {insights.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
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
                <h3 className="text-lg font-medium mb-6 leading-snug group-hover:text-white transition">
                  {item.title}
                </h3>

                {/* DIVIDER */}
                <div className="h-px bg-white/10 mb-6" />

                {/* LINK */}
                <span className="text-sm text-gray-400 group-hover:text-white transition">
                  Read Insight →
                </span>

              </Link>
            </motion.div>
          ))}

        </div>

      </motion.div>
    </section>
  );
}