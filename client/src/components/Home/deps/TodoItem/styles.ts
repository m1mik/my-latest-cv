import { Theme, createStyles } from "@material-ui/core";
import theme from "@comps/theme";

const styles = (draw: Theme) =>
  createStyles({
    todoListItem: {
      ...theme.classes.lowerBoxShadow,
    },
    todoItemPrimary: {
      display: "flex",
      justifyContent: "space-between",
    },
    todoDescriptionArrow: {
      transition: "transform 0.4s",
    },
    todoDescriptionExpanded: {
      transform: "rotate(180deg)",
    },
    done: {
      opacity: "0.4",
    },
  });

export default styles;
