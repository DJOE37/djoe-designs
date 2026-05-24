import { useParams, Link } from "react-router-dom";
import PageTransition from "../components/animations/PageTransition";
import { insights } from "../data/insights/index";
import { generateWhatsAppLink } from "../data/contact";

export default function InsightDetail() {
  const { id } = useParams();

  // Find insight based on URL parameter
  const insight = insights.find((item) => item.id === id);

  // Fallback if insight not found
  if (!insight) {
    return (
      <PageTransition>
        <div className="max-w-4xl mx-auto px-6 py-24 text-left">
          <p className="text-gray-400">Insight report not found.</p>
          <Link to="/insights" className="text-blue-400 hover:underline mt-4 inline-block">
            ← Return to Insights Platform
          </Link>
        </div>
      </PageTransition>
    );
  }

  // Get related insights (prioritizing same category)
  const getRelatedInsights = () => {
    const sameCategory = insights.filter(item => item.category === insight.category && item.id !== insight.id);
    const otherCategory = insights.filter(item => item.category !== insight.category && item.id !== insight.id);
    const combined = [...sameCategory, ...otherCategory];
    return combined.slice(0, 3); // Return up to 3 related insights
  };

  const relatedList = getRelatedInsights();

  return (
    <PageTransition>
      <section className="w-full relative overflow-hidden bg-[#0f0f0f] pb-20">
        
        {/* GRID BACKGROUND */}
        <div className="
          absolute inset-0 opacity-[0.035]
          bg-[linear-gradient(to_right,white_1px,transparent_1px),
          linear-gradient(to_bottom,white_1px,transparent_1px)]
          bg-[size:70px_70px]
          pointer-events-none
        " />

        {/* BLUE SYSTEM TINT */}
        <div className="absolute inset-0 bg-blue-500/[0.02] pointer-events-none" />

        {/* DARK BASE */}
        <div className="absolute inset-0 bg-[#0f0f0f]/95 pointer-events-none" />

        {/* ================= CONTAINER ================= */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">

          {/* BREADCRUMB */}
          <div className="text-left mb-6">
            <Link to="/insights" className="text-xs text-gray-500 hover:text-blue-400 transition flex items-center gap-1.5">
              <span>←</span> Knowledge Platform
            </Link>
          </div>

          {/* HERO BANNER WITH COVER IMAGE */}
          <div className="relative h-[250px] md:h-[450px] rounded-3xl overflow-hidden border border-white/10 group mb-12">
            <img 
              src={insight.image} 
              alt={insight.title} 
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
            />
            {/* Gradient overlay for readability and premium feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/10" />
            
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-10 space-y-3 text-left">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-[10px] font-mono text-blue-400 bg-[#0f0f0f]/90 border border-blue-500/25 px-2.5 py-1 rounded-md uppercase tracking-wider backdrop-blur-sm shadow-md">
                  {insight.category}
                </span>
                <span className="text-[9px] text-gray-300 font-mono tracking-wide">{insight.readTime}</span>
              </div>
              <h1 className="text-2xl md:text-5xl font-semibold leading-tight text-white max-w-4xl drop-shadow-md">
                {insight.title}
              </h1>
            </div>
          </div>

          {/* ======================================================
              MAIN CONTENT & SIDEBAR TAKEAWAYS
          ====================================================== */}
          <div className="grid lg:grid-cols-3 gap-12 text-left">
            {/* Structured Advisory Sections (left 2/3 cols) */}
            <div className="lg:col-span-2 space-y-10">
              <p className="text-gray-300 text-base md:text-lg leading-relaxed border-l-2 border-blue-500 pl-4 py-1 italic font-sans">
                {insight.summary}
              </p>
              
              <div className="space-y-8">
                {insight.sections?.map((sec, index) => (
                  <div key={index} className="space-y-3">
                    <h3 className="text-lg md:text-xl font-semibold text-white tracking-wide">
                      {sec.title}
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed max-w-3xl">
                      {sec.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Takeaways Panel (right 1/3 col) */}
            <div className="lg:col-span-1">
              <div className="border border-white/10 p-6 bg-white/[0.01] rounded-2xl space-y-6">
                <h4 className="text-xs uppercase tracking-widest text-blue-400 font-mono">
                  Advisory Guidelines
                </h4>
                
                <div className="space-y-5">
                  {insight.takeaways.map((takeaway, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-gray-500">RULE 0{idx + 1}</span>
                        <div className="h-px bg-white/10 flex-1" />
                      </div>
                      <p className="text-xs text-gray-300 leading-relaxed">
                        {takeaway}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RELATED ADVISORY ARTICLES */}
          {relatedList.length > 0 && (
            <div className="border-t border-white/10 pt-16 mt-16 space-y-8 text-left">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 font-mono">Related Advisory Analyses</h4>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {relatedList.map((rel) => (
                  <Link
                    key={rel.id}
                    to={`/insights/${rel.id}`}
                    className="
                      group block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]
                      transition-all duration-300 hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.12)]
                      hover:-translate-y-1
                    "
                  >
                    <div className="relative h-24 sm:h-32 overflow-hidden">
                      <img
                        src={rel.image}
                        alt={rel.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                      <span className="absolute bottom-3 left-4 text-[10px] font-mono text-blue-400 bg-[#0f0f0f]/90 border border-blue-500/25 px-2.5 py-1 rounded-md uppercase tracking-wider backdrop-blur-sm shadow-md">
                        {rel.category}
                      </span>
                    </div>
                    <div className="p-3 sm:p-4 space-y-1.5 sm:space-y-2">
                      <h5 className="text-xs font-semibold text-white group-hover:text-blue-400 transition duration-200 line-clamp-2 leading-snug">
                        {rel.title}
                      </h5>
                      <span className="text-[10px] sm:text-[11px] text-blue-400/80 font-medium group-hover:text-white transition duration-200 flex items-center gap-1">
                        Explore Insight <span className="transition-transform group-hover:translate-x-1">→</span>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* ADVISORY CONSULTATION CTA */}
          <div className="text-center border-t border-white/10 pt-16 mt-16 max-w-3xl mx-auto space-y-6">
            <h3 className="text-2xl font-semibold text-white">
              Get Professional Input
            </h3>
            <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Coordinating design parameters, cost control guidelines, and execution monitoring under a single disciplined engineering practice.
            </p>
            <a
              href={generateWhatsAppLink(`Hello DJOE Designs, I read your advisory report on "${insight.title}" and would like to request a technical consultation.`)}
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
