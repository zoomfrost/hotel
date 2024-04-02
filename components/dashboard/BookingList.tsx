"use client";

import { memo, useCallback, useState } from "react";

import BookingItem from "./BookingItem";

import CancelModal from "./CancelModal";
import { ActiveBooking, IBooking } from "@/types";
import { cancelBookingAction, deleteBookingAction } from "@/actions/action";

const BookingList = memo(
  ({
    bookings,
    type,
  }: {
    bookings: ActiveBooking[] | IBooking[];
    type: string;
  }) => {
    const [open, setOpen] = useState(false);
    const [selectedId, selectId] = useState("0");

    const handleSetOpen = useCallback((state: boolean) => {
      setOpen(state);
    }, []);

    const handleSelectId = useCallback((id: string) => {
      selectId(id);
    }, []);
    return (
      <>
        {bookings &&
          bookings.map((item) => (
            <BookingItem
              key={item.id}
              bookings={item}
              setOpen={handleSetOpen}
              selectId={handleSelectId}
            />
          ))}

        <CancelModal
          open={open}
          action={
            type === "history" ? deleteBookingAction : cancelBookingAction
          }
          selectedId={selectedId}
          setOpen={handleSetOpen}
        />
      </>
    );
  }
);

export default BookingList;
