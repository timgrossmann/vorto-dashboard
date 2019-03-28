import { combineReducers } from 'redux';
import { selectDevice, updateDevices } from "./devices.js"

export default combineReducers({
    selectDevice,
    updateDevices
})
