/**
 * -------------------------------------------------------------------
 * Page: Services
 * -------------------------------------------------------------------
 * Upgraded Services Page
 *
 * Design System:
 * - Dark premium base (#0f0f0f)
 * - Cohesive background technical gridlines
 * - Glassmorphism, subtle blue borders, and glow elements
 * - Staggered layout transitions
 * -------------------------------------------------------------------
 */

import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "../components/animations/PageTransition";
import { services } from "../data/services";

// ========================
// ANIMATION VARIANTS
// ========================
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

// ========================
// METHODOLOGY PIPELINE
// ========================
const pipelinePhases = [
  {
    num: "01",
    phase: "Feasibility & Soil Coordination",
    title: "Geotechnical Sizing",
    desc: "We examine the soil report and borehole data before specifying the foundations. Matching the foundation footings directly to the soil’s bearing capacity prevents differential settlement, which is the main cause of cracked walls and leaning structures."
  },
  {
    num: "02",
    phase: "Finite Element Modeling",
    title: "Load Pathway Modeling",
    desc: "We map how gravity, live loads, and wind forces travel through the building. Calculating the stresses on every column and transfer slab allows us to size reinforcing steel exactly where tension demands it, avoiding weak points."
  },
  {
    num: "03",
    phase: "Value Engineering Takeoffs",
    title: "Material Takeoffs",
    desc: "We calculate concrete volumes and steel weight totals in parallel with structural sizing. By modeling quantity data early, we can adjust member sizes to fit your budget before the design is submitted for municipal approvals."
  },
  {
    num: "04",
    phase: "Constructability Audit",
    title: "Site Auditing",
    desc: "We inspect the formwork and reinforcement steel on site before the contractor pours concrete. This step ensures that the steel sizes, bar spacing, and cover depths match the structural calculation drawings."
  }
];

// ========================
// TECHNICAL FAQ DATA
// ========================
const faqs = [
  {
    q: "How does your practice integrate structural sizing with value engineering?",
    a: "Rather than using generic sizing templates that default to oversized sections and excessive steel rebar—a common practice to save engineering hours—we calculate load distributions for each individual column and beam. We write precise bar bending schedules (BBS) that match steel diameters to actual tension and shear stress diagrams. This detailed modeling usually reduces overall reinforcement weight by 10% to 15% without reducing structural safety, saving money on concrete and steel."
  },
  {
    q: "When should we coordinate architectural drafts with concrete detailing?",
    a: "This must happen before the schematic architectural plans are finalized. Sizing structural grids and column layout lines alongside the floor plan prevents columns from landing in the middle of living rooms or requiring expensive, deep concrete transfer beams. By aligning structural columns with architectural walls early, we keep room heights high and avoid structural redesigns that delay building control approvals."
  },
  {
    q: "What standard measurement codes do you comply with for Bills of Quantities (BOQ)?",
    a: "We prepare all material takeoffs under standard measurement frameworks, primarily SMM7 (Standard Method of Measurement for Building Works) or CESMM (Civil Engineering Standard Method of Measurement). This means every item—from foundation excavation to paint finish—is quantified using standard rules. It prevents contractors from inflating prices through vague definitions or claiming extra money for items that are legally included in standard trade descriptions."
  },
  {
    q: "Why do site inspections before concrete casting protect the developer's liability?",
    a: "Once concrete is poured into formwork, verifying the internal steel rebar is impossible without expensive non-destructive testing or core drilling. Checking the reinforcement steel layout—specifically the bar diameters, spacing, overlap lap lengths, and cover blocks—directly in the formwork before casting ensures the structure matches the approved design. This pre-pour audit creates a clear legal record of compliance and protects developers from liability if structural cracking occurs later."
  }
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);
  const [hoveredPhase, setHoveredPhase] = useState(null);

  const activeService = services[activeTab !== null ? activeTab : 0];

  const handleCardClick = (idx) => {
    if (window.innerWidth < 1024) {
      setActiveTab(activeTab === idx ? null : idx);
    } else {
      setActiveTab(idx);
    }
  };

  return (
    <PageTransition>
      <div className="relative overflow-hidden bg-[#0f0f0f] border-b border-white/10">
        
        {/* ======================================================
            GLOBAL BACKGROUND SYSTEM
        ====================================================== */}
        
        {/* GRID LAYER */}
        <div className="
          absolute inset-0 opacity-[0.04]
          bg-[linear-gradient(to_right,white_1px,transparent_1px),
          linear-gradient(to_bottom,white_1px,transparent_1px)]
          bg-[size:60px_60px]
          pointer-events-none
        " />

        {/* BLUE TINT */}
        <div className="absolute inset-0 bg-blue-500/[0.06] pointer-events-none" />

        {/* DARK BASE */}
        <div className="absolute inset-0 bg-[#0f0f0f]/80 pointer-events-none" />

        {/* ======================================================
            HERO SECTION
        ====================================================== */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-20 border-b border-white/10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-5 gap-16 items-start"
          >
            
            {/* Left Headline */}
            <div className="lg:col-span-3 space-y-6">
              <motion.p
                variants={itemVariants}
                className="text-blue-400 uppercase tracking-[0.25em] text-xs font-semibold"
              >
                Practice Scope
              </motion.p>
              
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl font-semibold leading-[1.1] text-white"
              >
                Integrated Design & Engineering Systems
              </motion.h1>
              
              <motion.p
                variants={itemVariants}
                className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl"
              >
                Most structural failures and cost overruns do not originate on site; they start during the design phase when structural layouts, spatial designs, and material bills are created in isolation. We coordinate these disciplines from day one, matching foundation engineering to actual soil reports and cross-checking drawings against realistic material budgets to ensure projects are buildable and cost-predictable before the first shovel hits the dirt.
              </motion.p>
            </div>

            {/* Right Metrics Grid */}
            <motion.div 
              variants={itemVariants}
              className="lg:col-span-2 grid grid-cols-2 gap-4 w-full"
            >
              <div className="border border-white/10 bg-white/[0.01] p-6 rounded-2xl">
                <p className="text-2xl sm:text-3xl font-mono font-medium text-white">0%</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-2">Structural Variance Errors</p>
              </div>

              <div className="border border-white/10 bg-white/[0.01] p-6 rounded-2xl">
                <p className="text-2xl sm:text-3xl font-mono font-medium text-white">-15%</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-2">Material Waste Reduction</p>
              </div>

              <div className="border border-white/10 bg-white/[0.01] p-6 rounded-2xl">
                <p className="text-2xl sm:text-3xl font-mono font-medium text-white">100%</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-2">Standard Code Compliance</p>
              </div>

              <div className="border border-white/10 bg-white/[0.01] p-6 rounded-2xl">
                <p className="text-2xl sm:text-3xl font-mono font-medium text-white">2%</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-2">Maximum Cost Tolerance</p>
              </div>
            </motion.div>

          </motion.div>
        </section>

        {/* ======================================================
            INTERACTIVE SERVICES DASHBOARD
        ====================================================== */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 py-28 border-b border-white/10">
          
          <div className="mb-16">
            <p className="text-xs text-blue-400 tracking-[0.2em] uppercase mb-4">Core Disciplines</p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">Engineering Services Dashboard</h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-stretch">

            {/* Left Selection Cards Sidebar */}
            <div className="lg:col-span-2 space-y-4">
              {services.map((item, idx) => {
                const isActive = activeTab === idx;
                const isDefaultActiveDesktop = activeTab === null && idx === 0;
                return (
                  <div
                    key={idx}
                    className={`
                      w-full rounded-2xl border transition-all duration-300
                      flex flex-col relative overflow-hidden group
                      ${isActive 
                        ? "border-blue-500/30 bg-blue-500/[0.04] text-white" 
                        : isDefaultActiveDesktop
                          ? "border-white/10 bg-white/[0.01] hover:border-white/20 text-gray-400 hover:text-white lg:border-blue-500/30 lg:bg-blue-500/[0.04] lg:text-white"
                          : "border-white/10 bg-white/[0.01] hover:border-white/20 text-gray-400 hover:text-white"
                      }
                    `}
                  >
                    {/* Subtle active glow light indicator */}
                    {isActive && (
                      <div className="absolute left-0 top-0 h-full w-[3px] bg-blue-500" />
                    )}
                    {isDefaultActiveDesktop && (
                      <div className="absolute left-0 top-0 h-full w-[3px] bg-blue-500 hidden lg:block" />
                    )}

                    {/* Card Header (Interactive trigger) */}
                    <div
                      onClick={() => handleCardClick(idx)}
                      className="p-6 cursor-pointer space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono tracking-widest text-blue-400">
                          {item.codeShort || item.code}
                        </span>
                        <span className="text-[10px] text-gray-600 font-mono">0{idx + 1}.</span>
                      </div>

                      <h3 className="text-lg font-medium tracking-wide group-hover:text-blue-400 transition duration-300">
                        {item.title}
                      </h3>

                      <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                        {item.subtitle}
                      </p>
                    </div>

                    {/* Mobile Inline Content Panel */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden lg:hidden"
                        >
                          <div className="px-6 pb-6 pt-2 border-t border-white/10 space-y-8">
                            {/* Philosophy Callout */}
                            <div className="border-l-2 border-blue-500 pl-5 py-1">
                              <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-mono">Philosophy</h4>
                              <p className="text-sm text-gray-300 font-medium italic leading-relaxed">
                                "{item.subtitle}"
                              </p>
                            </div>

                            {/* Description & Relevance */}
                            <div className="space-y-4">
                              <p className="text-sm text-gray-400 leading-relaxed">
                                {item.desc}
                              </p>
                              
                              <div className="bg-white/[0.01] border border-white/5 p-5 rounded-xl">
                                <h5 className="text-xs font-medium text-white mb-2 tracking-wide uppercase">Site Execution Value</h5>
                                <p className="text-xs text-gray-400 leading-relaxed">
                                  {item.relevance}
                                </p>
                              </div>
                            </div>

                            {/* Technical Capabilities List */}
                            <div className="space-y-3">
                              <h5 className="text-xs font-semibold uppercase tracking-wider text-gray-500">Technical Capability Areas</h5>
                              <div className="grid sm:grid-cols-2 gap-3">
                                {item.capabilities.map((cap, i) => (
                                  <div key={i} className="flex gap-2 items-center text-xs text-gray-400">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/60" />
                                    <span>{cap}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Deliverables List */}
                            <div className="space-y-3">
                              <h5 className="text-xs font-semibold uppercase tracking-wider text-gray-500">Service Deliverables</h5>
                              <div className="grid sm:grid-cols-2 gap-3">
                                {item.deliverables.map((del, i) => (
                                  <div key={i} className="flex gap-2 items-start text-xs text-gray-400">
                                    <span className="text-blue-400 font-mono text-[10px] mt-0.5">✓</span>
                                    <span>{del}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Workflow Process */}
                            <div className="border-t border-white/10 pt-8 space-y-2">
                              <h5 className="text-xs font-semibold uppercase tracking-wider text-gray-500">Integrated Process Flow</h5>
                              <p className="text-xs text-gray-400 leading-relaxed">
                                {item.workflow}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Right Information-Dense Panel */}
            <div className="lg:col-span-3 hidden lg:block">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab !== null ? activeTab : 0}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="
                    bg-white/[0.015] border border-white/10 rounded-3xl p-8 sm:p-10
                    h-full flex flex-col justify-between hover:border-blue-500/20 transition-colors duration-300
                  "
                >
                  <div className="space-y-8">
                    
                    {/* Module Header */}
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-mono text-blue-400 bg-blue-500/[0.08] px-3 py-1 rounded-full">
                          {activeService.codeShort || activeService.code}
                        </span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-wide">
                        {activeService.title}
                      </h2>
                    </div>

                    {/* Philosophy Callout */}
                    <div className="border-l-2 border-blue-500 pl-5 py-1">
                      <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-mono">Philosophy</h4>
                      <p className="text-sm text-gray-300 font-medium italic leading-relaxed">
                        "{activeService.subtitle}"
                      </p>
                    </div>

                    {/* Description & Relevance */}
                    <div className="space-y-4">
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {activeService.desc}
                      </p>
                      
                      <div className="bg-white/[0.01] border border-white/5 p-5 rounded-xl">
                        <h5 className="text-xs font-medium text-white mb-2 tracking-wide uppercase">Site Execution Value</h5>
                        <p className="text-xs text-gray-400 leading-relaxed">
                          {activeService.relevance}
                        </p>
                      </div>
                    </div>

                    {/* Technical Capabilities List */}
                    <div className="space-y-3">
                      <h5 className="text-xs font-semibold uppercase tracking-wider text-gray-500">Technical Capability Areas</h5>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {activeService.capabilities.map((cap, i) => (
                          <div key={i} className="flex gap-2 items-center text-xs text-gray-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500/60" />
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* deliverables List */}
                    <div className="space-y-3">
                      <h5 className="text-xs font-semibold uppercase tracking-wider text-gray-500">Service Deliverables</h5>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {activeService.deliverables.map((del, i) => (
                          <div key={i} className="flex gap-2 items-start text-xs text-gray-400">
                            <span className="text-blue-400 font-mono text-[10px] mt-0.5">✓</span>
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Workflow Process */}
                  <div className="border-t border-white/10 pt-8 mt-8 space-y-2">
                    <h5 className="text-xs font-semibold uppercase tracking-wider text-gray-500">Integrated Process Flow</h5>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {activeService.workflow}
                    </p>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </section>

        {/* ======================================================
            METHODOLOGY FLOW PIPELINE
        ====================================================== */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 py-28 border-b border-white/10">
          
          <div className="max-w-2xl mb-20">
            <p className="text-xs text-blue-400 tracking-[0.2em] uppercase mb-4">Integrated Delivery</p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
              Design-to-Construction Pipeline
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              We review design documents through a clear structural and financial sequence. This process ensures that structural steel plans, spatial drawings, and material budgets are fully aligned before the contractor arrives on site.
            </p>
          </div>

          <div className="relative pl-12 lg:pl-0 space-y-8 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-8">
            {/* Mobile Vertical Connected Timeline Line */}
            <div className="absolute left-[24px] top-6 bottom-6 w-[1px] bg-gradient-to-b from-blue-500/10 via-blue-500/35 to-blue-500/10 lg:hidden pointer-events-none" />

            {/* Desktop Horizontal Connecting Line */}
            <div className="absolute top-[3.75rem] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-blue-500/0 via-blue-500/15 to-blue-500/0 hidden lg:block pointer-events-none" />

            {pipelinePhases.map((phase, i) => {
              const isHovered = hoveredPhase === i;
              const isPast = hoveredPhase !== null && i < hoveredPhase;
              const isFuture = hoveredPhase !== null && i > hoveredPhase;

              return (
                <div 
                  key={i} 
                  onMouseEnter={() => setHoveredPhase(i)}
                  onMouseLeave={() => setHoveredPhase(null)}
                  className={`
                    border rounded-2xl relative p-6 transition-all duration-500
                    ${isHovered 
                      ? "border-blue-500/40 bg-blue-500/[0.015] shadow-[0_0_30px_rgba(59,130,246,0.04)] scale-[1.02] lg:scale-100 lg:-translate-y-1" 
                      : isPast
                        ? "border-blue-500/20 bg-blue-500/[0.005] opacity-80"
                        : isFuture
                          ? "border-white/5 bg-white/[0.002] opacity-40"
                          : "border-white/5 bg-white/[0.005]"
                    }
                  `}
                >
                  {/* Step Number Node */}
                  <div className="absolute -left-12 w-12 top-6 flex items-center justify-center z-20 lg:static lg:w-auto lg:h-auto lg:block lg:mb-6">
                    <div className={`
                      w-9 h-9 rounded-full border flex items-center justify-center text-xs font-mono font-medium transition-all duration-500 bg-[#0f0f0f]
                      lg:w-auto lg:h-auto lg:rounded-none lg:border-none lg:bg-transparent lg:text-2xl lg:text-blue-500/60
                      ${isHovered 
                        ? "border-blue-500 text-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.2)] lg:shadow-none" 
                        : isPast
                          ? "border-blue-500/30 text-blue-500/60 lg:border-none"
                          : "border-white/10 text-gray-500 lg:border-none"
                      }
                    `}>
                      {phase.num}
                    </div>
                  </div>

                  <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2 font-mono">
                    {phase.phase}
                  </h4>
                  <h3 className="text-base font-medium text-white mb-4">
                    {phase.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {phase.desc}
                  </p>

                  {/* Desktop Connecting Arrow */}
                  {i < 3 && (
                    <div className="hidden lg:flex absolute top-10 -right-[20px] w-10 h-10 items-center justify-center z-30 pointer-events-none">
                      <span className={`text-lg font-mono transition-all duration-500 ${isHovered ? "text-blue-400 translate-x-0.5" : "text-blue-500/30"}`}>→</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </section>

        {/* ======================================================
            PRACTICE PHILOSOPHY SECTION
        ====================================================== */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 py-28 border-b border-white/10">
          
          <div className="
            bg-white/[0.015] border border-white/10 rounded-3xl p-10 lg:p-14
            grid lg:grid-cols-5 gap-12 items-center hover:border-white/20 transition-colors duration-300
          ">
            
            <div className="lg:col-span-3 space-y-6">
              <span className="text-xs font-mono text-blue-400 uppercase tracking-[0.2em]">The Practice Philosophy</span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-tight">
                The Cost of Uncoordinated Design
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                Many construction projects experience a structural gap. Architects draft layouts without evaluating how load framing affects the spaces, while engineers size steel and concrete using broad, oversized margins to save analysis time. This lack of initial coordination leads to expensive structural redesigns, delayed approvals, and contractor variation claims on site.
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                When you coordinate architectural planning, structural detailing, and quantity takeoffs under a single workflow, these gaps disappear. We verify load capacities, structural spans, and material takeoffs together, ensuring that your drawings translate cleanly to the site without budget surprises.
              </p>
            </div>

            <div className="lg:col-span-2 border-l border-white/10 pl-8 lg:pl-12 py-2 space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-white mb-2">01/ Spatially Integrated Structural Grids</h4>
                <p className="text-xs text-gray-400 leading-relaxed">Columns align with partition lines so room spans require no exposed structural beams.</p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-white mb-2">02/ Code-Optimized Steel Detailing</h4>
                <p className="text-xs text-gray-400 leading-relaxed">Reinforcing schedules match concrete stresses exactly, eliminating steel waste on site.</p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-white mb-2">03/ Audited Bills of Quantities</h4>
                <p className="text-xs text-gray-400 leading-relaxed">Detailed concrete and steel takeoffs verify that tender bids reflect actual drawing dimensions.</p>
              </div>
            </div>

          </div>

        </section>

        {/* ======================================================
            ACCORDION FAQ SECTION
        ====================================================== */}
        <section className="relative z-10 max-w-4xl mx-auto px-6 py-28 border-b border-white/10">
          
          <div className="text-center mb-20">
            <p className="text-xs text-blue-400 tracking-[0.2em] uppercase mb-4">Advisory FAQs</p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              Technical Advisory & Coordination FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className="border border-white/10 bg-white/[0.01] rounded-2xl overflow-hidden transition"
              >
                
                {/* FAQ Question */}
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-white/[0.015] transition"
                >
                  <span className="text-sm font-medium text-white tracking-wide">
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
                      <div className="px-6 pb-6 pt-2 border-t border-white/5 text-xs sm:text-sm text-gray-400 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            ))}
          </div>

        </section>

        {/* ======================================================
            CLOSING CTA SECTION
        ====================================================== */}
        <section className="relative z-10 max-w-5xl mx-auto px-6 py-28 text-center">
          
          <p className="text-xs text-blue-400 tracking-[0.25em] uppercase mb-4">Start Coordination</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight mb-6">
            Ready to Coordinate Your Build?
          </h2>
          
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-10 max-w-2xl mx-auto">
            Coordinate your project's structural details, spatial plans, and quantity takeoffs under a single practice. By resolving design conflicts early, we help you control material costs, ensure structural compliance, and hand over clear, buildable files to your contractor.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="
                bg-white text-black px-8 py-3 text-sm font-medium hover:bg-blue-500 hover:text-white transition-all duration-300 hover:-translate-y-0.5
              "
            >
              Request Engineering Consultation
            </Link>
            
            <Link
              to="/about"
              className="
                border border-white/20 px-8 py-3 text-sm text-gray-300 hover:border-blue-500 hover:text-blue-400 transition duration-200 hover:-translate-y-0.5
              "
            >
              Learn About Practice
            </Link>
          </div>

        </section>

      </div>
    </PageTransition>
  );
}