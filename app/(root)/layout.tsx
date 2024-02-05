import Footer from "@/components/Footer";
import Header from "@/components/Header.";
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

  return (
    <div className="bg-amber-50">
      <Header isDashboard={false} links={links} />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
