/**
 * -------------------------------------------------------------------
 * Page: ProjectDetail
 * -------------------------------------------------------------------
 * Individual Project Case Study with Multi-Disciplinary Views
 *
 * Features:
 * - View synchronized calculations, drawings, BOQs, and site reports
 * - Responsive Accordion (Mobile) and Tabbed Sidebar (Desktop)
 * - Synced URL search query parameter state (?view=)
 * -------------------------------------------------------------------
 */

import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../components/animations/PageTransition";
import { projects } from "../data/projects/index";
import { useProjectView } from "../hooks/useProjectView";
import ProjectViewContent from "../components/projects/ProjectViewContent";
import RelatedProjectLinks from "../components/projects/RelatedProjectLinks";
import { generateWhatsAppLink } from "../data/contact";
import Reveal from "../components/Reveal";

export default function ProjectDetail() {
  const { id } = useParams();

  // Find project based on URL parameter
  const project = projects.find((p) => p.id === id);

  const { currentView, setView } = useProjectView("architectural");

  // Fallback if project not found
  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-24 text-left">
        <p className="text-gray-400">Project not found.</p>
        <Link to="/projects" className="text-blue-400 hover:underline mt-4 inline-block">
          ← Back to Projects Catalog
        </Link>
      </div>
    );
  }

  return (
    <PageTransition>
      <section className="w-full relative border-b border-white/10 pb-20">
        
        {/* SYSTEM BACKGROUND */}
        <div className="absolute inset-0 bg-blue-500/[0.01] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10 space-y-16">
          
          {/* BREADCRUMB */}
          <div className="text-left">
            <Link to="/projects" className="text-xs text-gray-500 hover:text-blue-400 transition flex items-center gap-1.5">
              <span>←</span> Projects Catalog
            </Link>
          </div>

          {/* CINEMATIC HERO COVER BANNER */}
          <Reveal className="relative h-[250px] md:h-[450px] rounded-3xl overflow-hidden border border-white/10 group">
            <img 
              src={project.image} 
              alt={project.title} 
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
            />
            {/* Gradient overlay for readability and premium feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/10" />
            
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-10 space-y-3 text-left">
              <h1 className="text-2xl md:text-5xl font-semibold leading-tight text-white max-w-4xl drop-shadow-md">
                {project.title}
              </h1>
              <div className="flex">
                <span className="text-[9px] font-mono text-blue-400 bg-blue-500/[0.08] px-3 py-1 rounded-full uppercase tracking-wider border border-blue-500/20 backdrop-blur-sm">
                  {project.tag}
                </span>
              </div>
            </div>
          </Reveal>

          {/* DESCRIPTION */}
          <Reveal className="text-left max-w-4xl">
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              {project.views[currentView]?.description || project.description}
            </p>
          </Reveal>

          {/* DYNAMIC DISCIPLINE VIEW SYSTEM (STICKY SWITCHER & CONDITIONAL VIEW) */}
          <div className="space-y-12">
            {/* STICKY SEGMENTED CONTROL BAR */}
            <div className="sticky top-20 z-30 bg-[#0f0f0f]/90 backdrop-blur-md border-b border-white/10 py-4 -mx-6 px-6 sm:mx-0 sm:px-0">
              <Reveal className="max-w-4xl mx-auto flex justify-center">
                <div className="grid grid-cols-3 sm:flex bg-white/[0.02] border border-white/10 rounded-2xl sm:rounded-full p-1 w-full sm:w-auto gap-2 sm:gap-1">
                  {[
                    { key: "architectural", label: "Architectural Design", shortLabel: "Architectural" },
                    { key: "structural", label: "Structural Engineering", shortLabel: "Structural" },
                    { key: "boq", label: "BOQ & Cost Intelligence", shortLabel: "BOQ" },
                    { key: "construction", label: "Construction Support", shortLabel: "Construction" }
                  ].map((segment) => {
                    const isActive = currentView === segment.key;
                    return (
                      <button
                        key={segment.key}
                        onClick={() => {
                          if (!isActive) setView(segment.key);
                        }}
                        className={`
                          relative flex-1 sm:flex-initial px-3 py-2 text-[10px] sm:px-4 sm:py-2.5 sm:text-xs font-mono font-medium rounded-full text-center transition-colors duration-300 whitespace-nowrap focus:outline-none
                          ${isActive ? "text-white" : "text-gray-400 hover:text-white"}
                        `}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="active-pill"
                            className="absolute inset-0 bg-blue-500/10 border border-blue-500/30 rounded-full"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                        <span className="relative z-10 hidden sm:inline">{segment.label}</span>
                        <span className="relative z-10 sm:hidden">{segment.shortLabel}</span>
                      </button>
                    );
                  })}
                </div>
              </Reveal>
            </div>

            {/* CONDITIONAL PERSPECTIVE CONTENT */}
            <Reveal className="max-w-5xl mx-auto">
              <ProjectViewContent
                project={project}
                currentView={currentView}
                setView={setView}
              />
            </Reveal>
            
            {/* RELATED PROJECTS (FULL WIDTH UNDER CONTENT) */}
            <Reveal className="border-t border-white/10 pt-16 mt-8">
              <RelatedProjectLinks currentId={project.id} currentTag={project.tag} />
            </Reveal>
          </div>

          {/* FINAL CALL TO ACTION */}
          <Reveal className="text-center border-t border-white/10 pt-16 mt-8 max-w-3xl mx-auto space-y-6">
            <h3 className="text-2xl font-semibold text-white">
              Request Similar Project Sizing
            </h3>

            <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Coordinating design parameters, cost control guidelines, and execution monitoring under a single disciplined engineering practice.
            </p>

            <a
              href={generateWhatsAppLink(`Hello DJOE Designs, I viewed your project portfolio and would like to discuss a project similar to ${project.title}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block bg-white text-black px-8 py-3 text-sm font-medium hover:bg-blue-500 hover:text-white transition duration-200 hover:-translate-y-0.5
              "
            >
              Discuss Your Project
            </a>
          </Reveal>

        </div>
      </section>
    </PageTransition>
  );
}