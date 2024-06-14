import React from "react";
import { getAllTokens } from "@/api/getAllTokens";
import { TokenList } from "@/components/TokenSearchBox/components/TokenList/TokenList";

export default async function TokenListWrapper() {
  const tokens = await getAllTokens();
  return <TokenList tokens={tokens} />;
}
