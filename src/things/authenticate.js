const request = require("request-promise-native");
const config = require("../../config.json")

const reqOpts = {
    url: 'https://access.bosch-iot-suite.com/token',
    method: "POST",
    headers: { 
        "Content-Type": "application/x-www-form-urlencoded"
    },
    form: {
        "grant_type": "client_credentials",
        "client_id": config.things.client_id,
        "client_secret": config.things.client_secret,
        "scope:service": config.things.scope
    }
}

// TODO set timer to refresh token once it's expired (refresh token)

request(reqOpts)
    .then(res => console.log(res))
    .catch(err => console.log(err))