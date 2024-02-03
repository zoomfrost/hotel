"use client";

import { memo, useCallback, useState } from "react";

import AppointmentItem from "./AppointmentItem";

import CancelModal from "./CancelModal";
import { ActiveBooking } from "@/types";

const AppointmentList = memo(
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
        {allActiveBookings.map((item, i) => (
          <AppointmentItem
            key={item.id}
            bookings={item}
            setOpen={handleSetOpen}
            selectId={handleSelectId}
          />
        ))}

        <CancelModal
          open={open}
          selectedId={selectedId}
          setOpen={handleSetOpen}
        />
      </>
    );
  }
);

export default AppointmentList;
