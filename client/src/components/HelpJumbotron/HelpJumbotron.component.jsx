import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './HelpJumbotron.styles.css';

const HelpJumbotron = () => {
  return (
    <div>
      <Jumbotron className="help-jumbotron">
        <Container>
          <p className="help-jumbotron-text">Connect With Us</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default HelpJumbotron;
