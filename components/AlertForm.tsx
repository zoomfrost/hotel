"use client";

import { Button } from "./ui/button";
import BookingForm from "./BookingForm";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { useState } from "react";
import { Cross1Icon } from "@radix-ui/react-icons";

const AlertForm = () => {
  const [open, setOpen] = useState(false);
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button
          type="button"
          className="uppercase max-sm:text-xs hover:bg-gray-500 active:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-700"
          variant="outline"
        >
          Забронировать
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-md:w-[90%] max-h-[90%] overflow-y-auto bg-amber-50 flex justify-center">
        <Cross1Icon
          className="hover:cursor-pointer absolute right-5 z-10"
          onClick={() => setOpen(false)}
        />
        <BookingForm />
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertForm;
