import CalendarDate from "@/components/dashboard/Calendar";
import { IBookingRules } from "@/types";

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
      <div className="flex flex-row justify-evenly">
        <CalendarDate />
        <div className="w-1/4">
          <form className="caform">
            <div className="caform__title">Book a room</div>
            <label htmlFor="name">
              Name<span>*</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="User name"
              required
            />

            <label htmlFor="room">
              Service<span>*</span>
            </label>
            <input
              type="text"
              name="room"
              id="room"
              placeholder="Chosen room"
              required
            />

            <label htmlFor="phone">
              Phone number<span>*</span>
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="+1 890 335 372"
              pattern="^\++[0-9]{1} [0-9]{3} [0-9]{3} [0-9]{3}"
              title="Format should be +1 804 944 567"
              required
            />

            <label htmlFor="date">
              Date<span>*</span>
            </label>
            <input
              type="text"
              name="date"
              id="date"
              placeholder="DD/MM/YYYY HH:mm"
              pattern="^\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}$"
              title="Format should be DD/MM/YYYY HH:mm"
              required
            />
            <button>Create</button>
          </form>
        </div>
      </div>
      <Rules rules={rules} />
    </section>
  );
};

export default Booking;

const Rules = ({ rules }: { rules: IBookingRules[] }) => {
  return (
    <div className="paddings">
      {rules.map((item, i) => (
        <div key={i} className="flex flex-col gap-y-3 mt-7">
          <h4 className="text-main text-2xl">{item.heading}</h4>
          <span className="h-[1px] w-full bg-main block"></span>
          <ul>
            {item.rules.map((rule, i) => (
              <li key={i} className="list-disc text-lg">
                {rule}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
