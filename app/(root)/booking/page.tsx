import Rules from "@/components/Rules";
import CBForm from "@/components/dashboard/CBForm";
import CalendarDate from "@/components/dashboard/Calendar";

const Booking = () => {
  const rules = [
    {
      heading: "Rules",
      rules: ["No smoking", "No pets"],
    },
    {
      heading: "Cancellation policy",
      rules: [
        "Free cancellation until 1:00 PM on Mar 27",
        "After that, cancel before 2:00 PM on Apr 1 and get a 50% refund, minus the first night and service fee.",
      ],
    },
    {
      heading: "import information",
      rules: [
        "You need to hike a steep hill to arrive at the treehouses, it takes approx 20-30 minutes on a trail with stairs and uneven ground.",
      ],
    },
  ];
  return (
    <section>
      <div className="flex flex-row justify-evenly max-md:flex-col max-md:items-center">
        <CalendarDate />
        <div className="w-1/4 max-md:w-1/2">
          <CBForm />
        </div>
      </div>
      <Rules rules={rules} />
    </section>
  );
};

export default Booking;
