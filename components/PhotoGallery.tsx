import kazan from "@/public/kazan.jpeg";
import isaaks from "@/public/isaaks.jpeg";
import bridge from "@/public/palace-bridge.jpeg";
import Image from "next/image";
import { CarouselContent } from "./ui/carousel";

const PhotoGallery = () => {
  const photoArr = [kazan, isaaks, bridge];
  return (
    <div className="flex items-center justify-evenly gap-x-10 lg:gap-x-20 max-md:flex-col max-md:gap-y-4">
      {photoArr.map((item, i) => (
        <div key={i}>
          <Image
            width={300}
            height={300}
            src={item}
            className="grayscale object-cover h-64"
            alt="photo"
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
