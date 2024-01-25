import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/logo.png";
import hamburger from "@/public/hamburger-menu.svg";
import { Button } from "./ui/button";

const Navbar = () => {
  const links = [
    {
      name: "home",
      link: "/",
      id: 1,
    },
    {
      name: "the area",
      link: "/area",
      id: 2,
    },
    {
      name: "booking",
      link: "/booking",
      id: 3,
    },
    {
      name: "about",
      link: "/about",
      id: 4,
    },
    {
      name: "faq",
      link: "/faq",
      id: 5,
    },
  ];
  return (
    <nav className="flex-center fixed top-0 z-50 w-full borber-black-200 py-7 text-white bg-emerald-800">
      <div className="flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16 max=md:">
        <Link href="/">
          <Image src={logo} alt="logo" />
        </Link>
        <ul className="flex-center gap-x-3 max-md:hidden md:gap-x-10 lg:gap-x-14">
          {links.map((item) => (
            <li>
              <Link
                href={item.link}
                key={item.id}
                className="font-light uppercase sm:text-sm text-base lg:text-lg after:block after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 after:hover:w-full"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-row gap-x-6 max-xs:gap-x-2">
          <Link href="/booking">
            <Button className="bg-black-100 font-light uppercase sm:text-sm text-base lg:text-lg">
              BOOK NOW
            </Button>
          </Link>
          <Image
            src={hamburger}
            width={30}
            height={30}
            alt="Hamburger menu"
            className="block md:hidden"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
