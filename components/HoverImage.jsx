"use client";

import React, { useState, useEffect } from "react";
/* Next */
import Image from "next/image";
import Link from "next/link";
/* MUI */
import { Box, Paper, Stack, styled } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "left",
  color: "#aaaaaaff",
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
  const [renderSrc, setRenderSrc] = useState(works[hoverId].src);

  useEffect(() => {
    // console.log(hoverId);
    setRenderSrc(works[hoverId].src);
    // console.log(renderSrc);
  }, [hoverId]);
  return (
    <>
      <Box
        pt={{ xs: 16, sm: 18 }}
        pl={{ xs: 0, sm: 15 }}
        pr={{ xs: 0, sm: 15 }}
      >
        <Stack direction="row" spacing={10}>
          <Item sx={{ width: { xs: "100%", sm: "30%" } }}>
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
                    pt={1}
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
          </Item>
          <Item
            sx={{
              width: { xs: "0%", sm: "70%" },
              display: { xs: "none", sm: "block" },
            }}
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
                src={renderSrc}
                fill={true}
                alt="Picture of the artwork"
                style={{
                  objectFit: "contain",
                  objectPosition: "center top",
                }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
              />
            </Box>
          </Item>
        </Stack>
      </Box>
    </>
  );
}
