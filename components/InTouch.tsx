import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import bookHotel from "@/public/hotel4.jpg";
import whatsapp from "@/public/whatsapp.svg";
import telegram from "@/public/telegram.svg";
import viber from "@/public/viber.svg";

const InTouch = () => {
  const socialLinksArr = [
    {
      text: "WhatsApp",
      link: "",
      icon: whatsapp,
      id: 1,
    },
    {
      text: "Telegram",
      link: "https://t.me/lu_malolu",
      icon: telegram,
      id: 2,
    },
    {
      text: "Viber",
      link: "",
      icon: viber,
      id: 3,
    },
  ];
  return (
    <div className="grid grid-cols-2 max-md:grid-cols-1 max-md:gap-y-5 p-4  gap-x-44 justify-items-center">
      <div className="flex flex-col gap-y-8">
        <h4 className="md:text-5xl xs:text-3xl">Контакты</h4>
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
          {socialLinksArr.map((link) => {
            return (
              <li className="flex flex-row items-center" key={link.id}>
                <Image
                  width={25}
                  height={25}
                  src={link.icon}
                  alt="social photo"
                />
                <Link
                  target="_blank"
                  className="max-sm:text-xs after:hover:w-full after:block after:w-0 after:h-0.5 after:bg-gray-600 after:transition-all after:duration-300 "
                  href={link.link}
                >
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-96 max-lg:w-80 max-sm:w-72">
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
  );
};

export default InTouch;
