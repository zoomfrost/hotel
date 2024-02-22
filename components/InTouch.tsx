import Image from "next/image";
import Link from "next/link";
import whatsapp from "@/public/whatsapp.svg";
import telegram from "@/public/telegram.svg";
import viber from "@/public/viber.svg";
import InTouchBooking from "./InTouchBooking";
import { ReactNode } from "react";

const InTouch = () => {
  const socialLinksArr = [
    {
      text: "WhatsApp",
      link: "https://wa.me/89117283072",
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
      link: "viber://chat?number=%2B79117283072",
      icon: viber,
      id: 3,
    },
  ];
  return (
    <div className="pt-12 grid grid-cols-2 max-md:grid-cols-1 max-md:gap-y-5 p-4  gap-x-44 justify-items-center">
      <div className="flex flex-col gap-y-8">
        <h4 className="md:text-5xl xs:text-3xl">Контакты</h4>
        <p>Saint-Petersburg, Baskov, 13-15</p>
        <div>
          <Link
            className='after:content-["\260e"] after:ml-2'
            href="tel:+79117283072"
          >
            +79117283072
          </Link>
          <br />
          <Link className="mt-5" href="mailto:support@baskov.online">
            support@baskov.online
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
      <InTouchBooking />
    </div>
  );
};

export default InTouch;
