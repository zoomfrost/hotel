import Footer from "@/components/Footer";
import Header from "@/components/Header.";
import { navLinks } from "@/constants";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header isDashboard={false} links={navLinks} />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
