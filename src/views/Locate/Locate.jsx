import React, { Component } from "react";
import { connect } from "react-redux";

import OSMap from "../../components/OSMap/OSMap";

const mapStateToProps = state => {
  return { devices: state.devices };
};

const ConnectedMaps = ({ devices }) => {
  return (
    <div className="fillHW">
      <OSMap devices={devices} displayTooltip={true}/>
    </div>
  );
}

const Maps = connect(mapStateToProps)(ConnectedMaps)

export default Maps;