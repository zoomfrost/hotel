import Image from "next/image";
import Link from "next/link";
import React from "react";
import promoPhoto from "@/public/hotel6.jpg";
import kazan from "@/public/kazan.jpeg";
import isaaks from "@/public/isaaks.jpeg";
import bridge from "@/public/palace-bridge.jpeg";

const Home = () => {
  const photoArr = [kazan, isaaks, bridge];
  return (
    <section className="w-full">
      <div className="grid grid-cols-2 max-sm:grid-cols-1 justify-items-center max-sm:px-6 max-sm:gap-y-6 gap-x-10 mb-36 px-4">
        <div className="grid auto-rows-auto max-sm:text-center max-md:text-sm text-md gap-y-4 items-center">
          <h2 className="text-white heading2 max-md:heading3">The Cabins</h2>
          <p className="text-white">
            Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are
            designed by architect Sigurd Larsen. They all have an open space
            with a double bed, a double sofa bed, kitchen, separate toilet and
            an outdoor shower. On the roof, surrounded by treetops, there is a
            terrace, which is about nine meters above ground. The cottages are
            built around tall, old trees that go through the entire cottage from
            floor to ceiling.
          </p>
          <Link className="text-white hover:font-bold" href="/area">
            Read more
          </Link>
        </div>
        <Image
          width={450}
          height={450}
          className="bg-cover"
          src={promoPhoto}
          alt="photo"
        />
      </div>
      <div className="flex-center gap-x-10 lg:gap-x-20 max-md:flex-col">
        {photoArr.map((item, i) => (
          <div className="w-60 lg:w-80 xl:w-96" key={i}>
            <Image
              width={300}
              height={300}
              src={item}
              className="grayscale object-cover h-64"
              alt="photo"
            />
          </div>
        ))}
      </div>
      {/* <Facilities /> */}
    </section>
  );
};

export default Home;
