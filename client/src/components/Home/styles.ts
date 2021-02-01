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
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    card: {
      ...theme.classes.card,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "3em",
      padding: "1em 0",
      "&:hover": {
        color: draw.palette.primary.main,
      },
    },
    iconCentralizer: {
      display: "flex",
      justifyContent: "center",
    },
    icon: {
      width: "120px",
      height: "120px",
    },
    link: {
      ...theme.classes.link,
    },
    homeTabsRoot: {
      backgroundColor: draw.palette.primary.dark,
    },
  });

export default styles;
