"use client";

/* Next */
import Image from "next/image";
/* MUI */
import { Box, Paper, Stack, styled } from "@mui/material";
/* Framer Motion */
import { motion } from "framer-motion";

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
  const variants = {
    hidden: {
      opacity: 0,
      // y: 100,
    },
    visible: (custom) => ({
      opacity: 1,
      // y: 0,
      transition: { delay: custom * 0.3, duration: 0.3 },
    }),
  };

  return (
    <>
      <Box
        pt={{ xs: 17, sm: 19 }}
        pl={{ xs: 2, sm: 15 }}
        pr={{ xs: 2, sm: 15 }}
        pb={2}
      >
        <Stack direction="column" spacing={6}>
          {others.map((other, index) => (
            <Item sx={{ width: { xs: "100%", sm: "100%" } }} key={index}>
              <Box sx={{ borderBottom: "solid 1px #000" }} pb={6}>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={{ xs: 2, sm: 0 }}
                >
                  <Item sx={{ width: { xs: "100%", sm: "100%" } }}>
                    <Box pr={{ xs: 0, sm: 16 }}>
                      <motion.div
                        custom={1}
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                      >
                        <Box
                          sx={{
                            position: "relative",
                            // width: { xs: "100%", sm: (751 / 4) * 3 },
                            // height: { xs: "60vw", sm: (416 / 4) * 3 },
                            // maxWidth: "calc(50vw - 256px)",
                            width: "100%",
                            paddingTop: "56.25%",
                          }}
                        >
                          <Image
                            src={other.src}
                            alt="cover image"
                            fill={true}
                            quality={100}
                            style={{
                              objectFit: "cover",
                              objectPosition: "center",
                            }}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                          />
                        </Box>
                      </motion.div>
                    </Box>
                  </Item>
                  <Item sx={{ width: { xs: "100%", sm: "100%" } }}>
                    <motion.div
                      custom={0}
                      variants={variants}
                      initial="hidden"
                      animate="visible"
                    >
                      <Box
                        mt={0}
                        sx={{
                          fontSize: 30,
                          color: "#000",
                          fontFamily: "baskerville-display-pt",
                        }}
                      >
                        {other.title}
                      </Box>
                      <Box pt={1} sx={{ fontSize: 15 }}>
                        {other.year}
                      </Box>
                      <Box
                        pt={4}
                        sx={{
                          fontSize: 15,
                          minHeight: { xs: "unset", sm: "unset" },
                        }}
                      >
                        {other.context}
                      </Box>
                      <Box pt={4} sx={{ fontSize: 15 }}>
                        <a href={other.link} target="_blank">
                          More Information
                        </a>
                      </Box>
                    </motion.div>
                  </Item>
                </Stack>
              </Box>
            </Item>
          ))}
        </Stack>
      </Box>
    </>
  );
}
