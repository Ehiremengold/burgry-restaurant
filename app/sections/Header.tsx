"use client";
import Image from "next/image";
import logo from "@/public/assets/logo.png";
import Button from "../components/Button";
import menuIcon from "@/public/assets/menu.png";
import closeMenuIcon from "@/public/assets/close-menu.png";
import { useEffect, useState } from "react";
import Hero from "../components/Hero";

const Header = () => {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (menu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menu]);
  return (
    <section className="h-screen bg-secondary pt-5">
      <nav className="px-8 container flex items-center justify-between">
        <Image src={logo} className="w-28" alt="logo" />

        <ul className="list-none text-white font-dmSans md:flex hidden gap-12">
          <li className="text-primary font-medium">Home</li>
          <li>Menu</li>
          <li>Reservation</li>
          <li>Contact us</li>
        </ul>

        <span className="md:block hidden">
          <Button text="shop online" color="primary" />
        </span>
        <button className="md:hidden block" onClick={() => setMenu(!menu)}>
          {menu ? (
            <Image
              src={closeMenuIcon}
              className="size-10"
              alt="close-menu-icon"
            />
          ) : (
            <Image src={menuIcon} className="size-10" alt="menu-icon" />
          )}
        </button>
      </nav>

      <nav
        className={`transition-all ease-in-out duration-300 ${
          menu ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
        } z-50 fixed md:hidden h-1/2 w-3/4 top-24 right-5 rounded-lg bg-primary flex flex-col justify-center item-center gap-12`}
      >
        <ul className="font-oswald text-secondary text-2xl list-none gap-8 flex flex-col justify-center items-center">
          <li className="font-medium">Home</li>
          <li>Menu</li>
          <li>Reservation</li>
          <li>Contact us</li>
        </ul>
      </nav>
      <Hero />
    </section>
  );
};

export default Header;
