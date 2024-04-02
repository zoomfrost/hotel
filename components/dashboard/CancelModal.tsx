"use client";

import { useState, useTransition } from "react";
import { Button } from "../ui/button";

import FeedBackNotification from "../FeedBackNotification";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";
interface IModalProps {
  selectedId: string;
  open: boolean;
  setOpen: (state: boolean) => void;
  action: (id: string) => Promise<unknown>;
}
const CancelModal = ({ selectedId, open, setOpen, action }: IModalProps) => {
  const [cancelStatus, setCancelStatus] = useState<string | null>(null);

  const [isPending, startTransition] = useTransition();

  const handleBookingAction = (id: string) => {
    setCancelStatus(null);
    action(id)
      .then(() => setCancelStatus("Успешно"))
      .catch(() => {
        setCancelStatus("Ошибка");
      });
  };
  return (
    <AlertDialog onOpenChange={setOpen} open={open}>
      <AlertDialogContent className="bg-white">
        <AlertDialogHeader>
          <AlertDialogTitle>Удалить/отменить бронирование?</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter className="max-sm:w-3/4 mx-auto gap-y-4">
          <Button
            onClick={() =>
              startTransition(async () => {
                await handleBookingAction(selectedId);
              })
            }
            disabled={isPending}
            variant={"outline"}
            className="disabled:bg-white-400"
          >
            Ok
          </Button>
          <Button variant={"outline"} onClick={() => setOpen(false)}>
            Close
          </Button>
        </AlertDialogFooter>
        <div className="text-center">
          <FeedBackNotification status={cancelStatus} />
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CancelModal;
