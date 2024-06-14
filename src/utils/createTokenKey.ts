import { normalizedTokenData } from "@/types/normalizedTokenData";

export const createTokenKey = (token: normalizedTokenData) => {
  return encodeURIComponent(`${token.chainId}-${token.address}`);
};
