"use client";

import { useEffect } from "react";
/* Next */
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
/* MUI */
import { Box, Paper, Stack, styled } from "@mui/material";
/* Components */
import AboutList from "@/components/AboutList";
import ExhibitionTabs from "@/components/ExhibitionTabs";

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "left",
  color: "#222222ff",
  width: "max-content",
  boxShadow: "none",
  background: "none",

  [theme.breakpoints.down("md")]: {
    width: "100%",
    textAlign: "left",
  },
}));

export default function AbouStack({
  aboutContext,
  articles,
  presses,
  currentExs,
  pastExs,
  upcomingExs,
}) {
  return (
    <>
      <Box pt={{ xs: 16, sm: 17 }} pl={{ xs: 2, sm: 2 }} pr={{ xs: 2, sm: 15 }}>
        <Stack direction={{ xs: "column-reverse", sm: "row" }} spacing={0}>
          <Item sx={{ width: { xs: "100%", sm: "80%" } }}>
            <Box sx={{ color: "#222222ff" }}>
              <Box mt={10} sx={{ fontSize: 30 }}>
                TONG YANG TZE
              </Box>
              <Box sx={{ fontSize: 15 }}>
                <Box mt={6} mb={-4}>
                  {aboutContext}
                </Box>
                <Box pt={0} pb={20}>
                  <Box pb={10} id="exhibition"></Box>
                  <ExhibitionTabs
                    currentExs={currentExs}
                    pastExs={pastExs}
                    upcomingExs={upcomingExs}
                  />
                </Box>
                <Box pt={8} pb={20} sx={{ width: "50%" }}>
                  <Box pb={10} id="article"></Box>
                  <Box>ARTICLE</Box>
                  <Box pt={1}>
                    <AboutList timelines={articles} />
                  </Box>
                </Box>
                <Box pt={8} pb={60} sx={{ width: "50%" }}>
                  <Box pb={10} id="press"></Box>
                  <Box>PRESS</Box>
                  <Box pt={1}>
                    <AboutList timelines={presses} />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Item>
          <Item sx={{ width: { xs: "100%", sm: "100%" } }}>
            <Box mt={1} sx={{ fontSize: 30 }}>
              <Box
                sx={{
                  position: { xs: "relative", sm: "fixed" },
                  top: 0,
                  right: 0,
                  zIndex: -1,
                  width: { xs: "calc(100% - 0px)", sm: "50vw" },
                  height: { xs: "30vh", sm: "100vh" },
                }}
                mb={6}
              >
                <Image
                  src={"/profile.jpeg"}
                  alt="profile picture"
                  fill={true}
                  quality={100}
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                />
              </Box>
            </Box>
          </Item>
        </Stack>
      </Box>
    </>
  );
}
