import { createMuiTheme } from "@material-ui/core/styles";

const theme = {
  colors: {
    halfGrey: "#9c9c9c",
    almostWhite: "#f5f5f5",
  },
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
    link: {
      textDecoration: "none",
    },
    lowerBoxShadow: {
      boxShadow: "0 2px 3px rgba(0,0,0,0.5)",
    },
  },
};

export const drawTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#1976d2",
      light: "#4791db",
      dark: "#115293",
    },
    secondary: {
      light: "#fff3e0",
      main: "#ffd180",
      dark: "#e65100",
    },
  },
});

export default theme;
