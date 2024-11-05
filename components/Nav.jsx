import React, { useState } from "react";
/* Next */
import { usePathname } from "next/navigation";
import Link from "next/link";
/* MUI */
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled, alpha } from "@mui/material/styles";

const StyledMenu = styled((props) => (
  // console.log(props.MenuListProps.ian),
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "left",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "left",
    }}
    {...props}
  />
))(({ theme, ...props }) => ({
  "& .MuiList-root": {
    paddingTop: 8,
  },
  "& .MuiPaper-root": {
    borderRadius: 0,
    marginTop: theme.spacing(0),
    // color: "#222222ff",
    color: props.MenuListProps.ian,
    backgroundColor: "unset",
    "& .MuiMenu-list": {
      padding: "4px 0px",
    },
    "& .MuiMenuItem-root": {
      padding: 0,
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
      "&:hover": {
        backgroundColor: "unset",
      },
    },
    ...theme.applyStyles("dark", {
      color: theme.palette.grey[300],
    }),
  },
}));

export default function Nav() {
  const pathname = usePathname();
  let textColor;

  if (
    pathname === "/others" ||
    pathname === "/about" ||
    pathname === "/contacts"
  ) {
    textColor = "#222222ff";
  } else if (pathname === "/works" || pathname === "/") {
    textColor = "#aaaaaaff";
  } else {
    textColor = "#aaaaaaff";
  }

  /* Menu - About*/
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
          className={`link ${pathname === "/works" ? "active_light" : ""}`}
          href="/works"
        >
          <Box ml={0} component="span">
            Works
          </Box>
        </Link>

        <Link
          className={`link ${pathname === "/others" ? "active_dark" : ""}`}
          href="/others"
        >
          <Box ml={2} component="span">
            Others
          </Box>
        </Link>
        {/* 
        <Link
          className={`link ${pathname === "/about" ? "active" : ""}`}
          href="/about"
        >
          <Box ml={2} component="span">
            About
          </Box>
        </Link> */}

        <Box
          ml={2}
          component="span"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{ cursor: "pointer" }}
          className={`link ${pathname === "/about" ? "active_dark" : ""}`}
        >
          About
        </Box>
        <StyledMenu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
            ian: textColor,
          }}
        >
          <MenuItem onClick={handleClose}>
            <Link
              // className={`link ${pathname === "/about" ? "active_dark" : ""}`}
              href="/about#exhibition"
            >
              Exhibition
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link
              // className={`link ${pathname === "/about" ? "active_dark" : ""}`}
              href="/about#article"
            >
              Article
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link
              // className={`link ${pathname === "/about" ? "active_dark" : ""}`}
              href="/about#press"
            >
              Press
            </Link>
          </MenuItem>
        </StyledMenu>

        <Link
          className={`link ${pathname === "/contacts" ? "active_dark" : ""}`}
          href="/contacts"
        >
          <Box ml={2} component="span">
            Contacts
          </Box>
        </Link>
      </Box>
    </>
  );
}
