// components/AnimatedComponent.jsx

"use client";
import { motion } from "framer-motion";

export const fadeUpVariant = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
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
      exit="initial"
    >
      {children}
    </motion.div>
  );
};

export default FadeUpAnimation;
