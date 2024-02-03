import BookingForm from "@/components/BookingForm";
import AppointmentList from "@/components/dashboard/AppointmentList";
import { ActiveBooking, IBooking } from "@/types";
import { differenceInDays } from "date-fns";

const DashboardHome = async () => {
  const res = await fetch("https://hotel-five-umber.vercel.app/api/booking");
  const data = await res.json();
  const allActiveBookings: IBooking[] = data
    .filter((item: IBooking) => {
      return !item.canceled && differenceInDays(item.dateFrom, new Date()) > 0;
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
        <AppointmentList allActiveBookings={allActiveBookings} />
      </div>
    </section>
  );
};

export default DashboardHome;
