import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

export class AreaCard extends Component {
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
            <Col xs={1} className="verticalText text-center">
              {this.props.feature.properties.status.value.height}
            </Col>
            <Col xs={11}>
              <div className="areaChartContainer">
                <div className="innerAreaChart icon-big text-center">
                  {this.props.feature.properties.status.value.area}
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div className="text-center">
                {this.props.feature.properties.status.value.width}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default AreaCard;
