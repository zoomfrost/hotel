import CalendarDate from "@/components/dashboard/Calendar";
import HistoryList from "@/components/dashboard/HistoryList";
import React from "react";

const History = () => {
  return (
    <section className="grid grid-cols-2 gap-y-32 pt-12 text-white">
      <div className="grid grid-rows-2 gap-y-12">
        <CalendarDate />
      </div>
      <div className="grid auto-rows-[140px] gap-y-6">
        <HistoryList />
      </div>
    </section>
  );
};

export default History;
