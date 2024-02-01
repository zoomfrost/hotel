"use client";

import React, { useContext, useEffect } from "react";
import AppointmentItem from "./AppointmentItem";
import { BookingContext } from "@/context/bookings/BookingsContext";

const HistoryList = () => {
  const { allBookings, getBookings } = useContext(BookingContext);

  useEffect(() => {
    getBookings();
  }, []);
  return (
    <>
      {allBookings.map((item, i) => (
        <AppointmentItem key={i} bookings={item} />
      ))}
    </>
  );
};

export default HistoryList;
