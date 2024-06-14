import type { Metadata } from "next";
import { ReactNode } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { StyledRoot } from "@/app/StyledRoot";
import CssBaseline from "@mui/material/CssBaseline";

export const metadata: Metadata = {
  title: "Tokens explorer",
  description: "A smart token explorer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <StyledRoot>
            <CssBaseline />
            {children}
          </StyledRoot>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
