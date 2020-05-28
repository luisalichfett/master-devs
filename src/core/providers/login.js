const apiHeaders = new Headers();

apiHeaders.append('Content-Type', 'application/json');

export const postLogin = (login) =>
  fetch('https://b3656081.ngrok.io/player/login', {
    method: 'POST',
    headers: apiHeaders,
    body: JSON.stringify(login),
  }).then((response) => response.json());

export default postLogin;
