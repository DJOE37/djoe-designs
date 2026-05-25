/**
 * -------------------------------------------------------------------
 * Section: Hero
 * -------------------------------------------------------------------
 */

import { Link } from "react-router-dom";
import { useMemo } from "react";
import Reveal from "../Reveal";

// ========================
// IMAGE POOL
// ========================
const heroImages = [
  "/images/projects/raft.webp",
  "/images/projects/work5.webp",
  "/images/projects/work4.webp",
  "/images/projects/work.webp",
  "/images/projects/warehouse.webp",
];

// ========================
// SHUFFLE
// ========================
const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
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
          <div className="flex gap-8 shrink-0 animate-scroll-slow opacity-[0.25] pr-8">
            {shuffledImages.map((img, i) => (
              <img
                key={`t1-slow-${i}`}
                src={img}
                alt=""
                loading="eager"
                decoding="async"
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
          <div className="flex gap-8 shrink-0 animate-scroll-slow opacity-[0.25] pr-8" aria-hidden="true">
            {shuffledImages.map((img, i) => (
              <img
                key={`t2-slow-${i}`}
                src={img}
                alt=""
                loading="eager"
                decoding="async"
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
          <div className="flex gap-8 shrink-0 animate-scroll opacity-[0.45] pr-8">
            {shuffledImages.map((img, i) => (
              <img
                key={`t1-fast-${i}`}
                src={img}
                alt=""
                loading="eager"
                decoding="async"
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
          <div className="flex gap-8 shrink-0 animate-scroll opacity-[0.45] pr-8" aria-hidden="true">
            {shuffledImages.map((img, i) => (
              <img
                key={`t2-fast-${i}`}
                src={img}
                alt=""
                loading="eager"
                decoding="async"
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
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-72 pb-24 sm:pt-[22rem] md:pt-[26rem] grid md:grid-cols-2 gap-16 items-end">

        {/* LEFT */}
        <Reveal className="max-w-xl text-left">

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Engineering That Works on Site
          </h1>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
            We design buildings that are easier to build, safer to execute, and better coordinated before construction even starts.
          </p>

          <div className="grid grid-cols-2 gap-4 items-center w-full sm:flex sm:w-auto">
            <Link
              to="/projects"
              className="
                w-full text-center
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
                w-full text-center
                border border-white/20
                px-5 py-3 text-sm
                text-gray-300
                hover:border-blue-500
                hover:text-blue-400
                transition-all duration-200
                hover:-translate-y-0.5
              "
            >
              Request Consultation
            </Link>
          </div>

          <p className="text-[10px] font-mono tracking-wider text-gray-500 mt-6">
            Fewer site mistakes • Better cost control • Smoother construction
          </p>

        </Reveal>

        {/* RIGHT */}
        <Reveal className="relative text-left">

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
                Why Projects Fail
              </p>

              <h3 className="text-lg font-medium leading-relaxed text-white">
                Most construction problems start long before site work begins.
              </h3>

              <div className="h-px bg-white/10" />

              <p className="text-sm text-gray-300 leading-relaxed">
                When structure, architecture, and cost planning are handled separately, projects become harder to build, more expensive to manage, and easier to get wrong on site.
              </p>

              <div className="h-px bg-white/10" />

              <p className="text-xs text-blue-400 font-mono leading-relaxed">
                We coordinate everything early to reduce delays, redesigns, and costly mistakes.
              </p>

            </div>

          </div>

        </Reveal>

      </div>
    </section>
  );
}