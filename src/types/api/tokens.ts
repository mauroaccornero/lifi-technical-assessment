export interface tokensApi {
  tokens: Record<string, tokenData[]>;
}

export interface tokenData {
  address: string;
  chainId: number;
  symbol: string;
  decimals: number;
  name: string;
  coinKey: string;
  logoURI?: string;
  priceUSD: string;
}
