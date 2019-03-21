import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { Redirect } from 'react-router-dom'

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
              <div className="">
                <img src={this.props.device.imgSrc} height="200px"/>
              </div>
            </Col>
            <Col xs={4}>
              {/* TODO center text vertically */}
              <div className="attrContainer">
                <p><span className="attrKeyword">Thing ID: </span>{this.props.device.thingId}</p>
                <p><span className="attrKeyword">Policy ID: </span>{this.props.device.policyId}</p>
                <p><span className="attrKeyword">Device ID: </span>{this.props.device.attributes.deviceId}</p>
              </div>
            </Col>
            <Col xs={4}>
              <div className="attrContainer">
                <p><span className="attrKeyword">Created by: </span>{this.props.device.attributes.createdBy}</p>
                <p><span className="attrKeyword">Definition: </span>{this.props.device.attributes.definition}</p>
              </div>
            </Col>
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
