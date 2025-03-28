"use client";

/* Next */
import Image from "next/image";
/* MUI */
import { Box } from "@mui/material";
/* React-Slick */
import React, { useRef } from "react";
import Slider from "react-slick";
/* Icons */
import ArrrowRight from "@/public/icons/arrow-right.svg";
import ArrrowLeft from "@/public/icons/arrow-left.svg";
/* Framer Motion */
import { motion } from "framer-motion";
/* Custom Hook */
import { useDraggable } from "react-use-draggable-scroll";

export default function WorkContent({ work }) {
  /* Draggable Scroll */
  const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
  const { events } = useDraggable(ref);

  /* React-Slick Settings */
  const settings = {
    appendDots: (dots) => (
      <div>
        <div
          className="slick-dots slick-thumb"
          style={{ margin: "0px", display: "flex", overflowX: "scroll" }}
          {...events}
          ref={ref}
        >
          {dots}
        </div>
      </div>
    ),
    customPaging: function (i) {
      return (
        work.works[i].src && (
          <a>
            <Box
              mt={1}
              mb={0}
              mr={{ xs: 1, sm: 2 }} // margin between images
              sx={{
                position: "relative",
                height: { xs: 48, sm: 68 },
                pointerEvents: "none",
              }}
            >
              <Image
                src={work.works[i].src}
                alt="Picture of the artwork"
                width={0}
                height={0}
                style={{ width: "auto", height: "100%" }}
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={true}
              />
            </Box>
          </a>
        )
      );
    },
    dots: true,
    // dotsClass: "slick-dots slick-thumb",
    infinite: false,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    waitForAnimate: false,
  };

  /* Framer Motion */
  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 0.3, duration: 0.3 },
    },
  };

  return (
    <>
      <Box pt={{ xs: 12, sm: 17 }} pl={{ xs: 0, sm: 0 }} pr={{ xs: 0, sm: 0 }}>
        <motion.div variants={variants} initial="hidden" animate="visible">
          <div className="slider-container">
            <Box>
              <Slider {...settings}>
                {work.works.map((w, index) => {
                  return (
                    <Box
                      key={index}
                      sx={{
                        textAlign: "center",
                        mb: { xs: "0dvh", sm: "0.5dvh" },
                        height: "68dvh",
                        position: "relative",
                      }}
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <Box
                          mb={{ xs: 1, sm: 2 }}
                          sx={{
                            position: "relative",
                            width: { xs: "max-content", sm: "max-content" },
                            maxWidth: "90vw",
                            ml: "auto",
                            mr: "auto",
                            pointerEvents: "none",
                          }}
                        >
                          <Image
                            src={w.src}
                            // fill={true}
                            width={0}
                            height={0}
                            alt="Picture of the artwork"
                            style={{
                              width: "auto",
                              maxWidth: "100%",
                              height: "100%",
                              maxHeight: "49dvh",
                            }}
                            quality={100}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
                            priority={true}
                          />
                        </Box>
                        <Box
                          sx={{
                            fontSize: { xs: 16, sm: 18 },
                            fontFamily: "baskerville-display-pt",
                            color: "#fff",
                          }}
                          pb={1}
                        >
                          {w.title}
                        </Box>
                        {w.info2 ? (
                          <Box sx={{ fontSize: { xs: 12, sm: 14 } }}>
                            {w.info2}
                          </Box>
                        ) : null}
                        <Box
                          sx={{ fontSize: { xs: 12, sm: 14 } }}
                          dangerouslySetInnerHTML={{ __html: w.info }}
                        ></Box>

                        <Box sx={{ fontSize: { xs: 12, sm: 14 } }}>
                          {w.year}
                        </Box>
                        <Box sx={{ fontSize: { xs: 12, sm: 14 } }}>
                          {w.size}
                        </Box>
                      </Box>
                    </Box>
                  );
                })}
              </Slider>
            </Box>
          </div>
        </motion.div>
      </Box>
    </>
  );
}
