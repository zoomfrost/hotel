import React from "react";
import { Button } from "../ui/button";

import { ActiveBooking, IBooking } from "@/types";

interface BookingItemProps {
  bookings: ActiveBooking;
}
const AppointmentItem = ({ bookings }: BookingItemProps) => {
  const { checkIn, name, phone, date, room } = bookings;
  return (
    <div className="relative p-4 bg-white shadow-black-300 grid grid-cols-2 gap-x-14 text-black">
      <div>
        <span>Date: {date}</span>
        <br />
        <span>Name: {name}</span>
        <br />
        <span>Room: {room}</span>
        <br />
        <span>Phone: {phone}</span>
        <br />
        <span>Check in: {checkIn}</span>
      </div>
      <div>
        <span>Time left:</span>
        <span className="block text-xl mt-4 text-black-300">HH:mm</span>
      </div>
      <Button className="absolute w-16 h-5 right-4 bottom-2 px-1 py-0 bg-fuchsia-600 cursor-pointer font-semibold transition-all hover:bg-fuchsia-900">
        Cancel
      </Button>
      {/* <div className="absolute left-4 bottom-2 w-20 h-5 bg-stone-500 text-center px-1">
          Canceled
        </div> */}
    </div>
  );
};

export default AppointmentItem;
