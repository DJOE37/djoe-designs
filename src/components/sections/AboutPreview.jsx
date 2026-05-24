/**
 * -------------------------------------------------------------------
 * Section: AboutPreview
 * -------------------------------------------------------------------
 */

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// ========================
// ANIMATION CONFIG
// ========================

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
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

export default function AboutPreview() {
  return (
    <section className="relative overflow-hidden">

      {/* SYSTEM TINT */}
      <div className="absolute inset-0 bg-blue-500/[0.01] pointer-events-none" />

      {/* MAIN GRID */}
      <motion.div
        className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-stretch relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >

        {/* ======================================================
            LEFT SIDE (TEXT + CTA LOCKED BOTTOM)
        ====================================================== */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col h-full justify-between"
        >

          {/* TOP CONTENT */}
          <div>
            <p className="text-blue-400 uppercase tracking-[0.25em] text-xs mb-4">
              About Practice
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
              Engineering-Led Thinking.
              <br />
              Execution-Focused Delivery.
            </h2>

            <p className="text-gray-400 leading-relaxed mb-6">
              WE operate across structural engineering, architectural coordination,
              and BOQ intelligence — aligning design intent with real construction execution.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Every output is developed with clarity, constructability, and cost awareness,
              ensuring solutions remain valid from concept through site delivery.
            </p>
          </div>

          {/* CTA (BOTTOM ALIGNED) */}
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
            Learn More About Our Practice →
          </Link>

        </motion.div>

        {/* ======================================================
            RIGHT SIDE (STACKED CARDS)
        ====================================================== */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col justify-between h-full"
        >

          <div className="space-y-6">

            <div className="
              bg-white/[0.02]
              border border-white/10
              rounded-2xl p-6
              hover:border-blue-500/30
              transition-all duration-300
            ">
              <h3 className="text-lg font-medium mb-3 text-white/90">
                Structural Clarity
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Engineering decisions are driven by calculation, stability,
                and real-world load behavior.
              </p>
            </div>

            <div className="
              bg-white/[0.02]
              border border-white/10
              rounded-2xl p-6
              hover:border-blue-500/30
              transition-all duration-300
            ">
              <h3 className="text-lg font-medium mb-3 text-white/90">
                Cost Intelligence
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Design is continuously aligned with material efficiency and project budget realities.
              </p>
            </div>

            <div className="
              bg-white/[0.02]
              border border-white/10
              rounded-2xl p-6
              hover:border-blue-500/30
              transition-all duration-300
            ">
              <h3 className="text-lg font-medium mb-3 text-white/90">
                Buildability First
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Every design is validated against execution constraints before finalization.
              </p>
            </div>

          </div>

        </motion.div>

      </motion.div>
    </section>
  );
}