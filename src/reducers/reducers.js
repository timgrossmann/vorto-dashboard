export const selectDevice = (state = {}, action) => {
  if (action.type === "SELECT_DEVICE") {
    return action.device
  }

  return state;
}

export const updateDevices = (state = { devices: [], lastUpdated: "" }, action) => {
  if (action.type === "UPDATE_DEVICES") {
    return {
      devices: action.devices,
      lastUpdated: new Date().toString()
    }
  }

  return state;
}

export default {
  selectDevice,
  updateDevices
}