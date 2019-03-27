import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

export class VolumeCard extends Component {
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
            <Col xs={12} className="text-center">
              {this.props.feature.properties.status.value.depth}
            </Col>
          </Row>
          <Row>
            <Col xs={1} className="verticalTextVolume text-center">
              {this.props.feature.properties.status.value.height}
            </Col>
            <Col xs={8} xsOffset={2}>
              <div className="volumeChartContainer">
                <span className="text-center float">{this.props.feature.properties.status.value.volume}</span>
                <div className="innerVolumeChartLeft text-center" />
                <div className="innerVolumeChartRight text-center" />
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

export default VolumeCard;
