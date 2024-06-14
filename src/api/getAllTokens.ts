import { normalizedTokenData } from "@/types/normalizedTokenData";
import { chainData, chainsApi } from "@/types/api/chains";
import { getChainsTokens } from "@/api/getChainTokens";

export async function getAllTokens() {
  const chainsRes = await fetch(`${process.env.API_URL}/chains`);

  const chainsData: chainsApi = await chainsRes.json();
  const chainsKeys = chainsData.chains
    ? chainsData.chains.map((chain: chainData) => chain.id)
    : [];

  return Promise.all(
    chainsKeys.map((chainId) => {
      const chainIdString = chainId.toString();
      return getChainsTokens(chainIdString);
    }),
  ).then((results) => results.flat(2) as normalizedTokenData[]);
}
