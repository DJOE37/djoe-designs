import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { generateWhatsAppLink } from "../../data/contact";

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function ProjectCard({ project }) {
  const getProjectOutcome = (p) => {
    const id = (p.id || "").toLowerCase();
    const tag = (p.tag || "").toLowerCase();

    if (id.includes("warehouse")) {
      return "Engineered for structural stability and faster site execution.";
    } else if (tag.includes("duplex")) {
      return "Planned for better space use and efficient structural coordination.";
    } else if (tag.includes("hotel")) {
      return "Designed to improve circulation, comfort, and construction efficiency.";
    } else if (tag.includes("infrastructure") || id.includes("infra")) {
      return "Designed to improve durability and reduce construction complications.";
    } else if (tag.includes("bungalow")) {
      return "Optimized for cost control and spatial efficiency.";
    } else if (tag.includes("villa") || tag.includes("residential")) {
      return "Designed to maximize space and lower execution cost.";
    }
    return "Planned for better space use and efficient structural coordination.";
  };

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const message = `Hello D'JOE, I saw your project "${project.title}" in your portfolio and I am interested in discussing a similar project.`;
    window.open(generateWhatsAppLink(message), "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div variants={itemVariants}>
      <Link
        to={`/projects/${project.id}`}
        className="
          group block
          bg-white/[0.02]
          border border-white/10
          rounded-2xl
          overflow-hidden
          transition-all duration-300
          hover:border-blue-500/25
          hover:-translate-y-1
          h-full
          text-left
        "
      >
        {/* 1. Image thumbnail */}
        <div className="relative h-32 sm:h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/35" />
        </div>

        {/* Card Content Area */}
        <div className="p-4 sm:p-6 flex flex-col gap-2 sm:gap-3">
          {/* 2. Small tag label (blue accent, minimal size) */}
          <span className="text-[9px] font-mono text-blue-400 bg-blue-500/[0.08] px-2 py-0.5 rounded-md uppercase tracking-wider self-start">
            {project.tag}
          </span>

          {/* 3. Project title (primary emphasis) */}
          <h3 className="text-base font-semibold leading-snug text-white group-hover:text-blue-400 transition line-clamp-1">
            {project.title}
          </h3>

          {/* 4. Short description block */}
          <p className="text-xs text-gray-300 leading-relaxed line-clamp-1 font-normal">
            {getProjectOutcome(project)}
          </p>

          <div className="h-px bg-white/10 my-2" />

          {/* 5. Action buttons container */}
          <div className="flex items-center justify-between mt-1 text-xs">
            <span className="text-blue-400 font-medium group-hover:text-white transition flex items-center gap-1">
              Explore Project <span className="transition-transform group-hover:translate-x-1">→</span>
            </span>

            <button
              onClick={handleWhatsAppClick}
              className="
                text-[10px] font-mono text-gray-400 hover:text-white
                bg-white/[0.04] hover:bg-blue-500/10
                border border-white/10 hover:border-blue-500/30
                px-3 py-1.5 rounded-lg
                transition-all duration-200
                flex items-center gap-1.5
              "
              title="Request Similar Project Sizing"
            >
              <svg className="w-3.5 h-3.5 fill-current text-green-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.446L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.859-4.42 9.863-9.864.002-2.637-1.023-5.116-2.887-6.98C16.584 1.896 14.1 .87 11.464.87c-5.44 0-9.863 4.42-9.867 9.864-.001 1.714.455 3.39 1.32 4.887L1.87 21.082l5.777-1.528zM17.65 14.39c-.328-.164-1.94-.957-2.24-1.066-.3-.11-.518-.164-.736.164-.218.328-.844 1.066-1.035 1.284-.19.218-.38.245-.708.081-.328-.164-1.386-.51-2.64-1.627-.975-.87-1.633-1.946-1.824-2.274-.19-.328-.02-.505.143-.668.148-.146.328-.382.492-.573.164-.19.218-.328.328-.546.11-.218.055-.41-.028-.573-.082-.164-.736-1.775-1.008-2.43-.265-.646-.53-.559-.727-.569-.19-.01-.408-.012-.625-.012-.218 0-.573.082-.872.41-.3.328-1.144 1.119-1.144 2.732 0 1.614 1.173 3.173 1.336 3.392.164.218 2.308 3.525 5.59 4.95.78.339 1.39.541 1.865.692.784.25 1.498.214 2.062.129.629-.094 1.94-.793 2.212-1.558.272-.765.272-1.42.19-1.557-.081-.137-.3-.218-.628-.382z"/>
              </svg>
              Inquire
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
