import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { Redirect } from 'react-router-dom'

export class DeviceTooltip extends Component {
  state = {
    redirect: false
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={{
        pathname: '/devicedashboard',
        state: { device: this.props.device }
      }} />
    }
  }
  
  render() {
    const locationFeature = this.props.device.features.location
    const latitude = locationFeature.properties.status.latitude
    const longitude = locationFeature.properties.status.longitude

    return (
      <div className="content">
        <div>
            <h4><a href="#" onClick={this.renderRedirect}>{this.props.device.attributes.thingName}</a></h4>
        </div>
        <Row>
          <Col xs={12}>
            <div className="text-center center-text">
              <img alt="img of the device" src={this.props.device.imgSrc} height="100px"/>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div className="">
              <p><span className="attrKeyword">Thing ID: </span>{this.props.device.thingId}</p>
              <p><span className="attrKeyword">Location: </span>{latitude}lat, {longitude}lon</p>
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
    );
  }
}

export default DeviceTooltip;
