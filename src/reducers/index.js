import { combineReducers } from 'redux';
import { selectDevice, updateDevices } from "./reducers.js"

export default combineReducers({
    selectedDevice: selectDevice,
    devices: updateDevices,
})
