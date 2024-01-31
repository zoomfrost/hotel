"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header.";
import useBookingService from "@/services/BookingsService";
import React, { useEffect } from "react";

import { IInitialState } from "@/context/bookings/reducer";

const initialState: IInitialState = {
  allBookings: [],
  allActiveBookings: [],
};

const layout = ({ children }: { children: React.ReactNode }) => {
  const { loading, getAllBookings, getAllActiveBookings } = useBookingService();

  useEffect(() => {
    getAllBookings().then((data) => console.log(data));
  }, []);

  const links = [
    {
      name: "Schedule",
      link: "/dashboard",
      id: 1,
    },
    {
      name: "History",
      link: "/dashboard/history",
      id: 2,
    },
  ];
  return (
    <div className="bg-fuchsia-50">
      <Header isDashboard={true} links={links} />
      <main className="flex-center mt-6 max-w-screen-2xl paddings mx-auto w-full flex-col">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default layout;
