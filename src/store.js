import { createStore } from "redux";

import Reducers from "./reducers"
import { TEST_DEVICES } from "./testDevices"

export const INITAL_STATE = {
    selectedDevice: "",
    devices: TEST_DEVICES,
    lastUpdated: "",  
};

export const store = createStore(Reducers, INITAL_STATE);