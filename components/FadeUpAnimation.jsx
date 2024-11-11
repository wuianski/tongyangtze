// components/AnimatedComponent.jsx

"use client";
import { motion } from "framer-motion";
import { exit } from "process";

export const fadeUpVariant = {
  initial: {
    opacity: 0,
    transition: {
      // delay: 1.5,
      duration: 0.3,
    },
  },
  animate: {
    opacity: 1,
    transition: {
      // delay: 1.5,
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      // delay: 1.5,
      duration: 0.3,
    },
  },
};
const FadeUpAnimation = ({ children }) => {
  return (
    <motion.div
      variants={fadeUpVariant}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default FadeUpAnimation;
