import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import './style.css';

const TermsAndConditions = () => {
  return (
    <div>
      <Jumbotron className="terms-jumbotron">
          <Container>
            <p className="terms-jumbotron-text">Terms and Conditions</p>
          </Container>
        </Jumbotron>
      <Container>
        <Row>
          <Col>
            <p style={{ textAlign: 'center' }}>This is the terms and conditions page!</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TermsAndConditions;
