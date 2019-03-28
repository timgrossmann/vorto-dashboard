import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";

import { AttributesCard } from "components/AttributesCard/AttributesCard.jsx"
import { CodeCard } from "components/CodeCard/CodeCard.jsx";
import { DistanceCard } from "components/DistanceCard/DistanceCard";

import AreaCard from "components/AreaCard/AreaCard";
import VolumeCard from "components/VolumeCard/VolumeCard";
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
              const feature = device.features[featureName];

              console.log(feature)

              if (featureName === 'distance') {
                return (
                  <Col lg={4} sm={6}>
                    <DistanceCard
                      featureName={featureName}
                      feature={feature} />
                  </Col>)
              } else if (featureName === "location" ) {
                return (
                  <Col lg={4} sm={6}>
                      <LocationCard
                        device={device} />
                    </Col>)
              } else if (featureName === 'area') {
                return (
                  <Col lg={4} sm={6}>
                    <AreaCard
                      featureName={featureName}
                      feature={feature} />
                  </Col>)
              } else if (featureName === 'volume') {
                return (
                  <Col lg={4} sm={6}>
                    <VolumeCard
                      featureName={featureName}
                      feature={feature} />
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
