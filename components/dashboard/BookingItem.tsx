import React, { memo, useMemo } from "react";
import { Button } from "../ui/button";
import { Optional } from "utility-types";

import { IBooking } from "@/types";
import { format } from "date-fns";

interface BookingItemProps {
  bookings: Optional<IBooking, "canceled">;
  setOpen: (open: boolean) => void;
  selectId: (id: string) => void;
}
const BookingItem = memo(
  ({ bookings, setOpen, selectId }: BookingItemProps) => {
    const {
      checkIn,
      name,
      phone,
      dateFrom,
      dateTo,
      room,
      canceled,
      id,
      created,
    } = bookings;
    return (
      <div className="relative p-4 bg-white shadow-black-300 grid grid-cols-2 gap-x-14 text-black">
        <div>
          <span>
            Date: {format(dateFrom, "dd.MM.yyyy")} -{" "}
            {format(dateTo, "dd.MM.yyyy")}
          </span>
          <br />
          <span>Name: {name}</span>
          <br />
          <span>Room: {room}</span>
          <br />
          <span>Phone: {phone}</span>
          <br />
          <span>Check in: {checkIn}</span>
          <br />
          <span>Created {format(created, "dd.MM.yyyy  HH.mm.ss")} </span>
        </div>
        {!!canceled ? (
          <>
            <Button
              onClick={() => {
                setOpen(true);
                selectId(id);
              }}
              className="absolute w-16 h-5 right-4 bottom-2 px-1 py-0 bg-fuchsia-600 cursor-pointer font-semibold transition-all hover:bg-fuchsia-900"
            >
              Удалить
            </Button>
            <div className="absolute left-4 bottom-1 w-24 h-5 bg-rose-400 text-center px-1">
              Отменено
            </div>
          </>
        ) : (
          <Button
            onClick={() => {
              setOpen(true);
              selectId(id);
            }}
            className="absolute w-16 h-5 right-4 bottom-2 px-1 py-0 bg-fuchsia-600 cursor-pointer font-semibold transition-all hover:bg-fuchsia-900"
          >
            Отменить
          </Button>
        )}
      </div>
    );
  }
);

export default BookingItem;
