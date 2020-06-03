const apiHeaders = new Headers();

apiHeaders.append('Content-Type', 'application/json');

export const getDeck = () =>
  fetch(`https://4e02c3cd17a9.ngrok.io/game/stack-cards`, {
    method: 'GET',
    headers: apiHeaders
  }).then((response) => response.json());

export default getDeck;
