/* Components */
import HoverImage from "@/components/HoverImage";
/* Data */
import { getWorks } from "@/data/data";
/* MUI */
import { Box } from "@mui/material";

export default function Works() {
  const works = getWorks();
  //   console.log(works);
  return (
    <>
      <Box>
        <HoverImage works={works} />
      </Box>
    </>
  );
}
