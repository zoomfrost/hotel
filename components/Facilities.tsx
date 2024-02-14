import React from "react";
import Image from "next/image";
import bed from "@/public/bed.svg";
import camera from "@/public/camera.svg";
import connection from "@/public/connection.svg";
import library from "@/public/library.svg";
import shower from "@/public/shower.svg";
import spoonKnife from "@/public/spoon-knife.svg";
import briefcase from "@/public/briefcase.svg";
import clock from "@/public/clock.svg";
import key from "@/public/key.svg";
import location from "@/public/location2.svg";
import discount from "@/public/price-tags.svg";
import railway from "@/public/road.svg";
import cart from "@/public/cart.svg";

const Facilities = () => {
  const arr = [
    {
      imgSrc: bed,
      text: "Комфортные кровати",
    },
    {
      imgSrc: briefcase,
      text: "Возможность оставить багаж до заезда",
    },
    {
      imgSrc: camera,
      text: "Исторический центр города",
    },
    {
      imgSrc: clock,
      text: "Удобное время заезда",
    },
    {
      imgSrc: connection,
      text: "Бесплатный доступ в интернет",
    },
    {
      imgSrc: library,
      text: "Известные достопримечательности недалеко",
    },
    {
      imgSrc: key,
      text: "Ключ от номера есть только у вас",
    },
    {
      imgSrc: location,
      text: "Расположение в тихом месте",
    },
    {
      imgSrc: discount,
      text: "Скидки постоянным гостям",
    },
    {
      imgSrc: cart,
      text: "Возможность готовить самим ",
    },
    {
      imgSrc: spoonKnife,
      text: "Столовые и кафе в шаговой доступности",
    },
    {
      imgSrc: railway,
      text: "Вокзал в 10 минутах пешком",
    },
  ];
  return (
    <section className="bg-amber-100 mt-12 p-5">
      <h3 className="text-center my-3 text-2xl mb-6">Удобства</h3>
      <div className="grid grid-cols-4 hyphens-auto gap-y-7 gap-x-24 p-5 max-md:grid-cols-3 max-sm:grid-cols-2 ">
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
