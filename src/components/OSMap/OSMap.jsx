import React, { Component } from "react";
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { Redirect } from 'react-router-dom'

import DeviceTooltip from "components/DeviceTooltip/DeviceTooltip"

class OSMap extends Component {
    state = {
        redirect: false
    }

    setRedirect = (device) => {
        this.setState({
            redirect: true,
        })

        this.props.setSelectedDevice(device)
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/devicedashboard' />
        }
    }
  
    render() {
        const devices = this.props.devices;
        
        const deviceLocStatus = devices[0].features.location.properties.status
        const position = [deviceLocStatus.latitude, deviceLocStatus.longitude]

        const mappedDevices = devices.map(device => {
            const deviceLocStatus = device.features.location.properties.status
            const position = [deviceLocStatus.latitude, deviceLocStatus.longitude]

            const popUp = this.props.displayTooltip ? 
                (<Popup>
                    <DeviceTooltip 
                        device={device} 
                        redirect={() => this.setRedirect(device)}
                    />
                </Popup>) 
                : <div />;

            return (
                <Marker position={position}>
                    {popUp} 
                </Marker>
            )
        });

        return (
            <Map className="mapWrapper" center={position} zoom={12}>
                <TileLayer
                    url="http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
                />
                {/* TODO fix css for height */}
                {mappedDevices}
            </Map>
        );
    }
}

export default OSMap;