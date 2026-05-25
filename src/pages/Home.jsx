import PageTransition from "../components/animations/PageTransition";

import Hero from "../components/sections/Hero";
import TrustStrip from "../components/sections/TrustStrip";
import ServicesSection from "../components/sections/ServicesSection";
import ProjectsPreview from "../components/sections/ProjectsPreview";
import Insights from "../components/sections/Insights";
import Process from "../components/sections/Process";
import AboutPreview from "../components/sections/AboutPreview";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <PageTransition>
      <div className="relative">

        {/* ======================================================
            GLOBAL BACKGROUND SYSTEM
        ====================================================== */}

        {/* Image */}
        <div
          className="fixed inset-0 bg-cover bg-center opacity-[0.2] z-0 pointer-events-none"
          style={{
            backgroundImage: "url('/images/structure-bg.webp')",
          }}
        />

        {/* Blue Tint */}
        <div className="fixed inset-0 bg-blue-500/[0.05] z-0 pointer-events-none" />

        {/* Dark Base */}
        <div className="fixed inset-0 bg-[#0f0f0f]/85 z-0 pointer-events-none" />

        {/* ======================================================
            CONTENT
        ====================================================== */}

        <div className="relative z-10 pt-20">

          <Hero />

          <TrustStrip />

          <ServicesSection />

          <ProjectsPreview />

          <Insights />

          <Process />

          <AboutPreview />

          {/* 👇 Intentional visual break */}
          <div className="bg-[#0f0f0f]">
            <Contact />
          </div>

        </div>

      </div>
    </PageTransition>
  );
}