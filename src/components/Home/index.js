import React from 'react';
import { Jumbotron, Image, Container, Row, Col } from 'react-bootstrap';
import LogoImg from '../../images/Navbar-Brand1.png';
import bg1 from '../../images/bg-1.png';
import bg2 from '../../images/bg-2.png';
import bg3 from '../../images/bg-3.png';
import bg4 from '../../images/bg-4.png';
import bg5 from '../../images/bg-5.png';
import bg6 from '../../images/bg-6.png';
import './style.css';

const Home = () => {
  return (
    <div>
      <Jumbotron fluid className="jumbotron-background">
        <Container>
          <Image src={LogoImg} height="80" width="230" fluid className="d-inline-block align-top logo jumbotron-image" alt="Brand Logo" />
          <p className="jumbotron-text">Assisting the Homeless</p>
        </Container>
      </Jumbotron>
      <hr />
      <Container style={{ fontFamily: 'Amatic SC, serif', textAlign: 'center' }}>
        <Row style={{ marginBottom: '30px' }}>
          <Col>
            <Image src={bg1} height="300" width="500" alt="Raging Waterfall" />
          </Col>
          <Col>
            <p style={{ fontSize: '72px', marginTop: '35px' }}>When troubles crossed</p>
            <p style={{ fontSize: '72px' }}>path on you</p>
          </Col>
        </Row>
        <Row style={{ marginBottom: '30px' }}>
          <Col>
            <p style={{ fontSize: '72px', marginTop: '35px' }}>Hope is never</p>
            <p style={{ fontSize: '72px' }}>forgotten</p>
          </Col>
          <Col>
            <Image src={bg2} height="300" width="500" alt="Forest With Light" />
          </Col>
        </Row>
        <Row style={{ marginBottom: '30px' }}>
          <Col>
            <Image src={bg3} height="300" width="500" alt="Recovering Woman" />
          </Col>
          <Col>
            <p style={{ fontSize: '72px', marginTop: '35px' }}>PHPLA the acronym</p>
            <p style={{ fontSize: '72px' }}>of help</p>
          </Col>
        </Row>
        <Row style={{ marginBottom: '30px' }}>
          <Col>
            <p style={{ fontSize: '72px', marginTop: '35px' }}>Recovery</p>
            <p style={{ fontSize: '72px' }}>is coming</p>
          </Col>
          <Col>
            <Image src={bg4} height="300" width="500" alt="Heart Shape with Sun" />
          </Col>
        </Row>
        <Row style={{ marginBottom: '30px' }}>
          <Col>
            <Image src={bg5} height="300" width="500" alt="Woman with Sunset" />
          </Col>
          <Col>
            <p style={{ fontSize: '72px', marginTop: '35px' }}>An afterhought</p>
            <p style={{ fontSize: '72px' }}>of joy</p>
          </Col>
        </Row>
        <Row style={{ marginBottom: '30px' }}>
          <Col>
            <p style={{ fontSize: '72px', marginTop: '100px' }}>Because we care</p>
            {/* <p style={{ fontSize: '72px' }}>we care</p> */}
          </Col>
          <Col>
            <Image src={bg6} height="300" width="500" alt="Cute Child" />
          </Col>
        </Row>
      </Container>

      {/* <Carousel fade interval="6000" touch>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bg1}
            height="500"
            alt="First Slide"
          />
          <Container>
            <Carousel.Caption className="carousel-caption">
              <p style={{ fontSize: '52px' }}>When troubles crossed path on you</p>
            </Carousel.Caption>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bg2}
            height="500"
            alt="Second Slide"
          />

          <Carousel.Caption className="carousel-caption">
            <p style={{ fontSize: '52px' }}>Hope is never forgotten</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bg3}
            height="500"
            alt="Third Slide"
          />

          <Carousel.Caption className="carousel-caption">
            <p style={{ fontSize: '52px' }}>PHPLA the acronym of help</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bg4}
            height="500"
            alt="Fourth Slide"
          />

          <Carousel.Caption className="carousel-caption">
            <p style={{ fontSize: '52px' }}>Recovery is coming</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bg5}
            height="500"
            alt="Fifth Slide"
          />

          <Carousel.Caption className="carousel-caption">
            <p style={{ fontSize: '52px' }}>An afterthought of joy</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bg6}
            height="500"
            alt="Sixth Slide"
          />

          <Carousel.Caption className="carousel-caption">
            <h3 style={{ fontSize: '72px' }}>Because We Care</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}
    </div>
  );
};

export default Home;
