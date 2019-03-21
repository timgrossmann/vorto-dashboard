import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { Redirect } from 'react-router-dom'

export class DeviceCard extends Component {
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
    return (
      <div className="card card-stats">
        <button className="deviceContainer" onClick={this.setRedirect}>
        {this.renderRedirect()}
        <div className="content">
          <Row>
            <Col xs={12}>
              <div className="icon-big text-center icon-warning">
                <img src={this.props.device.imgSrc} width="100%"/>
              </div>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col xs={12}>
              <div className="numbers">
                <p className="text-center">{this.props.device.attributes.thingName}</p>
              </div>
            </Col>
          </Row>
        </div>
        </button>
      </div>
    );
  }
}

export default DeviceCard;
