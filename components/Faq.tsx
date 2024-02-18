import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { IFaqProps } from "@/types";

const Faq = ({ rules }: IFaqProps) => {
  return (
    <Accordion
      type="multiple"
      className="w-full md:w-3/4 gap-y-9 flex flex-col"
    >
      {rules.map((rule, i) => (
        <AccordionItem key={i} className="" value={`item-${i}`}>
          <AccordionTrigger className="hover:no-underline uppercase border-main border-[1px] p-4 text-xs xs:text-sm md:text-lg  text-main text-start">
            {rule.heading}
          </AccordionTrigger>
          {rule.rules.map((item, i) => (
            <AccordionContent
              key={`content-${i}`}
              className="p-3 text-sm md:text-lg font-semibold"
            >
              {item}
            </AccordionContent>
          ))}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Faq;
