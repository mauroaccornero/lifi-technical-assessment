import { getAllTokens } from "@/api/getAllTokens";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const tokens = await getAllTokens();
  const today = new Date();

  const sitemap = [
    {
      url: `${process.env.BASE_URL}/`,
      lastModified: today.toLocaleString(),
    },
  ];

  return [
    ...sitemap,
    ...tokens.map((token) => {
      return {
        url: `${process.env.BASE_URL}/tokens/${token.chainId}/${token.address}`,
        lastModified: today.toLocaleString(),
      };
    }),
  ];
}
