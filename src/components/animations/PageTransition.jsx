/**
 * -------------------------------------------------------------------
 * Component: PageTransition
 * -------------------------------------------------------------------
 * Wraps all pages to provide ultra-light micro-animations when entering.
 * Also ensures every page always starts from top on navigation.
 * -------------------------------------------------------------------
 */

import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function PageTransition({ children }) {
  const location = useLocation();

  // ✅ FORCE INSTANT SCROLL TO TOP ON EVERY ROUTE CHANGE
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}