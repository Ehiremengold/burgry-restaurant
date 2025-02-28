"use client"
import PrimaryLine from "../components/PrimaryLine";
import { reviews } from "../lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";

const Review = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.03,
      boxShadow: "0px 15px 30px rgba(0,0,0,0.3)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="section !bg-tertiary">
      <div className="container px-6">
        <motion.div
          className="flex flex-col gap-4 justify-center items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h1
            className="font-bold font-oswald text-white lg:text-4xl text-xl uppercase"
            variants={childVariants}
          >
            What Our customers are saying
          </motion.h1>
          <motion.div variants={childVariants}>
            <PrimaryLine />
          </motion.div>
          <motion.p
            className="font-dmSans text-subtle lg:text-xl text-base text-center lg:w-3/5"
            variants={childVariants}
          >
            Real feedback from real food lovers. See why our customers keep
            coming back for more!
          </motion.p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 gap-5 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {reviews.map((review, index) => {
            const { img, name, comment, occupation } = review;
            return (
              <motion.div
                key={index}
                className="drop-shadow-xl rounded-xl p-5 bg-secondary flex flex-col gap-4 items-stretch transition-all duration-300 ease-in-out"
                variants={cardVariants}
                whileHover="hover"
              >
                <p className="font-dmSans text-lg text-white h-full">
                  {comment}
                </p>
                <div className="flex gap-4 items-center ">
                  <Image
                    src={img}
                    className="object-cover object-top rounded-full h-[50px] w-[50px] border-2 border-primary"
                    alt={name}
                  />
                  <div className="flex flex-col gap-1">
                    <h1 className="text-base text-white font-oswald capitalize">
                      {name}
                    </h1>
                    <p className="text-subtle font-dmSans text-sm">
                      {occupation}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
export default Review;
