"use client";

import React, { useState } from "react";

import { Button } from "./ui/button";
import BookingForm from "./BookingForm";
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "./ui/dialog";

const AlertForm = () => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="uppercase" variant="outline">
          Book Now
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-amber-50 flex justify-center">
        <BookingForm />
      </DialogContent>
    </Dialog>
  );
};

export default AlertForm;
