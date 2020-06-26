import React, { Component } from 'react';
import axios from 'axios';
import { Jumbotron, Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import HelpMessageSuccess from '../../components/HelpMessageSuccess';
import HelpMessageFailure from '../../components/HelpMessageFailure';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhoneAlt, faFax } from '@fortawesome/free-solid-svg-icons';
import './style.css';

class Help extends Component {
  state = {
    formFirstName: '',
    formLastName: '',
    formEmail: '',
    formPhone: '',
    // eslint-disable-next-line react/no-unused-state
    formSubject: '',
    formMessage: '',
    isMsgSuccess: false,
    isMsgFailure: false,
  }

  loading = false;

  componentDidUpdate() {
    if (this.state.isMsgSuccess === true || this.state.isMsgFailure === true) {
      setTimeout(() => this.setState({ isMsgSuccess: false, isMsgFailure: false }), 10000);
    } 
  }

  handleFirstNameChange = (event) => {
    this.setState({ formFirstName: event.target.value });
  }

  handleLastNameChange = (event) => {
    this.setState({ formLastName: event.target.value });
  }

  handleEmailChange = (event) => {
    this.setState({ formEmail: event.target.value });
  }

  handlePhoneChange = (event) => {
    this.setState({ formPhone: event.target.value });
  }

  handleSubjectChange = (event) => {
    // eslint-disable-next-line react/no-unused-state
    this.setState({ formSubject: event.target.value });
  }

  handleMessageChange = (event) => {
    this.setState({ formMessage: event.target.value });
  }

  handleSubmit = async (event) => {
    try {
      event.preventDefault();

      this.setState({ isMsgSuccess: false, isMsgFailure: false });

      this.loading = true;
      
      const { formFirstName, formLastName, formEmail, formPhone, formSubject, formMessage } = this.state;

      const data = {
        formFirstName,
        formLastName,
        formEmail,
        formPhone,
        formSubject,
        formMessage
      }

      await axios.post('/email', data);

      console.log('Message sent to the server!');

      this.loading = false;
      this.setState({ formFirstName: '', formLastName: '', formEmail: '', formPhone: '', formSubject: '', formMessage: '', isMsgSuccess: true });
    } catch (e) {
      this.setState({ isMsgFailure: true });
      if (e) throw e;
    }
  }

  messageSuccess = () => {
    if (this.state.isMsgSuccess) {
      return <HelpMessageSuccess />
    } else {
      return null;
    }
  }

  messageFailure = () => {
    if (this.state.isMsgFailure) {
      return <HelpMessageFailure />
    } else {
      return null;
    }
  }

  render() {
    const { formFirstName, formLastName, formEmail, formPhone, formMessage, isMsgSuccess, isMsgFailure } = this.state;
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
                  <Form.Group as={Col}>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" value={formFirstName} onChange={this.handleFirstNameChange} />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" value={formLastName} onChange={this.handleLastNameChange} />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={formEmail} onChange={this.handleEmailChange} />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="number" value={formPhone} onChange={this.handlePhoneChange} />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control as="select" custom onChange={this.handleSubjectChange}>
                      <option selected disabled>Select Subject</option>
                      <option value="PHPLA Programs & Services">PHPLA Programs & Services</option>
                      <option value="Donations">Donations</option>
                      <option value="Volunteering">Volunteering</option>
                      <option value="Need Assistance">Need Assistance</option>
                      <option value="Other">Other</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows="10" type="text" value={formMessage} onChange={this.handleMessageChange} />
                  </Form.Group>
                </Form.Row>

                <div style={{ textAlign: 'center' }}>
                  <Button variant="light" type="submit" onClick={(event) => this.handleSubmit(event)} disabled={this.loading} className="help-button">
                    { this.loading ? <Spinner
                                        as="span"
                                        animation="border"
                                        variant="warning"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                      />
                    : <span>Send Message</span>}
                  </Button>
                </div>
              </Form>
              { isMsgSuccess ? this.messageSuccess() : null }
              { isMsgFailure ? this.messageFailure() : null }
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Help;
