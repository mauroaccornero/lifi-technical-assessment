import React, { Suspense } from "react";
import TokenDetail from "@/components/TokenDetail/TokenDetail";
import { getAllTokens } from "@/api/getAllTokens";
import { Metadata } from "next";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import MuiLink from "@mui/material/Link";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Loader } from "@/components/Loader/Loader";
import { getToken } from "@/api/getToken";

interface TokenDetailPageParams {
  chainId: string;
  coinAddress: string;
}

interface TokenDetailPageProps {
  params: TokenDetailPageParams;
}

export async function generateStaticParams() {
  const tokens = await getAllTokens();
  // limit ISR to 20 pages
  return tokens.slice(0, 20).map((token) => {
    return {
      chainId: token.chainId.toString(),
      coinAddress: token.address,
    };
  });
}

export async function generateMetadata({
  params,
}: TokenDetailPageProps): Promise<Metadata> {
  const token = await getToken(params);
  return {
    title: token ? `Discover ${token.name} token` : "Token detail",
    description: token
      ? `Discover ${token.name} full detail data ${token.address}`
      : "Token detail",
  };
}

export default async function TokenDetailPage({
  params,
}: TokenDetailPageProps) {
  return (
    <Container>
      <Box
        component="section"
        sx={{
          backgroundColor: "white",
          minHeight: "100vh",
          p: 5,
        }}
      >
        <Suspense fallback={<Loader text="Loading token detail..." />}>
          <TokenDetail
            chainId={params.chainId}
            coinAddress={params.coinAddress}
          />
        </Suspense>
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
          data-testid={`link-back-home`}
        >
          <ArrowBackIcon /> Back to Home
        </MuiLink>
      </Box>
    </Container>
  );
}
