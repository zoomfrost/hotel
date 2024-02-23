"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { getPricesPerDay } from "@/actions/action";
import FeedBackNotification from "./FeedBackNotification";

const RoomsPrices = () => {
  const [doubleRoomPrice, setDoubleRoomPrice] = useState<number | null>(null);
  const [tripleRoomPrice, setTripleRoomPrice] = useState<number | null>(null);
  const [status, setStatus] = useState("Загрузка");
  useEffect(() => {
    getPricesPerDay()
      .then((data) => {
        setDoubleRoomPrice(
          Math.min(
            ...data
              .filter((item) => item.roomType === "double")
              .map((item) => +item.dates.price)
          )
        );
        setTripleRoomPrice(
          Math.min(
            ...data
              .filter((item) => item.roomType === "triple")
              .map((item) => +item.dates.price)
          )
        );
      })
      .catch(() => setStatus("Ошибка загрузки"));
  }, []);
  const tableHead = ["Номер", "Цена за сутки"];
  const tableRows = [
    {
      name: "Двухместный",
      price: doubleRoomPrice === Infinity ? 0 : `от ${doubleRoomPrice} руб.`,
    },
    {
      name: "Трехместный",
      price: tripleRoomPrice === Infinity ? 0 : `от ${tripleRoomPrice} руб.`,
    },
    { name: "Дополнительное спальное место", price: `300 руб.` },
  ];
  return (
    <div className="mt-9">
      <h3 className="text-4xl text-center max-sm:text-xl font-extralight">
        Стоимость
      </h3>
      <div className="w-4/6 max-xs:w-5/6 mx-auto mt-5">
        <Table>
          <TableHeader>
            <TableRow>
              {tableHead.map((item) => {
                return (
                  <TableHead className="even:text-right" key={item}>
                    {item}
                  </TableHead>
                );
              })}
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableRows.map((item, i) => (
              <TableRow key={item.name}>
                <TableCell className="text-left">{item.name}</TableCell>
                <TableCell className="text-right">
                  {item.price ? (
                    item.price
                  ) : (
                    <FeedBackNotification status={status} />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default RoomsPrices;
