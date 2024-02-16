import React from "react";
import RoomsPrices from "./RoomsPrices";
import { Table, TableBody, TableCell, TableRow } from "./ui/table";

const RoomsDescription = () => {
  const listArray = [
    "Постельное белье",
    "Одеяла",
    "Полотенце",
    "Кружки",
    "Чайник",
    "Столовые приборы",
    "Шкаф",
    "Стол",
    "Тумбочки",
    "Жалюзи",
  ];
  return (
    <section className="px-8 max-sm:px-0 max-sm:text-center ">
      <span className="block w-11 h-2 bg-amber-300" />
      <div className="mt-4 flex flex-col gap-y-6">
        <h3 className="text-4xl max-sm:text-xl font-extralight">
          Номерной фонд
        </h3>
        <p className="indent-7 text-xl max-sm:text-lg  font-normal lg:w-4/5 max-sm:w-full ">
          На общей территории расположено все для комфортного проживания:
          тапочки для всех, бытовая техника, стиральная машина, гладильная
          доска, столовые приборы, туалет, душевая.
        </p>
        <p className="indent-7 text-xl max-sm:text-lg  font-normal lg:w-4/5 max-sm:w-full ">
          В составе 4 номера: 2 двухместных с 1,5-спальными кровати, и 2
          трехместных с 1,5-спальными кроватями.
          <b> Дополнительное спальное место обсуждается.</b> В каждом номере
          есть все необходимое:
        </p>

        <ul className="grid mx-auto w-4/5 max-sm:w-3/4 grid-cols-2 justify-items-start max-sm:grid-cols-1 list-disc">
          {listArray.map((li, i) => (
            <li
              className="uppercase font-light max-sm:text-base text-lg text-main"
              key={i}
            >
              {li}
            </li>
          ))}
        </ul>
      </div>
      <RoomsPrices />
    </section>
  );
};

export default RoomsDescription;
