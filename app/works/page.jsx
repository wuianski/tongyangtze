/* Components */
import HoverImage from "@/components/HoverImage";
/* Data */
import { getWorks } from "@/data/data";
/* MUI */
import { Box, Paper, Stack, styled } from "@mui/material";

export default async function Works() {
  const works = await getWorks();
  //   console.log(works);
  return (
    <>
      <Box sx={{ height: "calc(100vh - 0px)" }}>
        <HoverImage works={works} />
      </Box>
    </>
  );
}
