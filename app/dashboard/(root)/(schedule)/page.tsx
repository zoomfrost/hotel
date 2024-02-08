import BookingForm from "@/components/BookingForm";
import BookingList from "@/components/dashboard/BookingList";

import { Skeleton } from "@/components/ui/skeleton";
import { Booking } from "@/models/booking";
import { ActiveBooking, IBooking } from "@/types";
import { connectToDB } from "@/utils/database";
import { differenceInDays } from "date-fns";
import { Suspense } from "react";

const DashboardHome = async () => {
  await connectToDB();

  const bookings = await Booking.find({ canceled: false });

  const allActiveBookings = bookings
    .filter((item: IBooking) => {
      return differenceInDays(item.dateFrom, new Date()) > 0;
    })
    .map((item: ActiveBooking) => {
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
    <section className="grid grid-cols-2 gap-y-32 pt-12 ">
      <div className="grid grid-cols-1 w-[500px] gap-y-12">
        <BookingForm />
      </div>
      <div className="grid auto-rows-[180px] gap-y-6">
        <Suspense fallback={<Skeleton className={"h-[125px] w-[250px]"} />}>
          <BookingList allActiveBookings={allActiveBookings} />
        </Suspense>
      </div>
    </section>
  );
};

export default DashboardHome;
