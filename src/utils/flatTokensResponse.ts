import { tokensApi } from "@/types/api/tokens";

export function flatTokensResponse(tokensData: tokensApi) {
  if (tokensData.tokens) {
    return Object.entries(tokensData.tokens)
      .map(([key, value]) => value)
      .flat(2);
  }
  return [];
}
