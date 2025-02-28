"use client"
import bgImage from "@/public/assets/special-occassion-image.jpg";
import Image from "next/image";
import PrimaryLine from "../components/PrimaryLine";
import { motion } from "framer-motion";

const Reservation = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="section h-[450px] relative !p-0 overflow-hidden">
      <motion.div
        className="h-full w-full"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Image
          src={bgImage}
          className="h-full w-full object-center object-cover"
          alt="background image"
        />
      </motion.div>

      <div className="absolute inset-0 bg-slate-600 bg-opacity-60">
        <div className="container h-full justify-center flex flex-col px-6">
          <motion.span
            className="lg:w-3/4 flex flex-col gap-4 lg:justify-start justify-center lg:items-start items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h1
              className="max-md:text-center uppercase text-white font-bold font-oswald text-3xl lg:text-5xl lg:leading-snug"
              variants={childVariants}
            >
              Get a special offer for your special occasion
            </motion.h1>

            <motion.div variants={childVariants}>
              <PrimaryLine />
            </motion.div>

            <motion.p
              className="text-white font-dmSans lg:text-2xl text-lg lg:text-left text-center"
              variants={childVariants}
            >
              Celebrate in style with us! Reserve your spot today and make your
              special moments even more memorable with exclusive deals and
              delicious food.
            </motion.p>

            <motion.button
              className="relative overflow-hidden border-2 border-transparent font-semibold transition-all duration-300 ease-in-out w-fit rounded-lg px-6 py-4 md:text-xl text-lg uppercase font-oswald text-secondary bg-primary group hover:text-white hover:border-white"
              variants={buttonVariants}
              whileHover="hover"
            >
              <span className="relative z-10">Book a reservation</span>
              <span
                className="absolute inset-0 bg-black transition-transform duration-300 ease-in-out 
                translate-y-[-100%] w-full h-full 
                group-hover:translate-y-0"
              />
            </motion.button>
          </motion.span>
        </div>
      </div>
    </section>
  );
};
export default Reservation;
