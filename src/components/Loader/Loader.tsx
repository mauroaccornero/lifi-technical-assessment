import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

interface LoaderProps {
  text?: string;
}

export function Loader({ text }: LoaderProps) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        minHeight: "300px", // todo: refactor height with flex
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 1,
      }}
    >
      <CircularProgress />
      <Typography variant="body1" component="h2">
        {text || "Loading..."}
      </Typography>
    </Box>
  );
}
