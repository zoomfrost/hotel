import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

interface IModalProps {
  selectedId: string;
  open: boolean;
  setOpen: (state: boolean) => void;
}
const CancelModal = ({ selectedId, open, setOpen }: IModalProps) => {
  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle>
            Are you absolutely to delete this booking {selectedId}
          </DialogTitle>
        </DialogHeader>
        <DialogFooter>
          <Button>Ok</Button>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CancelModal;
