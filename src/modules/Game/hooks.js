import { useCallback, useState } from "react";
import {
  getGameData,
  logoff,
  getDeckCards,
  pickCard,
  buyCard
} from "../../core/providers/game";

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
  const endGame = useCallback((id) => {
    logoff(id)
      .then(() => localStorage.clear())
      .catch((error) => console.error(error));
  }, []);

  return { endGame };
};

export const useDeck = () => {
  const [responseDeckCards, setResponseDeckCards] = useState();

  const deckCards = useCallback(() => {
    setResponseDeckCards(undefined);
    getDeckCards()
      .then((data) => setResponseDeckCards(data))
      .catch((error) => console.error(error));
  }, []);

  return { deckCards, responseDeckCards };
};

export const useThrowCard = () => {
  const [responseThrowCard, setResponseThrowCard] = useState();

  const throwCard = useCallback((playerId, cardId, bugId) => {
    setResponseThrowCard(undefined);
    pickCard(playerId, cardId, bugId)
      .then((data) => setResponseThrowCard(data))
      .catch((error) => console.error(error));
  }, []);

  return { throwCard, responseThrowCard };
};

export const useBuyCard = () => {
  const [responseBuyDeckCard, setResponseBuyDeckCard] = useState();

  const buyDeckCard = useCallback((playerId, cardId) => {
    setResponseBuyDeckCard(undefined);
    buyCard(playerId, cardId)
      .then((data) => setResponseBuyDeckCard(data))
      .catch((error) => console.error(error));
  }, []);

  return { buyDeckCard, responseBuyDeckCard };
};

export default { useGame, useEndGame, useThrowCard, useDeck, useBuyCard };
