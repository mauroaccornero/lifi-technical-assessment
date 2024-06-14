import { tokenData } from "@/types/api/tokens";

export async function getToken({
  chainId,
  coinAddress,
}: {
  chainId: string;
  coinAddress: string;
}) {
  const url = `${process.env.API_URL}/token?chain=${chainId}&token=${coinAddress}`;
  return await fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data: tokenData) => {
      return data;
    });
}
