import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

import Image from "next/image";

const HotelCarousel = () => {
  const photoArr = [
    "https://i.postimg.cc/fbXbKWs3/hotel1.jpg",
    "https://i.postimg.cc/y8DxDXry/hotel2.jpg",
    "https://i.postimg.cc/nhNzBjyb/hotel3.jpg",
    "https://i.postimg.cc/NMcjPhGd/hotel5.jpg",
    "https://i.postimg.cc/wTGTYRTy/hotel6.jpg",
    "https://i.postimg.cc/6q65tdvR/hotel7.jpg",
    "https://i.postimg.cc/cHB4pDr0/hotel8.jpg",
    "https://i.postimg.cc/gj0dfmCH/hotel9.jpg",
  ];
  return (
    <div className="paddings">
      <h2 className="text-4xl max-sm:text-2xl text-center">Overview</h2>
      <Carousel
        className="mt-6"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {photoArr.map((item, i) => (
            <CarouselItem className="pl-3 md:basis-1/2 lg:basis-1/3" key={i}>
              <div className="h-96">
                <Image
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover"
                  src={item}
                  alt="hotel rooms photo"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default HotelCarousel;
