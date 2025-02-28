"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import logo from "@/public/assets/logo.png";
import {
  phoneIcon,
  emailIcon,
  locationIcon,
  facebookIcon,
  twitterIcon,
  instagramIcon,
} from "@/public/assets/footer/export";

const Footer = () => {
  return (
    <footer className="section">
      <div className="container px-6 grid lg:grid-cols-4 gap-12 items-stretch">
        {/* Logo and Description Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col gap-3"
        >
          <Image src={logo} className="lg:w-full w-1/4" alt="logo" />
          <p className="text-white text-base lg:text-sm font-dmSans lg:w-full sm:w-3/4">
            Serving happiness, one bite at a time. At Burgry, we’re all about
            great food, good vibes, and unforgettable moments. Taste the
            difference today!
          </p>
        </motion.div>

        {/* Support Column Animation */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col gap-3"
        >
          <h2 className="font-oswald font-bold text-white text-base uppercase">
            support
          </h2>
          <ul className="flex flex-col gap-3 list-none text-white font-dmSans capitalize text-sm">
            <li>FAQ</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Contact</li>
          </ul>
        </motion.div>

        {/* Contact Column Animation */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col gap-3"
        >
          <h2 className="font-oswald font-bold text-white text-base uppercase">
            phone
          </h2>
          <div className="flex items-center gap-3">
            <Image src={phoneIcon} alt="phone-icon" />
            <a href="tel:+2346231232341" className="text-sm text-white">
              +234-623-123-2341
            </a>
          </div>
          <h2 className="font-oswald font-bold text-white text-base uppercase">
            email
          </h2>
          <div className="flex items-center gap-3">
            <Image src={emailIcon} alt="email-icon" />
            <a
              href="mailto:ehiremengold@gmail.com"
              className="text-sm text-white"
            >
              contact@thedeveloper.com
            </a>
          </div>
        </motion.div>

        {/* Address and Social Icons Animation */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-3"
        >
          <h2 className="font-oswald font-bold text-white text-base uppercase">
            address
          </h2>
          <div className="flex items-center gap-3">
            <Image src={locationIcon} alt="location-icon" />
            <a href="#" className="text-sm text-white">
              Jl. Pantai Kuta No. 34, Badung, Bali.
            </a>
          </div>
          <h2 className="font-oswald font-bold text-white text-base uppercase">
            follow us
          </h2>
          <div className="flex items-center gap-3">
            {[facebookIcon, twitterIcon, instagramIcon].map((icon, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Image src={icon} alt="social-icon" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Divider Line Animation */}
      <motion.hr
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 0.15, scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="container mt-10 opacity-20"
        style={{ transformOrigin: "left" }}
      />

      {/* Footer Bottom Animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mt-5 container flex gap-4 lg:justify-between justify-center items-center sm:flex-row flex-col text-white"
      >
        <a href="mailto:ehiremengold@gmail.com" className="font-dmSans">
          Contact Developer
        </a>

        <h1 className="capitalize font-dmSans">
          Copyright &copy; 2025. All rights reserved.
        </h1>
      </motion.div>
    </footer>
  );
};

export default Footer;
