"use client";

import { useEffect, Suspense, use } from "react";
/* Next */
import Image from "next/image";
import { useSearchParams } from "next/navigation";
/* MUI */
import { Box, Paper, Stack, styled } from "@mui/material";
/* Components */
import AboutList from "@/components/AboutList";
import ExhibitionTabs from "@/components/ExhibitionTabs";
import ExhibitionAccordion from "@/components/ExhibitionAccordion";
/* Image */
import about from "@/public/profile.jpeg";
/* Framer Motion */
import { motion } from "framer-motion";
/* Seamless Scroll Polyfill */
import { scrollIntoView } from "seamless-scroll-polyfill";

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

export default function AboutStack({
  aboutContext,
  articles,
  presses,
  currentExs,
  pastExs,
  upcomingExs,
  aboutContext2,
}) {
  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: (custom) => ({
      opacity: 1,
      transition: { delay: custom * 0.3, duration: 0.3 },
    }),
  };

  // using seamless-scroll-polyfill with react Suspense
  const GoToElement = () => {
    const searchParams = useSearchParams();
    const search = searchParams.get("search");

    useEffect(() => {
      if (search === "exhibition") {
        scrollIntoView(document.querySelector("#exhibition"), {
          block: "start",
          behavior: "instant",
        });
      } else if (search === "article") {
        scrollIntoView(document.querySelector("#article"), {
          block: "start",
          behavior: "instant",
        });
      } else if (search === "press") {
        scrollIntoView(document.querySelector("#press"), {
          block: "start",
          behavior: "instant",
        });
      }
    }, [search]);

    return null;
  };

  return (
    <>
      <Suspense>
        <GoToElement />
      </Suspense>
      <Box pt={{ xs: 16, sm: 17 }} pl={{ xs: 2, sm: 2 }} pr={{ xs: 2, sm: 15 }}>
        <Stack direction={{ xs: "column-reverse", sm: "row" }} spacing={0}>
          <Item sx={{ width: { xs: "100%", sm: "80%" } }}>
            <motion.div
              custom={1}
              variants={variants}
              initial="hidden"
              animate="visible"
            >
              <Box sx={{ color: "#222222ff" }}>
                <Box
                  mt={10}
                  sx={{ fontSize: 30, fontFamily: "baskerville-display-pt" }}
                >
                  Tong Yang-Tze
                </Box>
                <Box pt={6}>
                  <AboutList timelines={aboutContext2} />
                </Box>
                <Box sx={{ fontSize: 15 }}>
                  <Box
                    mt={6}
                    dangerouslySetInnerHTML={{ __html: aboutContext }}
                    sx={{ lineHeight: 2, color: "#222222" }}
                  ></Box>
                  <Box pt={0} pb={0}>
                    <Box pb={15} id="exhibition"></Box>
                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                      <ExhibitionTabs
                        currentExs={currentExs}
                        pastExs={pastExs}
                        upcomingExs={upcomingExs}
                      />
                    </Box>
                    <Box sx={{ display: { xs: "block", sm: "none" } }}>
                      <ExhibitionAccordion
                        currentExs={currentExs}
                        pastExs={pastExs}
                        upcomingExs={upcomingExs}
                      />
                    </Box>
                  </Box>
                  <Box pt={0} pb={0} sx={{ width: "100%" }}>
                    <Box pb={15} id="article"></Box>
                    <Box
                      sx={{
                        color: "#000",
                        fontFamily: "apparat",
                        fontSize: 16,
                      }}
                    >
                      ARTICLE
                    </Box>
                    <Box pt={1}>
                      <AboutList timelines={articles} />
                    </Box>
                  </Box>
                  <Box pt={0} pb={{ xs: 40, sm: 100 }} sx={{ width: "100%" }}>
                    <Box pb={15} id="press"></Box>
                    <Box
                      sx={{
                        color: "#000",
                        fontFamily: "apparat",
                        fontSize: 16,
                      }}
                    >
                      PRESS
                    </Box>
                    <Box pt={1}>
                      <AboutList timelines={presses} />
                    </Box>
                  </Box>
                  <Box pt={0} pb={2} sx={{ width: "100%" }}>
                    © 2024 — Tong Yang-Tze, All rights reserved
                  </Box>
                  <Box pt={0} pb={2} sx={{ width: "100%" }}>
                    IMAGE LICENSING: “Moving Ink: Tong Yang-Tze” exhibited at
                    Taipei Fine Arts Museum, 2019-2020. Courtesy of Taipei Fine
                    Arts Museum.
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </Item>
          <Item sx={{ width: { xs: "100%", sm: "100%" } }}>
            <Box mt={1} sx={{ fontSize: 30 }}>
              <motion.div
                custom={0}
                variants={variants}
                initial="hidden"
                animate="visible"
              >
                <Box
                  sx={{
                    position: { xs: "relative", sm: "fixed" },
                    top: 0,
                    right: 0,
                    zIndex: -1,
                    width: { xs: "calc(100% - 0px)", sm: "50vw" },
                    height: { xs: "30dvh", sm: "100dvh" },
                  }}
                  mb={6}
                >
                  <Image
                    src={about}
                    alt="profile picture"
                    fill={true}
                    quality={100}
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    placeholder="blur"
                    priority={true}
                  />
                </Box>
              </motion.div>
            </Box>
          </Item>
        </Stack>
      </Box>
    </>
  );
}
