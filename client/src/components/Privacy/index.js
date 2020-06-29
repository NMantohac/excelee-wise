import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import './style.css';

const Privacy = () => {
  return (
    <div>
      <Jumbotron className="privacy-jumbotron">
          <Container>
            <p className="privacy-jumbotron-text">Private Policy</p>
          </Container>
        </Jumbotron>
      <Container>
        <Row>
          <Col>
            <p style={{ textAlign: 'center' }}>This is the private policy page!</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Privacy;
