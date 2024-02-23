import BookingForm from "@/components/BookingForm";
import BookingList from "@/components/dashboard/BookingList";
import CreatingPricesForm from "@/components/dashboard/creatingPricesForm";
import DeletePrices from "@/components/dashboard/deletePrices";
import { Skeleton } from "@/components/ui/skeleton";
import { Booking } from "@/models/booking";
import { ActiveBooking } from "@/types";
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
      comment: item.comment,
    };
  });
  return (
    <section className="grid w-full justify-items-center mt-10 max-lg:grid-cols-1 grid-cols-2 gap-x-14 gap-y-14 pt-10">
      <div className="grid auto-rows-min gap-y-6">
        <Suspense fallback={<Skeleton className={"h-[125px] w-[250px]"} />}>
          <BookingList allActiveBookings={allActiveBookings} />
        </Suspense>
      </div>
      <div className="grid grid-cols-1 w-[500px] max-sm:w-full">
        <div>
          <p className="text-center">Создать бронь</p>
          <BookingForm />
        </div>
        <CreatingPricesForm />
        <DeletePrices />
      </div>
    </section>
  );
};

export default DashboardHome;
