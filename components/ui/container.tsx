import { IPromoProps } from "@/types";
import { ReactNode } from "react";
import Promo from "../Promo";

interface IContainerProps extends IPromoProps {
  children: ReactNode;
}

const Container = ({
  children,
  title,
  isHomePage = false,
}: IContainerProps) => {
  return (
    <>
      <Promo isHomePage={isHomePage} title={title} />
      <main className="max-w-screen-2xl mx-auto paddings w-full ">
        {children}
      </main>
    </>
  );
};

export default Container;
