"use client";

import { memo, useCallback, useState } from "react";

import AppointmentItem from "./BookingItem";

import CancelModal from "./CancelModal";
import { ActiveBooking } from "@/types";
import { cancelBookingAction } from "@/actions/action";

const BookingList = memo(
  ({ allActiveBookings }: { allActiveBookings: ActiveBooking[] }) => {
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
        {allActiveBookings.map((item) => (
          <AppointmentItem
            key={item.id}
            bookings={item}
            setOpen={handleSetOpen}
            selectId={handleSelectId}
          />
        ))}

        <CancelModal
          open={open}
          action={cancelBookingAction}
          selectedId={selectedId}
          setOpen={handleSetOpen}
        />
      </>
    );
  }
);

export default BookingList;
