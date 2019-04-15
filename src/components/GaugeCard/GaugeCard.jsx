import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

import { getRepositoryLink } from '../../util';

export class GaugeCard extends Component {
  render() {
    // TODO adjust retrieval of attributes to be smarter 
    // (Get the definition of the function blocks and find attribute values)
    const values = this.props.feature.properties;
    const currVal = values.status.value.currentMeasured || 50;
    const minVal = values.status.value.minMeasuired || 0;
    const maxVal = values.status.value.maxMeasuired || currVal;

    const currDeg = ((currVal - minVal) * 180) / (maxVal - minVal)

    return (
      <div className="card card-stats attrCard">
        <div className="content">
          <Row>
            <Col xs={12}>
              <div className="text-center">
                <h4>
                  <a href={getRepositoryLink(this.props.feature.definition[0])} target="_blank" >{this.props.featureName}</a>
                </h4>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div className="innerCardContainer">
                <div className="gauge">
                  <div className="gauge-background">
                    <div className="gauge-percentage" style={{ transform: `rotate(${currDeg}deg)` }}></div>
                    <div className="gauge-mask"></div>
                    <span className="gauge-value">{currVal}</span>
                  </div>
                  <span className="gauge-min">{minVal}</span>
                  <span className="gauge-max">{maxVal}</span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default GaugeCard;
