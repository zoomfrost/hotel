"use client";

import { useState } from "react";
import { DayPicker } from "react-day-picker";

export default function CalendarDate() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <>
      <DayPicker
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow"
      />
    </>
  );
}
