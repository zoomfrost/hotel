"use client";

import React from "react";
import { Button } from "../ui/button";
import { deletePrices } from "@/actions/action";

const DeletePrices = () => {
  const onDeletePrices = async (roomType: string) => {
    await deletePrices(roomType).then((data) => console.log(data));
  };
  return (
    <div className="flex gap-x-6 text-white">
      <Button onClick={() => onDeletePrices("double")}>
        Удалить цены для 2 местных номеров
      </Button>

      <Button onClick={() => onDeletePrices("triple")}>
        Удалить цены для 3 местных номеров
      </Button>
    </div>
  );
};

export default DeletePrices;
