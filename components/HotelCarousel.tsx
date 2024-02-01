import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

import hotel1 from "@/public/hotel1.jpg";
import hotel2 from "@/public/hotel2.jpg";
import hotel3 from "@/public/hotel3.jpg";
import hotel4 from "@/public/hotel4.jpg";
import hotel5 from "@/public/hotel5.jpg";
import hotel6 from "@/public/hotel6.jpg";
import Image from "next/image";

const HotelCarousel = () => {
  const photoArr = [hotel1, hotel2, hotel3, hotel4, hotel5, hotel6];
  return (
    <div className="paddings">
      <h2 className="heading3 text-center">Overview</h2>
      <Carousel
        className="mt-6"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {photoArr.map((item, i) => (
            <CarouselItem className="pl-3 md:basis-1/2 lg:basis-1/3" key={i}>
              <div className="h-80">
                <Image
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
