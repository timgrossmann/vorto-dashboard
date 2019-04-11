export const selectDevice = (state = {}, action) => {
  if (action.type === "SELECT_DEVICE") {
    return action.device
  }

  // return the updated version of the currently selected
  // TODO think about only saving the idea to avoid updating the selectedDevice
  // object on update of all device (reference instead of copy of device)
  if (action.type === "UPDATE_DEVICES") {
    const selectedId = state.attributes ? state.attributes.deviceId : "";

    if (selectedId) {
      const updatedSelected = action.devices.filter(device => {
        if (device.attributes.deviceId === selectedId) {
          return true
        }

        return false
      })

      return updatedSelected[0];
    }
  }

  return state;
}

export const updateDevices = (state = { devices: [], lastUpdated: "" }, action) => {
  if (action.type === "UPDATE_DEVICES") {
    return {
      devices: [...action.devices],
      lastUpdated: new Date().toString()
    }
  }

  return state;
}

export default {
  selectDevice,
  updateDevices
}