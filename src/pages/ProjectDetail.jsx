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
import PageTransition from "../components/animations/PageTransition";
import { projects } from "../data/projects/index";
import { useProjectView } from "../hooks/useProjectView";
import ProjectMetrics from "../components/projects/ProjectMetrics";
import ProjectViewTabs from "../components/projects/ProjectViewTabs";
import ProjectViewContent from "../components/projects/ProjectViewContent";
import RelatedProjectLinks from "../components/projects/RelatedProjectLinks";
import { generateWhatsAppLink } from "../data/contact";

export default function ProjectDetail() {
  const { id } = useParams();

  // Find project based on URL parameter
  const project = projects.find((p) => p.id === id);

  const { currentView, setView } = useProjectView("structural");

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
          <div className="relative h-[250px] md:h-[450px] rounded-3xl overflow-hidden border border-white/10 group">
            <img 
              src={project.image} 
              alt={project.title} 
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
          </div>

          {/* DESCRIPTION */}
          <div className="text-left max-w-4xl">
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              {project.views[currentView]?.description || project.description}
            </p>
          </div>

          {/* PROJECT KPIs METRICS */}
          <div className="border-y border-white/10 py-10">
            <ProjectMetrics metrics={project.metrics} />
          </div>

          {/* DYNAMIC DISCIPLINE VIEW SYSTEM (GRID LAYOUT) */}
          <div className="grid lg:grid-cols-5 gap-12 items-start pt-4">
            {/* Left Selection Sidebar (Desktop) */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-4 text-left">
                <h4 className="text-xs uppercase tracking-wider text-gray-500 font-mono">Select Engineering Discipline</h4>
                <ProjectViewTabs currentView={currentView} setView={setView} />
              </div>

              {/* Related project links positioned underneath sidebar in desktop */}
              <div className="hidden lg:block pt-8 border-t border-white/10">
                <RelatedProjectLinks currentId={project.id} currentTag={project.tag} />
              </div>
            </div>

            {/* Right Active View Content / Mobile Accordion */}
            <div className="lg:col-span-3">
              <ProjectViewContent
                project={project}
                currentView={currentView}
                setView={setView}
              />
            </div>
          </div>

          {/* Mobile Related project links wrapper */}
          <div className="lg:hidden pt-12 border-t border-white/10">
            <RelatedProjectLinks currentId={project.id} currentTag={project.tag} />
          </div>

          {/* FINAL CALL TO ACTION */}
          <div className="text-center border-t border-white/10 pt-16 mt-8 max-w-3xl mx-auto space-y-6">
            <h3 className="text-2xl font-semibold text-white">
              Request Similar Project Sizing
            </h3>

            <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Coordinate your design parameters, cost control guidelines, and execution monitoring under a single disciplined engineering practice.
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
          </div>

        </div>
      </section>
    </PageTransition>
  );
}