import FaqComponent from "@/components/Faq";
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
  const rules = [
    {
      heading: "Где припарковать машину?",
      rules: [
        "Парковака в центре города платная с 08:00 до 20:00.",
        "Есть парковки с недорогой посуточной оплатой.",
      ],
    },
    {
      heading: "Можно оставить багаж до заезда либо после выезда?",
      rules: ["Да, можно."],
    },
    {
      heading: "Душевая и туалет в номере?",
      rules: ["Нет, санузел раздельный и общий на 4 номера"],
    },
    {
      heading: "Как происходит оплата?",
      rules: ["Наличными или переводом на карту при заезде"],
    },
    {
      heading: "Возвращаем ли предоплату?",
      rules: [
        "Да, если это форс-мажор.",
        "Обстоятельство, имеющее характер непреодолимой силы.",
      ],
    },
    {
      heading: "Как получить ключ?",
      rules: ["Перед заездом отправляется подробная инструкция с фото"],
    },
    {
      heading: "Можно ли заехать раньше/выехать позже?",
      rules: [
        "При возможности мы продлим время или заселим раньше бесплатно, в рамках часа-двух.",
        "Более длительное время обговаривается отдельно и за доп. плату",
      ],
    },
    {
      heading: "Предоставляете дополнительное спальное место?",
      rules: ["Да, раскладушка 300 руб./сутки"],
    },
    {
      heading: "Можно ли с питомцами?",
      rules: [
        "Да, если они небольшие. По предварительной договоренности. Это бесплатно",
      ],
    },
  ];
  return (
    <Container title="Частые вопросы">
      <section className="w-full paddings">
        <FaqComponent rules={rules} />
      </section>
    </Container>
  );
};

export default Faq;
