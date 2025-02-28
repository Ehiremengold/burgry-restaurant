"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuItems } from "../lib/utils";

const MenuTab = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { food, snacks, beverages } = menuItems;

  // Animation Variants
  const tabVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <>
      <div className="flex gap-6 items-center justify-center mt-6">
        {["Food", "Snack", "Beverage"].map((label, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`rounded-lg font-dmSans sm:px-6 cursor-pointer px-3 py-2 transition-all ease-in-out duration-500 ${
              activeTab === index
                ? "bg-primary text-black"
                : "bg-tertiary text-white"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          {activeTab === 0 && (
            <motion.div
              key="food"
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-9"
            >
              {food.map((item, index) => {
                const { img, name, price, desc } = item;
                return (
                  <div key={index} className="flex flex-col gap-3 h-full">
                    <div className="bg-tertiary rounded-2xl grid place-items-center p-6 h-full">
                      <Image src={img} alt={name} loading="eager" />
                    </div>
                    <h1 className="font-oswald text-xl text-white font-bold">
                      {name}
                    </h1>
                    <p className="text-subtle text-sm font-dmSans">{desc}</p>
                    <p className="font-bold text-primary font-oswald text-lg">
                      ${price}.00
                    </p>
                  </div>
                );
              })}
            </motion.div>
          )}

          {activeTab === 1 && (
            <motion.div
              key="snacks"
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-9"
            >
              {snacks.map((item, index) => {
                const { img, name, price, desc } = item;
                return (
                  <div key={index} className="flex flex-col gap-3 h-full">
                    <div className="bg-tertiary rounded-2xl grid place-items-center h-[250px] p-6">
                      <Image src={img} height={120} width={150} alt={name} loading="eager" className="object-contain" />
                    </div>
                    <h1 className="font-oswald text-xl text-white font-bold">
                      {name}
                    </h1>
                    <p className="text-subtle text-sm font-dmSans line-clamp-2">{desc}</p>
                    <p className="font-bold text-primary font-oswald text-lg">
                      ${price}
                    </p>
                  </div>
                );
              })}
            </motion.div>
          )}

          {activeTab === 2 && (
            <motion.div
              key="beverages"
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-9"
            >
              {beverages.map((item, index) => {
                const { img, name, price, desc } = item;
                return (
                  <div
                    key={index}
                    className="flex flex-col gap-3 h-full justify-stretch"
                  >
                    <div className="bg-tertiary rounded-2xl grid place-items-center h-[280px] p-3 w-full">
                      <Image
                      height={120}
                      width={120}
                        src={img}
                        alt={name}
                        loading="eager"
                        className="object-cover"
                      />
                    </div>
                    <h1 className="font-oswald text-xl text-white font-bold">
                      {name}
                    </h1>
                    <p className="text-subtle text-sm font-dmSans">{desc}</p>

                    <p className="font-bold text-primary font-oswald text-lg">
                      ${price}
                    </p>
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default MenuTab;
