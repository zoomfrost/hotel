import dynamic from "next/dynamic";
import Container from "@/components/ui/container";

// const Description = dynamic(() => import("@/components/Description"));
// const PhotoGallery = dynamic(() => import("@/components/PhotoGallery"));
// const Facilities = dynamic(() => import("@/components/Facilities"));
// const HotelCarousel = dynamic(() => import("@/components/HotelCarousel"));
// const InTouch = dynamic(() => import("@/components/InTouch"));

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
      photo: "https://i.postimg.cc/wTGTYRTy/hotel6.jpg",
      heading: "Baskov",
      text: "Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd Larsen. They all have an open space with a double bed, a double sofa bed, kitchen, separate toilet and an outdoor shower. On the roof, surrounded by treetops, there is a terrace, which is about nine meters above ground. The cottages are built around tall, old trees that go through the entire cottage from floor to ceiling.",
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
    <Container isHomePage title="Hotel in the center of Saint-Petesrburg">
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
