"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import bookHotel from "@/public/hotel4.jpg";
import { getPricesPerDay } from "@/actions/action";
import Image from "next/image";
import Link from "next/link";

import FeedBackNotification from "./FeedBackNotification";

const InTouchBooking = () => {
  const [price, setPrice] = useState<number[] | null>(null);
  const [status, setStatus] = useState("Загрузка");
  useEffect(() => {
    getPricesPerDay()
      .then((data) => {
        setPrice(data.map((item) => +item.dates.price));
      })
      .catch(() => setStatus("Ошибка загрузки"));
  }, []);
  return (
    <div className="w-96 max-lg:w-80 max-sm:w-72">
      <Image className="object-cover" src={bookHotel} alt="room" />
      <div className="flex w-full">
        <Link className="w-3/5 block" href="/booking">
          <Button className="w-full uppercase text-white font-light h-24 bg-gray-600 hover:bg-gray-500 rounded-none">
            Забронировать
          </Button>
        </Link>
        <div className="bg-amber-100 w-2/5 flex-center">
          <span>
            {price ? (
              <>
                От <br />
                &nbsp;&nbsp;
                <b>{`${Math.min(...price)} руб.`}</b>
                <br /> &nbsp;&nbsp;&nbsp;&nbsp;за сутки
              </>
            ) : (
              <FeedBackNotification status={status} />
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default InTouchBooking;
