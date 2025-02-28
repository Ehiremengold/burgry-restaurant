"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import MockUp from "../../public/assets/order-image.png";
import PrimaryLine from "../components/PrimaryLine";
import deliveryIcon from "@/public/assets/download-icons/delivery.svg";
import payIcon from "@/public/assets/download-icons/pay.svg";
import appStore from "@/public/assets/appstore.svg";
import playStore from "@/public/assets/googlestore.svg";

const Download = () => {
  return (
    <section className="section">
      <div className="px-6 container flex lg:flex-row flex-col-reverse lg:items-top items-center lg:justify-between justify-center gap-20">
        
        {/* Image Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image src={MockUp} alt="app mockup" />
        </motion.div>

        {/* Text Content Animation */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col lg:justify-start justify-center lg:items-start items-center max-sm:items-start gap-4"
        >
          <h1 className="text-white font-oswald font-bold text-2xl lg:text-4xl">
            Order Your Favorite Food Right from Your Phone
          </h1>
          <PrimaryLine />
          <p className="text-subtle lg:text-xl text-base font-dmSans lg:items-start max-sm:text-left md:text-center lg:text-left">
            Craving a delicious meal? Skip the lines and order effortlessly
            through our app. Fast, easy, and at your fingertips!
          </p>

          {/* Feature Cards with Staggered Animation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col gap-5 lg:justify-start justify-center lg:items-start items-center"
          >
            {[
              {
                img: deliveryIcon,
                main: "Free Delivery",
                sub: "Get your favorite meals delivered straight to your door – no extra cost, no hassle!",
              },
              {
                img: payIcon,
                main: "Special Promo",
                sub: "Exclusive deals just for app users! Save more while enjoying your favorite burgers.",
              },
            ].map((item, index) => {
              const { img, main, sub } = item;
              return (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="flex items-center justify-center gap-5 bg-tertiary rounded-xl px-3 py-6"
                >
                  <Image alt="" src={img} />
                  <div className="flex flex-col gap-3">
                    <h1 className="uppercase font-oswald font-bold text-white text-lg lg:text-xl">
                      {main}
                    </h1>
                    <p className="font-dmSans text-subtle lg:text-lg text-base">
                      {sub}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Store Buttons with Hover Effect */}
          <div className="flex gap-3 max-[470px]:self-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={appStore}
                className="max-[375px]:w-1/2"
                alt="apple app store"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={playStore}
                className="max-[375px]:w-1/2"
                alt="google play store"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Download;
