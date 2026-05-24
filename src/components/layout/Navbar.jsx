import { useLocation } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

// ========================
// NAV ITEMS
// ========================
const navItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Insights", path: "/insights" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

// ========================
// NAVBAR COMPONENT
// ========================
export default function Navbar() {
  const location = useLocation();

  const pageName =
    navItems.find((item) => item.path === "/" ? location.pathname === "/" : location.pathname.startsWith(item.path))?.name || "";

  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  
  // ========================
  // LOCK SCROLL
  // ========================
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  // ========================
  // ESC CLOSE
  // ========================
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // ========================
  // SCROLL BEHAVIOR
  // ========================
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY;

      if (Math.abs(diff) < 8) return;

      if (diff > 0 && currentScrollY > 80) {
        setVisible(false); // down
      } else {
        setVisible(true); // up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header
        className={`
          fixed top-0 w-full z-50 border-b border-white/10
          bg-[#0f0f0f]/90 backdrop-blur-md
          transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${visible ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* BRAND */}
          <div className="flex items-center gap-3">

            <Link to="/" className="text-lg font-semibold tracking-wide">
              D’JOE
            </Link>

            {/* ✅ Page indicator (not on homepage) */}
            {location.pathname !== "/" && (
              <>
                <span className="text-gray-500">/</span>
                <span className="text-sm text-gray-300">
                  {pageName}
                </span>
              </>
            )}

          </div>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden md:flex items-center gap-10 text-sm relative">

            {navItems.map((item) => {
              const active = item.path === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(item.path);

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative transition-colors duration-200 ${
                    active
                      ? "text-white"
                      : "text-gray-300 hover:text-blue-400"
                  }`}
                >
                  {item.name}

                  {/* ✅ ACTIVE INDICATOR */}
                  {active && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute left-0 -bottom-2 w-full h-[2px] bg-blue-400/70"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}

          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="
                border border-white/20 px-5 py-2 text-sm
                transition-all duration-200
                hover:border-blue-500/40
                hover:text-blue-400
                hover:-translate-y-0.5
              "
            >
              Request Consultation
            </Link>
          </div>

          {/* ================= MOBILE TOGGLE ================= */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-6 h-6 flex items-center justify-center"
          >
            <span
              className={`
                absolute w-5 h-[2px] bg-white transition-all duration-300
                ${isOpen ? "rotate-45" : "-translate-y-1.5"}
              `}
            />
            <span
              className={`
                absolute w-5 h-[2px] bg-white transition-all duration-300
                ${isOpen ? "opacity-0" : "opacity-100"}
              `}
            />
            <span
              className={`
                absolute w-5 h-[2px] bg-white transition-all duration-300
                ${isOpen ? "-rotate-45" : "translate-y-1.5"}
              `}
            />
          </button>

        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <>
              {/* OVERLAY */}
              <motion.div
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={() => setIsOpen(false)}
              />

              {/* PANEL */}
              <motion.div
                className="fixed right-0 top-0 h-full w-72 z-[101] border-l border-white/10 overflow-hidden"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >

                {/* BACKGROUND */}
                <div className="absolute inset-0 bg-blue-500/[0.06]" />
                <div className="absolute inset-0 bg-[#0f0f0f]/85" />

                {/* CONTENT */}
                <div className="relative z-10 flex flex-col h-full p-6">

                  {/* CLOSE */}
                  <div className="flex justify-end mb-8">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="text-gray-300 hover:text-blue-400 transition"
                    >
                      Close
                    </button>
                  </div>

                  {/* LINKS */}
                  <div className="flex flex-col gap-6 text-lg">
                    {navItems.map((item) => {
                      const active = item.path === "/"
                        ? location.pathname === "/"
                        : location.pathname.startsWith(item.path);

                      return (
                        <Link
                          key={item.name}
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className={`transition ${
                            active
                              ? "text-blue-400"
                              : "text-gray-300 hover:text-blue-400"
                          }`}
                        >
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>

                  {/* CTA */}
                  <div className="mt-auto pt-10">
                    <Link
                      to="/contact"
                      onClick={() => setIsOpen(false)}
                      className="
                        block text-center
                        border border-white/20 px-5 py-3 text-sm
                        hover:border-blue-500/40
                        hover:text-blue-400
                        transition
                      "
                    >
                      Request Consultation
                    </Link>
                  </div>

                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}