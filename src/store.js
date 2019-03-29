import { createStore } from "redux";

import Reducers from "./reducers"
import { TEST_DEVICES } from "./testDevices"
import Actions from "./actions"

export const store = createStore(Reducers);

store.dispatch(Actions.selectDevice({}))
store.dispatch(Actions.updateDevices(TEST_DEVICES))

/*
{
    selectedDevice: {
        ...
    },
    devices: {
        lastUpdated: "...",
        devices: [...]
    }
}
*/