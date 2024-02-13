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
          } max-md:flex-col  max-md:gap-y-5 justify-items-center max-sm:px-6 max-sm:gap-y-6 gap-x-10 mb-24 px-8`}
        >
          <div className="grid auto-rows-auto max-md:text-center max-md:justify-items-center  max-md:text-sm text-md gap-y-4 items-center">
            <h2 className="font-semibold max-md:text-2xl text-4xl ">
              {item.heading}
            </h2>
            <p className="">{item.text}</p>
            {isHomePage && (
              <Link className="hover:font-bold block w-24" href="/area">
                Read more
              </Link>
            )}
          </div>
          <div>
            <Image
              width={2500}
              height={2500}
              className="object-cover"
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
