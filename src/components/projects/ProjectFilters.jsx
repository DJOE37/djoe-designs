export default function ProjectFilters({
  search,
  setSearch,
  activeCategory,
  setActiveCategory,
  categories
}) {
  return (
    <div className="space-y-6 mb-12">
      {/* Search Input */}
      <div>
        <input
          type="text"
          placeholder="Search engineering projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
            w-full max-w-md
            bg-white/[0.02]
            border border-white/10
            rounded-xl
            px-4 py-3 text-sm
            text-gray-300
            placeholder-gray-500
            focus:outline-none
            focus:border-blue-500/40
            transition
          "
        />
      </div>

      {/* Category Pills */}
      <div className="flex overflow-x-auto lg:overflow-visible gap-2 pb-3 lg:pb-0 scrollbar-none -mx-6 px-6 lg:mx-0 lg:px-0">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`
              px-4 py-2 text-xs rounded-full border whitespace-nowrap transition-all duration-200 flex-shrink-0
              ${activeCategory === cat
                ? "border-blue-500/40 text-blue-400 bg-blue-500/[0.08]"
                : "border-white/10 text-gray-400 hover:border-blue-500/30 hover:text-blue-400"
              }
            `}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
