import BookingForm from "@/components/BookingForm";
import BookingList from "@/components/dashboard/BookingList";

import { Skeleton } from "@/components/ui/skeleton";
import { Booking } from "@/models/booking";
import { ActiveBooking, IBooking } from "@/types";
import { connectToDB } from "@/utils/database";
import { Suspense } from "react";

const DashboardHome = async () => {
  await connectToDB();

  const bookings = await Booking.find({ canceled: false });

  const allActiveBookings = bookings.map((item: ActiveBooking) => {
    return {
      name: item.name,
      checkIn: item.checkIn,
      phone: item.phone,
      room: item.room,
      dateFrom: item.dateFrom,
      dateTo: item.dateTo,
      id: item.id,
      created: item.created,
    };
  });
  return (
    <section className="grid mt-10 max-lg:grid-cols-1 grid-cols-2 gap-x-14 gap-y-14 pt-10">
      <div className="grid auto-rows-min gap-y-6">
        <Suspense fallback={<Skeleton className={"h-[125px] w-[250px]"} />}>
          <BookingList allActiveBookings={allActiveBookings} />
        </Suspense>
      </div>
      <div className="grid grid-cols-1 w-[500px] max-sm:w-full gap-y-12">
        <BookingForm />
      </div>
    </section>
  );
};

export default DashboardHome;
