const apiHeaders = new Headers();

apiHeaders.append('Content-Type', 'application/json');

export const getGameData = (id) =>
  fetch(`https://b3656081.ngrok.io/game/load-board/${id}`, {
    method: 'GET',
    headers: apiHeaders
  }).then((response) => response.json());

export default getGameData;
