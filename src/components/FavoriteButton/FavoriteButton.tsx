"use client";

import { useFavoriteTokens } from "@/hooks/useFavoriteTokens";
import { normalizedTokenData } from "@/types/normalizedTokenData";
import StarIcon from "@mui/icons-material/Star";
import { Button } from "@mui/material";
import theme from "@/app/theme";

interface FavoriteButtonProps {
  token: normalizedTokenData;
}

export function FavoriteButton({ token }: FavoriteButtonProps) {
  const { toggleFavoriteToken, isAFavoriteToken } = useFavoriteTokens();

  const handleToggleFavoriteToken = () => {
    toggleFavoriteToken(token);
  };

  const isFavorite = isAFavoriteToken(token);
  return (
    <Button
      variant={"contained"}
      onClick={handleToggleFavoriteToken}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        mb: theme.spacing(2),
        mt: theme.spacing(2),
      }}
      data-testid={`favorite-button`}
    >
      <StarIcon color={isFavorite ? "warning" : "disabled"} />
      {isFavorite ? "Remove from favorite tokens" : "Mark as favorite tokens"}
    </Button>
  );
}
