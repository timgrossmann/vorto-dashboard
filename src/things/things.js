// Pull the things and send them via websockets to the frontend

const request = require("request-promise-native");
const AuthToken = require("./authenticate");
const config = require("../../config.json")

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
function updateDevices () {
    authToken
        .getToken()
        .then(token => {
            console.log(token)

            // request all things the user has created and have a policy
            request(getReqOpts(token))
                .then(res => {
                    console.log(JSON.stringify(res, null, 4))

                    const devices = res.items
                    // io.emit("update_devices", { devices: devices })
                })
        })
}

setInterval(updateDevices, config.things.intervalMS)