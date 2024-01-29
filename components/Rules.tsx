import { IBookingRules } from "@/types";

const Rules = ({ rules }: { rules: IBookingRules[] }) => {
  return (
    <div className="paddings">
      {rules.map((item, i) => (
        <div key={i} className="flex flex-col gap-y-3 mt-7">
          <h4 className="heading4 text-main">{item.heading}</h4>
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

export default Rules;
