"use client";

/* MUI */
import Box from "@mui/material/Box";

export default function WorksLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      <Box
        sx={{
          backgroundColor: "#151515ff",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {children}
      </Box>
    </section>
  );
}
