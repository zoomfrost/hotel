import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const Faq = () => {
  const rules = [
    {
      heading: "Rules",
      rules: ["No smoking", "No pets"],
    },
    {
      heading: "Cancellation policy",
      rules: [
        "Free cancellation until 1:00 PM on Mar 27",
        "After that, cancel before 2:00 PM on Apr 1 and get a 50% refund, minus the first night and service fee.",
      ],
    },
    {
      heading: "import information",
      rules: [
        "You need to hike a steep hill to arrive at the treehouses, it takes approx 20-30 minutes on a trail with stairs and uneven ground.",
      ],
    },
  ];
  return (
    <Accordion
      type="multiple"
      className="w-full md:w-3/4 gap-y-9 flex flex-col"
    >
      {rules.map((rule, i) => (
        <AccordionItem key={i} className="" value={`item-${i}`}>
          <AccordionTrigger className="hover:no-underline uppercase border-main border-[1px] p-4 text-xs xs:text-sm  text-main">
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
