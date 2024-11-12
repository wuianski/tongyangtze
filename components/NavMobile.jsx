import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
/* MUI */
import Box from "@mui/material/Box";
/* Icons */
import Menu from "@/public/icons/menu.svg";
import Close from "@/public/icons/xmark.svg";
/* Components */
import FadeUpAnimation from "@/components/FadeUpAnimation";
import FadeDownAnimation from "@/components/FadeDownAnimation";

/*************/
/*** delay ***/
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function NavMobile({ textColor }) {
  const pathname = usePathname();
  const [nav_m, setNav_m] = useState(false);

  return (
    <>
      {!nav_m && (
        <Box
          onClick={() => setNav_m(true)}
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
      )}
      {nav_m && (
        <>
          <FadeUpAnimation>
            <Box
              onClick={async () => {
                await delay(300);
                setNav_m(false);
              }}
              sx={{
                position: "fixed",
                top: 15,
                right: 15,
                zIndex: 100,
                cursor: "pointer",
              }}
            >
              <Close />
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
                    color: "#666",
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
                  color: "#666",
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
          </FadeUpAnimation>
        </>
      )}
    </>
  );
}
