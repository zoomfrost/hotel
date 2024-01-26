import AppointmentList from "@/components/dashboard/AppointmentList";
import CAForm from "@/components/dashboard/CAForm";
import CalendarDate from "@/components/dashboard/Calendar";

const DashboardHome = () => {
  return (
    <section className="grid grid-cols-2 gap-y-32 pt-12 text-white">
      <div className="grid grid-rows-2 gap-y-12">
        <CalendarDate />
        <CAForm />
      </div>
      <div className="grid auto-rows-[140px] gap-y-6">
        <AppointmentList />
      </div>
    </section>
  );
};

export default DashboardHome;
