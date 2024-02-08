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
import ErrorNotification from "../ErrorNotification";
interface IModalProps {
  selectedId: string;
  open: boolean;
  setOpen: (state: boolean) => void;
  action: (id: string) => Promise<unknown>;
}
const CancelModal = ({ selectedId, open, setOpen, action }: IModalProps) => {
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [cancelStatus, setCancelStatus] = useState<boolean | null>(null);

  const handleCancelBooking = (id: string) => {
    setBtnDisabled(true);
    setCancelStatus(null);
    action(id)
      .then(() => setCancelStatus(true))
      .catch(() => {
        setCancelStatus(false);
        setBtnDisabled(false);
      });

    setBtnDisabled(false);
  };
  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle>Удалить/отменить бронирование?</DialogTitle>
        </DialogHeader>
        <DialogFooter>
          <Button
            onClick={() => handleCancelBooking(selectedId)}
            disabled={btnDisabled}
            variant={"outline"}
            className="disabled:bg-white-400"
          >
            Ok
          </Button>
          <Button variant={"outline"} onClick={() => setOpen(false)}>
            Close
          </Button>
        </DialogFooter>
        <div className="text-center">
          <ErrorNotification status={cancelStatus} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CancelModal;
