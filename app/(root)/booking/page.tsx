import BookingForm from "@/components/BookingForm";
import Rules from "@/components/Rules";

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
      <div className="grid grid-cols-2 max-md:grid-cols-1 justify-items-center">
        <Rules rules={rules} />
        <BookingForm />
      </div>
    </section>
  );
};

export default Booking;
