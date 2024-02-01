import HistoryList from "@/components/dashboard/HistoryList";
import React from "react";

const History = () => {
  return (
    <section className="grid grid-cols-2 gap-y-32 pt-12 ">
      <div className="grid grid-rows-2 gap-y-12"></div>
      <div className="grid auto-rows-[180px] gap-y-6">
        <HistoryList />
      </div>
    </section>
  );
};

export default History;
