/* Components */
import OthersList from "@/components/OthersList";
/* Data */
import { getOthers } from "@/data/data";

export default async function Others() {
  const others = await getOthers();
  //   console.log(works);
  return (
    <>
      <OthersList others={others} />
    </>
  );
}
