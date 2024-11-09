"use client";

import React, { useState } from "react";
/* Next */
import Image from "next/image";
/* MUI */
import { Box } from "@mui/material";
/* Framer Motion */
import { motion } from "framer-motion";

export default function FrontImage({ image }) {
  const [loading, setLoading] = useState(true);

  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      // transition: { delay: custom * 0.3, duration: 0.6 },
      transition: {
        duration: 1.2,
        ease: "easeIn",
        ease: [0.17, 0.67, 0.83, 0.67],
      },
    },
  };

  return (
    <>
      <motion.div variants={variants} initial="hidden" animate="visible">
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
            // priority={true}
            placeholder="blur"
            loading="lazy"
            onLoad={() => setLoading(false)}
          />
        </Box>
      </motion.div>
    </>
  );
}
