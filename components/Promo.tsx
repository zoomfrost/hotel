"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import promo from "@/public/promo.jpg";

const Promo = () => {
  const pathname = usePathname();

  if (pathname === "/" || "") {
    return (
      <section className="nav-padding w-full relative ">
        <Layout isHomePage title="Hotel in the heart of Saint-Petersburg" />
      </section>
    );
  } else {
    return (
      <section className="nav-padding w-full relative ">
        <Layout title={pathname.slice(1)} />
      </section>
    );
  }
};

export default Promo;

const Layout = ({
  title,
  isHomePage,
}: {
  title: string;
  isHomePage?: boolean;
}) => {
  return (
    <div
      className={`w-full h-[150px] ${
        isHomePage
          ? " xs:h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px]"
          : " lg:h-[300px]"
      } `}
    >
      <Image
        className=" h-full brightness-50 object-cover"
        src={promo}
        alt="promo photo"
      />
      <h1 className="max-xs:hidden xs:text-lg sm:heading3 heading1 uppercase font-light  text-center top-1/2 translate-y-1/2 right-1/2 translate-x-1/2 text-white absolute">
        {title}
      </h1>
    </div>
  );
};
