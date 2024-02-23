"use client";

import React from "react";
import { Button } from "../ui/button";
import { deletePrices } from "@/actions/action";

const DeletePrices = () => {
  const onDeletePrices = async () => {
    await deletePrices().then((data) => console.log(data));
  };
  return <Button onClick={onDeletePrices}>Удалить все цены</Button>;
};

export default DeletePrices;
