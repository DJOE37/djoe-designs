import { Link } from "react-router-dom";
import { contactConfig, generateWhatsAppLink } from "../../data/contact";

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-white/10 overflow-hidden">

      {/* GRID */}
      <div className="
        absolute inset-0 opacity-[0.03]
        bg-[linear-gradient(to_right,white_1px,transparent_1px),
        linear-gradient(to_bottom,white_1px,transparent_1px)]
        bg-[size:70px_70px]
        pointer-events-none
      " />

      {/* BLUE GLOW DEPTH */}
      <div className="absolute inset-0 bg-blue-500/[0.015] pointer-events-none" />

      {/* DARK BASE */}
      <div className="absolute inset-0 bg-[#0b0b0b]/95 pointer-events-none" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14">

        {/* BRAND BLOCK & CTA */}
        <div className="space-y-6 text-left">

          <h3 className="text-2xl font-semibold tracking-wide text-blue-400">
            D’JOE
          </h3>

          <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
            We operate at the intersection of structural engineering, architectural coordination,
            and construction intelligence... developing solutions that translate design intent into
            safe, cost-aware, and buildable real-world structures.
          </p>

          <div className="w-10 h-px bg-blue-400/40" />

          {/* CTA TEXT & WHATSAPP BUTTON */}
          <div className="space-y-4">
            <p className="text-xs text-gray-500 leading-relaxed max-w-sm">
              Open to structural design, BOQ development, and construction consultancy. Start a project coordination query directly on WhatsApp.
            </p>

            <a
              href={generateWhatsAppLink("Hello DJOE Designs, I viewed your project portfolio and would like to discuss a similar project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center justify-center
                px-5 py-2.5 text-sm
                border border-white/15
                text-gray-300
                transition-all duration-300
                hover:border-blue-400
                hover:text-blue-400
                hover:-translate-y-0.5
              "
            >
              Start a Conversation →
            </a>
          </div>

        </div>

        {/* CONTACT & SOCIALS */}
        <div className="space-y-8 text-left md:pl-10">

          {/* Location & Email Details */}
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.25em] text-blue-400">
              Contact & Consultation
            </p>

            <div className="space-y-3 text-sm text-gray-300">
              <p className="flex items-center gap-2">
                <span className="text-blue-400 font-mono text-xs">LOCATION:</span>
                <span>{contactConfig.location}</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-blue-400 font-mono text-xs">EMAIL:</span>
                <a href={`mailto:${contactConfig.email}`} className="hover:text-blue-400 transition">
                  {contactConfig.email}
                </a>
              </p>
            </div>
          </div>

          <div className="w-10 h-px bg-blue-400/40" />

          {/* SOCIAL MEDIA ICONS */}
          <div className="space-y-3">
            <p className="text-[10px] font-mono tracking-widest text-gray-500 uppercase">Follow Us</p>
            <div className="flex gap-4 items-center">
              <a
                href={contactConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-400 transition"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z" />
                </svg>
              </a>
              <a
                href={contactConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-400 transition"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 stroke-current fill-none stroke-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href={contactConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-400 transition"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href={contactConfig.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-400 transition"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="relative z-10 border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">

          <p>© {new Date().getFullYear()} D’JOE. All rights reserved.</p>

          <p className="text-gray-600">
            Built with engineering precision, design clarity, and execution discipline.
          </p>

        </div>
      </div>

    </footer>
  );
}