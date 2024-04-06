import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "@/components/ui/container";
import { faqRules } from "@/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Частые вопросы",
  description: "Часто задаваемые вопросы ",
  keywords: [
    "Басков",
    "Отель Басков",
    "Отель СПб",
    "Басков СПб",
    "Санкт-Петербург отель",
    "Гостевой дом СПб",
    "Гостевой дом Санкт-Петербург",
    "Жилье посуточно СПб",
    "Отель в центре Санкт-Петербурга",
    "центр СПб",
    "Снять квартиру СПб",
    "Снять квартиру Санкт-Петербург",
    "Забронирвать номер СПб",
    "Квартира СПб",
    "Отель забронировать номер",
    "Частые вопросы",
  ],
};

const Faq = () => {
  return (
    <Container title="Частые вопросы">
      <section className="w-full paddings">
        <Accordion
          type="multiple"
          className="w-full md:w-3/4 gap-y-9 flex flex-col"
        >
          {faqRules.map((rule) => (
            <AccordionItem key={rule.id} className="" value={`item-${rule.id}`}>
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
      </section>
    </Container>
  );
};

export default Faq;
