"use client";

import { memo, useCallback, useContext, useEffect, useState } from "react";
import { BookingContext } from "@/context/bookings/BookingsContext";

import AppointmentItem from "./AppointmentItem";
import { Skeleton } from "../ui/skeleton";
import CancelModal from "./CancelModal";

const AppointmentList = memo(() => {
  const [open, setOpen] = useState(false);
  const [selectedId, selectId] = useState("0");
  const { allActiveBookings, getActiveBookings, loadingStatus } =
    useContext(BookingContext);

  const handleSetOpen = useCallback((state: boolean) => {
    setOpen(state);
  }, []);

  const handleSelectId = useCallback((id: string) => {
    selectId(id);
  }, []);

  useEffect(() => {
    getActiveBookings();
  }, []);

  if (loadingStatus === "loading") {
    return <Skeleton className="h-[125px] w-[250px] rounded-xl" />;
  }
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
});

export default AppointmentList;
