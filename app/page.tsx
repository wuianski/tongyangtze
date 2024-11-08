"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import { StaticImageData } from "next/image";
/* Image */
import front_desktop from "@/public/Index_Desktop.jpg";
import index_Mobile from "@/public/Index_Mobile.jpg";

export default function Home() {
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

  let image: StaticImageData = front_desktop;
  if (width < 820) {
    image = index_Mobile;
  }

  return (
    <>
      {width == 820 ? (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: -1,
            width: "100vw",
            height: "100vh",
            backgroundColor: "#000",
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
            priority={true}
            placeholder="blur"
          />
        </Box>
      )}
    </>
  );
}
