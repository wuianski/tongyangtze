"use client";

/* Next */
import Image from "next/image";
/* MUI */
import { Box, Paper, Stack, styled } from "@mui/material";
/* React-Slick */
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";

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
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  return (
    <>
      <Box pt={{ xs: 14, sm: 13 }} pl={{ xs: 0, sm: 0 }} pr={{ xs: 0, sm: 0 }}>
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
                      mb: "1vh",
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
                        mb={2}
                        sx={{
                          position: "relative",
                          width: { xs: "max-content", sm: "max-content" },
                          maxWidth: "90vw",
                          ml: "auto",
                          mr: "auto",
                          // width: "100%",
                          // height: { xs: "40vh", sm: "49vh" },
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
                            // objectFit: "contain",
                            // objectPosition: "center center",
                            width: "auto",
                            maxWidth: "100%",
                            height: "100%",
                            maxHeight: "49vh",
                          }}
                          quality={100}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                        />
                      </Box>
                      <Box
                        sx={{
                          fontSize: { xs: 14, sm: 16 },
                          fontFamily: "baskerville-display-pt",
                          color: "#fff",
                        }}
                      >
                        {w.title}
                      </Box>
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
            // mt={0}
            sx={{
              //   position: "absolute",
              //   display: "block",
              width: { xs: "80vw", sm: "50vw" },
              marginLeft: "auto",
              marginRight: "auto",
              //   bottom: 0,
              //   left: "25vw",
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
            >
              {work.works.map((w, index) => {
                return (
                  <Box key={index} sx={{ textAlign: "center" }}>
                    <Box
                      mb={2}
                      mr={1}
                      sx={{
                        position: "relative",
                        height: 68,
                        pointerEvents: "none",
                      }}
                    >
                      <Image
                        src={w.src}
                        // fill={true}
                        alt="Picture of the artwork"
                        width={0}
                        height={0}
                        style={{
                          // objectFit: "contain",
                          // objectPosition: "center top",
                          width: "auto",
                          height: "100%",
                        }}
                        quality={100}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                      />
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
