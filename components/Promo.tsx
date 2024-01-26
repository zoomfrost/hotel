"use client";

import { usePathname } from "next/navigation";
import React from "react";

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
    <>
      <div
        className={`flex-col rounded-xl bg-banner bg-cover bg-center text-center brightness-50 flex-center w-full min-h-[150px] ${
          isHomePage
            ? " xs:min-h-[200px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[600px]"
            : " lg:min-h-[300px]"
        } `}
      ></div>
      <h1 className="max-xs:hidden xs:text-lg sm:heading3 heading1 uppercase font-light  text-center top-1/2 translate-y-1/2 right-1/2 translate-x-1/2 text-white absolute">
        {title}
      </h1>
    </>
  );
};
