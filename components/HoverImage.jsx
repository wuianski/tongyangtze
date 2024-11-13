"use client";

import React, { useState, useEffect } from "react";
/* Next */
import Image from "next/image";
import Link from "next/link";
/* MUI */
import { Box, Paper, Stack, styled } from "@mui/material";
/* Framer Motion */
import { motion } from "framer-motion";
/* image */
import work1 from "@/public/works/鳶飛戾天魚躍于淵.jpg";
import work2 from "@/public/works/任所適.jpg";
import work3 from "@/public/works//浩如烟海.jpg";
import work4 from "@/public/works/滄海之滉漾浥勺水不足以削其廣.jpg";

const myworks = [work1, work2, work3, work4];

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "left",
  color: "#aaa",
  width: "max-content",
  boxShadow: "none",
  background: "none",

  [theme.breakpoints.down("md")]: {
    width: "100%",
    textAlign: "left",
  },
}));

export default function HoverImage({ works }) {
  const [hoverId, setHoverId] = useState(0);

  // const [renderSrc, setRenderSrc] = useState(works[hoverId].src);
  const [renderSrc, setRenderSrc] = useState(myworks[hoverId]);

  useEffect(() => {
    // console.log(hoverId);
    // setRenderSrc(works[hoverId].src);
    setRenderSrc(myworks[hoverId]);
    // console.log(renderSrc);
  }, [hoverId]);

  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: (custom) => ({
      opacity: 1,
      transition: { delay: custom * 0.3, duration: 0.3 },
    }),
  };

  return (
    <>
      <Box
        pt={{ xs: 15, sm: 20 }}
        pl={{ xs: 0, sm: 15 }}
        pr={{ xs: 0, sm: 15 }}
      >
        <Stack direction="row" spacing={10}>
          <Item sx={{ width: { xs: "100%", sm: "30%" } }}>
            <motion.div
              custom={1}
              variants={variants}
              initial="hidden"
              animate="visible"
            >
              <Box
                sx={{
                  flexGrow: 1,
                  textAlign: { xs: "center", sm: "unset" },
                  width: "fit-content",
                  margin: "0 auto",
                }}
              >
                {works.map((w, index) => (
                  <Link key={index} href={`/works/${w.id}`}>
                    <Box
                      pb={2}
                      onMouseOver={() => setHoverId(index)}
                      sx={{
                        fontSize: 30,
                        fontStyle: "italic",
                        fontFamily: "baskerville-display-pt",
                      }}
                      className="hover_works"
                    >
                      {w.title}
                    </Box>
                  </Link>
                ))}
              </Box>
            </motion.div>
          </Item>
          <Item
            sx={{
              width: { xs: "0%", sm: "70%" },
              display: { xs: "none", sm: "block" },
            }}
          >
            <motion.div
              custom={0}
              variants={variants}
              initial="hidden"
              animate="visible"
            >
              <Box
                mt={1}
                sx={{
                  position: "relative",
                  width: "100%",
                  height: 500,
                  pointerEvents: "none",
                }}
              >
                <Image
                  priority={true}
                  placeholder="blur"
                  loading="eager"
                  src={renderSrc}
                  fill={true}
                  alt="Picture of the artwork"
                  style={{
                    objectFit: "contain",
                    objectPosition: "center top",
                  }}
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 60vw, 60vw"
                />
              </Box>
            </motion.div>
          </Item>
        </Stack>
      </Box>
    </>
  );
}
