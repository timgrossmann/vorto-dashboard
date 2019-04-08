import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import OSMap from "../OSMap/OSMap";

export class LocationCard extends Component {
  render() {
    return (
      <div className="card card-stats attrCard">
        <div className="content">
          <Row>
            <Col xs={12}>
              <div className="text-center">
                <h4>{this.props.device.attributes.thingName}</h4>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="mapCard">
              <OSMap devices={[this.props.device]} displayTooltip={false} />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default LocationCard;
