"use client";

import React, { useState, useEffect } from "react";
/* Next */
import Image from "next/image";
/* MUI */
import { Box } from "@mui/material";
/* Framer Motion */
import { motion } from "framer-motion";
/* Image */
import front_desktop from "@/public/Index_Desktop.jpg";
import index_Mobile from "@/public/Index_Mobile.jpg";

export default function FrontImage() {
  // const [loading, setLoading] = useState(true);

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

  const [width, setWidth] = useState(820);
  // console.log(width);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  let image = front_desktop;
  if (width < 820) {
    image = index_Mobile;
  }

  return (
    <>
      {/* <motion.div variants={variants} initial="hidden" animate="visible"> */}
      {width == 820 ? (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: -1,
            width: "100vw",
            height: "100vh",
            backgroundColor: "#fff",
          }}
        ></Box>
      ) : (
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
            // loading="lazy"
            // onLoad={() => setLoading(false)}
          />
        </Box>
      )}
      {/* </motion.div> */}
    </>
  );
}
