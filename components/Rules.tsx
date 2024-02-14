import { IBookingRules } from "@/types";

const Rules = ({ rules }: { rules: IBookingRules[] }) => {
  return (
    <div>
      {rules.map((item, i) => (
        <div key={i} className="flex flex-col gap-y-3 p-7 xs:p-5">
          <h4 className="text-xl font-semibold text-main">{item.heading}</h4>
          <span className="h-[1px] w-full bg-main block"></span>
          <ul>
            {item.rules.map((rule, i) => (
              <li
                key={i}
                className="list-disc text-black-100 text-lg font-extralight"
              >
                {rule}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Rules;
