/* Components */
import HoverImage from "@/components/HoverImage";
/* Data */
import { getWorks } from "@/data/data";
/* MUI */
import { Box } from "@mui/material";
/* image */
import work1 from "@/public/works/鳶飛戾天魚躍于淵.jpg";
import work2 from "@/public/works/任所適.jpg";
import work3 from "@/public/works//浩如烟海.jpg";
import work4 from "@/public/works/滄海之滉漾浥勺水不足以削其廣.jpg";

const worksImage = [work1, work2, work3, work4];

export default function Works() {
  const works = getWorks();
  //   console.log(works);
  return (
    <>
      <Box>
        <HoverImage works={works} worksImage={worksImage} />
      </Box>
    </>
  );
}
