import React from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Button } from "./ui/button";
import BookingForm from "./BookingForm";

const AlertForm = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="uppercase" variant="outline">
          Book Now
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-black-100 ">
        <AlertDialogHeader className="text-white">
          <AlertDialogDescription className="flex-center">
            <BookingForm />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="text-white">
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertForm;
