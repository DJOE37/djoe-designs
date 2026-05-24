/**
 *: ProjectsPreview * -------------------------------------------------------------------
 * -------------------------------------------------------------------
 * System-Aligned Version
 *
 * Purpose:
 * - Showcase selected projects with design consistency
 * - Reinforce real-world engineering application
 *
 * Design System:
 * - Blue accent consistency
 * - Soft layered cards
 * - Premium spacing and motion
 * -------------------------------------------------------------------
 */

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../../data/projects";
import ProjectCard from "../projects/ProjectCard";

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

// Seeded random number generator based on the current date
function getDailyProjects(allProjects, count = 3) {
  if (!allProjects || allProjects.length <= count) return allProjects || [];

  const today = new Date();
  // Generate a deterministic integer seed for the day: YYYYMMDD
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();

  let currentSeed = seed;
  const nextRandom = () => {
    const x = Math.sin(currentSeed++) * 10000;
    return x - Math.floor(x);
  };

  const shuffled = [...allProjects];
  // Seeded Fisher-Yates shuffle
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(nextRandom() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, count);
}

// ========================
// COMPONENT
// ========================

export default function ProjectsPreview() {
  const dailyFeaturedProjects = getDailyProjects(projects, 3);
  return (
    <section className="relative border-b border-white/10">

      {/* ✅ Blue system tint */}
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

          <div className="max-w-xl">

            <p className="text-blue-400 uppercase tracking-[0.25em] text-xs mb-4">
              Selected Projects
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
              Engineering Solutions Applied in
              <br />
              Real Projects
            </h2>

            <p className="text-gray-400 leading-relaxed">
              A curated selection of projects demonstrating structural
              performance, cost awareness, and execution-focused thinking.
            </p>

          </div>

          <Link
            to="/projects"
            className="
              border border-white/20 px-5 py-2 text-sm
              hover:border-blue-500/40
              transition-all duration-200
              hover:-translate-y-0.5
              w-fit
            "
          >
            View All Projects
          </Link>

        </motion.div>

        {/* ======================================================
            GRID
        ====================================================== */}
        <div className="grid md:grid-cols-3 gap-8">

          {dailyFeaturedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}

        </div>

      </motion.div>
    </section>
  );
}

