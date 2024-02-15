import Description from "@/components/Description";
import React from "react";
import Container from "@/components/ui/container";
import { Metadata } from "next";
import HotelCarousel from "@/components/HotelCarousel";
import RoomsDescription from "@/components/RoomsDescription";

export const metadata: Metadata = {
  title: "Номера",
  description: "Обзор номеров",
  keywords: [
    "Басков",
    "Отель Басков",
    "Отель СПб",
    "Басков СПб",
    "Санкт-Петербург отель",
    "Гостевой дом СПб",
    "Гостевой дом Санкт-Петербург",
    "Жилье посуточно СПб",
    "Отель в центре Санкт-Петербурга",
    "центр СПб",
    "Снять квартиру СПб",
    "Снять квартиру Санкт-Петербург",
    "Забронирвать номер СПб",
    "Квартира СПб",
    "Отель забронировать номер",
    "Достопримечательности",
    "Места вокруг",
  ],
};

const Area = () => {
  // const descrArr = [
  //   {
  //     photo: "https://i.postimg.cc/8PmCLJBH/photo-2024-02-14-16-52-42-min.jpg",
  //     heading: "Трехместный №1",
  //     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quo iusto velit quis perspiciatis molestiae natus, eius odit, accusamus laboriosam repellat architecto sed ratione sequi debitis? Corrupti fugit adipisci quos?",
  //   },
  //   {
  //     photo: "https://i.postimg.cc/SNhsX78R/photo-2024-02-14-16-52-40-min.jpg",
  //     heading: "Трехместный №2",
  //     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quo iusto velit quis perspiciatis molestiae natus, eius odit, accusamus laboriosam repellat architecto sed ratione sequi debitis? Corrupti fugit adipisci quos?",
  //   },
  //   {
  //     photo: "https://i.postimg.cc/m2BLZZfF/photo-2024-02-14-16-52-54-min.jpg",
  //     heading: "Двухместный №1",
  //     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quo iusto velit quis perspiciatis molestiae natus, eius odit, accusamus laboriosam repellat architecto sed ratione sequi debitis? Corrupti fugit adipisci quos?",
  //   },
  //   {
  //     photo: "https://i.postimg.cc/FzQ9LNY8/photo-2024-02-14-16-52-49-min.jpg",
  //     heading: "Двухместный №2",
  //     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quo iusto velit quis perspiciatis molestiae natus, eius odit, accusamus laboriosam repellat architecto sed ratione sequi debitis? Corrupti fugit adipisci quos?",
  //   },
  // ];

  const photos = {
    photos: [
      "https://i.postimg.cc/rmRm4fQ0/photo-2024-02-14-16-52-32-min.jpg",
      "https://i.postimg.cc/Gtkm7H0b/photo-2024-02-14-16-52-33-min.jpg",
      "https://i.postimg.cc/XYxp6GrJ/photo-2024-02-14-16-52-34-min.jpg",
      "https://i.postimg.cc/fbrykGjQ/photo-2024-02-14-16-52-36-min.jpg",
      "https://i.postimg.cc/zDWvXPy4/photo-2024-02-14-16-52-37-min.jpg",
      "https://i.postimg.cc/j2Vj4yF8/photo-2024-02-14-16-52-39-min.jpg",
      "https://i.postimg.cc/8PmCLJBH/photo-2024-02-14-16-52-42-min.jpg",
      "https://i.postimg.cc/XYNYLjs0/photo-2024-02-14-16-52-43-min.jpg",
      "https://i.postimg.cc/RFtShNZw/photo-2024-02-14-16-52-45-min.jpg",
      "https://i.postimg.cc/59w9MYGV/photo-2024-02-14-16-52-47-min.jpg",
      "https://i.postimg.cc/BvXQWhWY/photo-2024-02-14-16-52-50-min.jpg",
      "https://i.postimg.cc/vTLG7k9B/photo-2024-02-14-16-52-52-min.jpg",
      "https://i.postimg.cc/JzT4dfFH/photo-2024-02-14-16-52-55-min.jpg",
      "https://i.postimg.cc/hPsSXFcZ/photo-2024-02-14-16-52-57-min.jpg",
      "https://i.postimg.cc/SNhsX78R/room2.jpg",
      "https://i.postimg.cc/m2BLZZfF/room3.jpg",
      "https://i.postimg.cc/FzQ9LNY8/room4.jpg",
    ],
    title: "Обзор",
    alt: "Hotel",
  };
  return (
    <Container title="area">
      <section>
        <RoomsDescription />
        <HotelCarousel array={photos} />
      </section>
    </Container>
  );
};

export default Area;
