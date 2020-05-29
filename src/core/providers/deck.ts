const apiHeaders = new Headers();

apiHeaders.append('Content-Type', 'application/json');

export const getDeck = () =>
  fetch(`https://8bcbf231da6f.ngrok.io/game/stack-cards`, {
    method: 'GET',
    headers: apiHeaders
  }).then((response) => response.json());

export default getDeck;
