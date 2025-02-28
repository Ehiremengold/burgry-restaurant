"use client";
import Image from "next/image";
import promoImage1 from "../../public/assets/promo-images/promo-image-1.svg";
import promoImage2 from "../../public/assets/promo-images/promo-image-2.svg";
import { motion } from "framer-motion";

const Promo = () => {
  const cardVariants = {
    hiddenLeft: { opacity: 0, x: -50 },
    hiddenRight: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="section">
      <div className="container grid lg:grid-cols-2 gap-6 px-6">
        <motion.div
          className="rounded-lg px-6 py-4 bg-tertiary flex sm:flex-row flex-col items-center gap-10"
          initial="hiddenLeft"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <div className="flex flex-col gap-2">
            <p className="font-dmSans text-primary font-light text-sm">
              Payday promo
            </p>
            <h1 className="font-oswald font-bold text-white lg:text-xl text-lg">
              Get a 10% Discount on Payday Week
            </h1>
            <p className="text-subtle font-dmSans font-light text-sm lg:text-base">
              Treat yourself without breaking the bank! Celebrate payday with a
              tasty burger and enjoy a sweet 10% off. Because you deserve it!
            </p>
            <p className="font-dmSans text-primary font-light cursor-pointer">
              Buy Online
            </p>
          </div>

          <motion.div variants={imageVariants} whileHover="hover">
            <Image src={promoImage1} alt="promo-image" />
          </motion.div>
        </motion.div>

        <motion.div
          className="rounded-lg px-6 py-4 bg-tertiary flex items-center gap-4 sm:flex-row flex-col"
          initial="hiddenRight"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <div className="flex flex-col gap-2">
            <p className="font-dmSans text-primary font-light text-sm">
              Payday promo
            </p>
            <h1 className="font-oswald font-bold text-lg lg:text-xl text-white">
              Buy 1 Coke, Get 1 More Free
            </h1>
            <p className="text-subtle font-dmSans font-light text-sm lg:text-base">
              Double the refreshment, double the fun! Quench your thirst and
              share the joy with our exclusive buy-one-get-one-free Coke offer!
            </p>
            <p className="font-dmSans text-primary font-light cursor-pointer">
              Buy Online
            </p>
          </div>

          <motion.div variants={imageVariants} whileHover="hover">
            <Image src={promoImage2} alt="promo-image" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
export default Promo;
