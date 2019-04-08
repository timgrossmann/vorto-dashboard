import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

export class AttributesCard extends Component {
  render() {
    return (
      <div className="card card-stats">
        <div className="content">
          <div>
            <h3>{this.props.device.attributes.thingName}</h3>
          </div>
          <Row>
            <Col xs={4}>
              <div className="attrImgContainer">
                <img src={this.props.device.imgSrc} className="attrImg" alt="IoT device" />
              </div>
            </Col>
            <div className="attrContainerWrappr">
              <Col xs={4}>
                <div className="attrContainer">
                  <p><span className="attrKeyword">Thing ID: </span>{this.props.device.thingId}</p>
                  <p><span className="attrKeyword">Policy ID: </span>{this.props.device.policyId}</p>
                  <p><span className="attrKeyword">Device ID: </span>{this.props.device.attributes.deviceId}</p>
                </div>
              </Col>
              <Col xs={4}>
                {/*TODO fix css on resize*/}
                <div className="attrContainer">
                  <p><span className="attrKeyword">Created by: </span>{this.props.device.attributes.createdBy}</p>
                  <p><span className="attrKeyword">Definition: </span>{this.props.device.attributes.definition}</p>
                </div>
              </Col>
            </div>
          </Row>
          <hr />
          <Row>
            <Col xs={12}>
              <div className="">
                <p><span className="attrKeyword">Created on: </span>{this.props.device.attributes.createdOn}</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default AttributesCard;
