/**
 * -------------------------------------------------------------------
 * Section: Process
 * -------------------------------------------------------------------
 * Engineering Workflow (Premium Version)
 *
 * Purpose:
 * - Clearly communicate how projects are executed
 * - Provide expandable details for professional depth
 * -------------------------------------------------------------------
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../Reveal";

// ========================
// ENGINEERING PROCESS DATA
// ========================

const steps = [
  {
    number: "01",
    title: "Project Consultation",
    description: "We understand the project goals, site conditions, and possible risks.",
    details: "Reviewing geotechnical borehole logs, survey mapping, and client design requirements to align engineering assumptions from day one."
  },
  {
    number: "02",
    title: "Engineering Analysis",
    description: "We test structural safety and identify potential construction issues early.",
    details: "Performing finite element grid modeling and mapping wind and gravity load paths to establish slab, column, and foundation sizing parameters."
  },
  {
    number: "03",
    title: "Design & Documentation",
    description: "We prepare coordinated drawings and cost plans for construction.",
    details: "Developing full structural calculation booklets, bar bending schedules (BBS), and standardized material takeoffs to prevent construction variations."
  },
  {
    number: "04",
    title: "Construction Planning",
    description: "We check buildability before work begins on site.",
    details: "Auditing steel detailing clashes and formwork constructability issues to establish realistic timelines and trade procurement schedules."
  },
  {
    number: "05",
    title: "Execution Support",
    description: "We help ensure construction follows the approved design correctly.",
    details: "Conducting pre-pour rebar spacing and concrete mix slump audits on site, issuing compliance certificates, and certifying contractor valuations."
  }
];

// ========================
// COMPONENT
// ========================

export default function Process() {
  const [hoveredStep, setHoveredStep] = useState(null);
  const [expandedSteps, setExpandedSteps] = useState({});

  const toggleStep = (index) => {
    setExpandedSteps((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section className="relative border-b border-white/10 bg-[#0f0f0f]">

      {/* Subtle system tint (same as other sections) */}
      <div className="absolute inset-0 bg-blue-500/[0.01] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-28 relative z-10 text-left">

        {/* ======================================================
            HEADER BLOCK
        ====================================================== */}
        <Reveal className="max-w-2xl mb-20">
          <p className="text-blue-400 uppercase tracking-[0.25em] text-xs mb-4">
            Workflow
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
            A Structured Approach to
            <br />
            Engineering & Execution
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm">
            Every project follows a disciplined engineering process focused on
            clarity, technical accuracy, and real-world construction outcomes.
          </p>
        </Reveal>

        {/* ======================================================
            PROCESS GRID (NUMBERED SYSTEM)
        ====================================================== */}
        <Reveal className="relative pl-12 lg:pl-0 space-y-8 lg:space-y-0 lg:grid lg:grid-cols-5 lg:gap-6">
          {/* Mobile Vertical Connected Timeline Line */}
          <div className="absolute left-[24px] top-6 bottom-6 w-[1px] bg-gradient-to-b from-blue-500/10 via-blue-500/35 to-blue-500/10 lg:hidden pointer-events-none" />

          {/* Desktop Horizontal Connector Line */}
          <div className="absolute top-[3.75rem] left-[5%] right-[5%] h-[1px] bg-gradient-to-r from-blue-500/0 via-blue-500/15 to-blue-500/0 hidden lg:block pointer-events-none" />

          {steps.map((step, index) => {
            const isHovered = hoveredStep === index;
            const isAnyHovered = hoveredStep !== null;
            const isPast = isAnyHovered && index < hoveredStep;
            const isFuture = isAnyHovered && index > hoveredStep;
            const isExpanded = !!expandedSteps[index];

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
                onClick={() => toggleStep(index)}
                className={`
                  relative rounded-2xl border p-6 transition-all duration-500 cursor-pointer select-none
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

                {/* TITLE & TOGGLE */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-base font-semibold leading-snug text-white pr-2">
                    {step.title}
                  </h3>
                  <span className="text-[9px] font-mono text-blue-400 hover:text-blue-300 transition-colors uppercase shrink-0 pt-1">
                    {isExpanded ? "Collapse −" : "Details +"}
                  </span>
                </div>

                {/* DESCRIPTION */}
                <p className="text-xs text-gray-300 leading-relaxed">
                  {step.description}
                </p>

                {/* EXPANDABLE DETAILS */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden border-t border-white/5 pt-3"
                    >
                      <p className="text-xs text-blue-400/90 leading-relaxed font-sans">
                        {step.details}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Desktop Connecting Arrow */}
                {index < 4 && (
                  <div className="hidden lg:flex absolute top-10 -right-[16px] w-8 h-8 items-center justify-center z-30 pointer-events-none">
                    <span className={`text-lg font-mono transition-all duration-500 ${isHovered ? "text-blue-400 translate-x-0.5" : "text-blue-500/30"}`}>→</span>
                  </div>
                )}
              </div>
            );
          })}
        </Reveal>

      </div>
    </section>
  );
}