import { flatTokensResponse } from "@/utils/flatTokensResponse";
import { normalizedTokenData } from "@/types/normalizedTokenData";
import { tokensApi } from "@/types/api/tokens";

export async function getChainsTokens(chainId: string) {
  const url = `${process.env.API_URL}/tokens?chains=${chainId}&chainTypes=EVM`;
  // https://github.com/vercel/next.js/discussions/48324
  // https://li.quest/v1/tokens?chains=1&chainTypes=EVM  it's too big for next.js data cache
  // todo: this smell but I' dont' have a better workaround atm
  return fetch(url, { cache: chainId === "1" ? "no-store" : "force-cache" })
    .then((res) => {
      return res.json();
    })
    .then((data: tokensApi) => {
      return flatTokensResponse(data) as normalizedTokenData[];
    });
}
