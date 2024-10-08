import Link from "next/link";
import { TokenImage } from "@/components/TokenImage/TokenImage";
import { normalizedTokenData } from "@/types/normalizedTokenData";
import {
  Avatar,
  Divider,
  Link as MuiLink,
  Typography,
  Box,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { useFavoriteTokens } from "@/hooks/useFavoriteTokens";

interface TokenItemProps {
  token: normalizedTokenData;
  index: number;
}

export function TokenItem({ token, index }: TokenItemProps) {
  const { isAFavoriteToken } = useFavoriteTokens();
  const isFavoriteToken = isAFavoriteToken(token);
  return (
    <>
      <Box sx={{ mb: 1 }} data-testid={`token-item-${index}`}>
        <MuiLink
          component={Link}
          prefetch={index < 20}
          href={`/token/${token.chainId}/${token.address}`}
          sx={{
            pl: { xs: 0, md: 1 },
            pr: { xs: 0, md: 1 },
            pt: 1,
            display: "flex",
            gap: 1,
            alignItems: "center",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          <Avatar sx={{ width: "50px", height: "50px" }}>
            <TokenImage alt={token.name} src={token.logoURI} index={index} />
          </Avatar>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              margin: "0 auto",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            <Typography
              variant={"body1"}
              sx={{ color: "#000", fontWeight: 700, flexGrow: 1 }}
              data-testid={`token-item-${index}-name`}
              noWrap
            >
              {token.name}
            </Typography>
            <Typography
              variant={"body1"}
              sx={{ color: "#000", width: "100%" }}
              noWrap
              data-testid={`token-item-${index}-address`}
            >
              {token.address}
            </Typography>
          </Box>
          <Typography
            variant={"body1"}
            sx={{ color: "#000", display: "flex", justifySelf: "right", mr: 0 }}
            data-testid={`token-item-${index}-favorite`}
          >
            {isFavoriteToken ? (
              <StarIcon color={"warning"} data-testid={"is-favorite-token"} />
            ) : (
              <StarIcon color={"disabled"} data-testid={"not-favorite-token"} />
            )}
          </Typography>
        </MuiLink>
      </Box>
      <Divider variant="inset" />
    </>
  );
}
