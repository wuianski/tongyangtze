"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
/* MUI */
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
/* Components */
import Nav from "@/components/Nav";
import NavMobile from "@/components/NavMobileM";
/* Image */
import logo from "@/public/g90.png";

/* Stack Item Setting */
const Item = styled(Paper)(({}) => ({
  textAlign: "left",
  color: "unset",
  background: "none",
  boxShadow: "none",
}));

// const logo = "/g90.png";

export default function Header() {
  const pathname = usePathname();
  //   console.log(pathname);
  let backgroundColor;
  let textColor_mobile;
  let textColor_desktop;
  let siteBackgroundColor;

  if (pathname === "/about" || pathname === "/contacts") {
    backgroundColor = "none";
    textColor_mobile = "#222";
    textColor_desktop = "#222";
    siteBackgroundColor = "#fff";
  } else if (pathname === "/others") {
    backgroundColor = "#fff";
    siteBackgroundColor = "#fff";
  } else if (pathname === "/works") {
    backgroundColor = "#151515ff";
    textColor_mobile = "#aaa";
    textColor_desktop = "#aaa";
  } else if (pathname === "/") {
    backgroundColor = "none";
    textColor_mobile = "#222";
    textColor_desktop = "#aaa";
  } else {
    backgroundColor = "#151515ff";
    textColor_mobile = "#aaa";
    textColor_desktop = "#aaa";
  }

  return (
    <Box
      sx={{
        background: { xs: siteBackgroundColor, sm: backgroundColor },
        position: "fixed",
        zIndex: 99,
      }}
    >
      <Box p={0} sx={{ width: "100vw" }}>
        <Stack direction={{ xs: "row", md: "row" }} spacing={{ xs: 0, md: 0 }}>
          <Item
            sx={{
              width: "43%",
              background: {
                xs: siteBackgroundColor,
                sm: siteBackgroundColor,
              },
            }}
          >
            <Link href={`/`} scroll={false}>
              <Box
                sx={{
                  fontSize: { xs: 15, md: 15 },
                  width: "fit-content",
                  color: textColor_mobile,
                  position: "fixed",
                  zIndex: 99,
                  fontFamily: "apparat",
                  display: { xs: "block", md: "none" },
                }}
                p={2}
              >
                Tong Yang-Tze
              </Box>
              <Box
                sx={{
                  fontSize: { xs: 15, md: 15 },
                  width: "fit-content",
                  color: textColor_desktop,
                  position: "fixed",
                  zIndex: 99,
                  fontFamily: "apparat",
                  display: { xs: "none", md: "block" },
                }}
                p={2}
              >
                Tong Yang-Tze
              </Box>
            </Link>
          </Item>

          <Item sx={{ width: "14%" }}>
            {/* Logo */}
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <Link href={`/`} scroll={false}>
                <Box
                  sx={{
                    width: "fit-content",
                    marginLeft: "auto",
                    marginRight: "auto",
                    position: "relative",
                    zIndex: 100,
                    pointerEvents: "none",
                  }}
                  pt={2}
                >
                  <Image
                    src={logo}
                    alt="logo"
                    width={40}
                    height={39}
                    quality={100}
                    sizes="40px"
                  />
                </Box>
              </Link>
            </Box>
            {/* Mobile Logo */}
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <Link href={`/`} scroll={false}>
                <Box
                  sx={{
                    width: "fit-content",
                    marginLeft: "auto",
                    marginRight: "auto",
                    position: "relative",
                    zIndex: 100,
                    pointerEvents: "none",
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
              </Link>
            </Box>
          </Item>
          <Item sx={{ width: "43%" }}>
            <Box
              sx={{
                width: "fit-content",
                marginLeft: "auto",
                // marginRight: "auto",
              }}
              p={2}
            >
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <Nav />
              </Box>
              <Box sx={{ display: { xs: "block", md: "none" } }}>
                <NavMobile textColor={textColor_mobile} />
              </Box>
            </Box>
          </Item>
        </Stack>
      </Box>
    </Box>
  );
}
