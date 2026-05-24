/**
 * -------------------------------------------------------------------
 * Section: Process
 * -------------------------------------------------------------------
 * Engineering Workflow (Premium Version)
 *
 * Purpose:
 * - Clearly communicate how projects are executed
 * - Reinforce structured, disciplined engineering thinking
 *
 * Design System:
 * - Strong hierarchy (steps feel sequential)
 * - Subtle blue accent alignment
 * - Clean grid with controlled interaction
 * -------------------------------------------------------------------
 */

import { useState } from "react";
import { motion } from "framer-motion";

// ========================
// ANIMATION CONFIG
// ========================

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

// ========================
// ENGINEERING PROCESS DATA
// ========================

const steps = [
  {
    number: "01",
    title: "Project Consultation",
    description:
      "Understanding project scope, site conditions, and structural requirements before any design decisions are made."
  },
  {
    number: "02",
    title: "Engineering Analysis",
    description:
      "Structural evaluation, load considerations, and system feasibility based on real construction constraints."
  },
  {
    number: "03",
    title: "Design & Documentation",
    description:
      "Development of structural systems, detailed drawings, and BOQs with precision and coordination clarity."
  },
  {
    number: "04",
    title: "Construction Planning",
    description:
      "Ensuring buildability, sequencing, and cost alignment before execution begins."
  },
  {
    number: "05",
    title: "Execution Support",
    description:
      "Providing technical guidance during construction to maintain structural integrity and implementation accuracy."
  }
];

// ========================
// COMPONENT
// ========================

export default function Process() {
  const [hoveredStep, setHoveredStep] = useState(null);

  return (
    <section className="relative border-b border-white/10">

      {/* Subtle system tint (same as other sections) */}
      <div className="absolute inset-0 bg-blue-500/[0.01] pointer-events-none" />

      <motion.div
        className="max-w-7xl mx-auto px-6 py-28 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >

        {/* ======================================================
            HEADER BLOCK
        ====================================================== */}
        <motion.div variants={itemVariants} className="max-w-2xl mb-20">

          <p className="text-blue-400 uppercase tracking-[0.25em] text-xs mb-4">
            Workflow
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
            A Structured Approach to
            <br />
            Engineering & Execution
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Every project follows a disciplined engineering process focused on
            clarity, technical accuracy, and real-world construction outcomes.
          </p>

        </motion.div>

        {/* ======================================================
            PROCESS GRID (NUMBERED SYSTEM)
        ====================================================== */}
        <div className="relative pl-12 lg:pl-0 space-y-8 lg:space-y-0 lg:grid lg:grid-cols-5 lg:gap-6">
          {/* Mobile Vertical Connected Timeline Line */}
          <div className="absolute left-[24px] top-6 bottom-6 w-[1px] bg-gradient-to-b from-blue-500/10 via-blue-500/35 to-blue-500/10 lg:hidden pointer-events-none" />

          {/* Desktop Horizontal Connector Line */}
          <div className="absolute top-[3.75rem] left-[5%] right-[5%] h-[1px] bg-gradient-to-r from-blue-500/0 via-blue-500/15 to-blue-500/0 hidden lg:block pointer-events-none" />

          {steps.map((step, index) => {
            const isHovered = hoveredStep === index;
            const isAnyHovered = hoveredStep !== null;
            const isPast = isAnyHovered && index < hoveredStep;
            const isFuture = isAnyHovered && index > hoveredStep;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
                className={`
                  relative rounded-2xl border p-6 transition-all duration-500
                  ${isHovered 
                    ? "border-blue-500/40 bg-blue-500/[0.015] shadow-[0_0_30px_rgba(59,130,246,0.04)] scale-[1.02] lg:scale-100 lg:-translate-y-1" 
                    : isPast
                      ? "border-blue-500/20 bg-blue-500/[0.005] opacity-80"
                      : isFuture
                        ? "border-white/5 bg-white/[0.002] opacity-40"
                        : "border-white/10 bg-white/[0.02]"
                  }
                `}
              >
                {/* Step Number Node */}
                <div className="absolute -left-12 w-12 top-6 flex items-center justify-center z-20 lg:static lg:w-auto lg:h-auto lg:block lg:mb-6">
                  <div className={`
                    w-9 h-9 rounded-full border flex items-center justify-center text-xs font-mono font-medium transition-all duration-500 bg-[#0f0f0f]
                    lg:w-auto lg:h-auto lg:rounded-none lg:border-none lg:bg-transparent lg:text-2xl lg:text-blue-400
                    ${isHovered 
                      ? "border-blue-500 text-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.2)] lg:shadow-none" 
                      : isPast
                        ? "border-blue-500/30 text-blue-500/60 lg:border-none"
                        : "border-white/10 text-gray-500 lg:border-none"
                    }
                  `}>
                    {step.number}
                  </div>
                </div>

                {/* TITLE */}
                <h3 className="text-base lg:text-lg font-medium mb-4 leading-snug text-white">
                  {step.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-xs lg:text-sm text-gray-300 leading-relaxed">
                  {step.description}
                </p>

                {/* Desktop Connecting Arrow */}
                {index < 4 && (
                  <div className="hidden lg:flex absolute top-10 -right-[16px] w-8 h-8 items-center justify-center z-30 pointer-events-none">
                    <span className={`text-lg font-mono transition-all duration-500 ${isHovered ? "text-blue-400 translate-x-0.5" : "text-blue-500/30"}`}>→</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </motion.div>
    </section>
  );
}