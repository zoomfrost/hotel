import React, { useState } from "react";

import { Button } from "./ui/button";
import BookingForm from "./BookingForm";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

const AlertForm = () => {
  return (
    <Dialog>
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
