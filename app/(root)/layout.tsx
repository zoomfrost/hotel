import Header from "@/components/Header.";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="flex-center max-w-screen-2xl paddings mx-auto w-full flex-col">
        {children}
      </main>
      Footer
    </>
  );
};

export default layout;
