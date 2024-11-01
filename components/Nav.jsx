import { usePathname } from "next/navigation";
import Link from "next/link";

/* MUI */
import Box from "@mui/material/Box";

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

        <Link
          className={`link ${pathname === "/about" ? "active" : ""}`}
          href="/about"
        >
          <Box ml={2} component="span">
            About
          </Box>
        </Link>

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
