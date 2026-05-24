/**
 * -------------------------------------------------------------------
 * Section: Contact
 * -------------------------------------------------------------------
 * System-Aligned Call-To-Action Section
 * -------------------------------------------------------------------
 */

import { Link } from "react-router-dom";
import { generateWhatsAppLink } from "../../data/contact";

export default function Contact() {
  return (
    <section className="relative overflow-hidden">

      {/* ======================================================
          BACKGROUND SYSTEM (MATCHES FOOTER STYLE)
      ====================================================== */}

      {/* GRID LAYER */}
      <div
        className="
          absolute inset-0 opacity-[0.035]
          bg-[linear-gradient(to_right,white_1px,transparent_1px),
          linear-gradient(to_bottom,white_1px,transparent_1px)]
          bg-[size:60px_60px]
          pointer-events-none
        "
      />

      {/* SUBTLE BLUE TINT */}
      <div className="absolute inset-0 bg-blue-500/[0.015] pointer-events-none" />

      {/* DOMINANT DARK BASE */}
      <div className="absolute inset-0 bg-[#0b0b0b]/95 pointer-events-none" />

      {/* ================= CONTAINER ================= */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-28 text-center">

        {/* HEADLINE */}
        <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
          Ready to Start Your Project?
        </h2>

        {/* TEXT */}
        <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed mb-12">
          Structural design, architectural planning, BOQ preparation, and construction support — coordinated to help your project move smoothly from idea to execution.
        </p>

        {/* CTA */}
        <div className="flex flex-wrap justify-center gap-4">

          <a
            href={generateWhatsAppLink("Hello DJOE Designs, I viewed your project portfolio and would like to discuss a project.")}
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-white text-black
              px-7 py-3 text-sm font-medium
              transition-all duration-200
              hover:bg-blue-500 hover:text-white
              hover:-translate-y-0.5
            "
          >
            Start Project Discussion
          </a>

          <Link
            to="/services"
            className="
              border border-white/20
              px-7 py-3 text-sm
              transition-all duration-200
              hover:border-blue-500/40
              hover:text-blue-400
              hover:-translate-y-0.5
            "
          >
            View Services
          </Link>

        </div>

      </div>
    </section>
  );
}