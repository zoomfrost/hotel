import Image from "next/image";

const PhotoGallery = async () => {
  const photoArr = [
    "https://i.postimg.cc/7PXZXQFN/kazan.jpg",
    "https://i.postimg.cc/k5rJBrS7/isaaks.jpg",
    "https://i.postimg.cc/3JV7cMn2/palace-bridge.jpg",
  ];
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
