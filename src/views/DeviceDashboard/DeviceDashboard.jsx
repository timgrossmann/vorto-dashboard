import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";

import { AttributesCard } from "components/AttributesCard/AttributesCard.jsx"
import { CodeCard } from "components/CodeCard/CodeCard.jsx";
import LocationCard from "components/LocationCard/LocationCard";

const mapStateToProps = state => {
  return { device: state.selectedDevice };
};

const ConnetedDeviceDashboard = ({ device }) => {
  return (
    <div className="content">
      <Grid fluid>
        <Row>
          <Col md={12}>
            <AttributesCard
              device={device}
            />
          </Col>
        </Row>

        <Row>
          {Object.keys(device.attributes.schema)
            .map(function(featureName) {
              const featureDef = device.attributes.schema[featureName]
              const feature = device.features[featureName];

              if (featureDef.toLowerCase().includes("location")) {
                return (
                  <Col lg={4} sm={6}>
                      <LocationCard
                        device={device} />
                    </Col>)
              } else {
                return (
                  <Col lg={4} sm={6}>
                    <CodeCard
                      featureName={featureName}
                      feature={feature} />
                  </Col>)
              }
            }.bind(this))}
        </Row>
      </Grid>
    </div>
  );
}

const DeviceDashboard = connect(mapStateToProps)(ConnetedDeviceDashboard);

export default DeviceDashboard;
