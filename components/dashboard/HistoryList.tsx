"use client";

import { IBooking } from "@/types";
import AppointmentItem from "./BookingItem";
import { memo, useCallback, useState } from "react";
import CancelModal from "./CancelModal";
import BookingItem from "./BookingItem";
import { deleteBookingAction } from "@/actions/action";

const HistoryList = memo(({ bookings }: { bookings: IBooking[] }) => {
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
      {bookings.map((item) => (
        <BookingItem
          key={item.id}
          bookings={item}
          setOpen={handleSetOpen}
          selectId={handleSelectId}
        />
      ))}

      <CancelModal
        open={open}
        action={deleteBookingAction}
        selectedId={selectedId}
        setOpen={handleSetOpen}
      />
    </>
  );
});

export default HistoryList;
