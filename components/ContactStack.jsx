"use client";

/* Next */
import Image from "next/image";
/* MUI */
import { Box, Paper, Stack, styled } from "@mui/material";
/* Components */
import Form from "@/components/Form";
/* Image */
import contact from "@/public/contact.png";
/* Framer Motion */
import { motion } from "framer-motion";

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "left",
  color: "#222222ff",
  width: "max-content",
  boxShadow: "none",
  background: "none",
  borderRadius: 0,

  [theme.breakpoints.down("md")]: {
    width: "100%",
    textAlign: "left",
  },
}));

export default function ContactStack() {
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
        pt={{ xs: 15, sm: 17 }}
        pl={{ xs: 2, sm: 15 }}
        pr={{ xs: 2, sm: 15 }}
      >
        <Stack direction={{ xs: "column", sm: "row" }} spacing={0}>
          <Item sx={{ width: { xs: "100%", sm: "80%" } }}>
            <motion.div
              custom={1}
              variants={variants}
              initial="hidden"
              animate="visible"
            >
              {/* <Box sx={{ color: "#222222ff" }}>
                <Box
                  mt={1}
                  sx={{ fontSize: 30, fontFamily: "baskerville-display-pt" }}
                >
                  Contact us
                </Box>
                <Box sx={{ fontSize: 15, color: "#000" }}>
                  Please fill this form in a decent manner.
                </Box>
              </Box> */}
              <Box pt={4}>
                <Form />
              </Box>
            </motion.div>
          </Item>
          <Item
            sx={{
              width: { xs: "100%", sm: "100%" },
              display: { xs: "none", sm: "block" },
            }}
          >
            <Box mt={1} sx={{ fontSize: 30 }}>
              <motion.div
                custom={0}
                variants={variants}
                initial="hidden"
                animate="visible"
              >
                <Box
                  sx={{
                    position: "fixed",
                    top: 0,
                    right: 0,
                    zIndex: -1,
                    width: "50vw",
                    height: "100dvh",
                  }}
                  mb={6}
                >
                  <Image
                    src={contact}
                    alt="contact picture"
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
