const apiHeaders = new Headers();

apiHeaders.append("Content-Type", "application/json");

export const getGameData = (id) =>
  fetch(`https://b38ca6ac5007.ngrok.io/game/${id}/load-board/${id}`, {
    method: "GET",
    headers: apiHeaders,
  }).then((response) => response.json());

export const logoff = (id) =>
  fetch(`https://b38ca6ac5007.ngrok.io/${id}/load-board/${id}`, {
    method: "DELETE",
    headers: apiHeaders,
  }).then((response) => response.json());

export default { getGameData, logoff };

export const getNewCard = () =>
  fetch(`https://b38ca6ac5007.ngrok.io/game/stack-cards`, {
    method: "GET",
    headers: apiHeaders,
  }).then((response) => response.json());
