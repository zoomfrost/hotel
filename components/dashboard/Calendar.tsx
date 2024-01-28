"use client";

import { useState } from "react";
import { Calendar } from "../ui/calendar";
import { DateRange } from "react-day-picker";
import { format } from "date-fns";

export default function CalendarDate() {
  const pastMonth = new Date();
  const [range, setRange] = useState<DateRange | undefined>(undefined);

  let footer = <p>Please pick the first day.</p>;
  if (range?.from) {
    if (!range.to) {
      footer = <p>{format(range.from, "PPP")}</p>;
    } else if (range.to) {
      footer = (
        <p>
          {format(range.from, "PPP")}–{format(range.to, "PPP")}
        </p>
      );
    }
  }

  return (
    <Calendar
      mode="range"
      defaultMonth={pastMonth}
      selected={range}
      footer={footer}
      onSelect={setRange}
      modifiersClassNames={{
        selected: "selected",
      }}
    />
  );
}
