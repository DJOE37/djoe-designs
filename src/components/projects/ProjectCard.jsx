import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function ProjectCard({ project }) {
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
          <p className="text-xs text-gray-300 leading-relaxed line-clamp-2">
            {project.description}
          </p>

          <div className="h-px bg-white/10 my-2" />

          {/* 5. Action button labeled "Explore Project" */}
          <span className="text-xs text-blue-400 font-medium group-hover:text-white transition flex items-center gap-1">
            Explore Project <span className="transition-transform group-hover:translate-x-1">→</span>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
