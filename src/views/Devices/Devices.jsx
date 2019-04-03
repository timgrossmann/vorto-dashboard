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
  const deviceCols = devices.map(device => {
    return (
      <Col lg={3} sm={6}>
        <DeviceCard
          device={device}
          setSelectedDevice={(device) => selectDevice(device)}
        />
      </Col>
    );
  })

  const thingsNote = devices.length === 0 ?
  (<p>Please make sure you have devices set up in the Thing Browser and that your credentials are correct</p>)
  : (<div />)

  return (
    <div className="content">
      {thingsNote}
      <Grid fluid>
        <Row>
          {deviceCols}
        </Row>
      </Grid>
    </div>
  );
}

const Devices = connect(mapStateToProps, mapDispatchToProps)(ConnectedDevices);

export default Devices;