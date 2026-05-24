/**
 * -------------------------------------------------------------------
 * Section: TrustStrip
 * -------------------------------------------------------------------
 * Core Principles & Beliefs Layer
 *
 * Purpose:
 * - Reinforce ethical & execution beliefs immediately after Hero
 * - Shift from technical disciplines to user/client-centered guidelines
 * -------------------------------------------------------------------
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ========================
// ANIMATION CONFIG
// ========================

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

// ========================
// PRINCIPLES & BELIEFS DATA
// ========================

const trustItems = [
  {
    number: "01",
    title: "Client Goals Come First",
    description: "We believe our client's project goals and needs guide every design decision we make.",
    details: "Every building is designed around the owner's operational requirements, budget boundaries, and timeline constraints. We align our structural models and layouts to serve the client's direct objectives first, rather than imposing generic engineering preferences."
  },
  {
    number: "02",
    title: "Design Built for the Site",
    description: "We believe drawings are useless unless they work practically for contractors on site.",
    details: "We double-check column alignments, slab connections, and dimensions against real site conditions and standard tools. This prevents site confusion, eliminates contractor delays, and ensures what is drawn is what gets built."
  },
  {
    number: "03",
    title: "Protecting Your Investment",
    description: "We believe in preventing overspending and budget overruns before site work starts.",
    details: "By preparing accurate quantities and clear material takeoffs early in design, we eliminate contractor rate inflation and prevent unexpected variation claims. We protect the project's capital through careful cost planning."
  }
];

// ========================
// COMPONENT
// ========================

export default function TrustStrip() {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (index) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section className="relative border-y border-white/10 bg-[#0f0f0f]">
      {/* ================= BACKGROUND CONTROL ================= */}
      <div className="absolute inset-0 bg-blue-500/[0.012] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 text-left">

        {/* ========================
           SECTION INTRO
          ======================== */}
        <div className="mb-14 max-w-2xl">
          <p className="text-blue-400 uppercase tracking-[0.25em] text-xs mb-4">
            Our Core Principles
          </p>
          <h2 className="text-2xl md:text-3xl font-medium leading-snug mb-4 text-white/90">
            Beliefs That Guide Our Work
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm">
            We believe that engineering is more than calculations — it is a commitment to project predictability, client protection, and practical execution on site.
          </p>
        </div>

        {/* ========================
            TRUST GRID
        ======================== */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {trustItems.map((item, index) => {
            const isExpanded = !!expandedCards[index];
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                onClick={() => toggleCard(index)}
                className="
                  bg-white/[0.025]
                  border border-white/10
                  rounded-2xl
                  p-8
                  transition-all duration-300
                  hover:border-blue-500/25
                  cursor-pointer
                  select-none
                  flex flex-col justify-between
                "
              >
                <div>
                  {/* STEP NUMBER & TOGGLE */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-blue-400 text-3xl font-semibold">
                      {item.number}
                    </span>
                    <span className="text-[10px] font-mono text-blue-400 hover:text-blue-300 transition-colors uppercase tracking-wider">
                      {isExpanded ? "Collapse −" : "Details +"}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-base font-semibold text-white mb-3">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* EXPANDABLE DETAILS */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden border-t border-white/5 pt-3"
                      >
                        <p className="text-xs text-blue-400/90 leading-relaxed font-sans">
                          {item.details}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}