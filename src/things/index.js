const request = require("request-promise-native");
const AuthToken = require("./authenticate");

const getReqOpts = (accessToken) => ({
    url: "https://things.eu-1.bosch-iot-suite.com/api/2/search/things",
    method: "GET",
    headers: {
        "accept": "application/json",
        "Authorization": `Bearer ${accessToken}`
    },
    json: true  
})

const authToken = new AuthToken()
function getUpdatedDevices () {
    return new Promise((resolve, reject) => {
        authToken
            .getToken()
            .then(token => {
                console.log(token)

                // request all things the user has created and have a policy
                request(getReqOpts(token))
                    .then(res => {
                        console.log(JSON.stringify(res, null, 4))

                        const devices = res.items
                        resolve(devices)
                    })
            })
    })
}

module.exports = {
    getUpdatedDevices
}