"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { deletePrices } from "@/actions/action";
import FeedBackNotification from "../FeedBackNotification";

const DeletePrices = () => {
  const [deleteStatus, setDeleteStatus] = useState<string | null>(null);
  const onDeletePrices = async (roomType: string) => {
    setDeleteStatus(null);
    const response = await deletePrices(roomType)
      .then(() => {
        setDeleteStatus("Успешно");
        setTimeout(() => {
          setDeleteStatus(null);
        }, 2500);
      })
      .catch(() => {
        setDeleteStatus("Ошибка");
      });
  };
  return (
    <>
      <div className="flex gap-x-6 text-white">
        <Button onClick={() => onDeletePrices("double")}>
          Удалить цены для 2 местных номеров
        </Button>

        <Button onClick={() => onDeletePrices("triple")}>
          Удалить цены для 3 местных номеров
        </Button>
      </div>
      <FeedBackNotification status={deleteStatus} />
    </>
  );
};

export default DeletePrices;
