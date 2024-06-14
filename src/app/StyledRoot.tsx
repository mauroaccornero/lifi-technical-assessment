"use client";

import { ReactNode } from "react";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import theme from "./theme";

export function StyledRoot({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
