export default function ProjectViewTabs({ currentView, setView }) {
  const tabs = [
    { key: "structural", label: "Structural Design", shortLabel: "STR" },
    { key: "architectural", label: "Architectural Design", shortLabel: "ARC" },
    { key: "boq", label: "BOQ & Cost", shortLabel: "BOQ" },
    { key: "construction", label: "Construction Support", shortLabel: "CON" }
  ];

  return (
    <>
      {/* Desktop Tabs Sidebar */}
      <div className="hidden lg:flex flex-col gap-2 w-full">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setView(tab.key)}
            className={`
              w-full text-left p-4 rounded-xl border transition-all duration-200
              flex items-center justify-between relative overflow-hidden group
              ${currentView === tab.key
                ? "border-blue-500/30 bg-blue-500/[0.04] text-white"
                : "border-white/10 bg-white/[0.01] hover:border-white/20 text-gray-400 hover:text-white"
              }
            `}
          >
            {currentView === tab.key && (
              <div className="absolute left-0 top-0 h-full w-[3px] bg-blue-500" />
            )}
            <span className="text-sm font-medium tracking-wide">{tab.label}</span>
            <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">{tab.shortLabel}</span>
          </button>
        ))}
      </div>

      {/* Mobile Sticky Bottom Switcher */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0f0f0f]/90 backdrop-blur-md border-t border-white/10 p-3 flex justify-between gap-1 shadow-2xl">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setView(tab.key)}
            className={`
              flex-1 py-2.5 text-[10px] sm:text-xs font-mono font-medium rounded-lg text-center transition-all duration-200 uppercase tracking-wider
              ${currentView === tab.key
                ? "bg-blue-500/10 text-blue-400 border border-blue-500/30"
                : "text-gray-500 hover:text-gray-300"
              }
            `}
          >
            {tab.shortLabel}
          </button>
        ))}
      </div>
    </>
  );
}
