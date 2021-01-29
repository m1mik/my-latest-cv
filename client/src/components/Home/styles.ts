import { createStyles } from "@material-ui/core";
import theme from "../../theme";

const styles = createStyles({
  center: {
    display: "flex",
  },
  card: {
    ...theme.classes.card,
  },
});

export default styles;
