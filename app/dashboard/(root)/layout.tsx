import Header from "@/components/Header.";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  const links = [
    {
      name: "Schedule",
      link: "/dashboard",
      id: 1,
    },
    {
      name: "History",
      link: "/dashboard/history",
      id: 2,
    },
  ];
  return (
    <div className="bg-fuchsia-200">
      <Header isDashboard={true} links={links} />
      <main className="flex-center max-w-screen-2xl paddings mx-auto w-full flex-col">
        {children}
      </main>
      Footer
    </div>
  );
};

export default layout;
