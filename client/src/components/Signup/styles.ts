import { createStyles } from "@material-ui/core";
import theme from "../../theme";

export const styles = () =>
  createStyles({
    SignupForm: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      height: "100%",
    },
    cardMain: {
      ...theme.classes.card,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
    },
    signupCardSize: {
      height: 450,
      width: 300,
    },
  });
