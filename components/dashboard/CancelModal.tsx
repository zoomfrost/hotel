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
import useBookingService from "@/services/BookingsService";

interface IModalProps {
  selectedId: string;
  open: boolean;
  setOpen: (state: boolean) => void;
}
const CancelModal = ({ selectedId, open, setOpen }: IModalProps) => {
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [cancelStatus, setCancelStatus] = useState<boolean | null>(null);

  const { cancelBooking } = useBookingService();

  const handleCancelBooking = (id: string) => {
    setBtnDisabled(true);
    cancelBooking(id).then((data) => {
      console.log(data);
      setCancelStatus(true);
    });
  };
  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle>
            Are you absolutely to delete this booking {selectedId}
          </DialogTitle>
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
