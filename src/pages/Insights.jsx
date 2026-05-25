import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "../components/animations/PageTransition";
import { insights, INSIGHT_CATEGORIES } from "../data/insights/index";
import { generateWhatsAppLink } from "../data/contact";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

// ========================
// TECHNICAL ADVISORY FAQS
// ========================
const insightsFaqs = [
  {
    q: "What is the difference between a basic soil report recommendation and actual foundation sizing?",
    a: "A soil report provides load bearing limits (e.g. 150 kN/m² at 1.5m depth). Sizing foundation footings requires translating the building's structural load path calculations into exact contact surface areas that distribute the weight without exceeding those soil limits. Bypassing soil data by copying neighboring designs is the leading cause of structural settlement cracks."
  },
  {
    q: "How do you control structural concrete costs without reducing safety factor limits?",
    a: "Finite element analysis is conducted on structural nodes to calculate the exact bending and shear stresses. Instead of standardizing all columns to a single, oversized dimension with thick reinforcement to save design time, members are detailed relative to actual load profiles. Value-engineering bar bending schedules (BBS) usually reduces total steel weight by 12% to 18%."
  },
  {
    q: "Why do Bill of Quantities (BOQ) takeoffs prevent contractor variation claims on site?",
    a: "Vague specifications in bids allow contractors to quote the cheapest materials, then submit variation bills during building. A standard-compliant BOQ (following SMM7/CESMM rules) measures every excavation volume, formwork area, and steel tonnage to exact dimensions. This establishes a fixed, auditable benchmark that protects project capital."
  },
  {
    q: "How does coordinating columns with architectural grids prevent site delays?",
    a: "Aligning column locations with architectural partition walls during early layout phases hides structural skeletons within the design. This prevents columns from landing in open rooms or requiring expensive concrete transfer beams, avoiding the costly permit revisions that occur when designs are done in isolation."
  }
];

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeFaq, setActiveFaq] = useState(null);

  // Centralized categories matching types config + "All"
  const categories = [
    "All",
    INSIGHT_CATEGORIES.STRUCTURAL,
    INSIGHT_CATEGORIES.ARCHITECTURAL,
    INSIGHT_CATEGORIES.BOQ,
    INSIGHT_CATEGORIES.SUPERVISION,
    INSIGHT_CATEGORIES.COORDINATION,
    INSIGHT_CATEGORIES.MISTAKES,
    INSIGHT_CATEGORIES.EFFICIENCY
  ];

  // We set the first structural insight as the Featured Insight
  const featuredInsight = useMemo(() => insights.find(item => item.id === "structural-mistakes") || insights[0], []);

  // Filter insights based on selected category pill
  const filteredInsights = useMemo(() => insights.filter((item) => {
    if (activeCategory === "All") return true;
    return item.category === activeCategory;
  }), [activeCategory]);

  // Exclude featured insight from the grid listing when in 'All' to avoid repeating content
  const gridInsights = useMemo(() => activeCategory === "All"
    ? filteredInsights.filter(item => item.id !== featuredInsight.id)
    : filteredInsights, [activeCategory, filteredInsights, featuredInsight]);

  return (
    <PageTransition>
      <section className="relative w-full overflow-hidden bg-[#0f0f0f] pb-24">
        
        {/* GRID BACKGROUND */}
        <div className="
          absolute inset-0 opacity-[0.035]
          bg-[linear-gradient(to_right,white_1px,transparent_1px),
          linear-gradient(to_bottom,white_1px,transparent_1px)]
          bg-[size:70px_70px]
          pointer-events-none
        " />

        {/* BLUE SYSTEM TINT */}
        <div className="absolute inset-0 bg-blue-500/[0.01] pointer-events-none" />

        {/* DARK BASE */}
        <div className="absolute inset-0 bg-[#0f0f0f]/95 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 space-y-16">
          
          {/* ======================================================
              1. HERO INTRODUCTION SECTION
          ====================================================== */}
          <div className="text-left space-y-4 max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-white">
              Engineering Advisory & Field Insights
            </h1>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Technical reports, structural observations, and cost surveying audits compiled from active sites to address building risks, code compliance, and material efficiencies.
            </p>
          </div>

          {/* ======================================================
              2. FEATURED INSIGHT SECTION (Split Editorial Layout)
          ====================================================== */}
          {activeCategory === "All" && featuredInsight && (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-left border border-white/10 bg-white/[0.015] rounded-3xl overflow-hidden hover:border-blue-500/20 transition-all duration-300"
            >
              <div className="grid lg:grid-cols-12">
                {/* Featured Image */}
                <div className="lg:col-span-7 h-64 md:h-80 lg:h-auto overflow-hidden relative">
                  <img 
                    src={featuredInsight.image} 
                    alt={featuredInsight.title} 
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute top-6 left-6 text-[9px] font-mono text-blue-400 bg-blue-500/[0.08] px-3 py-1 rounded-full uppercase tracking-wider border border-blue-500/20 backdrop-blur-sm">
                    Featured Analysis
                  </span>
                </div>

                {/* Featured Content details */}
                <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-mono text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-md uppercase tracking-wider">
                        {featuredInsight.category}
                      </span>
                      <span className="text-gray-600 font-mono text-[9px]">•</span>
                      <span className="text-[9px] text-gray-500 font-mono">
                        {featuredInsight.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-semibold text-white leading-snug hover:text-blue-400 transition duration-200">
                      <Link to={`/insights/${featuredInsight.id}`}>
                        {featuredInsight.title}
                      </Link>
                    </h3>

                    <p className="text-xs md:text-sm text-gray-300 leading-relaxed line-clamp-4">
                      {featuredInsight.summary}
                    </p>
                  </div>

                  <Link
                    to={`/insights/${featuredInsight.id}`}
                    className="inline-flex items-center gap-1.5 text-xs text-blue-400 font-medium hover:text-white transition group w-fit"
                  >
                    Explore Insight 
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}

          {/* ======================================================
              3. CATEGORY / TOPIC FILTERS
          ====================================================== */}
          <div className="space-y-4 text-left">
            <h4 className="text-xs uppercase tracking-wider text-gray-500 font-mono">Filter by Advisory Topic</h4>
            
            {/* Mobile scrollable, Desktop inline grid wrapper */}
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

          {/* ======================================================
              4. INSIGHTS GRID SYSTEM
          ====================================================== */}
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {gridInsights.map((item) => (
              <motion.div 
                key={item.id} 
                variants={itemVariants}
                className="flex"
              >
                <Link
                  to={`/insights/${item.id}`}
                  className="
                    group flex flex-col justify-between w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]
                    transition-all duration-300 hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.12)]
                    hover:-translate-y-1 text-left
                  "
                >
                  {/* Image */}
                  <div className="relative h-28 sm:h-40 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <span className="absolute bottom-3 left-4 text-[10px] font-mono text-blue-400 bg-[#0f0f0f]/90 border border-blue-500/25 px-2.5 py-1 rounded-md uppercase tracking-wider backdrop-blur-sm shadow-md">
                      {item.category}
                    </span>
                  </div>

                  {/* Body details */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3 sm:space-y-4">
                    <div className="space-y-1.5 sm:space-y-2">
                      <h4 className="text-xs sm:text-sm font-semibold text-white group-hover:text-blue-400 transition leading-snug line-clamp-2">
                        {item.title}
                      </h4>
                      <p className="text-[10px] sm:text-xs text-gray-300 leading-relaxed line-clamp-2 sm:line-clamp-3">
                        {item.summary}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-2 border-t border-white/5 gap-2 text-[9px] sm:text-[10px] text-gray-500 font-mono">
                      <span>{item.readTime}</span>
                      <span className="text-blue-400/80 font-medium group-hover:text-white transition duration-200 flex items-center gap-1">
                        Explore Insight <span className="transition-transform group-hover:translate-x-1">→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {gridInsights.length === 0 && (
            <div className="text-gray-500 text-sm py-12 text-left">
              No advisory records match the selected topic.
            </div>
          )}

          {/* ======================================================
              5. ADVISORY FAQS Accordion
          ====================================================== */}
          <div className="border-t border-white/10 pt-16 max-w-3xl mx-auto space-y-8 text-left">
            <div className="text-center mb-12">
              <p className="text-xs text-blue-400 tracking-[0.2em] uppercase mb-3">Advisory FAQs</p>
              <h2 className="text-xl sm:text-2xl font-semibold text-white">
                Technical Knowledge Base & Auditing FAQs
              </h2>
            </div>

            <div className="space-y-4">
              {insightsFaqs.map((faq, i) => (
                <div 
                  key={i} 
                  className="border border-white/10 bg-white/[0.01] rounded-2xl overflow-hidden transition duration-300 hover:border-blue-500/20"
                >
                  {/* FAQ Question */}
                  <button
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full text-left p-5 flex justify-between items-center gap-4 hover:bg-white/[0.015] transition"
                  >
                    <span className="text-xs sm:text-sm font-medium text-white tracking-wide">
                      {faq.q}
                    </span>
                    <span className="text-blue-400 font-mono text-sm">
                      {activeFaq === i ? "−" : "+"}
                    </span>
                  </button>

                  {/* FAQ Answer */}
                  <AnimatePresence initial={false}>
                    {activeFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-2 border-t border-white/5 text-[11px] sm:text-xs text-gray-300 leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* ======================================================
              6. ENGINEERING ADVISORY CTA (Start Consultation)
          ====================================================== */}
          <div className="text-center border-t border-white/10 pt-16 max-w-3xl mx-auto space-y-6">
            <h3 className="text-2xl font-semibold text-white">
              Need Professional Engineering Advisory?
            </h3>

            <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Coordinating design parameters, cost control guidelines, and execution monitoring under a single disciplined engineering practice.
            </p>

            <a
              href={generateWhatsAppLink("Hello DJOE Designs, I am visiting your Knowledge Platform and would like to request a consultation.")}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block bg-white text-black px-8 py-3 text-sm font-medium hover:bg-blue-500 hover:text-white transition duration-200 hover:-translate-y-0.5
              "
            >
              Request Advisory Consultation
            </a>
          </div>

        </div>
      </section>
    </PageTransition>
  );
}
