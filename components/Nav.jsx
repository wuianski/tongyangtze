import React from "react";
/* Next */
import { usePathname } from "next/navigation";
import Link from "next/link";
/* MUI */
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

/* Menu - About*/
const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({}) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    background: "none",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: 15,
    border: "none",
    padding: 0,
  },
}));

export default function Nav() {
  const pathname = usePathname();
  let textColor;
  let hoverClass;

  if (pathname === "/about" || pathname === "/contacts") {
    textColor = "#222222ff";
    hoverClass = "hover_works";
  } else if (pathname === "/others") {
    textColor = "#222222ff";
    hoverClass = "hover_ex_tab";
  } else if (pathname === "/works" || pathname === "/") {
    textColor = "#aaaaaaff";
    hoverClass = "hover_works";
  } else {
    textColor = "#aaaaaaff";
    hoverClass = "hover_works";
  }

  return (
    <>
      <Box
        sx={{
          fontSize: 18,
          color: textColor,
          fontFamily: "apparat",
        }}
      >
        <Link
          className={` ${pathname === "/works" ? "active_light" : hoverClass}`}
          href="/works"
        >
          <Box ml={0} component="span">
            Works
          </Box>
        </Link>

        <Link
          className={` ${pathname === "/others" ? "active_light" : hoverClass}`}
          href="/others"
        >
          <Box ml={3} component="span">
            Others
          </Box>
        </Link>

        <HtmlTooltip
          placement="bottom-start"
          title={
            <React.Fragment>
              <Box color={textColor} sx={{ ml: "-3px", pb: 0.5 }}>
                <Link href="/about#exhibition" className={hoverClass}>
                  Exhibition
                </Link>
              </Box>
              <Box color={textColor} sx={{ ml: "-3px", pb: 0.5 }}>
                <Link href="/about#article" className={hoverClass}>
                  Article
                </Link>
              </Box>
              <Box color={textColor} sx={{ ml: "-3px", pb: 0.5 }}>
                <Link href="/about#press" className={hoverClass}>
                  Press
                </Link>
              </Box>
            </React.Fragment>
          }
        >
          <Box ml={3} component="span">
            <Link
              className={` ${
                pathname === "/about" ? "active_light" : hoverClass
              }`}
              href="/about"
            >
              About
            </Link>
          </Box>
        </HtmlTooltip>

        <Link
          className={` ${
            pathname === "/contacts" ? "active_light" : hoverClass
          }`}
          href="/contacts"
        >
          <Box ml={3} component="span">
            Contacts
          </Box>
        </Link>
      </Box>
    </>
  );
}
