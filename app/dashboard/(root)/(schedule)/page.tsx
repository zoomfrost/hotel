import AppointmentList from "@/components/dashboard/AppointmentList";
import CBForm from "@/components/dashboard/CBForm";
import CalendarDate from "@/components/dashboard/Calendar";

const DashboardHome = () => {
  return (
    <section className="grid grid-cols-2 gap-y-32 pt-12 ">
      <div className="grid grid-cols-1 gap-y-12">
        <CalendarDate />
        <CBForm />
      </div>
      <div className="grid auto-rows-[140px] gap-y-6">
        <AppointmentList />
      </div>
    </section>
  );
};

export default DashboardHome;
