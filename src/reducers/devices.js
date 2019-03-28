import { INITAL_STATE } from "../store";

console.log(INITAL_STATE)

export const selectDevice = (state=INITAL_STATE, action) => {
    if (action.type === "SELECT_DEVICE") {
        return {...state, selectedDevice: action.device}
    }

    return state;
}

export const updateDevices = (state=INITAL_STATE, action) => {
    if (action.type === "UPDATE_DEVICES") {
        return {
            ...state, 
            devices: action.devices, 
            latUpdated: new Date().toString()
          }
    }

    return INITAL_STATE;
}

export default {
    selectDevice,
    updateDevices
}