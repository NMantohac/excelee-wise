import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import ModalImage from 'react-modal-image';
import bg1 from '../../images/bg-1.png';
import bg1Full from '../../images/bg-1-full.png';
import bg2 from '../../images/bg-2.png';
import bg2Full from '../../images/bg-2-full.png';
import bg3 from '../../images/bg-3.png';
import bg3Full from '../../images/bg-3-full.png';
import bg4 from '../../images/bg-4.png';
import bg4Full from '../../images/bg-4-full.png';
import bg5 from '../../images/bg-5.png';
import bg5Full from '../../images/bg-5-full.png';
import bg6 from '../../images/bg-6.png';
import bg6Full from '../../images/bg-6-full.png';
import './style.css';

const Home = () => {
  return (
    <div>
      <Jumbotron className="jumbotron-background">
        <Container>
          <p className="jumbotron-text">Assisting the Homeless</p>
        </Container>
      </Jumbotron>
      <hr />
      <Container style={{ fontFamily: 'Amatic SC, serif', textAlign: 'center' }}>
        <Row style={{ marginTop: '30px', marginBottom: '30px' }}>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <ModalImage small={bg1} large={bg1Full} showRotate="true" />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6} className="home-text-col">
            <p className="home-text-1">When troubles crossed</p>
            <p className="home-text-2">path on you</p>
          </Col>
        </Row>
        <Row style={{ marginBottom: '30px' }}>
          <Col xs={{ span: 12, order: 12 }} sm={{ span: 12, order: 12 }} md={{ span: 6, order: 1 }} lg={{ span: 6, order: 1 }} xl={{ span: 6, order: 1 }} className="home-text-col">
            <p className="home-text-3">Hope is never</p>
            <p className="home-text-4">forgotten</p>
          </Col>
          <Col xs={{ span: 12, order: 1 }} sm={{ span: 12, order: 1 }} md={{ span: 6, order: 12 }} lg={{ span: 6, order: 12 }} xl={{ span: 6, order: 12 }}>
            <ModalImage small={bg2} large={bg2Full} showRotate="true" />
          </Col>
        </Row>
        <Row style={{ marginBottom: '30px' }}>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <ModalImage small={bg3} large={bg3Full} showRotate="true" />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6} className="home-text-col">
            <p className="home-text-5">PHPLA the acronym</p>
            <p className="home-text-6">of help</p>
          </Col>
        </Row>
        <Row style={{ marginBottom: '30px' }}>
          <Col xs={{ span: 12, order: 12 }} sm={{ span: 12, order: 12 }} md={{ span: 6, order: 1 }} lg={{ span: 6, order: 1 }} xl={{ span: 6, order: 1 }} className="home-text-col">
            <p className="home-text-7">Recovery is</p>
            <p className="home-text-8">forthcoming</p>
          </Col>
          <Col xs={{ span: 12, order: 1 }} sm={{ span: 12, order: 1 }} md={{ span: 6, order: 12 }} lg={{ span: 6, order: 12 }} xl={{ span: 6, order: 12 }}>
            <ModalImage small={bg4} large={bg4Full} showRotate="true" />
          </Col>
        </Row>
        <Row style={{ marginBottom: '30px' }}>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <ModalImage small={bg5} large={bg5Full} showRotate="true" />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6} className="home-text-col">
            <p className="home-text-9">An afterthought</p>
            <p className="home-text-10">of joy</p>
          </Col>
        </Row>
        <Row style={{ marginBottom: '30px' }}>
          <Col xs={{ span: 12, order: 12 }} sm={{ span: 12, order: 12 }} md={{ span: 6, order: 1 }} lg={{ span: 6, order: 1 }} xl={{ span: 6, order: 1 }} className="home-text-col">
            <p className="home-text-11">Feeling blessed</p>
            <p className="home-text-12">with a smile</p>
          </Col>
          <Col xs={{ span: 12, order: 1 }} sm={{ span: 12, order: 1 }} md={{ span: 6, order: 12 }} lg={{ span: 6, order: 12 }} xl={{ span: 6, order: 12 }}>
            <ModalImage small={bg6} large={bg6Full} showRotate="true" />
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
