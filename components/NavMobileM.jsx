import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
/* MUI */
import { Box, Modal, Slide, Backdrop, Fade, Grow } from "@mui/material";
/* Icons */
import Menu from "@/public/icons/menu-light.svg";
import Close from "@/public/icons/xmark-light.svg";
/* Components */
import FadeUpAnimation from "@/components/FadeUpAnimation";
import FadeDownAnimation from "@/components/FadeDownAnimation";

/*************/
/*** delay ***/
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const style = {
  position: "absolute",
  right: 0,
  width: { xs: "100%", md: "50vw" },
  height: "100%",
  bgcolor: "#000",
  color: "#fff",
  paddingLeft: { xs: "32px", md: "40px" },
  paddingRight: { xs: "32px", md: "40px" },
  paddingTop: { xs: "32px", md: "40px" },
  paddingBottom: { xs: "40px", md: "20px" },
  overflowY: { xs: "scroll", md: "auto" },
};

const logo = "/g90.png";

export default function NavMobile({ textColor }) {
  const pathname = usePathname();
  const [nav_m, setNav_m] = useState(false);
  const handleOpen = () => {
    setNav_m(true);
  };
  const handleClose = () => {
    setNav_m(false);
  };

  return (
    <>
      <Box
        onClick={handleOpen}
        sx={{
          position: "fixed",
          top: 15,
          right: 15,
          zIndex: 100,
          cursor: "pointer",
        }}
      >
        <Menu />
      </Box>
      <Modal
        open={nav_m}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 1000,
          },
        }}
      >
        <Slide direction="left" in={nav_m} mountOnEnter unmountOnExit>
          {/* <Fade in={nav_m} mountOnEnter unmountOnExit> */}
          <Box sx={{ ...style }}>
            <Box
              sx={{
                position: "fixed",
                top: 15,
                right: 15,
                zIndex: 100,
                cursor: "pointer",
              }}
            >
              <Box onClick={handleClose}>
                <Close />
              </Box>
            </Box>

            <Box
              sx={{
                width: "fit-content",
                marginLeft: "auto",
                marginRight: "auto",
                position: "relative",
                zIndex: 100,
                pointerEvents: "none",
                position: "fixed",
                top: 0,
                left: " calc(50vw - 16.5px)",
              }}
              pt={2}
            >
              <Image
                src={logo}
                alt="mobile logo"
                width={33}
                height={32}
                quality={100}
                sizes="33px"
              />
            </Box>

            <Box
              sx={{
                position: "absolute",
                width: "100vw",
                height: "100vh",
                left: 0,
                top: 0,
                backgroundColor: "#151515ff",
                zIndex: 99,
              }}
            >
              {/* Site Title */}
              <Link href={`/`} scroll={false}>
                <Box
                  sx={{
                    fontSize: 18,
                    width: "fit-content",
                    color: "#aaa",
                    position: "abolute",
                    zIndex: 100,
                    fontFamily: "apparat",
                  }}
                  p={2}
                >
                  TONG YANG TZE
                </Box>
              </Link>
              {/* Menu */}
              <Box
                sx={{
                  fontSize: 18,
                  color: "#aaa",
                }}
                pt={17}
                pl={2}
                onClick={async () => {
                  await delay(100);
                  setNav_m(false);
                }}
              >
                <Link
                  className={`link ${pathname === "/works" ? "active" : ""}`}
                  href="/works"
                >
                  <Box mb={2}>Works</Box>
                </Link>

                <Link
                  className={`link ${pathname === "/others" ? "active" : ""}`}
                  href="/others"
                >
                  <Box mb={2}>Others</Box>
                </Link>

                <Link
                  className={`link ${pathname === "/about" ? "active" : ""}`}
                  href="/about"
                >
                  <Box mb={2}>About</Box>
                </Link>

                <Link
                  className={`link ${pathname === "/about" ? "active" : ""}`}
                  href="/about#exhibition"
                >
                  <Box mb={2} ml={2}>
                    Exhibition
                  </Box>
                </Link>

                <Link
                  className={`link ${pathname === "/about" ? "active" : ""}`}
                  href="/about#article"
                >
                  <Box mb={2} ml={2}>
                    Article
                  </Box>
                </Link>

                <Link
                  className={`link ${pathname === "/about" ? "active" : ""}`}
                  href="/about#press"
                >
                  <Box mb={2} ml={2}>
                    Press
                  </Box>
                </Link>

                <Link
                  className={`link ${pathname === "/contacts" ? "active" : ""}`}
                  href="/contacts"
                >
                  <Box mb={2}>Contacts</Box>
                </Link>
              </Box>
            </Box>
          </Box>
          {/* </Fade> */}
        </Slide>
      </Modal>
    </>
  );
}
