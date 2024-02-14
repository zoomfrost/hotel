import Footer from "@/components/Footer";
import Header from "@/components/Header.";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  const links = [
    {
      name: "Главная",
      link: "/",
      id: 1,
    },
    {
      name: "Номера",
      link: "/rooms",
      id: 2,
    },
    {
      name: "Бронирование",
      link: "/booking",
      id: 3,
    },
    {
      name: "Частые вопросы",
      link: "/faq",
      id: 4,
    },
  ];

  return (
    <div className="">
      <Header isDashboard={false} links={links} />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
