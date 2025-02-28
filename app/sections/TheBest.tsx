"use client";
import Image from "next/image";
import bgImage from "../../public/assets/the-best-image.jpg";
import PrimaryLine from "../components/PrimaryLine";
import playButton from "../../public/assets/playbutton.svg";
import { motion } from "framer-motion";

const TheBest = () => {
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
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
    hover: { scale: 1.2 },
  };

  return (
    <section className="section h-[450px] !p-0 relative">
      <Image
        src={bgImage}
        className="h-full w-full object-cover"
        alt="bg-image"
      />
      <div className="absolute inset-0 bg-slate-600 bg-opacity-45 grid place-items-center">
        <motion.div
          className="container mt-16 flex flex-col justify-center items-center gap-2 text-center md:w-3/4 lg:w-9/12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.button
            className=""
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <Image className="" src={playButton} alt="play button" />
          </motion.button>
          <motion.h1
            className="font-oswald uppercase font-bold lg:text-5xl text-3xl text-white"
            variants={childVariants}
          >
            EXPERIENCE with us THE FINEST FLAVORS
          </motion.h1>
          <motion.div variants={childVariants}>
            <PrimaryLine />
          </motion.div>
          <motion.p
            className="font-dmSans text-subtle lg:text-2xl text-xl"
            variants={childVariants}
          >
            Crafted with passion, served with perfection. Dive into a world of
            unforgettable tastes.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
export default TheBest;
