export const generateGamePath = (history, id) => {
  const params = new URLSearchParams({ playerId: `${id}`, bugId: `${id}` });

  history.push({
    pathname: "/game",
    search: params.toString(),
  });
};
