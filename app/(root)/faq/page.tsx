import FaqComponent from "@/components/FaqComponent";
import Container from "@/components/ui/container";
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
        <FaqComponent />
      </section>
    </Container>
  );
};

export default Faq;
