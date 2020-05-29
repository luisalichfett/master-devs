const apiHeaders = new Headers();

apiHeaders.append('Content-Type', 'application/json');

export const getGameData = (id) =>
  fetch(`https://8bcbf231da6f.ngrok.io/game/load-board/${id}`, {
    method: 'GET',
    headers: apiHeaders
  }).then((response) => response.json());

  
  export const logoff = (id) =>
  fetch(`https://8bcbf231da6f.ngrok.io/game/logoff/${id}`, {
    method: 'DELETE',
    headers: apiHeaders
  }).then((response) => response.json());

  export default { getGameData, logoff };
