"use client";

import React, { useMemo } from "react";
import { WindowVirtualizer } from "virtua";
import { createTokenKey } from "@/utils/createTokenKey";
import { TokenItem } from "@/components/TokenSearchBox/components/TokenItem/TokenItem";
import { Box } from "@mui/material";
import { normalizedTokenData } from "@/types/normalizedTokenData";
import { useSearchParams } from "next/navigation";
import { useFavoriteTokens } from "@/hooks/useFavoriteTokens";

interface TokenListProps {
  tokens: normalizedTokenData[];
}

export function TokenList({ tokens }: TokenListProps) {
  const searchParams = useSearchParams();
  const query = searchParams.get("query")?.toString() || "";
  const { favoriteTokens, isAFavoriteToken } = useFavoriteTokens();
  const filteredTokens = useMemo(() => {
    const k = tokens.filter(
      (token: normalizedTokenData) =>
        token.symbol.toLowerCase().includes(query.toLowerCase()) ||
        token.name.toLowerCase().includes(query.toLowerCase()),
    );
    if (favoriteTokens) {
      return [
        ...k.filter((token) => isAFavoriteToken(token)),
        ...k.filter((token) => !isAFavoriteToken(token)),
      ];
    }
    return k;
  }, [query, tokens, favoriteTokens, isAFavoriteToken]);

  return (
    <Box
      sx={{
        p: { xs: 2 },
      }}
    >
      {" "}
      {filteredTokens.length === 0 ? (
        <Box sx={{ mb: 1 }}>
          No tokens found with query &quot;{query}&quot;{" "}
        </Box>
      ) : (
        <WindowVirtualizer>
          {filteredTokens.map((token, index) => {
            const tokenKey = createTokenKey(token);
            return <TokenItem key={tokenKey} token={token} index={index} />;
          })}
        </WindowVirtualizer>
      )}
    </Box>
  );
}
