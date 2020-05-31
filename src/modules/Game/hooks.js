import { useCallback, useState } from "react";
import { getGameData, logoff, getNewCard } from "../../core/providers/game";

export const useGame = () => {
  const [responseLoadGame, setResponseLoadGame] = useState();

  const loadGame = useCallback((id) => {
    setResponseLoadGame(undefined);
    getGameData(id)
      .then((data) => setResponseLoadGame(data))
      .catch((error) => console.error(error));
  }, []);

  return { loadGame, responseLoadGame };
};

export const useEndGame = () => {
  const [responseData, setResponseData] = useState();

  const endGame = useCallback((id) => {
    setResponseData(undefined);
    logoff(id)
      .then((data) => localStorage.clear())
      .catch((error) => console.error(error));
  }, []);

  return { endGame };
};

export const useDeck = () => {
  const [responseNewCard, setResponseNewCard] = useState();

  const newCard = useCallback(() => {
    setResponseNewCard(undefined);
    getNewCard()
      .then((data) => setResponseNewCard(data))
      .catch((error) => console.error(error));
  }, []);

  return { newCard, responseNewCard };
};

export default { useGame, useEndGame, useDeck };

