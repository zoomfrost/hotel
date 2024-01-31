"use client";

import { useContext, useEffect } from "react";
import { BookingContext } from "@/context/bookings/BookingsContext";

import AppointmentItem from "./AppointmentItem";

const AppointmentList = () => {
  const { allActiveBookings, getActiveBookings } = useContext(BookingContext);

  useEffect(() => {
    getActiveBookings();
  }, []);
  return (
    <>
      {allActiveBookings.map((item, i) => (
        <AppointmentItem key={i} bookings={item} />
      ))}
    </>
  );
};

export default AppointmentList;
