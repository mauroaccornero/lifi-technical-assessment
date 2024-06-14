"use client";

import { Roboto } from "next/font/google";
import createTheme from "@mui/material/styles/createTheme";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 400,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 400,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          margin: 0,
          padding: 0,
        },
        body: {
          backgroundColor: "#eeeeee",
          margin: 0,
          padding: 0,
        },
      },
    },
  },
});

export default theme;
