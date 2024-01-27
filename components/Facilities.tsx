import React from "react";
import Image from "next/image";
import bed from "@/public/bed.png";
import calculator from "@/public/calculator.png";
import camera from "@/public/camera.png";
import cart from "@/public/cart.png";
import connection from "@/public/connection.png";
import library from "@/public/library.png";
import location from "@/public/location.png";
import manWoman from "@/public/man-woman.png";
import map from "@/public/map.png";
import shower from "@/public/shower.png";
import spoonKnife from "@/public/spoon-knife.png";
import users from "@/public/users.png";

const Facilities = () => {
  const arr = [
    {
      imgSrc: bed,
      text: "spalnoe mesto",
    },
    {
      imgSrc: calculator,
      text: "spalnoe mesto",
    },
    {
      imgSrc: camera,
      text: "spalnoe mesto",
    },
    {
      imgSrc: cart,
      text: "spalnoe mesto",
    },
    {
      imgSrc: connection,
      text: "spalnoe mesto",
    },
    {
      imgSrc: library,
      text: "spalnoe mesto",
    },
    {
      imgSrc: location,
      text: "spalnoe mesto",
    },
    {
      imgSrc: manWoman,
      text: "spalnoe mesto",
    },
    {
      imgSrc: map,
      text: "spalnoe mesto",
    },
    {
      imgSrc: shower,
      text: "spalnoe mesto",
    },
    {
      imgSrc: spoonKnife,
      text: "spalnoe mesto",
    },
    {
      imgSrc: users,
      text: "spalnoe mesto",
    },
  ];
  return (
    <section className="bg-amber-100 mt-12 p-5">
      <h3 className="text-center my-3 text-2xl mb-6">Facilities</h3>
      <div className="grid grid-cols-4 gap-y-8 gap-x-24 p-5 max-md:grid-cols-3 max-sm:grid-cols-2 ">
        {arr.map((item, i) => (
          <div className="flex-center flex-col gap-y-1" key={i}>
            <Image src={item.imgSrc} alt="photo" />
            <p className="max-md:text-sm text-center">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Facilities;
