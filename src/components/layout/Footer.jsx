import { Link } from "react-router-dom";
import { contactConfig, generateWhatsAppLink } from "../../data/contact";

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-white/10 overflow-hidden bg-[#0a0a0a]">
      {/* BACKGROUND DECORATIONS */}
      <div className="
        absolute inset-0 opacity-[0.025]
        bg-[linear-gradient(to_right,white_1px,transparent_1px),
        linear-gradient(to_bottom,white_1px,transparent_1px)]
        bg-[size:70px_70px]
        pointer-events-none
      " />
      <div className="absolute inset-0 bg-blue-500/[0.01] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* ======================================================
            1. TOP GRID: Brand, Navigation, Contact
        ====================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/5 text-left">
          {/* Brand Summary */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-wide text-blue-400">
              D’JOE
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Operating at the intersection of structural engineering, architectural coordination, and construction intelligence. We design safe, cost-aware, and buildable real-world structures.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4 md:pl-8">
            <h4 className="text-xs uppercase tracking-widest text-blue-400 font-mono font-semibold">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-gray-300">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400 transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-blue-400 transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400 transition-colors">About</Link>
              </li>
              <li>
                <Link to="/insights" className="hover:text-blue-400 transition-colors">Insights</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4 md:pl-8">
            <h4 className="text-xs uppercase tracking-widest text-blue-400 font-mono font-semibold">
              Contact & Query
            </h4>
            <div className="space-y-2 text-xs text-gray-300">
              <p className="flex items-center gap-2">
                <span className="text-gray-500 font-mono text-[9px]">LOCATION:</span>
                <span>{contactConfig.location}</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-gray-500 font-mono text-[9px]">EMAIL:</span>
                <a href={`mailto:${contactConfig.email}`} className="hover:text-blue-400 transition-colors">
                  {contactConfig.email}
                </a>
              </p>
            </div>
            <div className="pt-2">
              <a
                href={generateWhatsAppLink("Hello DJOE Designs, I would like to initiate a project consultation.")}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-1.5
                  px-4 py-2 text-[11px] font-mono
                  border border-white/10
                  text-gray-300 bg-white/[0.01]
                  transition-all duration-300
                  hover:border-blue-400 hover:text-blue-400
                  hover:-translate-y-0.5 rounded-lg
                "
              >
                Start WhatsApp Query →
              </a>
            </div>
          </div>
        </div>

        {/* ======================================================
            2. MIDDLE: Social Links Centered
        ====================================================== */}
        <div className="py-8 flex flex-col items-center justify-center space-y-3">
          <span className="text-[9px] font-mono tracking-widest text-gray-500 uppercase">Connect With Us</span>
          <div className="flex gap-6 items-center justify-center">
            {contactConfig.socials.facebook && (
              <a
                href={contactConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-400 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z" />
                </svg>
              </a>
            )}
            {contactConfig.socials.instagram && (
              <a
                href={contactConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-400 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4.5 h-4.5 stroke-current fill-none stroke-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            )}
            {contactConfig.socials.linkedin && (
              <a
                href={contactConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            )}
            {contactConfig.socials.pinterest && (
              <a
                href={contactConfig.socials.pinterest}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-400 transition-colors"
                aria-label="Pinterest"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.41 7.61 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.966 1.406-5.966s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.607 0 11.985-5.36 11.985-11.987C23.97 5.39 18.592.022 12.017.022z" />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* ======================================================
            3. BOTTOM: Copyright
        ====================================================== */}
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-3 text-[10px] text-gray-500">
          <p>© {new Date().getFullYear()} D’JOE. All rights reserved.</p>
          <p className="text-gray-600 font-mono">
            Designed for execution • Coordinated for cost control • Built for stability
          </p>
        </div>
      </div>
    </footer>
  );
}