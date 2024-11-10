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

function NextArrow_thumb(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="NextArrow_thumb"
      style={{
        ...style,
        background: "none",
        position: "relative",
        right: "-38px",
        top: "-72px",
        float: "right",
      }}
      onClick={onClick}
    >
      <Box
        sx={{
          opacity: className.includes("slick-disabled") ? 0.25 : 1,
          cursor: className.includes("slick-disabled") ? "unset" : "pointer",
        }}
      >
        <ArrrowRight />
      </Box>
    </div>
  );
}

function PrevArrow_thumb(props) {
  const { className, style, onClick } = props;
  // console.log(className.includes("slick-disabled"));
  return (
    <Box
      // className={className}
      style={{
        ...style,
        background: "none",
        position: "relative",
        left: "-38px",
        // top: "60px",
        width: "fit-content",
      }}
      sx={{ top: { xs: "54px", sm: "63px" } }}
      onClick={onClick}
    >
      <Box
        sx={{
          opacity: className.includes("slick-disabled") ? 0.25 : 1,
          cursor: className.includes("slick-disabled") ? "unset" : "pointer",
        }}
      >
        <ArrrowLeft />
      </Box>
    </Box>
  );
}

export default function WorkContent({ work }) {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  // const [activeSlide, setActiveSlide] = useState(0);
  // console.log(activeSlide);

  return (
    <>
      <Box pt={{ xs: 12, sm: 17 }} pl={{ xs: 0, sm: 0 }} pr={{ xs: 0, sm: 0 }}>
        <div className="slider-container">
          <Box>
            <Slider
              asNavFor={nav2}
              ref={(slider) => (sliderRef1 = slider)}
              nextArrow={<NextArrow />}
              prevArrow={<PrevArrow />}
              adaptiveHeight={false}
            >
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
                      <Box sx={{ fontSize: { xs: 12, sm: 14 } }}>{w.info}</Box>
                      <Box sx={{ fontSize: { xs: 12, sm: 14 } }}>{w.year}</Box>
                      <Box sx={{ fontSize: { xs: 12, sm: 14 } }}>{w.size}</Box>
                    </Box>
                  </Box>
                );
              })}
            </Slider>
          </Box>
          <Box
            mt={{ xs: -3, sm: -1 }}
            sx={{
              width: { xs: "70vw", sm: "50vw" },
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Slider
              asNavFor={nav1}
              ref={(slider) => (sliderRef2 = slider)}
              className="slider variable-width"
              infinite={false}
              // centerMode={true}
              slidesToShow={1}
              slidesToScroll={1}
              swipeToSlide={true}
              focusOnSelect={true}
              variableWidth={true}
              nextArrow={<NextArrow_thumb />}
              prevArrow={<PrevArrow_thumb />}
              // beforeChange={(current, next) => {
              //   setActiveSlide(next);
              // }}
            >
              {work.works.map((w, index) => {
                return (
                  <Box key={index} sx={{ textAlign: "center" }} mt={1}>
                    <motion.div whileHover={{ y: -8 }}>
                      <Box
                        mb={2}
                        mr={2} // margin between images
                        sx={{
                          position: "relative",
                          height: { xs: 48, sm: 68 },
                          pointerEvents: "none",
                        }}
                      >
                        <Image
                          src={w.src}
                          alt="Picture of the artwork"
                          width={0}
                          height={0}
                          style={{ width: "auto", height: "100%" }}
                          quality={100}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </Box>
                    </motion.div>
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
