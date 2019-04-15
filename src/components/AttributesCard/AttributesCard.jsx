import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

import { getRepositoryLink } from '../../util';

export class AttributesCard extends Component {
  render() {
    return (
      <div className="card card-stats">
        <div className="content">
          <Grid fluid>
            <Row>
              <Col xs={12}>
                <h3>{this.props.device.attributes.thingName}</h3>
              </Col>
            </Row>
            <Row>
              <Col lg={4} sm={8} xs={12}>
                <div className="attrImgContainer">
                  <img src={this.props.device.imgSrc} className="attrImg" alt="IoT device" />
                </div>
              </Col>
              <Col lg={4} sm={8} xs={12}>
                <div className="attrContainer">
                  <p className="attribute"><span className="attrKeyword">Thing ID: </span>{this.props.device.thingId}</p>
                  <p className="attribute"><span className="attrKeyword">Policy ID: </span>{this.props.device.policyId}</p>
                  <p className="attribute"><span className="attrKeyword">Device ID: </span>{this.props.device.attributes.deviceId}</p>
                </div>
              </Col>
              <Col lg={4} sm={8} xs={12}>
                {/*TODO fix css on resize*/}
                <div className="attrContainer">
                  <p className="attribute"><span className="attrKeyword">Created by: </span>{this.props.device.attributes.createdBy}</p>
                  <p className="attribute">
                    <span className="attrKeyword">Definition: </span>
                    <a target="_blank" href={getRepositoryLink(this.props.device.attributes.definition)}>
                      {this.props.device.attributes.definition}
                    </a>
                  </p>
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
          </Grid>
        </div>
      </div>
    );
  }
}

export default AttributesCard;
