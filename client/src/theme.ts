import { createMuiTheme } from "@material-ui/core/styles";
export const themeProviderObject = createMuiTheme({});

const theme = {
  classes: {
    card: {
      margin: "0 20px",
      color: "#9c9c9c",
      backgroundColor: "#f1ebeb",
      borderRadius: "10px",
      width: "220px",
      height: "280px",
      padding: "3em 1em",
    },
    shiningCard: {
      transition: "box-shadow 0.5s ease-out",
      "&:hover": {
        boxShadow: "-2px -1px 20px aqua, 2px 1px 20px aqua",
      },
    },
    verticalAlignment: {
      display: "flex",
      flexDirection: "column",
    },
  },
};

export default theme;
