import { normalizedTokenData } from "@/types/normalizedTokenData";
import { createTokenKey } from "@/utils/createTokenKey";

export const findTokenByKey = (tokens: normalizedTokenData[], slug: string) => {
  return tokens.find((token: normalizedTokenData) => {
    const tokenKey = createTokenKey(token);
    return slug === tokenKey;
  });
};
