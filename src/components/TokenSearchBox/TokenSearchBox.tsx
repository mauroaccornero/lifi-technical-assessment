import { Box, Toolbar, AppBar, Divider } from "@mui/material";
import { HomePageLink } from "@/components/TokenSearchBox/components/HomePageLink";
import TokenListWrapper from "@/components/TokenSearchBox/components/TokenListWrapper/TokenListWrapper";
import { SearchField } from "@/components/TokenSearchBox/components/SearchField/SearchField";
import { Suspense } from "react";
import { Loader } from "@/components/Loader/Loader";

export default async function TokenSearchBox() {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "white",
        minHeight: "100vh",
        pb: 5,
      }}
    >
      <AppBar position="sticky">
        <Toolbar
          sx={{
            display: "flex",
            alignContent: "center",
            flexDirection: "column",
          }}
        >
          <HomePageLink />
          <Divider />
          <SearchField />
        </Toolbar>
      </AppBar>
      <Suspense fallback={<Loader text={"Loading tokens"} />}>
        <TokenListWrapper />
      </Suspense>
    </Box>
  );
}
