import AboutUs from "./sections/AboutUs";
import Header from "./sections/Header";
import Menu from "./sections/Menu";
import Offerings from "./sections/Offerings";
import Promo from "./sections/Promo";

export default function Home() {
  return (
    <>
      <Header />
      <Offerings />
      <Promo />
      <AboutUs />
      <Menu />
    </>
  );
}
