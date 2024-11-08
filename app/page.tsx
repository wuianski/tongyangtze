import Image from "next/image";
import Box from "@mui/material/Box";
/* Image */
import front from "@/public/g76.png";

export default function Home() {
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -1,
          width: "100vw",
          height: "100vh",
        }}
        mb={6}
      >
        <Image
          src={front}
          alt="front page image"
          fill={true}
          quality={100}
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw"
          priority={true}
          placeholder="blur"
        />
      </Box>
    </>
  );
}
