"use client";

import { motion } from "framer-motion";

export default function Template({ children }) {
  return (
    <motion.div
      initial={{ y: 0, opacity: 0.5 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", duration: 1 }}
    >
      {children}
    </motion.div>
  );
}
