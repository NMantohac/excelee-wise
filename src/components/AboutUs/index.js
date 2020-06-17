import React from 'react';
import { Container, Row, Col, CardDeck, Card } from 'react-bootstrap';
import AboutUsImg1 from '../../images/about-us-1.png';
import AboutUsImg2 from '../../images/about-us-2.png';
import AboutUsImg3 from '../../images/about-us-3.png';
import AboutUsImg4 from '../../images/about-us-4.png';
import './style.css';

const AboutUs = () => {
  return (
    <Container className="about-us-container" fluid>
      <Row className="about-us-row-top">
        <Col>
          <CardDeck>
            <Card border="warning">
              <Card.Img variant="top" src={AboutUsImg1} />
              <Card.Body>
                <Card.Title style={{ textAlign: 'center', fontSize: '48px', fontFamily: 'Amatic SC, cursive, serif' }}>Overview</Card.Title>
                <Card.Text style={{ fontSize: '18px' }}>
                  We are people who have dedicated ourselves to helping others who are in need of living essentials. Working together, we shall provide food, housing, transportation, and care to the poor and the vulnerable in our community.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="warning">
              <Card.Img variant="top" src={AboutUsImg2} />
              <Card.Body>
                <Card.Title style={{ textAlign: 'center', fontSize: '48px', fontFamily: 'Amatic SC, cursive, serif' }}>Mission</Card.Title>
                <Card.Text style={{ fontSize: '18px' }}>
                  The mission of People Helping People in Los Angeles Inc. is to improve the quality of life of the population by providing food and housing, and emergency and other relief services to people who are in crisis or in need of help in the community.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Col>
      </Row>
      <Row className="about-us-row-bottom">
        <Col>
          <CardDeck>
            <Card border="warning">
              <Card.Img variant="top" src={AboutUsImg3} />
              <Card.Body>
                <Card.Title style={{ textAlign: 'center', fontSize: '48px', fontFamily: 'Amatic SC, cursive, serif' }}>Vision</Card.Title>
                <Card.Text style={{ fontSize: '18px' }}>
                  We enhance to commit ourselves in the spirit of helping, with the joy of togetherness and collaboration with diverse communities; in offering hope, mercy, and to bring about transformation of individuals towards a healthy and peaceful society.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="warning">
              <Card.Img variant="top" src={AboutUsImg4} />
              <Card.Body>
                <Card.Title style={{ textAlign: 'center', fontSize: '48px', fontFamily: 'Amatic SC, cursive, serif' }}>Values</Card.Title>
                <Card.Text style={{ fontSize: '18px' }}>
                  The pillar of our values that defines us is driven by compassion, dedication, and integrity.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
