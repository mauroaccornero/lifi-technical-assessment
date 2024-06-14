"use client";

import Link from "next/link";
import theme from "@/app/theme";
import { Link as MuiLink, Typography } from "@mui/material";

export function HomePageLink() {
  return (
    <MuiLink
      component={Link}
      href={`/`}
      sx={{
        cursor: "pointer",
        color: theme.palette.common.white,
      }}
      data-testid={"logo"}
    >
      <Typography variant="h1" sx={{ my: 2 }}>
        Tokens explorer
      </Typography>
    </MuiLink>
  );
}
