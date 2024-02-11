import React from "react";
import Image from "next/image";
import bed from "@/public/bed.svg";
import calculator from "@/public/calculator.svg";
import camera from "@/public/camera.svg";
import cart from "@/public/cart.svg";
import connection from "@/public/connection.svg";
import library from "@/public/library.svg";
import location from "@/public/location.svg";
import manWoman from "@/public/man-woman.svg";
import map from "@/public/map.svg";
import shower from "@/public/shower.svg";
import spoonKnife from "@/public/spoon-knife.svg";
import users from "@/public/users.svg";

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
