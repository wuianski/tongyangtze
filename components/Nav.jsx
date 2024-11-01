import React, { useState, useEffect } from "react";
/* Next */
import { usePathname } from "next/navigation";
import Link from "next/link";
/* MUI */
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled, alpha } from "@mui/material/styles";

const StyledMenu = styled((props) => (
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
))(({ theme }) => ({
  "& .MuiList-root": {
    paddingTop: 8,
  },
  "& .MuiPaper-root": {
    borderRadius: 0,
    marginTop: theme.spacing(0),
    // minWidth: 100,
    color: "#222222ff",
    backgroundColor: "#fff",
    "& .MuiMenu-list": {
      padding: "4px 4px",
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
        }}
      >
        <Link
          className={`link ${pathname === "/works" ? "active" : ""}`}
          href="/works"
        >
          <Box ml={0} component="span">
            Works
          </Box>
        </Link>

        <Link
          className={`link ${pathname === "/others" ? "active" : ""}`}
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
          }}
        >
          <MenuItem onClick={handleClose}>
            <Link
              className={`link ${pathname === "/about" ? "active" : ""}`}
              href="/about#exhibition"
            >
              Exhibition
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link
              className={`link ${pathname === "/about" ? "active" : ""}`}
              href="/about#article"
            >
              Article
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link
              className={`link ${pathname === "/about" ? "active" : ""}`}
              href="/about#press"
            >
              Press
            </Link>
          </MenuItem>
        </StyledMenu>

        <Link
          className={`link ${pathname === "/contacts" ? "active" : ""}`}
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
