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
    return (
      <div className="card card-stats">
        <button className="deviceContainer" onClick={this.setRedirect}>
        {this.renderRedirect()}
        <div className="content">
          <Row>
            <Col xs={12}>
              {/*TODO fix css*/}
              <div className="text-center">
                <img className="deviceImg" src={this.props.device.imgSrc}/>
              </div>
            </Col>
          </Row>

          <Row>
            <hr />
            <Col xs={12}>
              <div>
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
