import Image from "next/image";
import aboutImage from "../../public/assets/aboutus-image.svg";
import PrimaryLine from "../components/PrimaryLine";
import checkIcon from "../../public/assets/check-icon.svg";
import Button from "../components/Button";

const AboutUs = () => {
  return (
    <section className="section">
      <div className="container flex lg:flex-row flex-col gap-10 px-6 lg:justify-between justify-center lg:items-start items-center">
        <Image src={aboutImage} alt="about-image" />

        <div className="flex flex-col gap-4 lg:items-start items-center">
          <h1
            className="text-white font-oswald font-bold text-3xl lg:text-left text-center
          "
          >
            Find Your Best-Tasting Food & Drinks All in One Place
          </h1>
          <span className="lg:self-start self-center">
            <PrimaryLine />
          </span>
          <p className="text-subtle lg:text-left text-center font-dmSans">
            From juicy burgers to refreshing drinks, satisfy every craving under
            one roof. Discover flavors that hit the spot, every single time!
          </p>

          <div className="grid lg:place-items-start place-items-center sm:grid-cols-2 gap-6">
            {[
              "Best Price",
              "Best Service",
              "Fresh Ingredient",
              "Safety Protocol",
            ].map((item, index) => {
              return (
                <div key={index} className="flex gap-4 items-center">
                  <Image src={checkIcon} alt="check-icon" />
                  <span className="text-white font-dmSans">{item}</span>
                </div>
              );
            })}
          </div>

          <Button color="primary" text="Learn more" />
        </div>
      </div>
    </section>
  );
};
export default AboutUs;
