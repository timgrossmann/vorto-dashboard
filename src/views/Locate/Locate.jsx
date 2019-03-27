import React, { Component } from "react";

import OSMap from "../../components/OSMap/OSMap";

class Maps extends Component {
  constructor() {
    super();
    this.state = {
      devices: []
    }
  }

  componentWillMount() {
    // TODO do the API call here to get location devices

    const devices = TEST_DEVICES
    this.setState({ devices: devices })
  }

  render() {
    return (
      <div className="fillHW">
        <OSMap devices={this.state.devices} displayTooltip={true}/>
      </div>
    );
  }
}

export default Maps;

const TEST_DEVICES = [
  {
    imgSrc: "http://vorto.eclipse.org/rest/default/models/com.bosch.ps:Traci:1.0.0/images",
    thingId: "org.eclipse.vorto.demo:754623",
    policyId: "org.eclipse.vorto.demo:754623",
    "attributes": {
      "schema": {
        "acceleration": "org.eclipse.vorto:Acceleration:1.0.0",
        "magneticStrength": "org.eclipse.vorto:MagneticStrength:1.0.0",
        "bluetoothConnectivity": "org.eclipse.vorto:Connectivity:1.0.0",
        "lorawanConnectivity": "org.eclipse.vorto:Connectivity:1.0.0",
        "temperature": "org.eclipse.vorto:Temperature:1.0.0",
        "location": "org.eclipse.vorto:Geolocation:1.0.0",
        "battery": "org.eclipse.vorto:Battery:1.0.0"
      },
      "createdBy": "S-1-5-21-1937855695-3964793637-879644401-644964",
      "thingName": "MyTraci",
      "definition": [
        "com.bosch.ps:Traci:1.0.0"
      ],
      "createdOn": "2019-03-25 07:35:38+0000",
      "deviceId": "org.eclipse.vorto.demo:754623"
    },
    "features": {
      "magneticStrength": {
        "definition": [
          "org.eclipse.vorto:MagneticStrength:1.0.0"
        ],
        "properties": {
          "status": {
            "value": {
              "x": 0,
              "y": 0,
              "z": 0
            }
          }
        }
      },
      "bluetoothConnectivity": {
        "definition": [
          "org.eclipse.vorto:Connectivity:1.0.0"
        ],
        "properties": {
          "status": {
            "rssi": 0,
            "lastSeen": 0,
            "snr": 0,
            "status": {}
          }
        }
      },
      "acceleration": {
        "definition": [
          "org.eclipse.vorto:Acceleration:1.0.0"
        ],
        "properties": {
          "status": {
            "value": {
              "x": 0,
              "y": 0,
              "z": 0
            }
          }
        }
      },
      "lorawanConnectivity": {
        "definition": [
          "org.eclipse.vorto:Connectivity:1.0.0"
        ],
        "properties": {
          "status": {
            "rssi": 0,
            "lastSeen": 0,
            "snr": 0,
            "status": {}
          }
        }
      },
      "temperature": {
        "definition": [
          "org.eclipse.vorto:Temperature:1.0.0"
        ],
        "properties": {
          "status": {
            "value": {
              "minMeasured": 0,
              "currentMeasured": 0,
              "maxMeasured": 0
            }
          }
        }
      },
      "location": {
        "definition": [
          "org.eclipse.vorto:Geolocation:1.0.0"
        ],
        "properties": {
          "status": {
            "altitude": 0,
            latitude: 51.505,
            longitude: -0.09
          }
        }
      },
      "battery": {
        "definition": [
          "org.eclipse.vorto:Battery:1.0.0"
        ],
        "properties": {
          "configuration": {
            "remainingCapacityAmpHour": 0
          },
          "status": {
            "remainingCapacity": {
              "value": 0
            }
          }
        }
      }
    }
  }
]