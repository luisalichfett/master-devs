import { useCallback, useState } from 'react';
import { getGameData } from '../../core/providers/game';

export const usePlayer = () => {
  const [responseData, setResponseData] = useState();

  const loadPlayer = useCallback(
    (id) => {
      setResponseData(undefined);
      getGameData(id)
        .then((data) => setResponseData(data))
        .catch((error) => console.error(error));
    },
    []
  );

  return { loadPlayer, responseData };
};

export default usePlayer;
