export const generateGamePath = (history, id) => {
  const params = new URLSearchParams({ id: `${id}` });

  history.push({
    pathname: "/game",
    search: params.toString(),
  });

  console.log(history);
};
