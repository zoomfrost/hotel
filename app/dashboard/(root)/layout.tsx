import DashboardHeader from "@/components/dashboard/DashboardHeader";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-fuchsia-200">
      <DashboardHeader />
      <main className="flex-center max-w-screen-2xl paddings mx-auto w-full flex-col">
        {children}
      </main>
      Footer
    </div>
  );
};

export default layout;
