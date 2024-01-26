import Footer from "@/components/Footer";
import Header from "@/components/Header.";
import Promo from "@/components/Promo";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  const links = [
    {
      name: "home",
      link: "/",
      id: 1,
    },
    {
      name: "the area",
      link: "/area",
      id: 2,
    },
    {
      name: "booking",
      link: "/booking",
      id: 3,
    },
    {
      name: "faq",
      link: "/faq",
      id: 4,
    },
  ];

  const arr = [1, 2];
  return (
    <div className="bg-black-100">
      <Header isDashboard={false} links={links} />
      <Promo />
      <main className="flex-center max-w-screen-2xl paddings mx-auto w-full flex-col">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default layout;
