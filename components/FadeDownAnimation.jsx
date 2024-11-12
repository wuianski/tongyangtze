// components/AnimatedComponent.jsx

"use client";
import { motion } from "framer-motion";

export const fadeDownVariant = {
  initial: {
    opacity: 1,
    transition: {
      // delay: 1.5,
      duration: 0.3,
    },
  },
  animate: {
    opacity: 0,
    transition: {
      // delay: 1.5,
      duration: 0.3,
    },
  },
  // exit: {
  //   opacity: 0,
  //   transition: {
  //     duration: 0.3,
  //   },
  // },
};
const FadeDownAnimation = ({ children }) => {
  return (
    <motion.div
      variants={fadeDownVariant}
      initial="initial"
      animate="animate"
      // exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default FadeDownAnimation;
