import Image from "next/image";
import Box from "@mui/material/Box";

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
          src={"/g76.png"}
          alt="front page image"
          fill={true}
          quality={100}
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
          priority={true}
        />
      </Box>
    </>
  );
}
