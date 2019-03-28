export const selectDevice = device => ({
  type: 'SELECT_DEVICE',
  device
})

export const updateDevices = devices => ({
  type: 'UPDATE_DEVICES',
  devices
})