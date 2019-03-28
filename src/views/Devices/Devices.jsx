import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";

import { DeviceCard } from "components/DeviceCard/DeviceCard.jsx";

const mapStateToProps = state => {
  return { devices: state.devices };
};

const ConnectedDevices = ({ devices }) => {
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
                />
              </Col>
            );
          })}
        </Row>
      </Grid>
    </div>
  );
}

const Devices = connect(mapStateToProps)(ConnectedDevices);

export default Devices;