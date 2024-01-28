"use client";

import { IDescriptionDataProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Description = ({ photos }: IDescriptionDataProps) => {
  const pathname = usePathname();
  return (
    <>
      {photos.map((item, i) => (
        <div
          key={i}
          className={` flex ${
            i % 2 === 0 ? "flex-row-reverse" : ""
          } max-md:flex-col  max-md:gap-y-5 justify-items-center max-sm:px-6 max-sm:gap-y-6 gap-x-10 mb-36 px-8`}
        >
          <div className="grid auto-rows-auto max-md:text-center max-md:justify-items-center  max-md:text-sm text-md gap-y-4 items-center">
            <h2 className=" heading2 max-md:heading3">{item.heading}</h2>
            <p className="">{item.text}</p>
            {pathname === "/" || "" ? (
              <Link className="hover:font-bold block w-24" href="/area">
                Read more
              </Link>
            ) : null}
          </div>
          <div>
            <Image className="bg-cover" src={item.photo} alt="photo" />
          </div>
        </div>
      ))}
    </>
  );
};

export default Description;
