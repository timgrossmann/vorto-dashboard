import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { AttributesCard } from "components/AttributesCard/AttributesCard.jsx"
import { CodeCard } from "components/CodeCard/CodeCard.jsx";
import {
  dataPie,
  legendPie,
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales,
  dataBar,
  optionsBar,
  responsiveBar,
  legendBar
} from "variables/Variables.jsx";

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
                const features = this.state.device.features[featureName];

                return (
                  <Col lg={4} sm={6}>
                    <CodeCard
                      featureName={featureName}
                      features={features} />
                  </Col>)
              }.bind(this))}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default DeviceDashboard;
