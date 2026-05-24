/**
 * -------------------------------------------------------------------
 * Component: PageTransition
 * -------------------------------------------------------------------
 * Wraps all pages to provide smooth transitions between routes.
 * Also ensures every page always starts from top on navigation.
 *
 * Motion Behavior:
 * - Fade + slight upward motion when entering
 * - Fade out when exiting
 *
 * Extra Feature:
 * - Auto scroll to top on route change (GLOBAL FIX)
 * -------------------------------------------------------------------
 */

import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// ========================
// ANIMATION VARIANTS
// ========================
const variants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
};

export default function PageTransition({ children }) {
  const location = useLocation();

  // ✅ FORCE SCROLL TO TOP ON EVERY ROUTE CHANGE
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // you can change to "smooth" if you want animation
    });
  }, [location.pathname]);

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}