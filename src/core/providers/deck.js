const apiHeaders = new Headers();

apiHeaders.append('Content-Type', 'application/json');

export const getDeck = () =>
  fetch(`https://408c70670daa.ngrok.io/game/stack-cards`, {
    method: 'GET',
    headers: apiHeaders
  }).then((response) => response.json());

export default getDeck;
