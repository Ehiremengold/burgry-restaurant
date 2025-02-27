import Image from "next/image";
import heroImage1 from "@/public/assets/hero-images/hero-burger.svg";
import PrimaryLine from "./PrimaryLine";
import heroIcon1 from "@/public/assets/hero-icons/hero-icon-1.svg";
import heroIcon2 from "@/public/assets/hero-icons/hero-icon-2.svg";
import heroIcon3 from "@/public/assets/hero-icons/hero-icon-3.svg";
import Button from "./Button";
const Hero = () => {
  return (
    <section className="section">
      <div className="px-10 container flex lg:flex-row flex-col lg:flex-nowrap flex-wrap lg:justify-between justify-center items-center gap-12">
        <div className="w-full lg:justify-start justify-center flex">
          <Image src={heroImage1} alt="hero-image-1" />
        </div>

        <div className="flex flex-col gap-7 text-white lg:justify-start justify-center lg:items-start items-center">
          <h1 className="font-oswald text-4xl md:text-5xl lg:text-7xl lg:text-left text-center font-bold">
            Enjoy <span className="text-primary">Burgry</span> – Make Your Tummy
            Happy
          </h1>
          <div className="flex justify-center lg:justify-start">
            <PrimaryLine />
          </div>

          <p className="lg:text-left text-center text-subtle">
            Indulge in the juiciest burgers crafted to perfection. Our fresh
            ingredients and bold flavors come together to create a mouthwatering
            experience that’ll leave you craving for more. Bite into happiness
            today!
          </p>

          <div className="lg:w-1/2 w-2/3 gap-8 flex lg:items-start lg:justify-start items-center justify-between">
            <div className="flex flex-col gap-4">
              <Image src={heroIcon1} alt="hero-icon" />
              <p>Delicious</p>
            </div>
            <div className="flex flex-col gap-4">
              <Image src={heroIcon2} alt="hero-icon" />
              <p>Fresh</p>
            </div>
            <div className="flex flex-col gap-4">
              <Image src={heroIcon3} alt="hero-icon" />
              <p>Organic</p>
            </div>
          </div>

          <Button color="primary" text="Check Menu" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
