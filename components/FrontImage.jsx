"use client";

/* Next */
import Image from "next/image";
/* MUI */
import { Box } from "@mui/material";
/* Framer Motion */
import { motion } from "framer-motion";

export default function FrontImage({ image }) {
  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: (custom) => ({
      opacity: 1,
      // y: 0,
      transition: { delay: custom * 0.3, duration: 1.3 },
    }),
  };

  return (
    <>
      <motion.div
        custom={1}
        variants={variants}
        initial="hidden"
        animate="visible"
      >
        <Box>
          <Box
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              zIndex: -1,
              width: "100vw",
              height: "100vh",
            }}
          >
            <Image
              src={image}
              alt="front page image"
              fill={true}
              quality={100}
              style={{ objectFit: "cover", objectPosition: "center" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw"
              priority={true}
              placeholder="blur"
            />
          </Box>
        </Box>
      </motion.div>
    </>
  );
}
