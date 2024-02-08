import React from "react";
import promoPhoto from "@/public/hotel6.jpg";

import Facilities from "@/components/Facilities";
import Description from "@/components/Description";
import PhotoGallery from "@/components/PhotoGallery";
import InTouch from "@/components/InTouch";
import HotelCarousel from "@/components/HotelCarousel";
import Container from "@/components/ui/container";
import { getData } from "@/actions/action";

const Home = async () => {
  const descrArr = await getData([
    {
      photo: "https://i.postimg.cc/wTGTYRTy/hotel6.jpg",
      heading: "Baskov",
      text: "Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd Larsen. They all have an open space with a double bed, a double sofa bed, kitchen, separate toilet and an outdoor shower. On the roof, surrounded by treetops, there is a terrace, which is about nine meters above ground. The cottages are built around tall, old trees that go through the entire cottage from floor to ceiling.",
    },
  ]);
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
