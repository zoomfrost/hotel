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
        <div className="grid grid-cols-2 max-sm:grid-cols-1 justify-items-center max-sm:px-6 max-sm:gap-y-6 gap-x-10 mb-36 px-6">
          <div className="grid auto-rows-auto max-sm:text-center max-md:text-sm text-md gap-y-4 items-center">
            <h2 className=" heading2 max-md:heading3">The Cabins</h2>
            <p className="">{item.text}</p>
            {pathname === "/" || "" ? (
              <Link className="hover:font-bold block w-24" href="/area">
                Read more
              </Link>
            ) : null}
          </div>
          <Image
            width={450}
            height={450}
            className="bg-cover"
            src={item.photo}
            alt="photo"
          />
        </div>
      ))}
    </>
  );
};

export default Description;
