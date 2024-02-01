"use client";

import { useContext, useEffect } from "react";
import { BookingContext } from "@/context/bookings/BookingsContext";

import AppointmentItem from "./AppointmentItem";
import { Skeleton } from "../ui/skeleton";

const AppointmentList = () => {
  const { allActiveBookings, getActiveBookings, loadingStatus } =
    useContext(BookingContext);

  useEffect(() => {
    getActiveBookings();
  }, []);
  if (loadingStatus === "loading") {
    return <Skeleton className="h-[125px] w-[250px] rounded-xl" />;
  }
  return (
    <>
      {allActiveBookings.map((item, i) => (
        <AppointmentItem key={i} bookings={item} />
      ))}
    </>
  );
};

export default AppointmentList;
