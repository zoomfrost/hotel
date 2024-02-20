import { IDescriptionDataProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

const Description = ({ photos, isHomePage }: IDescriptionDataProps) => {
  return (
    <>
      {photos.map((item, i) => (
        <div
          key={i}
          className={` flex ${
            i % 2 === 0 ? "flex-row-reverse" : ""
          } max-md:flex-col  max-md:gap-y-5 justify-around max-sm:px-6 max-sm:gap-y-6 gap-x-10 mb-24 px-16`}
        >
          <div className="w-2/4 max-md:w-full grid auto-rows-auto max-md:text-center max-md:justify-items-center  max-md:text-sm text-md gap-y-4 items-center">
            <h2 className="font-semibold max-md:text-2xl text-4xl ">
              {item.heading}
            </h2>

            {isHomePage && (
              <>
                <p className="indent-5">{item.text}</p>
                <Link className="hover:font-bold block w-24" href="/rooms">
                  Подробнее
                </Link>
              </>
            )}
          </div>
          <div className="w-1/2 max-md:w-full h-[400px]">
            <Image
              width={300}
              height={300}
              className="object-cover w-full h-full"
              src={item.photo}
              alt="photo"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Description;
