"use client";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MuiLink from "@mui/material/Link";
import React from "react";

export default function NotFound() {
  return (
    <Container>
      <Box
        component="section"
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant={"h2"}>Page not found</Typography>
        <MuiLink
          component={Link}
          href={`/`}
          sx={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 1,
            mt: 5,
          }}
        >
          <ArrowBackIcon /> Back to Home
        </MuiLink>
      </Box>
    </Container>
  );
}
