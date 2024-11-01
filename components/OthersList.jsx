"use client";

/* Next */
import Image from "next/image";
import Link from "next/link";
/* MUI */
import { Box, Paper, Stack, styled } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "left",
  color: "#151515ff",
  width: "max-content",
  boxShadow: "none",
  background: "none",
  borderRadius: 0,

  [theme.breakpoints.down("md")]: {
    width: "100%",
    textAlign: "left",
  },
}));

export default function OthersList({ others }) {
  return (
    <Box
      pt={{ xs: 15, sm: 17 }}
      pl={{ xs: 2, sm: 15 }}
      pr={{ xs: 2, sm: 15 }}
      pb={2}
    >
      <Stack direction="column" spacing={4}>
        {others.map((other, index) => (
          <Item sx={{ width: { xs: "100%", sm: "100%" } }} key={index}>
            <Box>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={0}>
                <Item sx={{ width: { xs: "100%", sm: "100%" } }}>
                  <Box
                    mt={2}
                    sx={{
                      position: "relative",
                      width: { xs: "100%", sm: 751 / 2 },
                      height: 416 / 2,
                    }}
                  >
                    <Image
                      src={other.src}
                      alt="cover image"
                      fill={true}
                      quality={100}
                      style={{ objectFit: "cover", objectPosition: "center" }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                    />
                  </Box>
                </Item>
                <Item
                  sx={{
                    width: { xs: "100%", sm: "100%" },
                    borderBottom: "solid 1px #000",
                  }}
                >
                  <Box mt={1} sx={{ fontSize: 30, color: "#000000ff" }}>
                    {other.title}
                  </Box>
                  <Box pt={1} sx={{ fontSize: 15 }}>
                    {other.year}
                  </Box>
                  <Box pt={4} sx={{ fontSize: 15 }}>
                    {other.context}
                  </Box>
                </Item>
              </Stack>
            </Box>
          </Item>
        ))}
      </Stack>
    </Box>
  );
}
