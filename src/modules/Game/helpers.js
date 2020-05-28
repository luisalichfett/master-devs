export const generatePlayerId = (history) => {
  const id = parseInt(history.location.search.split("=")[1]);

  return id;
};