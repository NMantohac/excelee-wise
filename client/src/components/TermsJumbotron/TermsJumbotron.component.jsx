import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './TermsJumbotron.styles.css';

const TermsJumbotron = () => {
  return (
    <div>
      <Jumbotron className="terms-jumbotron">
        <Container>
          <p className="terms-jumbotron-text">Terms and Conditions</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default TermsJumbotron;
