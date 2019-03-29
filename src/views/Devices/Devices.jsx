import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";

import { DeviceCard } from "components/DeviceCard/DeviceCard.jsx";
import Actions from "../../actions"

const mapStateToProps = state => {
  return { 
    devices: state.devices.devices,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    selectDevice: device => dispatch(Actions.selectDevice(device))
  };
}

const ConnectedDevices = ({ devices, selectDevice }) => {
  return (
    <div className="content">
      {devices.length === 0 ?
        (<p>Please make sure you have devices set up in the Thing Browser and that your credentials are correct</p>)
        : (<div />)}
      <Grid fluid>
        <Row>
          {devices.map(device => {
            return (
              <Col lg={3} sm={6}>
                <DeviceCard
                  device={device}
                  setSelectedDevice={(device) => selectDevice(device)}
                />
              </Col>
            );
          })}
        </Row>
      </Grid>
    </div>
  );
}

const Devices = connect(mapStateToProps, mapDispatchToProps)(ConnectedDevices);

export default Devices;