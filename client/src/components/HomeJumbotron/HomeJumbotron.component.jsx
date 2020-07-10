import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './HomeJumbotron.styles.css';

const HomeJumbotron = () => {
  return (
    <div>
      <Jumbotron className="jumbotron-background">
        <Container>
          <p className="jumbotron-text">Assisting the Homeless</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default HomeJumbotron;
