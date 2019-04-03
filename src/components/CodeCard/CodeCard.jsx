import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

import SyntaxHighlighter from 'react-syntax-highlighter';
import { anOldHope } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export class CodeCard extends Component {
  render() {
    const jsonText = JSON.stringify(this.props.feature, null, 2)
    
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
            <Col xs={12}>
              <div className="">
                <SyntaxHighlighter language='json' style={anOldHope}>
                  {jsonText}
                </SyntaxHighlighter>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default CodeCard;
