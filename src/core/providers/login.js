const apiHeaders = new Headers();

apiHeaders.append("Content-Type", "application/json")

export const postLogin = (login) => 
    fetch(
        "http://d784ad93.ngrok.io/player/login",
        {method: "POST", headers: apiHeaders, body: JSON.stringify(login)
    }).then((response) => response.json)

export default postLogin;