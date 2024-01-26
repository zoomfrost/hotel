import Footer from "@/components/Footer";
import Header from "@/components/Header.";
import Promo from "@/components/Promo";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-black-100">
      <Header />
      <Promo />
      <main className="flex-center max-w-screen-2xl paddings mx-auto w-full flex-col">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default layout;
