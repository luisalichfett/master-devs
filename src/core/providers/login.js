const request = require('request')

export const loadLogin = () => {
    return request('http://www.google', (error, response, body) => {
        if (!error && response.statusCode === 200) {
            console.log(body)
        }
    })
}
export default loadLogin