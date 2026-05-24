/**
 * -------------------------------------------------------------------
 * Section: ServicesSection
 * -------------------------------------------------------------------
 * Engineering Capability System (Glass Blueprint Version)
 *
 * Purpose:
 * - Maintain structural hierarchy layout
 * - Add subtle visual representation per service
 * - Introduce glass + blueprint engineering aesthetic
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
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

// ========================
// COMPONENT
// ========================

export default function ServicesSection() {
  return (
    <section className="relative border-b border-white/10">

      {/* subtle engineering glow */}
      <div className="absolute inset-0 bg-blue-500/[0.01] pointer-events-none" />

      <motion.div
        className="max-w-7xl mx-auto px-6 py-28 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >

        {/* ================= HEADER ================= */}
        <motion.div variants={itemVariants} className="max-w-2xl mb-16">

          <p className="text-blue-400 uppercase tracking-[0.25em] text-xs mb-4">
            Core Engineering Capabilities
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
            Engineering-Led Services for
            <br />
            Real Construction Outcomes
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Structural systems, architectural intent, and BOQ intelligence integrated into a single execution-focused engineering framework.
          </p>

        </motion.div>

        {/* ================= GRID ================= */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* ================= STRUCTURAL (PILLAR) ================= */}
          <motion.div
            variants={itemVariants}
            className="
              relative overflow-hidden
              bg-white/[0.03]
              border border-white/10
              rounded-2xl
              p-10
              md:row-span-2
              transition-all duration-300
              hover:border-blue-500/25
            "
          >

            {/* IMAGE LAYER */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-[0.2] scale-110"
              style={{
                backgroundImage: "url('/images/projects/structurea.jpg')",
              }}
            />

            {/* BLUE + DARK OVERLAY */}
            <div className="absolute inset-0 bg-blue-500/[0.05]" />
            <div className="absolute inset-0 bg-black/60" />

            {/* CONTENT */}
            <div className="relative z-10">

              <p className="text-xs text-blue-400 mb-4 tracking-widest">
                01
              </p>

              <h3 className="text-xl font-semibold mb-4">
                Structural Engineering
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed">
                Design and analysis of safe, efficient, and code-compliant structural systems
                tailored for real construction conditions and load performance requirements.
              </p>

            </div>
          </motion.div>

          {/* ================= ARCHITECTURE ================= */}
          <motion.div
            variants={itemVariants}
            className="
              relative overflow-hidden
              bg-white/[0.02]
              border border-white/10
              rounded-2xl
              p-8
              transition-all duration-300
              hover:border-blue-500/25
            "
          >

            <div
              className="absolute inset-0 bg-cover bg-center opacity-[0.3] scale-110"
              style={{
                backgroundImage: "url('/images/projects/architectureb.jpg')",
              }}
            />

            <div className="absolute inset-0 bg-blue-500/[0.04]" />
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative z-10">

              <p className="text-xs text-blue-400 mb-4 tracking-widest">
                02
              </p>

              <h3 className="text-lg font-medium mb-4">
                Architectural Design & Visualization
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed">
                Functional design solutions that align spatial planning with structural intent,
                ensuring clarity from concept to construction documentation.
              </p>

            </div>
          </motion.div>

          {/* ================= BOQ ================= */}
          <motion.div
            variants={itemVariants}
            className="
              relative overflow-hidden
              bg-white/[0.02]
              border border-white/10
              rounded-2xl
              p-8
              transition-all duration-300
              hover:border-blue-500/25
            "
          >

            <div
              className="absolute inset-0 bg-cover bg-center opacity-[0.2] scale-110"
              style={{
                backgroundImage: "url('/images/projects/boqab.jpg')",
              }}
            />

            <div className="absolute inset-0 bg-blue-500/[0.04]" />
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative z-10">

              <p className="text-xs text-blue-400 mb-4 tracking-widest">
                03
              </p>

              <h3 className="text-lg font-medium mb-4">
                BOQ & Construction Intelligence
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed">
                Accurate quantity surveying, cost planning, and buildability analysis
                aligned with project scope and real construction conditions.
              </p>

            </div>
          </motion.div>

        </div>

      </motion.div>
    </section>
  );
}