"use client";

import { IBooking } from "@/types";
import AppointmentItem from "./AppointmentItem";

const HistoryList = ({ allBookings }: { allBookings: IBooking[] }) => {
  return (
    <>
      {/* {allBookings.map((item, i) => (
        <AppointmentItem key={i} bookings={item} />
      ))} */}
    </>
  );
};

export default HistoryList;
