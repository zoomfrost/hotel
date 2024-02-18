import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

import Image from "next/image";

interface HotelCarouselProps {
  array: {
    photos: string[];
    title: string;
    alt: string;
  };
}

const HotelCarousel = ({ array }: HotelCarouselProps) => {
  const { title, alt, photos } = array;
  return (
    <div className="pt-12 px-6">
      <h2 className="text-4xl max-sm:text-2xl text-center">{title}</h2>
      <Carousel
        className="mt-6"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {photos.map((item, i) => (
            <CarouselItem className="pl-3 md:basis-1/2 lg:basis-1/3" key={i}>
              <div className="h-[450px]">
                <Image
                  width={1000}
                  height={2000}
                  className="w-full h-full object-contain"
                  src={item}
                  alt={alt}
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
