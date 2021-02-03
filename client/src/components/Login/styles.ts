import { createStyles } from "@material-ui/core";
import theme from "../theme";

const styles = createStyles({
  cardMain: {
    ...theme.classes.card,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  SignupForm: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    height: "100%",
  },
});

export default styles;
