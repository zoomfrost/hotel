import Container from "@/components/ui/container";

import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";
import {
  cityPhotoArr,
  facilitiesArr,
  feedback,
  socialLinksArr,
} from "@/constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import InTouchBooking from "@/components/InTouchBooking";
import HotelCarousel from "@/components/HotelCarousel";

export const metadata: Metadata = {
  title: "Baskov",
  description: "Гостевой дом / Отель в центре Санкт-Петербурга",
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
  ],
};

const Home = async () => {
  return (
    <Container isHomePage title="Отель в центре Санкт-Петербуга">
      <section
        className={`flex flex-row-reverse  const photoArr = [
            "https://i.postimg.cc/7PXZXQFN/kazan.jpg",
            "https://i.postimg.cc/k5rJBrS7/isaaks.jpg",
            "https://i.postimg.cc/3JV7cMn2/palace-bridge.jpg",
          ];se max-md:flex-col  max-md:gap-y-5 justify-around max-sm:px-6 max-sm:gap-y-6 gap-x-10 mb-24 px-16`}
      >
        <div className="w-2/4 max-md:w-full grid auto-rows-auto max-md:text-center max-md:justify-items-center  max-md:text-sm text-md gap-y-4 items-center">
          <h2 className="font-semibold max-md:text-2xl text-4xl ">Басков</h2>
          <p className="indent-5">
            Прикоснитесь к истории Санкт-Петербурга, остановившись в самом
            сердце города. У нас вы сможете почувствовать себя как дома. В нашем
            гостевом доме всего четыре номера. Два трехместных и два
            двухместных. Есть возможность дополнительного размещения в каждом
            номере. В номерах стоят 1,5-спальные кровати, тумбочки, стол,
            стулья, шкаф. Также в каждом номере есть чайник, посуда. Постельное
            белье и полотенца комплектуются в номере по количеству гостей. Также
            для вашего удобства есть фен, утюг, гладильная доска, стиральная
            машина, тапочки. Для того, чтобы приготовить еду стоят мультиварка и
            микроволновка. Холодильник общий на 4 номера
          </p>
          <Link className="hover:font-bold block w-24" href="/rooms">
            Подробнее
          </Link>
        </div>
        <div className="w-1/2 max-md:w-full h-[400px]">
          <Image
            width={300}
            height={300}
            className="object-cover w-full h-full"
            src="https://i.postimg.cc/SNhsX78R/room2.jpg"
            alt="photo"
          />
        </div>
      </section>

      <section className="flex items-center justify-evenly gap-x-10 lg:gap-x-20 max-md:flex-col max-md:gap-y-4">
        {cityPhotoArr.map((item, i) => (
          <div key={i}>
            <Image
              width={300}
              height={300}
              src={item}
              className="grayscale object-cover h-64"
              alt="photo"
            />
          </div>
        ))}
      </section>

      <section className="bg-amber-100 mt-12 p-5">
        <h3 className="text-center my-3 text-2xl mb-6">Удобства</h3>
        <div className="grid grid-cols-4 hyphens-auto gap-y-7 gap-x-24 p-5 max-md:grid-cols-3 max-sm:grid-cols-2 ">
          {facilitiesArr.map((item, i) => (
            <div
              className="flex items-center justify-start flex-col gap-y-1 p-1"
              key={i}
            >
              <Image src={item.imgSrc} alt="photo" />
              <p className="max-md:text-sm text-center">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <HotelCarousel data={feedback} />
      <section className="pt-12 grid grid-cols-2 max-md:grid-cols-1 max-md:gap-y-5 p-4  gap-x-44 justify-items-center">
        <div className="flex flex-col gap-y-8">
          <h4 className="md:text-5xl xs:text-3xl">Контакты</h4>
          <p>Санкт-Петербург, пер. Басков д.13-15</p>
          <div>
            <Link
              className='after:content-["\260e"] after:ml-2'
              href="tel:+79117283072"
            >
              +79117283072
            </Link>
            <br />
            <Link className="mt-5" href="mailto:support@baskov.online">
              support@baskov.online
            </Link>
          </div>
          <ul className="flex flex-row items-center justify-start gap-x-5">
            {socialLinksArr.map((link) => {
              return (
                <li className="flex flex-row items-center" key={link.id}>
                  <Image
                    width={25}
                    height={25}
                    src={link.icon}
                    alt="social photo"
                  />
                  <Link
                    target="_blank"
                    className="max-sm:text-xs after:hover:w-full after:block after:w-0 after:h-0.5 after:bg-gray-600 after:transition-all after:duration-300 "
                    href={link.link}
                  >
                    {link.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <InTouchBooking />
      </section>
    </Container>
  );
};

export default Home;
