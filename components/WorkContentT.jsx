"use client";

/* Next */
import Image from "next/image";
/* MUI */
import { Box } from "@mui/material";
/* React-Slick */
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
/* Icons */
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrrowRight from "@/public/icons/arrow-right.svg";
import ArrrowLeft from "@/public/icons/arrow-left.svg";
/* Framer Motion */
import { motion } from "framer-motion";

/* Customizing React-Slick's arrow */
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

export default function WorkContent({ work }) {
  const [activeSlide, setActiveSlide] = useState(0);
  // console.log(activeSlide);

  const settings = {
    customPaging: function (i) {
      return (
        work.works[i].src && (
          <motion.div whileHover={{ y: -8 }}>
            <a>
              <Box
                mt={2}
                mb={0}
                mr={2} // margin between images
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
                />
              </Box>
            </a>
          </motion.div>
        )
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    beforeChange: (current, next) => {
      setActiveSlide(next);
    },
  };

  return (
    <>
      <Box pt={{ xs: 12, sm: 17 }} pl={{ xs: 0, sm: 0 }} pr={{ xs: 0, sm: 0 }}>
        <div className="slider-container">
          <Box>
            <Slider {...settings}>
              {work.works.map((w, index) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      textAlign: "center",
                      mb: { xs: "0vh", sm: "0.5vh" },
                      height: "68vh",
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
                            maxHeight: "49vh",
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
                      {/* <Box sx={{ fontSize: { xs: 12, sm: 14 } }}>{w.info}</Box> */}
                      <Box
                        sx={{ fontSize: { xs: 12, sm: 14 } }}
                        dangerouslySetInnerHTML={{ __html: w.info }}
                      ></Box>

                      <Box sx={{ fontSize: { xs: 12, sm: 14 } }}>{w.year}</Box>
                      <Box sx={{ fontSize: { xs: 12, sm: 14 } }}>{w.size}</Box>
                    </Box>
                  </Box>
                );
              })}
            </Slider>
          </Box>
        </div>
      </Box>
    </>
  );
}
