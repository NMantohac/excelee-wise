import React from 'react';
import { Container, Row, Col, CardDeck, Card } from 'react-bootstrap';
import ModalImage from 'react-modal-image';
import AboutUsImg1 from '../../images/about-us-1.png';
import AboutUsImg1Full from '../../images/about-us-1-full.png';
import AboutUsImg2 from '../../images/about-us-2.png';
import AboutUsImg2Full from '../../images/about-us-2-full.png';
import AboutUsImg3 from '../../images/about-us-3.png';
import AboutUsImg3Full from '../../images/about-us-3-full.png';
import AboutUsImg4 from '../../images/about-us-4.png';
import AboutUsImg4Full from '../../images/about-us-4-full.png';
import './style.css';

const AboutUs = () => {
  return (
    <Container fluid style={{ marginTop: '50px', marginBottom: '50px' }}>
      <Row style={{ marginTop: '30px' }}>
        <Col>
          <CardDeck>
            <Card border="warning">
              <ModalImage small={AboutUsImg1} large={AboutUsImg1Full} showRotate="true" variant="top" />
              <Card.Body style={{ textAlign: 'center' }}>
                <Card.Title className="about-us-card-title">Overview</Card.Title>
                <Card.Text style={{ textAlign: 'justify', textJustify: 'inter-character', fontSize: '18px' }}>
                  We are people who have dedicated ourselves to helping others who are in need of living essentials. Working together, we shall provide food, housing, transportation, and care to the poor and the vulnerable in our community.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="warning">
              <ModalImage small={AboutUsImg2} large={AboutUsImg2Full} showRotate="true" variant="top" />
              <Card.Body style={{ textAlign: 'center' }}>
                <Card.Title className="about-us-card-title">Mission</Card.Title>
                <Card.Text style={{ textAlign: 'justify', textJustify: 'inter-character', fontSize: '18px' }}>
                  The mission of People Helping People In Los Angeles Inc. is to improve the quality of life of the population by providing food and housing, and emergency and other relief services to people who are in crisis or in need of help in the community.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Col>
      </Row>
      <Row style={{ marginTop: '30px' }}>
        <Col>
          <CardDeck>
            <Card border="warning">
              <ModalImage small={AboutUsImg3} large={AboutUsImg3Full} showRotate="true" variant="top" />
              <Card.Body style={{ textAlign: 'center' }}>
                <Card.Title className="about-us-card-title">Vision</Card.Title>
                <Card.Text style={{ textAlign: 'justify', textJustify: 'inter-character', fontSize: '18px' }}>
                  We enhance to commit ourselves in the spirit of helping, with the joy of togetherness and collaboration with diverse communities; in offering hope, mercy, and to bring about transformation of individuals towards a healthy and peaceful society.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="warning">
              <ModalImage small={AboutUsImg4} large={AboutUsImg4Full} showRotate="true" variant="top" />
              <Card.Body style={{ textAlign: 'center' }}>
                <Card.Title className="about-us-card-title">Values</Card.Title>
                <Card.Text style={{ textAlign: 'justify', textJustify: 'inter-character', fontSize: '18px' }}>
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
