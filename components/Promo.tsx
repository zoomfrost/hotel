import Image from "next/image";
import React from "react";
import promo from "@/public/promo.jpg";
import { IPromoProps } from "@/types";

const Promo = ({ title, isHomePage }: IPromoProps) => {
  return (
    <section className="nav-padding w-full relative ">
      <div
        className={`w-full h-[150px] ${
          isHomePage
            ? " xs:h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px]"
            : " lg:h-[300px]"
        } `}
      >
        <Image
          priority
          fill={true}
          className=" h-full w-fulls brightness-50 object-cover"
          src="https://i.postimg.cc/htmgFC56/promo.jpg"
          alt="promo photo"
        />
        <h1 className="max-xs:hidden xs:text-lg sm:heading3 heading1 uppercase font-light  text-center top-1/2 translate-y-1/2 right-1/2 translate-x-1/2 text-white absolute">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default Promo;
