import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

export class DistanceCard extends Component {
  render() {
    return (
      <div className="card card-stats attrCard">
        <div className="content">
          <Row>
            <Col xs={12}>
              <div className="text-center">
                <h4>{this.props.featureName}</h4>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div className="barChartContainer">
                <div className="innerBarChart" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div className="icon-big text-center">
                {this.props.feature.properties.status.value.distance}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default DistanceCard;
