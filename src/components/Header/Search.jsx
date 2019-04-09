import React from "react";
import { FormControl } from "react-bootstrap";
import { connect } from "react-redux";

import Actions from "../../actions"

const mapStateToProps = (state, props) => {
    return {
        devices: state.devices.devices,
        props: props
    };
};

function mapDispatchToProps(dispatch) {
    return {
        updateDevices: devices => dispatch(Actions.updateDevices(devices))
    };
}

function handleSearch(evt, devices, updateDevices) {
    // TODO filter through devices and check for search query
    const searchQuery = evt.target.value;
    if (!searchQuery) {
        // TODO set devices to all devices
        return
    }

    const filteredDevices = devices.filter(device => {
        return true
    })

    // updateDevices(filteredDevices)
}

const ConnectedSearch = ({ props, devices, updateDevices }) => {
    const searchBar = props.brand !== "Device Dashboard" ?
        <FormControl type="text" placeholder="Search..." className="searchBox" onChange={(evt) => handleSearch(evt, devices, updateDevices)} />
        : <div />;

    return searchBar;
}

const Search = connect(mapStateToProps, mapDispatchToProps)(ConnectedSearch)

export default Search;