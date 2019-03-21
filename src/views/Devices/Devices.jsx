import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

import { DeviceCard } from "components/DeviceCard/DeviceCard.jsx";

class Devices extends Component {
  constructor() {
    super();
    this.state = {
      devices: [],
    }
  }

  componentDidMount() {
    // TODO do the API call here

    const devices = TEST_DATA.map(device => {
      return (
        <Col lg={3} sm={6}>
          <DeviceCard
            device={device}
          />
        </Col>
      );
    })

    this.setState({ devices: devices })
  }

  render() {
    return (
      <div className="content">
        {this.state.devices.length === 0 ?
          (<p>Please make sure you have devices set up in the Thing Browser and that your credentials are correct</p>)
          : (<div />)}
        <Grid fluid>
          <Row>
            {this.state.devices}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Devices;


const TEST_DATA = [
  {
    imgSrc: "http://vorto.eclipse.org/rest/default/models/org.raspberrypi:RaspberryOnboardSensor:1.0.0/images",
    thingId: "org.eclipse.vorto.demo:0102030405",
    policyId: "org.eclipse.vorto.demo:0102030405",
    attributes: {
      schema: {
        temperature: "org.eclipse.vorto:Temperature:1.0.0"
      },
      createdBy: "S-1-5-21-1937855695-3964793637-879644401-644964",
      thingName: "MyRaspberryOnboardSensor",
      definition: [
        "org.raspberrypi:RaspberryOnboardSensor:1.0.0"
      ],
      createdOn: "2019-03-18 01:24:49+0000",
      deviceId: "org.eclipse.vorto.demo:0102030405"
    },
    features: {
      temperature: {
        definition: [
          "org.eclipse.vorto:Temperature:1.0.0"
        ],
        properties: {
          status: {
            value: {
              minMeasured: 11,
              currentMeasured: 22,
              maxMeasured: 33
            }
          }
        }
      }
    }
  },
  {
    imgSrc: "http://vorto.eclipse.org/rest/default/models/com.bosch.si.egm:Wemos32Oled:1.0.0/images",
    thingId: "org.eclipse.vorto.demo:123456789",
    policyId: "org.eclipse.vorto.demo:123456789",
    attributes: {
      schema: {
        connectivity: "org.eclipse.vorto:Connectivity:1.0.0",
        contact: "org.eclipse.vorto:BinaryState:1.0.0",
        temperature: "org.eclipse.vorto:Temperature:1.0.0",
        voltage: "org.eclipse.vorto:Voltage:1.0.0",
        oledScreen: "com.bosch.si.egm:SSD1306OledScreen:1.0.0"
      },
      createdBy: "S-1-5-21-1937855695-3964793637-879644401-644964",
      thingName: "MyWemos32Oled",
      definition: [
        "com.bosch.si.egm:Wemos32Oled:1.0.0"
      ],
      createdOn: "2019-03-25 03:50:22+0000",
      deviceId: "org.eclipse.vorto.demo:123456789"
    },
    features: {
      temperature: {
        definition: [
          "org.eclipse.vorto:Temperature:1.0.0"
        ],
        properties: {
          status: {
            value: {
              minMeasured: 0,
              currentMeasured: 0,
              maxMeasured: 0
            }
          }
        }
      },
      connectivity: {
        definition: [
          "org.eclipse.vorto:Connectivity:1.0.0"
        ],
        properties: {
          status: {
            rssi: 0,
            lastSeen: 0,
            snr: 0,
            status: {}
          }
        }
      },
      contact: {
        definition: [
          "org.eclipse.vorto:BinaryState:1.0.0"
        ],
        properties: {
          status: {
            lastChange: "2019-03-25 03:50:22+0000",
            isTrue: false
          }
        }
      },
      oledScreen: {
        definition: [
          "com.bosch.si.egm:SSD1306OledScreen:1.0.0"
        ],
        properties: {
          configuration: {
            screenWidth: 0,
            screenHeight: 0
          }
        }
      },
      voltage: {
        definition: [
          "org.eclipse.vorto:Voltage:1.0.0"
        ],
        properties: {
          status: {
            value: {
              minMeasured: 0,
              currentMeasured: 0,
              maxMeasured: 0
            }
          }
        }
      }
    }
  },
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
            "altitude": 0
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