const apiHeaders = new Headers();

apiHeaders.append('Content-Type', 'application/json');

export const getDeck = () =>
  fetch(`https://b38ca6ac5007.ngrok.io/game/stack-cards`, {
    method: 'GET',
    headers: apiHeaders
  }).then((response) => response.json());

export default getDeck;
