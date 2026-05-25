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

import { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";
import Reveal from "../Reveal";

// ========================
// FADING BACKGROUND COMPONENT
// ========================

function FadingBackground({ images, activeIndex, baseOpacity }) {
  if (!images || images.length === 0) return null;
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
      {images.map((img, idx) => {
        const isActive = idx === (activeIndex % images.length);
        return (
          <div
            key={img}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out scale-110"
            style={{
              backgroundImage: `url('${img}')`,
              opacity: isActive ? baseOpacity : 0,
            }}
          />
        );
      })}
    </div>
  );
}

// ========================
// COMPONENT
// ========================

export default function ServicesSection() {
  const [projectIndex, setProjectIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  // Select a showcase project that rotates slowly
  const showcaseProject = useMemo(() => {
    if (!projects || projects.length === 0) return null;
    return projects[projectIndex % projects.length];
  }, [projectIndex]);

  // Slow Timer: Rotate featured showcase project every 60 seconds (1 minute)
  useEffect(() => {
    const interval = setInterval(() => {
      setProjectIndex((prev) => prev + 1);
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  // Fast Timer: Cycle background images of the active project every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Reset image index to 0 when project changes to start clean
  useEffect(() => {
    setImageIndex(0);
  }, [projectIndex]);

  return (
    <section className="relative border-b border-white/10">

      {/* subtle engineering glow */}
      <div className="absolute inset-0 bg-blue-500/[0.01] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-28 relative z-10">

        {/* ================= HEADER ================= */}
        <Reveal className="max-w-2xl mb-16">

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

        </Reveal>

        {/* ================= GRID ================= */}
        <Reveal className="grid md:grid-cols-2 gap-8">

          {/* ================= STRUCTURAL ================= */}
          <Link
            to={showcaseProject ? `/projects/${showcaseProject.id}?view=structural` : "/projects"}
            className="
              relative overflow-hidden
              bg-white/[0.02]
              border border-white/10
              rounded-2xl
              p-8
              transition-all duration-300
              hover:border-blue-500/25
              group block
            "
          >
            {/* IMAGE LAYER */}
            {showcaseProject && (
              <FadingBackground 
                images={showcaseProject.structuralImages} 
                activeIndex={imageIndex} 
                baseOpacity={0.55} 
              />
            )}

            {/* BLUE + DARK OVERLAY */}
            <div className="absolute inset-0 bg-blue-500/[0.05]" />
            <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/20" />

            {/* CONTENT */}
            <div className="relative z-10">
              <p className="text-xs text-blue-400 mb-4 tracking-widest font-mono">
                01
              </p>
              <h3 className="text-lg font-medium mb-4 group-hover:text-blue-400 transition duration-300">
                Structural Engineering
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                We design safe structures that can be built efficiently and correctly.
              </p>
            </div>
          </Link>

          {/* ================= ARCHITECTURE ================= */}
          <Link
            to={showcaseProject ? `/projects/${showcaseProject.id}?view=architectural` : "/projects"}
            className="
              relative overflow-hidden
              bg-white/[0.02]
              border border-white/10
              rounded-2xl
              p-8
              transition-all duration-300
              hover:border-blue-500/25
              group block
            "
          >
            {/* IMAGE LAYER */}
            {showcaseProject && (
              <FadingBackground 
                images={showcaseProject.architecturalImages} 
                activeIndex={imageIndex} 
                baseOpacity={0.6} 
              />
            )}

            <div className="absolute inset-0 bg-blue-500/[0.04]" />
            <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/20" />

            <div className="relative z-10">
              <p className="text-xs text-blue-400 mb-4 tracking-widest font-mono">
                02
              </p>
              <h3 className="text-lg font-medium mb-4 group-hover:text-blue-400 transition duration-300">
                Architectural Design
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                We create functional spaces that balance appearance, comfort, and buildability.
              </p>
            </div>
          </Link>

          {/* ================= BOQ & COST PLANNING ================= */}
          <Link
            to={showcaseProject ? `/projects/${showcaseProject.id}?view=boq` : "/projects"}
            className="
              relative overflow-hidden
              bg-white/[0.02]
              border border-white/10
              rounded-2xl
              p-8
              transition-all duration-300
              hover:border-blue-500/25
              group block
            "
          >
            {/* IMAGE LAYER */}
            {showcaseProject && (
              <FadingBackground 
                images={showcaseProject.boqImages} 
                activeIndex={imageIndex} 
                baseOpacity={0.55} 
              />
            )}

            <div className="absolute inset-0 bg-blue-500/[0.04]" />
            <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/20" />

            <div className="relative z-10">
              <p className="text-xs text-blue-400 mb-4 tracking-widest font-mono">
                03
              </p>
              <h3 className="text-lg font-medium mb-4 group-hover:text-blue-400 transition duration-300">
                BOQ & Cost Planning
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                We help clients avoid budget surprises through accurate material planning.
              </p>
            </div>
          </Link>

          {/* ================= CONSTRUCTION SUPPORT ================= */}
          <Link
            to={showcaseProject ? `/projects/${showcaseProject.id}?view=construction` : "/projects"}
            className="
              relative overflow-hidden
              bg-white/[0.02]
              border border-white/10
              rounded-2xl
              p-8
              transition-all duration-300
              hover:border-blue-500/25
              group block
            "
          >
            {/* IMAGE LAYER */}
            {showcaseProject && (
              <FadingBackground 
                images={showcaseProject.constructionImages} 
                activeIndex={imageIndex} 
                baseOpacity={0.55} 
              />
            )}

            <div className="absolute inset-0 bg-blue-500/[0.04]" />
            <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/20" />

            <div className="relative z-10">
              <p className="text-xs text-blue-400 mb-4 tracking-widest font-mono">
                04
              </p>
              <h3 className="text-lg font-medium mb-4 group-hover:text-blue-400 transition duration-300">
                Construction Support
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                We provide site guidance to keep construction aligned with the approved design.
              </p>
            </div>
          </Link>

        </Reveal>

      </div>
    </section>
  );
}