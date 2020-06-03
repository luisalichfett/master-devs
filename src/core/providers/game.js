const apiHeaders = new Headers();

apiHeaders.append("Content-Type", "application/json");

export const getGameData = (id) =>
  fetch(`https://408c70670daa.ngrok.io/game/${id}/load-board/${id}`, {
    method: "GET",
    headers: apiHeaders,
  }).then((response) => response.json());

export const logoff = (id) =>
  fetch(`https://408c70670daa.ngrok.io/game/${id}/logoff/${id}`, {
    method: "DELETE",
    headers: apiHeaders,
  }).then((response) => response.json());

export const getDeckCards = () =>
  fetch(`https://408c70670daa.ngrok.io/game/stack-cards`, {
    method: "GET",
    headers: apiHeaders,
  }).then((response) => response.json());

export const buyCard = (playerId, cardId) =>
  fetch(`https://408c70670daa.ngrok.io/game/${playerId}/buy-card/${cardId}`, {
    method: "PUT",
    headers: apiHeaders,
  }).then((response) => response.json());

export const pickCard = (id,  bugId, cardId) =>
  fetch(`https://408c70670daa.ngrok.io/game/${id}/scoreboard-player`, {
    method: "PUT",
    headers: apiHeaders,
    body: JSON.stringify({
      "bugId": bugId,
      "cardId": cardId,
    }),
  }).then((response) => response.json());

export default { getGameData, logoff, getDeckCards, pickCard, buyCard };
