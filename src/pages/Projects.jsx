/**
 * -------------------------------------------------------------------
 * Page: Projects
 * -------------------------------------------------------------------
 * Full Project System (Search + Filters)
 *
 * Features:
 * - Live search
 * - Category filtering (bungalow, duplex, hotel, villa, infrastructure)
 * - Unified custom hooks
 * - System-aligned UI
 * -------------------------------------------------------------------
 */

import { motion } from "framer-motion";
import PageTransition from "../components/animations/PageTransition";
import { projects } from "../data/projects/index";
import { useProjectFilter } from "../hooks/useProjectFilter";
import ProjectFilters from "../components/projects/ProjectFilters";
import ProjectCard from "../components/projects/ProjectCard";
import Contact from "../components/sections/Contact";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 }
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

const categoriesList = ["All", "bungalow", "duplex", "hotel", "villa", "infrastructure"];

export default function Projects() {
  const {
    search,
    setSearch,
    activeCategory,
    setActiveCategory,
    filteredProjects
  } = useProjectFilter(projects);

  return (
    <PageTransition>
      <section className="relative border-b border-white/10">

        {/* SYSTEM BACKGROUND */}
        <div className="absolute inset-0 bg-blue-500/[0.01] pointer-events-none" />

        <motion.div
          className="max-w-7xl mx-auto px-6 py-28 relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          {/* HEADER */}
          <motion.div variants={itemVariants} className="max-w-2xl mb-16 text-left">
            <p className="text-blue-400 uppercase tracking-[0.25em] text-xs mb-4">
              Projects
            </p>

            <h1 className="text-3xl md:text-4xl font-semibold mb-6">
              Engineering Catalog
            </h1>

            <p className="text-gray-400 leading-relaxed">
              Explore our project records filtered by structural classification. Select a project to review detailed specifications and engineering methodologies.
            </p>
          </motion.div>

          {/* FILTERS */}
          <motion.div variants={itemVariants}>
            <ProjectFilters
              search={search}
              setSearch={setSearch}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              categories={categoriesList}
            />
          </motion.div>

          {/* PROJECT GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* EMPTY STATE */}
          {filteredProjects.length === 0 && (
            <div className="text-gray-500 text-sm mt-12 text-left">
              No project records match your search query or selected filter.
            </div>
          )}

        </motion.div>
      </section>

      {/* CONTACT CTA PREVIEW */}
      <Contact />
    </PageTransition>
  );
}