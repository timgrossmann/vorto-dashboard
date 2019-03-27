import React, { Component } from "react";
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

import DeviceTooltip from "components/DeviceTooltip/DeviceTooltip"

class OSMap extends Component {
    render() {
        const devices = this.props.devices;

        const deviceLocStatus = devices[0].features.location.properties.status
        const position = [deviceLocStatus.latitude, deviceLocStatus.longitude]

        return (
            <Map className="mapWrapper" center={position} zoom={12}>
                <TileLayer
                    url="http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
                />
                {/* TODO fix css for height */}

                {devices.map(device => {
                    const deviceLocStatus = device.features.location.properties.status
                    const position = [deviceLocStatus.latitude, deviceLocStatus.longitude]

                    const popUp = this.props.displayTooltip ? 
                        (<Popup>
                            <DeviceTooltip device={device}/>
                        </Popup>) 
                        : <div />;

                    return (
                        <Marker position={position}>
                            {popUp} 
                        </Marker>
                    )
                })}
            </Map>
        );
    }
}

export default OSMap;