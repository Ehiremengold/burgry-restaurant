"use client";
import MenuTab from "../components/MenuTab";
import PrimaryLine from "../components/PrimaryLine";
import { motion } from "framer-motion";

const Menu = () => {
  return (
    <section className="section">
      <div className="container px-6" id="menu-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 text-center items-center justify-center"
        >
          <h1 className="text-white font-oswald text-3xl lg:text-5xl font-bold text-center">
            Discover Our Bestsellers
          </h1>
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{ transformOrigin: "left" }}
          >
            <PrimaryLine />
          </motion.span>
          <p className="font-dmSans text-subtle lg:w-3/5 lg:text-xl text-base">
            Handpicked favorites crafted to perfection. From classic beef to
            crispy chicken, explore the flavors that keep everyone coming back
            for more!
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <MenuTab />
        </motion.div>
      </div>
    </section>
  );
};
export default Menu;
