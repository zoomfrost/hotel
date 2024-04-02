import Image from "next/image";
import React from "react";
import promo from "@/public/promo.jpg";
import { IPromoProps } from "@/types";

const Promo = ({ title, isHomePage }: IPromoProps) => {
  return (
    <section className="mt-[104px] w-full relative ">
      <div
        className={`w-full h-[150px]  ${
          isHomePage
            ? " xs:h-[150px] sm:h-[200px] md:h-[300px] lg:h-[400px]"
            : " lg:h-[300px]"
        } `}
      >
        <Image
          priority
          quality={50}
          fill
          placeholder="blur"
          className="h-full w-full mx-auto brightness-50 object-cover"
          src={promo}
          alt="promo photo"
        />
        <h1
          className="max-xs:hidden xs:text-lg sm:text-xl md:text-2xl lg:text-4xl uppercase font-light  text-center top-1/2 
        -translate-y-1/2 right-1/2 translate-x-1/2 text-white absolute"
        >
          {title}
        </h1>
      </div>
    </section>
  );
};

export default Promo;
