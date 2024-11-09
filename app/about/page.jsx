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

export default function About() {
  const aboutContext = getAbout();
  const articles = getArticle();
  const presses = getPress();
  const currentExs = getCurrentExs();
  const pastExs = getPastExs();
  const upcomingExs = getUpcomingExs();
  const aboutContext2 = getAbout2();

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
