/**
 * -------------------------------------------------------------------
 * Section: TrustStrip
 * -------------------------------------------------------------------
 * Engineering Credibility Layer (Refined)
 *
 * Purpose:
 * - Reinforce technical authority immediately after Hero
 * - Present core capabilities in a structured, professional manner
 *
 * Design Philosophy:
 * - Engineering-first layout
 * - Subtle blue accents (controlled, not dominant)
 * - Premium but disciplined visual system
 * -------------------------------------------------------------------
 */

import { motion } from "framer-motion";

// ========================
// ANIMATION CONFIG
// ========================

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

// ========================
// ENGINEERING DATA
// ========================

const trustItems = [
    {
        number: "01",
        title: "Structural Engineering",
        description:
            "Core structural systems designed for stability, safety, and efficient load performance across real-world conditions.",
    },
    {
        number: "02",
        title: "Architectural Design",
        description:
            "Functional and spatial design solutions aligned with usability, constructability, and structural intent.",
    },
    {
        number: "03",
        title: "BOQ & Cost Intelligence",
        description:
            "Accurate quantity surveying and cost planning aligned with project scope and construction realities.",
    },
    {
        number: "04",
        title: "Construction Consultancy",
        description:
            "Practical engineering guidance focused on execution, coordination, and site-level decision support.",
    },
];
// ========================
// COMPONENT
// ========================

export default function TrustStrip() {
  return (
      <section className="relative border-y border-white/10">
      {/* ================= BACKGROUND CONTROL ================= */}
      {/* Very subtle tone — avoid strong glow */}
      <div className="absolute inset-0 bg-blue-500/[0.012] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">

              {/* ========================
                 SECTION INTRO (REFINED)
                ======================== */}

              <div className="mb-14 max-w-2xl">

                  <p className="text-blue-400 uppercase tracking-[0.25em] text-xs mb-4">
                      Core Engineering Practice
                  </p>

                  <h2 className="text-2xl md:text-3xl font-medium leading-snug mb-4 text-white/90">
                      Structural, Architectural & Cost Systems Aligned for Construction
                  </h2>

                  <p className="text-gray-300 leading-relaxed">
                      Structural engineering, architectural design, and BOQ intelligence integrated into a single execution-focused workflow for accurate, buildable project delivery.
                  </p>

              </div>

        {/* ========================
            TRUST GRID
        ======================== */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="
                bg-white/[0.025]
                border border-white/10
                rounded-2xl
                p-8
                transition-all duration-300
                hover:border-blue-500/25
                hover:-translate-y-1
              "
            >
              {/* STEP NUMBER */}
              <div className="text-blue-400 text-3xl font-semibold mb-6">
                {item.number}
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-medium mb-4">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}

        </motion.div>

      </div>

    </section>
  );
}
``