import Box from "@mui/material/Box";
import Image from "next/image";
/* Image */
import front_desktop from "@/public/Index_Desktop.jpg";
import index_Mobile from "@/public/Index_Mobile.jpg";

export default function Home() {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          top: 0,
          left: 0,
          zIndex: -1,
          width: "100vw",
          height: "100vh",
          display: { xs: "none", sm: "block" },
        }}
      >
        <Image
          src={front_desktop}
          alt="front page image"
          fill={true}
          quality={100}
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="100vw"
          priority={true}
          placeholder="blur"
          loading="eager"
        />
      </Box>
      <Box
        sx={{
          position: "relative",
          top: 0,
          left: 0,
          zIndex: -1,
          width: "100vw",
          height: "100vh",
          display: { xs: "block", sm: "none" },
        }}
      >
        <Image
          src={index_Mobile}
          alt="front page image"
          fill={true}
          quality={100}
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="100vw"
          priority={true}
          placeholder="blur"
          loading="eager"
        />
      </Box>
    </>
  );
}
