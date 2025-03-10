"use client";
import Image from "next/image";
import logo from "@/public/assets/logo.png";
import Button from "@/app/components/Button";
import menuIcon from "@/public/assets/menu.png";
import closeMenuIcon from "@/public/assets/close-menu.png";
import { useEffect, useState } from "react";
import Hero from "@/app/components/Hero";
import Offerings from "./Offerings";

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
    <section className="bg-secondary h-auto pt-5 grid place-items-center">
      <nav className="lg:px-10 px-8 py-4 bg-secondary fixed z-50 left-0 right-0 top-0 ">
        <div className="container flex items-center justify-between">

        <Image src={logo} className="w-28" alt="logo" />

        <ul className="list-none text-white font-dmSans md:flex hidden gap-12">
          <li className="text-primary font-medium">Home</li>
          <li>Menu</li>
          <li>Reservation</li>
          <li>Contact us</li>
        </ul>

        <span className="md:block hidden">
          <Button text="pick up" color="primary" />
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
          </div>
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

        <span className="md:hidden flex justify-center">
          <Button text="pick up" color="note-primary" />
        </span>
      </nav>
      <Hero />
      <Offerings />
    </section>
  );
};

export default Header;
