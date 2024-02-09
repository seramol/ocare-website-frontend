import { createTheme } from "@mui/material/styles";
import { green } from "@mui/material/colors";
import { theme } from "./theme";

export const customMuiTheme = createTheme({
  palette: {
    primary: {
      main: "#2984B9",
    },
    secondary: {
      main: green[500],
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1366,
      xl: 1536,
    },
  },

  typography: {
    fontFamily: '"Public Sans",sans-serif',
    allVariants: {
      color: theme.colors.text,
    },

    h1: {
      fontSize: "32px",
      fontWeight: 500,
    },
    h2: {
      fontSize: "25px",
      fontWeight: "bold",
      fontFamily: "Arial",
      color: "#27445C",
    },
    h3: {
      fontSize: "20px",
      color: "#27285C",
      fontWeight: "bold",
    },

    h4: {
      fontSize: "20px",
      color: "#656565",
      fontWeight: "bold",
    },
    h5: {
      fontSize: "14px",
    },
    h6: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "white",
    },

    body1: {
      fontWeight: 400,
      fontSize: "16px",
    },
    body2: {
      fontWeight: 500,
      fontSize: "16px",
    },
    caption: {
      fontWeight: 700,
      fontSize: "16px",
      color: "#4E4F55",
    },
  },

  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: "1rem",
          fontWeight: "500",
          borderWidth: "2px",
          textTransform: "none",
          "&:hover": {
            borderWidth: "2px",
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        size: "small",
      },
    },
  },
});
