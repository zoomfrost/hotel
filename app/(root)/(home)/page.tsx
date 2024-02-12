import dynamic from "next/dynamic";
import Container from "@/components/ui/container";

const Description = dynamic(() => import("@/components/Description"));
const PhotoGallery = dynamic(() => import("@/components/PhotoGallery"));
const Facilities = dynamic(() => import("@/components/Facilities"));
const HotelCarousel = dynamic(() => import("@/components/HotelCarousel"));
const InTouch = dynamic(() => import("@/components/InTouch"));

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Baskov",
  description: "Гостевой дом / Отель в центре Санкт-Петербурга",
};

const Home = async () => {
  const descrArr = [
    {
      photo: "https://i.postimg.cc/wTGTYRTy/hotel6.jpg",
      heading: "Baskov",
      text: "Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd Larsen. They all have an open space with a double bed, a double sofa bed, kitchen, separate toilet and an outdoor shower. On the roof, surrounded by treetops, there is a terrace, which is about nine meters above ground. The cottages are built around tall, old trees that go through the entire cottage from floor to ceiling.",
    },
  ];
  return (
    <Container isHomePage title="Hotel in the center of Saint-Petesrburg">
      <section className="w-full">
        <Description isHomePage={true} photos={descrArr} />
        <PhotoGallery />
        <Facilities />
        <HotelCarousel />
        <InTouch />
      </section>
    </Container>
  );
};

export default Home;
