import Container from "@/components/ui/container";

import type { Metadata } from "next";
import Description from "@/components/Description";
import PhotoGallery from "@/components/PhotoGallery";
import Facilities from "@/components/Facilities";
import HotelCarousel from "@/components/HotelCarousel";
import InTouch from "@/components/InTouch";

export const metadata: Metadata = {
  title: "Baskov",
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
  ],
};

const Home = async () => {
  const descrArr = [
    {
      photo: "https://i.postimg.cc/SNhsX78R/room2.jpg",
      heading: "Басков",
      text: "Прикоснитесь к истории Санкт-Петербурга, остановившись в самом сердце города. У нас вы сможете почувствовать себя как дома. В нашем гостевом доме всего четыре номера. Два трехместных и два двухместных. Есть возможность дополнительного размещения в каждом номере. В номерах стоят 1,5-спальные кровати, тумбочки, стол, стулья, шкаф. Также в каждом номере есть чайник, посуда. Постельное белье и полотенца комплектуются в номере по количеству гостей. Также для вашего удобства есть фен, утюг, гладильная доска, стиральная машина, тапочки. Для того, чтобы приготовить еду стоят мультиварка и микроволновка. Холодильник общий на 4 номера",
    },
  ];

  const feedback = {
    photos: [
      "https://i.postimg.cc/FzP2ZmWD/feedback1.jpg",
      "https://i.postimg.cc/RCX59QSK/feedback2.jpg",
      "https://i.postimg.cc/pX6w5Wnd/feedback3.jpg",
      "https://i.postimg.cc/zXvmfbvM/feedback4.jpg",
      "https://i.postimg.cc/XvMtxsLS/feedback5.jpg",
      "https://i.postimg.cc/QMpwzcYB/feedback6.jpg",
      "https://i.postimg.cc/8zfqh2hm/feedback7.jpg",
    ],
    title: "Отзывы",
    alt: "feedback",
  };
  return (
    <Container isHomePage title="Отель в центре Санкт-Петербуга">
      <section className="w-full">
        <Description isHomePage={true} photos={descrArr} />
        <PhotoGallery />
        <Facilities />
        <HotelCarousel array={feedback} />
        <InTouch />
      </section>
    </Container>
  );
};

export default Home;
