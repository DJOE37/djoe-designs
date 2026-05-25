import { useState, useMemo } from "react";

export function useProjectFilter(projects) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const term = search.toLowerCase();
      const matchesSearch =
        project.title.toLowerCase().includes(term) ||
        project.tag.toLowerCase().includes(term);

      const matchesCategory =
        activeCategory === "All" ||
        project.tag.toLowerCase() === activeCategory.toLowerCase();

      return matchesSearch && matchesCategory;
    });
  }, [projects, search, activeCategory]);

  return {
    search,
    setSearch,
    activeCategory,
    setActiveCategory,
    filteredProjects
  };
}
