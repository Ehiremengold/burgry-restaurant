"use client";
import Image from "next/image";
import offeringImg1 from "../../public/assets/offerings/offering-image-1.png";
import offeringImg2 from "../../public/assets/offerings/offering-image-2.png";
import offeringImg3 from "../../public/assets/offerings/offering-image-3.png";
import { motion } from "framer-motion";

const Offerings = () => {
  const cardVariants = {
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


  return (
    <section className="section">
      <div className="container grid md:grid-cols-3 gap-6 px-6">
        {[
          {
            img: offeringImg1,
            bgColor: "bg-primary",
            title: "Food",
            text: "Satisfy your cravings with our juicy burgers and more.",
            textColor: "text-black",
          },
          {
            img: offeringImg2,
            bgColor: "bg-[#007936]",
            title: "Snack",
            text: "Perfect bites for every mood. Crunchy, tasty, and fun!",
            textColor: "text-white",
          },
          {
            img: offeringImg3,
            bgColor: "bg-[#CC3433]",
            title: "Beverage",
            text: "Quench your thirst with our refreshing drinks.",
            textColor: "text-white",
          },
        ].map((offering, index) => (
          <motion.div
            key={index}
            className={`relative ${offering.bgColor} rounded-lg px-3 lg:pt-4 pt-3 pb-2 flex flex-col`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <Image
              src={offering.img}
              className="absolute left-0 bottom-0 size-28 lg:size-32"
              alt={`${offering.title}-img`}
            />
            <div className="ml-[25%] sm:ml-[20%] md:ml-[40%] space-y-2">
              <h2 className="font-oswald text-white font-bold text-2xl uppercase">
                {offering.title}
              </h2>
              <p
                className={`text-sm ${offering.textColor} font-dmSans font-medium leading-tight`}
              >
                {offering.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default Offerings;
