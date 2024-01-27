import Image from "next/image";
import Link from "next/link";
import React from "react";
import promoPhoto from "@/public/hotel6.jpg";
import kazan from "@/public/kazan.jpeg";
import isaaks from "@/public/isaaks.jpeg";
import bridge from "@/public/palace-bridge.jpeg";
import Facilities from "@/components/Facilities";
import Description from "@/components/Description";

const Home = () => {
  const photoArr = [kazan, isaaks, bridge];

  const descrArr = [
    {
      photo: promoPhoto,
      text: "Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd Larsen. They all have an open space with a double bed, a double sofa bed, kitchen, separate toilet and an outdoor shower. On the roof, surrounded by treetops, there is a terrace, which is about nine meters above ground. The cottages are built around tall, old trees that go through the entire cottage from floor to ceiling.",
    },
  ];
  return (
    <section className="w-full">
      <Description photos={descrArr} />
      <div className="flex items-center justify-evenly gap-x-10 lg:gap-x-20 max-md:flex-col max-md:gap-y-4">
        {photoArr.map((item, i) => (
          <div className="" key={i}>
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
      <Facilities />
    </section>
  );
};

export default Home;
