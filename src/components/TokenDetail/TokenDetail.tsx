import { TokenImage } from "@/components/TokenImage/TokenImage";
import { Box, Typography } from "@mui/material";
import { notFound } from "next/navigation";
import { getToken } from "@/api/getToken";

interface TokenDetailProps {
  chainId: string;
  coinAddress: string;
}

export default async function TokenDetail({
  chainId,
  coinAddress,
}: TokenDetailProps) {
  const token = await getToken({ chainId, coinAddress });
  if (!token || !token.address) {
    notFound();
  }
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 2, mb: 2 }}>
        <TokenImage alt={token.name} src={token.logoURI} />
        <Typography
          variant={"h1"}
          sx={{ display: "flex", flexGrow: 1 }}
          data-testid={`token-detail-name`}
          noWrap
        >
          {token.name}
        </Typography>
      </Box>

      <Typography variant={"body1"} data-testid={`token-detail-address`} noWrap>
        {token.address}
      </Typography>
      <Typography variant={"body1"} data-testid={`token-detail-price`}>
        Price: {token.priceUSD}$
      </Typography>
      <Typography variant={"body1"} data-testid={`token-detail-symbol`}>
        Symbol: {token.symbol}
      </Typography>
      <Typography variant={"body1"} data-testid={`token-detail-coinKey`}>
        CoinKey: {token.coinKey}
      </Typography>
      <Typography variant={"body1"} data-testid={`token-detail-chainId`}>
        ChainId: {token.chainId}
      </Typography>
      <Typography variant={"body1"} data-testid={`token-detail-decimals`}>
        Decimals: {token.decimals}
      </Typography>
    </>
  );
}
