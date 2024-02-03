"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { cancelBookingAction } from "@/actions/action";

interface IModalProps {
  selectedId: string;
  open: boolean;
  setOpen: (state: boolean) => void;
}
const CancelModal = ({ selectedId, open, setOpen }: IModalProps) => {
  const [btnDisabled, setBtnDisabled] = useState(false);

  const handleCancelBooking = (id: string) => {
    setBtnDisabled(true);
    cancelBookingAction(id);

    setTimeout(() => setOpen(false), 500);
    setBtnDisabled(false);
  };
  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle>Are you absolutely to delete this booking?</DialogTitle>
        </DialogHeader>
        <DialogFooter>
          <Button
            onClick={() => handleCancelBooking(selectedId)}
            disabled={btnDisabled}
            variant={"outline"}
          >
            Ok
          </Button>
          <Button variant={"outline"} onClick={() => setOpen(false)}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CancelModal;
