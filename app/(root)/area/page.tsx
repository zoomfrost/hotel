import Description from "@/components/Description";
import React from "react";
import descrPhoto from "@/public/palace-bridge.jpeg";
import Container from "@/components/ui/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Местность",
  description: "Гостевой дом / Отель в центре Санкт-Петербурга",
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
      photo: descrPhoto,
      heading: "Nearby",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quo iusto velit quis perspiciatis molestiae natus, eius odit, accusamus laboriosam repellat architecto sed ratione sequi debitis? Corrupti fugit adipisci quos?",
    },
    {
      photo: descrPhoto,
      heading: "Nearby",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quo iusto velit quis perspiciatis molestiae natus, eius odit, accusamus laboriosam repellat architecto sed ratione sequi debitis? Corrupti fugit adipisci quos?",
    },
    {
      photo: descrPhoto,
      heading: "Nearby",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quo iusto velit quis perspiciatis molestiae natus, eius odit, accusamus laboriosam repellat architecto sed ratione sequi debitis? Corrupti fugit adipisci quos?",
    },
    {
      photo: descrPhoto,
      heading: "Nearby",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quo iusto velit quis perspiciatis molestiae natus, eius odit, accusamus laboriosam repellat architecto sed ratione sequi debitis? Corrupti fugit adipisci quos?",
    },
  ];
  return (
    <Container title="area">
      <section>
        <Description isHomePage={false} photos={descrArr} />
      </section>
    </Container>
  );
};

export default Area;
