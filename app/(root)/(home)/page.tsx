import Image from "next/image";
import Link from "next/link";
import React from "react";
import promoPhoto from "@/public/hotel6.jpg";
import kazan from "@/public/kazan.jpeg";
import isaaks from "@/public/isaaks.jpeg";
import bridge from "@/public/palace-bridge.jpeg";
import Facilities from "@/components/Facilities";
import Description from "@/components/Description";
import { Button } from "@/components/ui/button";
import bookHotel from "@/public/hotel4.jpg";

const Home = () => {
  const photoArr = [kazan, isaaks, bridge];

  const descrArr = [
    {
      photo: promoPhoto,
      heading: "The Cabins",
      text: "Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd Larsen. They all have an open space with a double bed, a double sofa bed, kitchen, separate toilet and an outdoor shower. On the roof, surrounded by treetops, there is a terrace, which is about nine meters above ground. The cottages are built around tall, old trees that go through the entire cottage from floor to ceiling.",
    },
  ];
  return (
    <section className="w-full">
      <Description photos={descrArr} />
      <div className="flex items-center justify-evenly gap-x-10 lg:gap-x-20 max-md:flex-col max-md:gap-y-4">
        {photoArr.map((item, i) => (
          <div className="" key={i}>
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
      <Facilities />
      <div className="grid grid-cols-2 max-md:grid-cols-1 max-md:gap-y-5 p-4 mt-24 gap-x-44 justify-items-center">
        <div className="flex flex-col gap-y-8">
          <h4 className="text-5xl">Stay in touch</h4>
          <p>Saint-Petersburg, Baskov, 13-15</p>
          <div>
            <Link
              className='after:content-["\260e"] after:ml-2'
              href="tel:+79129112937"
            >
              +7912012012
            </Link>
            <br />
            <Link className="mt-5" href="mailto:baskov@gmail.com">
              baskov@gmail.com
            </Link>
          </div>
          <ul className="flex flex-row items-center justify-start gap-x-5">
            <li>WhatsUp</li>
            <li>Telegram</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div className="w-80">
          <Image className="object-cover" src={bookHotel} alt="room" />
          <div className="flex w-full">
            <Link className="w-3/5 block" href="/booking">
              <Button className="w-full h-24 bg-gray-600 hover:bg-gray-500 rounded-none">
                Book
              </Button>
            </Link>
            <div className="bg-amber-100 w-2/5 flex-center">
              <span>
                From <br />
                &nbsp;&nbsp;<b>2400</b>
                <br /> &nbsp;&nbsp;&nbsp;&nbsp;per night
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
