import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects/index";

export default function RelatedProjectLinks({ currentId, currentTag }) {
  const [relatedProjects, setRelatedProjects] = useState([]);

  useEffect(() => {
    // 1. Fetch up to 5 projects with same tag (excluding current project)
    const sameTag = projects.filter(
      (p) => p.tag === currentTag && p.id !== currentId
    );

    // 2. If results are less than 5, fill remaining slots with random projects from other tags (excluding current)
    const otherTags = projects.filter(
      (p) => p.tag !== currentTag && p.id !== currentId
    );

    // Shuffle other tags projects randomly
    const shuffledOthers = [...otherTags].sort(() => 0.5 - Math.random());

    // Combine same tag and shuffled others
    const combined = [...sameTag, ...shuffledOthers];

    // Ensure no duplicates
    const unique = [];
    const seen = new Set();
    for (const p of combined) {
      if (!seen.has(p.id)) {
        seen.add(p.id);
        unique.push(p);
      }
    }

    setRelatedProjects(unique.slice(0, 5));
  }, [currentId, currentTag]);

  return (
    <div className="space-y-6 text-left">
      <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 font-mono">Related Projects</h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {relatedProjects.map((proj) => (
          <Link
            key={proj.id}
            to={`/projects/${proj.id}`}
            className="
              group block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]
              transition-all duration-300 hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.12)]
              hover:-translate-y-1 text-left
            "
          >
            <div className="relative h-28 overflow-hidden">
              <img
                src={proj.image}
                alt={proj.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <span className="absolute bottom-3 left-4 text-[9px] font-mono text-blue-400 bg-blue-500/[0.08] px-2 py-0.5 rounded-md uppercase tracking-wider">
                {proj.tag}
              </span>
            </div>
            <div className="p-4 space-y-2">
              <h5 className="text-xs font-semibold text-white group-hover:text-blue-400 transition duration-200 line-clamp-1">
                {proj.title}
              </h5>
              <span className="text-[11px] text-blue-400/80 font-medium group-hover:text-white transition duration-200 flex items-center gap-1">
                Explore Project <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
