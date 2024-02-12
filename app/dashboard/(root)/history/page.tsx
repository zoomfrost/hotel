import HistoryList from "@/components/dashboard/HistoryList";
import { Skeleton } from "@/components/ui/skeleton";
import { Booking } from "@/models/booking";
import { IBooking } from "@/types";
import { connectToDB } from "@/utils/database";
import { differenceInDays } from "date-fns";
import React, { Suspense } from "react";

const History = async () => {
  await connectToDB();

  const bookings = await Booking.find({ canceled: true });
  const data = bookings.map((item: IBooking) => {
    return {
      name: item.name,
      checkIn: item.checkIn,
      phone: item.phone,
      room: item.room,
      dateFrom: item.dateFrom,
      dateTo: item.dateTo,
      id: item.id,
      created: item.created,
      canceled: item.canceled,
    };
  });
  return (
    <section className="grid grid-cols-1 gap-y-32 pt-12 ">
      <div className="grid auto-rows-min gap-y-6">
        <Suspense fallback={<Skeleton className={"h-[125px] w-[250px]"} />}>
          <HistoryList bookings={data} />
        </Suspense>
      </div>
    </section>
  );
};

export default History;
