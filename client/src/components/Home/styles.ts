import { createStyles, Theme } from "@material-ui/core";
import theme from "../../theme";

const styles = (draw: Theme) =>
  createStyles({
    homeToolbar: {
      display: "flex",
      justifyContent: "flex-end",
    },
    home: {
      height: "100%",
      width: "100%",
    },
    center: {
      display: "flex",
    },
    card: {
      ...theme.classes.card,
    },
  });

export default styles;
