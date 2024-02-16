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
import { getPrice } from "@/actions/action";
import FeedBackNotification from "./FeedBackNotification";

const RoomsPrices = () => {
  const [price, setPrice] = useState<number[] | null>(null);
  const [status, setStatus] = useState("Загрузка");
  useEffect(() => {
    getPrice()
      .then((data) => {
        setPrice([...(data as number[]), 300]);
      })
      .catch(() => setStatus("Ошибка загрузки"));
  }, []);
  const tableHead = ["Номер", "Цена за сутки"];
  const tableRows = [
    {
      name: "Двухместный",
    },
    {
      name: "Трехместный",
    },
    { name: "Дополнительное спальное место" },
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
                return <TableHead key={item}>{item}</TableHead>;
              })}
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableRows.map((item, i) => (
              <TableRow key={item.name}>
                <TableCell>{item.name}</TableCell>
                <TableCell>
                  {price ? (
                    `${price[i]} руб.`
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
