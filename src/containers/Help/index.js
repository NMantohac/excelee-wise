import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhoneAlt, faFax } from '@fortawesome/free-solid-svg-icons';
import LogoImg from '../../images/navbar-brand.png';
import './style.css';

class Help extends Component {
  render() {
    return (
      <div>
        <Jumbotron className="help-jumbotron">
          <Container>
            <p className="help-jumbotron-text">Connect With Us</p>
          </Container>
        </Jumbotron>
        <Container>
          <Row>
            <Col>
              <Image src={LogoImg} height="100" width="300" fluid className="d-inline-block align-top logo" alt="Brand Logo" style={{ marginLeft: '-30px' }} />
              <ul className="help-ul">
                <li className="help-li">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="help-icon" />
                  <h1 style={{ fontSize: '24px' }}>Address</h1>
                  <p style={{ fontSize: '16px' }}>1930 Wilshire Blvd Ste 506</p>
                  <p style={{ fontSize: '16px', marginTop: '-20px' }}>Los Angeles, CA 90057</p>
                </li>
                <li className="help-li">
                  <FontAwesomeIcon icon={faEnvelope} className="help-icon" />
                  <h1 style={{ fontSize: '24px' }}>Email</h1>
                  <p style={{ fontSize: '16px' }}>info@phplosangeles.org</p>
                </li>
                <li className="help-li help-li-phone">
                  <FontAwesomeIcon icon={faPhoneAlt} className="help-icon" />
                  <h1 style={{ fontSize: '24px' }}>Phone</h1>
                  <p style={{ fontSize: '16px' }}>(833) 467-4752</p>
                </li>
                <li className="help-li help-li-fax">
                  <FontAwesomeIcon icon={faFax} className="help-icon" />
                  <h1 style={{ fontSize: '24px' }}>Fax</h1>
                  <p style={{ fontSize: '16px' }}>(818) 812-6590</p>
                </li>
              </ul>
            </Col>
            <Col>
              <h1>Hello World!</h1>
            </Col>
            <Col>
              <h1>Hello World!</h1>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Help;
