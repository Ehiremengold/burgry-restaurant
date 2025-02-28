import AboutUs from "./sections/AboutUs";
import Article from "./sections/Article";
import Download from "./sections/Download";
import Header from "./sections/Header";
import Menu from "./sections/Menu";
import Offerings from "./sections/Offerings";
import Promo from "./sections/Promo";
import Reservation from "./sections/Reservation";
import Review from "./sections/Review";
import TheBest from "./sections/TheBest";

export default function Home() {
  return (
    <>
      <Header />
      <Offerings />
      <Promo />
      <AboutUs />
      <Menu />
      <TheBest />
      <Download />
      <Review />
      <Reservation />
      <Article />
    </>
  );
}
