const apiHeaders = new Headers();

apiHeaders.append('Content-Type', 'application/json');

export const getDeck = () =>
  fetch(`https://d52220156f32.ngrok.io/game/stack-cards`, {
    method: 'GET',
    headers: apiHeaders
  }).then((response) => response.json());

export default getDeck;
