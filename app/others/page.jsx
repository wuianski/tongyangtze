/* Components */
import OthersList from "@/components/OthersList";
/* Data */
import { getOthers } from "@/data/data";

export default function Others() {
  const others = getOthers();
  //   console.log(works);
  return (
    <>
      <OthersList others={others} />
    </>
  );
}
