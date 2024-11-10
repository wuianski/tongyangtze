// "use client";

// import React, { useState, useEffect } from "react";
/* Next */
import Image from "next/image";
/* MUI */
import { Box } from "@mui/material";
/* Framer Motion */
import { delay, motion } from "framer-motion";
/* Image */
import front_desktop from "@/public/Index_Desktop.jpg";
import index_Mobile from "@/public/Index_Mobile.jpg";
import FadeComponent from "@/components/FadeComponent";

export default function FrontImage() {
  return (
    <>
      <FadeComponent>
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: -1,
            width: "100vw",
            height: "100vh",
            // backgroundColor: "#fff",
          }}
        >
          <Image
            src={front_desktop}
            alt="front page image"
            fill={true}
            quality={100}
            style={{ objectFit: "cover", objectPosition: "center" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw"
            priority={true}
            placeholder="blur"
          />
        </Box>
      </FadeComponent>
    </>
  );
}
