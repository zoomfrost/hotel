import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/logo.svg";
import { IHeaderDataProps } from "@/types";
import dynamic from "next/dynamic";
import AlertForm from "./AlertForm";

const MobileNav = dynamic(() => import("@/components/MobileNav"));

const Header = ({ links, isDashboard }: IHeaderDataProps) => {
  return (
    <header>
      <nav className="flex-center fixed top-0 z-50 w-[100vw] borber-black-200 py-4  bg-gray-400">
        <div className="flex items-center justify-around mx-auto w-full max-w-screen-2xl px-2 xs:px-8 sm:px-16 max=md:">
          <Link href="/">
            <Image width={60} height={60} priority src={logo} alt="logo" />
          </Link>
          <ul className="flex-center gap-x-3 max-md:hidden md:gap-x-10 lg:gap-x-14">
            {links.map((item, i) => (
              <li key={i}>
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
          <div className="flex flex-row gap-x-7 max-xs:gap-x-2">
            {!isDashboard && <AlertForm />}
            <MobileNav links={links} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
