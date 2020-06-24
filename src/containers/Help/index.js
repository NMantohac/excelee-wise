import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhoneAlt, faFax } from '@fortawesome/free-solid-svg-icons';
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
            <Col xs={12} sm={12} md={3} lg={3} xl={3}>
              <ul className="help-ul">
                <li className="help-li help-address">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="help-icon" />
                  <h1 style={{ fontSize: '24px' }}>Address</h1>
                  <p style={{ fontSize: '16px' }}>1930 Wilshire Blvd Ste 506 </p>
                  <p style={{ marginTop: '-20px', fontSize: '16px' }}>Los Angeles, CA 90057</p>
                </li>
                <li className="help-li help-email">
                  <FontAwesomeIcon icon={faEnvelope} className="help-icon" />
                  <h1 style={{ fontSize: '24px' }}>Email</h1>
                  <p style={{ fontSize: '16px' }}>info@phplosangeles.org</p>
                </li>
                <li className="help-li help-phone">
                  <FontAwesomeIcon icon={faPhoneAlt} className="help-icon" />
                  <h1 style={{ fontSize: '24px' }}>Phone</h1>
                  <p style={{ fontSize: '16px' }}>(833) 467-4752</p>
                </li>
                <li className="help-li help-fax">
                  <FontAwesomeIcon icon={faFax} className="help-icon" />
                  <h1 style={{ fontSize: '24px' }}>Fax</h1>
                  <p style={{ fontSize: '16px' }}>(818) 812-6590</p>
                </li>
              </ul>
            </Col>
            <Col xs={12} sm={12} md={9} lg={9} xl={9}>
              <Form style={{ marginBottom: '30px' }}>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="number" />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control as="select" custom>
                      <option selected disabled>Select Subject</option>
                      <option>PHPLA Programs & Services</option>
                      <option>Donations</option>
                      <option>Volunteering</option>
                      <option>Need Assistance</option>
                      <option>Other</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows="5" />
                  </Form.Group>
                </Form.Row>

                <div style={{ textAlign: 'center' }}>
                  <Button variant="light" type="submit" className="help-button">
                    Send Message
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Help;
