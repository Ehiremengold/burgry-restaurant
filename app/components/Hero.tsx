import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import heroImage1 from "@/public/assets/hero-images/hero-burger.svg";
import heroImage2 from "@/public/assets/hero-images/hero-2.png";
import heroImage3 from "@/public/assets/hero-images/hero-3.png";
import PrimaryLine from "./PrimaryLine";
import heroIcon1 from "@/public/assets/hero-icons/hero-icon-1.svg";
import heroIcon2 from "@/public/assets/hero-icons/hero-icon-2.svg";
import heroIcon3 from "@/public/assets/hero-icons/hero-icon-3.svg";
import Button from "./Button";

const heroContent = [
  {
    image: heroImage1,
    title: "Enjoy Burgry – Make Your Tummy Happy",
    description:
      "Indulge in the juiciest burgers crafted to perfection. Our fresh ingredients and bold flavors come together to create a mouthwatering experience that’ll leave you craving for more. Bite into happiness today!",
  },
  {
    image: heroImage2,
    title: "Savor Our Pizzas – Hot & Cheesy",
    description:
      "Dive into a world of cheesy goodness with our deliciously crafted pizzas. Made with love, fresh dough, and premium toppings, every slice is a moment to cherish.",
  },
  {
    image: heroImage3,
    title: "Cool Drinks – Refresh Your Day",
    description:
      "Quench your thirst with our refreshing beverages. From icy coolers to vibrant juices, we’ve got the perfect drink to complement your meal.",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroContent.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const iconVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const buttonVariants = {
    tap: { scale: 0.9 },
  };

  return (
    <section className="section overflow-hidden !pt-20">
      <div className="px-5 container flex lg:flex-row flex-col lg:flex-nowrap flex-wrap lg:justify-between justify-center items-center gap-6">
        {/* Image Container */}
        <div className="w-full lg:justify-start justify-center flex">
          <div className="w-full max-w-[600px] h-[500px] lg:h-[600px] relative">
            {heroContent.map((slide, index) => (
              <motion.div
                key={slide.title}
                className={`absolute top-0 left-0 w-full h-full ${
                  index === currentSlide ? "block" : "hidden"
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: index === currentSlide ? 1 : 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                <Image
                  src={slide.image}
                  alt={`hero-image-${index + 1}`}
                  className="w-full h-full object-contain"
                  priority={true}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-6 text-white lg:justify-start justify-center lg:items-start items-center">
          <motion.h1
            key={heroContent[currentSlide].title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="font-oswald text-4xl md:text-5xl lg:text-7xl lg:text-left text-center font-bold"
          >
            {heroContent[currentSlide].title}
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{ transformOrigin: "left" }}
            className="flex justify-center lg:justify-start"
          >
            <PrimaryLine />
          </motion.div>
          <motion.p
            key={heroContent[currentSlide].description}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="lg:text-left text-center text-subtle lg:text-xl text-base"
          >
            {heroContent[currentSlide].description}
          </motion.p>

          <motion.div
            className="lg:w-1/2 w-2/3 gap-8 flex lg:items-start lg:justify-start items-center justify-between"
            initial="hidden"
            animate="visible"
          >
            {[heroIcon1, heroIcon2, heroIcon3].map((icon, index) => (
              <motion.div
                key={index}
                className="flex flex-col gap-4"
                variants={iconVariants}
                custom={index}
              >
                <Image src={icon} alt="hero-icon" />
                <p className="text-white text-lg font-oswald">
                  {["Delicious", "Fresh", "Organic"][index]}
                </p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="m-0 p-0"
            onClick={() => scrollToSection("menu-section")}
            whileTap="tap"
            variants={buttonVariants}
          >
            <Button color="primary" text="Check Menu" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
