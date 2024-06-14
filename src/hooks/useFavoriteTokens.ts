import { useEffect, useState } from "react";
import { normalizedTokenData } from "@/types/normalizedTokenData";
import { createTokenKey } from "@/utils/createTokenKey";

const FAVORITE_TOKENS_KEY = "liFiFavoriteTokens";

export function useFavoriteTokens() {
  const [favoriteTokens, setFavoriteTokens] = useState<string[] | null>(null);

  useEffect(() => {
    // get initial value from localstorage
    const localStorageValue = window.localStorage.getItem(FAVORITE_TOKENS_KEY);
    if (localStorageValue) {
      const parsedLocalStorageValue = JSON.parse(localStorageValue);
      if (Array.isArray(parsedLocalStorageValue)) {
        setFavoriteTokens(parsedLocalStorageValue);
      }
    }
  }, []);

  useEffect(() => {
    // update local storage when the user interact with state
    if (favoriteTokens) {
      window.localStorage.setItem(
        FAVORITE_TOKENS_KEY,
        JSON.stringify(favoriteTokens),
      );
    }
  }, [favoriteTokens]);

  const addFavoriteToken = (token: normalizedTokenData) => {
    const favoriteTokenKey = createTokenKey(token);
    setFavoriteTokens((prevState) =>
      prevState ? [...prevState, favoriteTokenKey] : [favoriteTokenKey],
    );
  };

  const removeFavoriteToken = (token: normalizedTokenData) => {
    const favoriteTokenKey = createTokenKey(token);
    setFavoriteTokens((prevState) =>
      prevState
        ? prevState.filter((item: string) => item !== favoriteTokenKey)
        : prevState,
    );
  };

  const isAFavoriteToken = (token: normalizedTokenData) => {
    const favoriteTokenKey = createTokenKey(token);
    return favoriteTokens && favoriteTokens.includes(favoriteTokenKey);
  };

  const toggleFavoriteToken = (token: normalizedTokenData) => {
    if (isAFavoriteToken(token)) {
      removeFavoriteToken(token);
    } else {
      addFavoriteToken(token);
    }
  };

  return { favoriteTokens, toggleFavoriteToken, isAFavoriteToken };
}
