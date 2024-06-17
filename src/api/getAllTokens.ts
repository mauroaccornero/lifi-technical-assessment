import { normalizedTokenData } from "@/types/normalizedTokenData";
import { tokensApi } from "@/types/api/tokens";
import { flatTokensResponse } from "@/utils/flatTokensResponse";

export async function getAllTokens() {
  const url = `${process.env.API_URL}/tokens`;
  return await fetch(url, { next: { revalidate: 60000 } })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Some error occurred calling ${url}`);
      }
      return res.json();
    })
    .then((data: tokensApi) => {
      return flatTokensResponse(data) as normalizedTokenData[];
    });
}
