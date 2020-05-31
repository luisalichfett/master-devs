import { useCallback, useState } from "react";
import { getGameData, logoff } from "../../core/providers/game";

export const useGame = () => {
  const [responseLoadGame, setResponseLoadGame] = useState();

  const loadGame = useCallback((playerId) => {
    setResponseLoadGame(undefined);
    getGameData(playerId)
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

  return { endGame }
};

export default { useGame, useEndGame };
