import AboutUs from "./sections/AboutUs";
import Article from "./sections/Article";
import Download from "./sections/Download";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Menu from "./sections/Menu";
import Promo from "./sections/Promo";
import Reservation from "./sections/Reservation";
import Review from "./sections/Review";
import Subscribe from "./sections/Subscribe";
import TheBest from "./sections/TheBest";

export default function Home() {
  return (
    <>
      <Header />
      <Promo />
      <AboutUs />
      <Menu />
      <TheBest />
      <Download />
      <Review />
      <Reservation />
      <Article />
      <Subscribe />
      <Footer />
    </>
  );
}
