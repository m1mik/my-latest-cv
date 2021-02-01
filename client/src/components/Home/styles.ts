import { createStyles, Theme } from "@material-ui/core";
import theme from "../../theme";

const styles = (draw: Theme) =>
  createStyles({
    homeToolbar: {
      display: "flex",
      justifyContent: "flex-end",
    },
    pageWrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "100%",
    },
    home: {
      height: "100%",
      width: "100%",
    },
    homePage: {
      display: "flex",
      justifyContent: "center",
      height: "100%",
      width: "750px",
      backgroundColor: theme.colors.halfGrey,
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
    tabPanel: {
      width: "100%",
      backgroundColor: "#9c9c9c",
      marginLeft: "100%",
      transition: "margin-left 0.3s ease-out",
      padding: draw.spacing(0, 2),
    },
    showTabPanel: {
      marginLeft: "0",
    },
  });

export default styles;
