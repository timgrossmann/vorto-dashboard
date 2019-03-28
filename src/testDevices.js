export const TEST_DEVICES = [
    {
      imgSrc: "http://images.bosch-professional.com/ng/en/productimages/usageimg/laser-measure-glm-120-c-164587-164587.png", 
      thingId: "com.bosch.pt.glm120:62939",
      policyId: "com.bosch.pt.glm120:62939",
      attributes: {
        schema: {
          distance: "org.eclipse.vorto:Distance:1.0.0",
          area: "org.eclipse.vorto:Area:1.0.0",
          volume: "org.eclipse.vorto:Volume:1.0.0",
          angle: "org.eclipse.vorto:Angle:1.0.0",
  
        },
        createdBy: "S-1-5-21-1937855695-3964793637-879644401-644964",
        thingName: "BoschGLM120CProfessional",
        definition: [
          "com.bosch.pt:GLM120C:1.0.0"
        ],
        createdOn: "2019-03-18 01:24:49+0000",
        deviceId: "com.bosch.pt.glm120:62939"
      },
      features: {
        distance: {
          definition: [
            "org.eclipse.vorto:Distance:1.0.0"
          ],
          properties: {
            status: {
              value: {
                distance: "27.329,152cm"
              }
            }
          }
        },
        area:  {
          definition: [
            "org.eclipse.vorto:Area:1.0.0"
          ],
          properties: {
            status: {
              value: {
                width: "5.145,572cm",
                height: "7.678,237cm",
                area: "39,508m²" 
              }
            }
          }
        },
        volume:  {
          definition: [
            "org.eclipse.vorto:Volume:1.0.0"
          ],
          properties: {
            status: {
              value: {
                width: "3.175,349cm",
                height: "1.223,452cm",
                depth: "6.231,123cm",
                volume: "24207,209m³" 
              }
            }
          }
        },
        angle:  {
          definition: [
            "org.eclipse.vorto:Angle:1.0.0"
          ],
          properties: {
            status: {
              value: {
                angle: 5 
              }
            }
          }
        }
      }
    },
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