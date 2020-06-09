import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './style.css';

const Home = () => {
  return (
    <Jumbotron fluid className="background">
      <Container className="jumbotron-text">
        <h1 className="title">Because We Care</h1>
      </Container>
    </Jumbotron>
  );
};

export default Home;
