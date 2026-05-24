import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectViewContent({ project, currentView, setView }) {
  // Fullscreen Lightbox state
  const [lightboxState, setLightboxState] = useState({ viewKey: null, index: null });
  const touchStartX = useRef(null);

  // Keyboard navigation for desktop lightbox
  useEffect(() => {
    if (lightboxState.index === null || !lightboxState.viewKey) return;

    const viewImages = project[`${lightboxState.viewKey}Images`] || [];
    if (viewImages.length === 0) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setLightboxState({ viewKey: null, index: null });
      } else if (e.key === "ArrowLeft") {
        setLightboxState((prev) => ({
          ...prev,
          index: prev.index > 0 ? prev.index - 1 : viewImages.length - 1
        }));
      } else if (e.key === "ArrowRight") {
        setLightboxState((prev) => ({
          ...prev,
          index: prev.index < viewImages.length - 1 ? prev.index + 1 : 0
        }));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxState, project]);

  // Touch event handlers for mobile swiping
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e, viewImages) => {
    if (touchStartX.current === null || viewImages.length === 0) return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    const threshold = 50;

    if (diffX > threshold) {
      // swipe left -> next image
      setLightboxState((prev) => ({
        ...prev,
        index: prev.index < viewImages.length - 1 ? prev.index + 1 : 0
      }));
    } else if (diffX < -threshold) {
      // swipe right -> prev image
      setLightboxState((prev) => ({
        ...prev,
        index: prev.index > 0 ? prev.index - 1 : viewImages.length - 1
      }));
    }
    touchStartX.current = null;
  };

  const renderContent = (viewKey) => {
    const viewData = project.views[viewKey];
    if (!viewData) return null;

    // Fetch discipline-specific images from the upgraded top-level arrays
    const galleryImages = project[`${viewKey}Images`] || [];

    // Define visual characteristics based on viewKey to give each section a unique aesthetic identity
    const visualThemes = {
      architectural: {
        accent: "text-amber-400 border-amber-500/20",
        tag: "SPATIAL EXPERIENCE",
        imageStyle: "hover:scale-[1.03] transition-all duration-500",
        overlayText: "CIRCULATION, FLUIDITY & EXPERIENCE"
      },
      structural: {
        accent: "text-gray-400 border-gray-800",
        tag: "ENGINEERING BACKBONE",
        imageStyle: "filter grayscale hover:grayscale-0 transition-all duration-500",
        overlayText: "TECHNICAL ANALYSIS & LOAD SYSTEMS"
      },
      boq: {
        accent: "text-blue-400 border-blue-500/20",
        tag: "FINANCIAL INTELLIGENCE",
        imageStyle: "hover:brightness-110 hover:contrast-105 transition-all duration-500",
        overlayText: "SMM7/CESMM QUANTITY AUDITS & CONTROLS"
      },
      construction: {
        accent: "text-emerald-400 border-emerald-500/20",
        tag: "PHYSICAL EXECUTION",
        imageStyle: "hover:scale-105 hover:rotate-1 transition-all duration-500",
        overlayText: "ON-SITE PROGRESS & QUALITY ASSURANCE"
      }
    };

    const theme = visualThemes[viewKey] || visualThemes.structural;

    // Parser for parameter strings (e.g. "Main suspended slab thickness: 200mm. Slab bending capacity: 45 kNm/m")
    const parseCalculations = (calcStr) => {
      if (!calcStr) return [];
      return calcStr
        .split(/\.\s+/)
        .map((s) => s.trim())
        .filter(Boolean)
        .map((sentence) => {
          const cleanSentence = sentence.endsWith(".") ? sentence.slice(0, -1) : sentence;
          const colonIndex = cleanSentence.indexOf(":");
          if (colonIndex !== -1) {
            const item = cleanSentence.substring(0, colonIndex).trim();
            const qtyStr = cleanSentence.substring(colonIndex + 1).trim();
            
            // Try to split quantity and unit (e.g. "240 m³" -> "240", "m³")
            const match = qtyStr.match(/^([\d.,\s+-]+)\s*(.*)$/);
            const qty = match ? match[1].trim() : qtyStr;
            const unit = match && match[2].trim() ? match[2].trim() : "Unit";
            
            return { item, qty, unit };
          }
          return null;
        })
        .filter(Boolean);
    };

    const parsedCalcs = parseCalculations(viewData.calculations);

    return (
      <div className="space-y-10 text-left">
        {/* ======================================================
            1. VISUAL GALLERY LEADING THE SECTION (VISUAL FIRST)
           ====================================================== */}
        {galleryImages.length > 0 && (
          <div className="space-y-3">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {galleryImages.map((imgUrl, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setLightboxState({ viewKey, index: idx })}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.01] h-32 sm:h-40 md:h-48 cursor-pointer"
                >
                  <img 
                    src={imgUrl} 
                    alt={`${viewKey} gallery visual ${idx + 1}`}
                    loading="lazy"
                    decoding="async"
                    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${theme.imageStyle}`}
                  />
                  {/* Subtle hover overlay to indicate clickability */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ======================================================
            2. DISCIPLINE CONTENT (CUSTOM ORDER PER VIEW KEY)
           ====================================================== */}

        {/* A. ARCHITECTURAL LAYOUT */}
        {viewKey === "architectural" && (
          <div className="space-y-8">
            {/* Minimal descriptive text */}
            <div className="border-t border-white/10 pt-8 space-y-4">
              <div className="flex items-center gap-2">
                <span className={`text-[9px] font-mono tracking-widest px-2 py-0.5 rounded border ${theme.accent} bg-white/[0.02]`}>
                  {theme.tag}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white tracking-wide">{viewData.title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed max-w-3xl">
                {viewData.description}
              </p>
            </div>

            {/* Spatial Coordination */}
            <div className="grid md:grid-cols-2 gap-8">
              {viewData.analysis && (
                <div className="space-y-3">
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 font-mono">Spatial Intent & Coordination</h4>
                  <div className="bg-white/[0.015] border border-white/5 p-5 rounded-2xl space-y-3">
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {viewData.analysis}
                    </p>
                    {parsedCalcs.length > 0 && (
                      <div className="pt-2 border-t border-white/5">
                        <p className="text-[10px] text-gray-500 font-mono uppercase tracking-wider mb-2">Architectural Limits</p>
                        <div className="grid grid-cols-2 gap-4">
                          {parsedCalcs.map((calc, i) => (
                            <div key={i} className="flex flex-col">
                              <span className="text-[10px] text-gray-400">{calc.item}</span>
                              <span className="text-xs font-mono font-medium text-amber-400">{calc.qty} {calc.unit !== "Unit" ? calc.unit : ""}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Architectural Deliverables */}
              {viewData.deliverables && viewData.deliverables.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 font-mono">Design Deliverables</h4>
                  <div className="grid gap-2">
                    {viewData.deliverables.map((del, i) => (
                      <div key={i} className="flex gap-2.5 items-start text-xs text-gray-300 bg-white/[0.005] border border-white/5 px-4 py-3 rounded-xl hover:border-amber-500/20 transition-colors">
                        <span className="text-amber-400 font-mono text-[10px] mt-0.5">✓</span>
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* B. STRUCTURAL SYSTEM */}
        {viewKey === "structural" && (
          <div className="space-y-8">
            {/* Parameter cards SECOND (immediately after diagrams/images) */}
            {parsedCalcs.length > 0 && (
              <div className="space-y-3 border-t border-white/10 pt-8">
                <h4 className="text-xs uppercase tracking-wider text-gray-500 font-mono">Structural Sizing Parameters</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {parsedCalcs.map((calc, i) => (
                    <div key={i} className="bg-white/[0.015] border border-white/10 p-4 rounded-xl flex flex-col justify-between gap-2 min-h-[6.5rem] h-auto hover:border-blue-500/25 transition-colors">
                      <span className="text-[10px] text-gray-400 uppercase tracking-wider font-mono line-clamp-2">{calc.item}</span>
                      <span className="text-sm font-semibold text-blue-400 font-mono">{calc.qty} {calc.unit !== "Unit" ? calc.unit : ""}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Avoid long paragraphs - Summary & Specs */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className={`text-[9px] font-mono tracking-widest px-2 py-0.5 rounded border ${theme.accent} bg-white/[0.02]`}>
                  {theme.tag}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white tracking-wide">{viewData.title}</h3>
              <p className="text-xs text-gray-300 leading-relaxed max-w-3xl">
                {viewData.description}
              </p>
            </div>

            {/* Analysis & Standards */}
            <div className="grid md:grid-cols-2 gap-8">
              {viewData.analysis && (
                <div className="space-y-3">
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 font-mono">Load Distribution Analysis</h4>
                  <p className="text-xs text-gray-300 leading-relaxed bg-white/[0.01] border border-white/5 p-4 rounded-xl">{viewData.analysis}</p>
                </div>
              )}
              {viewData.designMethod && (
                <div className="space-y-3">
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 font-mono">Applicable Standard Codes</h4>
                  <p className="text-xs text-gray-300 leading-relaxed bg-white/[0.01] border border-white/5 p-4 rounded-xl">{viewData.designMethod}</p>
                </div>
              )}
            </div>

            {/* Structural Documentation */}
            {viewData.deliverables && viewData.deliverables.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-wider text-gray-500 font-mono">Structural Documentation</h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {viewData.deliverables.map((del, i) => (
                    <div key={i} className="flex gap-2.5 items-start text-xs text-gray-300 bg-white/[0.005] border border-white/5 px-4 py-3 rounded-xl hover:border-blue-500/20 transition-colors">
                      <span className="text-blue-400 font-mono text-[10px] mt-0.5">✓</span>
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* C. BOQ & COST INTEL */}
        {viewKey === "boq" && (
          <div className="space-y-8">
            {/* Table-first layout SECOND (immediately after images) */}
            {parsedCalcs.length > 0 && (
              <div className="space-y-3 border-t border-white/10 pt-8">
                <div className="flex justify-between items-center">
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 font-mono">Material Quantification Table</h4>
                  <span className={`text-[9px] font-mono tracking-widest px-2 py-0.5 rounded border ${theme.accent} bg-white/[0.02]`}>
                    {theme.tag}
                  </span>
                </div>
                <div className="overflow-hidden border border-white/10 rounded-xl bg-white/[0.015]">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="border-b border-white/10 bg-white/[0.03]">
                        <th className="p-4 font-semibold text-gray-400 uppercase tracking-wider font-mono">Material / Trade Item</th>
                        <th className="p-4 font-semibold text-gray-400 uppercase tracking-wider font-mono text-center">Quantity</th>
                        <th className="p-4 font-semibold text-gray-400 uppercase tracking-wider font-mono text-center">Unit</th>
                        <th className="p-4 font-semibold text-gray-400 uppercase tracking-wider font-mono text-right">Cost Impact</th>
                      </tr>
                    </thead>
                    <tbody>
                      {parsedCalcs.map((calc, i) => (
                        <tr key={i} className="border-b border-white/5 hover:bg-white/[0.01] transition-colors">
                          <td className="p-4 text-white font-medium">{calc.item}</td>
                          <td className="p-4 text-center font-mono text-white/90">{calc.qty}</td>
                          <td className="p-4 text-center text-gray-400 font-mono">{calc.unit}</td>
                          <td className="p-4 text-right text-blue-400 font-mono font-medium">Audited & Aligned</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Remove narrative-heavy text, show structured cost intelligence framework */}
            <div className="grid md:grid-cols-2 gap-8">
              {viewData.designMethod && (
                <div className="space-y-3">
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 font-mono">Measurement Auditing Framework</h4>
                  <div className="text-xs text-gray-300 leading-relaxed bg-white/[0.01] border border-white/5 p-4 rounded-xl space-y-2">
                    <p className="font-semibold text-white">{viewData.title}</p>
                    <p>{viewData.designMethod}</p>
                  </div>
                </div>
              )}
              {viewData.analysis && (
                <div className="space-y-3">
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 font-mono">Cost Optimization Summary</h4>
                  <p className="text-xs text-gray-300 leading-relaxed bg-white/[0.01] border border-white/5 p-4 rounded-xl">{viewData.analysis}</p>
                </div>
              )}
            </div>

            {viewData.deliverables && viewData.deliverables.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-wider text-gray-500 font-mono">Financial Deliverables</h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {viewData.deliverables.map((del, i) => (
                    <div key={i} className="flex gap-2.5 items-start text-xs text-gray-300 bg-white/[0.005] border border-white/5 px-4 py-3 rounded-xl hover:border-blue-500/25 transition-colors">
                      <span className="text-blue-400 font-mono text-[10px] mt-0.5">✓</span>
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* D. CONSTRUCTION & SITE PROOF */}
        {viewKey === "construction" && (
          <div className="space-y-8">
            {/* Checklist format SECOND (immediately after images) */}
            <div className="space-y-4 border-t border-white/10 pt-8">
              <div className="flex justify-between items-center">
                <h4 className="text-xs uppercase tracking-wider text-gray-500 font-mono">Quality Controls & Checklists</h4>
                <span className={`text-[9px] font-mono tracking-widest px-2 py-0.5 rounded border ${theme.accent} bg-white/[0.02]`}>
                  {theme.tag}
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Inspections Checklist */}
                {viewData.deliverables && viewData.deliverables.length > 0 && (
                  <div className="space-y-3">
                    <h5 className="text-[11px] uppercase tracking-wider text-gray-400 font-mono">Verification Inspections</h5>
                    <div className="grid gap-2">
                      {viewData.deliverables.map((del, i) => (
                        <div key={i} className="flex gap-2.5 items-center text-xs text-gray-300 bg-white/[0.01] border border-white/5 px-4 py-3 rounded-xl">
                          <input 
                            type="checkbox" 
                            checked 
                            readOnly 
                            className="w-3.5 h-3.5 rounded border-emerald-500/30 text-emerald-500 focus:ring-emerald-500/20 bg-black/40 pointer-events-none"
                          />
                          <span className="line-through text-gray-400">{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tolerances Checklist */}
                {parsedCalcs.length > 0 && (
                  <div className="space-y-3">
                    <h5 className="text-[11px] uppercase tracking-wider text-gray-400 font-mono">Execution Tolerances</h5>
                    <div className="grid gap-2">
                      {parsedCalcs.map((calc, i) => (
                        <div key={i} className="flex gap-2.5 items-center justify-between text-xs text-gray-300 bg-white/[0.01] border border-white/5 px-4 py-3 rounded-xl">
                          <span className="text-[10px] text-gray-400 uppercase tracking-wider font-mono">{calc.item}</span>
                          <span className="text-[10px] font-mono font-medium text-emerald-400 bg-emerald-500/[0.08] px-2.5 py-1 rounded-full border border-emerald-500/20">
                            {calc.qty} {calc.unit !== "Unit" ? calc.unit : ""}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Execution Stages & Standards */}
            <div className="grid md:grid-cols-2 gap-8">
              {viewData.analysis && (
                <div className="space-y-3">
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 font-mono">Execution Milestone Log</h4>
                  <div className="text-xs text-gray-300 leading-relaxed bg-white/[0.01] border border-white/5 p-4 rounded-xl space-y-2">
                    <p className="font-semibold text-white">{viewData.title}</p>
                    <p>{viewData.analysis}</p>
                  </div>
                </div>
              )}
              {viewData.designMethod && (
                <div className="space-y-3">
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 font-mono">Site Verification Standards</h4>
                  <p className="text-xs text-gray-300 leading-relaxed bg-white/[0.01] border border-white/5 p-4 rounded-xl">{viewData.designMethod}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentView}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.25 }}
          className="bg-white/[0.015] border border-white/10 rounded-3xl p-6 sm:p-10 hover:border-blue-500/20 transition-colors duration-300"
        >
          {renderContent(currentView)}
        </motion.div>
      </AnimatePresence>

      {/* FULLSCREEN LIGHTBOX VIEWER */}
      <AnimatePresence>
        {lightboxState.index !== null && lightboxState.viewKey && (
          (() => {
            const viewImages = project[`${lightboxState.viewKey}Images`] || [];
            const activeImage = viewImages[lightboxState.index];
            if (!activeImage) return null;

            return (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex flex-col items-center justify-center p-4"
                onTouchStart={handleTouchStart}
                onTouchEnd={(e) => handleTouchEnd(e, viewImages)}
              >
                {/* Close Button */}
                <button
                  onClick={() => setLightboxState({ viewKey: null, index: null })}
                  className="absolute top-6 right-6 text-white/60 hover:text-white transition duration-200 text-3xl font-light p-2 focus:outline-none"
                  aria-label="Close Lightbox"
                >
                  ✕
                </button>

                {/* Left Navigation Button */}
                {viewImages.length > 1 && (
                  <button
                    onClick={() =>
                      setLightboxState((prev) => ({
                        ...prev,
                        index: prev.index > 0 ? prev.index - 1 : viewImages.length - 1,
                      }))
                    }
                    className="absolute left-4 md:left-8 text-white/40 hover:text-white transition duration-200 text-3xl p-4 focus:outline-none hidden md:block"
                    aria-label="Previous image"
                  >
                    ‹
                  </button>
                )}

                {/* Image Container */}
                <div className="max-w-5xl max-h-[80vh] flex items-center justify-center relative select-none">
                  <motion.img
                    key={activeImage}
                    src={activeImage}
                    alt={`Fullscreen expanded view ${lightboxState.index + 1}`}
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="max-w-full max-h-[80vh] object-contain rounded-lg border border-white/10"
                  />
                </div>

                {/* Right Navigation Button */}
                {viewImages.length > 1 && (
                  <button
                    onClick={() =>
                      setLightboxState((prev) => ({
                        ...prev,
                        index: prev.index < viewImages.length - 1 ? prev.index + 1 : 0,
                      }))
                    }
                    className="absolute right-4 md:right-8 text-white/40 hover:text-white transition duration-200 text-3xl p-4 focus:outline-none hidden md:block"
                    aria-label="Next image"
                  >
                    ›
                  </button>
                )}

                {/* Image Counter Indicator & Swipe helper text */}
                <div className="absolute bottom-6 flex flex-col items-center gap-1">
                  <p className="text-xs font-mono text-gray-400">
                    {lightboxState.index + 1} / {viewImages.length}
                  </p>
                  <p className="text-[10px] text-gray-500 font-mono tracking-wide md:hidden">
                    Swipe left/right to navigate
                  </p>
                </div>
              </motion.div>
            );
          })()
        )}
      </AnimatePresence>
    </>
  );
}
