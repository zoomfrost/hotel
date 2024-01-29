import BookingForm from "@/components/BookingForm";
import AppointmentList from "@/components/dashboard/AppointmentList";

const DashboardHome = () => {
  return (
    <section className="grid grid-cols-2 gap-y-32 pt-12 ">
      <div className="grid grid-cols-1 gap-y-12">
        <BookingForm />
      </div>
      <div className="grid auto-rows-[140px] gap-y-6">
        <AppointmentList />
      </div>
    </section>
  );
};

export default DashboardHome;
