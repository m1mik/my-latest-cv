import React from "react";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

interface CustomSnackProps {
  isAlertOpen: boolean;
  closeAlert: () => void;
  message: string;
  severity?: "warning" | "success" | "info" | "error" | undefined;
}

const CustomSnack = ({
  isAlertOpen,
  closeAlert,
  message,
  severity = "warning",
}: CustomSnackProps) => (
  <Snackbar
    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    open={isAlertOpen}
    autoHideDuration={6000}
    onClose={closeAlert}
  >
    <MuiAlert onClose={closeAlert} severity={severity}>
      {message}
    </MuiAlert>
  </Snackbar>
);

export default CustomSnack;
