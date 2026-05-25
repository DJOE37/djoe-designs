import React from "react";
import { motion } from "framer-motion";

/**
 * Reveal Component
 * A lightweight wrapper that animates children elements once they enter the viewport.
 * Uses a subtle fade + translate-Y transition without exit/heavy scaling effects.
 */
export default function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
        delay: delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
