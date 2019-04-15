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

    this.props.setSelectedDevice(this.props.device)
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/devicedashboard' />
    }
  }

  render() {
    const device = this.props.device
    /* const icons = Object.keys(device.features).map(feature => (<span className="fa fa-cloud" />)) */

    return (
      <div className="card card-stats">
        <button className="deviceContainer" onClick={this.setRedirect}>
          {this.renderRedirect()}
          <div className="content">
            <Row>
              <Col xs={12}>
                <div className="imgContainer">
                  <img className="deviceImg" alt={device.attributes.definition[0]} src={device.imgSrc} />
                </div>
              </Col>
            </Row>

            {/* TODO add icons that indicate features, connectivity, battery, and location etc.
            <Row>
              <Col xs={12}>
                <div className="iconContainer">
                  {icons}
                </div>
              </Col>
            </Row> 
            */}

            <Row className="deviceFooter">
              <div className="footerContainer">
                <hr />
                <Col xs={12}>
                  <div>
                    <p className="text-center">{device.attributes.thingName}</p>
                  </div>
                </Col>
              </div>
            </Row>
          </div>
        </button>
      </div>
    );
  }
}

export default DeviceCard;
