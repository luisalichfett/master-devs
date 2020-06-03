const apiHeaders = new Headers();

apiHeaders.append('Content-Type', 'application/json');

export const postLogin = (login) =>
  fetch('https://4e02c3cd17a9.ngrok.io/player/login', {
    method: 'POST',
    headers: apiHeaders,
    body: JSON.stringify(login),
  }).then((response) => response.json());

export default postLogin;