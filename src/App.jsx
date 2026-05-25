/**
 * -------------------------------------------------------------------
 * App.jsx
 * -------------------------------------------------------------------
 * Root Application Controller
 *
 * Defines:
 * - Global layout (Navbar → Page → Footer)
 * - Routing system with page transitions
 *
 * Design Principle:
 * Keep layout structured while enabling smooth navigation flow.
 * -------------------------------------------------------------------
 */

import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// ========================
// Pages (Static Imports)
// ========================
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Insights from "./pages/Insights";
import About from "./pages/About";
import Contact from "./components/sections/Contact";

// ========================
// Pages (Lazy Loaded)
// ========================
const ProjectDetail = React.lazy(() => import("./pages/ProjectDetail"));
const InsightDetail = React.lazy(() => import("./pages/InsightDetail"));

// ========================
// Layout Components
// ========================
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

export default function App() {

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen overflow-x-hidden">

      {/* ================= GLOBAL NAVIGATION ================= */}
      <Navbar />

      {/* ================= ROUTE SYSTEM ================= */}
      <main>

        {/* 
          AnimatePresence enables exit + enter animations 
          mode="wait" ensures smooth transition (one page exits before next enters)
        */}
          <Suspense fallback={
            <div className="min-h-[60vh] flex items-center justify-center text-gray-500 font-mono text-xs">
              Loading...
            </div>
          }>
            <Routes>

              {/* ---------------- PRIMARY PAGES ---------------- */}
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />

              {/* ---------------- DYNAMIC ROUTES ---------------- */}
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/insights/:id" element={<InsightDetail />} />

            </Routes>
          </Suspense>

      </main>

      {/* ================= GLOBAL FOOTER ================= */}
      <Footer />

    </div>
  );
}
``