import bed from "@/public/bed.svg";
import camera from "@/public/camera.svg";
import connection from "@/public/connection.svg";
import library from "@/public/library.svg";
import spoonKnife from "@/public/spoon-knife.svg";
import briefcase from "@/public/briefcase.svg";
import clock from "@/public/clock.svg";
import key from "@/public/key.svg";
import location from "@/public/location2.svg";
import discount from "@/public/price-tags.svg";
import railway from "@/public/road.svg";
import cart from "@/public/cart.svg";

import whatsapp from "@/public/whatsapp.svg";
import telegram from "@/public/telegram.svg";
import viber from "@/public/viber.svg";

export const facilitiesArr = [
  {
    imgSrc: bed,
    text: "Комфортные кровати",
  },
  {
    imgSrc: briefcase,
    text: "Возможность оставить багаж до заезда",
  },
  {
    imgSrc: camera,
    text: "Исторический центр города",
  },
  {
    imgSrc: clock,
    text: "Удобное время заезда",
  },
  {
    imgSrc: connection,
    text: "Бесплатный доступ в интернет",
  },
  {
    imgSrc: library,
    text: "Известные достопримечательности недалеко",
  },
  {
    imgSrc: key,
    text: "Ключ от номера есть только у вас",
  },
  {
    imgSrc: location,
    text: "Расположение в тихом месте",
  },
  {
    imgSrc: discount,
    text: "Скидки постоянным гостям",
  },
  {
    imgSrc: cart,
    text: "Возможность готовить самим ",
  },
  {
    imgSrc: spoonKnife,
    text: "Столовые и кафе в шаговой доступности",
  },
  {
    imgSrc: railway,
    text: "Вокзал в 10 минутах пешком",
  },
];

export const cityPhotoArr = [
  "https://i.postimg.cc/7PXZXQFN/kazan.jpg",
  "https://i.postimg.cc/k5rJBrS7/isaaks.jpg",
  "https://i.postimg.cc/3JV7cMn2/palace-bridge.jpg",
];

export const feedback = {
  photos: [
    "/photo/feedback1.jpg",
    "/photo/feedback2.jpg",
    "/photo/feedback3.jpg",
    "/photo/feedback4.jpg",
    "/photo/feedback5.jpg",
    "/photo/feedback6.jpg",
    "/photo/feedback7.jpg",
  ],
  title: "Отзывы",
  alt: "feedback",
};

export const socialLinksArr = [
  {
    text: "WhatsApp",
    link: "https://wa.me/89117283072",
    icon: whatsapp,
    id: 1,
  },
  {
    text: "Telegram",
    link: "https://t.me/lu_malolu",
    icon: telegram,
    id: 2,
  },
  {
    text: "Viber",
    link: "viber://chat?number=%2B79117283072",
    icon: viber,
    id: 3,
  },
];

export const faqRules = [
  {
    id: 1,
    heading: "Где припарковать машину?",
    rules: [
      "Парковака в центре города платная с 08:00 до 20:00.",
      "Есть парковки с недорогой посуточной оплатой.",
    ],
  },
  {
    id: 2,

    heading: "Можно оставить багаж до заезда либо после выезда?",
    rules: ["Да, можно."],
  },
  {
    id: 3,

    heading: "Душевая и туалет в номере?",
    rules: ["Нет, санузел раздельный и общий на 4 номера"],
  },
  {
    id: 4,

    heading: "Как происходит оплата?",
    rules: ["Наличными или переводом на карту при заезде"],
  },
  {
    id: 5,

    heading: "Возвращаем ли предоплату?",
    rules: [
      "Да, если это форс-мажор.",
      "Обстоятельство, имеющее характер непреодолимой силы.",
    ],
  },
  {
    id: 6,

    heading: "Как получить ключ?",
    rules: ["Перед заездом отправляется подробная инструкция с фото"],
  },
  {
    id: 7,

    heading: "Можно ли заехать раньше/выехать позже?",
    rules: [
      "При возможности мы продлим время или заселим раньше бесплатно, в рамках часа-двух.",
      "Более длительное время обговаривается отдельно и за доп. плату",
    ],
  },
  {
    id: 8,

    heading: "Предоставляете дополнительное спальное место?",
    rules: ["Да, раскладушка 300 руб./сутки"],
  },
  {
    id: 9,

    heading: "Можно ли с питомцами?",
    rules: [
      "Да, если они небольшие. По предварительной договоренности. Это бесплатно",
    ],
  },
];

export const navLinks = [
  {
    name: "Главная",
    link: "/",
    id: 1,
  },
  {
    name: "Номера",
    link: "/rooms",
    id: 2,
  },
  {
    name: "Бронирование",
    link: "/booking",
    id: 3,
  },
  {
    name: "Faq",
    link: "/faq",
    id: 4,
  },
];
