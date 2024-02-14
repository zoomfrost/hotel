import Description from "@/components/Description";
import React from "react";
import Container from "@/components/ui/container";
import { Metadata } from "next";
import HotelCarousel from "@/components/HotelCarousel";

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
  const descrArr = [
    {
      photo: "https://i.postimg.cc/8PmCLJBH/photo-2024-02-14-16-52-42-min.jpg",
      heading: "Трехместный №1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quo iusto velit quis perspiciatis molestiae natus, eius odit, accusamus laboriosam repellat architecto sed ratione sequi debitis? Corrupti fugit adipisci quos?",
    },
    {
      photo: "https://i.postimg.cc/SNhsX78R/photo-2024-02-14-16-52-40-min.jpg",
      heading: "Трехместный №2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quo iusto velit quis perspiciatis molestiae natus, eius odit, accusamus laboriosam repellat architecto sed ratione sequi debitis? Corrupti fugit adipisci quos?",
    },
    {
      photo: "https://i.postimg.cc/m2BLZZfF/photo-2024-02-14-16-52-54-min.jpg",
      heading: "Двухместный №1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quo iusto velit quis perspiciatis molestiae natus, eius odit, accusamus laboriosam repellat architecto sed ratione sequi debitis? Corrupti fugit adipisci quos?",
    },
    {
      photo: "https://i.postimg.cc/FzQ9LNY8/photo-2024-02-14-16-52-49-min.jpg",
      heading: "Двухместный №2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quo iusto velit quis perspiciatis molestiae natus, eius odit, accusamus laboriosam repellat architecto sed ratione sequi debitis? Corrupti fugit adipisci quos?",
    },
  ];

  const photos = {
    photos: [
      "https://i.postimg.cc/nhNzBjyb/hotel3.jpg",
      "https://i.postimg.cc/6q65tdvR/hotel7.jpg",
      "https://i.postimg.cc/cHB4pDr0/hotel8.jpg",
      "https://i.postimg.cc/gj0dfmCH/hotel9.jpg",
    ],
    title: "Обзор",
    alt: "Hotel",
  };
  return (
    <Container title="area">
      <section>
        <Description isHomePage={false} photos={descrArr} />
        <HotelCarousel array={photos} />
      </section>
    </Container>
  );
};

export default Area;
