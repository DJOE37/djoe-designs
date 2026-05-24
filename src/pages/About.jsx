/**
 * -------------------------------------------------------------------
 * Page: About
 * -------------------------------------------------------------------
 * The Practice Profile & Engineering Methodology
 *
 * Design System:
 * - Technical grid backgrounds matching Services.jsx
 * - Clean visual spacing rhythm
 * - Soft layered panels with subtle blue/gray glow states
 * -------------------------------------------------------------------
 */

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "../components/animations/PageTransition";

// ========================
// ANIMATION VARIANTS
// ========================
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

// ========================
// PRACTICE VALUES
// ========================
const principles = [
  {
    title: "Structural Integrity",
    desc: "We prioritize mechanical stability and mathematically verified load path solutions to guarantee security.",
  },
  {
    title: "Economic Intelligence",
    desc: "By merging BOQ intelligence directly into early designs, we eliminate material waste and price variations.",
  },
  {
    title: "Symmetric Design",
    desc: "We coordinate architectural aesthetics and structural frames in parallel to maintain spatial intent.",
  },
];

// ========================
// METHODOLOGY STEPS
// ========================
const steps = [
  {
    num: "01",
    phase: "Feasibility Study",
    desc: "Analyzing site topography, soil conditions, and initial spatial concepts to set boundaries.",
  },
  {
    num: "02",
    phase: "Structural Geometry",
    desc: "Creating structural models and verifying load distributions, member sizing, and material limits.",
  },
  {
    num: "03",
    phase: "Cost & BOQ Audit",
    desc: "Drafting quantitative schedules to control financial exposure and material efficiency.",
  },
  {
    num: "04",
    phase: "Execution Handover",
    desc: "Generating structural details, detailing reinforcement drawings, and delivering construction-ready guidelines.",
  },
];

export default function About() {
  return (
    <PageTransition>
      <div className="relative overflow-hidden border-b border-white/10 bg-[#0f0f0f]">
        
        {/* GRID BACKGROUND */}
        <div className="
          absolute inset-0 opacity-[0.035]
          bg-[linear-gradient(to_right,white_1px,transparent_1px),
          linear-gradient(to_bottom,white_1px,transparent_1px)]
          bg-[size:70px_70px]
          pointer-events-none
        " />

        {/* BLUE TINT */}
        <div className="absolute inset-0 bg-blue-500/[0.02] pointer-events-none" />

        {/* DARK BASE */}
        <div className="absolute inset-0 bg-[#0f0f0f]/95 pointer-events-none" />

        {/* ================= CONTENT ================= */}
        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-6 py-28"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          {/* ======================================================
              HERO HEADER
          ====================================================== */}
          <motion.div variants={itemVariants} className="max-w-3xl mb-24">
            <p className="text-blue-400 uppercase tracking-[0.25em] text-xs mb-4">
              Our Practice
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-8">
              Pioneering Buildable Engineering Systems
            </h1>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              We design structures with mathematical rigour, architectural sensitivity, and structural intelligence. 
              Our practice is founded on the conviction that structural calculations and cost control should not be late additions, 
              but the core foundations of every creative project.
            </p>
          </motion.div>

          {/* ======================================================
              PRINCIPLES / CORE ATTRIBUTES
          ====================================================== */}
          <motion.div 
            variants={itemVariants} 
            className="grid md:grid-cols-3 gap-8 mb-32"
          >
            {principles.map((pr, i) => (
              <div 
                key={i} 
                className="
                  group
                  bg-white/[0.015] 
                  border border-white/10 
                  rounded-2xl p-8 
                  hover:border-blue-500/25 
                  transition-all duration-300
                  hover:-translate-y-0.5
                "
              >
                <div className="w-8 h-8 rounded-lg bg-blue-500/[0.08] text-blue-400 flex items-center justify-center font-mono text-xs mb-6 group-hover:bg-blue-500 group-hover:text-white transition duration-300">
                  {i + 1}
                </div>
                <h3 className="text-lg font-medium text-white mb-4">{pr.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{pr.desc}</p>
              </div>
            ))}
          </motion.div>

          {/* ======================================================
              METHODOLOGY / SYSTEM FLOW
          ====================================================== */}
          <div className="grid lg:grid-cols-3 gap-16 mb-28">

            {/* Left Description Column */}
            <motion.div variants={itemVariants} className="lg:col-span-1 space-y-6">
              <div>
                <p className="text-blue-400 uppercase tracking-[0.2em] text-xs mb-4">
                  Methodology
                </p>
                <h2 className="text-2xl md:text-3xl font-semibold leading-tight text-white mb-6">
                  Structured Execution Pipeline
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  We translate concept drawings into physical stability through an audit-driven sequence that tracks load constraints, 
                  material volumes, and onsite execution factors.
                </p>
              </div>
            </motion.div>

            {/* Right Steps Grid Column */}
            <motion.div 
              variants={itemVariants} 
              className="lg:col-span-2 grid md:grid-cols-2 gap-6"
            >
              {steps.map((st, i) => (
                <div 
                  key={i} 
                  className="
                    bg-white/[0.01] 
                    border border-white/5 
                    rounded-2xl p-7
                    hover:border-white/10 
                    transition duration-300
                  "
                >
                  <p className="text-xs font-mono text-blue-400 tracking-wider mb-2">
                    Phase {st.num}
                  </p>
                  <h4 className="text-base font-medium text-white mb-3">{st.phase}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{st.desc}</p>
                </div>
              ))}
            </motion.div>

          </div>

          {/* ======================================================
              CTA SECTION
          ====================================================== */}
          <motion.div 
            variants={itemVariants}
            className="text-center border-t border-white/10 pt-20"
          >
            <h3 className="text-2xl font-semibold mb-6">
              Let's Coordinate Your Next Project
            </h3>
            <p className="text-gray-400 mb-10 max-w-xl mx-auto text-sm leading-relaxed">
              From reinforced concrete residential frames to comprehensive commercial bill analysis, 
              we ensure your project remains buildable and cost-controlled.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/contact"
                className="
                  bg-white text-black 
                  px-8 py-3 text-sm font-medium 
                  hover:bg-blue-500 hover:text-white
                  transition-all duration-300
                  hover:-translate-y-0.5
                "
              >
                Request Consultation
              </Link>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </PageTransition>
  );
}