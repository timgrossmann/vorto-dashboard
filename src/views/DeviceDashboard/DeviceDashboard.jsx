import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";

import { AttributesCard } from "components/AttributesCard/AttributesCard.jsx"
import { CodeCard } from "components/CodeCard/CodeCard.jsx";
import { DistanceCard } from "components/DistanceCard/DistanceCard";

import AreaCard from "components/AreaCard/AreaCard";
import VolumeCard from "components/VolumeCard/VolumeCard";
import LocationCard from "components/LocationCard/LocationCard";


class DeviceDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      device: props.location.state.device,
    }
  }

  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <AttributesCard
                device={this.state.device}
              />
            </Col>
          </Row>

          <Row>
            {Object.keys(this.state.device.attributes.schema)
              .map(function(featureName) {
                const feature = this.state.device.features[featureName];

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
                         device={this.state.device} />
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
}

export default DeviceDashboard;
