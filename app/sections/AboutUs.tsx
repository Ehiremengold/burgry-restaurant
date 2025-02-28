"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import aboutImage from "../../public/assets/aboutus-image.svg";
import PrimaryLine from "../components/PrimaryLine";
import checkIcon from "../../public/assets/check-icon.svg";
import Button from "../components/Button";

const AboutUs = () => {
  return (
    <section className="section">
      <div className="container flex lg:flex-row flex-col gap-10 px-6 lg:justify-between justify-center lg:items-start items-center">
        
        {/* Image Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full max-w-[500px]"
        >
          <Image src={aboutImage} alt="about-image" className="w-full h-auto object-contain" />
        </motion.div>

        {/* Text Content Animation */}
        <div className="flex flex-col gap-4 lg:items-start items-center">
          
          {/* Heading Animation */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-white font-oswald font-bold text-3xl lg:text-left text-center"
          >
            Find Your Best-Tasting Food & Drinks All in One Place
          </motion.h1>
          
          <span className="lg:self-start self-center">
            <PrimaryLine />
          </span>

          {/* Paragraph Animation */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="text-subtle lg:text-left text-center font-dmSans"
          >
            From juicy burgers to refreshing drinks, satisfy every craving under
            one roof. Discover flavors that hit the spot, every single time!
          </motion.p>

          {/* Checklist Animation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.2, delayChildren: 0.4 }}
            viewport={{ once: true }}
            className="grid lg:place-items-start place-items-center sm:grid-cols-2 gap-6"
          >
            {[
              "Best Price",
              "Best Service",
              "Fresh Ingredient",
              "Safety Protocol",
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex gap-4 items-center"
              >
                <Image src={checkIcon} alt="check-icon" />
                <span className="text-white font-dmSans">{item}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Button Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Button color="primary" text="Learn more" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
