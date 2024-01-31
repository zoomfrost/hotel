import Footer from "@/components/Footer";
import Header from "@/components/Header.";
import React from "react";
import BookingContextProvider from "@/context/bookings/BookingsContext";
const layout = ({ children }: { children: React.ReactNode }) => {
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
    <BookingContextProvider>
      <div className="bg-fuchsia-50">
        <Header isDashboard={true} links={links} />
        <main className="flex-center mt-6 max-w-screen-2xl paddings mx-auto w-full flex-col">
          {children}
        </main>
        <Footer />
      </div>
    </BookingContextProvider>
  );
};

export default layout;
