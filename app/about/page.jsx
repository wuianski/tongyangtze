/* Components */
import AboutStack from "@/components/AboutStack";
/* Data */
import {
  getAbout,
  getArticle,
  getPress,
  getCurrentExs,
  getPastExs,
  getUpcomingExs,
  getAbout2,
} from "@/data/data";

export default async function About() {
  const aboutContext = await getAbout();
  const articles = await getArticle();
  const presses = await getPress();
  const currentExs = await getCurrentExs();
  const pastExs = await getPastExs();
  const upcomingExs = await getUpcomingExs();
  const aboutContext2 = await getAbout2();

  //   console.log(aboutContext);
  return (
    <>
      <AboutStack
        aboutContext={aboutContext}
        articles={articles}
        presses={presses}
        currentExs={currentExs}
        pastExs={pastExs}
        upcomingExs={upcomingExs}
        aboutContext2={aboutContext2}
      />
    </>
  );
}
