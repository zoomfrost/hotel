import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

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
    <section className="w-full paddings">
      <Accordion type="multiple" className="w-3/4 gap-y-9 flex flex-col">
        {rules.map((rule, i) => (
          <AccordionItem key={i} className="" value={`item-${i}`}>
            <AccordionTrigger className="hover:no-underline uppercase border-main border-[1px] p-4 heading4 text-main">
              {rule.heading}
            </AccordionTrigger>
            {rule.rules.map((item, i) => (
              <AccordionContent key={`content-${i}`} className="p-3 text-lg">
                {item}
              </AccordionContent>
            ))}
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default Faq;
