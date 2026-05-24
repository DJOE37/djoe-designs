import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectViewContent({ project, currentView, setView }) {
  const views = [
    { key: "structural", label: "Structural Design" },
    { key: "architectural", label: "Architectural Design" },
    { key: "boq", label: "BOQ & Cost Intelligence" },
    { key: "construction", label: "Construction Support" }
  ];

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
      structural: {
        accent: "text-gray-400 border-gray-800",
        tag: "ENGINEERING BACKBONE",
        imageStyle: "filter grayscale hover:grayscale-0 transition-all duration-500",
        overlayText: "TECHNICAL ANALYSIS & LOAD SYSTEMS"
      },
      architectural: {
        accent: "text-amber-400 border-amber-500/20",
        tag: "SPATIAL EXPERIENCE",
        imageStyle: "hover:scale-[1.03] transition-all duration-500",
        overlayText: "CIRCULATION, FLUIDITY & EXPERIENCE"
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

    return (
      <div className="space-y-8 text-left">
        {/* Title & Description */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-[9px] font-mono tracking-widest px-2 py-0.5 rounded border ${theme.accent} bg-white/[0.02]`}>
              {theme.tag}
            </span>
          </div>
          <h3 className="text-xl font-semibold text-white tracking-wide mb-2">{viewData.title}</h3>
          <p className="text-sm text-gray-400 leading-relaxed">{viewData.description}</p>
        </div>

        {/* Detailed Analysis */}
        {viewData.analysis && (
          <div className="space-y-2">
            <h4 className="text-xs uppercase tracking-wider text-gray-500 font-mono">Engineering Analysis</h4>
            <p className="text-sm text-gray-300 leading-relaxed bg-white/[0.01] border border-white/5 p-4 rounded-xl">
              {viewData.analysis}
            </p>
          </div>
        )}

        {/* Methodology & Calculations */}
        <div className="grid md:grid-cols-2 gap-6">
          {viewData.designMethod && (
            <div className="space-y-2">
              <h4 className="text-xs uppercase tracking-wider text-gray-500 font-mono">Design Methodology</h4>
              <p className="text-xs text-gray-400 leading-relaxed">{viewData.designMethod}</p>
            </div>
          )}
          {viewData.calculations && (
            <div className="space-y-2">
              <h4 className="text-xs uppercase tracking-wider text-gray-500 font-mono">Technical Calculations</h4>
              <p className="text-xs text-gray-400 leading-relaxed font-mono text-blue-400">{viewData.calculations}</p>
            </div>
          )}
        </div>

        {/* Deliverables List */}
        {viewData.deliverables && viewData.deliverables.length > 0 && (
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-gray-500 font-mono">Engineering Deliverables</h4>
            <div className="grid sm:grid-cols-2 gap-3">
              {viewData.deliverables.map((del, i) => (
                <div key={i} className="flex gap-2 items-start text-xs text-gray-400">
                  <span className="text-blue-400 font-mono text-[10px] mt-0.5">✓</span>
                  <span>{del}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Responsive Image Gallery: Mobile (1-col), Tablet/Desktop (2-col) */}
        {galleryImages.length > 0 && (
          <div className="space-y-4 pt-6 border-t border-white/10">
            <h4 className="text-xs uppercase tracking-wider text-gray-500 font-mono">Discipline Visual Records</h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {galleryImages.map((imgUrl, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setLightboxState({ viewKey, index: idx })}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.01] h-48 sm:h-56 cursor-pointer"
                >
                  <img 
                    src={imgUrl} 
                    alt={`${viewKey} gallery visual ${idx + 1}`}
                    className={`w-full h-full object-cover ${theme.imageStyle}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent flex flex-col justify-end p-4 transition-all duration-300 group-hover:from-black/95">
                    <p className="text-[9px] font-mono text-blue-400 tracking-wider uppercase mb-0.5">{theme.overlayText}</p>
                    <span className="text-xs text-white/90 font-medium font-mono flex items-center gap-1.5">
                      Visual Report 0{idx + 1}
                      <span className="text-[10px] text-gray-500 opacity-0 group-hover:opacity-100 transition duration-300">
                        (Click to expand)
                      </span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Desktop Panel View (lg and above) */}
      <div className="hidden lg:block bg-white/[0.015] border border-white/10 rounded-3xl p-8 sm:p-10 hover:border-blue-500/20 transition-colors duration-300">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {renderContent(currentView)}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Mobile Accordion View (< lg) */}
      <div className="lg:hidden space-y-4">
        {views.map((view) => {
          const isOpen = currentView === view.key;
          return (
            <div
              key={view.key}
              className="border border-white/10 bg-white/[0.01] rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setView(isOpen ? null : view.key)}
                className="w-full text-left p-5 flex justify-between items-center gap-4 hover:bg-white/[0.015] transition"
              >
                <span className="text-sm font-medium text-white tracking-wide uppercase font-mono">
                  {view.label}
                </span>
                <span className="text-blue-400 font-mono text-sm">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-6 pt-2 border-t border-white/5">
                      {renderContent(view.key)}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

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
