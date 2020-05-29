import { useCallback, useState } from "react";
import { getGameData, logoff } from "../../core/providers/game";

export const usePlayer = () => {
  const [responseData, setResponseData] = useState();

  const loadPlayer = useCallback((id) => {
    setResponseData(undefined);
    getGameData(id)
      .then((data) => setResponseData(data))
      .catch((error) => console.error(error));
  }, []);

  return { loadPlayer, responseData };
};

export const useEndGame = () => {
  const [responseData, setResponseData] = useState();

  const endGame = useCallback((id) => {
    setResponseData(undefined);
    logoff(id)
      .then((data) => {
          localStorage.clear()
          setResponseData(data)
        })
      .catch((error) => console.error(error));
  }, []);

  return { endGame, responseData }
};

export default { usePlayer, useEndGame };
