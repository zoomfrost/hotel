import HistoryList from "@/components/dashboard/HistoryList";
import { IBooking } from "@/types";
import React from "react";

const History = async () => {
  const res = await fetch("https://hotel-five-umber.vercel.app/api/booking");
  const data = await res.json();
  const allBookings: IBooking[] = data.filter((item: IBooking) => {
    return !item.canceled;
  });
  return (
    <section className="grid grid-cols-2 gap-y-32 pt-12 ">
      <div className="grid grid-rows-2 gap-y-12"></div>
      <div className="grid auto-rows-[180px] gap-y-6">
        <HistoryList allBookings={allBookings} />
      </div>
    </section>
  );
};

export default History;
