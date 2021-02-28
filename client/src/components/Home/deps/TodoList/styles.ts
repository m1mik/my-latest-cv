import { createStyles, Theme } from "@material-ui/core";
import theme from "../../../theme";

const styles = (draw: Theme) =>
  createStyles({
    todoList: {
      backgroundColor: "white",
    },
    listSubHeader: {
      display: "flex",
      justifyContent: "space-between",
      backgroundColor: draw.palette.secondary.light,
      borderBottom: `2px solid ${draw.palette.primary.dark}`,
    },
    todoListItem: {
      ...theme.classes.lowerBoxShadow,
    },
    activeCategoryBtn: {
      backgroundColor: draw.palette.primary.light,
      color: "white",
      "&:hover": {
        backgroundColor: "rgba(25, 118, 210, 0.5)",
      },
    },
  });

export default styles;
