import BookingForm from "@/components/BookingForm";
import Rules from "@/components/Rules";
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
      rules: ["Предоплата включает в себя первые сутки проживания"],
    },
    {
      heading: "Rules",
      rules: [
        "Не курить",
        "Не распивать алкоголь",
        "Выезд до 12:00",
        "Заезд после 14:00",
      ],
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
    <Container title="Бронирование">
      <section>
        <div className="grid grid-cols-2 max-md:grid-cols-1 max-md:gap-y-3 justify-items-center">
          <BookingForm />
          <Rules rules={rules} />
        </div>
      </section>
    </Container>
  );
};

export default Booking;
