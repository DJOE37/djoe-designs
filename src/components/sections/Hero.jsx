/**
 * -------------------------------------------------------------------
 * Section: Hero
 * -------------------------------------------------------------------
 */

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useMemo } from "react";

// ========================
// IMAGE POOL
// ========================
const heroImages = [
  "/images/projects/raft.jpg",
  "/images/projects/work5.jpg",
  "/images/projects/work4.jpg",
  "/images/projects/work.jpg",
  "/images/projects/warehouse.jpg",
];

// ========================
// SHUFFLE
// ========================
const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

// ========================
// ANIMATION
// ========================
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9 },
  },
};

export default function Hero() {
  const shuffledImages = useMemo(() => shuffleArray(heroImages), []);

  return (
    <section className="relative w-full border-b border-white/10 overflow-hidden bg-[#0f0f0f]">
      
      {/* ======================================================
          BACKGROUND SYSTEM
      ====================================================== */}

      {/* GRID LAYER */}
      <div className="
        absolute inset-0 opacity-[0.04]
        bg-[linear-gradient(to_right,white_1px,transparent_1px),
        linear-gradient(to_bottom,white_1px,transparent_1px)]
        bg-[size:60px_60px]
      " />

      {/* BLUE TINT */}
      <div className="absolute inset-0 bg-blue-500/[0.06]" />

      {/* DARK BASE */}
      <div className="absolute inset-0 bg-[#0f0f0f]/70" />

      {/* ======================================================
          SEAMLESS MARQUEE SYSTEM (FIXED DUAL-LAYER PARALLAX)
      ====================================================== */}
      <div className="absolute inset-x-0 top-0 h-64 sm:h-80 md:h-96 overflow-hidden pause-on-hover pointer-events-auto">
        
        {/* DEPTH LAYER (SUBTLE PARALLAX - SLOW) */}
        <div className="absolute inset-x-0 top-0 h-64 sm:h-80 md:h-96 flex">
          {/* Track 1 */}
          <div className="flex gap-8 shrink-0 animate-scroll-slow opacity-[0.08] pr-8">
            {shuffledImages.map((img, i) => (
              <img
                key={`t1-slow-${i}`}
                src={img}
                alt=""
                className="
                  flex-shrink-0
                  h-64 sm:h-80 md:h-96
                  w-72 sm:w-96 md:w-[420px]
                  object-cover
                  rounded-xl
                  blur-[1px]
                  brightness-[0.85]
                "
              />
            ))}
          </div>
          {/* Track 2 (Mirror) */}
          <div className="flex gap-8 shrink-0 animate-scroll-slow opacity-[0.08] pr-8" aria-hidden="true">
            {shuffledImages.map((img, i) => (
              <img
                key={`t2-slow-${i}`}
                src={img}
                alt=""
                className="
                  flex-shrink-0
                  h-64 sm:h-80 md:h-96
                  w-72 sm:w-96 md:w-[420px]
                  object-cover
                  rounded-xl
                  blur-[1px]
                  brightness-[0.85]
                "
              />
            ))}
          </div>
        </div>

        {/* PRIMARY LAYER (FAST) */}
        <div className="absolute inset-x-0 top-0 h-56 sm:h-72 md:h-80 flex">
          {/* Track 1 */}
          <div className="flex gap-8 shrink-0 animate-scroll opacity-[0.18] pr-8">
            {shuffledImages.map((img, i) => (
              <img
                key={`t1-fast-${i}`}
                src={img}
                alt=""
                className="
                  flex-shrink-0
                  h-56 sm:h-72 md:h-80
                  w-64 sm:w-80 md:w-[350px]
                  object-cover
                  rounded-xl
                  brightness-[1.05]
                  contrast-[1.05]
                "
              />
            ))}
          </div>
          {/* Track 2 (Mirror) */}
          <div className="flex gap-8 shrink-0 animate-scroll opacity-[0.18] pr-8" aria-hidden="true">
            {shuffledImages.map((img, i) => (
              <img
                key={`t2-fast-${i}`}
                src={img}
                alt=""
                className="
                  flex-shrink-0
                  h-56 sm:h-72 md:h-80
                  w-64 sm:w-80 md:w-[350px]
                  object-cover
                  rounded-xl
                  brightness-[1.05]
                  contrast-[1.05]
                "
              />
            ))}
          </div>
        </div>

      </div>

      {/* ======================================================
          MAIN CONTENT
      ====================================================== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-end">

        {/* LEFT */}
        <motion.div
          className="max-w-xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          <motion.p
            variants={itemVariants}
            className="text-sm text-blue-400 tracking-[0.25em] uppercase mb-4"
          >
            Built Environment Engineering
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-semibold leading-tight mb-6"
          >
            Structuring Ideas,
            <br />
            Designing Spaces,
            <br />
            Delivering Construction Reality
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-base leading-relaxed mb-10 max-w-xl"
          >
            Integrated structural engineering, architectural intent, and BOQ intelligence
            focused on one outcome — buildable, cost-aware, and execution-ready projects
            that translate cleanly from concept to site.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/projects"
              className="
                bg-white text-black
                px-6 py-3 text-sm font-medium
                hover:bg-blue-500
                hover:text-white
                transition-all duration-300
                hover:-translate-y-0.5
              "
            >
              View Projects
            </Link>

            <Link
              to="/contact"
              className="
                border border-white/20
                px-5 py-2 text-sm
                text-gray-300
                hover:border-blue-500
                hover:text-blue-400
                transition-all duration-200
                hover:-translate-y-0.5
              "
            >
              Request Consultation
            </Link>
          </motion.div>

        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >

          <div className="
            bg-white/[0.025]
            border border-white/10
            rounded-2xl
            p-10
            hover:border-blue-500/25
            transition-all duration-300
          ">

            <div className="space-y-5">

              <p className="text-xs text-gray-500 uppercase tracking-wide">
                Design Philosophy
              </p>

              <h3 className="text-lg font-medium leading-relaxed">
                Structural clarity • Architectural intent • Construction efficiency
              </h3>

              <div className="h-px bg-white/10" />

              <p className="text-sm text-gray-400 leading-relaxed">
                A unified approach where structural systems define stability,
                architectural decisions shape usability, and cost intelligence
                ensures every design remains buildable in real-world conditions.
              </p>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}