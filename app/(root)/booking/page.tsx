import BookingForm from "@/components/BookingForm";
import Container from "@/components/ui/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Бронирование",
  description: "Забронировать номер",
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
    "Бронирование",
  ],
};

const Booking = () => {
  const rules = [
    {
      heading: "Важная информация",
      rules: [
        "Предоплата включает в себя первые сутки проживания",
        "Бронируем минимум 2 суток",
      ],
    },
    {
      heading: "Внутренние правила",
      rules: [
        "Не курить на территории",
        "Не распивать алкоголь на территории",
        "Выезд до 12:00",
        "Заезд после 14:00",
      ],
    },
    {
      heading: "Политика отмены бронирования",
      rules: [
        "При отмене более чем за 3 дня возвращаем полную сумму ",
        "Менее чем за 3 дня до заезда удерживаем стоимость первых суток",
      ],
    },
  ];
  return (
    <Container title="Бронирование">
      <section>
        <div className="grid grid-cols-2 gap-x-7 max-md:grid-cols-1 max-md:gap-y-3 justify-items-center">
          <div id="rules">
            {rules.map((item) => (
              <div
                key={item.heading}
                className="flex flex-col gap-y-3 p-7 xs:p-5"
              >
                <h4 className="text-xl font-semibold text-main">
                  {item.heading}
                </h4>
                <span className="h-[1px] w-full bg-main block"></span>
                <ul>
                  {item.rules.map((rule) => (
                    <li
                      key={rule}
                      className="list-disc text-black-100 text-lg font-extralight"
                    >
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <BookingForm />
        </div>
      </section>
    </Container>
  );
};

export default Booking;
