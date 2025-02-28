"use client";
import { motion } from "framer-motion";

const Subscribe = () => {
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
      boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="section !bg-primary">
      <motion.div
        className="container px-6 flex lg:flex-row flex-col gap-10 lg:justify-between justify-center lg:items-start items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div
          className="flex flex-col gap-3 lg:items-start items-center"
          variants={childVariants}
        >
          <h1 className="font-oswald font-bold text-2xl uppercase lg:text-4xl">
            Get exclusive update
          </h1>
          <p className="font-dmSans font-medium text-secondary lg:text-lg text-base lg:text-left text-center">
            Be the first to know about special deals, new menu items, and
            exclusive offers. Join our community and never miss a bite!
          </p>
        </motion.div>
        <motion.div
          className="flex lg:items-stretch items-center lg:justify-start justify-center gap-3 max-sm:flex-col w-full"
          variants={childVariants}
        >
          <motion.input
            type="text"
            placeholder="Email Address"
            className="px-6 py-4 rounded-lg w-3/5"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.button
            className="px-4 py-4 rounded-lg uppercase bg-secondary font-oswald text-white font-bold border-none"
            variants={buttonVariants}
            whileHover="hover"
          >
            Subscribe now
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default Subscribe;
