import React from "react";
import { Dialog, DialogTitle } from "@material-ui/core";

interface DialogProps {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const Modal = ({ open, onClose, children }: DialogProps) => {
  const closeDialog = () => onClose();

  return (
    <Dialog onClose={closeDialog} open={open}>
      <DialogTitle id="create-new-todo">New TODO</DialogTitle>
      {children}
    </Dialog>
  );
};

export default Modal;
